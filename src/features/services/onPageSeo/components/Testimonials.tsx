'use client';

import React, { useState } from 'react';
import {
  Users,
  Rocket,
  BarChart,
  Target,
  Briefcase,
  Clock,
  Speaker,
} from 'lucide-react';
import { LeadingSection } from '../../components';

const tabs = [
  {
    id: 'dedicated-team',
    title: 'A dedicated marketing and SEO team',
    icon: Users,
    content: {
      heading: 'A dedicated marketing and SEO team',
      description:
        "When businesses team up with WebFX for any digital marketing services (including on-page SEO services), they get a dedicated account manager that's with them every step of the way. This way, clients have a singular person they can ask questions, voice concerns, and share ideas with.",
      type: 'stats',
      stats: [
        { label: 'Average years of experience', value: '8+' },
        { label: 'Team members dedicated to your success', value: '5' },
        { label: 'Industries served', value: '20+' },
        { label: 'Client satisfaction rate', value: '97%' },
      ],
    },
  },
  {
    id: 'accelerated-roi',
    title: 'Accelerated SEO ROI with client-exclusive tech',
    icon: Rocket,
    content: {
      heading: 'Accelerated SEO ROI with client-exclusive tech',
      description:
        'Plenty of SEO agencies have technology they use to bolster their strategies, but not everyone has their own proprietary tech suite like WebFX.',
      type: 'features',
      features: [
        {
          title: 'Lead Attribution',
          description: 'Track every lead back to its source',
        },
        {
          title: 'ROI Reporting',
          description: 'Real-time ROI tracking and reporting',
        },
        {
          title: 'CRM Integration',
          description: 'Seamless integration with your existing tools',
        },
        {
          title: 'AI-Powered Insights',
          description: 'Advanced analytics and predictions',
        },
      ],
    },
  },
  {
    id: 'performance-tracking',
    title: 'Bottom-line performance tracking',
    icon: BarChart,
    content: {
      heading: 'Bottom-line performance tracking',
      description:
        "You want to reach your SEO goals, and we want you to reach them too. That's why our on-page SEO service include bottom-line performance tracking so you're always on top of your campaign's overall progress.",
      type: 'text',
      additionalContent:
        "After all, a great SEO campaign isn't about short term success — it's about generating real results that improve your bottom line and foster sustainable, long-term growth well after implementation. Our comprehensive tracking system ensures you always know exactly how your investment is performing.",
    },
  },
  {
    id: 'roi-tracking',
    title: 'Streamlined attribution and ROI tracking',
    icon: Target,
    content: {
      heading: 'Streamlined attribution and ROI tracking',
      description:
        "Just because you're putting your on-page SEO efforts into the hands of an agency doesn't mean you're left in the dark about how you're generating results. At least, not at WebFX you're not.",
      type: 'bullets',
      bullets: [
        'Real-time tracking of all marketing channels',
        'Monthly performance reports with actionable insights',
        'Custom dashboards for your specific KPIs',
        'Direct ROI tracking for all campaigns',
        'Integration with your existing analytics tools',
      ],
    },
  },
  {
    id: 'proactive-strategy',
    title: 'A custom, proactive strategy',
    icon: Briefcase,
    content: {
      heading: 'A custom, proactive strategy',
      description:
        '"One-size-fits-all" isn\'t in our vocabulary — at WebFX we understand every business is unique, which means each client we work with needs a unique digital marketing solution that fits their needs.',
      type: 'quote',
      quote: {
        text: "Cookie-cutter approaches don't work in SEO. We analyze your unique situation and craft strategies that give you a competitive edge.",
        author: 'James Wilson',
        position: 'Strategy Director',
      },
    },
  },
  {
    id: 'long-term',
    title: 'Long-term partnerships',
    icon: Clock,
    content: {
      heading: 'Long-term partnerships',
      description:
        'Our impressive client retention rate speaks to the value we deliver and the strong relationships we build with our clients.',
      type: 'highlights',
      highlights: [
        { metric: '91%', description: 'Client retention rate after 12 months' },
        {
          metric: '5+ years',
          description: 'Average client partnership length',
        },
        { metric: '450+', description: 'Active long-term clients' },
      ],
    },
  },
];

export function OnPageSEOTestimonials() {
  const [activeTab, setActiveTab] = useState('dedicated-team');

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <LeadingSection
            badgeText="What people are talking about"
            description=" After 12 months, 91% of our clients continue to partner with us.
            Why? A few reasons:"
            heading=" 91% of clients stick with our on-page SEO services — here's why"
            icon={Speaker}
          />

          <div className="mt-12 mb-16 aspect-video w-full rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-typing-on-computer-2633/1080p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <div className="md:col-span-4">
            <div className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 border ${
                      activeTab === tab.id
                        ? 'bg-primary/10 border-foreground/20'
                        : 'border-transparent hover:bg-ring/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 p-2 rounded-lg ${
                          activeTab === tab.id ? 'bg-primary' : 'bg-ring'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            activeTab === tab.id
                              ? 'text-primary-foreground'
                              : 'text-primary-foreground/90'
                          }`}
                        />
                      </div>
                      <span
                        className={`font-medium ${
                          activeTab === tab.id
                            ? 'text-primary'
                            : 'text-foreground/90'
                        }`}
                      >
                        {tab.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-8">
            <div className="bg-card/95 border border-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                {activeContent?.heading}
              </h3>
              <p className="text-foreground/90 mb-8">
                {activeContent?.description}
              </p>

              {activeContent?.type === 'quote' && (
                <div className="bg-primary/5 border border-foreground/10 rounded-lg p-6">
                  <blockquote className="text-lg text-foreground/90 italic mb-4">
                    {activeContent.quote && (
                      <p className="text-balance">
                        &quote; {activeContent.quote.text} &quote;
                      </p>
                    )}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="ml-4">
                      {activeContent.quote?.author && (
                        <div className="font-medium text-white">
                          {activeContent.quote.author}
                        </div>
                      )}
                      {activeContent.quote?.position && (
                        <div className="text-sm text-primary">
                          {activeContent.quote.position}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeContent?.type === 'stats' && (
                <div className="grid grid-cols-2 gap-4">
                  {activeContent.stats?.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-primary/5 border border-foreground/10 rounded-lg p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/90">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeContent?.type === 'features' && (
                <div className="grid grid-cols-2 gap-4">
                  {activeContent.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-primary/5 border border-foreground/10 rounded-lg p-6"
                    >
                      <h4 className="font-medium text-primary mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-foreground/90">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeContent?.type === 'text' && (
                <div className="bg-primary/5 border border-foreground/10 rounded-lg p-6">
                  <p className="text-foreground/90">
                    {activeContent.additionalContent}
                  </p>
                </div>
              )}

              {activeContent?.type === 'bullets' && (
                <div className="bg-primary/5 border border-foreground/10 rounded-lg p-6">
                  <ul className="space-y-3">
                    {activeContent.bullets?.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-center text-foreground/90"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeContent?.type === 'highlights' && (
                <div className="grid grid-cols-3 gap-4">
                  {activeContent.highlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-primary/5 border border-foreground/10 rounded-lg p-6 text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-2">
                        {highlight.metric}
                      </div>
                      <div className="text-sm text-foreground/90">
                        {highlight.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
