interface AVATAR {
  color: string;
  active: boolean;
  image: string;
}

export const avatars: AVATAR[] = [
  {
    color: '#c2a87b',
    active: false,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    color: '#88a2d8',
    active: true,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    color: '#d897a8',
    active: false,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    color: '#c2a87b',
    active: false,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    color: '#88a2d8',
    active: true,
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    color: '#e79274',
    active: true,
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    color: '#c2a87b',
    active: false,
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
];
