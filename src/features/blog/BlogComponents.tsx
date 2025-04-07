import {
  BlogAuthors,
  BlogCTA,
  BlogGrid,
  BlogHero,
} from '@/features/blog/components';
import { getPosts, getCategories } from '@/services';
import { BlogPosts } from './components/BlogPosts';

export default async function Blog() {
  const [initialPosts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  return (
    <main className=''>
      <BlogHero />
      <BlogGrid />
      <BlogPosts initialPosts={initialPosts} categories={categories} />
      <BlogAuthors />
      <BlogCTA />
    </main>
  );
}
