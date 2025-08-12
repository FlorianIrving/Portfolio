import {Component} from '@angular/core';
import {Content} from '../../components/content/content';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
    Content,
    TranslatePipe
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  goToGitHubJoin(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }

  goToLiveJoin(): void {
    window.open('https://www.irving-webdev.de/projekte/Join', '_blank', 'noopener,noreferrer');
  }

  goToGitHubElPolloLoco(): void {
    window.open('https://github.com/FlorianIrving/join', '_blank', 'noopener,noreferrer');
  }

  goToLiveElPolloLoco(): void {
    window.open('https://www.irving-webdev.de/projekte/ElPolloLoco', '_blank', 'noopener,noreferrer');
  }
}
