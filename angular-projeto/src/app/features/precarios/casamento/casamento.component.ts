import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-casamento',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './casamento.component.html',
  styleUrls: ['./casamento.component.css'],
  host: {class: 'page-precario'}
})
export class PrecarioCasamentoComponent {
  title = 'Preçário de Casamento';
  subtitle = 'Serviços Fotográficos';
  type: 'evento' | 'sessao' = 'evento';
  portfolioLink = 'portfolio-casamento';
}

export const routes: Routes = [
  {path: '', component: PrecarioCasamentoComponent}
];
