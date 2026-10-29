import ProductionScreen from '../../src/screens/ProductionScreen';
import JsonLd from '../../src/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Production | From Cherry to Shipment',
  description:
    'How Kenyan specialty coffee is grown, harvested, processed (washed, natural, honey), selected and exported by Kilolua, from Murang’a, Nyeri and Kirinyaga to roasteries worldwide.',
  path: '/production',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Production', path: '/production' },
        ])}
      />
      <ProductionScreen />
    </>
  );
}
