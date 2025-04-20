import AboutHero from '@/features/about/components/AboutHero';
import CoreValues from '@/features/about/components/CoreValues';
import TeamSection from '@/features/about/components/TeamSection';
import { TimelineDemo } from '@/features/about/components/TimelineDemo';
import VisionSection from '@/features/about/components/VisionSection';
import CTASection from '@/features/about/components/CTASection';

export default function About() {
  return (
    <main>
      <div className='bg-[url("/features/about/about-hero-bg.webp")] bg-top bg-cover bg-no-repeat'>
        <AboutHero />
      </div>
      <section>
        <CoreValues />
      </section>
      <section>
        <TeamSection />
      </section>
      <section>
        <TimelineDemo />
      </section>
      <section>
        <VisionSection />
      </section>
      <section>
        <CTASection />
      </section>
    </main>
  );
}
