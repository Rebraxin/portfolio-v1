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
    brandImage: '/images/brand-image.jpg',
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
        'The majority of my projects are hosted on Github and I know all the command lines.',
    },
    {
      title: 'Database',
      icon: 'database',
      details:
        'I am able to create databases and also to create relationships with different tables.',
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
      value: 95,
    },
    {
      title: 'CSS3',
      value: 90,
    },
    {
      title: 'Javascript',
      value: 70,
    },
    {
      title: 'Bootstrap',
      value: 85,
    },
    {
      title: 'ReactJS',
      value: 80,
    },
    {
      title: 'Photoshop',
      value: 70,
    },
    {
      title: 'Symfony',
      value: 80,
    },
    {
      title: 'Git',
      value: 90,
    },
  ],
  portfolios: [
    {
      id: 4,
      title: 'Whatsapp-Clone',
      subtitle:
        "Let's build a Whatsapp Clone with Google Auth and Firestore real-time database",
      imageUrl: '/images/portfolio-whatsapp.png',
      largeImageUrl: ['/images/portfolio-whatsapp-lg.png'],
      url: 'https://whattsapp-clone-abddf.web.app/',
      git: 'https://github.com/Rebraxin/whatsapp-clone-react',
    },
    {
      id: 5,
      title: 'Animation',
      subtitle:
        'Discovery of Gsap, ScrollMagic & Barba - Made with JavaScript Vanilla.',
      imageUrl: '/images/portfolio-animation.png',
      largeImageUrl: ['/images/portfolio-animation-lg.png'],
      url: 'https://rebraxin.github.io/template-website-js-animation/',
      git: 'https://github.com/Rebraxin/template-website-js-animation',
    },
    {
      id: 6,
      title: 'Colors Palette',
      subtitle:
        'Improving my skills with JS events & localStorage - Made with JavaScrip Vanilla.',
      imageUrl: '/images/portfolio-palette.png',
      largeImageUrl: ['/images/portfolio-palette-lg.png'],
      url: 'https://rebraxin.github.io/training-js-colors-palette',
      git: 'https://github.com/Rebraxin/training-js-colors-palette',
    },
    {
      id: 7,
      title: 'Beatmaker',
      subtitle:
        "Project in order to practice with 'this.' operator - Made with JavaScript Vanilla.",
      imageUrl: '/images/portfolio-beatmaker.png',
      largeImageUrl: ['/images/portfolio-beatmaker-lg.png'],
      url: 'https://rebraxin.github.io/learning-js-beatmaker/',
      git: 'https://github.com/Rebraxin/learning-js-beatmaker',
    },
    {
      id: 8,
      title: 'Espoir Sur Pattes',
      subtitle: 'Awesome website to help animals - Made with Symfony.',
      imageUrl: '/images/portfolio-esp.png',
      largeImageUrl: ['/images/portfolio-esp-lg.png'],
      url: 'https://www.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/EspoirSurPattes',
    },
    {
      id: 9,
      title: "O'brasseur",
      subtitle:
        'Practicing Bootstrap & responsive website - Made with Bootstrap/CSS.',
      imageUrl: '/images/portfolio-restaurant.png',
      largeImageUrl: ['/images/portfolio-restaurant-lg.png'],
      url: 'https://rebraxin.github.io/resto-template/',
      git: 'https://github.com/Rebraxin/resto-template',
    },
    {
      id: 10,
      title: 'SVG stroke Animation',
      subtitle:
        'Project to learn how animate an SVG file - Made with HTML/SCSS.',
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
        year: '06/2020 - Present',
        position: 'Self-service Employee',
        company: 'Manpower',
        details: [
          'Qualitative and quantitative control of deliveries',
          'Visual shelf placement',
          'Visual shelf placement',
          'Proposal for product association',
          'Placement of articles at the checkouts',
        ],
      },
      {
        id: 2,
        year: '04/2020 - 05/2020',
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
        id: 3,
        year: '01/2019 - 04/2019',
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
        id: 4,
        year: '01/2018 - 12/2018',
        position: "Cashier's host",
        company: 'Grand Frais',
        details: [
          'Entering sales',
          'Charging collections',
          'Customers information and orientation',
        ],
      },
      {
        id: 5,
        year: '02/2010 - 12/2017',
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
        id: 6,
        year: '03/2004 - 04/2007',
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
        id: 7,
        year: '09/2000 - 06/2003',
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
        year: '10/2019 - 04/2020',
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
        year: '09/2008 - 07/2009',
        graduation: 'National Vocational Qualification',
        university: 'Compagnons du Devoir',
        details: [
          'Theoretical and practical courses to become a roofer-zinger',
        ],
      },
      {
        id: 3,
        year: '1998 - 2000',
        graduation: 'High-School Degree',
        university: 'Ampère College',
        details: ['Traditional schooling'],
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource:
        '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource:
        '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
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

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
