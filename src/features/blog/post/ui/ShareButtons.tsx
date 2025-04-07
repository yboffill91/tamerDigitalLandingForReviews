'use client';

import { ShimmerButton } from '@/components/ui';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export function ShareButtons() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'El futuro de la Inteligencia Artificial';

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  return (
    <div className='flex flex-col '>
      <div className='flex gap-2'>
        <ShimmerButton variant='outline' onClick={shareOnTwitter}>
          <FaTwitter className='text-primary size-5' />
        </ShimmerButton>
        <ShimmerButton variant='outline' onClick={shareOnFacebook}>
          <FaFacebook className='text-primary size-5' />
        </ShimmerButton>
        <ShimmerButton variant='outline' onClick={shareOnLinkedIn}>
          <FaLinkedin className='text-primary size-5' />
        </ShimmerButton>
      </div>
    </div>
  );
}
