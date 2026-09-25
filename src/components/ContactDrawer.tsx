import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Instagram, Facebook, Youtube, X } from 'lucide-react';

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openContact', handleOpen);
    return () => window.removeEventListener('openContact', handleOpen);
  }, []);

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
            className="relative w-full max-h-[90vh] bg-sand rounded-t-[40px] pointer-events-auto shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")" }}
            data-lenis-prevent="true"
          >
            <button 
              onClick={() => setIsOpen(false)}
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
                      <h3 className="font-playfair text-4xl lg:text-5xl text-sand tracking-wide mb-3">ADDRESS</h3>
                      <div className="text-sand/90 text-sm lg:text-base leading-relaxed font-medium">
                        <p>Lycan International</p>
                        <p>Nairobi, Kenya</p>
                        <p>info@kilolua.co.ke</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-4xl lg:text-5xl text-sand tracking-wide mb-3">PHONE</h3>
                      <div className="text-sand/90 text-sm lg:text-base leading-relaxed font-medium">
                        <p>+254</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none transform translate-y-[99%] z-0 pointer-events-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-20 fill-royal-red block">
                       <path d="M0,0 L1200,0 L1200,20 C900,100 600,0 300,80 C150,110 50,60 0,40 Z"></path>
                    </svg>
                  </div>
                </div>

                {/* <div className="px-8 md:px-16 lg:px-20 pt-16 lg:pt-24 pb-12 flex-1 flex flex-col justify-end z-10">
                  <h2 className="font-playfair text-[11vw] sm:text-6xl lg:text-[75px] xl:text-[90px] text-royal-navy leading-[0.85] tracking-wide uppercase distressed mb-8 lg:mb-12">
                    EVERY SUCCESS<br />BEGINS WITH A PLAN
                  </h2>
                  <div className="flex items-center gap-6 lg:gap-8">
                    <a href="#" className="text-royal-navy hover:text-royal-red transition-colors cursor-pointer"><Linkedin className="w-7 h-7 lg:w-9 lg:h-9" /></a>
                    <a href="#" className="text-royal-navy hover:text-royal-red transition-colors cursor-pointer"><Instagram className="w-7 h-7 lg:w-9 lg:h-9" /></a>
                    <a href="#" className="text-royal-navy hover:text-royal-red transition-colors flex items-center justify-center cursor-pointer">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-9 lg:h-9 fill-current" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-royal-navy hover:text-royal-red transition-colors cursor-pointer"><Facebook className="w-7 h-7 lg:w-9 lg:h-9" /></a>
                    <a href="#" className="text-royal-navy hover:text-royal-red transition-colors cursor-pointer"><Youtube className="w-7 h-7 lg:w-9 lg:h-9" /></a>
                  </div>
                </div> */}
              </div>

              <div className="w-full lg:w-1/2 flex flex-col px-8 md:px-16 lg:px-24 pt-8 lg:pt-32 pb-16 lg:pb-12 z-10">
                <div className="max-w-xl mx-auto lg:mx-0 w-full">
                  {/* <h3 className="font-playfair text-4xl lg:text-[50px] xl:text-[60px] text-royal-navy leading-[0.9] tracking-wide uppercase mb-8 lg:mb-12">
                    WHAT SERVICES WE CAN<br className="hidden lg:block"/> SUPPORT YOU WITH?
                  </h3> */}
                  
                  <form className="flex flex-col gap-6 lg:gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-transparent border-b border-royal-navy/40 py-3 lg:py-4 text-royal-navy placeholder:text-royal-navy/40 focus:outline-none focus:border-royal-red transition-colors text-base lg:text-lg"
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full bg-transparent border-b border-royal-navy/40 py-3 lg:py-4 text-royal-navy placeholder:text-royal-navy/40 focus:outline-none focus:border-royal-red transition-colors text-base lg:text-lg"
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full bg-transparent border-b border-royal-navy/40 py-3 lg:py-4 text-royal-navy placeholder:text-royal-navy/40 focus:outline-none focus:border-royal-red transition-colors text-base lg:text-lg"
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Message" 
                        className="w-full bg-transparent border-b border-royal-navy/40 py-3 lg:py-4 text-royal-navy placeholder:text-royal-navy/40 focus:outline-none focus:border-royal-red transition-colors text-base lg:text-lg"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3 mt-4">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="w-5 h-5 accent-royal-red border-royal-navy/40 cursor-pointer"
                      />
                      <label htmlFor="privacy" className="text-royal-navy/80 text-sm lg:text-base cursor-pointer font-medium select-none">
                        I agree to the Privacy Policy
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      className="mt-6 lg:mt-8 self-start bg-royal-red hover:bg-red-800 text-sand font-playfair text-2xl lg:text-3xl px-12 lg:px-14 py-4 lg:py-5 transition-colors tracking-wide cursor-pointer"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
