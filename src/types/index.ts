export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  keyMetrics?: string[];
  features: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  category: string[];
}

export interface Skill {
  category: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Proficient';
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  link?: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
