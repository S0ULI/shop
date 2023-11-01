type NavItem = {
  title: string;
} & (
  | {
      href: string;
    }
  | {
      options: NavItem[];
    }
);

export const header: NavItem[] = [
  {
    title: 'home',
    href: 'd',
  },
  {
    title: 'Products',
    options: [
      {
        title: 'Men',
        href: 'products/men',
      },
      {
        title: 'Women',
        href: 'products/women',
      },
    ],
  },
  {
    title: 'Cart',
    href: '/cart',
  },
  {
    title: 'Profile',
    href: '/profile',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
];
