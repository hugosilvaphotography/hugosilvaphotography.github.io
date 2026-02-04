import { Component } from '@angular/core';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-portfolio-outros-eventos',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  template: `<app-portfolio-layout [title]="title" [prefix]="prefix" [suffix]="suffix"></app-portfolio-layout>`
})
export class PortfolioOutrosEventosComponent {
  title = 'Outros Eventos';
  prefix = '/imagens/sessões/outros eventos/OutrosEventos (';
  suffix = ').webp';
}

export const routes: Routes = [
  { path: '', component: PortfolioOutrosEventosComponent }
];
