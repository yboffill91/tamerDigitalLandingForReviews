import Blog from '@/features/blog/BlogComponents';
import { Fallback } from '@/features/layout/suspense';
import { Suspense } from 'react';
const page = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Blog />
    </Suspense>
  );
};

export default page;
