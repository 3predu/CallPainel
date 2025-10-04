# Painel de Chamadas para Sala de Espera

Este projeto é uma aplicação de página única (SPA) que simula um painel de chamadas para uma sala de espera de clínica. A interface é moderna, reativa e possui animações fluidas para a transição entre os estados de visualização.

A cada nova chamada, a lista de histórico é atualizada em tempo real, exibindo a chamada mais recente no topo. A visualização no painel é limitada aos últimos 4 registros.

O layout foi construído com Tailwind CSS, utilizando uma abordagem responsiva que se adapta a diferentes tamanhos de tela (tamanho mínimo testado visualmente: 1366 x 768).

![Imagem 1](https://github.com/3predu/CallPainel/blob/b1cf6b28bd5d35275e12ea7f8ebcdde2e21a2ad5/public/tela-1.jpeg)

![Imagem 2](https://github.com/3predu/CallPainel/blob/b1cf6b28bd5d35275e12ea7f8ebcdde2e21a2ad5/public/tela-2.jpeg)

## 🛠️ Tecnologias Utilizadas

Framework: Angular (v20+) com AnalogJS

Build Tool: Vite

Linguagem: TypeScript

Estilização: Tailwind CSS

Reatividade: RxJS (para o relógio) e Angular Signals (para o gerenciamento de estado)

Player de Vídeo: @angular/youtube-player

## 🚀 Como Executar o Projeto Localmente

Pré-requisitos
Node.js: Versão 20.19.1 ou superior.

npm (ou um gerenciador de pacotes compatível como yarn ou pnpm).

Instale as dependências:

Bash

npm install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra o projeto no navegador:

O projeto estará disponível em <http://localhost:5173>.

### Como Interagir

Para simular uma nova chamada no painel, pressione a tecla Seta para a Direita (→) no seu teclado e a tela mudará para o "Estado de Chamada".

Após 15 segundos, a tela retornará automaticamente ao estado padrão.

Obs:. Devido as regras de segurança, os navegadores modernos bloqueiam som em vídeo automáticos para não incomodar os usuários, sendo impossível fazer o vídeo iniciar com som automaticamente usando apenas o código da aplicação (Pelo menos não encontrei uma forma de fazer isso.)
