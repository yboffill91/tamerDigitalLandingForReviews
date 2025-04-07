'use client';
import Image from 'next/image';
import { Award, Users, Clock, Trophy, Search } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export function Solution() {
  return (
    <section className='relative w-full overflow-hidden pt-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Authority badges */}
        <div className='flex flex-wrap justify-center gap-6 mb-16 rounded-lg'>
          {[
            { icon: Award, label: 'MIT Certified SEO Experts' },
            { icon: Users, label: '1,000+ Websites Optimized' },
            { icon: Clock, label: '24/7 Support' },
            { icon: Trophy, label: 'Google Search Excellence Award' },
          ].map((badge, index) => (
            <div
              key={index}
              className='flex items-center gap-2 bg-card backdrop-blur-sm px-4 py-2 rounded-full border border-ring/10 '
            >
              <badge.icon size={16} className='text-primary font-bold' />
              <span className='text-primary text-sm font-bold'>
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main heading */}
        <div className='text-center mb-16'>
          <LeadingSection
            badgeText='Your Technical SEO Partner'
            description="With over 10 years of experience and 1,000+ successful projects, we've been where you are. We understand the frustration of watching your rankings drop despite creating great content. Our team of MIT-certified SEO experts has developed a proven system that has helped businesses like yours achieve an average 312% increase in organic traffic."
            heading='A Decade of Excellence in
Technical SEO Optimization'
            icon={Search}
          />
        </div>

        {/* Left image with right content */}
        <div className='relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='relative aspect-[4/3] lg:aspect-square'>
              <Image
                src='/features/services/seo/seosolutione.png'
                alt='Technical SEO Analysis'
                width={1200}
                height={1200}
                className='relative transform hover:scale-[1.02] transition-transform duration-300'
              />
            </div>
            <div>
              <div className='inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                Our Approach
              </div>
              <h2 className='mt-6 text-2xl font-bold text-foreground'>
                We&apos;ve Been in Your Shoes
              </h2>
              <p className='mt-4 text-lg text-foreground/90'>
                Like many of our clients, we once struggled with technical SEO
                issues that seemed impossible to solve. This firsthand
                experience drove us to develop our proprietary TechSEO
                Framework™, which has now become the industry standard for
                technical optimization. Our approach combines deep technical
                expertise with practical business understanding.
              </p>
              <ul className='mt-8 space-y-4'>
                {[
                  'MIT-certified technical analysis methodology',
                  'Google-approved optimization techniques',
                  'AI-powered performance enhancement',
                  'Enterprise-level security protocols',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 text-foreground/90'
                  >
                    <div className='h-2 w-2 rounded-full bg-primary' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right image with left content */}
        <div className='relative mt-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='lg:order-2 relative aspect-[4/3] lg:aspect-square'>
              <Image
                src='/features/services/seo/10years3.png'
                alt='SEO Implementation'
                width={1200}
                height={1200}
                className='relative transform hover:scale-[1.02] transition-transform duration-300'
              />
            </div>
            <div className='lg:order-1'>
              <div className='inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                Our Promise
              </div>
              <h2 className='mt-6 text-2xl font-bold text-foreground'>
                Not Just Consultants, Your Technical Partners
              </h2>
              <p className='mt-4 text-lg text-foreground/90'>
                We&apos;re not here to just hand you a report and walk away. Our
                team of certified experts becomes an extension of your business,
                handling everything from analysis to implementation. We&apos;ve
                helped companies from startups to Fortune 500s overcome the
                exact challenges you&apos;re facing today.
              </p>
              <ul className='mt-8 space-y-4'>
                {[
                  'Dedicated technical SEO team',
                  'Proven 8-step optimization process',
                  'Weekly progress updates',
                  '100% satisfaction guarantee',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 text-foreground/90'
                  >
                    <div className='h-2 w-2 rounded-full bg-primary' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
