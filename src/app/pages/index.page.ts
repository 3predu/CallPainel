import { Component, computed, HostListener, inject } from '@angular/core';
import { VideoPlayerComponent } from '../components/video-player/video-player';
import { CallDisplayComponent } from '../components/call-display/call-display';
import { CallService } from '../services/call';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { HeaderComponent } from '../components/header/header';
import { CommonModule } from '@angular/common';
import { CallHistoryComponent } from "../components/call-history/call-history";

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    VideoPlayerComponent,
    CallDisplayComponent,
    SidebarComponent,
    HeaderComponent,
    CallHistoryComponent
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
    const call1 = {
      ticket: 'CG-001N',
      patientName: 'JULIO HEBERT',
      category: 'CLINICO GERAL',
      location: 'Guichê 2',
    };
    const call2 = {
      ticket: 'OR-002B',
      patientName: 'PEDRO LUCCA',
      category: 'ORTOPEDIA',
      location: 'Guichê 5',
    };

    const currentTicket = this.callService.currentCall()?.ticket;
    const newCall = currentTicket === 'CG-001N' ? call2 : call1;

    this.callService.triggerNewCall(newCall);
    console.log('Simulação de chamada acionada pela tecla ArrowRight');
  }
}
