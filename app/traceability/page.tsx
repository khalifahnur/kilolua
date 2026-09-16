'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import TraceabilityScroll from '../../src/components/TraceabilityScroll';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

const TraceabilityMap = dynamic(() => import('../../src/components/TraceabilityMap'), { ssr: false });

const markers = [
  { name: "Kenya", coordinates: [37.9062, -0.0236] as [number, number], flag: "🇰🇪" },
  { name: "France", coordinates: [2.2137, 46.2276] as [number, number], flag: "🇫🇷" },
  { name: "England", coordinates: [-1.1743, 52.3555] as [number, number], flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "Germany", coordinates: [10.4515, 51.1657] as [number, number], flag: "🇩🇪" },
  { name: "Australia", coordinates: [133.7751, -25.2744] as [number, number], flag: "🇦🇺" },
];

export default function TraceabilityPage() {
  const { t } = useTranslation();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: mapContainerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-sand min-h-screen font-lora text-royal-navy overflow-hidden">
      <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            />
      <main className="pt-32 md:pt-48 pb-0">
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-24 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:max-w-xl"
          >
            <div className="font-caveat text-4xl md:text-5xl text-royal-navy mb-2 -rotate-2 transform origin-left">{t('traceability.intro_subtitle')}</div>
            <h1 className="font-playfair text-7xl md:text-8xl lg:text-[80px] font-bold text-royal-navy tracking-wide distressed uppercase leading-[0.85]">
              {t('traceability.intro_title')}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full text-royal-navy/80 text-base md:text-lg leading-relaxed font-medium"
          >
            {t('traceability.intro_desc')}
          </motion.div>
        </section>

        
 
        <TraceabilityScroll />

 

        <div ref={mapContainerRef} className="w-full bg-royal-red pb-32">
          <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
              }}
            />
          <motion.section 
            style={{ scale }} 
            className="relative w-full flex justify-center pt-16 md:pt-24"
          >
            <div className="relative w-full max-w-[1400px] mx-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] aspect-[3/1] pointer-events-none -z-10"></div>
              <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-30 pointer-events-none text-center">
                <p className="text-base md:text-xl leading-relaxed font-semibold text-royal-navy/80">
                  {t('traceability.map_desc')}
                </p>
              </div>
              <div className="relative w-full px-4 md:px-12 mt-20 md:mt-32">
                <TraceabilityMap markers={markers} />
              </div>

            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}