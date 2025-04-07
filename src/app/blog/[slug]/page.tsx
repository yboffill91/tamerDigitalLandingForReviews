import { getPostBySlug, getRelatedPostsByAuthor } from '@/services';
import type { Post } from '@/lib';
import PostContent from '@/features/blog/post/PostComponents';
import { Fallback } from '@/features/layout/suspense';
import { Suspense } from 'react';

type Params = Promise<{ slug: string }>;

// export async function generateMetadata({ params }: { params: Params }) {
//   const { slug } = await params;
// }

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const posts: Post[] = await getPostBySlug(slug);

  if (posts.length === 0) {
    return <div>Post not found</div>;
  }

  const post = posts[0];
  const id = post.id;
  const title = post.title.rendered || 'No title';
  const featuredImage =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg';
  const excerpt = post.excerpt.rendered || 'No excerpt';
  const content = post.content.rendered || 'No content';
  const author = post._embedded?.author?.[0]?.name || 'No author';
  const authorAvatar =
    post._embedded?.author?.[0]?.avatar_urls?.['96'] || '/placeholder.svg';
  const publishDate = new Date(post.date) || new Date();
  const description =
    post._embedded?.['author']?.[0]?.description || 'No description';
  const authorId = post._embedded?.author?.[0]?.id;

  const relatedAuthorPosts = await getRelatedPostsByAuthor(authorId);

  return (
    <Suspense fallback={<Fallback />}>
      <PostContent
        image={featuredImage}
        title={title}
        excerpt={excerpt}
        content={content}
        author={author}
        avatar={authorAvatar}
        publishDate={publishDate}
        description={description}
        id={id}
        relatedAuthorPosts={relatedAuthorPosts}
      />
    </Suspense>
  );
}
