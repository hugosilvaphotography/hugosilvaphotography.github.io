import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-equipa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.css'],
  host: { class: 'page-equipa' }
})
export class EquipaComponent {
  /**
   * Team member data. Update `birthDate` to have ages recalc automatically in template.
   * birthDate should be ISO format 'YYYY-MM-DD'.
   */
  members = [
    {
      name: 'Hugo Silva',
      img: '/imagens/gerais/Foto de Perfil - Hugo 2.webp',
      birthDate: '1989-05-17',
      introEnding: 'resido no Porto. Sou um pequeno átomo deste imenso universo que é a Fotografia, apaixonado por ' +
        'capturar momentos únicos e emocionantes em cada sessão.',
      paragraphs: [
        'Em 2014, concluí o meu curso na Contagiarte, no Porto, e desde então tenho me dedicado ao aprimoramento das ' +
        'minhas habilidades e ao aperfeiçoamento da minha técnica. Posso dizer que amo o que faço e estou sempre à ' +
        'procura de novas formas de contar histórias através da minha fotografia.',
        'Acredito que a fotografia tem o poder de capturar não apenas a beleza do mundo, mas também as emoções e a ' +
        'essência de cada pessoa. É por isso que trabalho de perto com os meus clientes para compreender as suas ' +
        'necessidades e desejos, e assim criar imagens que contem as suas histórias de uma forma autêntica e ' +
        'significativa.'
      ]
    },
    {
      name: 'Diogo Pereira',
      img: '/imagens/gerais/Foto de Perfil - Diogo.webp',
      birthDate: '2005-07-02',
      introEnding: 'atualmente mergulho nos estudos da Engenharia Informática no ISEP. Com uma paixão por tecnologia e ' +
        'criatividade, assumi o papel de gestor de redes sociais e segundo fotógrafo na equipa do Hugo.',
      paragraphs: [
        'Além de ser responsável pela gestão das redes sociais, sou também o ponto de contacto com os nossos clientes, ' +
        'garantindo que a comunicação flui de forma eficaz e que cada projeto reflete a essência da marca. Com a minha ' +
        'experiência em desenvolvimento web, trato do nosso site e contribuo para mostrar que o nosso trabalho conta ' +
        'histórias únicas.',
        'Estou entusiasmado em poder combinar a arte da fotografia com as mais recentes tendências digitais, explorando ' +
        'novas formas de captar e partilhar momentos especiais. Vamos juntos dar vida a estas histórias, tanto através ' +
        'das lentes como das linhas de código!'
      ]
    },
    {
      name: 'Elsa Monteiro',
      img: '/imagens/gerais/Foto de Perfil - Elsa.webp',
      birthDate: '1990-08-29',
      introEnding: 'a minha jornada artística ganhou vida na página "Pimpolhas", onde me dedico a criar peças que ' +
        'refletem beleza e singularidade.',
      paragraphs: [
        'Na equipa do Hugo, sou responsável pela decoração dos cenários e pela preparação das grávidas, bebés e outros ' +
        'momentos especiais. A minha missão é transformar cada sessão fotográfica numa experiência visual única, ' +
        'cuidando de todos os detalhes para que o resultado final seja uma verdadeira obra de arte.',
        'Estou entusiasmada por fazer parte desta equipa talentosa, onde juntos, exploramos novas formas de capturar ' +
        'momentos com autenticidade e elegância. O seu projeto será uma fusão de criatividade e sofisticação, sempre ' +
        'com um toque pessoal e artístico.'
      ]
    }
  ];

  /**
   * Calculate age in years from a birth date.
   * Accepts an ISO string (YYYY-MM-DD) or a Date object.
   * Usage in template: {{ getAge(member.birthDate) }}
   */
  getAge(birthDate: string | Date): number {
    const b = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
    if (isNaN(b.getTime())) return NaN;

    const today = new Date();
    let age = today.getFullYear() - b.getFullYear();
    const m = today.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < b.getDate())) {
      age--;
    }
    return age;
  }
}

// When this feature is lazy-loaded under the 'equipa' path, the child route should be ''
export const routes: Routes = [
  { path: '', component: EquipaComponent }
];
