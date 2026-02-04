import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-bebe',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioBebeComponent {
  title = 'Preçário de Bebé';
  type: 'evento' | 'sessao' = 'sessao';
  portfolioLink = '/portfolio-bebe';
}

export const routes: Routes = [
  { path: '', component: PrecarioBebeComponent }
];
