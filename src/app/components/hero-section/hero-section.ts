import {ChangeDetectionStrategy, Component, computed, OnInit, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule, TranslatePipe],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection implements OnInit {
  text = signal<string>('');
  currentWordIndex = signal<number>(0);
  currentCharIndex = signal<number>(0);
  deleting = signal<boolean>(false);
  readonly icons = signal([
    // {src: '/icons/html.svg', alt: 'HTML Icon'},
    // {src: '/icons/css.svg', alt: 'CSS Icon'},
    {src: '/icons/javascript.svg', alt: 'JavaScript Icon'},
    {src: '/icons/angular.svg', alt: 'Angular Icon'},
    {src: '/icons/typescript.svg', alt: 'TypeScript Icon'},
    {src: '/icons/react.svg', alt: 'React Icon'},
    {src: '/icons/git.svg', alt: 'Git Icon'},
    {src: '/icons/api.svg', alt: 'Api Icon'},
    {src: '/icons/firebase.svg', alt: 'Firebase Icon'},
    // {src: '/icons/i18next.png', alt: 'i18next Icon'},
    {src: '/icons/linux.svg', alt: 'Linux Icon'},
    // {src: '/icons/material-design.svg', alt: 'Material Design Icon'},
    {src: '/icons/python.svg', alt: 'Python Icon'},
    // {src: '/icons/scrum.svg', alt: 'Scrum Icon'},
    // {src: '/icons/vuejs.svg', alt: 'VueJs Icon'},
  ]);
  readonly iconCount = computed(() => this.icons().length);
  private words = ['Frontend Developer', 'Problem Solver', 'Clean Coder'];

  getOrbitTransform(index: number): string {
    const total = this.iconCount();
    const angle = (360 / total) * index;
    const containerSize = 150;
    const iconSize = 24;
    const radius = (containerSize - iconSize) / 2;
    return `rotate(${angle}deg) translateY(-${radius}px)`;
  }

  ngOnInit(): void {
    this.type();
  }

  private full(): string[] {
    return this.words;
  }

  private type(): void {
    const words = this.full();
    const word = words[this.currentWordIndex()];
    const charIndex = this.currentCharIndex();
    const isDeleting = this.deleting();

    if (!isDeleting) {
      this.text.set(word.slice(0, charIndex + 1));
      this.currentCharIndex.update(i => i + 1);

      if (charIndex + 1 === word.length) {
        this.deleting.set(true);
        setTimeout(() => this.type(), 1000);
        return;
      }
    } else if (charIndex === 0) {
      this.deleting.set(false);
      this.currentWordIndex.update(i => (i + 1) % words.length);
      setTimeout(() => this.type(), 500);
      return;
    } else {
      this.text.set(word.slice(0, charIndex - 1));
      this.currentCharIndex.update(i => i - 1);
    }

    setTimeout(() => this.type(), isDeleting ? 60 : 100);
  }
}

