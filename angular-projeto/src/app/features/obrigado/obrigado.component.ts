import { Component, OnInit, HostListener } from '@angular/core';
import {Router, Routes} from '@angular/router';
import {PortfolioComponent} from '../portfolios/portfolio/portfolio.component';

@Component({
  selector: 'app-obrigado',
  standalone: true,
  templateUrl: './obrigado.component.html',
  styleUrls: ['./obrigado.component.css'],
})
export class ObrigadoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // redireciona para a home após 5s
    setTimeout(() => this.router.navigate(['/']), 5000);

    // esconde o menu ao clicar em qualquer lado
    document.addEventListener('click', () => {
      const menu = document.getElementById('customMenu');
      if (menu) menu.style.display = 'none';
    });
  }

  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    const menu = document.getElementById('customMenu');
    if (menu) {
      menu.style.top = event.pageY + 'px';
      menu.style.left = event.pageX + 'px';
      menu.style.display = 'block';
    }
  }
}

export const routes: Routes = [
  {path: '', component: ObrigadoComponent}
];
