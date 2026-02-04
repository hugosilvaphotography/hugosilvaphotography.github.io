import {Injectable, signal} from '@angular/core';

/**
 * Menu item definition.
 */
export interface MenuItem {
  id: string;
  labelKey: string;
  route?: string;
  children?: MenuItem[];
}

/**
 * Service providing the application menu structure and filtering by user role.
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  all = signal<MenuItem[]>([
    // Home
    {
      id: 'pagina-inicial',
      labelKey: 'Página Inicial',
      route: '/',
    },

    // Equipa
    {
      id: 'equipa',
      labelKey: 'Equipa',
      route: '/equipa',
    },

    // Testemunhos
    {
      id: 'testemunhos',
      labelKey: 'Testemunhos',
      route: '/testemunhos',
    },

    // Portfólio
    {
      id: 'portfolio',
      labelKey: 'Portfólio',
      route: '/portfolio',
    },

    // Contacto
    {
      id: 'contacto',
      labelKey: 'Contacto',
      route: '/contacto',
    },
  ]);
}
