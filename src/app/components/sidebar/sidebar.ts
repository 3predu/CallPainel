import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCallComponent } from '../current-call/current-call';
import { CallHistoryComponent } from '../call-history/call-history';
import { Call } from 'src/app/services/call';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CurrentCallComponent, CallHistoryComponent],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  @Input() currentCall: Call | null = null;
  @Input() history: Call[] = [];
  @Input() isCallActive: boolean = false;
}
