import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class FooterSection {
  readonly year = new Date().getFullYear();
}
