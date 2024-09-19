
import type { ProjectInterface } from "../components/Homepage/Projects/Projects.astro";

export interface TechnologyInterface {
  name: string;
  url: string;
}

// Define the interface for the entire object
interface Technologies {
  [category: string]: TechnologyInterface[];
}

const projects: ProjectInterface[] = [
  {
    name: "Carousel Learning",
    slug: "carousel-learning",
    repoName: "carousel-learning",
    description:
      "Carousel is an online tool that helps students to embed knowledge in their long-term memory. Developed with Aircury.",
    image: "/images/projects/carousel-banner.png",
    logo: "/images/projects/logos/carousel-logo.png",
    status: "Active",
    linkToProject: "https://carousel-learning.com",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "EntreLibros",
    slug: "entrelibros",
    repoName: "entrelibros",
    description:
      "Find new adventures on paper; Recommend your favorite book to your friends; Do you remember that one they told you about? All this... and more!",
    image: "/images/projects/entrelibros-banner.png",
    logo: "/images/projects/logos/entrelibros-logo.png",
    status: "Active",
    linkToProject: "https://entrelibros.net",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "RiseRosaRage",
    slug: "rise-rosa-rage",
    repoName: "rise-rosa-rage",
    description:
      "Global Socio-Political & Solidarity Graphics since the 60s. Developed with Aircury.",
    linkToProject: "",
    image: "/images/projects/rise-rosa-rage-banner.png",
    logo: "/images/projects/logos/rise-rosa-rage-logo.png",
    status: "In Progress",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "Aircury Connector",
    slug: "connector",
    repoName: "aircury-connector",
    linkToProject: "https://www.aircury.com/connector",
    description:
      "Make copies of source datasets and lift and shift that data into your own environment, with zero hassle and zero development time for you!",
    image: "/images/projects/connector-banner.png",
    logo: "/images/projects/logos/connector-logo.png",
    status: "Active",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "Aircury School Verify",
    slug: "verify",
    repoName: "aircury-school-verify",
    linkToProject: "https://www.aircury.com/verify",
    description:
      "Aircury's school picker offers a fast and easy way for a user to select any English or Welsh school so that you can embed those details accurately in your product's database.",
    image: "/images/projects/verify-banner.png",
    logo: "/images/projects/logos/verify-logo.png",
    status: "Active",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "Danilo Barzaghini - Website",
    slug: "danilo-web",
    repoName: "danilo-barzaghini-web",
    linkToProject: "https://gianluigitrontini.github.io/danilo-barzaghini-web/",
    description:
      "Danilo Barzaghini's multi-language personal website. Project from Fiverr.",
    image: "/images/projects/danilo-web-banner.png",
    status: "Demo",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "The Quiet Guy - Portfolio",
    slug: "quietguy-web",
    repoName: "thequietguy-web",
    linkToProject: "https://gianluigitrontini.github.io/thequietguy-web/",
    description: "TheQuietGuy's portfolio website. Project from Fiverr.",
    image: "/images/projects/thequietguy-banner.png",
    status: "Active",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "Instagram Clone",
    slug: "instagram-clone",
    repoName: "instagram_reactnative-firebase",
    linkToProject:
      "https://github.com/gianluigitrontini/instagram_reactnative-firebase",
    description: "Instagram clone built with React Native and Firebase.",
    logo: "",
    image: "/images/projects/instagram-clone-banner.png",
    status: "Demo",
    hidden: true,
    hasCoverImage: true,
  },
  {
    name: "ECommerce API",
    slug: "ecommerce-api",
    repoName: "basic-ecommerce_react-node-mongodb",
    linkToProject:
      "https://github.com/gianluigitrontini/basic-ecommerce_react-node-mongodb",
    description:
      "Simple implementation of an ecommerce store with minor UI styling. Authentication, Cart functionality using Redux and products API built with Node.js and MongoDB.",
    image: "/images/projects/temporary-banner.png",
    logo: "",
    status: "Demo",
    hidden: true,
    hasCoverImage: false,
  },
  {
    name: "Social Network",
    slug: "social-network",
    repoName: "social-network_react-mongodb",
    linkToProject:
      "https://github.com/gianluigitrontini/social-network_react-mongodb",
    description:
      "A kind of Facebook but for University. Just like Facebook was, but in 2021. React + Node + MongoDB.",
    image: "/images/projects/temporary-banner.png",
    logo: "",
    status: "In Progress",
    hidden: true,
    hasCoverImage: false,
  },
  {
    name: "Bakkano",
    slug: "bakkano-landing-page",
    repoName: "bakkano",
    linkToProject: "https://github.com/gianluigitrontini/bakkano/",
    description:
      "A landing page for selling Pinsa products to food businesses.",
    image: "/images/projects/bakkano-banner.jpg",
    logo: "",
    status: "In Progress",
    hasCoverImage: true,
    hidden: false
  },
  {
    name: "Escape Passport",
    slug: "escape-passport",
    repoName: "escape-passport",
    linkToProject: "https://github.com/gianluigitrontini",
    description: "An Escape Rooms search web app.",
    image: "/images/projects/temporary-banner.png",
    logo: "",
    status: "In Progress",
    hasCoverImage: false,
    hidden: false
  },
  {
    name: "Promozione della Salute - ASL TO3",
    slug: "promozione-della-salute",
    repoName: "promozione-della-salute",
    linkToProject: "https://github.com/gianluigitrontini",
    description:
      "A platform for promoting healthy habits developed with the ASL TO3 (Piemonte). Developed with NBS.",
    logo: "",
    image: "/images/projects/temporary-banner.png",
    status: "Active",
    hasCoverImage: false,
    hidden: false
  },
  {
    name: "Smart4...",
    slug: "smart-4-suite",
    repoName: "smart-4-suite",
    linkToProject: "https://github.com/gianluigitrontini",
    description:
      "Mobile apps suite for medical professionals. Smart4Med, Smart4Care, Smart4Hospital. Code updates & redesign. Developed with NBS.",
    logo: "",
    image: "/images/projects/temporary-banner.png",
    status: "Active",
    hasCoverImage: false,
    hidden: false
  },
  {
    name: "Formazione ECM",
    slug: "formazione-ecm",
    repoName: "formazione-ecm",
    linkToProject: "https://github.com/gianluigitrontini",
    description:
      "Mobile app for medical professionals. Active in Veneto, Piemonte, Sardegna, Valle d'Aosta regions & the province of Trento. Code updates & redesign. Developed with NBS.",
    image: "/images/projects/temporary-banner.png",
    logo: "",
    status: "Active",
    hasCoverImage: false,
    hidden: false
  },
];

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

export { projects, technologies };
