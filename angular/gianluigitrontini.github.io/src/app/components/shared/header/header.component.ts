import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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

  @HostListener("window:resize")
  onResize() {
    this.size = {
      ...this.size,
      width: window.innerWidth
    }
  }

  setIsHamburgerOpen(value: boolean): void {
    console.log('hamburger TODO')
  }
}
