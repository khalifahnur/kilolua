'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactDrawer from './ContactDrawer';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Footer from './Footer';

const PRELOADER_KEY = 'kilolua-intro-seen';
const LANG_KEY = 'kilolua-lang';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // The intro only plays once per browser session; later reloads skip straight to the page.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(PRELOADER_KEY)) setIsLoading(false);
    } catch {
      /* storage unavailable: just play the intro */
    }
  }, []);

  const finishLoading = useCallback(() => {
    try {
      sessionStorage.setItem(PRELOADER_KEY, '1');
    } catch {
      /* ignore */
    }
    setIsLoading(false);
  }, []);

  // Restore the visitor's language choice and keep <html lang> in sync for screen readers and search engines.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && saved !== i18n.language && ['en', 'fr'].includes(saved)) i18n.changeLanguage(saved);
    } catch {
      /* ignore */
    }
    const sync = (lng: string) => {
      document.documentElement.lang = lng.startsWith('fr') ? 'fr' : 'en';
      try {
        localStorage.setItem(LANG_KEY, lng.startsWith('fr') ? 'fr' : 'en');
      } catch {
        /* ignore */
      }
    };
    sync(i18n.language);
    i18n.on('languageChanged', sync);
    return () => i18n.off('languageChanged', sync);
  }, [i18n]);

  useEffect(() => {
    if (isLoading) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="distress-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves={3} result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" in="noise" result="coloredNoise" />
            <feComposite operator="in" in="SourceGraphic" in2="coloredNoise" result="composite" />
          </filter>
        </defs>
      </svg>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={finishLoading} />}
      </AnimatePresence>
      <Navbar />
      <main className="min-h-screen bg-sand-50">
        {children}
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
