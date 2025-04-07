import { Locations } from '@/components';
import {
  ContentMarketingBenefitsSection,
  ContentMarketingCTASection,
  ContentMarketingFAQSection,
  ContentMarketingHero,
  ContentMarketingProcessSection,
  ContentMarketingServicesGrid,
  ContentMarketingTestimonialsSection,
} from '@/features/services/contentMarketing/components';
import { LocationsList } from '../utils';

const ContentMarketingComponents = () => {
  return (
    <>
      <ContentMarketingHero />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <ContentMarketingServicesGrid />
      </section>
      <section>
        <ContentMarketingBenefitsSection />
      </section>
      <section>
        <ContentMarketingProcessSection />
      </section>
      <section>
        <ContentMarketingTestimonialsSection />
      </section>
      <section>
        <ContentMarketingFAQSection />
      </section>
      <section>
        <ContentMarketingCTASection />
      </section>
    </>
  );
};

export default ContentMarketingComponents;
