import type { Profile } from '../types/profile';

export const profile = {
  intro: {
    name: 'Gerlis Álvarez Cardona',
    description:
      'Senior Frontend Developer in Barranquilla, Colombia. I build production web applications with TypeScript, Astro, and React, with a focus on performance, accessibility, and maintainable UI systems.',
    aka: 'AKA: El playaman 🏝',
    tagline: 'Today is going to be a good day!',
  },
  skills: [
    { name: 'TypeScript', percent: 92 },
    { name: 'Astro & React', percent: 88 },
    { name: 'Angular & NGRX', percent: 86 },
    { name: 'Accessibility & performance', percent: 84 },
  ],
  social: {
    github: {
      username: '@geralvarez',
      link: 'https://github.com/geralvarez',
      icon: 'github',
    },
    linkedin: {
      username: 'Gerlis Álvarez Cardona',
      link: 'https://www.linkedin.com/in/geralvarez/',
      icon: 'linkedin',
    },
  },
} satisfies Profile;
