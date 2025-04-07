import { Grid, HeroButtonsSet } from '@/components/ui';

export function BlogCTA() {
  return (
    <section className='relative max-w-5xl mx-auto mb-10'>
      <div className='w-full mx-auto'>
        <div className='relative overflow-hidden rounded-lg border'>
          <Grid />
          <div className='absolute inset-0'>
            <div className='absolute inset-0' />
            <div
              className='absolute inset-0'
              style={{
                maskImage: 'linear-gradient(to left, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
              }}
            />
            <div className='pointer-events-none absolute right-0 top-0 h-full '>
              <div className='absolute inset-0'></div>
            </div>
          </div>

          <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12'>
            <div className='inset-0 absolute top-0 left-0 -z-0 w-full h-full bg-gradient-to-tr from-primary/5 via-card to-secondary/5'></div>
            <div className='flex text-center justify-center flex-col p-4 relative z-40'>
              <h2 className=''>
                Want to Learn
                <span className='heading-gradient'> More?</span>
              </h2>
              <p className='text-foreground/90 max-w-xl mb-12'>
                Discover our comprehensive approach to digital growth and meet
                our expert team.
              </p>
              <HeroButtonsSet
                firstBtnText='About Us'
                firstBtnLink='/about'
                secondBtnText='Contact Us'
                secondBtnLink='/contact'
                isCentered
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
