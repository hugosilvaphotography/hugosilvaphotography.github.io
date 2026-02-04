import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-casamento-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './casamento.component.html',
  styleUrls: ['./casamento.component.css'],
  host: { class: 'questionario-page' }
})
export class CasamentoQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: CasamentoQuestionarioComponent }
];
