import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.our_coffee'), path: '/#products' },
    { name: t('nav.production'), path: '/production' },
    { name: t('nav.traceability'), path: '/traceability' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 py-8 md:px-12 flex justify-between items-start z-40">
        <button 
          onClick={() => setIsOpen(true)}
          className="text-royal-navy hover:text-royal-red transition-colors mt-2"
        >
          <Menu size={36} strokeWidth={1.5} />
        </button>
        
        <Link href="/" className="flex flex-col items-center relative group cursor-pointer">
         
          <div className="flex flex-col items-center">
            <Image src={'/logo.png'} width={100} height={100} alt='kilolua logo'/>
          </div>
        </Link>

        <button 
          onClick={toggleLanguage}
          className="w-10 h-10 rounded-full border-[1.5px] border-royal-navy flex items-center justify-center font-bold text-sm text-royal-navy hover:bg-royal-navy hover:text-sand transition-colors mt-2"
        >
          {i18n.language.startsWith('en') ? 'FR' : 'EN'}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-royal-red flex flex-col justify-center px-6 md:px-24 h-[100dvh] overflow-hidden"
            data-lenis-prevent="true"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            ></div>
            <div className="absolute top-12 left-6 flex gap-6 text-sand font-lora text-sm font-bold md:hidden z-10 opacity-80">
              <a href="#" className="hover:text-white transition-colors">IG</a>
              <a href="#" className="hover:text-white transition-colors">FB</a>
              <a href="#" className="hover:text-white transition-colors">IN</a>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center items-end pointer-events-none md:hidden z-0 translate-y-1/4">
              <h1 className="font-playfair text-[35vw] leading-[0.7] text-sand/10 tracking-tighter whitespace-nowrap select-none">
                KILOLUA
              </h1>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 md:top-10 md:right-12 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/15 flex items-center justify-center text-sand hover:bg-black/25 transition-colors z-10"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col items-start gap-2 md:gap-4 z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.path !== '/#contact' ? link.path : '#'}
                    onClick={(e) => {
                      if (link.path === '/#contact') {
                        e.preventDefault();
                        setIsOpen(false);
                        window.dispatchEvent(new Event('openContact'));
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="font-playfair text-[13vw] sm:text-[11vw] md:text-[9vh] lg:text-[11vh] text-sand hover:text-white transition-colors leading-[0.85] tracking-wide distressed inline-block relative"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
