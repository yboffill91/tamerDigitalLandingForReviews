import { cn } from '@/lib';
import { MagicCard } from '@/components/ui';
import { Star } from 'lucide-react';
import { testimonials } from '@/features/services/offPageSeo/utils';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className='relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]'>
      <Marquee direction='right' pauseOnHover speed={50} className='!w-full'>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <h4 className='text-primary font-bold mb-2'>
              {testimonial.headline}
            </h4>
            <Quote>{testimonial.quote}</Quote>
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-500 text-yellow-500'
                />
              ))}
            </div>
            <div className='flex gap-2 items-center mt-8'>
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className='rounded-full'
              />
              <div className='flex flex-col'>
                <QuoteDescription className='text-foreground/80'>
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className='text-foreground/80'>
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee
        className='mt-10 !w-full'
        direction='right'
        pauseOnHover
        speed={70}
      >
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <h4 className='text-primary font-bold mb-2'>
              {testimonial.headline}
            </h4>
            <Quote>{testimonial.quote}</Quote>
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <div className='flex gap-2 items-center mt-8'>
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className='rounded-full'
              />
              <div className='flex flex-col'>
                <QuoteDescription className='text-neutral-300'>
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className='text-neutral-400'>
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <MagicCard
      className={cn(
        'p-4 md:p-8 rounded-lg min-h-[200px] md:min-h-[230px] h-full max-w-[280px] md:max-w-lg mx-2 md:mx-4 bg-card backdrop-blur-sm cursor-pointer border border-ring',
        className
      )}
      gradientColor='rgba(59, 130, 246, 0.1)'
    >
      {children}
    </MagicCard>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'text-sm md:text-base text-pretty text-foreground py-2',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-xs md:text-sm text-foreground/80 max-w-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
