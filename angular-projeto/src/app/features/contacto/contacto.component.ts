import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  host: { class: 'page-contacto' }
})
export class ContactoComponent {}

// When this feature is lazy-loaded under the 'contacto' path, the child route should be ''
export const routes: Routes = [
  { path: '', component: ContactoComponent }
];
