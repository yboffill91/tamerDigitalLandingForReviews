import {
  Cards,
  FAQ,
  Features,
  FeaturesTabs,
  HeroSectionWithBeamsAndGrid,
  Locations,
  Process,
  ReadyToGrow,
  Reviews,
  SEOResultsCard,
  Services,
  SocialMedia,
  WhyNeedUs,
} from '@/features/landing/components';

const LandingPage = () => {
  return (
    <main>
      <section
        style={{
          background: 'url(/features/landing/hero_background_att.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative z-40"
      >
        <HeroSectionWithBeamsAndGrid />
        <span className="absolute bottom-0 left-0 h-96 w-screen bg-gradient-to-b from-transparent to-background-primary -z-10" />
      </section>
      <section>
        <Locations />
      </section>
      <section>
        <WhyNeedUs />
        <Cards />
      </section>
      <section className='sm:bg-[url("/features/landing/features/bg-desktop.webp")] bg-[url("/features/landing/features/bg-mobile.webp")] bg-[size(100%_100%)] bg-no-repeat bg-top'>
        <FeaturesTabs />
        <SEOResultsCard />
      </section>
      <section className="">
        <Features />
      </section>
      <section
        className='sm:bg-[url("/features/landing/tools/bg-desktop.webp")] bg-[url("/features/landing/tools/bg-mobile.webp")]bg-[size(100%_100%)] bg-no-repeat bg-top pt-48 pb-[46rem] -mt-52'
        style={{
          backgroundSize: '100%',
        }}
      >
        <Services />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <SocialMedia />
      </section>
      <section
        className='sm:bg-[url("/features/landing/reviews/bg-desktop.webp")] bg-[url("/features/landing/reviews/bg-mobile.webp")]bg-[size(100%_100%)] bg-no-repeat bg-top pt-48 h-[1900px]'
        style={{
          backgroundSize: '100%',
        }}
      >
        <Reviews />
      </section>
      <section>
        <ReadyToGrow />
      </section>
      <section
        className='sm:bg-[url("/features/landing/faq/bg-desktop.webp")] bg-[url("/features/landing/faq/bg-mobile.webp")]bg-[size(100%_100%)] bg-no-repeat bg-top'
        style={{
          backgroundSize: '100%',
        }}
      >
        <FAQ />
      </section>
    </main>
  );
};

export default LandingPage;
