'use client';
import {
  Search,
  BarChart2,
  Settings,
  FileText,
  Globe,
  Code,
  Rocket,
} from 'lucide-react';
import { LeadingSection } from '../../components';

export function OnPageSEOProcess() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* <h2 className="text-4xl font-bold mb-6">
            Your Journey to SEO Success
          </h2>
          <p className="text-xl text-foreground/90 mb-4">
            A proven step-by-step process that has helped over 500+ businesses
            improve their search rankings
          </p> */}
          <LeadingSection
            badgeText="Ready to Success? "
            description="A proven step-by-step process that has helped over 500+ businesses
            improve their search rankings"
            heading="Your Journey to SEO Success"
            icon={Rocket}
          />
          <div className="flex justify-center gap-6 text-sm text-foreground/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>30-day average implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>97% client satisfaction</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection Lines */}
          <div className="absolute left-[16%] right-[16%] top-[50%] h-px bg-primary/20" />
          <div className="absolute left-[50%] top-[50%] h-px w-[33%] bg-primary/20 transform rotate-90 origin-left" />

          {/* Steps at Bottom */}
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-card/90 border border-foreground/20 rounded-xl p-6">
              <span className="text-4xl font-bold text-foreground/60">1</span>
              <h4 className="text-lg font-semibold  mt-4 mb-3">
                Initial SEO Audit & Strategy
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Comprehensive technical SEO analysis
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Competitor research and benchmarking
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Content gap analysis and planning
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card/90 border border-foreground/20 rounded-xl p-6">
              <span className="text-4xl font-bold text-foreground/60">2</span>
              <h4 className="text-lg font-semibold  mt-4 mb-3">
                Implementation & Optimization
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Technical SEO improvements and fixes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    On-page optimization implementation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Content optimization and creation
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card/90 border border-foreground/20 rounded-xl p-6">
              <span className="text-4xl font-bold text-foreground/60">3</span>
              <h4 className="text-lg font-semibold  mt-4 mb-3">
                Monitor & Scale Results
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <BarChart2 className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Performance tracking and analytics
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Continuous optimization and updates
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground/90">
                    Ranking improvement monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Indicators */}
          <div className="mt-8 grid grid-cols-3 gap-8 text-center text-sm text-foreground/50">
            <div>Week 1</div>
            <div>Weeks 2-3</div>
            <div>Ongoing</div>
          </div>
        </div>
      </div>
    </>
  );
}
