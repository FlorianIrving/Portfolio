import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lang-switch',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './lang-switch.html',
  styleUrl: './lang-switch.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LangSwitch {
  // readonly currentLang = signal('de');
  // langOpen = signal(false);
  // private readonly translate = inject(TranslateService);

  // toggleLang(): void {
  //   this.langOpen.update(open => !open);
  // }

  public languageList = ['de', 'en'];
  public langOpen = signal(false);
  // public currentLang = inject(signal<string>);
  protected translate = inject(TranslateService);
  private router = inject(Router);

  public toggleLang(): void {
    this.langOpen.update((open: any) => !open);
  }

  public async navigate(language: string): Promise<void> {
    const urlTree = this.router.parseUrl(this.router.url);
    const segments = urlTree.root.children['primary']?.segments.map(s => s.path) || [];

    const urlWithoutLang = this.languageList.includes(segments[0])
      ? segments.slice(1)
      : segments;

    const fragment = urlTree.fragment ?? undefined;
    const queryParams = urlTree.queryParams;


    const newUrl = language !== 'de'
      ? [
        '/',
        language,
        ...urlWithoutLang,
      ]
      : [
        '/',
        ...urlWithoutLang,
      ];

    await this.router.navigate(newUrl, {
      fragment,
      queryParams,
      queryParamsHandling: 'merge',
    });


    this.toggleLang();
  };

  // setLang(lang: string): void {
  //   this.currentLang.set(lang);
  //   this.translate.use(lang);
  // }
  //
  // toggleLang(): void {
  //   this.langOpen.update(open => !open);
  // }
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
