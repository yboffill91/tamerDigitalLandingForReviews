'use client';
import {
  Globe2,
  Search,
  BarChart,
  Users,
  Settings,
  Target,
  LineChart,
} from 'lucide-react';
import Image from 'next/image';
import { LeadingSection } from '../../components';

export const EcomerceSEOBenefits = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <LeadingSection
          badgeText="Key Benefits"
          heading="Transform Your Store into a Revenue Machine"
          description="Proven SEO Strategies That Drive Real Business Growth"
          icon={Globe2}
        />
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/seo-dashboard.webp"
              width={600}
              height={400}
              alt="SEO Dashboard"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-secondary font-medium">Average ROI</p>
              <p className="text-lg font-bold ">567%</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold  mb-4">
              Transform Your Store into a{' '}
              <span className="text-secondary">Revenue Machine</span>
            </h2>
            <p className="text-xl text-foreground/90 mb-4">
              Proven SEO Strategies That Drive Real Business Growth
            </p>
            <p className="text-foreground/90">
              Stop leaving money on the table. Our specialized e-commerce SEO
              services help you capture more market share, increase organic
              traffic, and most importantly - convert that traffic into paying
              customers. We don&apos;t just promise rankings; we deliver
              measurable business growth.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enhanced Visibility */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <Search className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Enhanced Visibility
            </h3>
            <p className="text-foreground/90 text-center">
              Dominate the first page of search results where your customers are
              actively looking for your products. Increase your brand&apos;s
              visibility and authority in your market.
            </p>
          </div>

          {/* Increased Organic Traffic */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Qualified Traffic
            </h3>
            <p className="text-foreground/90 text-center">
              Attract highly targeted visitors who are actively searching for
              your products, leading to better conversion rates and lower
              acquisition costs.
            </p>
          </div>

          {/* Better User Experience */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <Settings className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Enhanced User Experience
            </h3>
            <p className="text-foreground/90 text-center">
              Improve site navigation and content quality to keep visitors
              engaged longer, leading to higher conversion rates and customer
              satisfaction.
            </p>
          </div>

          {/* Competitive Edge */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Competitive Advantage
            </h3>
            <p className="text-foreground/90 text-center">
              Stay ahead of your competition with advanced SEO strategies that
              help you capture market share and establish industry authority.
            </p>
          </div>

          {/* Cost-Effective Growth */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Sustainable Growth
            </h3>
            <p className="text-foreground/90 text-center">
              Unlike paid advertising, SEO provides long-term benefits with a
              higher ROI, creating a sustainable source of qualified traffic and
              sales.
            </p>
          </div>

          {/* Data-Driven Results */}
          <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold  text-center mb-4">
              Measurable Results
            </h3>
            <p className="text-foreground/90 text-center">
              Track your success with comprehensive analytics that show real
              business impact - from traffic increases to conversion
              improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
