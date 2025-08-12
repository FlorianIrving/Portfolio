import {Component} from '@angular/core';
import {Content} from "../../components/content/content";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [
    Content,
    TranslatePipe
  ],
  templateUrl: './imprint.html',
  styleUrl: './imprint.css'
})
export class Imprint {

}
