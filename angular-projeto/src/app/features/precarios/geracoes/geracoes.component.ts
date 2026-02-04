import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-geracoes',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './geracoes.component.html',
  styleUrls: ['./geracoes.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioGeracoesComponent {
  title = 'Preçário de Gerações';
  type: 'evento' | 'sessao' = 'sessao';
  portfolioLink = '/portfolio-geracoes';
}

export const routes: Routes = [
  { path: '', component: PrecarioGeracoesComponent }
];
