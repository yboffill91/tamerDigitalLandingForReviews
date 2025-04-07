import { Badge, Input, ShimmerButton } from '@/components/ui';
import { TopLines } from '@/features/services/socialMedia/components/ui';
import {
  AnimatedListDemo,
  EmailInterface,
  SchedulePostUI,
  SocialIconsCarousel,
} from '@/features/services/socialMedia/components';

export function ModernHeroWithGradients() {
  return (
    <div className='relative min-h-screen w-full overflow-visible'>
      <div className='relative z-20 mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-4'>
        <div className='relative overflow-visible py-32'>
          <div className='lg:block hidden'>
            <TopLines />
          </div>

          <div className='relative z-20 flex  flex-col-reverse items-center justify-center overflow-visible'>
            <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-12'>
              <div className='lg:absolute lg:-left-8 xl:-left-12 2xl:-left-16 z-50 lg:mt-96'>
                <SchedulePostUI />
              </div>
              <div className='lg:absolute lg:-right-8 xl:-right-12 2xl:-right-16 z-50 lg:mt-24'>
                <EmailInterface />
              </div>
              <div className='flex flex-col items-center mx-auto max-w-3xl px-4'>
                <div className='mb-6'>
                  <Badge text='Free Social Media Audit - Unlock Your Growth Potential' />
                </div>
                <h1 className='text-center capitalize'>
                  transform your social media into a{' '}
                  <span className='heading-gradient capitalize'>
                    Revenue-generating machine
                  </span>
                </h1>
                <p className='mx-auto max-w-2xl py-4 text-center text-base  md:text-lg text-pretty'>
                  Stop struggling with inconsistent content and low engagement.
                  Our expert team creates scroll-stopping content, manages your
                  community, and turns your followers into customers while you
                  focus on running your business.
                </p>
                <div className='mx-auto max-w-md w-full mt-8 space-y-12'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='relative flex-1'>
                      <Input
                        type='email'
                        placeholder='Enter your email'
                        className='rounded-md mr-2'
                      />
                    </div>
                    <ShimmerButton variant='solid' className='py-3'>
                      Get Started
                    </ShimmerButton>
                  </div>
                  <div className='w-full max-w-xl mx-auto'>
                    <AnimatedListDemo />
                  </div>
                  <div className='w-full absolute -bottom-56 left-0'>
                    <SocialIconsCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
