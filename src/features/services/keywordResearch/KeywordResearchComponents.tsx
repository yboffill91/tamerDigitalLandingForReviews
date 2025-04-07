import {
  Benefits,
  FAQ,
  FinalCTA,
  HeroSectionWithImagesGrid,
  HowItWorks,
  Problems,
  Solution,
  Testimonials,
} from '@/features/services/keywordResearch/components';
import { Locations } from '@/components';
import { LocationsList } from '../utils';

export default function KeywordResearchComponents() {
  return (
    <main>
      <section>
        <HeroSectionWithImagesGrid />
      </section>
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <Problems />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <FinalCTA />
      </section>
    </main>
  );
}
