'use client';

import { useEffect, use } from 'react';
import Link from 'next/link';
import { coffeeProfiles } from '../../../src/data/coffeeProfiles';
import CoffeeCanvas from '../../../src/components/coffee/CoffeeCanvas';
import CoffeeHtmlOverlay from '../../../src/components/coffee/CoffeeHtmlOverlay';
import AnimationController from '../../../src/components/coffee/AnimationController';
import { useTranslation } from 'react-i18next';

export default function CoffeeExperience({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useTranslation();
  const profile = coffeeProfiles[slug as string] || coffeeProfiles['sl28'];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Back button */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50">
        <Link href="/" className="font-playfair text-xl tracking-widest text-royal-navy hover:text-royal-red transition-colors flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full">
          {t('coffee_exp.back')}
        </Link>
      </div>

      {/* 3D Canvas - Fixed */}
      <CoffeeCanvas />

      {/* HTML Content - Scrolling */}
      <CoffeeHtmlOverlay profile={profile} />

      {/* GSAP Logic Controller */}
      <AnimationController />
    </div>
  );
}
