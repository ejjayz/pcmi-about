import ContactPcmi from './sections/ContactPcmi';

export const navLinks = [ 
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Ps. Manny Dimasaka',
    position: 'Local Church Head Pastor',
    img: 'pic/pastor-manny.png',
    review: ' Maraming matatagpuang kayamanan dito sa mundo subalit mapalad tayo dahil natagpuan natin ang tunay na Kayamanan, na walang iba kun\'di si Kristo. ',
  },
  {
    id: 2,
    name: 'Ps. Dez Dimasaka',
    position: 'Local Church Head Pastor',
    img: 'pic/pastora-dez.png',
    review:
      'Ang pananampalataya ay ang katiyakan na mangyayari ang mga bagay na inaasahan, at ang katunayan ng mga bagay na hindi nakikita.',
  }, /*
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },*/
];

export const myProjects = [
  {
    title: 'Music Ministry',
    desc: 'Umawit sa kagalakan ang lahat ng mga bansa! Si Yahweh ay papurihan, paglingkuran Siyang kusa; lumapit sa presensya Niya at umawit na may tuwa!',
    subdesc:
      '— Awit 100:1-2',
    href: 'https://www.facebook.com/profile.php?id=100064727016290',
    texture: '/textures/project/project1.mp4',
    logo: '/svg/music.svg',
    logoStyle: {
    backgroundColor: '#2A1816',
      border: '0.3px solid white',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/svg/music.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'svg/kids.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/svg/creative.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/svg/tech.svg',
      },
    ],
  },
  {
    title: 'Kids Ministry',
    desc: 'Ituro sa bata ang daang dapat niyang lakaran, at hanggang sa paglaki\'y di niya ito malilimutan.',
    subdesc:
      '– Kawikaan 22:6',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/svg/kids.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.3px solid white',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
  
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/svg/music.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'svg/kids.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/svg/creative.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/svg/tech.svg',
      },
    ],
  },
  {

   title: 'Creative Design Ministry',
   desc: 'Binigyan sila ng Panginoon ng kakayahang gumawa ng lahat ng klase ng gawain: ang pagdidisenyo, ang paggawa ng tela, ang pagbuburda ng pinong telang linen at ng lanang kulay asul, ube at pula. Kaya nilang gawin ang kahit anong klase ng gawain, at napakahuhusay nilang gumawa.',
   subdesc: '– Exodo 35:35',
   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
   texture: '/textures/project/project3.mp4',
   logo: '/svg/creative.svg',
   logoStyle: {
     backgroundColor: '#13202F',
     border: '0.3px solid white',
     boxShadow: '0px 0px 60px 0px #2F6DB54D',
     transform: 'scale(1.1)', // Zoom effect
   },
   spotlight: '/assets/spotlight2.png',
tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/svg/music.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'svg/kids.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/svg/creative.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/svg/tech.svg',
      },
    ],
  },
  {
    title: 'Tech Ministry',
    desc: 'At sumaamin nawa ang kagandahan ng Panginoong aming Dios: at iyong itatag sa amin ang gawa ng aming mga kamay; Oo, ang gawa ng aming mga kamay ay itatag mo.',
    subdesc:
      '– Mga Awit 90:17',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/svg/tech.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.3px solid white',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/svg/music.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'svg/kids.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/svg/creative.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/svg/tech.svg',
      },
    ],
  },


export { ContactPcmi }; 
 /*
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      }, 
    ],
  },*/
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
