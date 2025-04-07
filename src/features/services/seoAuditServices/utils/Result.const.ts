interface Result {
  title: string;
  description: string;
  before: string;
  after: string;
  image: string;
}

export const results: Result[] = [
  {
    title: 'Organic traffic growth 2.5 times in 16 month',
    description:
      'Client came to us to recover from Google penalty. At the moment we started to work on the project organic traffic was less then 1000 visitors per day. On the screen shot is statistics from last 16 month.',
    before: '61773 clicks per day',
    after: '152230 clicks per day',
    image: '/analytics1.jpg',
  },
  {
    title: 'Local business visibility increased by 300%',
    description:
      'A local business struggling with online visibility approached us. Through our comprehensive SEO audit and implementation, we helped them dominate local search results.',
    before: '15420 clicks per day',
    after: '46260 clicks per day',
    image: '/analytics2.jpg',
  },
  {
    title: 'E-commerce revenue grew by 180%',
    description:
      'An online store was losing ground to competitors. Our SEO audit revealed critical issues affecting their product pages and category structure.',
    before: '89230 clicks per day',
    after: '249844 clicks per day',
    image: '/analytics3.jpg',
  },
];
