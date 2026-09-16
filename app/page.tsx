'use client';

import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Products from '../src/components/Products';
import Video from '../src/components/Video';
import Brands from '../src/components/Brands';
// import WhyKenya from '../src/components/WhyKenya';

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-sand text-royal-navy overflow-x-hidden">
      <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            />
      <Hero />
      <About />
      <Products />
      <Video />
      {/* <WhyKenya /> */}
      <Brands />
    </div>
  );
}
