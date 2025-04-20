import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, siteMetadata } from '@/lib';
import { Header } from '@/features/layout/header/Header';
import { Footer } from '@/features/layout/footer/Footer';
import { ModalProvider } from '@/providers/welcomeModalProvider';
import { DelayedModal } from '@/components/modals';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    type: 'website',
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.organization.name,
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} antialiased transition-all duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ModalProvider>
            <Header />
            {children}
            <Footer />
            <DelayedModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
