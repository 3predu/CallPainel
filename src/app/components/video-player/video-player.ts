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
  playListId = 'PLKk3t4T21AZLIHnSZu4tWTiviFWDV-YT5'; // ID da playlist do YouTube - fiz uma playlist não listada

  // Variáveis para controlar o video
  playerVars = {
    autoplay: 1,
    controls: 1,
    showinfo: 0,
    rel: 0,
    loop: 1,
    listType: 'playlist' as const,
    list: this.playListId,
  };

  ngAfterViewInit(): void {
    //função para iniciar o vídeo mudo (é impossível o video começar com autoplay + som)
    this.youtubePlayer.mute();
  }
}
