import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  imports: [
    TranslatePipe
  ],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css'
})
export class SkillsSection {

}
