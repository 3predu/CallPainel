import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

registerLocaleData(localePt);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  clinicName = 'CLINICA VALIDAÇÕES - JFS (MATRIZ)';
  logoUrl = './logo-clinica.svg';

  currentTime$ = interval(1000).pipe(map(() => new Date()));
}
