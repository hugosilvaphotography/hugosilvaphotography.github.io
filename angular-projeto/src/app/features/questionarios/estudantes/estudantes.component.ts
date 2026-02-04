import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-estudantes-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css'],
  host: { class: 'questionario-page' }
})
export class EstudantesQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: EstudantesQuestionarioComponent }
];
