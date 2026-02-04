import {ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-precario-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './precario-layout.component.html',
  styleUrls: ['./precario-layout.component.css']
})
export class PrecarioLayoutComponent implements OnChanges {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() type: 'evento' | 'sessao' = 'evento';
  // Backwards-compatible single link
  @Input() portfolioLink?: string;
  // allow multiple links with optional labels
  @Input() portfolioLinks?: { href: string; label?: string }[];

  termsHtml: SafeHtml | null = null;

  private cdr = inject(ChangeDetectorRef);
  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] || changes['title']) {
      this.loadTerms();
    }
  }

  // Returns the public path to the terms markdown for the given type
  get termsPath(): string {
    if (this.type === 'evento') return '/termos-condicoes/termos-condicoes-eventos.md';
    // fallback to a generic terms file for sessions
    return '/termos-condicoes/termos-condicoes-sessoes.md';
  }

  private async loadTerms() {
    try {
      // Faz o fetch do ficheiro markdown
      const res = await fetch(this.termsPath);

      if (!res.ok) {
        this.termsHtml = this.sanitizer.bypassSecurityTrustHtml('<p>Termos não encontrados no caminho: ' + this.termsPath + '</p>');
        this.cdr.detectChanges();
        return;
      }

      const md = await res.text();
      const html = this.simpleMarkdownToHtml(md);
      this.termsHtml = this.sanitizer.bypassSecurityTrustHtml(html);
      this.cdr.detectChanges(); // Garante que o Angular atualiza o ecrã
    } catch (e) {
      this.termsHtml = this.sanitizer.bypassSecurityTrustHtml('<p>Erro técnico ao carregar os termos.</p>');
      this.cdr.detectChanges();
    }
  }

  private simpleMarkdownToHtml(md: string): string {
    const lines = md.split(/\r?\n/);
    const out: string[] = [];

    let i = 0;
    let headingCount = 0;
    let previousTitleWasAlone = false; // track if last output was a title without content (so it already ends with a trailing <br/>)

    while (i < lines.length) {
      const raw = lines[i];
      const line = raw.trim();

      if (!line) {
        // skip empty lines (they separate paragraphs)
        i++;
        continue;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (headingMatch) {
        // If this is not the first heading, insert enters so that total spacing before a heading is two breaks.
        if (headingCount >= 1) {
          if (previousTitleWasAlone) {
            // previous title already added one <br/>, so add one more to reach two
            out.push('<br/>');
          } else {
            // otherwise add two breaks
            out.push('<br/>');
          }
        }

        headingCount++;
        const titleText = this.inlineFormatting(headingMatch[2]);

        // Lookahead: if next non-empty line exists and is not a heading, combine it into the same paragraph
        let j = i + 1;
        let combinedContent: string[] = [];
        while (j < lines.length) {
          const nextRaw = lines[j];
          const nextLine = nextRaw.trim();
          if (!nextLine) break; // blank line -> stop combining
          const nextHeading = nextLine.match(/^(#{1,6})\s+(.*)$/);
          if (nextHeading) break; // next is heading -> don't combine
          combinedContent.push(nextLine);
          j++;
        }

        if (combinedContent.length > 0) {
          // Combine title and content in same paragraph with one line break after the title
          const contentText = this.inlineFormatting(combinedContent.join(' '));
          out.push('<p><strong>' + titleText + '</strong><br/>' + contentText + '</p>');
          // previous title is not alone (it had content)
          previousTitleWasAlone = false;
          // advance i to j (we consumed those lines)
          i = j;
          continue;
        } else {
          // No following content to combine: output title alone with a trailing <br/>
          out.push('<p><strong>' + titleText + '</strong><br/></p>');
          previousTitleWasAlone = true;
          i++;
          continue;
        }
      }

      // Normal paragraph: collect consecutive non-empty, non-heading lines
      let paraLines: string[] = [line];
      let k = i + 1;
      while (k < lines.length) {
        const next = lines[k].trim();
        if (!next) break;
        if (next.match(/^(#{1,6})\s+(.*)$/)) break;
        paraLines.push(next);
        k++;
      }
      out.push('<p>' + this.inlineFormatting(paraLines.join(' ')) + '</p>');
      previousTitleWasAlone = false;
      i = k;
    }

    return out.join('\n');
  }

  private inlineFormatting(text: string): string {
    // Converte **texto** em negrito
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return text;
  }
}
