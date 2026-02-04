import { Routes } from '@angular/router';
import {AppLayoutComponent} from './layout/app-layout.component';

/**
 * Application routes configuration.
 * Defines the main layout and lazy-loaded feature modules.
 */
export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // Routes do Menu
      { path: '', loadChildren: () => import('./features/home/home.component').then(m => m.routes) },

      { path: 'equipa', loadChildren: () => import('./features/equipa/equipa.component').then(m => m.routes) },
      { path: 'testemunhos', loadChildren: () => import('./features/testemunhos/testemunhos.component').then(m => m.routes) },
      { path: 'contacto', loadChildren: () => import('./features/contacto/contacto.component').then(m => m.routes) },

      { path: 'portfolio', loadChildren: () => import('./features/portfolios/portfolio/portfolio.component').then(m => m.routes) },

      // Routes dos Portfólios
      { path: 'portfolio-gravida', loadChildren: () => import('./features/portfolios/portfolio-gravida.component').then(m => m.routes) },
      { path: 'portfolio-bebe', loadChildren: () => import('./features/portfolios/portfolio-bebe.component').then(m => m.routes) },
      { path: 'portfolio-batizado', loadChildren: () => import('./features/portfolios/portfolio-batizado.component').then(m => m.routes) },
      { path: 'portfolio-comunhao', loadChildren: () => import('./features/portfolios/portfolio-comunhao.component').then(m => m.routes) },
      { path: 'portfolio-outros-eventos', loadChildren: () => import('./features/portfolios/portfolio-outros-eventos.component').then(m => m.routes) },
      { path: 'portfolio-geracoes', loadChildren: () => import('./features/portfolios/portfolio-geracoes.component').then(m => m.routes) },
      { path: 'portfolio-casamento', loadChildren: () => import('./features/portfolios/portfolio-casamento.component').then(m => m.routes) },
      { path: 'portfolio-estudantes', loadChildren: () => import('./features/portfolios/portfolio-estudantes.component').then(m => m.routes) },
      { path: 'portfolio-natal', loadChildren: () => import('./features/portfolios/portfolio-natal.component').then(m => m.routes) },

      // Routes dos Preçários
      { path: 'precario-casamento', loadChildren: () => import('./features/precarios/casamento/casamento.component').then(m => m.routes)},
      { path: 'precario-bebe', loadChildren: () => import('./features/precarios/bebe/bebe.component').then(m => m.routes)},
      { path: 'precario-batizado-comunhao', loadChildren: () => import('./features/precarios/batizado-comunhao/batizado-comunhao.component').then(m => m.routes)},
      { path: 'precario-geracoes', loadChildren: () => import('./features/precarios/geracoes/geracoes.component').then(m => m.routes)},
      { path: 'precario-gravida', loadChildren: () => import('./features/precarios/gravida/gravida.component').then(m => m.routes)},
      { path: 'precario-outros-eventos', loadChildren: () => import('./features/precarios/outros-eventos/outros-eventos.component').then(m => m.routes)},
      //{ path: 'precario-natal-2025', loadChildren: () => import('./features/precarios/natal2025/natal2025.component').then(m => m.routes)},

      // Routes dos Questionários
      { path: 'questionario-casamento', loadChildren: () => import('./features/questionarios/casamento/casamento.component').then(m => m.routes)},
      { path: 'questionario-bebe', loadChildren: () => import('./features/questionarios/bebe/bebe.component').then(m => m.routes)},
      { path: 'questionario-batizado', loadChildren: () => import('./features/questionarios/batizado/batizado.component').then(m => m.routes)},
      { path: 'questionario-comunhao', loadChildren: () => import('./features/questionarios/comunhao/comunhao.component').then(m => m.routes)},
      { path: 'questionario-geracoes', loadChildren: () => import('./features/questionarios/geracoes/geracoes.component').then(m => m.routes)},
      { path: 'questionario-gravida', loadChildren: () => import('./features/questionarios/gravida/gravida.component').then(m => m.routes)},
      { path: 'questionario-outros-eventos', loadChildren: () => import('./features/questionarios/outros-eventos/outros-eventos.component').then(m => m.routes)},
      { path: 'questionario-natal', loadChildren: () => import('./features/questionarios/natal/natal.component').then(m => m.routes)},
      { path: 'questionario-estudantes', loadChildren: () => import('./features/questionarios/estudantes/estudantes.component').then(m => m.routes)},
      { path: 'questionario-satisfacao', loadChildren: () => import('./features/questionarios/satisfacao/satisfacao.component').then(m => m.routes)},

      // Route do Obrigado
      { path: 'obrigado', loadChildren: () => import('./features/obrigado/obrigado.component').then(m => m.routes)},

      // Not Found route (must be the last)
      { path: '**', loadChildren: () => import('./features/not_found/not_found.component').then(m => m.routes) }
    ]
  }

];
