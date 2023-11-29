import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../projects.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: ProjectInterface;

}
