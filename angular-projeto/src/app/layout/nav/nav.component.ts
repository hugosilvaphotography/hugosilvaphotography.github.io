import { Component, ChangeDetectionStrategy, inject, computed, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuService } from '../../services/menu/menu.service';

/**
 * Navigation component displaying the menu based on user role.
 */
@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  host: { class: 'layout-nav' }
})

/**
 * Nav component class.
 */
export class NavComponent {
  private menuService = inject(MenuService);
  private router = inject(Router);

  readonly menu = this.menuService.all;

  /**
   * Checks if the given route is currently active.
   * @param route The route to check.
   * @returns True if the route is active, false otherwise.
   */
  public isActive(route?: string): boolean {
    if (!route) return false;
    return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  // Navigate helper used by template click handlers; prevents default navigation and uses router
  public navigate(route: string | undefined, event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (!route) return;
    void this.router.navigateByUrl(route);
  }
}
