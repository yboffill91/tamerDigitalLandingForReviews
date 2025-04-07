import { ShimmerButton } from '@/components/ui';
import { ArrowRight, Settings, Zap } from 'lucide-react';

const LayoutPage = () => {
  return (
    <div className='min-h-screen flex flex-col item-center justify-center text-center bg-gradient-to-b from-transparent via-card to-transparent'>
      <h1>Layout Components</h1>
      <h2>Shimmer Button</h2>
      <div className='container mx-auto flex flex-wrap items-center justify-center gap-2'>
        <ShimmerButton>Primary Button</ShimmerButton>
        <ShimmerButton variant='ghost'>Ghost Button</ShimmerButton>
        <ShimmerButton variant='outline'>Outline Button</ShimmerButton>
        <ShimmerButton variant='secondary'>Secondary Button</ShimmerButton>
        <ShimmerButton variant='solid'>Solid Button</ShimmerButton>
        <ShimmerButton className='group'>
          <Zap className='group-hover:rotate-12 size-4 transition-transform duration-300 ease-in mx-2' />
          Icon on Left
        </ShimmerButton>
        <ShimmerButton variant='ghost' className='group'>
          Icon on Right
          <ArrowRight className='group-hover:translate-x-1 size-4 transition-transform duration-300 ease-in mx-2' />
        </ShimmerButton>
        <ShimmerButton variant='outline' className='group'>
          Icon on Right
          <ArrowRight className='group-hover:translate-x-2 group-hover:-translate-y-2 -rotate-45 size-4 transition-transform duration-300 ease-in mx-2' />
        </ShimmerButton>
        <ShimmerButton variant='outline' size='sm'>
          <Settings />
        </ShimmerButton>
        <ShimmerButton variant='solid' size='big'>
          Big Button
        </ShimmerButton>
      </div>
    </div>
  );
};

export default LayoutPage;
