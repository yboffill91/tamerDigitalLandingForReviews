import { Locations } from '@/components';
import {
  BenefitsSection,
  DigitalAuthoritySection,
  ExpertProfileSection,
  FAQSection,
  Hero,
  IndustriesSection,
  StepByStepSection,
  TestimonialsMarqueeGrid,
  CTASection,
} from '@/features/services/offPageSeo/components';
import { LocationsList } from '../utils';

export default function OffPageSeoComponents() {
  return (
    <main className='relative'>
      {/* Blue gradient background effect */}
      <div className='fixed -z-40 left-1/2 top-[80%] -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl'></div>
      <Hero />
      <Locations LocationList={LocationsList} />
      <section>
        <DigitalAuthoritySection />
      </section>
      <section>
        <ExpertProfileSection />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <StepByStepSection />
      </section>
      <section>
        <TestimonialsMarqueeGrid />
      </section>
      <section>
        <IndustriesSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <CTASection />
      </section>
    </main>
  );
}
