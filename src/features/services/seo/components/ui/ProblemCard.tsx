import { Problem } from '@/features/services/seo/utils';

export const ProblemCard = ({ icon: IconElement, title, problem }: Problem) => {
  return (
    <div className='bg-card/5 backdrop-blur-sm border border-ring/10 rounded-xl p-6 text-left transform hover:-translate-y-1 transition-transform duration-300 group'>
      <div className='flex items-center gap-3 mb-4'>
        <div className='bg-ring/10 w-10 h-10 rounded-lg flex items-center justify-center'>
          <IconElement
            size={24}
            className='text-primary group-hover:text-ring '
          />
        </div>
        <h3 className='text-primary group-hover:text-ring text-lg font-semibold'>
          {title}
        </h3>
      </div>
      <p className='text-foreground'>{problem}</p>
    </div>
  
  );
};
