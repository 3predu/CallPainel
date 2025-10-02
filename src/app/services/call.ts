import { Injectable, signal } from '@angular/core';

// Modelo para os dados de uma chamada
export interface Call {
  ticket: string;
  patientName: string;
  category: string;
  location: string;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CallService {
  // Estado do serviço de chamadas
  public isCallActive = signal(false); // interruptor
  public currentCall = signal<Call | null>(null); // chamada atual
  public callHistory = signal<Call[]>([]); // Armazena o histórico de chamadas

  private callReturnTimer: any; // Referência para o timer de 15 segundos

  //Dispara uma nova chamada, atualiza os estados e inicia o timer.
  public triggerNewCall(call: Call): void {
    // Limpa qualquer timer anterior para evitar sobreposição
    clearTimeout(this.callReturnTimer);

    // Adiciona a nova chamada ao topo do histórico com um timestamp
    this.callHistory.update((history) => [
      {
        ...call,
        timestamp: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      ...history,
    ]);

    // Define a chamada atual e ativa o "modo chamada"
    this.currentCall.set(call);
    this.isCallActive.set(true);

    // Inicia o timer de 15 segundos para voltar ao estado padrão
    this.callReturnTimer = setTimeout(() => {
      this.returnToDefaultState();
    }, 1500);
  }
  // Retorna ao estado padrão, desativando o "modo chamada"
  public returnToDefaultState(): void {
    this.isCallActive.set(false);
  }
}
