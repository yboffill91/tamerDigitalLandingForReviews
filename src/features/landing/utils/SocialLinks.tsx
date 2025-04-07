import { BookOpen } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

interface SocialLink {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    title: 'TikTok',
    icon: <FaTiktok className='h-full w-full text-primary dark:text-primary' />,
    href: 'https://www.tiktok.com/@tamer.agency',
  },
  {
    title: 'YouTube',
    icon: (
      <FaYoutube className='h-full w-full text-primary dark:text-primary' />
    ),
    href: 'https://www.youtube.com/@tamer.agency',
  },
  {
    title: 'Instagram',
    icon: (
      <FaInstagram className='h-full w-full text-primary dark:text-primary' />
    ),
    href: 'https://www.instagram.com/tamer.agency',
  },
  {
    title: 'Facebook',
    icon: (
      <FaFacebook className='h-full w-full text-primary dark:text-primary' />
    ),
    href: 'https://www.facebook.com/tamer.agency',
  },
  {
    title: 'Twitter',
    icon: (
      <FaTwitter className='h-full w-full text-primary dark:text-primary' />
    ),
    href: 'https://twitter.com/tamer_agency',
  },
  {
    title: 'Blog',
    icon: <BookOpen className='h-full w-full text-primary dark:text-primary' />,
    href: '/blog',
  },
];
