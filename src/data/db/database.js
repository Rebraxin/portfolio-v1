import Mock from '../mock';

const database = {
  information: {
    name: 'Cédric Paje',
    age: 38,
    phone: '+33 637 964 370',
    nationality: 'French',
    language: 'French, English',
    email: 'cedric.paje@gmail.com',
    address: '340 rue de l\'Europe',
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
    cvfile: '/files/empty.pdf',
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
        'The majority of my projects are hosted on github and I know all the command lines.',
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
        'I mainly work on linux and its terminal. Command lines are no longer a problem.',
    }
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
      title: 'jQuery',
      value: 85,
    },
    {
      title: 'ReactJS',
      value: 80,
    },
    {
      title: 'Photoshop',
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: 'Animation',
      subtitle:
        'Discovery of Gsap, ScrollMagic & Barba - Made with JavaScript Vanilla.',
      imageUrl: '/images/portfolio-animation.png',
      largeImageUrl: ['/images/portfolio-animation-lg.png'],
      url: 'https://rebraxin.github.io/template-website-js-animation/',
      git: 'https://github.com/Rebraxin/template-website-js-animation',
    },
    {
      id: 2,
      title: 'Colors Palette',
      subtitle:
        'Improving my skills with JS events & localStorage - Made with JavaScrip Vanilla.',
      imageUrl: '/images/portfolio-palette.png',
      largeImageUrl: ['/images/portfolio-palette-lg.png'],
      url: 'https://rebraxin.github.io/training-js-colors-palette',
      git: 'https://github.com/Rebraxin/training-js-colors-palette',
    },
    {
      id: 3,
      title: 'Beatmaker',
      subtitle:
        "Project in order to practice with 'this.' operator - Made with JavaScript Vanilla.",
      imageUrl: '/images/portfolio-beatmaker.png',
      largeImageUrl: ['/images/portfolio-beatmaker-lg.png'],
      url: 'https://rebraxin.github.io/learning-js-beatmaker/',
      git: 'https://github.com/Rebraxin/learning-js-beatmaker',
    },
    {
      id: 4,
      title: 'Espoir Sur Pattes',
      subtitle: 'Awesome website to help animals - Made with Symfony.',
      imageUrl: '/images/portfolio-esp.png',
      largeImageUrl: ['/images/portfolio-esp-lg.png'],
      url: 'https://www.cedricpaje.fr/',
      git: 'https://github.com/Rebraxin/EspoirSurPattes',
    },
    {
      id: 5,
      title: "O'brasseur",
      subtitle: 'Practicing Bootstrap & responsive website - Made with Bootstrap/CSS.',
      imageUrl: '/images/portfolio-restaurant.png',
      largeImageUrl: ['/images/portfolio-restaurant-lg.png'],
      url: 'https://rebraxin.github.io/resto-template/',
      git: 'https://github.com/Rebraxin/resto-template',
    },
    {
      id: 6,
      title: "SVG stroke Animation",
      subtitle: 'Project to learn how animate an SVG file - Made with HTML/SCSS.',
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
        year: '2018 - Present',
        position: 'Frontend Web Developer',
        company: 'Abc Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 2,
        year: '2016 - 2018',
        position: 'Frontend Web Developer',
        company: 'CBA Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 3,
        year: '2014 - 1016',
        position: 'UI/UX Designer',
        company: 'Example Company',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2018 - 2019',
        graduation: 'Master of Science',
        university: 'Abc University',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 2,
        year: '2016 - 2018',
        graduation: 'Bachelor of Science',
        university: 'Abc University',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      },
      {
        id: 3,
        year: '2015 - 2016',
        graduation: 'Higher Schoold Graduation',
        university: 'Abc College',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
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
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: '121 King Street, Melbourne, Victoria 3000, Australia',
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
