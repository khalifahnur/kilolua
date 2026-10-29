import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lora, Caveat } from 'next/font/google';
import '../src/index.css';
import ClientLayout from '../src/components/ClientLayout';
import JsonLd from '../src/components/JsonLd';
import { OG_IMAGE, SITE, absoluteUrl } from '../src/data/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--nf-playfair',
});
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--nf-lora',
});
const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--nf-caveat',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e4decb',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'Coffee',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_KE',
    alternateLocale: ['fr_FR'],
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
    ...(SITE.twitterHandle ? { site: SITE.twitterHandle, creator: SITE.twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(SITE.googleVerification ? { verification: { google: SITE.googleVerification } } : {}),
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: absoluteUrl('/logo.png'),
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.locality,
        addressCountry: SITE.address.country,
      },
      areaServed: ['KE', 'GB', 'FR', 'DE', 'AU'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: SITE.email,
          telephone: SITE.phone,
          availableLanguage: ['English', 'French'],
        },
      ],
      sameAs: [...SITE.sameAs],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: ['en', 'fr'],
      publisher: { '@id': absoluteUrl('/#organization') },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${caveat.variable}`}>
      <head>
        {/* Without JavaScript the intro preloader would cover the page forever. */}
        <noscript>
          <style>{'.preloader{display:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={organizationJsonLd} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
