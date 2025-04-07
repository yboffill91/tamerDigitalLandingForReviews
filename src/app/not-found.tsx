import { ShimmerButton } from '@/components/ui';
import { ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <main className='grid min-h-screen place-items-center bg-card px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className='heading-gradient'>404</h1>
          <h2 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground0 sm:text-7xl'>
            Page not found
          </h2>
          <p className='mt-6 text-lg font-medium text-pretty text-foreground/50 sm:text-xl/8'>
            Look&apos;s like you got lost. Let&apos;s get you back on track.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6 max-w-5xl mx-auto flex-wrap'>
            <Link href='/'>
              <ShimmerButton className='py-4 w-full'>
                <Home className='mr-2 size-4' />
                Go back home
              </ShimmerButton>
            </Link>
            <Link href='/contact' className='group'>
              <ShimmerButton variant='outline' className='py-4 w-full'>
                Contact support{' '}
                <span aria-hidden='true'>
                  <ArrowRight className='group-hover:translate-x-1 size-4 transition-transform duration-300 ease-in-out -rotate-45' />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
