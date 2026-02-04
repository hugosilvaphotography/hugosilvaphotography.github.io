import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-geracoes-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './geracoes.component.html',
  styleUrls: ['./geracoes.component.css'],
  host: { class: 'questionario-page' }
})
export class GeracoesQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: GeracoesQuestionarioComponent }
];
