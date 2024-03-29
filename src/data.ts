import Carousel from "./assets/images/projects/carousel-banner.png";
import CarouselLogo from "./assets/images/projects/logos/carousel-logo.png";
import Entrelibros from "./assets/images/projects/entrelibros-banner.png";
import EntrelibrosLogo from "./assets/images/projects/logos/entrelibros-logo.png";
import RiseRosaRage from "./assets/images/projects/rise-rosa-rage-banner.png";
import RiseRosaRageLogo from "./assets/images/projects/logos/rise-rosa-rage-logo.png";
import ConnectorLogo from "./assets/images/projects/logos/connector-logo.png";
import VerifyLogo from "./assets/images/projects/logos/verify-logo.png";
import Connector from "./assets/images/projects/connector-banner.png";
import Verify from "./assets/images/projects/verify-banner.png";
import DaniloWeb from "./assets/images/projects/danilo-web-banner.png";
import QuietGuyWeb from "./assets/images/projects/thequietguy-banner.png";
import InstagramClone from "./assets/images/projects/instagram-clone-banner.png";
import Bakkano from "./assets/images/projects/bakkano-banner.jpg";
import Temporary from "./assets/images/projects/temporary-banner.png";

const projects = [
  {
    name: "Carousel Learning",
    slug: "carousel-learning",
    repoName: "carousel-learning",
    description:
      "Carousel is an online tool that helps students to embed knowledge in their long-term memory. Developed with Aircury.",
    image: Carousel,
    logo: CarouselLogo,
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
    image: Entrelibros,
    logo: EntrelibrosLogo,
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
    image: RiseRosaRage,
    logo: RiseRosaRageLogo,
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
    image: Connector,
    logo: ConnectorLogo,
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
    image: Verify,
    logo: VerifyLogo,
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
    image: DaniloWeb,
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
    image: QuietGuyWeb,
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
    image: InstagramClone,
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
    image: Temporary,
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
    image: Temporary,
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
    image: Bakkano,
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
    image: Temporary,
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
    image: Temporary,
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
    image: Temporary,
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
    image: Temporary,
    status: "Active",
    hasCoverImage: false,
    hidden: false
  },
];

const technologies = [
  {
    name: "Figma",
    url: "/images/icons/figma.png",
  },
  {
    name: "HTML",
    url: "/images/icons/html5.png",
  },
  {
    name: "CSS",
    url: "/images/icons/css3.png",
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
    name: "Javascript",
    url: "/images/icons/javascript.png",
  },
  {
    name: "Typescript",
    url: "/images/icons/typescript.png",
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
    name: "RxJS",
    url: "/images/icons/rxjs.png",
  },
  {
    name: "Ionic",
    url: "/images/icons/ionic.png",
  },
];

export { projects, technologies };
