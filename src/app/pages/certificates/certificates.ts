import {Component} from '@angular/core';
import {Content} from "../../components/content/content";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-certificates',
  imports: [
    Content,
    TranslatePipe
  ],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
  goToLinkedIn(): void {
    window.open('https://www.linkedin.com/in/florian-irving-6174572a2/', '_blank', 'noopener,noreferrer');
  }

  goToCV(): void {
    window.open('https://www.irving-webdev.de/cv_pw.pdf', '_blank', 'noopener,noreferrer');
  }
}
