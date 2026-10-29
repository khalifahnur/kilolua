import ContactScreen from '../../src/screens/ContactScreen';
import JsonLd from '../../src/components/JsonLd';
import { SITE, absoluteUrl } from '../../src/data/site';
import { breadcrumbJsonLd, pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact | Buy or Sell Kenyan Coffee',
  description: `Contact Kilolua Holdings Limited in Nairobi, Kenya. Coffee buyers and farmers or cooperatives selling coffee can email ${SITE.email} or call ${SITE.phoneDisplay}.`,
  path: '/contact',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: absoluteUrl('/contact'),
            name: 'Contact Kilolua',
            about: { '@id': absoluteUrl('/#organization') },
          },
        ]}
      />
      <ContactScreen />
    </>
  );
}
