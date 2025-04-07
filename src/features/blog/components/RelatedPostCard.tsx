import Image from 'next/image';
import Link from 'next/link';
import { Clock, TagIcon } from 'lucide-react';

interface RelatedPostCardProps {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  categories: string[];
}

export const RelatedPostCard = ({
  title,
  slug,
  excerpt,
  image,
  authorName,
  authorAvatar,
  date,
  categories,
}: RelatedPostCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className='group relative overflow-hidden rounded-2xl bg-card border border-ring/10 transition-all duration-300 hover:border-primary/50 max-w-md mx-auto  '
    >
      <div className='w-full h-full'>
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          width={600}
          height={400}
          className='h-64 object-cover opacity-55 group-hover:opacity-100 transition-all duration-300 ease-in-out'
        />

        <div className='p-6 flex flex-col bg-gradient-to-br from-card/50 to-card h-full '>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex flex-wrap items-center gap-2'>
              <div className='text-sm bg-gradient-to-r from-card to-primary/30 px-2 rounded-xl flex items-center gap-2 '>
                <TagIcon className='size-3' />
                {categories.map((category, index) => (
                  <span key={index}>
                    {category}
                    {index !== categories.length - 1 && ' | '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='flex items-start justify-between mb-8'>
            <div className='flex flex-col items-start gap-3'>
              <Image
                src={authorAvatar || '/placeholder.svg'}
                alt={authorName}
                width={48}
                height={48}
                className='rounded-full w-12 h-12 object-cover'
              />
              <div>
                <p className='text-sm font-medium text-foreground'>
                  {authorName}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Clock className='w-4 h-4 text-foreground/80' />
              <span className='text-sm text-foreground/80'>
                {formattedDate}
              </span>
            </div>
          </div>

          <h3 className='text-xl font-semibold text-foreground mb-4 line-clamp-2 group-hover:bg-gradient-to-r from-primary to-ring group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300'>
            {title}
          </h3>

          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
      </div>
    </Link>
  );
};
