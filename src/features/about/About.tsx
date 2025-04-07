import AboutHero from '@/features/about/components/AboutHero';
import CoreValues from '@/features/about/components/CoreValues';
import TeamSection from '@/features/about/components/TeamSection';
import { TimelineDemo } from '@/features/about/components/TimelineDemo';
import VisionSection from '@/features/about/components/VisionSection';
import CTASection from '@/features/about/components/CTASection';

export default function About() {
  return (
    <main>
      <AboutHero />
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
