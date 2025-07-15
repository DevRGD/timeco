const BASE_URL = 'https://timeco.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const defaultMeta = {
  title: 'TIMECO — Premium Watches for Every Moment',
  description:
    'Shop TIMECO’s exclusive collection of timeless, minimalist, and luxurious wristwatches. Crafted with precision and elegance for modern lifestyles.',
  keywords: ['Timeco', 'DevRGD', 'luxury watches', 'minimal watches', 'gift watches', 'premium wristwatch'],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/' },
  authors: [{ name: 'DevRGD', url: 'https://github.com/devrgd' }],
  creator: 'DevRGD',
  publisher: 'TIMECO',
  openGraph: {
    url: BASE_URL,
    siteName: 'TIMECO',
    locale: 'en_US',
    type: 'website',
    title: 'TIMECO — Premium Watches for Every Moment',
    description:
      'Discover TIMECO’s elegant collection of premium watches. Perfect for everyday wear, gifting, or your personal style statement.',
    images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630, alt: 'TIMECO watches' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@timeco_official',
    title: 'TIMECO — Premium Watches for Every Moment',
    description: 'Elegant, timeless, and crafted with precision — explore the latest collections at TIMECO.',
    images: [DEFAULT_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  category: 'ecommerce',
};

export default function buildMetadata(overrides = {}) {
  return {
    ...defaultMeta,
    ...overrides,
    openGraph: { ...defaultMeta.openGraph, ...overrides.openGraph },
    twitter: { ...defaultMeta.twitter, ...overrides.twitter },
  };
}
