'use client';
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { LeadingSection } from '../../components';
import { FaQuestion } from 'react-icons/fa';
import Image from 'next/image';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What makes your Google Ads management different?',
        answer:
          'Unlike traditional agencies, we combine AI-powered optimization with human expertise. Our certified specialists use advanced machine learning algorithms to continuously optimize your campaigns while maintaining a strategic human oversight that ensures your ads align perfectly with your business goals.',
      },
      {
        question: 'How much do I need to spend on Google Ads?',
        answer:
          "There's no one-size-fits-all budget. We've successfully managed campaigns from $1,000 to $100,000+ monthly. We'll analyze your market and goals to recommend a budget that maximizes your ROI while staying within your comfort zone. Our focus is on making every dollar work efficiently.",
      },
      {
        question: 'How quickly will I see results?',
        answer:
          'While every business is unique, most clients see significant improvements within the first 30 days. Our optimization process typically delivers substantial ROI improvements by the 90-day mark. We provide detailed weekly reports so you can track progress transparently.',
      },
    ],
  },
  {
    category: 'Results & ROI',
    questions: [
      {
        question: 'What ROI can I expect from your service?',
        answer:
          "Our clients typically see a 300% improvement in ROAS (Return on Ad Spend) within 90 days. We've achieved up to 800% ROAS for established campaigns through our advanced optimization techniques and strategic targeting.",
      },
      {
        question: 'How do you measure and report success?',
        answer:
          "We track comprehensive metrics including ROAS, conversion rates, cost per acquisition (CPA), quality scores, and click-through rates. You'll receive weekly performance reports and monthly strategy reviews with actionable insights and transparent data visualization.",
      },
      {
        question: "What's your average improvement in conversion rates?",
        answer:
          'Our clients experience an average 40-65% increase in conversion rates within the first quarter. This is achieved through continuous A/B testing, audience refinement, and conversion rate optimization strategies.',
      },
      {
        question: 'Can you share some specific success stories?',
        answer:
          'Recent achievements include: An e-commerce client achieving 650% ROAS (up from 150%), a B2B company reducing cost per lead by 45% while increasing lead quality, and a service business growing conversions by 85% within 60 days.',
      },
    ],
  },
  {
    category: 'Services & Support',
    questions: [
      {
        question: "What if I'm already running Google Ads?",
        answer:
          "Perfect! We'll start with a comprehensive audit of your existing campaigns, identifying opportunities for improvement. We've helped businesses that were struggling with Google Ads achieve 300%+ ROAS improvements through our optimization strategies.",
      },
      {
        question: 'Do you guarantee results?',
        answer:
          "While we can't guarantee specific results due to market variables, we offer performance-based pricing options that align our success with yours. Our track record shows consistent improvements in ROAS, conversion rates, and lead quality across diverse industries.",
      },
      {
        question: 'What industries do you work with?',
        answer:
          'We have experience across multiple industries including SaaS, e-commerce, professional services, healthcare, and real estate. Our approach adapts to your specific market while applying proven strategies that work across sectors.',
      },
      {
        question: "What's included in your management service?",
        answer:
          'Our service is comprehensive: campaign strategy, setup, ongoing optimization, A/B testing, competitor analysis, landing page recommendations, weekly performance reports, and monthly strategy calls. Plus, you get direct access to your dedicated account manager.',
      },
    ],
  },
];

export function GoogleAdsFAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {}
  );

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <section className='relative  overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Section Header */}
        <LeadingSection
          badgeText='Frequently Asked Questions'
          description='Get answers to common questions about our Google Ads management
            services'
          heading='Everything You Need to Know'
          icon={FaQuestion}
        />

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Left Column - Image */}
          <div>
            <Image
              src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'
              alt='Google Ads Dashboard'
              className='w-full aspect-[4/3] object-cover rounded-2xl border border-foreground/10'
              width={1200}
              height={800}
            />
          </div>

          {/* Right Column - FAQ */}
          <div>
            {/* Tabs */}
            <div className='flex space-x-2 mb-8 border-b border-foreground/10'>
              {faqs.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    activeTab === index
                      ? 'text-ring'
                      : 'text-foreground/80 hover:'
                  }`}
                >
                  {category.category}
                  {activeTab === index && (
                    <div className='absolute bottom-0 left-0 w-full h-0.5 bg-ring'></div>
                  )}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className='space-y-4'>
              {faqs[activeTab].questions.map((faq, index) => {
                const questionId = `${activeTab}-${index}`;
                const isOpen = openQuestions[questionId];

                return (
                  <div
                    key={index}
                    className='border border-foreground/10 rounded-lg overflow-hidden hover:border-ring/30 transition-colors duration-200'
                  >
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className='w-full px-6 py-4 flex items-start justify-between gap-4 text-left'
                    >
                      <div className='flex items-start gap-3'>
                        <HelpCircle className='w-6 h-6 text-ring shrink-0 mt-0.5' />
                        <span className=' font-medium'>{faq.question}</span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className='w-5 h-5 text-ring shrink-0 mt-1' />
                      ) : (
                        <ChevronDown className='w-5 h-5 text-ring shrink-0 mt-1' />
                      )}
                    </button>
                    {isOpen && (
                      <div className='px-6 pb-4 text-foreground/80 ml-9'>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
