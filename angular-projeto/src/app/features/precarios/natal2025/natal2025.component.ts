import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-natal2025',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './natal2025.component.html',
  styleUrls: ['./natal2025.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioNatal2025Component {
  title = 'Preçário de Natal 2025';
  type: 'evento' | 'sessao' = 'sessao';
  portfolioLink = '/portfolio-natal';
}

export const routes: Routes = [
  { path: '', component: PrecarioNatal2025Component }
];
