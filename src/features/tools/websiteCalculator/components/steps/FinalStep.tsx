'use client';

import { useRouter } from 'next/navigation';
// import confetti from 'canvas-confetti';
import { Card } from '..';
import { pageTypes } from '@/features/tools/websiteCalculator/utils';
import {
  useFormData,
  useHostingTheme,
  usePagesData,
  usePlugins,
  usePricing,
} from '../../utils';
import { useCalculatorStore } from '@/store';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';
import { FaWhatsapp } from 'react-icons/fa';

export function WebCalcFinalStep() {
  const router = useRouter();
  const { reset } = useCalculatorStore();
  const { formData } = useFormData();
  const { hosting, theme } = useHostingTheme();
  const { pages } = usePagesData();
  const {
    security,
    seo,
    backup,
    analytics,
    cache,
    forms,
    antispam,
    multilingual,
    ecommerce,
  } = usePlugins();
  const { maintenance, totalPrice } = usePricing();

  // Helper function to render plugin selection
  const renderSelection = (
    name: string | null,
    version: 'free' | 'premium' | 'pro' | null
  ) => {
    if (!name) return 'Not selected';
    return `${name}${version ? ` (${version.charAt(0).toUpperCase() + version.slice(1)})` : ''}`;
  };

  // Handle reset and restart
  const handleRestart = () => {
    reset(); // Reset the store
    router.push('/website-calculator'); // Redirect to start
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid gap-2">
        {/* Infrastructure & Hosting */}

        <Card className="p-6 bg-background-primary border-ring">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Investment Summary</h3>
              <p className="text-sm  mt-1">
                {formData.purpose === 'client'
                  ? 'Includes setup, development, and professional services'
                  : 'Direct costs for self-implementation'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold heading-gradient ">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-ring">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="text-sm text-primary">One-Time Costs</div>
                <div className="flex justify-between text-sm">
                  <span>Infrastructure Setup</span>
                  <span>${(hosting ? 120 : 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Development</span>
                  <span>${pages.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-primary">Annual Costs</div>
                <div className="flex justify-between text-sm">
                  <span>Hosting & Domain</span>
                  <span>${(hosting ? 120 : 0).toFixed(2)}/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Plugin Licenses</span>
                  <span>
                    $
                    {(
                      security.price +
                      seo.price +
                      backup.price +
                      analytics.price +
                      cache.price +
                      forms.price +
                      antispam.price +
                      multilingual.price +
                      (ecommerce ? ecommerce.price : 0)
                    ).toFixed(2)}
                    /yr
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-ring text-primary-foreground rounded border border-foreground/20">
                Save 20% Today
              </div>

              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="text-foreground/80">
                  <span className="text-sm">Market Price:</span>
                  <span className="ml-2 text-xl line-through">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="">
                  <span className="text-sm">TamerDigital Price:</span>
                  <span className="ml-2 text-2xl font-bold text-primary">
                    ${((totalPrice * 8) / 10).toFixed(2)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-primary max-w-2xl mx-auto">
                As a market leader in WordPress development, TamerDigital can
                build your website at 20% below standard market rates while
                maintaining premium quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(
                    `Hi, I'm interested in building a website. Here's my customized package:\n\n` +
                      `Total Investment: $${totalPrice.toFixed(2)}\n` +
                      `Selected Features:\n` +
                      `- Hosting: ${hosting}\n` +
                      `- Theme: ${theme.name} (${theme.version})\n` +
                      `- Security: ${security.name}\n` +
                      `- SEO: ${seo.name}\n` +
                      `And more...`
                  )}`}
                  target="_blank"
                >
                  <ShimmerButton variant="solid" size="big">
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    Get Started on WhatsApp
                  </ShimmerButton>
                </Link>

                <ShimmerButton
                  variant="ghost"
                  size="big"
                  onClick={handleRestart}
                >
                  Start a New Calculation
                </ShimmerButton>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-ring/5">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
            <span>Infrastructure & Hosting</span>
            <span className="text-primary">
              ${(hosting ? 120 : 0).toFixed(2)}
            </span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Hosting Provider:</span>
              <span className="font-semibold">{hosting || 'Not selected'}</span>
            </div>
            <div className="mt-4 text-sm text-foreground/80">
              <div className="flex justify-between">
                <span>Monthly Hosting Cost:</span>
                <span>${(hosting ? 10 : 0).toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Annual Domain Registration:</span>
                <span>Included</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-ring/5">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
            <span>Design & Development</span>
            <span className="text-primary">${pages.price.toFixed(2)}</span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Theme:</span>
              <span className="font-semibold">
                {renderSelection(theme.name, theme.version)}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="font-semibold border-b border-foreground/20 pb-2 mb-3">
                Page Development Breakdown:
              </div>
              {Object.entries(pages.count).map(([pageType, count]) => {
                if (count > 0) {
                  const complexity = pages.complexity[pageType] || 'basic';
                  const pageTypeData = pageTypes.find(t => t.name === pageType);
                  const price = pageTypeData
                    ? pageTypeData.prices[
                        complexity as keyof typeof pageTypeData.prices
                      ] * count
                    : 0;
                  return (
                    <div
                      key={pageType}
                      className="flex flex-col gap-1 border-b border-foreground/20 50 pb-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/90">
                          {count}x {pageType}
                        </span>
                        <span className="font-semibold">
                          $
                          {formData.purpose === 'client'
                            ? (price * 1.3).toFixed(2)
                            : price.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-sm text-foreground/60 flex justify-between pl-4">
                        <span>Complexity: {complexity}</span>
                        <span>
                          Per page: $
                          {pageTypeData?.prices[
                            complexity as keyof typeof pageTypeData.prices
                          ].toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </Card>

        {/* Functionality & Features */}
        <Card className="p-6 bg-ring/5">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
            <span>Functionality & Features</span>
            <span className="text-primary">
              $
              {(
                security.price +
                seo.price +
                backup.price +
                analytics.price +
                cache.price +
                forms.price +
                antispam.price +
                multilingual.price +
                (ecommerce ? ecommerce.price : 0)
              ).toFixed(2)}
            </span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Security:</span>
              <span className="font-semibold">
                {renderSelection(security.name, security.version)}
                {security.name && security.version === 'premium' && (
                  <span className=" ml-2">(${security.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>SEO:</span>
              <span className="font-semibold">
                {renderSelection(seo.name, seo.version)}{' '}
                {seo.name && seo.version === 'premium' && (
                  <span className=" ml-2">(${seo.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Backup:</span>
              <span className="font-semibold">
                {renderSelection(backup.name, backup.version)}{' '}
                {backup.name && backup.version === 'premium' && (
                  <span className=" ml-2">(${backup.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics:</span>
              <span className="font-semibold">
                {renderSelection(analytics.name, analytics.version)}{' '}
                {analytics.name && analytics.version === 'premium' && (
                  <span className=" ml-2">(${analytics.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Cache:</span>
              <span className="font-semibold">
                {renderSelection(cache.name, cache.version)}{' '}
                {cache.name && cache.version === 'premium' && (
                  <span className=" ml-2">(${cache.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Forms:</span>
              <span className="font-semibold">
                {renderSelection(forms.name, forms.version)}{' '}
                {forms.name && forms.version === 'premium' && (
                  <span className=" ml-2">(${forms.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Anti-spam:</span>
              <span className="font-semibold">
                {renderSelection(antispam.name, antispam.version)}{' '}
                {antispam.name && antispam.version === 'premium' && (
                  <span className=" ml-2">(${antispam.price.toFixed(2)})</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Multilingual:</span>
              <span className="font-semibold">
                {renderSelection(multilingual.name, multilingual.version)}{' '}
                {multilingual.name && multilingual.version === 'premium' && (
                  <span className=" ml-2">
                    (${multilingual.price.toFixed(2)})
                  </span>
                )}
              </span>
            </div>
            {ecommerce && ecommerce.name && (
              <div className="flex justify-between items-center">
                <span>eCommerce:</span>
                <span className="font-semibold">
                  {renderSelection(ecommerce.name, ecommerce.version)}{' '}
                  {ecommerce.name && ecommerce.version === 'premium' && (
                    <span className=" ml-2">
                      (${ecommerce.price.toFixed(2)})
                    </span>
                  )}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center ">
              <span>Plugins Cost:</span>
              <span className="font-semibold">
                $
                {(
                  security.price +
                  seo.price +
                  backup.price +
                  analytics.price +
                  cache.price +
                  forms.price +
                  antispam.price +
                  multilingual.price +
                  (ecommerce ? ecommerce.price : 0)
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-ring/5">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
            <span>Monthly Maintenance</span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Selected Plan:</span>
              <span className="font-semibold">
                {maintenance.plan || 'Not selected'}
              </span>
            </div>
            <div className="text-sm text-foreground/80 mt-2">
              <p>
                Includes regular updates, security monitoring, backups, and
                technical support
              </p>
            </div>
          </div>
        </Card>

        {/* Investment Summary */}
      </div>
    </div>
  );
}
