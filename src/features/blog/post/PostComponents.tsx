'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import {
  AnimatedSection,
  Banner,
  ScrollProgress,
  RelatedPostsByAuthor,
  ArticleSidebar,
} from '@/features/blog/post/ui';
import { Calendar, Clock, Eye, PinIcon } from 'lucide-react';
import { Post } from '@/lib';

interface PostContentProps {
  image: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  avatar: string;
  publishDate: Date;
  description: string;
  id: number;
  relatedAuthorPosts: Post[];
}

export default function PostContent({
  image,
  title,
  excerpt,
  content,
  author,
  avatar,
  publishDate,
  description,
  id,
  relatedAuthorPosts,
}: PostContentProps) {
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>(
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const h2Elements = doc.querySelectorAll('h2');
    const newHeadings = Array.from(h2Elements).map((h2, index) => {
      const id = `heading-${index}`;
      h2.id = id;
      return { id, text: h2.textContent || '' };
    });
    setHeadings(newHeadings);
  }, [content]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className='min-h-screen mb-12 '>
      <ScrollProgress scaleX={scaleX} />
      <AnimatedSection>
        <Banner image={image} title={title} />
      </AnimatedSection>

      <div className='container mx-auto px-4 py-8 relative -mt-36 z-40 bg-card rounded-lg '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <main className='lg:col-span-8'>
            <AnimatedSection>
              <span className='post_card'>
                <PinIcon className='size-6 rotate-45' />
                <span
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                  className='text-pretty'
                />
              </span>
            </AnimatedSection>
            <div className='my-4 flex items-center justify-between'>
              <div className='flex justify-between w-1/3'>
                <AnimatedSection>
                  <span className='flex items-center gap-2 text-sm text-foreground/80'>
                    <Clock className='w-4 h-4 text-foreground/80' />~{' '}
                    {((content.length * 0.01) / 60).toFixed(0)} min read
                  </span>
                </AnimatedSection>
                <AnimatedSection>
                  <span className='flex items-center gap-2 text-sm text-foreground/80'>
                    <Calendar className='w-4 h-4 text-foreground/80' />
                    {new Date(publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </AnimatedSection>
              </div>
              <AnimatedSection>
                <span className='text-sm text-foreground/80 flex items-center justify-end gap-2 w-full px-4'>
                  <Eye className='w-4 h-4 text-foreground/80' />
                  {(Math.random() * 100).toFixed(0)} views
                </span>{' '}
              </AnimatedSection>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className='pt-12 px-2'
              ref={contentRef}
            />
            <RelatedPostsByAuthor
              posts={relatedAuthorPosts}
              id={id}
              author={author}
            />
          </main>
          <aside className='lg:col-span-4'>
            <ArticleSidebar
              avatar={avatar}
              author={author}
              description={description}
              headings={headings}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
