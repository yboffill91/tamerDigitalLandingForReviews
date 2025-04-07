import React from 'react';
import { LocationsList } from '../utils';
import { Locations } from '@/components';
import {
  About,
  BusinessTypes,
  CountdownOffer,
  FAQ,
  Features,
  HeroSection,
  Process,
  Schedule,
  ServiceFit,
  ServicesSection,
  TestimonialsMarqueeGrid,
} from './components';

const LocalSeoComponents = () => {
  return (
    <main className='flex flex-col  gap-y-12 '>
      <HeroSection />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
      <Process />
      <section>
        <TestimonialsMarqueeGrid />
      </section>
      <section>
        <ServiceFit />
      </section>
      <section>
        <CountdownOffer />
      </section>
      <section>
        <BusinessTypes />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Schedule />
      </section>
    </main>
  );
};

export default LocalSeoComponents;
