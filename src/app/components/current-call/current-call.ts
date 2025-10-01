import { Component, Input } from '@angular/core';
import { Call } from 'src/app/services/call';

@Component({
  selector: 'app-current-call',
  standalone: true,
  imports: [],
  templateUrl: './current-call.html',
})
export class CurrentCallComponent {
  // Recebe os dados da chamada atual, que pode ser nula
  @Input() callData: Call | null = null;
}
