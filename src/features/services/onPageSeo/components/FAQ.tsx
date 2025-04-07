'use client';

import { ReactNode, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { LeadingSection } from '../../components';
import { FaQuestion } from 'react-icons/fa';
import { ShimmerButton } from '@/components/ui';
import Image from 'next/image';
interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'What to include on main service page SEO website?',
    answer:
      "Your main service page is often the first impression potential clients have of your business. It should tell a compelling story about your services while being optimized for search engines. Start with a clear, benefit-focused headline that immediately communicates your value proposition. Include detailed service descriptions that naturally incorporate relevant keywords. Build trust by showcasing real results through testimonials and case studies. Don't forget technical elements like optimized meta titles, structured data markup, and ensuring your page loads quickly on all devices. Most importantly, make it easy for visitors to take action with strategically placed CTAs throughout the page.",
  },
  {
    question: 'Why is on-page SEO important?',
    answer:
      "On-page SEO is the foundation of your website's success in search engines. Think of it as speaking the language that both search engines and your users understand. When you optimize your pages correctly, you're essentially creating a bridge between your content and your audience. This not only helps search engines understand and rank your content appropriately but also improves how users experience your site. Unlike paid advertising that stops working when you stop paying, on-page SEO continues to drive organic traffic over time, offering a much better return on investment. It's also crucial for building your site's credibility and authority in your industry, as well-optimized pages tend to perform better and engage users more effectively.",
  },
  {
    question: 'How to use AI for on-page SEO?',
    answer: (
      <>
        <p className="mb-4">
          AI is transforming how we approach on-page SEO, making it more
          efficient and effective than ever before. Modern AI tools can analyze
          your content and provide smart recommendations for optimization, help
          you understand user intent better, and even assist in creating content
          that resonates with both search engines and readers. AI can analyze
          vast amounts of data to identify patterns and opportunities that might
          be missed through manual analysis, helping you make more informed
          decisions about your SEO strategy.
        </p>
        <div className="flex items-center text-primary-400 hover:text-primary-300">
          <a href="/ai-seo-guide" className="flex items-center">
            Learn more about AI-powered SEO
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </>
    ),
  },
  {
    question: 'What is on-page SEO optimization?',
    answer:
      "On-page SEO optimization is the art and science of making your web pages more attractive to both search engines and users. It encompasses everything that happens on your website to improve its search visibility. This includes crafting compelling titles and descriptions that encourage clicks from search results, creating valuable content that answers your audience's questions, and ensuring your site's technical elements like proper heading structure and image optimization are in place. It also involves making sure your site loads quickly and works well on mobile devices, as these factors significantly impact both rankings and user experience. Think of it as fine-tuning every aspect of your pages to create the best possible experience for both visitors and search engines.",
  },
];

export function OnPageSEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="relative">
              <div className="absolute inset-0">
                <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340"
                  alt="SEO Analysis Dashboard"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* FAQs Column */}
            <div>
              <div className="mb-12">
                {/* <h2 className="text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-foreground">
                  Everything you need to know about on-page SEO optimization
                </p> */}
                <LeadingSection
                  badgeText="FAQ"
                  description="Everything you need to know about on-page SEO optimization"
                  icon={FaQuestion}
                  heading=" Frequently Asked Questions"
                />
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-foreground/20 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/20"
                  >
                    <ShimmerButton
                      variant="ghost"
                      className="w-full  justify-between"
                      onClick={() => setOpenIndex(index)}
                    >
                      <h3 className=" pr-8">{faq.question}</h3>
                      <ChevronDown
                        className={`${openIndex === index ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`}
                      />
                    </ShimmerButton>

                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openIndex === index
                          ? 'max-h-[1000px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 pt-0 text-foreground">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
