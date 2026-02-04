import { Component } from '@angular/core';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-portfolio-gravida',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  template: `<app-portfolio-layout [title]="title" [prefix]="prefix" [suffix]="suffix"></app-portfolio-layout>`
})
export class PortfolioGravidaComponent {
  title = 'Grávida';
  prefix = '/imagens/sessões/grávidas/Grávida (';
  suffix = ').webp';
}

export const routes: Routes = [
  { path: '', component: PortfolioGravidaComponent }
];
