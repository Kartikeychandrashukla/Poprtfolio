import { PersonalInfo, Experience, Project, Skill, Achievement, Statistic, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kartikey Chandra Shukla',
  role: 'Frontend Developer',
  tagline: 'Frontend Developer | React.js Specialist | Problem Solver',
  subtitle: 'Building scalable web applications with modern technologies',
  email: 'kartikey.picc@gmail.com',
  phone: '+91-9555344380',
  location: 'Lucknow, Uttar Pradesh, India',
  linkedin: 'https://linkedin.com/in/kartikey-chandra-shukla',
  github: 'https://github.com/Kartikeychandrashukla',
  leetcode: 'https://leetcode.com/u/Mrhoodie1234',
};

export const aboutMe = `I'm a Computer Science Engineering student at VIT Bhopal (graduating 2026) and Frontend Developer at SniperThink AI Sales Platform. I specialize in building high-performance web applications using React.js, Next.js, and TypeScript.

With a strong foundation in full-stack development and 250+ LeetCode problems solved, I combine technical excellence with user-centric design. My work has reduced user interaction time by 40% and achieved 99.5% system uptime across production environments.`;

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'SniperThink AI Sales Platform',
    role: 'Frontend Developer',
    period: 'Aug 2025 – October 2025',
    location: 'Remote',
    achievements: [
      'Architected complex carousel system with React.js/Next.js and TypeScript, showcasing 6 AI features with 100% smooth infinite scrolling, reducing user interaction time by 40%',
      'Built responsive component architecture (TwoPanelChat, LeadLifecycleTimeline) using Tailwind CSS, achieving 95% mobile compatibility',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.sniperthink.com/aiagents',
  },
  {
    id: 'exp-2',
    company: 'Prologic First',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2026 – Present',
    location: 'Remote',
    achievements: [
      'Debugged and optimized components in a hospitality Asset Management System to improve workflow efficiency and user experience',
      'Resolved frontend and backend issues to ensure smoother product behavior and reliability',
      'Built a centralized Single Sign-On (SSO) system from scratch for secure multi-product authentication',
      'Integrated REST APIs to enable seamless cross-product access and communication',
    ],
    techStack: ['.NET Core', 'PostgreSQL', 'React', 'REST API Integration', 'Full-Stack Debugging'],
  },
  {
    id: 'exp-3',
    company: 'Bluestock Fintech',
    role: 'SDE Intern',
    period: 'Mar 2025 – Apr 2025',
    location: 'Remote',
    achievements: [
      'Contributed to full-stack web application development across frontend and backend modules',
      'Built responsive UI components to improve accessibility and usability across screen sizes',
      'Debugged and resolved issues to improve application performance, reliability, and overall code quality',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'Performance Optimization'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Study Room Booking System',
    description: 'Real-time booking platform with capacity-based scheduling (2–50 seats)',
    keyMetrics: [
      '<200ms API latency',
      '99.5% uptime',
      '1000+ monthly bookings',
      '40% reduction in booking conflicts',
      '92% waitlist-to-booking conversion',
      '500+ concurrent users',
    ],
    features: [
      'Real-time WebSocket waitlist',
      'Admin analytics dashboard',
      'RBAC (Role-Based Access Control)',
      '15+ REST APIs',
      'CI/CD pipeline',
    ],
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'WebSocket',
      'Material-UI',
      'JWT',
      'bcrypt',
      'AWS',
    ],
    github: '#',
    demo: '#',
    category: ['Full-Stack', 'Real-Time', 'React'],
  },
  {
    id: 'proj-2',
    title: 'Lost & Found Web Application',
    description: 'Full-stack application for reporting and recovering lost items with verification system',
    features: [
      'Image upload with Cloudinary integration',
      'JWT-based authentication',
      'Claim verification system with proof submission',
      'Real-time status updates',
      'Automated email workflows',
      'Search/filter capabilities',
    ],
    techStack: [
      'React.js',
      'Express.js',
      'MongoDB',
      'Cloudinary',
      'JWT',
      'RESTful APIs',
      'CORS',
    ],
    github: '#',
    demo: '#',
    category: ['Full-Stack', 'React'],
  },
  {
    id: 'proj-3',
    title: 'Food Delivery Application',
    description: 'Full-stack food ordering platform with real-time cart management',
    keyMetrics: [
      '100+ menu items',
      '<100ms order processing time',
      '60% improvement in navigation efficiency',
    ],
    features: [
      'WebSocket real-time updates',
      'MongoDB optimization',
      'Category filtering',
      'Lazy-loaded images',
      '6 responsive pages',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'React Bootstrap'],
    github: '#',
    demo: '#',
    category: ['Full-Stack', 'Real-Time', 'React'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Bootstrap', level: 'Proficient' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Microservices', level: 'Intermediate' },
      { name: 'WebSocket', level: 'Proficient' },
    ],
  },
  {
    category: 'Database & Storage',
    skills: [
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'MySQL', level: 'Proficient' },
      { name: 'Cloudinary', level: 'Intermediate' },
    ],
  },
  {
    category: 'Authentication & Security',
    skills: [
      { name: 'JWT', level: 'Proficient' },
      { name: 'Google OAuth 2.0', level: 'Proficient' },
      { name: 'Session Management', level: 'Proficient' },
      { name: 'bcrypt', level: 'Proficient' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Proficient' },
      { name: 'CI/CD', level: 'Proficient' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Postman', level: 'Proficient' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'LeetCode Achievement',
    issuer: 'LeetCode',
    description: '250+ Problems Solved - Focus on Data Structures & Algorithms',
    link: 'https://leetcode.com/u/Mrhoodie1234',
    icon: 'code',
  },
  {
    id: 'ach-2',
    title: 'Quantitative Research Job Simulation',
    issuer: 'JPMorgan Chase & Co. (Forage)',
    date: 'October 2025',
    description: 'Completed quantitative research simulation program',
    link: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_68ff438740b7c3d93bc44cf4_1761591404886_completion_certificate.pdf',
    icon: 'chart',
  },
  {
    id: 'ach-3',
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google (Coursera)',
    description: 'Comprehensive networking fundamentals certification',
    link: 'https://www.coursera.org/account/accomplishments/verify/4BJR5CK2958B',
    icon: 'network',
  },
  {
    id: 'ach-4',
    title: 'SQL Certificate',
    issuer: 'HackerRank',
    description: 'SQL proficiency certification',
    link: 'https://www.hackerrank.com/certificates/8b657429012e',
    icon: 'database',
  },
  {
    id: 'ach-5',
    title: 'Build Your Generative AI Productivity Skills',
    issuer: 'Microsoft & LinkedIn Learning',
    description: 'AI and productivity skills certification',
    icon: 'ai',
  },
];

export const statistics: Statistic[] = [
  {
    id: 'stat-1',
    value: '40',
    label: 'Reduction in user interaction time',
    suffix: '%',
  },
  {
    id: 'stat-2',
    value: '99.5',
    label: 'System uptime achieved',
    suffix: '%',
  },
  {
    id: 'stat-3',
    value: '250',
    label: 'LeetCode problems solved',
    suffix: '+',
  },
  {
    id: 'stat-4',
    value: '1000',
    label: 'Monthly bookings handled',
    suffix: '+',
  },
  {
    id: 'stat-5',
    value: '100',
    label: 'API response time',
    suffix: 'ms',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kartikey-chandra-shukla',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Kartikeychandrashukla',
    icon: 'github',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Mrhoodie1234',
    icon: 'leetcode',
  },
  {
    name: 'Email',
    url: 'mailto:kartikeychandrashukla2022@vitbhopal.ac.in',
    icon: 'email',
  },
];
