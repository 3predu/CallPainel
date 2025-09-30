import { Component } from '@angular/core';
import { VideoPlayerComponent } from "../components/video-player/video-player";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoPlayerComponent],
  template: `
  <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-4xl p-4">
      <app-video-player></app-video-player>
    </div>
  </main>
    
  `,
})
export default class HomeComponent { }