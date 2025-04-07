import { ContactCard } from '@/lib';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export const contactCards: ContactCard[] = [
  {
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    contact: 'sales@tamerdigital.com',
    icon: MessageSquare,
    type: 'email',
  },
  {
    title: 'Chat to support',
    description: "We're here to help.",
    contact: 'support@tamerdigital.com',
    icon: Mail,
    type: 'email',
  },
  {
    title: 'Visit us',
    description: 'Visit our office HQ.',
    contact: 'View on Google Maps',
    icon: MapPin,
    type: 'button',
    action: () => window.open('https://maps.google.com', '_blank'),
  },
  {
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    contact: '+1 (786) 458 2823',
    icon: Phone,
    type: 'phone',
  },
];
