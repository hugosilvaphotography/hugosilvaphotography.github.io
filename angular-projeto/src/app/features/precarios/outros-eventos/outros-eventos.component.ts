import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-outros-eventos',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './outros-eventos.component.html',
  styleUrls: ['./outros-eventos.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioOutrosEventosComponent {
  title = 'Preçário de Outros Eventos';
  type: 'evento' | 'sessao' = 'evento';
  portfolioLink = '/portfolio-outros-eventos';
}

export const routes: Routes = [
  { path: '', component: PrecarioOutrosEventosComponent }
];
