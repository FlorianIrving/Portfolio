import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {LangSwitch} from '../lang-switch/lang-switch';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    TranslatePipe,
    LangSwitch
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router);
  private translate = inject(TranslateService);
  private readonly _menuOpen = signal(false);
  menuOpen = this._menuOpen.asReadonly();

  toggleMenu(): void {
    this._menuOpen.update(open => !open);
  }

  public navigate(destination: string): void {
    this._menuOpen.update(open => !open);
    this.router.navigate([(this.translate.getCurrentLang() != 'de' ? '/' + this.translate.getCurrentLang() : '') + destination])
  }
}
