import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TranslatePipe} from '@ngx-translate/core';
import {LangSwitch} from '../lang-switch/lang-switch';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
    TranslatePipe,
    LangSwitch
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private readonly _menuOpen = signal(false);
  menuOpen = this._menuOpen.asReadonly();

  toggleMenu(): void {
    this._menuOpen.update(open => !open);
  }
}
