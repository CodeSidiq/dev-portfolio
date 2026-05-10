import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 text-sm-medium text-neutral-25 rounded-full hover:shadow-[0_0_17px_rgba(0,147,221,0.6)]',
        brand:
          'rounded-full bg-[image:var(--gradient-brand)] text-sm font-medium tracking-[-0.01em] text-neutral-25 shadow-[0_0_24px_rgba(220,73,166,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(135,70,235,0.42)] focus-visible:ring-2 focus-visible:ring-brand-pink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base-background',
        outline:
          'border border-neutral-800 rounded-full hover:border-neutral-700',
      },
      size: {
        default: 'h-11 px-14.5',
        brand: 'h-12 px-10',
        icon: 'size-10 md:size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
