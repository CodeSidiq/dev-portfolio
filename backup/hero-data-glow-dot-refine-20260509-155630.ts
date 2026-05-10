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
    className: 'top-[11%] left-[8%] size-1.5 opacity-35',
  },
  {
    id: 'dot-2',
    className: 'top-[18%] right-[34%] size-2 opacity-40',
  },
  {
    id: 'dot-3',
    className: 'top-[28%] right-[14%] size-1.5 opacity-30',
  },
  {
    id: 'dot-4',
    className: 'top-[43%] left-[18%] size-1.5 opacity-30',
  },
  {
    id: 'dot-5',
    className: 'top-[49%] right-[8%] size-1.5 opacity-25',
  },
  {
    id: 'dot-6',
    className: 'top-[63%] left-[34%] size-2 opacity-35',
  },
  {
    id: 'dot-7',
    className: 'top-[66%] right-[24%] size-1.5 opacity-30',
  },
  {
    id: 'dot-8',
    className: 'top-[79%] left-[14%] size-1.5 opacity-25',
  },
  {
    id: 'dot-9',
    className: 'top-[82%] right-[18%] size-2 opacity-30',
  },
] as const;

