export type SocialIcon = 'github' | 'linkedin' | 'twitter';

export interface Intro {
  name: string;
  description: string;
  aka: string;
  tagline: string;
}

export interface Skill {
  name: string;
  percent: number;
}

export interface SocialLink {
  username: string;
  link: string;
  icon: SocialIcon;
}

export interface Social {
  github: SocialLink;
  linkedin: SocialLink;
  twitter?: SocialLink;
}

export interface Profile {
  intro: Intro;
  skills: Skill[];
  social: Social;
}
