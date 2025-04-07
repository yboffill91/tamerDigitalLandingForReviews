import { cn } from '@/lib';

export const BackgroundGrids = () => {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4'>
      <div className='relative h-full w-full'>
        <GridLineVertical className='left-0' />
        <GridLineVertical className='left-auto right-0' />
      </div>
      <div className='relative h-full w-full'>
        <GridLineVertical className='left-0' />
        <GridLineVertical className='left-auto right-0' />
      </div>
      <div className='relative h-full w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent'>
        <GridLineVertical className='left-0' />
        <GridLineVertical className='left-auto right-0' />
      </div>
      <div className='relative h-full w-full'>
        <GridLineVertical className='left-0' />
        <GridLineVertical className='left-auto right-0' />
      </div>
    </div>
  );
};

interface GridLineVerticalProps {
  className?: string;
  offset?: string;
}

const GridLineVertical: React.FC<GridLineVerticalProps> = ({
  className,
  offset = '150px',
}) => {
  return (
    <div
      style={{
        top: `calc(${offset}/2 * -1)`,
        height: `calc(100% + ${offset})`,
        width: '1px',
      }}
      className={cn(
        'absolute w-[1px]',
        'bg-[linear-gradient(to_bottom,rgba(200,200,200,0.7),rgba(200,200,200,0.1)_80%,transparent_0,transparent)]',
        '[background-size:1px_5px]',
        '[mask:linear-gradient(to_top,#ffffff_90%,transparent),_linear-gradient(to_bottom,#ffffff_90%,transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        className
      )}
    ></div>
  );
};
