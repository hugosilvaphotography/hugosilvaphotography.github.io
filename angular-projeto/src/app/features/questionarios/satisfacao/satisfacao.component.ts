import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-satisfacao-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './satisfacao.component.html',
  styleUrls: ['./satisfacao.component.css'],
  host: { class: 'questionario-page' }
})
export class SatisfacaoQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: SatisfacaoQuestionarioComponent }
];
