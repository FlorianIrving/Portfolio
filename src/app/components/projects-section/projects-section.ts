import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {
  private readonly router = inject(Router);

  goToProjects(): void {
    this.router.navigate(['/projects'], {
      fragment: 'projectsTab'
    });
  }
}
