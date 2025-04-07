import Image from 'next/image';

interface ImageGridProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const ImageGridItem = ({
  imageSrc,
  title,
  subtitle,
}: ImageGridProps) => {
  return (
    <div className='relative flex-1 rounded-lg overflow-hidden border border-ring/10 group'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-ring/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      <Image
        src={imageSrc}
        alt={title}
        width={1600}
        height={1200}
        className='w-full h-full object-cover'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-background-primary/80 via-background-primary/10 to-transparent'>
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <h3 className='text-xl font-bold text-foreground mb-2'>{title}</h3>
          <p className='text-foreground'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
