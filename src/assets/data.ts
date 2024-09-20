

export interface TechnologyInterface {
  name: string;
  url: string;
}

// Define the interface for the entire object
interface Technologies {
  [category: string]: TechnologyInterface[];
}

const technologies: Technologies = {
  "Design": [
    {
      name: "Figma",
      url: "/images/icons/figma.png",
    },
    {
      name: "Adobe",
      url: "/images/icons/adobe.png",
    },
    {
      name: "Responsive Design",
      url: "/images/icons/responsive.png",
    },
    {
      name: "Accessibility (WCAG)",
      url: "/images/icons/accessibility.png",
    },
  ],
  "Frontend": [
    {
      name: "HTML",
      url: "/images/icons/html5.png",
    },
    {
      name: "CSS",
      url: "/images/icons/css3.png",
    },
    {
      name: "Javascript",
      url: "/images/icons/javascript.png",
    },
    {
      name: "React",
      url: "/images/icons/react.png",
    },
    {
      name: "NextJS",
      url: "/images/icons/nextjs.png",
    },
    {
      name: "Angular",
      url: "/images/icons/angular.png",
    },
    {
      name: "SCSS",
      url: "/images/icons/sass.png",
    },
    {
      name: "Tailwind",
      url: "/images/icons/tailwindcss.png",
    },

    {
      name: "Typescript",
      url: "/images/icons/typescript.png",
    },

    {
      name: "RxJS",
      url: "/images/icons/rxjs.png",
    },

  ],
  "Mobile": [
    {
      name: "Ionic",
      url: "/images/icons/ionic.png",
    },
    {
      name: "React Native",
      url: "/images/icons/react.png",
    },
    {
      name: "Expo",
      url: "/images/icons/expo.png",
    },

    {
      name: "Firebase",
      url: "/images/icons/firebase.png",
    },
    {
      name: "Kotlin",
      url: "/images/icons/kotlin.png",
    },
    {
      name: "Swift",
      url: "/images/icons/swift.png",
    },
  ],
  "Backend / FullStack": [
    {
      name: "REST API",
      url: "/images/icons/rest.png",
    },
    {
      name: "Node.js",
      url: "/images/icons/node.png",
    },
    {
      name: "MongoDB",
      url: "/images/icons/mongodb.png",
    },
    {
      name: "Firebase",
      url: "/images/icons/firebase.png",
    },
    {
      name: "Appwrite",
      url: "/images/icons/appwrite.png",
    },
  ],
  "DevOps & Tools": [
    {
      name: "Docker",
      url: "/images/icons/docker.png",
    },
    {
      name: "Git (GitHub, GitLab)",
      url: "/images/icons/git.png",
    },
    {
      name: "Webpack",
      url: "/images/icons/webpack.png",
    },
    {
      name: "CI/CD Pipelines",
      url: "/images/icons/cicd.png",
    },

    {
      name: "Vercel",
      url: "/images/icons/vercel.png",
    },
  ],
};

export { technologies };
