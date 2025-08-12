import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Content} from "../../components/content/content";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, Content, TranslatePipe],
  templateUrl: './about.html',
})
export class About {
}
