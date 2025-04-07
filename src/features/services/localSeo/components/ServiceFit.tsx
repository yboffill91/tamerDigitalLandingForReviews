'use client';
import React from 'react';
import {
  Check,
  X,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  AlertTriangle,
  Clock,
  Building,
  SearchCheck,
} from 'lucide-react';
import { InfoCard, ShimmerButton } from '@/components/ui';
import { LeadingSection } from '../../components';

export const ServiceFit = () => {
  const rightFit = [
    {
      title: 'Local Business Focus',
      description:
        'Established business ready to expand your local market presence and reach',
      icon: Building,
    },
    {
      title: 'Growth Mindset',
      description:
        'Committed to a 3-6 month strategy for sustainable, long-term market dominance',
      icon: TrendingUp,
    },
    {
      title: 'Growth Vision',
      description:
        'Clear vision for scaling your business and ready to capture a larger market share',
      icon: DollarSign,
    },
    {
      title: 'Quality Service',
      description:
        'Confident in your service quality and prepared to serve more customers',
      icon: Users,
    },
    {
      title: 'Competitive Edge Needed',
      description:
        'Ready to outperform competitors and become the go-to choice in your market',
      icon: Target,
    },
  ];

  const notRightFit = [
    {
      title: 'Unrealistic Expectations',
      description:
        'Seeking instant results (24-48 hours) without understanding SEO timeline',
      icon: AlertTriangle,
    },
    {
      title: 'New Ventures',
      description:
        'Just starting out without established customer base or business reputation',
      icon: Building,
    },
    {
      title: 'Limited Budget',
      description:
        'Not ready to invest in professional growth strategies for your business',
      icon: DollarSign,
    },
    {
      title: 'DIY Mindset',
      description:
        'Prefer quick fixes over proven strategies for sustainable growth',
      icon: Users,
    },
    {
      title: 'Not Growth-Ready',
      description:
        'No clear vision for business expansion or scaling operations',
      icon: Clock,
    },
    {
      title: 'Non-Compliant',
      description:
        'Offering services that violate Google Business Profile terms of service',
      icon: AlertTriangle,
    },
  ];

  return (
    <div className='relative py-24 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <div className='absolute right-0 top-20 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-destructive/10 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <LeadingSection
          icon={SearchCheck}
          badgeText='Is Premium Local SEO Right For You?'
          heading='Our service delivers exceptional results for specific types of
            businesses'
          description='Discover if this service is the right solution for your business'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Right Fit Column */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center'>
                <Check className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-semibold text-primary'>
                This Service IS FOR YOU If...
              </h3>
            </div>

            <div className='space-y-6'>
              {rightFit.map(({ title, icon, description }, index) => (
                <InfoCard
                  color='blue'
                  key={index + title}
                  index={index}
                  title={title}
                  icon={icon}
                  description={description}
                />
              ))}
            </div>
          </div>

          {/* Not Right Fit Column */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center'>
                <X className='w-6 h-6 text-destructive' />
              </div>
              <h3 className='text-xl font-semibold text-destructive'>
                This Service is NOT FOR YOU If...
              </h3>
            </div>

            <div className='space-y-6'>
              {notRightFit.map(({ icon, description, title }, index) => (
                <InfoCard
                  key={title + index}
                  index={index}
                  title={title}
                  description={description}
                  icon={icon}
                  color='red'
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className='text-foreground/80 mb-6'>
            If you identify with the blue column, then we have excellent news
            for you: you&apos;re exactly in the right place.
          </p>
          <ShimmerButton variant='solid' size='big'>
            I Want to Analyze My Market Potential!
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};
