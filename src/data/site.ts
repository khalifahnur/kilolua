const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kilolua.co.ke';

export const SITE = {
  name: 'Kilolua',
  legalName: 'Kilolua Holdings Limited',
  url: rawUrl.replace(/\/+$/, ''),
  tagline: 'Kenyan coffee, traded with purpose',
  title: 'Kilolua | Traceable Kenyan Green Coffee Exporter',
  description:
    'Kilolua is a Kenyan, family-owned green coffee exporter connecting farmers and cooperatives in Murang’a, Nyeri and Kirinyaga with specialty roasters and ethical importers worldwide. Traceable SL28, SL34, Ruiru 11 and Batian lots.',
  keywords: [
    'Kenyan coffee',
    'Kenya green coffee exporter',
    'specialty coffee Kenya',
    'traceable coffee',
    'SL28',
    'SL34',
    'Ruiru 11',
    'Batian',
    'Murang’a coffee',
    'Nyeri coffee',
    'Kirinyaga coffee',
    'coffee buyers',
    'coffee cooperatives',
    'Kilolua',
  ],
  email: 'info@kilolua.co.ke',
  phone: '+254710943090',
  phoneDisplay: '+254 710 943 090',
  address: {
    organization: 'Lycan International',
    locality: 'Nairobi',
    country: 'KE',
    countryName: 'Kenya',
  },
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '',
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  sameAs: ['https://www.stadipass.com'],
} as const;

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Kilolua Holdings Limited: traceable Kenyan green coffee, traded with purpose.',
};

export const emailHref = `mailto:${SITE.email}`;
export const phoneHref = `tel:${SITE.phone}`;

export const absoluteUrl = (path = '/') => `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
