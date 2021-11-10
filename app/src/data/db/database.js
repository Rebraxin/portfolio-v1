import Mock from '../mock';

const database = {
  information: {
    name: 'Cédric Paje',
    age: 38,
    phone: '+33 637 964 370',
    nationality: 'French',
    language: 'French, English',
    email: 'cedric.paje@gmail.com',
    address: "340 rue de l'Europe",
    address1: '01630 Saint-Genis-Pouilly',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/PAJE.Cedric/',
      twitter: 'https://twitter.com/Rebraxin',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/cedric-paje-b69a4818a/',
      dribbble: '',
      github: 'https://github.com/Rebraxin',
    },
    brandImage: '/images/myself.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/CV-Dark-Cedric.pdf',
  },
  services: [
    {
      title: 'Web Design',
      icon: 'color-pallet',
      details:
        'I keep abreast of trends in this field and I like to create my own templates.',
    },
    {
      title: 'Web Development',
      icon: 'code',
      details:
        'Constantly learning, I love to discover new technologies and implement them in my projects.',
    },
    {
      title: 'Mobile Friendly',
      icon: 'mobile',
      details:
        'With the help of development tools, I am able to make any website responsive.',
    },
    {
      title: 'Github',
      icon: 'github',
      details:
        'The majority of my projects are hosted on Github and I know the most used commands lines.',
    },
    {
      title: 'Database',
      icon: 'database',
      details:
        'I am able to create databases and also write SQL/DQL requests to fetch datas.',
    },
    {
      title: 'Environment',
      icon: 'display-alt',
      details:
        'I mainly work on Linux and its Terminal. Command lines are no longer a problem.',
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company',
      },
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client',
      },
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client',
      },
    },
  ],
  skills: [
    {
      title: 'HTML5',
      value: 85,
    },
    {
      title: 'CSS3',
      value: 80,
    },
    {
      title: 'Javascript',
      value: 60,
    },
    {
      title: 'Bootstrap',
      value: 75,
    },
    {
      title: 'ReactJS',
      value: 70,
    },
    {
      title: 'Photoshop',
      value: 60,
    },
    {
      title: 'Symfony',
      value: 70,
    },
    {
      title: 'Git',
      value: 80,
    },
  ],
  portfolios: [
    {
      id: 98,
      title: 'Cryptoverse',
      subtitle:
        'Stack : React - RapidAPI - Redux Toolkit - ChartJS - Material UI - Millify - Docker - Git',
      imageUrl: '/images/portfolio-cryptoverse.png',
      largeImageUrl: ['/images/portfolio-cryptoverse-lg.png'],
      url: 'https://www.cryptoverse.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/cryptoapp-react-redux',
    },
    {
      id: 99,
      title: 'Dev.to Clone',
      subtitle:
        'Stack : NextJS - SSR/SEO - React - Context - Firestore - Google Auth - Lodash - Docker - Git',
      imageUrl: '/images/portfolio-devto-clone.png',
      largeImageUrl: ['/images/portfolio-devto-clone-lg.png'],
      url: 'https://www.devto-clone.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/nextfire-devto-clone',
    },
    {
      id: 100,
      title: 'Github Repository Finder',
      subtitle:
        'Stack : NextJS - SSR/SEO - React - Axios - Github API - Bulma - Docker - Git',
      imageUrl: '/images/portfolio-repo-finder.png',
      largeImageUrl: ['/images/portfolio-repo-finder-lg.png'],
      url: 'https://www.repo-finder.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/nextjs-repository-finder',
    },
    {
      id: 101,
      title: 'Portfolio',
      subtitle:
        'Stack : React - Axios - SASS - Particles - Mocker - Docker - Git',
      imageUrl: '/images/portfolio-main.png',
      largeImageUrl: ['/images/portfolio-main-lg.png'],
      url: 'https://www.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/portfolio-v1',
    },
    {
      id: 102,
      title: 'Colleag',
      subtitle:
        'Stack : Symfony - React/Redux - MySQL - Gsap - Material UI - Formik - Docker - Git',
      imageUrl: '/images/portfolio-colleag.png',
      largeImageUrl: ['/images/portfolio-colleag-lg.png'],
      url: 'https://colleag.com/',
      git: null,
    },
    {
      id: 103,
      title: 'Whatsapp Clone',
      subtitle:
        'Stack : Google Auth - Firestore - Realtime Database - Material UI - Git',
      imageUrl: '/images/portfolio-whatsapp.png',
      largeImageUrl: ['/images/portfolio-whatsapp-lg.png'],
      url: 'https://whattsapp-clone-abddf.web.app/',
      git: 'https://github.com/Rebraxin/whatsapp-clone-react',
    },
    {
      id: 104,
      title: "O'brasseur",
      subtitle:
        'Stack :  HTML - Bootstrap - CSS - Lightbox - JQuery - CSS Animate - Git',
      imageUrl: '/images/portfolio-restaurant.png',
      largeImageUrl: ['/images/portfolio-restaurant-lg.png'],
      url: 'https://rebraxin.github.io/resto-template/',
      git: 'https://github.com/Rebraxin/resto-template',
    },
    {
      id: 105,
      title: 'Web Animation',
      subtitle: 'Stack : Gsap - ScrollMagic - Barba - JS Vanilla - Git',
      imageUrl: '/images/portfolio-animation.png',
      largeImageUrl: ['/images/portfolio-animation-lg.png'],
      url: 'https://rebraxin.github.io/template-website-js-animation/',
      git: 'https://github.com/Rebraxin/template-website-js-animation',
    },
    {
      id: 106,
      title: 'Espoir Sur Pattes',
      subtitle: 'Stack : Symfony - Twig - JQuery - Leaflet - MYSQL - Git',
      imageUrl: '/images/portfolio-esp.png',
      largeImageUrl: ['/images/portfolio-esp-lg.png'],
      url: 'https://www.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/EspoirSurPattes',
    },
    {
      id: 107,
      title: 'Beatmaker',
      subtitle: 'Stack : JS Vanilla',
      imageUrl: '/images/portfolio-beatmaker.png',
      largeImageUrl: ['/images/portfolio-beatmaker-lg.png'],
      url: 'https://rebraxin.github.io/learning-js-beatmaker/',
      git: 'https://github.com/Rebraxin/learning-js-beatmaker',
    },
    {
      id: 108,
      title: 'Colors Palette',
      subtitle: 'Stack : Chroma - JS Vanilla',
      imageUrl: '/images/portfolio-palette.png',
      largeImageUrl: ['/images/portfolio-palette-lg.png'],
      url: 'https://rebraxin.github.io/training-js-colors-palette',
      git: 'https://github.com/Rebraxin/training-js-colors-palette',
    },
    {
      id: 109,
      title: 'Neumorphism Design',
      subtitle: 'Stack : HTML - SCSS - JS Vanilla',
      imageUrl: '/images/portfolio-neumorphism.png',
      largeImageUrl: ['/images/portfolio-neumorphism-lg.png'],
      url: 'https://rebraxin.github.io/neumorphism-design/',
      git: 'https://github.com/Rebraxin/neumorphism-design',
    },
    {
      id: 110,
      title: 'SVG Stroke Animation',
      subtitle: 'Stack : HTML - SCSS',
      imageUrl: '/images/portfolio-svg.png',
      largeImageUrl: ['/images/portfolio-svg-lg.png'],
      url: 'https://rebraxin.github.io/animation-test/',
      git: 'https://github.com/Rebraxin/animation-test',
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '11/2019 - 11/2021',
        position: 'Web Developer Frontend',
        company: 'Affineurs de Talents',
        details: [
          'Development of a web/mobile application for cross-border carpooling (Docker-Symfony-React)',
          "Creation of a 'serious-game' for the local mission of Besançon (Docker-Webpack-React)",
          'Adding server-side rendering to an existing e-commerce site to solve SEO related issues (React-Express)',
          "Creation of a calendar plugin compatible with 'Humhub', an existing social network (React-Symfony-Docker)",
        ],
      },
      {
        id: 2,
        year: '06/2019 - 11/2019',
        position: 'Self-service Employee',
        company: 'Manpower',
        details: [
          'Qualitative and quantitative control of deliveries',
          'Visual shelf placement',
          'Proposal for product association',
          'Placement of articles at the checkouts',
        ],
      },
      {
        id: 3,
        year: '06/2019 - 09/2019',
        position: 'Web Developer Frontend',
        company: 'Autodidact',
        details: [
          'Creation of React reusable components',
          'Axios queries to get the datas',
          'Implementation of react-router-dom for navigation',
          'added libraries (react-particles; react-countup; react-typing-animation; slick-carrousel, node-sass, bootstrap)',
          'Responsive integration',
          'Deployment with Firebase',
        ],
      },
      {
        id: 4,
        year: '08/2019 - 08/2019',
        position: 'Web Developer Frontend',
        company: 'Autodidact',
        details: [
          'Handling of JavaScript libraries for modern animations (Gsap, Barba and ScrollMagic)',
          'Reviews on the different events in JavaScrip Vanilla',
          'Hosted on Github Pages',
        ],
      },
      {
        id: 5,
        year: '07/2019 - 07/2019',
        position: 'Web Developer Frontend',
        company: 'Autodidact',
        details: [
          'Reviews of events, querySelector & Callbacks functions in JavaScript Vanilla',
          'Reading and Writing in localStorage',
          'Getting to grips with chroma.js which allows to generate hexadecimal colors, to manage saturation, contrast and luminosity',
          'Hosted on Github Pages',
        ],
      },
      {
        id: 6,
        year: '10/2018 - 05/2019',
        position: 'Fullstack Web Developer',
        company: "O'Clock",
        details: [
          'Agile method and SCRUM meetings',
          'MCD design, Wireframes, User Stories Data Dictionary',
          'Responsive integration with Bootstrap',
          "Manipulation of Symfony's ORM to manage the Database",
          'Application debugging and unit tests',
          'Deployment on VPS configured by myself',
        ],
      },
      {
        id: 7,
        year: '01/2018 - 04/2018',
        position: 'Sales Adviser',
        company: 'Leroy Merlin',
        details: [
          'Welcoming and orienting the customers',
          'Analysing their requests and advising them',
          'Proposals for sales/complementary products',
          'Closing sales and collection',
          'Ensuring that my department is kept clean and tidy',
        ],
      },
      {
        id: 8,
        year: '01/2017 - 12/2017',
        position: "Cashier's host",
        company: 'Grand Frais',
        details: [
          'Entering sales',
          'Charging collections',
          'Customers information and orientation',
        ],
      },
      {
        id: 9,
        year: '02/2009 - 12/2016',
        position: 'Roofer-Zinger',
        company: 'Beaufils',
        details: [
          'Safety on the building site and wearing of PPE',
          'Reading plans and taking measurements',
          'Cutting, bending and shaping the elements of Zinc/Copper roofing',
          'Preparation and installation of roofing elements for the waterproofing of all types of buildings',
          'Installation of water drainage devices',
          'Installation of cladding and small masonry',
        ],
      },
      {
        id: 10,
        year: '03/2003 - 04/2006',
        position: 'Logistics Agent',
        company: 'Ecotel',
        details: [
          'Managing the flow of goods using IT tools',
          'Editing purchase orders, delivery notes and invoices',
          'Ensuring the receipt, storage, preparation and dispatch of goods',
          'Managing furniture assembly and exhibition in the showroom',
        ],
      },
      {
        id: 11,
        year: '09/1999 - 06/2002',
        position: 'Driver-Delivery',
        company: 'PEJY Transport',
        details: [
          'Alternating between driving, carrying and customer contact',
          'Multiple movements and handling of loads of varying nature and weight',
          'Working irregular hours depending on the nature of the activity',
          'Compliance with health and safety rules (transport of hazardous products)',
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '10/2018 - 04/2019',
        graduation: 'Higher National Diploma in Web Development',
        university: "O'Clock",
        details: [
          'Remote Courses',
          "Labelled 'Grande Ecole du Numérique'",
          '3 months of basics : CSS/PHP/JavaScript',
          '1 month of specialisation with Symfony',
          '1 month of specialisation with React/Redux',
          '1 month of Apothéose Project.',
        ],
      },
      {
        id: 2,
        year: '09/2007 - 07/2008',
        graduation: 'National Vocational Qualification',
        university: 'Compagnons du Devoir',
        details: [
          'Theoretical and practical courses to become a roofer-zinger',
        ],
      },
      {
        id: 3,
        year: '09/1997 - 07/1999',
        graduation: 'High-School Degree',
        university: 'Ampère College',
        details: ['Traditional schooling'],
      },
    ],
  },
  contactInfo: {
    phoneNumbers: ['+33-637-964-370'],
    emailAddress: ['cedric.paje@gmail.com'],
    address: "340 rue de l'Europe, 01630 Saint-Genis-Pouilly, France",
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
