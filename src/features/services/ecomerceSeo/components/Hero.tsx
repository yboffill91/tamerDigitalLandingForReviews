'use client';

import React from 'react';
import { Store, CheckCircle2 } from 'lucide-react';
import { FeaturedImages } from './Reviews';
import { Badge, ShimmerButton } from '@/components/ui';
import { SignupFormDemo } from './ecommerceForm';

export const EcomerceHero = () => {
  return (
    <div className="relative overflow-hidden  sm:py-8 lg:py-12 flex flex-col mt-28">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div> */}

      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Left Column with Image */}
          <div className="relative w-full lg:w-1/2 h-full flex items-center overflow-visible bg-transparent justify-center">
            <SignupFormDemo />
          </div>

          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Reviews */}
            <div className="flex justify-center lg:justify-start">
              <FeaturedImages
                textClassName="text-center"
                className="justify-center items-center"
                showStars
              />
            </div>

            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                text="Boost Your E-commerce Sales With Our SEO Services"
                icon={Store}
              />
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ddtext-foreground">
              Drive More Sales To Your Online Store With E-commerce SEO Drive
              More Sales To Your Online
              <br /> Store With E-commerce SEO
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-foreground/80 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              Transform your online store into a sales powerhouse. Our
              E-commerce SEO services help you rank higher, drive more qualified
              traffic, and increase conversions. We optimize product pages,
              enhance site structure, and implement proven strategies to make
              your store stand out in the competitive e-commerce landscape.
            </p>

            {/* CTA and Reviews Section */}
            <div className="flex flex-col gap-6 items-center justify-center lg:items-start max-w-xl">
              <ShimmerButton size="big" variant="solid">
                Claim My 1st Position
              </ShimmerButton>

              <ul className="space-y-3 text-foreground/90 mt-8 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    93% of online experiences begin with a search engine
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    E-commerce sites with strong SEO see 2.6x higher conversion
                    rates
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    43% of e-commerce traffic comes from organic Google search
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
