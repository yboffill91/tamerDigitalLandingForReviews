import { HeroButtonsSet } from '@/components/ui';
import {
  FeaturedImages,
  SVG,
  VideoYoutubeTamer,
} from '@/features/services/keywordResearch/components/ui';
import { images } from '@/features/services/keywordResearch/utils';

export function HeroSectionWithImagesGrid() {
  return (
    <div className='w-full pt-36 relative overflow-hidden'>
      <div className='relative  flex flex-col items-center justify-center overflow-hidden px-4 md:px-8'>
        <div className='relative flex flex-col items-center justify-center gap-8 md:gap-12'>
          <FeaturedImages images={images} />
          <h1 className=' text-center mx-auto'>
            Boost your Business with <br />{' '}
            <span className='heading-gradient'>
              Professional Keyword Research
            </span>
            <span className='inline-block'>
              <SVG />
            </span>
          </h1>

          {/* Subheading - Made wider */}
          <p className='text-base md:text-lg text-foreground mx-auto max-w-4xl text-center leading-relaxed text-balance'>
            Unlock your website&apos;s hidden potential with our expert keyword
            research service. Our team analyzes your market, identifies
            high-converting keywords, and develops custom strategies to boost
            your search visibility. Using advanced analytics and optimization
            methods, we help you outrank competitors and drive qualified traffic
            that converts.
          </p>

          {/* CTA Buttons */}
          <HeroButtonsSet
            firstBtnText='Analyze My Current Position'
            secondBtnText='Request Free Consultation'
            isCentered
          />
        </div>
        <VideoYoutubeTamer />
      </div>
    </div>
  );
}
