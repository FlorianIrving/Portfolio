import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  imports: [],
  templateUrl: './lang-switch.html',
  styleUrl: './lang-switch.css'
})

export class LangSwitch {
  private readonly _langOpen = signal(false);
  langOpen = this._langOpen.asReadonly();

  toggleLang(): void {
    this._langOpen.update(open => !open);
  }
}
