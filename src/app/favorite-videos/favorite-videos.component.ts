import { Component, OnInit } from '@angular/core';
import { AuthdbService } from '../authdb.service';
import { Router, RouterLink } from '@angular/router';
import { UserNavigationComponent } from "../user-navigation/user-navigation.component";

@Component({
  selector: 'app-favorite-videos',
  standalone: true,
  imports: [UserNavigationComponent,RouterLink],
  templateUrl: './favorite-videos.component.html',
  styleUrl: './favorite-videos.component.css'
})
export class FavoriteVideosComponent implements OnInit {
  videos: any[]=[]

  constructor(private authDbService: AuthdbService, private router:Router){}

  loadFavoriteVideos(){
    this.authDbService.getVideos().subscribe((data)=>{
      this.videos= data
    })
  }

  ngOnInit(): void {
    this.loadFavoriteVideos()
      
  }

  likeVideos(video:any){
   return this.authDbService.addLikes(video.id, video.likes).subscribe((updateVideos)=>{
      video.likes = updateVideos;
      location.reload()
    })
  }

  watchVideo(video:any){
     return this.authDbService.incrementViews(video.id, video.views).subscribe((updateVideo)=>{
      video.views = updateVideo.views;
      window.open(video.url, '_black');
      location.reload()
    })
  }



}
