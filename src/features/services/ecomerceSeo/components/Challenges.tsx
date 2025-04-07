'use client';
import Image from 'next/image';
import { CheckCircle2, HeartPulse } from 'lucide-react';
import { LeadingSection } from '../../components';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';

export const EcomerceChallenges = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadingSection
          badgeText="Common SEO Issues"
          heading="Common E-commerce SEO Challenges"
          description="We understand the unique challenges that e-commerce businesses face with SEO. Here's how we can help you overcome them."
          icon={HeartPulse}
        />

        <div className="space-y-24 mt-12">
          {/* Content Duplication Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Content Duplication & Cannibalization
              </h3>
              <p className="text-foreground/90">
                We understand the frustration of managing thousands of product
                pages. Duplicate content issues are more common than you think -
                from similar product descriptions to category pages targeting
                the same keywords. Our team has helped countless e-commerce
                stores solve these challenges through:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Unique, AI-assisted product descriptions that maintain your
                    brand voice
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Strategic internal linking to prevent keyword
                    cannibalization
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Proper canonical tag implementation to manage duplicate
                    content
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/content-duplication.webp"
                width={600}
                height={400}
                alt="Content Duplication Challenge"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Technical Issues Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Meta Tags & On-Page SEO
              </h3>
              <p className="text-foreground/90">
                Poorly optimized meta tags can severely limit your visibility in
                search results. Our comprehensive approach includes:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Strategic meta title and description optimization for better
                    CTR
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Product schema markup implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Optimized header tags and content structure</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/meta-tags.webp"
                width={600}
                height={400}
                alt="Meta Tags Optimization"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Site Architecture Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Site Architecture & Navigation
              </h3>
              <p className="text-foreground/90">
                A poor site structure can confuse both users and search engines.
                We implement clear, logical architectures through:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Intuitive category and subcategory organization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Strategic internal linking structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>XML sitemap optimization</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/site-architecture.webp"
                width={600}
                height={400}
                alt="Site Architecture"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Social Proof Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Social Proof & Reviews
              </h3>
              <p className="text-foreground/90">
                Not leveraging customer reviews and social proof can cost you
                valuable trust signals. Our approach includes:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Review schema implementation for rich snippets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Customer review integration strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Social proof optimization for product pages</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/social-proof.webp"
                width={600}
                height={400}
                alt="Social Proof"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Link Optimization Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Link Structure & Optimization
              </h3>
              <p className="text-foreground/90">
                Broken links and poor link structure can harm both user
                experience and SEO. We ensure:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Regular broken link audits and fixes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Strategic anchor text optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Internal link authority distribution</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/link-optimization.webp"
                width={600}
                height={400}
                alt="Link Optimization"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Technical SEO Nightmares
              </h3>
              <p className="text-foreground/90">
                Cart pages being indexed? Faceted navigation creating endless
                URL variations? We&apos;ve seen it all. Technical SEO issues can
                severely impact your store&apos;s performance. Our expertise
                includes:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Proper robots.txt configuration to prevent indexing of cart
                    and account pages
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Implementation of faceted navigation best practices
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Strategic handling of pagination and filtering URLs
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/technical-seo.webp"
                width={600}
                height={400}
                alt="Technical SEO Challenges"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Optimization Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Mobile Experience & Core Web Vitals
              </h3>
              <p className="text-foreground/90">
                With over 60% of e-commerce traffic coming from mobile devices,
                poor mobile performance is no longer an option. We help you
                achieve and maintain excellent Core Web Vitals scores through:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Image optimization and next-gen format implementation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Mobile-first design approach for all pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Performance optimization for faster loading times</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/mobile-optimization.webp"
                width={600}
                height={400}
                alt="Mobile Optimization"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Local SEO Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Local SEO & Reviews Management
              </h3>
              <p className="text-foreground/90">
                For e-commerce businesses with physical locations, local SEO is
                crucial. We help you dominate local search results and leverage
                customer reviews through:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>
                    Google Business Profile optimization for all locations
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Review generation and management strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                  <span>Local schema markup implementation</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/local-seo.webp"
                width={600}
                height={400}
                alt="Local SEO and Reviews"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/adam.jpg"
                width={48}
                height={48}
                alt="Adam T"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-foreground font-medium">
                Want more traffic for your store?
              </h4>
              <p className="text-sm text-foreground/80">
                Adam T, our Senior Rankings Expert is ready to talk strategy...
              </p>
            </div>
            {/* <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-foreground text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Book A Free Strategy Call
            </a> */}
            <Link href="#">
              <ShimmerButton variant="solid" size="big">
                Book A Free Strategy Call
              </ShimmerButton>
            </Link>
          </div>

          <div className="mt-4 text-center">
            <p className="text-foreground/80 text-sm">
              Not ready for a call?{' '}
              <a href="#" className="text-primary/80 hover:underline">
                Send us a message!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
