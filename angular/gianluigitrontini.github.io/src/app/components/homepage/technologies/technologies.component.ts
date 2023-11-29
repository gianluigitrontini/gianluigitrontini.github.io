import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTippyModule } from 'ngx-tippy-wrapper';


@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, NgxTippyModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  technologies: {
    name: string;
    url: string;
  }[] = [
      {
        name: "Figma",
        url: "/assets/images/icons/figma.png",
      },
      {
        name: "HTML",
        url: "/assets/images/icons/html5.png",
      },
      {
        name: "CSS",
        url: "/assets/images/icons/css3.png",
      },
      {
        name: "SCSS",
        url: "/assets/images/icons/sass.png",
      },
      {
        name: "Tailwind",
        url: "/assets/images/icons/tailwindcss.png",
      },
      {
        name: "Javascript",
        url: "/assets/images/icons/javascript.png",
      },
      {
        name: "Typescript",
        url: "/assets/images/icons/typescript.png",
      },
      {
        name: "React",
        url: "/assets/images/icons/react.png",
      },
      {
        name: "NextJS",
        url: "/assets/images/icons/nextjs.png",
      },
      {
        name: "Angular",
        url: "/assets/images/icons/angular.png",
      },
      {
        name: "RxJS",
        url: "/assets/images/icons/rxjs.png",
      },
      {
        name: "Ionic",
        url: "/assets/images/icons/ionic.png",
      },
    ];


}
