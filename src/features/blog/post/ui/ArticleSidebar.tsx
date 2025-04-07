'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Share2 } from 'lucide-react';
import { Input, ShimmerButton } from '@/components/ui';
import { TableOfContents, ShareButtons } from '@/features/blog/post/ui';

interface ArticleSidebarProps {
  author: string;
  avatar: string;
  description: string;
  headings: Array<{ id: string; text: string }>;
}

export const ArticleSidebar = ({
  avatar,
  author,
  description,
  headings,
}: ArticleSidebarProps) => {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
  };

  return (
    <div className='sticky top-24 space-y-6'>
      <div className='p-6  bg-gradient-to-br from-card/10 to-transparent border-l-4 border-primary border-offset-2 rounded-lg text-xl'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='h-12 w-12'>
            <Image
              src={avatar || '/placeholder.svg'}
              alt={author}
              width={48}
              height={48}
              className='rounded-full w-12 h-12 object-cover border-2 border-primary'
            />
          </div>
          <div>
            <h3 className='font-semibold capitalize'>{author}</h3>
          </div>
        </div>
        <p className='text-sm  '>{description}</p>
      </div>
      <div className='p-6 shadow-sm bg-gradient-to-br from-card to-primary/10 border-l-4 border-primary border-offset-2 rounded-lg text-white text-xl'>
        <div className='flex items-center gap-3 mb-4'>
          <Mail className='h-6 w-6 text-blue-500' />
          <h3 className='text-lg font-semibold text-foreground'>
            Get the week&apos;s best marketing content
          </h3>
        </div>
        <form onSubmit={handleSubscribe} className='space-y-4'>
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full'
          />
          <ShimmerButton type='submit' className='w-full'>
            Subscribe
          </ShimmerButton>
        </form>
      </div>
      <TableOfContents headings={headings} />

      <div className='p-6 mb-6  bg-gradient-to-br from-card/10 to-transparent border-l-4 border-primary border-offset-2 rounded-lg textforeground text-xl'>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <Share2 className='h-5 w-5' />
          Share Article
        </h3>
        <ShareButtons />
      </div>
    </div>
  );
};
