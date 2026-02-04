import { Component } from '@angular/core';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-portfolio-bebe',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  template: `<app-portfolio-layout [title]="title" [prefix]="prefix" [suffix]="suffix"></app-portfolio-layout>`
})
export class PortfolioBebeComponent {
  title = 'Bebé';
  prefix = '/imagens/sessões/bebés/Bebé (';
  suffix = ').webp';
}

export const routes: Routes = [
  { path: '', component: PortfolioBebeComponent }
];
