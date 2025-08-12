import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {

}
