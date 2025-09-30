import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './video-player.html',
  styleUrls: ['./video-player.css']
})

export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('youtubePlayer') youtubePlayer!: YouTubePlayer;
  videoId = 'WdxYgjjPSjg'; // ID do vídeo do YouTube

  // Variáveis para controlar o player
  playerVars = {
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    rel: 0,
    loop: 1,
    playlist: this.videoId, // Para o loop funcionar, o vídeo precisa estar em uma playlist
  };

  ngAfterViewInit(): void {
    this.youtubePlayer.mute();
  }
}