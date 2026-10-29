'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Video from '../components/Video';
import Brands from '../components/Brands';
// import WhyKenya from '../components/WhyKenya';

export default function HomeScreen() {
  return (
    <div className="relative w-full min-h-screen bg-sand text-royal-navy overflow-x-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <Hero />
      <About />
      <Products />
      <Video />
      {/* <WhyKenya /> */}
      <Brands />
    </div>
  );
}
