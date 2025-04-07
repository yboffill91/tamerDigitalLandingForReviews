'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCalculatorStore } from '@/store';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/features/tools/websiteCalculator/components';
import { hostingProviders } from '../../utils';
import { cn } from '@/lib';
import { ShimmerButton } from '@/components/ui';

export function HostingStep() {
  const router = useRouter();
  const { formData, hosting, setHosting, totalPrice } = useCalculatorStore();

  useEffect(() => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.purpose ||
      !formData.understood
    ) {
      router.push('/website-calculator');
    }
  }, [formData, router]);

  return (
    <>
      <div className="text-xl font-semibold text-primary mb-6">
        {formData.purpose === 'client' ? (
          <div>
            <div>
              Professional Setup Cost: $
              {hosting
                ? hostingProviders
                    .find(p => p.name === hosting)
                    ?.setupFee.toFixed(2)
                : '0.00'}
            </div>
            <div>Total Annual Cost: ${totalPrice.toFixed(2)}</div>
            <div className="text-sm text-foreground/60 mt-2">
              (Includes setup, management, and professional service fees)
            </div>
          </div>
        ) : (
          <div>Total Annual Cost: ${totalPrice.toFixed(2)}</div>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {hostingProviders.map((provider, index) => (
          <Card key={index} className="cursor-pointer">
            <div
              onClick={() => setHosting(provider.name)}
              className={cn(
                hosting === provider.name
                  ? 'border-primary bg-ring/20'
                  : 'border-foreground/20'
              )}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{provider.name}</span>
                  <span className="text-primary">
                    ${provider.hosting.price.toFixed(2)}/mo
                  </span>
                </CardTitle>
                <CardDescription>
                  {provider.hosting.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {provider.hosting.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domain:</h4>
                    <p className="text-foreground/80">
                      {provider.domain.description} - ${provider.domain.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 w-full mt-12">
        <ShimmerButton
          variant="solid"
          size="big"
          onClick={() => router.push('/website-calculator/themeStep')}
          className={`${hosting ? '' : 'hidden'}`}
        >
          Next
        </ShimmerButton>
      </div>
    </>
  );
}
