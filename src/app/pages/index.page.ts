import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header';
import { VideoPlayerComponent } from '../components/video-player/video-player';
import { CallPanelComponent } from '../components/call-panel/call-panel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, VideoPlayerComponent, CallPanelComponent],
  template: `
    <div class="flex flex-col h-screen w-screen bg-gray-100 font-custom">
      <app-header></app-header>
      <main class="flex-grow p-6 lg:p-8 h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          <div class="lg:col-span-2 h-full flex items-center justify-center">
            <app-video-player></app-video-player>
          </div>
          <div
            class="flex-grow bg-white rounded-lg shadow-md p-4 overflow-y-auto"
          >
            <div class="lg:col-span-1 h-full">
              <app-call-panel></app-call-panel>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
})
export default class HomeComponent {}
