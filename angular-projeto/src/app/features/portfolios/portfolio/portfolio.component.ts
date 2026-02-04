import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  host: {class: 'page-portfolio'}
})
export class PortfolioComponent {
  categories = [
    {
      title: 'Grávida',
      img: '/imagens/sessões/grávidas/Grávida (4).webp',
      desc: 'A beleza e serenidade da maternidade.',
      link: '/portfolio-gravida',
      imgPos: 'img-pos-top'
    },
    {
      title: 'Bebé',
      img: '/imagens/sessões/bebés/Bebé (15).webp',
      desc: 'Primeiros sorrisos e momentos únicos.',
      link: '/portfolio-bebe',
      imgPos: 'img-pos-center'
    },
    {
      title: 'Batizado',
      img: '/imagens/sessões/batizados/Batizado (29).webp',
      desc: 'Ritual sagrado cheio de alegria.',
      link: '/portfolio-batizado',
      imgPos: 'img-pos-center'
    },
    {
      title: 'Comunhão',
      img: '/imagens/sessões/comunhões/Comunhão (5).webp',
      desc: 'Pureza e espiritualidade em família.',
      link: '/portfolio-comunhao',
      imgPos: 'img-pos-center'
    },
    {
      title: 'Outros Eventos',
      img: '/imagens/sessões/outros eventos/OutrosEventos (22).webp',
      desc: 'Memórias vívidas para qualquer ocasião.',
      link: '/portfolio-outros-eventos',
      imgPos: 'img-pos-center'
    },
    {
      title: 'Gerações',
      img: '/imagens/sessões/gerações/Gerações (20).webp',
      desc: 'Conexão familiar e legado.',
      link: '/portfolio-geracoes',
      imgPos: 'img-pos-top'
    },
    {
      title: 'Casamento',
      img: '/imagens/sessões/casamentos/Casamento (33).webp',
      desc: 'A história única do vosso amor.',
      link: '/portfolio-casamento',
      imgPos: 'img-pos-top'
    },
    {
      title: 'Estudantes',
      img: '/imagens/sessões/estudantes/Estudantes (9).webp',
      desc: 'Celebrar percursos e amizades.',
      link: '/portfolio-estudantes',
      imgPos: 'img-pos-top'
    },
    {
      title: 'Natal',
      img: '/imagens/sessões/natal/Natal (5).webp',
      desc: 'A magia e alegria da época festiva.',
      link: '/portfolio-natal',
      imgPos: 'img-pos-top'
    }
  ];
}

export const routes: Routes = [
  {path: '', component: PortfolioComponent}
];
