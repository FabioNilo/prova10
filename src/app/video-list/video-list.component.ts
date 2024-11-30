import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video-card/video.service';
import { VideoCardComponent } from "../video-card/video-card.component";

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent implements OnInit {
  videos: {
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    added: string;
    author: string;
    runtime: string;
    views: number;
    comments: number;
  }[] = []

  constructor(private videoService :VideoService){}
  ngOnInit(): void {
      this.videos = this.videoService.getVideos()
  }

}
