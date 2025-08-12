import {Component} from '@angular/core';
import {Header} from '../header/header';
import {FooterSection} from '../footer/footer';

@Component({
  selector: 'app-content',
  imports: [
    Header,
    FooterSection
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
