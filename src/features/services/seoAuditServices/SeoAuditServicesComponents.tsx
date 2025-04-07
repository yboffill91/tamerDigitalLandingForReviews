import {
  Hero,
  SEOChallenges,
  ImTheSolution,
  ResultsShowcase,
  SEOBenefits,
  SEOProcess,
  ReviewsSection,
  BusinessTypes,
  FAQ,
} from '@/features/services/seoAuditServices/components';
import { Locations } from '@/components';
import { LocationsList } from '../utils';

export default function SEOAuditServicesComponents() {
  return (
    <main>
      <Hero />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <SEOChallenges />
      </section>
      <section>
        <ImTheSolution />
      </section>
      <section>
        <ResultsShowcase />
      </section>
      <section>
        <SEOBenefits />
      </section>
      <section>
        <SEOProcess />
      </section>

      <section>
        <ReviewsSection />
      </section>
      <section>
        <BusinessTypes />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
}
