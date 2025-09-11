import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: '#',
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Top-Up Murah', href: 'https://pixystore.id', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Produk Unggulan',
      links: [
        { text: 'Mobile Legends: Bang Bang ID', href: 'https://pixystore.id/game/mobile-legends' },
        { text: 'Honor of Kings', href: 'https://pixystore.id/game/honor-of-kings' },
        { text: 'Roblox', href: 'https://pixystore.id/voucher/roblox' },
        { text: 'Free Fire', href: 'https://pixystore.id/game/free-fire' },
        { text: 'Delta Force Mobile', href: 'https://pixystore.id/game/delta-force-mobile' },
        { text: 'PUBG Mobile', href: 'https://pixystore.id/game/pubg-mobile' },
        { text: 'Genshin Impact', href: 'https://pixystore.id/game/genshin-impact' },
        { text: 'Steam Wallet', href: 'https://pixystore.id/voucher/steam' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Customer Service', href: 'https://api.whatsapp.com/send/?phone=%2B6281380091046&text&type=phone_number&app_absent=0' },
        { text: 'Partner', href: 'https://www.youtube.com/@MILKKI_TAYO' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/pixystore_id' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/pixystoreid/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@MILKKI_TAYO' },
  ],
  footNote: `
    Top-Up Termurah Cuma di <a class="text-blue-600 underline dark:text-muted" href="https://pixystore.id"> PixyStore.id</a> ·
  `,
};
