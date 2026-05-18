// src/app/home/partials/about.tsx

import { type StatItem, statsData } from '@/constants/stats-data';
import { cn } from '@/lib/utils';

type StatisticCircleProps = StatItem;

const statisticCircleSizeClass =
  'aspect-square w-[clamp(9.5rem,39vw,11rem)] md:w-[clamp(11rem,19vw,17.0625rem)]';

const statisticCircleContent = (
  value: string,
  label: string,
) => (
  <div className='-translate-y-1 text-center'>
    <strong className='block text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.03em] text-neutral-25'>
      {value}
    </strong>
    <span className='mt-4 block max-w-36 text-[clamp(0.875rem,1.15vw,1.125rem)] leading-snug font-normal text-neutral-200'>
      {label}
    </span>
  </div>
);

const StatisticCircle = ({ value, label, variant }: StatisticCircleProps) => {
  if (variant === 'filled') {
    return (
      <div
        className={cn(
          statisticCircleSizeClass,
          'ds-glow-brand-lg ds-hover-brand-lg flex flex-col items-center justify-center rounded-full bg-[image:var(--gradient-brand)]',
        )}
      >
        {statisticCircleContent(value, label)}
      </div>
    );
  }

  return (
    <div
      className={cn(
        statisticCircleSizeClass,
        'ds-glow-brand-md ds-hover-brand-md group rounded-full bg-[image:var(--gradient-brand)] p-px',
      )}
    >
      <div className='ds-transition-interactive flex h-full w-full flex-col items-center justify-center rounded-full bg-base-background/95 group-hover:bg-base-background/90'>
        {statisticCircleContent(value, label)}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-base-background pt-0 pb-20 md:pt-0 md:pb-28 lg:pt-0 lg:pb-32'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute top-10 left-1/2 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-[var(--gradient-brand-soft)] opacity-35 blur-[140px]' />
      </div>

      <div className='custom-container relative z-10'>
        <div className='grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start md:gap-12 lg:gap-20'>
          <h2 className='text-[clamp(2rem,5vw,3rem)] leading-[3.75rem] font-extrabold tracking-[-0.02em] text-neutral-25'>
            Who am I?
          </h2>

          <p className='max-w-198 text-[var(--text-lg)] leading-[var(--text-lg--line-height)] font-normal text-neutral-100/75'>
            Hi, I’m Sidiq, a front-end developer in progress focused on building
            responsive, maintainable, and user-centered web applications. I
            combine technical learning, real-world discipline, and continuous
            improvement to create interfaces that are clean, scalable, and
            useful.
          </p>
        </div>

        <div className='mt-16 grid grid-cols-2 justify-items-center gap-5 sm:gap-6 md:mt-20 md:grid-cols-4 md:gap-5 lg:mt-24 lg:gap-5'>
          {statsData.map((statistic) => (
            <StatisticCircle key={statistic.label} {...statistic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
