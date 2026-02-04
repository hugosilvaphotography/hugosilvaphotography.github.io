import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-natal-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './natal.component.html',
  styleUrls: ['./natal.component.css'],
  host: { class: 'questionario-page' }
})
export class NatalQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: NatalQuestionarioComponent }
];
