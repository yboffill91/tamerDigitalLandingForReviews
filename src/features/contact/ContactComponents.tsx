import React from 'react';
import {
  Search,
  BarChart,
  Globe,
  Target,
  TrendingUp,
  Share2,
  MessageSquare,
} from 'lucide-react';
import {
  ContactCards,
  ContactFAQs,
  IconContainer,
  Newsletter,
  Radar,
} from '@/features/contact/components';
import { ContactFormGridWithDetails } from '@/features/contact/ui/ContactForm';
export function Contact() {
  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      {/* Radar Section with full width */}
      <div className='relative w-full h-96 mb-20 max-w-7xl mx-auto'>
        <div className='absolute inset-0'>
          <div className='relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden'>
            <div className='mx-auto w-full max-w-3xl'>
              <div className='flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0'>
                <IconContainer
                  text='Business Growth'
                  delay={0.8}
                  icon={<Search className='h-8 w-8' />}
                  position={{ x: -1, y: 0 }}
                />
                <IconContainer
                  delay={1.4}
                  text='Analytics'
                  icon={<BarChart className='h-8 w-8' />}
                  position={{ x: -0.7, y: -0.7 }}
                />
                <IconContainer
                  text='Global Reach'
                  delay={1.6}
                  icon={<Globe className='h-8 w-8' />}
                  position={{ x: 1, y: 0 }}
                />
              </div>
            </div>
            <div className='mx-auto w-full max-w-md'>
              <div className='flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0'>
                <IconContainer
                  text='Objectives'
                  delay={0.8}
                  icon={<Target className='h-8 w-8' />}
                  position={{ x: -1, y: 0.1 }}
                />
                <IconContainer
                  text='Strategy'
                  icon={<TrendingUp className='h-8 w-8' />}
                  position={{ x: 0, y: -1 }}
                  delay={1.4}
                />
              </div>
            </div>
            <div className='mx-auto w-full max-w-3xl'>
              <div className='flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0'>
                <IconContainer
                  delay={1.4}
                  text='Social Media'
                  icon={<Share2 className='h-8 w-8' />}
                  position={{ x: 0, y: 1 }}
                />
                <IconContainer
                  delay={1.8}
                  text='Content'
                  icon={<MessageSquare className='h-8 w-8' />}
                  position={{ x: 0.7, y: 0.7 }}
                />
              </div>
            </div>

            <Radar className='absolute -bottom-12' />
            <div className='absolute bottom-0 z-40 h-px w-full bg-gradient-to-r from-transparent via-ring to-transparent opacity-60' />
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className='max-w-7xl mx-auto mb-20'>
        <h1 className=' font-bold text-center mb-6'>
          Let&apos;s Navigate Your{' '}
          <span className='heading-gradient'>Vision</span>
        </h1>
        <p className='text-center text-foreground/80 max-w-2xl mx-auto'>
          Our team is ready to scan the horizon of possibilities for your
          business. Whether you have questions about strategy, growth, or
          implementation, we&apos;re here to provide the clarity and direction
          you need to move forward with confidence.
        </p>
        <ContactFormGridWithDetails />
      </div>
      <ContactCards />
      <div className='max-w-7xl mx-auto'>
        <Newsletter />
        <ContactFAQs />
      </div>
    </div>
  );
}
