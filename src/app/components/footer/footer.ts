import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class FooterSection {
  readonly year = new Date().getFullYear();

  private router = inject(Router);
  private translate = inject(TranslateService);

  public navigate(destination: string): void {
    void this.router.navigate([(this.translate.getCurrentLang() != 'de' ? '/' + this.translate.getCurrentLang() : '') + destination])
  }
}
