import { Post } from '@/lib';
import { List } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
interface RelatedPostsByAuthorProps {
  posts: Post[];
  id: number;
  author: string;
}

export const RelatedPostsByAuthor = ({
  posts,
  id,
  author,
}: RelatedPostsByAuthorProps) => {
  return (
    <div className='mb-6 p-6 bg-gradient-to-br from-[#121212]/10 to-transparent bg-[#121212] rounded-lg my-4 mx-2 text-white text-xl'>
      <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
        <List className='h-5 w-5' />
        <span className='capitalize'>Other Articles Posted By {author}</span>
      </h3>
      {posts.map(
        (post, idx) =>
          post.id !== id && (
            <CardHoverTopBorder
              index={idx}
              key={post.id}
              className='w-full mb-2'
            >
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className='flex group sm:flex-row flex-col items-center gap-2 text-sm my-2 p-4 h-full'
              >
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  width={256}
                  height={256}
                  className='rounded-lg w-full h- max-h-20 max-w-32 object-cover border-2 border-neutral-500/10 group-hover:scale-105 aspect-square'
                />
                <div className='items-start'>
                  <span>{post.title.rendered}</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </Link>
            </CardHoverTopBorder>
          )
      )}
    </div>
  );
};
