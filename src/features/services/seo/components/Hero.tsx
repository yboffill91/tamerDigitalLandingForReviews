import Image from 'next/image';
import { TestimonialCard } from './ui/TestimonialCard';
import { Input, ShimmerButton } from '@/components/ui';

export function Hero() {
  return (
    <>
      <div
        className=' relative overflow-hidden flex items-center justify-center 
    pt-32 pb-8'
      >
        {/* Main content */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20'>
          <div className='mx-auto max-w-7xl mt-48'>
            {/* Chat bubble */}
            <div className='flex items-center justify-center mb-4'>
              <div className='flex items-center gap-2'>
                <div className='bg-ring/10 backdrop-blur-sm rounded-2xl px-4 py-2'>
                  <div className='flex gap-1'>
                    <div className='w-2 h-2 bg-foreground rounded-full animate-[bounce_1s_infinite]'></div>
                    <div className='w-2 h-2 bg-foreground rounded-full animate-[bounce_1s_infinite_.2s]'></div>
                    <div className='w-2 h-2 bg-foreground rounded-full animate-[bounce_1s_infinite_.4s]'></div>
                  </div>
                </div>
                <Image
                  src='https://randomuser.me/api/portraits/men/32.jpg'
                  alt='Profile'
                  className='w-10 h-10 rounded-full border-2 border-ring/10 grayscale'
                  width={64}
                  height={64}
                />
              </div>
            </div>

            <h1 className='font-bold text-foreground'>
              <span className='block'>Boost your online visibility with</span>
              <span className='heading-gradient'>Technical SEO</span>
            </h1>
            <p className='mt-10 text-lg leading-8 text-foreground max-w-2xl mx-auto'>
              We optimize your website&apos;s technical structure to enhance
              search engine performance and increase your online visibility.
            </p>
            <div className='mt-16 flex items-center justify-center gap-x-1 relative z-30 '>
              <Input
                type='email'
                placeholder='Enter your website URL'
                className='min-w-96 w-full px-4 py-3 '
              />
              <ShimmerButton variant='solid' className='py-3'>
                Evaluate My Technical SEO
              </ShimmerButton>
            </div>

            {/* Centered row of cards below CTA */}
            <div className='mt-16 flex gap-8 justify-center items-center flex-wrap'>
              <TestimonialCard
                text="Technically optimized sites are 70% more likely to rank in Google's top 10. Our audits detect all critical issues that are holding you back."
                avatarUrl='https://randomuser.me/api/portraits/women/3.jpg'
              />
              <TestimonialCard
                text='53% of users abandon pages that take more than 3 seconds to load. We optimize your speed to reduce bounce rates and keep visitors engaged.'
                avatarUrl='https://randomuser.me/api/portraits/men/6.jpg'
                className=''
              />
            </div>

            {/* Company logos */}
            <div className='mt-24 flex justify-center items-center gap-12'>
              <Image
                src='/features/services/seo/certifiedSeod.png'
                alt='Company 1'
                width={120}
                height={120}
                className='object-contain transition-transform hover:scale-110 opacity-80'
              />
              <Image
                src='/features/services/seo/10years3.png'
                alt='Company 2'
                width={120}
                height={120}
                className='object-contain transition-transform hover:scale-110 opacity-80'
              />
              <Image
                src='/features/services/seo/seosolutione.png'
                alt='Company 3'
                width={120}
                height={120}
                className='object-contain transition-transform hover:scale-110 opacity-80'
              />
              <Image
                src='/features/services/seo/100growth4.png'
                alt='Company 4'
                width={120}
                height={120}
                className='object-contain transition-transform hover:scale-110 opacity-80'
              />
            </div>
          </div>
        </div>

        {/* Floating cards on the left */}
        <div className='absolute left-[10%] top-[35%] -translate-y-1/2 xl:flex hidden flex-col gap-10 z-10'>
          <TestimonialCard
            text='Google has prioritized mobile-friendly sites since 2021. We enhance your responsive design to increase visibility across all devices.'
            avatarUrl='https://randomuser.me/api/portraits/women/1.jpg'
            className='transform -rotate-12 hover:rotate-0 transition-all duration-300 -translate-y-20'
          />
          <TestimonialCard
            text='Properly implemented canonical URLs prevent duplicate content penalties and strengthen your domain authority.'
            avatarUrl='https://randomuser.me/api/portraits/men/2.jpg'
            className='transform rotate-6 hover:rotate-0 transition-all duration-300 -translate-x-36 '
          />
        </div>

        {/* Floating cards on the right */}
        <div className='absolute right-[10%] top-[35%] -translate-y-1/2 xl:flex hidden flex-col gap-10 z-10'>
          <TestimonialCard
            text='68% of search experiences begin with organic searches. Our technical optimization maximizes your visibility in search results.'
            avatarUrl='https://randomuser.me/api/portraits/men/4.jpg'
            className='transform rotate-12 hover:rotate-0 transition-all duration-300 -translate-y-20'
          />
          <TestimonialCard
            text="Technical SEO issues can reduce your traffic by up to 68%. Our comprehensive audits ensure you're not losing valuable visitors."
            avatarUrl='https://randomuser.me/api/portraits/women/5.jpg'
            className='transform -rotate-6 hover:rotate-0 transition-all duration-300 translate-x-36'
          />
        </div>
      </div>
    </>
  );
}
