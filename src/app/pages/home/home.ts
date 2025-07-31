import {Component} from '@angular/core';
import {ContactSection} from "../../components/contact-section/contact-section";
import {HeroSection} from "../../components/hero-section/hero-section";
import {ProjectsSection} from "../../components/projects-section/projects-section";
import {SkillsSection} from "../../components/skills-section/skills-section";

@Component({
  selector: 'app-home',
  imports: [
    ContactSection,
    HeroSection,
    ProjectsSection,
    SkillsSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
