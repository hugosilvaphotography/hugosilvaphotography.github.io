import { Component } from '@angular/core';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-portfolio-casamento',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  template: `<app-portfolio-layout [title]="title" [prefix]="prefix" [suffix]="suffix"></app-portfolio-layout>`
})
export class PortfolioCasamentoComponent {
  title = 'Casamento';
  prefix = '/imagens/sessões/casamentos/Casamento (';
  suffix = ').webp';
}

export const routes: Routes = [
  { path: '', component: PortfolioCasamentoComponent }
];
