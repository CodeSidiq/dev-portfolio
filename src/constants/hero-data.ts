// src/constants/hero-data.ts

export const HERO_DATA = {
  badge: "Sidiq's Portfolio",
  headline: {
    prefix: 'I am a',
    highlight: 'Front-End Engineer',
    suffix: '& Web Programming Enthusiast',
  },
  description:
    'Hi, I’m Sidiq, a front-end engineer in progress focused on building responsive, maintainable, and user-centered web applications with modern frontend technologies.',
  primaryCTA: {
    label: 'View Portfolio',
    href: '#projects',
  },
} as const;

export const HERO_GLOW_DOTS = [
  {
    id: 'dot-1',
    className: 'top-[14%] left-[12%]',
  },
  {
    id: 'dot-2',
    className: 'top-[20%] left-[22%]',
  },
  {
    id: 'dot-3',
    className: 'top-[28%] left-[10%]',
  },
  {
    id: 'dot-4',
    className: 'top-[36%] left-[28%]',
  },
  {
    id: 'dot-5',
    className: 'top-[12%] right-[16%]',
  },
  {
    id: 'dot-6',
    className: 'top-[18%] right-[28%]',
  },
  {
    id: 'dot-7',
    className: 'top-[26%] right-[10%]',
  },
  {
    id: 'dot-8',
    className: 'top-[34%] right-[22%]',
  },
  {
    id: 'dot-9',
    className: 'top-[42%] right-[14%]',
  },
] as const;

