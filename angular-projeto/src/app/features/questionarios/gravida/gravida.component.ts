import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gravida-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gravida.component.html',
  styleUrls: ['./gravida.component.css'],
  host: { class: 'questionario-page' }
})
export class GravidaQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: GravidaQuestionarioComponent }
];
