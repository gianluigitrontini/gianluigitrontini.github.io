import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isHamburgerOpen = false;

  navigation = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  size: { height: number; width: number; } = { width: 1024, height: 0 };
  title = 'gianluigitrontini.github.io';

  setIsHamburgerOpen(value: boolean): void {
    console.log('hamburger TODO')
  }
}
