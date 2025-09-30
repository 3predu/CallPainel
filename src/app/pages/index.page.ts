import { Component } from '@angular/core';
import { CallDisplay } from '../components/call-display/call-display';
import { VideoPlayerComponent } from '../components/video-player/video-player';

@Component({
  selector: 'app-home',
  imports: [VideoPlayerComponent, CallDisplay],
  standalone: true,
  template: `
    <main class="bg-gray-200 w-screen h-screen p-8 flex gap-8">
        <div class="w-[70%]">
            <app-video-player class="w-full h-full"></app-video-player>
        </div>

        <div class="w-[30%]">
            <app-call-display class="w-full h-full"></app-call-display>
        </div>
    </main>
  `,
})
export default class HomeComponent { }