import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Call } from 'src/app/services/call';

@Component({
  selector: 'app-call-history',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './call-history.html',
})
export class CallHistoryComponent {
  @Input({ required: true }) history: Call[] = [];
  @Input() isCallActive: boolean = false;
}
