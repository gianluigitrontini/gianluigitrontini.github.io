import Carousel from './assets/images/projects/carousel-banner.png';
import CarouselLogo from './assets/images/projects/logos/carousel-logo.png';
import Entrelibros from './assets/images/projects/entrelibros-banner.png';
import EntrelibrosLogo from './assets/images/projects/logos/entrelibros-logo.png';
import RiseRosaRage from './assets/images/projects/rise-rosa-rage-banner.png';
import RiseRosaRageLogo from './assets/images/projects/logos/rise-rosa-rage-logo.png';
import ConnectorLogo from './assets/images/projects/logos/connector-logo.png';
import VerifyLogo from './assets/images/projects/logos/verify-logo.png';
import Connector from './assets/images/projects/connector-banner.png';
import Verify from './assets/images/projects/verify-banner.png';

const projects = [
  {
    name: 'Carousel Learning',
    slug: 'carousel',
    description:
      'Carousel is an online tool that helps students to embed knowledge in their long-term memory.',
    image: Carousel,
    logo: CarouselLogo,
    status: 'active',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
    linkToProject: 'https://carousel-learning.com',
  },
  {
    name: 'EntreLibros',
    slug: 'entrelibros',
    description:
      'Find new adventures on paper; Recommend your favorite book to your friends; Do you remember that one they told you about? All this... and more!',
    image: Entrelibros,
    logo: EntrelibrosLogo,
    status: 'active',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
    linkToProject: 'https://entrelibros.net',
  },
  {
    name: 'RiseRosaRage',
    slug: 'rise-rosa-rage',
    description: 'Global Socio-Political & Solidarity Graphics since the 60s.',
    image: RiseRosaRage,
    logo: RiseRosaRageLogo,
    status: 'inProgress',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
  },
  {
    name: 'Aircury Connector',
    slug: 'connector',
    linkToProject: 'https://www.aircury.com/connector',
    description:
      'Make copies of source datasets and lift and shift that data into your own environment, with zero hassle and zero development time for you!',
    image: Connector,
    logo: ConnectorLogo,
    status: 'active',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
  },
  {
    name: 'Aircury School Verify',
    slug: 'verify',
    linkToProject: 'https://www.aircury.com/verify',
    description:
      "Aircury's school picker offers a fast and easy way for a user to select any English or Welsh school so that you can embed those details accurately in your product's database.",
    image: Verify,
    logo: VerifyLogo,
    status: 'active',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
  },
];

const technologies = [
  {
    name: 'Figma',
    url: '/images/icons/figma.png',
  },
  {
    name: 'HTML',
    url: '/images/icons/html5.png',
  },
  {
    name: 'CSS',
    url: '/images/icons/css3.png',
  },
  {
    name: 'SCSS',
    url: '/images/icons/sass.png',
  },
  {
    name: 'Tailwind',
    url: '/images/icons/tailwindcss.png',
  },
  {
    name: 'Javascript',
    url: '/images/icons/javascript.png',
  },
  {
    name: 'React',
    url: '/images/icons/react.png',
  },
  {
    name: 'NextJS',
    url: '/images/icons/nextjs.png',
  },
];

export { projects, technologies };
