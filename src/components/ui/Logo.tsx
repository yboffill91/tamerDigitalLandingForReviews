'use client';

import { bodyFont } from '@/lib';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Logo() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')}>
      <div className='flex items-center justify-center'>
        <Image
          src={'/tamerLogo.webp'}
          width={52}
          height={52}
          alt='Tamer Digital'
        />

        <span className={`${bodyFont.className} text-lg font-bold`}>
          tamerdigital
        </span>
      </div>
    </button>
  );
}
