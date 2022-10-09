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
      "Carousel is an online tool that helps students to embed knowledge in their long-term memory.",
    image: Carousel,
    logo: CarouselLogo,
    status: "Active",
    linkToProject: "https://carousel-learning.com",
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
  },
  {
    name: "RiseRosaRage",
    slug: "rise-rosa-rage",
    repoName: "rise-rosa-rage",
    description: "Global Socio-Political & Solidarity Graphics since the 60s.",
    image: RiseRosaRage,
    logo: RiseRosaRageLogo,
    status: "In Progress",
  },
  {
    name: "Aircury Connector",
    slug: "connector",
    repoName: "connector-verify",
    linkToProject: "https://www.aircury.com/connector",
    description:
      "Make copies of source datasets and lift and shift that data into your own environment, with zero hassle and zero development time for you!",
    image: Connector,
    logo: ConnectorLogo,
    status: "Active",
  },
  {
    name: "Aircury School Verify",
    slug: "verify",
    repoName: "connector-verify",
    linkToProject: "https://www.aircury.com/verify",
    description:
      "Aircury's school picker offers a fast and easy way for a user to select any English or Welsh school so that you can embed those details accurately in your product's database.",
    image: Verify,
    logo: VerifyLogo,
    status: "Active",
  },
  {
    name: "Danilo Barzaghini - Website",
    slug: "danilo-web",
    repoName: "danilo-barzaghini-web",
    linkToProject: "https://gianluigitrontini.github.io/danilo-barzaghini-web/",
    description:
      "Danilo Barzaghini's multi-language personal website - project from Fiverr.",
    image: DaniloWeb,
    status: "Active",
  },
  {
    name: "The Quiet Guy - Portfolio",
    slug: "quietguy-web",
    repoName: "thequietguy-web",
    linkToProject: "https://gianluigitrontini.github.io/thequietguy-web/",
    description: "TheQuietGuy's portfolio website - project from Fiverr.",
    image: QuietGuyWeb,
    status: "Active",
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
    noCover: true,
    status: "Demo",
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
    noCover: true,
    status: "In Progress",
  },
  {
    name: "Bakkano",
    slug: "bakkano-landing-page",
    repoName: "bakkano",
    linkToProject: "https://github.com/gianluigitrontini/bakkano/",
    description:
      "A landing page for selling their Pinsa products to food businesses.",
    image: Bakkano,
    status: "In Progress",
  },
  {
    name: "Escape Passport",
    slug: "escape-passport",
    repoName: "escape-passport",
    linkToProject: "https://github.com/gianluigitrontini",
    description:
      "An Escape Rooms platform to find all kind of rooms and an integration with owner to create their own room's pages",
    image: Temporary,
    noCover: true,
    status: "In Progress",
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
    name: "Ionic",
    url: "/images/icons/ionic.png",
  },  
];

export { projects, technologies };
