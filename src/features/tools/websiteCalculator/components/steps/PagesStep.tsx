'use client';
import { useCalculatorStore } from '@/store';
import {
  usePagesStore,
  basePages,
  pageTypes,
} from '@/features/tools/websiteCalculator/utils';
import { cn } from '@/lib';
import { ShimmerButton } from '@/components/ui';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const PagesStep = () => {
  const router = useRouter();
  const { formData } = useCalculatorStore();
  const {
    pages,
    setPageComplexity,
    setPageCount,
    setTotalPages,
    setPagePrice,
  } = usePagesStore();

  // Set basic complexity by default for all page types
  useEffect(() => {
    const defaultComplexity = pageTypes.reduce(
      (acc, pageType) => ({
        ...acc,
        [pageType.name]: 'basic',
      }),
      {}
    );

    setPageComplexity(defaultComplexity);
  }, []);

  useEffect(() => {
    calculatePagesPrice();
  }, [pages.count, pages.complexity]);

  const calculatePagesPrice = () => {
    let totalPrice = 0;
    let totalPageCount = basePages.length;

    // Calculate additional pages
    Object.entries(pages.count).forEach(([pageTypeName, count]) => {
      if (count > 0) {
        totalPageCount += count;

        // Add price calculation for client projects
        if (formData.purpose === 'client') {
          const pageTypeData = pageTypes.find(t => t.name === pageTypeName);
          if (pageTypeData) {
            // Get complexity or default to 'basic'
            const complexity = pages.complexity[pageTypeName] || 'basic';
            // Access prices using the complexity as a key
            const price =
              pageTypeData.prices[
                complexity as keyof typeof pageTypeData.prices
              ] * count;
            totalPrice += price * 1.3; // 30% margin for client projects
          }
        }
      }
    });

    setTotalPages(totalPageCount);
    setPagePrice(totalPrice);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 text-foreground/80 mb-6">
        <div>
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
            <div className="bg-ring/5 border border-foreground/20 rounded-lg p-4 text-ring">
              Note: Prices shown include development, setup, and a 30% service
              margin.
            </div>
          )}
        </div>
      </div>

      {/* Base Pages Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Base Pages</h3>
        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">
          {basePages
            .filter(page => !page.displayInline)
            .map(page => (
              <div
                key={page.name}
                className="bg-ring/5 border border-foreground/20 rounded-lg px-4 py-3 flex-none w-48"
              >
                <h4 className="font-semibold">{page.name}</h4>
              </div>
            ))}
          {basePages
            .filter(page => page.displayInline)
            .map(page => (
              <div
                key={page.name}
                className="bg-primary text-primary-foreground border border-foreground/20 rounded-lg px-4 py-3 flex-none flex-grow"
              >
                <h4 className="font-semibold">{page.name}</h4>
              </div>
            ))}
        </div>
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
                  <ShimmerButton
                    variant="outline"
                    key={complexity}
                    onClick={() =>
                      setPageComplexity({
                        [pageType.name]: complexity as
                          | 'basic'
                          | 'intermediate'
                          | 'advanced',
                      })
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
                  </ShimmerButton>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShimmerButton
                    variant="outline"
                    onClick={() =>
                      setPageCount({
                        ...pages.count,
                        [pageType.name]: pages.count[pageType.name] - 1,
                      })
                    }
                    className={`${!pages.count[pageType.name] && 'pointer-events-none bg-foreground/20 text-foreground/40'}`}
                  >
                    -
                  </ShimmerButton>
                  <span className="text-lg font-semibold min-w-[2ch] text-center">
                    {pages.count[pageType.name] || 0}
                  </span>
                  <ShimmerButton
                    variant="outline"
                    onClick={() =>
                      setPageCount({
                        ...pages.count,
                        [pageType.name]: pages.count[pageType.name] + 1,
                      })
                    }
                  >
                    +
                  </ShimmerButton>
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

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-br from-primary/10 to-ring/20 border border-foreground/20 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary">Total Pages</h3>
            <p className="text-3xl font-bold text-foreground mt-2">
              {pages.totalPages} pages
            </p>
            <div className="text-sm text-foreground/80 mt-2">
              {basePages.length} base pages +{' '}
              {pages.totalPages - basePages.length} additional pages
            </div>
          </div>
          {formData.purpose === 'client' && (
            <div className="flex-1 text-right">
              <h3 className="text-xl font-semibold text-primary">
                Total Price
              </h3>
              <p className="text-3xl font-bold text-foreground mt-2">
                ${pages.price.toFixed(2)}
              </p>
              <div className="text-sm text-foreground/80 mt-2">
                Includes professional development and setup
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton
          variant="ghost"
          size="big"
          onClick={() => router.push('/website-calculator/themeStep')}
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
