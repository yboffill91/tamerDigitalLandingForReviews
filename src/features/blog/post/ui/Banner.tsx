import Image from 'next/image';

interface BannerProps {
  image: string;
  title: string;
}

export function Banner({ image, title }: BannerProps) {
  return (
    <div className='relative h-[50vh] xl:h-[800px] overflow-hidden  '>
      <Image
        src={image || '/placeholder.svg'}
        alt={title}
        layout='fill'
        objectFit='cover'
        className='opacity-50 h-[50vh] xl:h-[800px]'
        fill
      />
      <div className='absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-b from-transparent to-card/50'>
        <span className='bg-card p-4 rounded-lg border-l-4 border-primary border-offset-2 max-w-3xl xl:max-w-7xl'>
          <h1 className=' text-balance text-center bg-gradient-to-br from-primary via-ring to-secondary bg-clip-text text-transparent font-semibold '>
            {title}
          </h1>
        </span>
      </div>
    </div>
  );
}
