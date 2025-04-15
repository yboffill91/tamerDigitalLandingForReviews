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
        <WhyNeedUs />
        <Cards />
      </section>
      <section>
        <Locations />
      </section>
      <section>
        <FeaturesTabs />
        <SEOResultsCard />
      </section>
      <section>
        {/* <FreeTools /> */}
        <Features />
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
      <section>
        <Reviews />
      </section>
      <section>
        <ReadyToGrow />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
};

export default LandingPage;
