import { Component, OnInit } from '@angular/core';
import { UserNavigationComponent } from "../user-navigation/user-navigation.component";
import { VideoListComponent } from "../video-list/video-list.component";
import { PainelLateralComponent } from "../painel-lateral/painel-lateral.component";
import { FavoriteVideosComponent } from "../favorite-videos/favorite-videos.component";
import { RouterLink } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserNavigationComponent, VideoListComponent, PainelLateralComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  profile?: User| undefined | null;
  constructor(private auth:AuthService){
    this.auth.isAuthenticated$.subscribe(isAuthenticade =>{
      if(isAuthenticade){
      }
    })
  }
  ngOnInit(): void {
      const subscribe = this.auth.user$.subscribe({
        next:(profile)=> this.profile = profile
      })
  }
  
  sair(){
    this.auth.logout()
  
    
  }

}
