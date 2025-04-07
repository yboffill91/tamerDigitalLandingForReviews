import { Benefit } from '@/features/services/offPageSeo/utils';

export const BenefitCard = ({
  number,
  title,
  tagline,
  description,
}: Benefit) => {
  return (
    <div className='bg-card rounded-lg shadow-lg p-8 transition-all duration-700 ease-in-out hover:shadow-xl border border-ring/10 group hover:border-primary/30 hover:scale-105'>
      <h3 className='  flex items-baseline gap-2'>
        <span className='text-ring'>{number}.</span>
        <span className='group-hover:text-ring transition-colors duration-700 ease-in-out'>
          {title}
        </span>
      </h3>
      <p className='text-sm uppercase tracking-wider text-ring font-medium mb-4'>
        {tagline}
      </p>
      <p className='text-foreground/70 group-hover:text-foreground'>
        {description}
      </p>
    </div>
  );
};
