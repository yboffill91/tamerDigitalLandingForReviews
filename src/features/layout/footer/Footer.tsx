'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube, MailIcon } from 'lucide-react';
import React from 'react';
import { FaTiktok as TiktokIcon } from 'react-icons/fa';
import { Input, Logo, ShimmerButton } from '@/components/ui';

import { NAVCONFIG, services, tools } from '../header/utils';

export function Footer() {
  return (
    <footer role='contentinfo' className='bg-card border-t border-card/50'>
      {/* Top border shadow */}
      <div className='h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent' />

      <div className='mx-auto container  py-12 lg:px-8'>
        {/* Logo and Description */}
        <div className='border-b border-foreground/10 pb-8 flex lg:flex-row flex-col justify-start items-start mx-auto lg:text-left text-center'>
          <div className='lg:max-w-lg w-full'>
            <Logo />
            <p className='mb-4 text-sm text-foreground/90'>
              Transform your digital presence with data-driven strategies that
              deliver measurable results. Our proven approach combines SEO,
              content marketing, and social media to help you dominate your
              market.
            </p>
            <address className='text-sm text-foreground/90 not-italic'>
              Contact us at{' '}
              <Link
                href='mailto:hello@tamerdigital.com'
                className='font-medium text-primary hover:text-primary/80 transition-colors'
              >
                office@tamerdigital.com
              </Link>
            </address>
          </div>

          {/* Newsletter Subscription */}
          <div className='w-full lg:ml-20 '>
            <h3 className='text-lg font-bold text-foreground mb-4'>
              Subscribe to Our Newsletter
            </h3>
            <p className='text-sm text-foreground/90 mb-4'>
              Get the latest digital marketing insights and strategies delivered
              to your inbox.
            </p>
            <div className='flex gap-2 items-center justify-center lg:justify-start w-full'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='lg:w-96 md:w-64 w-48'
              />
              <ShimmerButton variant='solid' className='py-2.5 gap-2'>
                Subscribe
                <span>
                  <MailIcon className='size-4' />
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-12 pt-12 px-2'>
          {/* Services */}
          <div className='col-span-2'>
            <h3 className='mb-4'>Services</h3>
            <ul className='grid grid-cols-2 gap-2'>
              {services.map(
                ({ name, icon: IconElement, href, status }, index) =>
                  status === 'ready' && (
                    <li key={name + index}>
                      <Link
                        href={href}
                        className='text-foreground hover:text-primary transition-colors duration-300 ease-in-out'
                      >
                        <span className='flex items-center gap-2'>
                          <IconElement className='w-4 h-4' />
                          {name}
                        </span>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className='mb-4'>Free Tools</h3>
            <ul className='flex flex-wrap flex-col items-start justify-start gap-2'>
              {tools.map(({ name, icon: IconElement, href }, index) => (
                <li key={name + index}>
                  <Link
                    href={href}
                    className='flex gap-2 items-center hover:text-primary transition-colors duration-300 ease-in-out'
                  >
                    <IconElement className='size-4' />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className='mb-4'>Pages</h3>
            <ul className='flex flex-wrap flex-col items-start justify-start gap-2'>
              {NAVCONFIG.map(({ name, url, icon: IconElement }, index) => (
                <li key={url + index}>
                  <Link
                    href={url}
                    className='flex gap-2 items-center hover:text-primary transition-colors duration-300 ease-in-out capitalize'
                  >
                    <IconElement className='size-4' />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-800 flex justify-between items-center'>
          <p className='text-sm text-foreground/90'>
            &copy; {new Date().getFullYear()} TAMERDigital. All Rights Reserved.
          </p>
          <div className='flex items-center gap-4'>
            <a href='#' className='social-container social-instagram'>
              <Instagram />
            </a>
            <a href='#' className='social-container social-facebook'>
              <Facebook />
            </a>
            <a href='#' className='social-container social-tiktok'>
              <TiktokIcon />
            </a>
            <a href='#' className='social-container social-youtube'>
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
