import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Header component displaying the application header with user info and logout functionality.
 */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  host: { class: 'layout-header' }
})

/**
 * Header component class.
 */
export class HeaderComponent {
}
