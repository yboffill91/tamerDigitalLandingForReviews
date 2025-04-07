'use client';
import React from 'react';
import Image from 'next/image';
import {
  Search,
  Settings2,
  Globe,
  Megaphone,
  UserCheck,
  FileSpreadsheet,
} from 'lucide-react';
import { LeadingSection } from '../../components';
import { BsArrowsExpand } from 'react-icons/bs';

export const EcomerceProcess = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            Our Process
          </div>
          <h2 className="text-2xl font-bold text-foreground mt-6 mb-6">
            Strategic E-commerce SEO Implementation Process
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Our comprehensive approach to e-commerce SEO follows a proven
            methodology that maximizes visibility, drives qualified traffic, and
            increases conversions.
          </p> */}
          <LeadingSection
            badgeText="Our Process"
            description="Our comprehensive approach to e-commerce SEO follows a proven
            methodology that maximizes visibility, drives qualified traffic, and
            increases conversions."
            heading="Strategic E-commerce SEO Implementation Process"
            icon={BsArrowsExpand}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-8 mt-12">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Initial SEO Audit & Keyword Research
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Comprehensive site analysis, technical audit, and strategic
                  keyword research focused on commercial intent.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Settings2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Technical Optimization
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Site speed enhancement, mobile optimization, XML sitemap
                  setup, and technical infrastructure improvements.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    On-Page & Content Optimization
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Product page optimization, category structure enhancement, and
                  strategic content development.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Megaphone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Link Building & Off-Page SEO
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Strategic link acquisition, digital PR, and authority building
                  in your e-commerce niche.
                </p>
              </div>

              {/* Step 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    UX & Conversion Optimization
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Enhancing user experience, optimizing checkout process, and
                  improving conversion paths.
                </p>
              </div>

              {/* Step 6 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <FileSpreadsheet className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Monitoring & Optimization
                  </h3>
                </div>
                <p className="text-foreground/80">
                  Continuous performance tracking, analytics review, and
                  strategy refinement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Progress Chart */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold text-foreground">
                  Our Workflow
                </h3>
                <span className="text-sm text-foreground/80">
                  Overall Progress: 100%
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 1: Initial SEO Audit
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">15%</span>
                      <span className="text-xs text-foreground/60">
                        (1-2 weeks)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-[15%] bg-destructive rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 2: Technical Optimization
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">35%</span>
                      <span className="text-xs text-foreground/60">
                        (2-3 weeks)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-[35%] bg-orange-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 3: On-Page & Content
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">60%</span>
                      <span className="text-xs text-foreground/60">
                        (3-4 weeks)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-[60%] bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 4: Link Building
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">80%</span>
                      <span className="text-xs text-foreground/60">
                        (Ongoing)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-[80%] bg-lime-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 5: UX Optimization
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">90%</span>
                      <span className="text-xs text-foreground/60">
                        (2-3 weeks)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-[90%] bg-emerald-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 6: Monitoring
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/80">100%</span>
                      <span className="text-xs text-foreground/60">
                        (Continuous)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-ring/5 rounded-full">
                    <div className="h-full w-full bg-secondary-green rounded-full"></div>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mt-4 italic">
                  * Initial implementation takes 8-12 weeks, with continuous
                  optimization thereafter
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <div className="mt-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <span className="text-foreground/80">Starting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-foreground/80">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary-green"></div>
                    <span className="text-foreground/80">Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-foreground/80">Continuous</span>
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-foreground/10">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Why Our Process Works
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Data-driven approach with measurable milestones</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      Continuous optimization based on performance metrics
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      Adaptable strategy that evolves with your business
                    </span>
                  </li>
                </ul>
              </div>

              {/* Process Image */}
              <div className="mt-8 relative w-full h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/process-workflow.webp"
                  alt="SEO Process Workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
