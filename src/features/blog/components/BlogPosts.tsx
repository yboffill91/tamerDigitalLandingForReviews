'use client';

import { Suspense } from 'react';

import type { Post, Term } from '@/lib';
import { BlogFilter, BlogPostsList } from '@/features/blog/components/ui';
import { Fallback } from '@/features/layout/suspense';

interface BlogPostsProps {
  initialPosts: Post[];
  categories: Term[];
}

export function BlogPosts({ initialPosts, categories }: BlogPostsProps) {
  return (
    <section className='mt-12 mb-16'>
      <h2 className='mb-8 text-center mt-4'>
        Latest{' '}
        <span className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>
          Blog Posts
        </span>
      </h2>

      <BlogFilter categories={categories} />

      <Suspense fallback={<Fallback />}>
        <BlogPostsList initialPosts={initialPosts} />
      </Suspense>
    </section>
  );
}
