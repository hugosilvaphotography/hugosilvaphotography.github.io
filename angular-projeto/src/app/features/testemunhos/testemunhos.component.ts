import {Component, ElementRef, ViewChild, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testemunhos.component.html',
  styleUrls: ['./testemunhos.component.css']
})
export class TestemunhosComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Lista de testemunhos (migrada do ficheiro HTML estático)
  testimonials = [
    {
      name: 'Daniela Mesquita',
      text: `Adorei os serviços. Simpáticos, prestáveis com muita empatia.

Conseguiram captar muitos momentos sem andar "em cima de ninguém".

Adorei ❣️`,
      img: '/imagens/testemunhos/Testemunho (10).webp'
    },
    {
      name: 'Susana Sousa',
      text: `Olá Hugo, já vi as fotos e o vídeo!

Está tudo muito bonito, obrigada 🥰`,
      img: '/imagens/testemunhos/Testemunho (9).webp'
    },
    {
      name: 'Sara Mota',
      text: `Obrigada pelo vosso trabalho, simpatia e criatividade! Adorei tudo!!! ❤️🥰`,
      img: '/imagens/testemunhos/Testemunho (8).webp'
    },
    {
      name: 'Marisela Mota',
      text: `Hugo Silva Photography e Pimpolhas Pimpolhas. 2 projetos diferentes mas que tanto se encaixam um no outro.

Obrigada Hugo e Elsa, por todo o vosso carinho e empenho em duas festas tão importantes para nós. O vosso trabalho merece ser divulgado!

Desejo que tenham muito sucesso e já sabem: festas por aqui, só convosco!

OBRIGADA do fundo do ❤️, por conseguirem manifestar tantas competências nos vossos projetos... Somos vossos fãs eternamente.`,
      img: '/imagens/testemunhos/Testemunho (7).webp'
    },
    {
      name: 'Diana Ribeiro',
      text: `Contratamos o vosso serviço para um batizado, durante todo o dia foi simplesmente super profissional.

Adoramos a simpatia e o compromisso, faz-nos sentir sempre como se fossemos família.

Recomendo a 100%!`,
      img: '/imagens/testemunhos/Testemunho (6).webp'
    },
    {
      name: 'Leituras e Brincadeiras',
      text: `Já vimos as fotos. Gostamos siiiim! 🥰

Uma vez mais, muito obrigada. Pela oportunidade, pela simpatia e empatia para connosco!

E claro, obrigada pela recordação com fotos lindas. 😍`,
      img: '/imagens/testemunhos/Testemunho (5).webp'
    },
    {
      name: 'Andreia & Nuno',
      text: `O Hugo é uma pessoa fantástica e muito atenciosa!

Ficamos super à vontade com a sua presença.... ficamos muito contentes por fotografar o nosso casamento!

Foi uma cerimonia simples mas conseguiu captar com atenção todos os detalhes!

Foi super rápido na entrega das fotos e tem boa relação de preço/qualidade para quem não tem muitas possibilidades mas que quer de alguma forma marcar uma ocasiao especial!

Obrigada Hugo e Diogo por todo envolvimento no nosso dia. ❤️❤️`,
      img: '/imagens/testemunhos/Testemunho (4).webp'
    },
    {
      name: 'Sara',
      text: `Um trabalho fantástico, recomendo.

As minhas fotografias ficaram maravilhosas e somos pessoas que não gostamos muito de tirar fotos, mas o Hugo deixa-nos super à vontade.

A sessão correu super bem!

Será para repetir noutras ocasiões com toda a certeza. 😁`,
      img: '/imagens/testemunhos/Testemunho (3).webp'
    },
    {
      name: 'Mónica Nogueira',
      text: `Um trabalho fantástico, que resultou em fotos lindas da minha princesa🥰.

Sessão descontraída e maravilhosa mesmo.`,
      img: '/imagens/testemunhos/Testemunho (2).webp'
    },
    {
      name: 'Diogo Pereira',
      text: `Já tive o prazer de participar em várias sessões do Hugo e percebi que é difícil encontrar palavras que possam capturar verdadeiramente a magia e a paixão que o trabalho dele demonstra, para além disso, a sua forma de trabalhar é verdadeiramente única e inspiradora.

O trabalho do Hugo não é apenas um ofício, mas sim uma forma de arte que toca a alma. A sua capacidade de eternizar momentos fugazes, transmitir emoções profundas e criar memórias duradouras é verdadeiramente extraordinária. Estou eternamente grato por ter tido a oportunidade de testemunhar e experienciar a magia que este fotógrafo traz ao mundo.`,
      img: '/imagens/testemunhos/Testemunho (1).webp'
    }
  ];

  // Captura o evento 'wheel' para transformar o scroll vertical do rato em scroll horizontal do container
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (this.scrollContainer) {
      event.preventDefault();
      this.scrollContainer.nativeElement.scrollLeft += event.deltaY;
    }
  }
}

// When this feature is lazy-loaded under the 'testemunhos' path, the child route should be ''
export const routes: Routes = [
  {path: '', component: TestemunhosComponent}
];
