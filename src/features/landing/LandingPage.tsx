import {
  FeaturesTabs,
  FreeTools,
  HeroSectionWithBeamsAndGrid,
  Locations,
  Process,
  SEOResultsCard,
  Services,
  SocialMedia,
  WhyNeedUs,
} from '@/features/landing/components';

const LandingPage = () => {
  return (
    // <main className="relative antialiased overflow-x-hidden flex flex-col gap-y-8 ">
    //   <section
    //     aria-labelledby="hero-title"
    //     className="relative"
    //     style={{
    //       background: 'url(/features/landing/hero_background_att.webp)',
    //       backgroundSize: 'cover',
    //       backgroundRepeat: 'no-repeat',
    //     }}
    //   >
    //     <div className="absolute z-0 bottom-0 left-0 h-96 w-screen bg-gradient-to-b from-transparent from-20% to-background-primary" />
    //     <HeroSectionWithBeamsAndGrid />
    //   </section>
    //   <section aria-labelledby="Analitycs" className="relative   ">
    //     <WhyNeedUs />
    //   </section>
    //   <section aria-labelledby="Locations" className="relative   ">
    //     <Locations />
    //   </section>
    //   <section aria-labelledby="features">
    //     <div className="   px-2">
    //       <FeaturesTabs />
    //       <SEOResultsCard />
    //     </div>
    //   </section>
    //   <section aria-labelledby="Features" className="  px-2">
    //     <Features />
    //   </section>
    //   <section aria-labelledby="Services" className="  px-2">
    //     <Services />
    //   </section>
    //   <section>
    //     <Process />
    //   </section>
    //   <section>
    //     <ReadyToGrow />
    //   </section>

    //   <section>
    //     <SocialMedia />
    //   </section>

    //   <section aria-labelledby="Reviews" className="">
    //     <Reviews />
    //   </section>
    //   <section aria-labelledby="Reviews" className="">
    //     <FreeTools />
    //   </section>
    //   <section aria-labelledby="FAQ  px-2">
    //     <FAQ />
    //   </section>
    // </main>
    <main>
      <section
        style={{
          background: 'url(/features/landing/hero_background_att.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeroSectionWithBeamsAndGrid />
      </section>
      <section>
        <WhyNeedUs />
      </section>
      <section>
        <Locations />
      </section>
      <section>
        <FeaturesTabs />
        <SEOResultsCard />
      </section>
      <section>
        <FreeTools />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <SocialMedia />
      </section>
    </main>
  );
};

export default LandingPage;
