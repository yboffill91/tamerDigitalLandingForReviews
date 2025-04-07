import { Badge } from '@/components/ui';
import {
  ShootingStars,
  Circles,
  FeaturedImages,
} from '@/features/services/seoAuditServices/components/ui';
import {
  SEOAuditForm,
  SEOMetricsComparison,
} from '@/features/services/seoAuditServices/components';
import Image from 'next/image';

export function Hero() {
  return (
    <div className='relative  overflow-hidden'>
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        minDelay={300}
        maxDelay={1000}
        starColor='#3b82f6'
        trailColor='#60a5fa'
        starWidth={10}
        starHeight={1}
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10'>
        <div className='text-center pt-44'>
          <div className='relative mb-6'>
            <div className='absolute left-1/2 -translate-x-1/2 -top-36 w-full'>
              <Circles />
            </div>
            <div className='relative z-20'>
              <Badge text="Free SEO Audit Report - Discover Your Site's True Potential" />
            </div>
          </div>
          <h1 className='mb-6  max-w-4xl mx-auto '>
            Your Website Is{' '}
            <span className='heading-gradient underline-offset-1 underline decoration-primary'>
              Losing Clients{' '}
            </span>
            <br />
            Without You Knowing Why
          </h1>

          <p className='text-lg sm:text-xl text-foreground/80 max-w-4xl mx-auto mb-8 sm:mb-12'>
            Don&apos;t let hidden website issues silently drive away potential
            customers. Our comprehensive SEO audit services not only reveal the
            exact problems affecting your site but also provide clear,
            actionable solutions for each issue - helping your business capture
            more leads, maximize sales opportunities, and outperform competitors
            online.
          </p>

          <div className='flex flex-col md:flex-row gap-8 max-w-[1400px] mx-auto'>
            <div className='w-full md:w-[400px] mb-8 md:mb-0'>
              <SEOAuditForm />
            </div>
            <div className='w-full md:flex-1'>
              <SEOMetricsComparison />
              <div className='mt-4 bg-card rounded-lg overflow-hidden'>
                <Image
                  src='/features/services/seo-audit-services/sad.jpg'
                  alt='SEO Dashboard Analytics'
                  className='w-full h-[500px] object-cover object-top opacity-90'
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <FeaturedImages
            textClassName='text-center'
            className='justify-center'
            containerClassName='items-center'
            showStars
          />
        </div>
      </div>
    </div>
  );
}
