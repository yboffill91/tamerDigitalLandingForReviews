'use client';
import { ImageGridItems } from '@/features/services/offPageSeo/utils';
import { ImageGridItem } from '@/features/services/offPageSeo/components/ui';
import { FaIndustry } from 'react-icons/fa';
import { IndustriesCard, LeadingSection } from '@/features/services/components';
import { businessTypes } from '../../utils';

export function IndustriesSection() {
  return (
    <div className='relative w-full bg-gradient-to-b from-transparent via-card/80 to-transparent overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <LeadingSection
          badgeText='Industries We Serve'
          description='From local businesses to enterprise organizations, our proven off-page SEO strategies are tailored to work effectively for your specific industry needs.'
          heading='Expertise Across Every Industry'
          icon={FaIndustry}
        />

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 min-h-[1200px]'>
          {/* Left column - Industries grid */}
          <div className='flex flex-wrap items-center justify-center gap-2'>
            {businessTypes.map(({ icon, name }, index) => (
              <IndustriesCard
                key={index}
                index={index}
                name={name}
                icon={icon}
              />
            ))}
          </div>

          {/* Right column - Image and content */}
          <div className='xl:flex hidden flex-col gap-6 h-full '>
            {ImageGridItems.map(({ image, title, subtitle }) => (
              <ImageGridItem
                imageSrc={image}
                title={title}
                subtitle={subtitle}
                key={subtitle + title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
