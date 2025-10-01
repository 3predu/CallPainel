import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './video-player.html',
  styleUrls: ['./video-player.css'],
  host: {
    class: 'w-full h-full flex items-center justify-center overflow-hidden', // Transforma o componente em um container flex com tamanho completo e centralizado
  },
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('youtubePlayer') youtubePlayer!: YouTubePlayer; // Viewchield() para acessar o player do YouTube (elemento filho html), com as propriedades da API do YouTube.
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

  ngAfterViewInit(): void { //função para iniciar o vídeo mudo
    this.youtubePlayer.mute();
  }
}
