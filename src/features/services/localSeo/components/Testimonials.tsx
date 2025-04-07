'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { MagicCard } from '@/components/ui';
import { Speaker, Star } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export function TestimonialsMarqueeGrid() {
  return (
    <div className='relative  overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <div className='absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-dprimary/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-dprimary/10 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden h-full'>
        <LeadingSection
          badgeText='Client Success Stories'
          description='Real stories from businesses that have transformed their local presence and achieved remarkable growth through our proven strategies.'
          heading='Trusted by Local Businesses Worldwide'
          icon={Speaker}
        />

        <div className=' relative'>
          <div className='h-full overflow-hidden w-full'>
            <TestimonialsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className='relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]'>
      <Marquee direction='right' pauseOnHover speed={50} className='!w-full'>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <h4 className='text-dprimary font-bold mb-2'>
              {testimonial.headline}
            </h4>
            <Quote>{testimonial.quote}</Quote>
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <div className='flex gap-2 items-center mt-8'>
              <Image
                src={testimonial.src}
                alt='Manu Arora'
                width={40}
                height={40}
                className='rounded-full'
              />
              <div className='flex flex-col'>
                <QuoteDescription className='text-neutral-600 dark:text-neutral-300'>
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className='text-neutral-400'>
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee
        className='mt-10 !w-full'
        direction='right'
        pauseOnHover
        speed={70}
      >
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <h4 className='text-dprimary font-bold mb-2'>
              {testimonial.headline}
            </h4>
            <Quote>{testimonial.quote}</Quote>
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <div className='flex gap-2 items-center mt-8'>
              <Image
                src={testimonial.src}
                alt='Manu Arora'
                width={40}
                height={40}
                className='rounded-full'
              />
              <div className='flex flex-col'>
                <QuoteDescription className='text-neutral-300'>
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className='text-neutral-400'>
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <MagicCard
      className={cn(
        'p-4 md:p-8 rounded-xl min-h-[200px] md:min-h-[230px] h-full max-w-[280px] md:max-w-lg mx-2 md:mx-4 bg-card/50 backdrop-blur-sm cursor-pointer',
        className
      )}
      gradientColor='rgba(59, 130, 246, 0.1)'
    >
      {children}
    </MagicCard>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn('text-sm md:text-base  py-2', className)}>{children}</h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-xs md:text-sm font-normal text-foreground/90 max-w-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  headline: string;
  name: string;
  designation: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Miami Restaurant',
    headline: '200% More Customers',
    quote:
      "Before working with Jorge, we were struggling to attract diners beyond word-of-mouth. Now our restaurant appears at the top of local searches, we've seen a 200% increase in Google Maps views, and our tables are consistently full. The transformation in our business has been incredible.",
    src: 'https://i.pravatar.cc/150?img=1',
    designation: 'Restaurant Owner',
  },
  {
    name: 'Elite Fitness',
    headline: 'Doubled Gym Members',
    quote:
      "Before, we were invisible in local searches, losing potential members to bigger chains. After implementing Jorge's Local SEO strategy, our membership inquiries doubled in just 3 months. Now we're the go-to fitness center in Miami, and I feel confident about our digital presence.",
    src: 'https://i.pravatar.cc/150?img=2',
    designation: 'Fitness Center Owner',
  },
  {
    name: 'Bright Smile Dental',
    headline: 'Neighborhood Leader',
    quote:
      "We used to rely heavily on referrals and struggled to attract new patients online. Since working with Jorge, our practice dominates local searches. We've become the most visible dental office in our area, and our new patient appointments have increased by 150%.",
    src: 'https://i.pravatar.cc/150?img=3',
    designation: 'Dental Practice Director',
  },
  {
    name: 'Premium Auto Care',
    headline: 'Top 3 Rankings',
    quote:
      "Previously, we were losing business to larger auto shops with bigger marketing budgets. After implementing Jorge's Local SEO strategies, we now rank in the top 3 for every relevant search term. Our ROI has been phenomenal - we've seen a 180% increase in new customers.",
    src: 'https://i.pravatar.cc/150?img=4',
    designation: 'Auto Shop Owner',
  },
  {
    name: 'Miami Luxury Realty',
    headline: 'Expanded Market Reach',
    quote:
      "Before Jorge's help, our properties weren't getting the online visibility they deserved. Now we're getting quality leads from areas we never reached before, and our properties are selling faster. Our digital presence has completely transformed our business model.",
    src: 'https://i.pravatar.cc/150?img=5',
    designation: 'Real Estate Agency Manager',
  },
  {
    name: 'Oceanview Hotel',
    headline: 'Direct Bookings Surge',
    quote:
      "We were spending a fortune on booking platforms and struggling with direct reservations. Since optimizing our local presence, direct bookings have increased by 85%, and we've reduced our dependency on expensive third-party platforms. The savings alone paid for the SEO investment.",
    src: 'https://i.pravatar.cc/150?img=6',
    designation: 'Hotel Operations Manager',
  },
  {
    name: 'Glamour Beauty',
    headline: 'Fully Booked Salon',
    quote:
      "I was worried about competing with established salons in the area. After implementing Jorge's strategies, we've become the most booked beauty spot downtown. Our appointment calendar is consistently full, and we've had to hire three new stylists to keep up with demand.",
    src: 'https://i.pravatar.cc/150?img=7',
    designation: 'Beauty Salon Owner',
  },
  {
    name: 'Downtown Hardware',
    headline: 'Outranking Big Chains',
    quote:
      "As a small hardware store, we were being overshadowed by big-box retailers. Thanks to Jorge's Local SEO expertise, we now rank first for most local searches in our category. Our foot traffic has increased by 120%, and we're successfully competing with major chains.",
    src: 'https://i.pravatar.cc/150?img=8',
    designation: 'Hardware Store Owner',
  },
  {
    name: 'Foster Law Group',
    headline: 'Legal Leader Online',
    quote:
      'Before optimizing our local presence, we were missing out on potential clients to larger law firms. Now we dominate local searches for our practice areas, and our client consultations have increased by 200%. The ROI has been remarkable.',
    src: 'https://i.pravatar.cc/150?img=9',
    designation: 'Law Firm Manager',
  },
  {
    name: 'Local Café',
    headline: 'Local Landmark Status',
    quote:
      "Our cafe was struggling to stand out in a crowded market. Since implementing Local SEO, we've become a landmark on Google Maps. Daily foot traffic has doubled, and we're now known as the go-to coffee spot in the neighborhood.",
    src: 'https://i.pravatar.cc/150?img=10',
    designation: 'Café Owner',
  },
  {
    name: 'Fashion Forward',
    headline: 'Boutique Visibility Boost',
    quote:
      "My boutique was practically invisible online despite being in a prime location. After working with Jorge, we're impossible to miss in local searches. Our online visibility has translated into a 175% increase in store visits and sales.",
    src: 'https://i.pravatar.cc/150?img=11',
    designation: 'Boutique Owner',
  },
  {
    name: 'HealthMart Pharmacy',
    headline: 'Multi-Location Success',
    quote:
      "Managing SEO for multiple pharmacy locations was overwhelming. Jorge's strategy helped each location rank in its respective neighborhood. We've seen a 150% increase in prescription transfers and new customer acquisitions across all locations.",
    src: 'https://i.pravatar.cc/150?img=12',
    designation: 'Pharmacy Chain Manager',
  },
  {
    name: 'Corner Bookstore',
    headline: 'Independent Store Victory',
    quote:
      "As an independent bookstore, we were struggling against online retailers and chains. Since implementing Local SEO, our store visits have increased by 90%, and we've built a loyal local customer base. We're now the community's preferred bookstore.",
    src: 'https://i.pravatar.cc/150?img=13',
    designation: 'Bookstore Owner',
  },
  {
    name: 'Local Pizza Co',
    headline: 'Delivery Orders Doubled',
    quote:
      "Before Local SEO, we were losing orders to bigger pizza chains. Now we're the top-ranked pizzeria in all our service areas, our delivery orders have doubled, and we've expanded our delivery radius due to increased demand.",
    src: 'https://i.pravatar.cc/150?img=14',
    designation: 'Pizza Restaurant Owner',
  },
];
