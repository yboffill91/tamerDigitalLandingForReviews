// import { IconButton3D } from '@/components/ui';
import { Post } from '@/lib';
import { getPosts } from '@/services';
import { RelatedPostCard } from '@/features/blog/components';
import { Suspense } from 'react';
import { Fallback } from '@/features/layout/suspense';
// import { DocumentIcon } from '@heroicons/react/24/outline';

export const BlogGrid = async () => {
  const posts: Post[] = await getPosts(3);

  return (
    <Suspense fallback={<Fallback />}>
      <section className='container mx-auto '>
        {/* <IconButton3D icon={DocumentIcon} /> */}
        <h2 className='mb-16 text-center mt-4'>
          Discover Our
          <span className='heading-gradient'> Latest Post</span>
        </h2>
        <div className='px-4 grid grid-cols-1 lg:grid-cols-3 gap-1 mt-10 items-center'>
          {posts.map((post) => (
            <RelatedPostCard
              key={post.id}
              title={post.title.rendered}
              slug={post.slug}
              excerpt={post.excerpt.rendered}
              image={
                post._embedded['wp:featuredmedia'][0].source_url ||
                '/placeholder.png'
              }
              authorName={post._embedded.author[0].name}
              authorAvatar={post._embedded.author[0].avatar_urls['96']}
              date={post.date}
              categories={post._embedded['wp:term'][0].map(
                (category) => category.name
              )}
            />
          ))}
        </div>
      </section>
    </Suspense>
  );
};
