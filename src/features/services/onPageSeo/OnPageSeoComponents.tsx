import React from 'react';
import {
  OnPageSEOFAQ,
  OnPageSeoHero,
  OnPageSEONewsletter,
  OnPageSEOProblemSection,
  OnPageSEOProcess,
  OnPageSEOSolution,
  OnPageSEOTestimonials,
} from './components';
import { Locations } from '@/components';
import { LocationsList } from '../utils';

const OnPageSeoComponents = () => {
  return (
    <main className="overflow-hidden">
      <OnPageSeoHero />
      <section>
        <Locations LocationList={LocationsList} />
      </section>

      <section>
        <OnPageSEOProblemSection />
      </section>
      <section>
        <OnPageSEOSolution />
      </section>
      <section>
        <OnPageSEOTestimonials />
      </section>
      <section>
        <OnPageSEOProcess />
      </section>
      <section>
        <OnPageSEOFAQ />
      </section>
      <section>
        <OnPageSEONewsletter />
      </section>
      {/* <Newsletter /> */}
    </main>
  );
};

export default OnPageSeoComponents;
