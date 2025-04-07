'use client'
import type React from 'react'
import { useRef } from 'react'
import { Label, Input, ShimmerButton } from '@/components/ui'
import { cn } from '@/lib'
import { TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const services = [
  'SEO',
  'Content Marketing',
  'Social Media',
  'Email Marketing',
  'Google Ads',
  'Web Development',
  'Local SEO',
  'E-commerce SEO',
  'Video Marketing',
  'Online Reputation',
  'Marketing Automation',
  'Influencer Marketing',
]

export function WelcomeForm() {
  // const [showCaptcha, setShowCaptcha] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null)
  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check if the honeypot field is filled
    // if (honeypotRef.current && honeypotRef.current.value) {
    //   setShowCaptcha(true);
    //   return;
    // }

    // if (showCaptcha && !captchaValue) {
    //   alert('Please complete the reCAPTCHA verification.');
    //   return;
    // }

    // --> OnSubmit Logic
    console.log('Form submitted')
  }

  // const handleCaptchaChange = (value: string | null) => {
  //   setCaptchaValue(value);
  // };

  return (
    <div className='w-full !text-foreground max-w-3xl mx-auto rounded-lg p-2 md:p-6 shadow-input border border-ring/10 '>
      <h2 className='font-bold text-xl text-foreground mb-6 text-center'>
        Get Your Free Proposal
      </h2>

      <form className='md:space-y-8 space-y-2' onSubmit={handleSubmit}>
        {/* Main Fields Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8  gap-2'>
          <LabelInputContainer>
            <Label htmlFor='firstname' className=''>
              First Name
            </Label>
            <Input id='firstname' placeholder='John' type='text' />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor='lastname'>Last Name</Label>
            <Input id='lastname' placeholder='Doe' type='text' />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor='email'>Email Address</Label>
            <Input id='email' placeholder='you@company.com' type='email' />
          </LabelInputContainer>

          <LabelInputContainer className='md:col-span-3'>
            <Label htmlFor='website'>Website URL</Label>
            <Input id='website' placeholder='www.yourwebsite.com' type='url' />
          </LabelInputContainer>
        </div>

        {/* Honeypot field */}
        <input
          type='text'
          name='honeypot'
          ref={honeypotRef}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete='off'
        />

        {/* Services Grid - Full Width */}
        <div className='space-y-4 p-2 rounded-lg'>
          <Label>Services You&apos;re Interested In</Label>
          <div className='grid grid-cols-2 md:grid-cols-md:6 gap-4 gap-2'>
            {services.map((service) => (
              <Label
                key={service}
                className='flex items-center gap-2 text-sm text-foreground cursor-pointer group'
              >
                <input
                  type='checkbox'
                  className='w-4 h-4 rounded border-foreground/80 text-primary focus:ring-primary focus:ring-offset-0 bg-[#1D1D1D] transition-colors'
                />
                <span className='group-hover:text-primary transition-colors'>
                  {service}
                </span>
              </Label>
            ))}
          </div>
        </div>

        {/* reCAPTCHA
        {showCaptcha && (
          <div className='flex justify-center'>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={handleCaptchaChange}
            />
          </div>
        )} */}

        {/* Submit Button */}
        <div className='flex flex-col items-center space-y-4'>
          <ShimmerButton variant='solid' type='submit'>
            <span>Get My Estimate</span>
            <TrendingUp className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
          </ShimmerButton>

          {/* Privacy Notice */}
          <p className='text-xs text-center text-foreground/70'>
            By submitting this form, you agree to our{' '}
            <Link href='/privacy' className='text-primary hover:underline'>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <a href='/terms' className='text-primary hover:underline'>
              Terms of Service
            </a>
          </p>
        </div>

        {/* Reviews Section */}
        <div className='md:flex flex-col items-center pt-8 border-t border-primary/20 hidden'>
          <div className='flex items-center gap-8'>
            {/* Total Reviews */}
            <div className='text-center'>
              <div className='text-2xl font-bold text-foreground'>10+</div>
              <div className='text-sm text-foreground/90'>Happy Clients</div>
            </div>

            {/* Rating */}
            <div className='text-center'>
              <div className='flex items-center gap-2'>
                <div className='text-2xl font-bold text-foreground'>5</div>
                <div className='flex -space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-primary'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
              <div className='text-sm text-foreground/90'>Average Rating</div>
            </div>
          </div>

          {/* Client Images */}
          <div className='mt-6 flex items-center justify-center'>
            <div className='flex -space-x-3'>
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
              ].map((src, idx) => (
                <Image
                  key={idx}
                  src={src || '/placeholder.svg'}
                  alt={`Client ${idx + 1}`}
                  className='w-10 h-10 rounded-full border-2 border-background object-cover transition-transform hover:scale-110'
                  width={3000}
                  height={3000}
                />
              ))}
              <div className='w-10 h-10 rounded-full border-2 border-background bg-[#202020] flex items-center justify-center text-sm text-foreground/90'>
                10+
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}
