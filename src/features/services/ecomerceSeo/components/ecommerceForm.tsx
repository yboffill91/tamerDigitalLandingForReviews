'use client';

import React from 'react';
import { Label, Input, Textarea, ShimmerButton } from '@/components/ui';
import { cn } from '@/lib/utils';

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className="max-w-4xl flex-none sm:max-w-6xl lg:max-w-none">
      <div className="-m-2 rounded-r-xl bg-card/50 backdrop-blur-lg p-2 ring-1 ring-foreground/20 ring-inset lg:-m-4 lg:rounded-r-2xl lg:p-4">
        <div className="shadow-input w-full max-w-3xl bg-card/80  backdrop-blur-sm p-8 rounded-r-md">
          <h2 className="text-xl font-bold text-foreground">
            Get Your Free Proposal
          </h2>
          <p className="mt-2 max-w-sm text-sm text-foreground/80">
            Let us help you grow your business with proven digital marketing
            strategies
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="firstName" className="mb-2">
                  First Name*
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName" className="mb-2">
                  Last Name*
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <LabelInputContainer>
                <Label htmlFor="company" className="mb-2">
                  Company/Organization*
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="website" className="mb-2">
                  Website
                </Label>
                <Input
                  id="website"
                  placeholder="Enter your website URL"
                  type="url"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mt-4">
              <Label htmlFor="email" className="mb-2">
                Email Address*
              </Label>
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
                required
              />
            </LabelInputContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <LabelInputContainer>
                <Label htmlFor="services" className="mb-2">
                  Services*
                </Label>
                <select
                  className="flex h-10 w-full rounded-md border-none bg-background-primary/50 px-3 pr-8 py-2 text-sm  appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_8px_center] bg-no-repeat"
                  id="services"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO</option>
                  <option value="ppc">PPC</option>
                  <option value="social">Social Media</option>
                </select>
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="companySize" className="mb-2">
                  Company Size*
                </Label>
                <select
                  className="flex h-10 w-full rounded-md border-none bg-background-primary/50 px-3 pr-8 py-2 text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_8px_center] bg-no-repeat"
                  id="companySize"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mt-4">
              <Label htmlFor="source" className="mb-2">
                How Did You Hear About Thrive?
              </Label>
              <Input
                id="source"
                placeholder="Tell us how you found us"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mt-4 mb-8">
              <Label htmlFor="message" className="mb-2">
                Tell us about your business
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your business needs"
                rows={3}
              />
            </LabelInputContainer>

            <ShimmerButton
              variant="outline"
              size="big"
              type="submit"
              className="w-full"
            >
              SEND MY FREE PROPOSAL
              <BottomGradient />
            </ShimmerButton>

            <div className="mt-4 text-center text-sm text-foreground/500">
              <p>
                In a hurry? Give us a call now at{' '}
                <a
                  href="tel:+17869457843"
                  className="text-primary hover:underline"
                >
                  +1 (786) 945-7843
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
