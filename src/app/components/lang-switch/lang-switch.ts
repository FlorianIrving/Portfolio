import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-lang-switch',
  imports: [
    NgOptimizedImage
  ],
  standalone: true,
  templateUrl: './lang-switch.html',
  styleUrl: './lang-switch.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LangSwitch {
  readonly currentLang = signal('de');
  langOpen = signal(false);
  private readonly translate = inject(TranslateService);

  setLang(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }

  toggleLang(): void {
    this.langOpen.update(open => !open);
  }
}

// })
// export class LangSwitch {
//   readonly currentLang = signal('en');
//   langOpen = signal(false);
//   private readonly translate = inject(TranslateService);
//
//   setLang(lang: string): void {
//     this.currentLang.set(lang);
//     this.translate.use(lang);
//   }
//
//   toggleLang(): void {
//     this.langOpen.update(open => !open);
//   }
// }
