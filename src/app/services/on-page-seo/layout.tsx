import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './modules.css';

export const metadata: Metadata = {
  title: 'On Page Seo Services - Tamer Digital',
  description: '',
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
