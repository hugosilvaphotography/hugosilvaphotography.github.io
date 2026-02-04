import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Footer component displaying application footer information.
 */
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  host: { class: 'layout-footer' }
})

/**
 * Footer component class.
 */
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
