import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-projects-section',
  imports: [
    TranslatePipe
  ],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {
  private readonly router = inject(Router);
  private translate = inject(TranslateService);


  public navigate(destination: string): void {
    void this.router.navigate([(this.translate.getCurrentLang() != 'de' ? '/' + this.translate.getCurrentLang() : '') + destination])
  }

  goToGitHubJoin(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }

  goToLiveJoin(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }

  goToGitHubElPolloLoco(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }

  goToLiveElPolloLoco(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }
}
