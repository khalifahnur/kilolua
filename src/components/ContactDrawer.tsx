'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { SITE, emailHref, phoneHref } from '../data/site';
import type { InquiryType } from '../lib/contactSchema';

export default function ContactDrawer() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<InquiryType>('buyer');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const requested = (event as CustomEvent<{ type?: InquiryType }>).detail?.type;
      if (requested === 'buyer' || requested === 'farmer') setType(requested);
      setIsOpen(true);
    };
    window.addEventListener('openContact', handleOpen);
    return () => window.removeEventListener('openContact', handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end pointer-events-none font-lora">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/40 pointer-events-auto backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={t('contact_form.title')}
            className="relative w-full max-h-[90vh] bg-sand rounded-t-[40px] pointer-events-auto shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")" }}
            data-lenis-prevent="true"
          >
            <button 
              ref={closeRef}
              onClick={() => setIsOpen(false)}
              aria-label={t('contact_form.close')}
              className="absolute top-0 right-6  md:right-12 w-16 h-16 md:w-20 md:h-20 bg-sand rounded-full flex items-center justify-center z-50 hover:scale-105 transition-transform cursor-pointer"
              style={{ boxShadow: "0px -4px 20px rgba(0,0,0,0.15), 0px 10px 20px rgba(0,0,0,0.1)" }}
            >
              <X className="w-8 h-8 md:w-10 md:h-10 text-royal-red" strokeWidth={2.5} />
            </button>
            <div className="relative w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-[60vh]">
              <div className="w-full lg:w-1/2 flex flex-col relative z-20">
                <div className="w-full lg:w-[105%] xl:w-[110%] bg-royal-red pt-10 md:pt-12 lg:pt-16 px-8 md:px-16 lg:px-20 pb-16 lg:pb-24 rounded-t-[40px] lg:rounded-tr-none relative self-start z-20">
                  <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
                    <div className="flex-1">
                      <h3 className="font-playfair text-4xl lg:text-5xl text-sand tracking-wide mb-3">{t('contact_form.address').toUpperCase()}</h3>
                      <address className="not-italic text-sand/90 text-sm lg:text-base leading-relaxed font-medium">
                        <p>{SITE.address.organization}</p>
                        <p>{SITE.address.locality}, {SITE.address.countryName}</p>
                        <p>
                          <a href={emailHref} className="underline underline-offset-4 hover:text-white break-all">{SITE.email}</a>
                        </p>
                      </address>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-4xl lg:text-5xl text-sand tracking-wide mb-3">{t('contact_form.phone_heading').toUpperCase()}</h3>
                      <div className="text-sand/90 text-sm lg:text-base leading-relaxed font-medium">
                        <p>
                          <a href={phoneHref} className="underline underline-offset-4 hover:text-white">{SITE.phoneDisplay}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none transform translate-y-[99%] z-0 pointer-events-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-20 fill-royal-red block">
                       <path d="M0,0 L1200,0 L1200,20 C900,100 600,0 300,80 C150,110 50,60 0,40 Z"></path>
                    </svg>
                  </div>
                </div>

                </div>

              <div className="w-full lg:w-1/2 flex flex-col px-8 md:px-16 lg:px-24 pt-8 lg:pt-32 pb-16 lg:pb-12 z-10">
                <div className="max-w-xl mx-auto lg:mx-0 w-full">
                  <ContactForm initialType={type} />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
