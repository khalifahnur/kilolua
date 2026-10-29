'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { SITE, emailHref, phoneHref } from '../data/site';
import type { InquiryType } from '../lib/contactSchema';

export default function ContactScreen({ initialType }: { initialType?: InquiryType }) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-sand text-royal-navy overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="relative px-6 md:px-12 max-w-[1400px] mx-auto pt-32 md:pt-48 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <h1 className="font-playfair text-6xl md:text-[80px] font-bold leading-[0.85] tracking-wide uppercase mb-8">
            {t('contact_page.title')}
          </h1>
          <p className="text-lg opacity-80 mb-10 max-w-md">{t('contact_page.subtitle')}</p>

          <dl className="space-y-6">
            <div>
              <dt className="font-playfair text-2xl text-royal-red mb-1">{t('contact_form.email_heading')}</dt>
              <dd>
                <a href={emailHref} className="text-lg underline underline-offset-4 hover:text-royal-red break-all">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-playfair text-2xl text-royal-red mb-1">{t('contact_form.phone_heading')}</dt>
              <dd>
                <a href={phoneHref} className="text-lg underline underline-offset-4 hover:text-royal-red">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-playfair text-2xl text-royal-red mb-1">{t('contact_form.address')}</dt>
              <dd>
                <address className="not-italic text-lg">
                  {SITE.address.organization}
                  <br />
                  {SITE.address.locality}, {SITE.address.countryName}
                </address>
              </dd>
            </div>
          </dl>
          <p className="mt-10 text-sm opacity-70">{t('contact_page.hours')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-7 max-w-2xl w-full"
        >
          <ContactForm initialType={initialType} />
        </motion.div>
      </div>
    </div>
  );
}
