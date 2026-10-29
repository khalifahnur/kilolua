import AboutScreen from '../../src/screens/AboutScreen';
import JsonLd from '../../src/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us | Family-Owned Kenyan Coffee Exporter',
  description:
    'Meet the Kenyan family behind Kilolua: majority women-owned, rooted in Murang’a and connected to buyers in Europe, Australia and beyond through traceable, relationship-driven coffee trade.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <AboutScreen />
    </>
  );
}
