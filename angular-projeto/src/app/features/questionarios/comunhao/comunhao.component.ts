import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-comunhao-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comunhao.component.html',
  styleUrls: ['./comunhao.component.css'],
  host: { class: 'questionario-page' }
})
export class ComunhaoQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: ComunhaoQuestionarioComponent }
];
