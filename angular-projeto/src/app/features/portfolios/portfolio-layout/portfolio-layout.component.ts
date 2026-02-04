import { Component, Input, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.css']
})
export class PortfolioLayoutComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  @Input() title: string = '';
  @Input() prefix: string | null = null;
  @Input() suffix: string | null = null;
  @Input() gapThreshold: number = 3;

  images: string[] = []; // Simple array of strings for URLs
  loading = false;
  modalOpen = false;
  currentIndex = 0;

  ngOnInit() {
    if (this.prefix && this.suffix) {
      this.loading = true;
      this.discoverImagesAuto();
    }
  }

  async discoverImagesAuto() {
    let index = 1;
    let missingCount = 0;

    while (missingCount < this.gapThreshold) {
      const path = `${this.prefix}${index}${this.suffix}`;
      const exists = await this.checkImage(path);

      if (exists) {
        this.images.push(path);
        missingCount = 0;
        this.cdr.detectChanges();
      } else {
        missingCount++;
      }
      index++;
    }
    this.loading = false;
    this.cdr.detectChanges();
  }

  private checkImage(url: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  openModal(index: number) {
    this.currentIndex = index;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen = false;
    document.body.style.overflow = 'auto';
  }

  navigate(direction: number) {
    if (!this.images.length) return;
    this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
  }
}
