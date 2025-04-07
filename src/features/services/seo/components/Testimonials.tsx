'use client';
import Image from 'next/image';
import {
  Card,
  Quote,
  QuoteDescription,
} from '@/features/services/seo/components/ui';
import { testimonials } from '@/features/services/seo/utils';
import { IconSpeakerphone } from '@tabler/icons-react';
import { LeadingSection } from '@/features/services/components';

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className=' bg-gradient-to-b from-transparent via-card to-transparent'>
      <div className='text-center mb-12'>
        <LeadingSection
          badgeText=' Client Success Stories'
          description="  Don't just take our word for it - see how we've helped
        businesses like yours achieve remarkable growth through technical SEO
        excellence"
          heading='Real Results, Real Transformations'
          icon={IconSpeakerphone}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto items-start px-4 md:px-8 mt-10'>
          {grid.map((testimonialsCol, index) => (
            <div
              key={`testimonials-col-${index}`}
              className='grid gap-4 items-start'
            >
              {testimonialsCol.map((testimonial) => (
                <Card key={`testimonial-${testimonial.src}-${index}`}>
                  <Quote>{testimonial.quote}</Quote>
                  <div className='flex gap-2 items-center mt-8'>
                    <Image
                      src={testimonial.src}
                      alt='Manu Arora'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <div className='flex flex-col'>
                      <QuoteDescription>{testimonial.name}</QuoteDescription>
                      <QuoteDescription className='text-[10px]'>
                        {testimonial.designation}
                      </QuoteDescription>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
