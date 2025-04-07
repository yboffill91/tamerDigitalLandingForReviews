import React from 'react';
import {
  Benefits,
  Faqs,
  ModernHeroWithGradients,
  PainPoints,
  ProcessSteps,
  SocialImportance,
  SocialMediaBusinessTypes,
  Solution,
  SubscriptionForm,
} from '@/features/services/socialMedia/components';
import { Locations } from '@/components';
import { LocationsList } from '../utils';

const SocialMediaComponents = () => {
  return (
    <main>
      <ModernHeroWithGradients />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <PainPoints />
      </section>
      <section>
        <SocialImportance />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <ProcessSteps />
      </section>
      <section>
        <SocialMediaBusinessTypes />
      </section>
      {/* <Testimonials /> */}
      <Faqs />
      <SubscriptionForm />
    </main>
  );
};

export default SocialMediaComponents;
