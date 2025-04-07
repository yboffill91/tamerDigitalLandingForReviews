export interface TestimonilaImage {
  personName: string;
  image: string;
}

export interface WrittenTestimonial {
  title: string;
  content: string;
  author: string;
  role: string;
  image: string;
}

export const testimonialImages: TestimonilaImage[] = [
  {
    personName: 'Emma Reynolds',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    personName: 'David Chen',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    personName: 'Sophia Martinez',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    personName: 'James Wilson',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    personName: 'Olivia Taylor',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

export const writtenTestimonials: WrittenTestimonial[] = [
  {
    title: 'Explosive Growth',
    content:
      "Before working with this team, our social presence was practically non-existent. Now we're seeing 300% more engagement and a 40% increase in leads coming directly from social media. The ROI has been incredible!",
    author: 'Sarah Johnson',
    role: 'Marketing Director, TechFlow Inc.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    title: 'Time Reclaimed',
    content:
      'I was spending 15+ hours weekly trying to manage our social media with mediocre results. Their team took over and not only improved our presence but gave me back precious time to focus on growing my business.',
    author: 'Michael Torres',
    role: 'Owner, Artisan Bakery Co.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    title: 'Brand Authority',
    content:
      'I was struggling to position myself as an expert in my field. Their strategic content planning has established me as a thought leader, resulting in speaking opportunities and partnerships I never imagined possible.',
    author: 'Jennifer Blake',
    role: 'CEO, Wellness Innovations',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];
