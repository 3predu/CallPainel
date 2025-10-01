import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

registerLocaleData(localePt);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  clinicName = 'CLINICA VALIDAÇÕES - JFS (MATRIZ)';
  logoUrl = 'logo'; // URL da logo de exemplo

  currentTime$ = interval(1000).pipe(map(() => new Date()));
  private timeSubscription!: Subscription;

  ngOnInit(): void {
    // A subscrição é gerenciada pelo pipe async no template,
    // mas pode ser útil se precisar da data no componente.
    this.timeSubscription = this.currentTime$.subscribe();
  }

  ngOnDestroy(): void {
    // Boa prática para limpar a subscrição
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}