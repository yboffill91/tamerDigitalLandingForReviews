import { cn } from '@/lib';

export const TopGradient = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='807'
      height='797'
      viewBox='0 0 807 797'
      fill='none'
      className={cn(
        'pointer-events-none absolute -left-96 top-0 h-full w-full',
        className
      )}
    >
      <path
        d='M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z'
        fill='url(#paint0_radial_254_135)'
      />
      <path
        d='M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z'
        fill='url(#paint1_radial_254_135)'
      />
      <defs>
        <radialGradient
          id='paint0_radial_254_135'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)'
        >
          <stop stopColor='#17171750' />
          <stop offset='0.25' stopColor='#17171750' />
          <stop offset='0.573634' stopColor='#17171750' />
          <stop offset='1' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_254_135'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)'
        >
          <stop stopColor='#17171750' />
          <stop offset='0.283363' stopColor='#17171750' />
          <stop offset='0.573634' stopColor='#17171750' />
          <stop offset='1' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};
