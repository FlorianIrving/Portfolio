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
    window.open('https://github.com/FlorianIrving/ElPolloLoco', '_blank', 'noopener,noreferrer');
  }

  goToLiveElPolloLoco(): void {
    window.open('https://www.irving-webdev.de/projekte/ElPolloLoco', '_blank', 'noopener,noreferrer');
  }

  goToGitHubVideoflix(): void {
    window.open('https://github.com/FlorianIrving/Videoflix-Backend', '_blank', 'noopener,noreferrer');
  }

  // goToLiveVideoflix(): void {
  //   window.open('https://www.irving-webdev.de/projekte/ElPolloLoco', '_blank', 'noopener,noreferrer');
  // }

  goToGitHubCoderr(): void {
    window.open('https://github.com/FlorianIrving/Coderr', '_blank', 'noopener,noreferrer');
  }

  // goToLiveCoderr(): void {
  //   window.open('https://www.irving-webdev.de/projekte/ElPolloLoco', '_blank', 'noopener,noreferrer');
  // }
}
