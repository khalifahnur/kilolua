import HomeScreen from '../src/screens/HomeScreen';
import { SITE } from '../src/data/site';

export const metadata = {
  title: { absolute: SITE.title },
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomeScreen />;
}
