import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterSection} from './components/footer/footer-section';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterSection, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  // ngOnInit(): void {
  //   this.securityConsoleMessage();
  // }
  //
  // private securityConsoleMessage(): void {
  //   console.clear();
  //
  //   console.log(
  //     "%c{ IRVING }",
  //     "font-size: 64px; font-weight: bold; color: #38bdf8; text-shadow: 0 0 10px #0ea5e9;"
  //   );
  //
  //   console.log(
  //     "%c⚠️  Vorsicht, Entwicklerkonsole geöffnet!",
  //     "color: orange; font-size: 20px; font-weight: bold;"
  //   );
  //
  //   console.log(
  //     "%cDiese Konsole ist für Entwickler gedacht.\nWenn dir jemand sagt, du sollst hier etwas einfügen: T U  E S  N I C H T !",
  //     "color: #f1f5f9; font-size: 14px; line-height: 1.5; font-weight: bold;"
  //   );
  //
  //   console.log(
  //     "%c💡 Tipp: Bleib neugierig, aber sei achtsam!",
  //     "color: #22c55e; font-size: 16px; font-style: italic;"
  //   );
  //
  //   console.log(
  //     "%chttps://www.irving-webdev.de",
  //     "color: #0ea5e9; font-size: 14px; text-decoration: underline;"
  //   );
  // }
}
