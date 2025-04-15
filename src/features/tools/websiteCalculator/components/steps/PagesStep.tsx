'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { PageComplexityType } from '@/store';
import {
  usePagesData,
  useFormData,
  usePricing,
  pageTypes,
} from '@/features/tools/websiteCalculator/utils';
import { Button } from '@/features/tools/websiteCalculator/components/ui/button';
import { cn } from '@/lib';
import { ShimmerButton } from '@/components/ui';

// Define base pages
const basePages: { name: string; mark: boolean }[] = [
  { name: 'Home', mark: false },
  { name: 'About', mark: false },
  { name: 'Blog', mark: false },
  { name: 'Contact', mark: false },
  { name: 'Privacy Policy', mark: false },
  { name: 'Services', mark: false },
  { name: 'Terms of Service', mark: true },
];

export const PagesStep = () => {
  const router = useRouter();
  const { formData } = useFormData();
  const {
    pages,
    updatePageComplexity,
    changePageCount,
    setPagePrice,
    setTotalPages,
  } = usePagesData();
  const { updateTotalPrice } = usePricing();

  // Track pages by complexity for better organization
  const [pagesByComplexity, setPagesByComplexity] = useState<{
    basic: string[];
    intermediate: string[];
    advanced: string[];
  }>({
    basic: [],
    intermediate: [],
    advanced: [],
  });

  // Set default complexity for all page types if not already set
  useEffect(() => {
    const complexityEntries = Object.entries(pages.complexity);

    if (complexityEntries.length < pageTypes.length) {
      const defaultComplexity: Record<string, PageComplexityType> = {};

      pageTypes.forEach(pageType => {
        if (!pages.complexity[pageType.name]) {
          defaultComplexity[pageType.name] = 'basic';
        }
      });

      if (Object.keys(defaultComplexity).length > 0) {
        const updatedComplexity = { ...pages.complexity, ...defaultComplexity };
        pageTypes.forEach(pageType => {
          updatePageComplexity(
            pageType.name,
            updatedComplexity[pageType.name] || 'basic'
          );
        });
      }
    }
  }, []);

  // Update pages by complexity whenever complexity or counts change
  useEffect(() => {
    const basic: string[] = [];
    const intermediate: string[] = [];
    const advanced: string[] = [];

    Object.entries(pages.complexity).forEach(([pageName, complexity]) => {
      if (pages.count[pageName] && pages.count[pageName] > 0) {
        if (complexity === 'basic') basic.push(pageName);
        else if (complexity === 'intermediate') intermediate.push(pageName);
        else if (complexity === 'advanced') advanced.push(pageName);
      }
    });

    setPagesByComplexity({
      basic,
      intermediate,
      advanced,
    });
  }, [pages.complexity, pages.count]);

  // Calculate total pages
  const totalPages =
    basePages.length +
    Object.values(pages.count).reduce((sum, count) => sum + (count || 0), 0);

  // Calculate pages price
  const calculatePagesPrice = () => {
    let price = 0;

    // Calculate price based on selected pages and their complexity
    Object.entries(pages.count).forEach(([pageName, count]) => {
      if (!count || count <= 0) return;

      const pageType = pageTypes.find(type => type.name === pageName);
      const complexity = pages.complexity[pageName];

      if (pageType && complexity && count > 0) {
        const basePrice =
          pageType.prices[complexity as keyof typeof pageType.prices];
        // Apply client markup if applicable
        const markup = formData.purpose === 'client' ? 1.3 : 1;
        price += basePrice * count * markup;
      }
    });

    return price;
  };

  const pagesPrice = calculatePagesPrice();

  // Update store when calculated values change
  useEffect(() => {
    setPagePrice(pagesPrice);
    setTotalPages(totalPages);
    updateTotalPrice(pagesPrice);
  }, [pagesPrice, totalPages, setPagePrice, setTotalPages, updateTotalPrice]);

  // Handle navigation

  // Handle complexity change
  const handleComplexityChange = (
    pageName: string,
    complexity: PageComplexityType
  ) => {
    updatePageComplexity(pageName, complexity);
  };

  // Handle count change with proper validation
  const handleCountChange = (pageName: string, change: number) => {
    const currentCount = pages.count[pageName] || 0;
    const newCount = Math.max(0, currentCount + change);

    // Only update if there's an actual change
    if (newCount !== currentCount) {
      changePageCount(pageName, change);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 text-foreground/80 mb-6">
        <div>
          <p className="mb-3">
            Configure the pages for your website. The module works in two parts:
          </p>
          <ul className="space-y-4">
            <li className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />
                <span className="font-semibold">Base Pages</span>
              </div>
              <p className="ml-4">
                Essential pages included by default (Home, About, Contact, etc.)
              </p>
            </li>
            <li className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />
                <span className="font-semibold">Additional Pages</span>
              </div>
              <p className="ml-4">
                Custom pages you can add based on your needs.
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-ring/5 p-4 rounded-lg border border-foreground/20">
          <h4 className="font-semibold mb-3">Available Complexity Levels:</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-secondary-green rounded-full" />
              <span className="font-medium">Basic:</span>
              <span>Simple layouts and standard functionality</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              <span className="font-medium">Intermediate:</span>
              <span>More complex layouts and custom features</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-destructive rounded-full" />
              <span className="font-medium">Advanced:</span>
              <span>Highly customized designs and advanced functionality</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          {formData.purpose === 'client' && (
            <div className="bg-ring/5 border border-foreground/20 rounded-lg p-4 text-primary">
              Note: Prices shown include development, setup, and a 30% service
              margin.
            </div>
          )}
        </div>
      </div>

      {/* Base Pages Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Base Pages</h3>
        <ul className="flex gap-4 flex-wrap items-center justify-center">
          {basePages.map(({ name }: { name: string }) => (
            <li
              key={name}
              className={`border border-foreground/20 rounded-lg py-3 px-5 bg-ring/5 text-ring min-w-32 flex-grow`}
            >
              <h4 className="font-semibold">{name}</h4>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Pages Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Additional Pages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageTypes.map(pageType => (
            <div
              key={pageType.name}
              className="bg-ring/5 border border-foreground/20 rounded-lg p-4"
            >
              <div className="mb-3">
                <h4 className="text-lg font-semibold">{pageType.name}</h4>
                <p className="text-foreground/80 text-sm mt-1">
                  {pageType.description}
                </p>
                <p className="text-sm text-primary/60 mt-1">
                  {pageType.importance}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {['basic', 'intermediate', 'advanced'].map(complexity => (
                  <button
                    key={complexity}
                    onClick={() =>
                      handleComplexityChange(
                        pageType.name,
                        complexity as PageComplexityType
                      )
                    }
                    className={cn(
                      'px-3 py-1.5 rounded text-sm font-medium transition-all flex items-center gap-2',
                      pages.complexity[pageType.name] === complexity
                        ? 'bg-primary text-foreground'
                        : 'bg-ring/5 text-foreground/80 hover:bg-ring/10'
                    )}
                  >
                    <span>
                      {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
                    </span>
                    {formData.purpose === 'client' && (
                      <span className="text-xs opacity-90">
                        ($
                        {
                          pageType.prices[
                            complexity as keyof typeof pageType.prices
                          ]
                        }
                        )
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCountChange(pageType.name, -1)}
                    disabled={!pages.count[pageType.name]}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold min-w-[2ch] text-center">
                    {pages.count[pageType.name] || 0}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCountChange(pageType.name, 1)}
                  >
                    +
                  </Button>
                </div>
                {formData.purpose === 'client' &&
                  pages.complexity[pageType.name] &&
                  pages.count[pageType.name] > 0 && (
                    <div className="text-sm text-secondary-green">
                      $
                      {(
                        pageType.prices[pages.complexity[pageType.name]] *
                        pages.count[pageType.name] *
                        1.3
                      ).toFixed(2)}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pages by Complexity */}
      {(pagesByComplexity.basic.length > 0 ||
        pagesByComplexity.intermediate.length > 0 ||
        pagesByComplexity.advanced.length > 0) && (
        <div className="mt-8 bg-ring/5 border border-foreground/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pages by Complexity</h3>

          {pagesByComplexity.basic.length > 0 && (
            <div className="mb-4">
              <h4 className="text-md font-medium flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-secondary-green rounded-full" />
                Basic Pages ({pagesByComplexity.basic.length})
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                {pagesByComplexity.basic.map(pageName => (
                  <div
                    key={pageName}
                    className="px-3 py-1 bg-secondary-green/10 border border-secondary-green/30 rounded-full text-sm"
                  >
                    {pageName} ({pages.count[pageName]})
                  </div>
                ))}
              </div>
            </div>
          )}

          {pagesByComplexity.intermediate.length > 0 && (
            <div className="mb-4">
              <h4 className="text-md font-medium flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                Intermediate Pages ({pagesByComplexity.intermediate.length})
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                {pagesByComplexity.intermediate.map(pageName => (
                  <div
                    key={pageName}
                    className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm"
                  >
                    {pageName} ({pages.count[pageName]})
                  </div>
                ))}
              </div>
            </div>
          )}

          {pagesByComplexity.advanced.length > 0 && (
            <div>
              <h4 className="text-md font-medium flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-destructive rounded-full" />
                Advanced Pages ({pagesByComplexity.advanced.length})
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                {pagesByComplexity.advanced.map(pageName => (
                  <div
                    key={pageName}
                    className="px-3 py-1 bg-destructive/10 border border-destructive/30 rounded-full text-sm"
                  >
                    {pageName} ({pages.count[pageName]})
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Summary */}
      <div className="mt-8 bg-ring/5 border border-foreground/20 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary">Total Pages</h3>
            <p className="text-3xl font-bold text-foreground mt-2">
              {totalPages} pages
            </p>
            <div className="text-sm text-foreground/80 mt-2">
              {basePages.length} base pages + {totalPages - basePages.length}{' '}
              additional pages
            </div>
          </div>
          {formData.purpose === 'client' && (
            <div className="flex-1 text-right">
              <h3 className="text-xl font-semibold text-primary">
                Total Price
              </h3>
              <p className="text-3xl font-bold text-foreground mt-2">
                ${pagesPrice.toFixed(2)}
              </p>
              <div className="text-sm text-foreground/80 mt-2">
                Includes professional development and setup
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton
          variant="ghost"
          size="big"
          onClick={() => router.push('//website-calculator/themeStep')}
        >
          Back
        </ShimmerButton>
        <ShimmerButton
          variant="solid"
          size="big"
          onClick={() => router.push('/website-calculator/securityStep')}
          className={`${pages.count ? '' : 'hidden'}`}
        >
          Next
        </ShimmerButton>
      </div>
    </>
  );
};

export default PagesStep;
