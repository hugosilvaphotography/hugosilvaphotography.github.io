import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-gravida',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './gravida.component.html',
  styleUrls: ['./gravida.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioGravidaComponent {
  title = 'Preçário de Grávida';
  type: 'evento' | 'sessao' = 'sessao';
  portfolioLink = '/portfolio-gravida';
}

export const routes: Routes = [
  { path: '', component: PrecarioGravidaComponent }
];
