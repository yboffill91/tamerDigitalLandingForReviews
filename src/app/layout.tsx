import type { Metadata } from 'next';
import './globals.css';
import { bodyFont } from '@/lib';
import { Header } from '@/features/layout/header/Header';
import { Footer } from '@/features/layout/footer/Footer';
import { ModalProvider } from '@/providers/welcomeModalProvider';
import { DelayedModal } from '@/components/modals';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Breadcrumb } from '@/components';

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
  return (
    <html lang='en'>
      <body
        className={`${bodyFont.className} antialiased transition-all duration-300`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange={false}
        >
          <ModalProvider>
            <Header />
            <Breadcrumb className='fixed top-16 left-1/2 -translate-x-1/2 z-40' />
            {children}
            <Footer />
            <DelayedModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
