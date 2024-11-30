import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';


  interface Favorite {
    userId: number;
    videoId: number;
    id: string;
  }

  interface Video {
    id: number;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    views: number;
    likes: number;
    uploadedAt: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthdbService {
  
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email:string | null, password:string):Observable<boolean>{
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users =>{
        const user = users.find(u => u.email === email && u.password === password);
        return !!user
      })
    )
  }

  getVideos():Observable<any>{
    return this.http.get(`${this.apiUrl}/videos`);
  }

  addLikes(videoId:number, currentLikes:number):Observable<any>{
    return this.http.patch(`${this.apiUrl}/videos/${videoId}`, {likes: currentLikes + 1})
  }
  incrementViews(videoId:number,currentViews:number):Observable<any>{
    return this.http.patch(`${this.apiUrl}/videos/${videoId}`,{views: currentViews + 1})

  }

  getFavorites(userId:number):Observable<{ videoId: number }[]>{
    return this.http.get<{videoId: number }[]>(`${this.apiUrl}/favorites?userId=${userId}`)
    
  }

  getVideosByIds(videoIds: number[]): Observable<any[]> {
    const requests = videoIds.map((id) =>
      this.http.get<any>(`${this.apiUrl}/videos/${id}`)
    );
    return forkJoin(requests); 
}

searchVideos(searchTerm: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/videos?title_like=${searchTerm}`).pipe(
    map((videos) =>
      videos.filter((video) =>
        video.title.trim().toLowerCase() === searchTerm.trim().toLowerCase()
      )
    )
  );;
}


}
