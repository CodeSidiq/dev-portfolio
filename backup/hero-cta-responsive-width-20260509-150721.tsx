// src/app/home/partials/hero.tsx

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { HERO_DATA } from '@/constants/hero-data';

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative overflow-hidden pt-32 pb-20 text-center'
    >
      {/* Background Atmosphere */}
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        {/* Grid Pattern Layer
            - bg-length controls responsive grid scale
            - bg-position controls horizontal / vertical alignment
            - opacity controls final grid visibility
        */}
        <div className="absolute inset-0 bg-[url('/assets/ornaments/grid-pattern.svg')] bg-[length:clamp(721px,100vw,1442px)_auto] bg-[position:center_top] bg-no-repeat opacity-100 md:bg-[position:calc(50%+48px)_top] lg:bg-[position:calc(50%+110px)_top]" />

        <div className='absolute top-0 right-0 h-[400px] w-[400px] bg-[image:var(--gradient-brand-soft)] opacity-60 blur-3xl' />
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6'>
        {/* Badge */}
        <div className='group relative mb-6 rounded-full bg-[image:var(--gradient-brand)] p-px shadow-[0_0_32px_rgba(135,70,235,0.18)] transition-all duration-300 hover:shadow-[0_0_42px_rgba(220,73,166,0.34)]'>
          <div className='bg-base-background/90 group-hover:text-base-white flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neutral-200 backdrop-blur-md transition-colors duration-300'>
            <span aria-hidden='true' className='text-sm'>
              👨‍💻
            </span>
            <span>{HERO_DATA.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className='text-neutral-25 w-full max-w-[64rem] text-[clamp(2rem,5vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.04em]'>
          {HERO_DATA.headline.prefix}{' '}
          <span className='group relative mx-2 inline-block'>
            <span className='relative z-10 inline-block bg-[image:var(--gradient-brand)] bg-clip-text px-1 py-2 text-transparent'>
              {HERO_DATA.headline.highlight}
            </span>
            <span
              aria-hidden='true'
              className='border-brand-pink/60 group-hover:border-brand-purple pointer-events-none absolute -inset-x-2 top-1/2 h-[1.25em] -translate-y-1/2 border shadow-[0_0_14px_rgba(135,70,235,0.22)] transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(220,73,166,0.32)]'
            />
            <span
              aria-hidden='true'
              className='bg-neutral-25 absolute top-[calc(50%-0.625em)] left-[-0.5rem] h-[0.64rem] w-[1.22rem] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,73,166,0.45)]'
            />
            <span
              aria-hidden='true'
              className='bg-neutral-25 absolute top-[calc(50%-0.625em)] right-[-0.5rem] h-[0.64rem] w-[1.22rem] translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,73,166,0.45)]'
            />
            <span
              aria-hidden='true'
              className='bg-neutral-25 absolute bottom-[calc(50%-0.625em)] left-[-0.5rem] h-[0.64rem] w-[1.22rem] -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_rgba(220,73,166,0.45)]'
            />
            <span
              aria-hidden='true'
              className='bg-neutral-25 absolute right-[-0.5rem] bottom-[calc(50%-0.625em)] h-[0.64rem] w-[1.22rem] translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_rgba(220,73,166,0.45)]'
            />
          </span>{' '}
          {HERO_DATA.headline.suffix}
        </h1>

        {/* Description */}
        <p className='mt-6 w-full max-w-[48rem] text-neutral-400'>
          {HERO_DATA.description}
        </p>

        {/* CTA */}
        <Button
          asChild
          variant='brand'
          size='brand'
          className='mt-8 w-[206px] px-0'
        >
          <Link href={HERO_DATA.primaryCTA.href}>
            {HERO_DATA.primaryCTA.label}
          </Link>
        </Button>
      </div>

      {/* Wave Ornament */}
      <div className='relative mt-16'>
        <img
          src='/assets/ornaments/waves-pattern.svg'
          alt=''
          aria-hidden='true'
          className='w-full object-cover opacity-80'
        />
      </div>

      {/* Image Card */}
      <div className='relative z-10 mx-auto mt-[-80px] max-w-[1200px] px-6'>
        <div className='overflow-hidden rounded-3xl'>
          <Image
            src='/assets/avatars/hero.png'
            alt='hero'
            width={1160}
            height={459}
            className='w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
