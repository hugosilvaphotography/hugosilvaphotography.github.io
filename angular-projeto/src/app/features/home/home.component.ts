import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Home component displaying the home page content.
 */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  host: { class: 'page-home' }
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  ngOnInit(): void { try { this.doc.body.classList.add('home-active'); } catch {} }
  ngOnDestroy(): void { try { this.doc.body.classList.remove('home-active'); } catch {} }
}

/**
 * Routes for the home feature module.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent }
];
