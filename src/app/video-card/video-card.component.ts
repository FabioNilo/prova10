import { Component, Input, input, OnInit } from '@angular/core';





@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
 @Input() videos!: {
  title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    added: string;
    author: string;
    runtime: string;
    views: number;
    comments: number;
 }

}
