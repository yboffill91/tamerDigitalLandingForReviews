'use client';
import Image from 'next/image';
import { Target, LineChart, Gauge, Brain, HeartHandshake } from 'lucide-react';
import { LeadingSection } from '../../components';
import { ShimmerButton } from '@/components/ui';

export const EcomerceSEOSolutions = () => {
  return (
    <div className="container mx-auto relative overflow-visible">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <LeadingSection
            badgeText="Your SEO Partner"
            heading="We've Been Where You Are"
            description="Having worked with hundreds of e-commerce stores, we've witnessed firsthand the frustration of seeing competitors outrank you despite having inferior products."
            icon={HeartHandshake}
          />
        </div>
        <div className="max-w-2xl relative z-10">
          <div className="space-y-6">
            <p className="text-foreground/90">
              What sets us apart isn&apos;t just our patent on isolating Google
              ranking factors (though we&apos;re the only SEO firm worldwide
              with one) - it&apos;s our deep understanding of the e-commerce
              ecosystem. We&apos;ve developed and refined our approach through
              years of hands-on experience, helping stores like yours not just
              survive, but thrive in the digital marketplace.
            </p>
            <ShimmerButton variant="solid" size="big">
              Let&apos;s Solve This Together
            </ShimmerButton>
          </div>
        </div>

        <div className="absolute right-0 top-0 -mr-8 lg:-mr-24">
          <div className="relative">
            <Image
              src="/adam-full.jpg"
              width={600}
              height={700}
              alt="SEO Expert"
              className="relative z-20"
            />
            <div className="absolute -right-4 top-8 z-10">
              <Image
                src="/lightning.svg"
                width={180}
                height={180}
                alt="Lightning"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full bg-card/80 backdrop-blur-sm rounded-lg py-16 relative z-0 border border-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Targeted SEO for E-Commerce Success
                </h3>
                <p className="text-foreground/90">
                  We don&apos;t just implement generic SEO tactics - we develop
                  strategies specifically tailored to e-commerce, focusing on
                  what drives actual sales, not just rankings.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Full Transparency, No Surprises
                </h3>
                <p className="text-foreground/90">
                  We believe in complete visibility - you&apos;ll see exactly
                  what we&apos;re doing, why we&apos;re doing it, and how
                  it&apos;s impacting your bottom line. No mysteries, no jargon.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Agile Approach for Ever-Changing Market
                </h3>
                <p className="text-foreground/90">
                  E-commerce moves fast, and so do we. Our agile methodology
                  ensures your SEO strategy evolves with market trends and
                  algorithm updates, keeping you ahead of the curve.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Data-Driven Strategies with Proven Results
                </h3>
                <p className="text-foreground/90">
                  Our strategies aren&apos;t based on hunches - they&apos;re
                  built on over 400 real-world tests and backed by our patented
                  method for understanding Google&apos;s ranking factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
