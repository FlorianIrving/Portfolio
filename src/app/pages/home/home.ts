import {Component} from '@angular/core';
import {ContactSection} from "../../components/contact-section/contact-section";
import {HeroSection} from "../../components/hero-section/hero-section";
import {ProjectsSection} from "../../components/projects-section/projects-section";
import {SkillsSection} from "../../components/skills-section/skills-section";
import {Content} from '../../components/content/content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactSection,
    HeroSection,
    ProjectsSection,
    SkillsSection,
    Content
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
