import { Component, DestroyRef, inject } from '@angular/core';
import { AuthdbService } from '../authdb.service';
import { AuthService, User } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-favorite.component.html',
  styleUrl: './user-favorite.component.css'
})
export class UserFavoriteComponent {
  profile?: User| undefined | null;
  isMenuOpen = false;
  private onDestroy = inject(DestroyRef)
  favoriteVideos: any[] = [];
  userId: number = 2;
  constructor(private authService :AuthdbService, private Auth0:AuthService){}

  loadFavoriteVideos(){
    this.authService.getFavorites(this.userId).subscribe((favorites: { videoId: number }[])=>{
      const videosIds = favorites.map((fav:{videoId:number})=>fav.videoId);
      if (videosIds.length > 0){
        this.authService.getVideosByIds(videosIds).subscribe((videos)=>{
          this.favoriteVideos = videos
        })
      }else{
        this.favoriteVideos= []
      }
      
    })
  }
  ngOnInit(): void {
    this.loadFavoriteVideos();
    const subscribe =  this.Auth0.user$.subscribe({
      next: (profile)=> this.profile = profile
    })

    this.onDestroy.onDestroy(()=>{
      subscribe.unsubscribe()
    })
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.Auth0.logout({ returnTo: window.location.origin }as any);
  }

  likeVideos(video:any){
    return this.authService.addLikes(video.id, video.likes).subscribe((updateVideos)=>{
       video.likes = updateVideos;
       location.reload()
     })
   }
 
   watchVideo(video:any){
      return this.authService.incrementViews(video.id, video.views).subscribe((updateVideo)=>{
       video.views = updateVideo.views;
       window.open(video.url, '_black');
       location.reload()
     })
   }

  playVideo(url: string): void {
    window.open(url, '_blank');
  }
}
