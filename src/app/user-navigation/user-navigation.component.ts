import { Component } from '@angular/core';
import { AuthdbService } from '../authdb.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-navigation',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-navigation.component.html',
  styleUrl: './user-navigation.component.css'
})
export class UserNavigationComponent {
  searchTerm: string = ''; 
  searchResults: any[] = []; 

  constructor(private authService: AuthdbService) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.authService.searchVideos(this.searchTerm.trim()).subscribe((results) => {
        this.searchResults = results;
      });
    }else{
      this.searchResults = []
    }
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
}
