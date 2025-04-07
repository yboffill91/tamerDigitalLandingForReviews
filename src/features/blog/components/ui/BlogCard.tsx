'use client';
import { Clock, Tag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Term } from '@/lib';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import { BlogCardHeaderElement } from './BlogCardHeaderElement';

interface BlogCardProps {
  slug: string;
  date: string;
  title: string;
  featuredMedia: string;
  avatar: string;
  categories: Term[];
  author: string;
  index: number;
  excerpt: string;
}

export const BlogCard = ({
  slug,
  date,
  title,
  featuredMedia,
  avatar,
  categories,
  author,
  index,
  excerpt,
}: BlogCardProps) => {
  console.log(avatar);
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <CardHoverTopBorder index={index} className='bg-card/90'>
      <Link href={`blog/${slug}`} className='flex flex-col w-full '>
        <Image
          src={featuredMedia}
          alt={author + ': ' + title}
          width={300}
          height={300}
          className='h-32 relative object-cover rounded-t-lg opacity-90 w-full'
        />
        <Image
          src={avatar}
          alt={author}
          width={150}
          height={150}
          className='rounded-full size-16 border-ring border-2 object-contain absolute  top-24 right-1/2 translate-x-1/2 z-40'
        />
        <div className='flex flex-col items-baseline justify-start md:min-h-64 mx-2 text-pretty h-full mt-10'>
          <div>
            <h2 className='!text-[1.2rem]'>{title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: excerpt }}
              className='text-sm px-2 py-1 text-foreground/80'
            />
          </div>
          <div className='flex-flex-col items-center justify-start  bg-card/50 backdrop-filter backdrop-blur-lg h-32 absolute top-1 right-0  rounded-t-lg p-2 -z-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-[calc(100%-4px)]'>
            <BlogCardHeaderElement icon={User}>
              <span>Posted By: {author}</span>
            </BlogCardHeaderElement>
            <BlogCardHeaderElement icon={Clock}>
              <span>{formatedDate}</span>
            </BlogCardHeaderElement>
            <BlogCardHeaderElement icon={Tag}>
              <span>
                {categories.map(({ name }, idx) => (
                  <span key={name + idx}>
                    {name} {idx !== categories.length - 1 && '|'}
                  </span>
                ))}
              </span>
            </BlogCardHeaderElement>
          </div>
        </div>
      </Link>
    </CardHoverTopBorder>
  );
};
