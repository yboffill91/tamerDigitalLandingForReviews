'use client';
import Image from 'next/image';
import {
  benefits,
  integrations,
} from '@/features/services/contentMarketing/utils';
import { LeadingSection } from '../../components';
import { HeartPulse } from 'lucide-react';

export const ContentMarketingBenefitsSection = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 '>
      {/* Section Header */}
      <div className='text-center mb-16'>
        <LeadingSection
          badgeText=' Content Marketing Benefits'
          description='Transform your marketing strategy with comprehensive content solutions
          that drive engagement, build authority, and generate measurable
          business results. Our integrated approach ensures your content works
          harder at every stage of the customer journey.'
          heading='Elevate Your Brand Through Strategic Content Marketing'
          icon={HeartPulse}
        />

        {/* Integration Section moved up */}
        <div className='flex justify-center gap-4 mt-4'>
          {integrations.map((integration, index) => (
            <div key={index}>
              <div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl p-3 hover:bg-primary/20 transition-colors'>
                {integration.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-32'>
        {benefits.map((benefit, index) => (
          <div key={index} className='bg-card rounded-xl overflow-hidden'>
            {/* Image Container */}
            <div className='relative h-48 w-full'>
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className='w-full h-full object-cover'
              />
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className='text-xl font-semibold  mb-4'>{benefit.title}</h3>
              <p className='text-foreground/80'>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className='text-center max-w-3xl mx-auto'>
        <p className='text-foreground/90 text-lg leading-relaxed'>
          Partner with our expert content marketing team to create impactful
          content that resonates with your audience, builds lasting
          relationships, and delivers measurable business results across all
          channels.
        </p>
      </div>
    </div>
  );
};
