import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-questionario-bebe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bebe.component.html',
  host: { class: 'questionario-page' }
})
export class BebeComponent {}

export const routes: Routes = [
  { path: '', component: BebeComponent }
];
