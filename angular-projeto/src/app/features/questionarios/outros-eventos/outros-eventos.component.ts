import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-outros-eventos-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './outros-eventos.component.html',
  styleUrls: ['./outros-eventos.component.css'],
  host: { class: 'questionario-page' }
})
export class OutrosEventosQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: OutrosEventosQuestionarioComponent }
];
