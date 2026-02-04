import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-batizado-questionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './batizado.component.html',
  styleUrls: ['./batizado.component.css'],
  host: { class: 'questionario-page' }
})
export class BatizadoQuestionarioComponent {}

export const routes: Routes = [
  { path: '', component: BatizadoQuestionarioComponent }
];
