// src/app/home/partials/hero.tsx

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { HERO_DATA } from '@/constants/hero-data';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 text-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/assets/ornaments/grid-pattern.svg')] opacity-20" />

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-[image:var(--gradient-brand-soft)] blur-3xl opacity-60" />

      {/* Content */}
      <div className="custom-container relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 rounded-full border border-neutral-800 px-4 py-1 text-sm text-neutral-300">
          {HERO_DATA.badge}
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-display-lg font-bold text-neutral-25 md:text-display-2xl">
          {HERO_DATA.headline.prefix}{' '}
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
            {HERO_DATA.headline.highlight}
          </span>{' '}
          {HERO_DATA.headline.suffix}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-neutral-400">
          {HERO_DATA.description}
        </p>

        {/* CTA */}
        <Button asChild className="mt-8">
          <Link href={HERO_DATA.primaryCTA.href}>
            {HERO_DATA.primaryCTA.label}
          </Link>
        </Button>
      </div>

      {/* Wave Ornament */}
      <div className="relative mt-16">
        <Image
          src="/assets/ornaments/waves-pattern.svg"
          alt="wave"
          width={1440}
          height={200}
          className="w-full object-cover opacity-80"
        />
      </div>

      {/* Image Card */}
      <div className="custom-container relative z-10 mt-[-80px]">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/assets/images/hero-image.png"
            alt="hero"
            width={1160}
            height={459}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
