import { Component, HostListener, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header';
import { VideoPlayerComponent } from '../components/video-player/video-player';
import { CallDisplayComponent } from '../components/call-display/call-display';
import { CallHistoryComponent } from '../components/call-history/call-history';
import { CallService } from '../services/call';
import { SidebarComponent } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    HeaderComponent,
    VideoPlayerComponent,
    CallDisplayComponent,
    CallHistoryComponent,
    SidebarComponent,
  ],

  templateUrl: './index.page.html',
})
export default class HomeComponent {
  // Injeta o serviço no componente
  callService = inject(CallService);

  @HostListener('window:keydown.ArrowRight', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    event.preventDefault(); // Previne o comportamento padrão da tecla no navegador
    this.simulateCall(); // Chama a função de simulação
  }

  // Função para o botão de simulação
  simulateCall() {
    this.callService.triggerNewCall({
      ticket: 'CG-001N',
      patientName: 'JULIO HEBERT',
      category: 'CLINICO GERAL',
      location: 'Guichê 2',
    });
    console.log('Simulação de chamada acionada pela tecla ArrowRight');
  }
}
