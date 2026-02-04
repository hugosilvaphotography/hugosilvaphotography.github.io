import { Component } from '@angular/core';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-portfolio-natal',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  template: `<app-portfolio-layout [title]="title" [prefix]="prefix" [suffix]="suffix"></app-portfolio-layout>`
})
export class PortfolioNatalComponent {
  title = 'Natal';
  prefix = '/imagens/sessões/natal/Natal (';
  suffix = ').webp';
}

export const routes: Routes = [
  { path: '', component: PortfolioNatalComponent }
];
