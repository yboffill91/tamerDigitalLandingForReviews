import React from 'react';
import { Timeline } from '@/features/about/components/ui';

export function TimelineDemo() {
  const data = [
    {
      title: 'Early Days',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4'>
            From Havana to Digital Dreams
          </h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Born in Havana, Cuba, where digital opportunities were scarce, my
            passion for technology emerged from countless hours spent gaming.
            This early fascination with digital experiences would later shape my
            entire career path.
          </p>
        </div>
      ),
    },
    {
      title: 'Education',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4 p-2'>
            Foundation in Technology
          </h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Earned my degree from Cuba&apos;s premier computer science
            university. While my academic journey wasn&apos;t traditional, it
            provided the fundamental knowledge that would later prove invaluable
            in the digital marketing landscape.
          </p>
        </div>
      ),
    },
    {
      title: 'First Venture',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4'>Entrepreneurial Beginnings</h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Started my first digital content distribution business in Cuba,
            learning crucial lessons about market needs and digital
            distribution. This experience sparked my entrepreneurial spirit and
            revealed the transformative power of digital solutions.
          </p>
        </div>
      ),
    },
    {
      title: 'Transformation',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4'>Period of Growth</h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Faced significant challenges, including 11 months of profound
            reflection. This period became a catalyst for change, strengthening
            my resolve to create something meaningful in the digital world.
          </p>
        </div>
      ),
    },
    {
      title: 'Renaissance',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4'>Digital Marketing Evolution</h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Immersed myself in programming and digital marketing, building
            expertise from the ground up. Each challenge became a stepping stone
            toward mastery, fueling my passion for helping others succeed in the
            digital space.
          </p>
        </div>
      ),
    },
    {
      title: 'Today',
      content: (
        <div className='max-w-2xl'>
          <h3 className='heading-gradient mb-4'>TAMERDigital&apos;s Vision</h3>
          <p className='text-foreground/90 text-sm md:text-base font-normal leading-relaxed'>
            Now leading TAMERDigital, we transform businesses through innovative
            digital strategies. My journey from tech enthusiast to digital
            marketing expert has shaped our unique approach to helping
            businesses thrive in the digital age.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
