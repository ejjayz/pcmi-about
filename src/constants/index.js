import ContactPcmi from '../sections/ContactPcmi'; // Make sure the path is correct

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
    name: 'Youth',
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
    review: 'Maraming matatagpuang kayamanan dito sa mundo subalit mapalad tayo dahil natagpuan natin ang tunay na Kayamanan, na walang iba kun\'di si Kristo.',
    profileLink: 'https://www.facebook.com/profile.php?id=100084821967511'
  },
  {
    id: 2,
    name: 'Ps. Dez Dimasaka',
    position: 'Local Church Head Pastor',
    img: 'pic/pastora-dez.png',
    review: 'Ayusin ang pakikinig ng Instructions, para magkaroon ng maayos na Actions.',
    profileLink: 'https://www.facebook.com/mandez.dimasaka'
  },
  {
    id: 3,
    name: 'Bro. Marlon Alloso',
    position: 'Music Ministry Lead',
    img: 'pic/papa.png',
    review: 'Ang pananampalataya ay ang katiyakan na mangyayari ang mga bagay na inaasahan, at ang katunayan ng mga bagay na hindi nakikita.',
    profileLink: 'https://www.facebook.com/marlonalloso007'	
  },
];

export const myProjects = [
  {
    title: 'Music Ministry',
    desc: 'Umawit sa kagalakan ang lahat ng mga bansa! Si Yahweh ay papurihan, paglingkuran Siyang kusa; lumapit sa presensya Niya at umawit na may tuwa!',
    subdesc: '— Awit 100:1-2',
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
    subdesc: '– Kawikaan 22:6',
    href: 'https://www.facebook.com/profile.php?id=100064727016290',
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
    href: 'https://www.facebook.com/profile.php?id=100064727016290',
    texture: '/textures/project/project3.mp4',
    logo: '/svg/creative.svg',
    logoStyle: {
      backgroundColor: '#102413',
      background:
      '#102413',
      border: '0.3px solid white',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      transform: 'scale(1.1)', // Zoom effect
    },
    spotlight: '/assets/spotlight3.png',
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
    subdesc: '– Mga Awit 90:17',
    href: 'https://www.facebook.com/profile.php?id=100064727016290',
    texture: '/textures/project/project4.mp4',
    logo: '/svg/tech.svg',
    logoStyle: {
      backgroundColor: '#1c0e29',
      border: '0.3px solid white',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight5.png',
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
];

// Exporting the ContactPcmi component
export { ContactPcmi };

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
    name: 'Youth Fellowship',
    pos: 'Fellowship',
    duration: '1pm - 3pm ',
    title: "Join our Youth Fellowship every first Sunday of the month. We gather for praise and worship, Word of God, and fun activities. Our fellowship are held in person, and we encourage everyone to join and experience the joy of fellowship and build faith in Christ.",
    icon: '/pic/youth.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Kamustahan',
    pos: 'Online Cellgoup',
    duration: '6pm - 7:30pm',
    title: "Join us for our Online Cellgroup every Saturday at 6 PM. Let's connect with fellow youths, share experiences, and support each other in faith. Our online cellgroup is a great space to pray, study, and encourage one another.",
    icon: '/pic/cellgroup.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Training',
    pos: 'After Music Practice',
    duration: '1pm - 2pm',
    title: "Discover and develop your talents through our training programs. Whether you're interested in joining the Music Ministry, Kids Ministry, or other areas, we provide the guidance and support you'll need to serve effectively and be part of the ministry.",
    icon: '/pic/training-1.png',
    animation: 'victory',
  },
];
