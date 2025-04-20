import { Locations } from '@/components';
import {
  GoogleAdsBenefits,
  GoogleAdsBusinessTypes,
  GoogleAdsCTA,
  GoogleAdsFAQ,
  GoogleAdsHero,
  GoogleAdsProblem,
  GoogleAdsProcess,
  GoogleAdsReviews,
  GoogleAdsSolution,
} from '@/features/services/googleAds/components';
import { LocationsList } from '@/features/services/utils';

export default function GoogleAdsComponents() {
  return (
    <main
      style={{
        backgroundImage: 'url("/features/services/google-ads/google-bg.webp")',
        backgroundSize: '100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <GoogleAdsHero />
      <section>
        <Locations LocationList={LocationsList} />
      </section>
      <section>
        <GoogleAdsProblem />
      </section>
      <section>
        <GoogleAdsSolution />
      </section>
      <section>
        <GoogleAdsBenefits />
      </section>
      <section>
        <GoogleAdsProcess />
      </section>
      <section>
        <GoogleAdsReviews />
      </section>
      <section>
        <GoogleAdsBusinessTypes />
      </section>
      <section>
        <GoogleAdsFAQ />
      </section>
      <section>
        <GoogleAdsCTA />
      </section>
    </main>
  );
}
