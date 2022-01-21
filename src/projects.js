import Carousel from './assets/images/projects/carousel-banner.png';
import CarouselLogo from './assets/images/projects/logos/carousel-logo.png';
import Entrelibros from './assets/images/projects/entrelibros-banner.png';
import EntrelibrosLogo from './assets/images/projects/logos/entrelibros-logo.png';
import RiseRosaRage from './assets/images/projects/rise-rosa-rage-banner.png';
import RiseRosaRageLogo from './assets/images/projects/logos/rise-rosa-rage-logo.png';
import Besocia from './assets/images/projects/besocia-banner.png';
import Templates from './assets/images/projects/templates-banner.png';
import Aircury from './assets/images/projects/logos/aircury-logo.png';
import ConnectorLogo from './assets/images/projects/logos/connector-logo.png';
import VerifyLogo from './assets/images/projects/logos/verify-logo.png';
import Connector from './assets/images/projects/connector-banner.png';
import Verify from './assets/images/projects/verify-banner.png';

const projects = [
  {
    name: 'Carousel Learning',
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
    description: 'Global Socio-Political & Solidarity Graphics since the 60s.',
    image: RiseRosaRage,
    logo: RiseRosaRageLogo,
    status: 'inProgress',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
  },
  {
    name: 'Aircury Connector',
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
    linkToProject: 'https://www.aircury.com/verify',
    description:
      "Aircury's school picker offers a fast and easy way for a user to select any English or Welsh school so that you can embed those details accurately in your product's database.",
    image: Verify,
    logo: VerifyLogo,
    status: 'active',
    longDescription: `<p>Long description of projects is still in progress.</p>`,
  },
];

const forLater = [
  {
    name: 'Besocia',
    description:
      'Besocia is an app that empowers you to become the best version of yourself - everyday.',
    image: Besocia,
    status: 'offline',
  },
  {
    name: 'Templates',
    description: 'Portfolios & Landing Pages collection.',
    image: Templates,
    status: 'active',
  },
];

export default projects;
