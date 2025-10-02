import { Injectable, signal } from '@angular/core';

// Modelo para os dados de uma chamada
export interface Call {
  ticket: string;
  patientName: string;
  category: string;
  location: string;
  timestamp?: string; // Adiciona um campo opcional para o timestamp
}

@Injectable({
  providedIn: 'root',
})
export class CallService {
  // Estado do serviço de chamadas
  public isCallActive = signal(false); // O painel está em modo "chamada"?
  public currentCall = signal<Call | null>(null); // Qual a chamada em destaque?
  public callHistory = signal<Call[]>([]); // Qual o histórico de chamadas?

  private callReturnTimer: any; // Referência para o timer de 15 segundos

  constructor() {}

  /**
   * Dispara uma nova chamada, atualiza os estados e inicia o timer.
   * @param call - Um objeto com os dados da nova chamada.
   */
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
    }, 15000); // 15 segundos
  }

  //Retorna a aplicação para o estado visual padrão.
  public returnToDefaultState(): void {
    this.isCallActive.set(false);
  }
}
