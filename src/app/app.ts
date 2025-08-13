import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {take} from 'rxjs';
import {Language, TranslateService} from '@ngx-translate/core';
import {DOCUMENT, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeEnExtra from '@angular/common/locales/extra/en';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App implements OnInit {
  availableLanguages: any = {'de': {0: localeDe, 1: localeDeExtra}, 'en': {0: localeEn, 1: localeEnExtra}};
  protected readonly title = signal('portfolio');
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(Object.keys(this.availableLanguages));
    for (const language in this.availableLanguages) {
      registerLocaleData(this.availableLanguages[language][0], language, this.availableLanguages[language][1])
    }
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data: any) => {
      const lang: Language = data.lang || this.translate.getBrowserLang() || 'en';
      this.document.documentElement.lang = lang;
      this.translate.use(lang)
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    })
  }
}
