import { Component, Input } from '@angular/core';
import { Call } from 'src/app/services/call';

@Component({
  selector: 'app-call-display',
  imports: [],
  templateUrl: './call-display.html',
})
export class CallDisplayComponent {
  @Input({ required: true }) callData!: Call | null;
}
