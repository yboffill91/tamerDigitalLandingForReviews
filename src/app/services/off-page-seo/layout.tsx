import type { Metadata } from 'next';
import '@/features/services/offPageSeo/Modules/OffPageSeoModules.css';

export const metadata: Metadata = {
  title: 'Tamer Digital Beta',
  description: 'Landing Beta for Tamer Digital',
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
