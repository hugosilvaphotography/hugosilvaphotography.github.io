import { Component } from '@angular/core';
import { PrecarioLayoutComponent } from '../precario-layout/precario-layout.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-batizado-comunhao',
  standalone: true,
  imports: [PrecarioLayoutComponent],
  templateUrl: './batizado-comunhao.component.html',
  styleUrls: ['./batizado-comunhao.component.css'],
  host: { class: 'page-precario' }
})
export class PrecarioBatizadoComunhaoComponent {
  title = 'Preçário de Batizado e Comunhão';
  subtitle = 'Serviços Fotográficos';
  type: 'evento' | 'sessao' = 'evento';
  links = [
    { href: '/portfolio-batizado', label: 'Ver Portfólio de Batizado' },
    { href: '/portfolio-comunhao', label: 'Ver Portfólio de Comunhão' }
  ];
}

export const routes: Routes = [
  { path: '', component: PrecarioBatizadoComunhaoComponent }
];
