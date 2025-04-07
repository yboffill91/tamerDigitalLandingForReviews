'use client';

import {
  Smartphone,
  Clock,
  Search,
  AlertTriangle,
  HeartCrack,
} from 'lucide-react';

import SEOFactors from './SEOFactors';
import { LeadingSection } from '../../components';

export const OnPageSEOProblemSection = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <LeadingSection
          badgeText="Losing Potential's Visitors"
          description=" If your organic traffic is stagnant, you're likely facing
                serious on-page optimization issues that are affecting your
                visibility"
          heading="Help you it's our business"
          icon={HeartCrack}
          variant="red"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
          {/* Columna izquierda - Imagen */}
          <div className="relative h-full">
            <div className="absolute inset-0">
              <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative h-full rounded-lg bg-card/95 border border-primary/20 backdrop-blur-xl p-8">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-lg bg-gradient-to-tr from-blue-600/20 to-card/20 backdrop-blur-xl border border-foreground/10 shadow-2xl"></div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="space-y-8 relative">
            <div className="absolute inset-0">
              <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your website is losing{' '}
                <span className="text-secondary">thousands of visitors</span>{' '}
                due to on-page SEO issues
              </h2>
              <p className="text-xl text-foreground/90">
                If your organic traffic is stagnant, you&apos;re likely facing
                serious on-page optimization issues that are affecting your
                visibility
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-card rounded-lg p-3 mr-4">
                    <AlertTriangle size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary/80">
                    Plummeting Traffic
                  </h3>
                </div>
                <p className="text-foreground/90">
                  You&apos;re losing Google rankings month after month while your
                  competitors surpass you, despite having good content.
                </p>
              </div>

              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-card rounded-lg p-3 mr-4">
                    <Clock size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary/80">
                    Alarming Bounce Rates
                  </h3>
                </div>
                <p className="text-foreground/90">
                  Visitors leave your site in less than 10 seconds because of
                  poor user experience and slow-loading pages.
                </p>
              </div>

              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-card rounded-lg p-3 mr-4">
                    <Search size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary/80">
                    Keywords Not Ranking
                  </h3>
                </div>
                <p className="text-foreground/90">
                  You invest time creating content for specific keywords but
                  fail to appear in search results, even for low-competition
                  terms.
                </p>
              </div>

              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-card rounded-lg p-3 mr-4">
                    <Smartphone size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary/80">
                    Mobile Penalty
                  </h3>
                </div>
                <p className="text-foreground/90">
                  Google is penalizing your site because it&apos;s not optimized for
                  mobile devices, losing over 60% of potential traffic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frase de impacto */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <blockquote className="text-2xl font-medium italic text-foreground/90 max-w-3xl mx-auto">
            &quot;Every day these problems remain unsolved, you&apos;re{' '}
            <span className="text-secondary">losing potential customers</span>{' '}
            who are finding your competition instead of you.&quot;
          </blockquote>
        </div>

        <SEOFactors />
      </div>
    </>
  );
};
