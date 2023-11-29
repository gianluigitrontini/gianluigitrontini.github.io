import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { ProjectComponent } from './project/project.component';

export interface ProjectInterface {
  name: string;
  slug: string;
  repoName: string;
  description: string;
  image: any;
  logo?: any;
  status: string;
  linkToProject: string;
  hasCoverImage: boolean;
  hidden: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectInterface[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.fetchProjects();
  }

  private fetchProjects() {
    this.projectService.fetchProjects$().subscribe((progetti: any) => {
      console.log(progetti)
      this.projects = progetti;
    })
  }
}
