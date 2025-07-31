import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css'
})
export class FooterSection {
  readonly year = new Date().getFullYear();
}

export class FooterComponent {
}
