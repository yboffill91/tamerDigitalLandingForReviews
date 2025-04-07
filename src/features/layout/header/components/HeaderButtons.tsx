import React from 'react';
import { HeaderBTN } from '@/features/layout/header/utils';
import { ShimmerButton, ThemeToggle } from '@/components/ui';

export const HeaderButtons = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <div
        className='
    grid sm:grid-cols-2 grid-col-1 gap-2 w-full  xl:flex xl:justify-end xl:pt-0 xl:gap-4
    '
      >
        {HeaderBTN.map(({ content, icon: IconElement, url }) => (
          <ShimmerButton
            key={content + url}
            variant={url === '/demo' ? 'solid' : 'outline'}
          >
            <span className='flex gap-2 items-center justify-center'>
              <IconElement className='size-4' />
              {content}
            </span>
          </ShimmerButton>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
};
