'use client';

import React from 'react';
import {
  FileText,
  PenLine,
  Link,
  Image,
  RefreshCw,
  Smartphone,
  CheckCircle2,
  XCircle,
  Search,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Badge, HeroButtonsSet } from '@/components/ui';
import { FaSeedling } from 'react-icons/fa';

export default function PageElement() {
  const [isGoodScore, setIsGoodScore] = useState(true);
  const [badAspects, setBadAspects] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGoodScore(prev => !prev);
      // Randomly select exactly 4 aspects to be marked as bad
      const numBadAspects = 4;
      const newBadAspects = Array.from({ length: 7 }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, numBadAspects);
      setBadAspects(newBadAspects);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isAspectBad = (index: number) =>
    !isGoodScore && badAspects.includes(index);

  return (
    <div className="relative">
      {/* Elements above card - wider container */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <Badge
            icon={FaSeedling}
            text="SEO Optimization"
            promo="Best Service In Area"
          />
          <h1 className="text-4xl font-bold  leading-tight">
            Multiply your online visibility and attract customers who are
            actively searching for your services
          </h1>

          <p className="text-foreground/80">
            We optimize every element of your website to ensure search engines
            prioritize it and your potential customers find it. Our on-page SEO
            service is specifically designed for businesses looking to increase
            their organic traffic without relying on paid advertising.
          </p>

          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            {/* <button className="px-6 py-2 bg-primary  rounded-lg hover:bg-ring transition">
              Get a Free SEO On Page Audit
            </button>
            <button className="px-6 py-2 border border-primary/20 text-primary rounded-lg hover:bg-primary/10 transition">
              Schedule a Call
            </button> */}
            <HeroButtonsSet
              firstBtnText=" Get a Free SEO On Page Audit"
              secondBtnText=" Schedule a Call"
            />
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-24 px-4">
        {/* Left column - Card */}
        <div
          className={`bg-card rounded-lg border p-4 backdrop-blur-xl shadow-xl transition-all duration-500 ${
            isGoodScore ? 'border-primary/20' : 'border-destructive/20'
          }`}
        >
          {/* Header section */}
          <div className="mb-6">
            {/* Title Tag */}
            <div
              className={`h-8 rounded w-3/4 mb-4 transition-all duration-500 ${
                isAspectBad(1)
                  ? 'bg-gradient-to-r from-destructive/20 to-destructive/10'
                  : 'bg-gradient-to-r from-foreground to-foreground/80'
              }`}
            ></div>
            {/* Meta Description */}
            <div
              className={`h-3 rounded w-full mb-2 transition-all duration-500 ${
                isAspectBad(1) ? 'bg-destructive/20' : 'bg-secondary/20'
              }`}
            ></div>
            <div
              className={`h-3 rounded w-11/12 transition-all duration-500 ${
                isAspectBad(1) ? 'bg-destructive/20' : 'bg-secondary/20'
              }`}
            ></div>
          </div>

          {/* Hero image placeholder */}
          <div
            className={`w-full h-32 rounded-lg mb-6 flex items-center justify-center border-2 border-dashed transition-all duration-500 ${
              isAspectBad(4)
                ? 'bg-gradient-to-r from-destructive/30 to-foreground/30 border-destructive/20'
                : 'bg-gradient-to-r from-ring/30 to-foreground/30 border-primary/20'
            }`}
          >
            <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-secondary/20 rounded"></div>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6">
            {/* Two-column section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className={`h-7 rounded w-2/3 transition-all duration-500 ${
                    isAspectBad(2) ? 'bg-destructive/20' : 'bg-foreground/20'
                  }`}
                ></div>
                <div
                  className={`h-5 rounded w-full transition-all duration-500 ${
                    isAspectBad(2) ? 'bg-destructive/20' : 'bg-foreground/80/20'
                  }`}
                ></div>
                <div className="flex items-center gap-2 w-5/6">
                  <div
                    className={`h-3 rounded-full w-32 px-2 transition-all duration-500 ${
                      isAspectBad(2) ? 'bg-destructive/30' : 'bg-secondary/30'
                    }`}
                  ></div>
                  <span className="h-2 bg-foreground/40 rounded-full w-12"></span>
                  <div
                    className={`h-3 rounded-full w-24 px-2 transition-all duration-500 ${
                      isAspectBad(2) ? 'bg-destructive/30' : 'bg-secondary/30'
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`h-28 rounded-lg flex items-center justify-center border transition-all duration-500 ${
                  isAspectBad(2)
                    ? 'bg-gradient-to-bl from-foreground/50 to-destructive/30 border-destructive/10'
                    : 'bg-gradient-to-bl from-foreground/50 to-ring/30 border-foreground/10'
                }`}
              >
                <div className="w-8 h-8 bg-foreground/20 rounded-full"></div>
              </div>
            </div>

            {/* Three-column section */}
            <div className="grid grid-cols-3 gap-4">
              {/* Column 1 */}
              <div
                className={`space-y-2 transition-all duration-500 ${isAspectBad(5) ? 'opacity-50' : 'opacity-100'}`}
              >
                <div
                  className={`h-20 bg-gradient-to-tr rounded border transition-all duration-500 ${
                    isAspectBad(5)
                      ? 'from-red-800/40 to-transparent border-destructive/10'
                      : 'from-blue-800/40 to-transparent border-secondary/10'
                  }`}
                ></div>
                <div className="h-5 bg-foreground/80/20 rounded w-4/5 mb-2"></div>
                <div className="h-3 bg-foreground/80/10 rounded w-full"></div>
              </div>
              {/* Column 2 */}
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-br from-foreground/10 to-ring/20 rounded border border-foreground/10"></div>
                <div className="h-5 bg-secondary/20 rounded w-4/5 mb-2"></div>
                <div className="h-3 bg-secondary/10 rounded w-full"></div>
              </div>
              {/* Column 3 */}
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-bl from-foreground/50 to-transparent rounded border-2 border-dashed border-foreground/60/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-foreground/30 rounded-lg"></div>
                </div>
                <div className="h-5 bg-foreground/80/20 rounded w-4/5 mb-2"></div>
                <div className="h-3 bg-foreground/80/10 rounded w-full"></div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-3 bg-secondary/20 rounded-full w-16 px-2"></div>
                  <span className="h-2 bg-foreground/30 rounded-full w-12"></span>
                </div>
              </div>
            </div>

            {/* More paragraphs */}
            <div className="space-y-3">
              <div className="h-4 bg-foreground/80/10 rounded w-full border-l-2 border-foreground/20"></div>
              <div className="h-3 bg-foreground/80/10 rounded w-5/6 border-l-2 border-foreground/20"></div>
            </div>

            {/* Call to action section */}
            <div
              className={`mt-6 p-3 rounded-lg border transition-all duration-500 ${
                isGoodScore
                  ? 'bg-ring/30 border-secondary/20'
                  : 'bg-destructive/30 border-destructive/20'
              }`}
            >
              <div className="h-5 bg-foreground/30 rounded w-1/3 mb-3"></div>
              <div className="h-3 bg-foreground/80/20 rounded w-full mb-2"></div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-foreground/80/20 rounded w-4/5"></div>
                <span className="h-2 bg-foreground/40 rounded-full w-12"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - SEO Aspects List */}
        <div>
          <ul className="space-y-6">
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(0) ? 'opacity-50' : 'opacity-100'}`}
            >
              <Search
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(0) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(0) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Search Engine Visibility
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Proper indexing and crawlability for search engine bots
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(1) ? 'opacity-50' : 'opacity-100'}`}
            >
              <FileText
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(1) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(1) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Meta Tags Optimization
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Title tags and meta descriptions optimized for clicks
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(2) ? 'opacity-50' : 'opacity-100'}`}
            >
              <PenLine
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(2) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(2) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Content Quality
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Engaging content that answers user queries
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(3) ? 'opacity-50' : 'opacity-100'}`}
            >
              <Link
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(3) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(3) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  URL Structure
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Clean, descriptive URLs for better understanding
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(4) ? 'opacity-50' : 'opacity-100'}`}
            >
              <Image
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(4) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(4) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Image Optimization
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Optimized images with proper alt tags
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(5) ? 'opacity-50' : 'opacity-100'}`}
            >
              <RefreshCw
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(5) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(5) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Internal Linking
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Strategic internal links for better navigation
                </p>
              </div>
            </li>
            <li
              className={`flex items-start gap-3 group transition-all duration-500 ${isAspectBad(6) ? 'opacity-50' : 'opacity-100'}`}
            >
              <Smartphone
                className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isAspectBad(6) ? 'text-destructive' : 'text-primary'}`}
              />
              <div>
                <h3
                  className={` font-medium transition-colors duration-500 ${isAspectBad(6) ? 'group-hover:text-destructive' : 'group-hover:text-primary'}`}
                >
                  Mobile Responsiveness
                </h3>
                <p className="text-foreground/80 text-sm mt-1">
                  Fully responsive across all devices
                </p>
              </div>
            </li>
          </ul>

          {/* Animated Score Indicator */}
          <div
            className={`mt-8 p-6 rounded-lg transition-all duration-500 ${
              isGoodScore
                ? 'bg-primary/5 border border-primary/10'
                : 'bg-destructive/5 border border-destructive/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-xl font-semibold transition-colors duration-500 ${
                  isGoodScore ? 'text-primary' : 'text-destructive'
                }`}
              >
                Search Engine Ranking Potential
              </h3>
              {isGoodScore ? (
                <CheckCircle2 className="w-6 h-6 text-primary" />
              ) : (
                <XCircle className="w-6 h-6 text-destructive" />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/80">
                  Overall Ranking Potential
                </span>
                <span
                  className={`font-medium transition-colors duration-500 ${
                    isGoodScore ? 'text-primary' : 'text-destructive'
                  }`}
                >
                  {isGoodScore ? 'High' : 'Low'}
                </span>
              </div>
              <div className="h-2 bg-foreground rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isGoodScore
                      ? 'w-[85%] bg-primary/50'
                      : 'w-[35%] bg-destructive/50'
                  }`}
                ></div>
              </div>
              <p className="text-xs text-foreground/60 mt-2">
                {isGoodScore
                  ? 'Your site is well-optimized for search engines'
                  : 'Your site needs optimization to improve rankings'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
