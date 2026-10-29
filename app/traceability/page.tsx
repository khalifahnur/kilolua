import TraceabilityScreen from '../../src/screens/TraceabilityScreen';
import JsonLd from '../../src/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Traceability | Every Kenyan Coffee Lot Has a Story',
  description:
    'Follow Kilolua’s Kenyan green coffee from farm and cooperative to lot, export and roastery. Transparent, traceable supply to specialty buyers in the UK, France, Germany and Australia.',
  path: '/traceability',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Traceability', path: '/traceability' },
        ])}
      />
      <TraceabilityScreen />
    </>
  );
}
