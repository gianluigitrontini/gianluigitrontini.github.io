import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../../components/homepage/about/about.component';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { ProjectsComponent } from '../../components/homepage/projects/projects.component';
import { TechnologiesComponent } from '../../components/homepage/technologies/technologies.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, TechnologiesComponent, ProjectsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
