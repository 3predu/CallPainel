import { Component } from '@angular/core';

// Interfaces para tipar nossos dados (boa prática)
interface Call {
  ticket: string;
  patient: string;
  location: string;
  time?: string;
}

@Component({
  selector: 'app-call-panel',
  standalone: true,
  imports: [],
  templateUrl: './call-panel.html',
})
export class CallPanelComponent {
  [x: string]: any;

  // Dados Falsos (Mock) para visualização
  currentCall: Call = {
    ticket: 'CG-001N',
    patient: 'J HEBERT - C. GERAL',
    location: 'Guichê 2',
    time: '10:19',
  };

  callHistory: Call[] = [
    {
      ticket: 'CG-001N',
      patient: 'J HEBERT - C. GERAL',
      location: 'Guichê 2',
      time: '10:19',
    },
    {
      ticket: 'CG-001N',
      patient: 'J HEBERT - C. GERAL',
      location: 'Guichê 2',
      time: '10:19',
    },
    {
      ticket: 'CG-001N',
      patient: 'J HEBERT - C. GERAL',
      location: 'Guichê 2',
      time: '10:19',
    },
    {
      ticket: 'CG-001N',
      patient: 'J HEBERT - C. GERAL',
      location: 'Guichê 2',
      time: '10:18',
    },
  ];
}
