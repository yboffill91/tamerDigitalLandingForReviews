import { getUsers } from '@/services';
import { BlogAuthorCard } from '@/features/blog/components/ui';
import { Suspense } from 'react';
import { Fallback } from '@/features/layout/suspense';

export async function BlogAuthors() {
  const authors = await getUsers(3);
  return (
    <Suspense fallback={<Fallback />}>
      <BlogAuthorCard authors={authors} />
    </Suspense>
  );
}
