import { Inter, Montserrat_Alternates, Raleway, Sora } from 'next/font/google';

export const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const headingFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const bodyFont2 = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const SoraFonts = Sora({
  weight: ['300', '700'],
  display: 'swap',
  subsets: ['latin'],
});
