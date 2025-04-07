import {
  Benefits,
  CTA,
  FAQ,
  Hero,
  Industries,
  Problem,
  Process,
  Solution,
} from '@/features/services/seo/components';
import { TestimonialsMasonryGrid } from './components/Testimonials';
import { Locations } from '@/components';
import { LocationsList } from '@/features/services/utils';

export default function SEOComponents() {
  return (
    <>
      <Hero />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <Problem />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Industries />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <TestimonialsMasonryGrid />
      </section>
      <section>
        <FAQ />
      </section>
      <CTA />
    </>
  );
}
