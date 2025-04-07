import { cn } from '@/lib';

export const BottomGradient = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='551'
      height='295'
      viewBox='0 0 551 295'
      fill='none'
      className={cn(
        'pointer-events-none absolute -right-80 bottom-0 h-full w-full',
        className
      )}
    >
      <path
        d='M118.499 0H532.468L635.375 38.6161L665 194.625L562.093 346H0L24.9473 121.254L118.499 0Z'
        fill='url(#paint0_radial_254_132)'
      />
      <defs>
        <radialGradient
          id='paint0_radial_254_132'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(412.5 346) rotate(-91.153) scale(397.581 423.744)'
        >
          <stop stopColor='#17171750' />
          <stop offset='0.25' stopColor='#17171750' />
          <stop offset='0.573634' stopColor='#17171750' />
          <stop offset='1' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};
