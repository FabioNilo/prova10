import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserFavoriteComponent } from './user-favorite/user-favorite.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { FavoriteVideosComponent } from './favorite-videos/favorite-videos.component';

export const routes: Routes = [
    
    {
        path:'', component:HeaderComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:"favorites",component:UserFavoriteComponent, canActivate: [authGuardFn]
    },
    {
        path:'more',component:FavoriteVideosComponent
    }
];
