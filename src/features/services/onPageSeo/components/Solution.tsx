'use client';
import React from 'react';
import { Award, CheckCircle, HeartHandshake, Trophy } from 'lucide-react';
import { LeadingSection } from '../../components';
import Image from 'next/image';

export function OnPageSEOSolution() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="absolute inset-0">
              <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative h-full rounded-lg bg-card/95 border border-primary/20 backdrop-blur-xl p-8">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                alt="SEO Analytics Dashboard"
                className="w-full h-full object-cover rounded-lg"
                width={1200}
                height={800}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <LeadingSection
              badgeText="The Solution You Need"
              description=" We've helped hundreds of businesses overcome these exact
                challenges and achieve top rankings in Google."
              heading="Expert SEO optimization to multiply your visibility"
              icon={HeartHandshake}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-ring/10 rounded-lg p-3 mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Industry Expertise
                    </h3>
                    <p className="text-foreground/80 text-sm mt-1">
                      10+ years specializing in SEO optimization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/95 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start mb-4">
                  <div className="bg-ring/10 rounded-lg p-3 mr-4">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Proven Results
                    </h3>
                    <p className="text-foreground/80 text-sm mt-1">
                      500+ businesses ranking on first page
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-ring/10 rounded-lg p-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/90">
                  We understand the frustration of watching competitors outrank
                  you despite having inferior content. We&apos;ve helped
                  countless businesses overcome this exact challenge.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-ring/10 rounded-lg p-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/90">
                  Our proven methodology has consistently delivered 3-5x
                  increases in organic traffic for our clients within the first
                  6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
