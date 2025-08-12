import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {take} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App implements OnInit {
  protected readonly title = signal('portfolio');
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data: any) => {
      this.document.documentElement.lang = data.lang;
      this.translate.use(data.lang)
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    })
  }
}
