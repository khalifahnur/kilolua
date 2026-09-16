import { CoffeeProfile } from '../../data/coffeeProfiles';
import { motion, Variants } from 'motion/react';

export default function CoffeeHtmlOverlay({ profile }: { profile: CoffeeProfile }) {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const tableVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative z-10 w-full pointer-events-none">
      <div className="pointer-events-auto">
        {/* Global Noise Texture */}
        <div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] z-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

        {/* HERO */}
        <section className="section trigger-hero h-screen flex flex-col justify-center items-center text-center p-8 bg-sand">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center -mt-20"
          >
            <h1 className="font-playfair text-[15vw] md:text-[18vw] leading-[0.8] text-royal-navy tracking-tight uppercase">ROYAL</h1>
            <h1 className="font-playfair text-[15vw] md:text-[18vw] leading-[0.8] text-royal-navy tracking-tight uppercase">CROW COLA</h1>
          </motion.div>
        </section>

        {/* INFO SECTION */}
        <section className="section trigger-info min-h-screen flex items-center justify-center p-8 md:p-16 bg-sand overflow-hidden">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col items-start justify-center text-left"
            >
              <motion.p variants={textVariant} className="font-caveat text-3xl md:text-4xl text-royal-navy mb-2">Product</motion.p>
              <motion.h2 variants={textVariant} className="font-playfair text-6xl md:text-8xl text-royal-navy mb-6">RC COLA</motion.h2>
              <motion.p variants={textVariant} className="font-lora font-medium text-lg text-royal-navy/80 leading-relaxed max-w-sm">
                A non-alcoholic refreshing drink, RC Cola was first introduced in the USA in 1905. Known for its unique natural cola flavor, it is exclusively produced in Kosovo by "Royal Beverage." Best served cold. Shelf life: 6 months for 0.33L and 0.5L bottles, and 7 months for 1L, 1.5L, and 2L bottles.
              </motion.p>
            </motion.div>
            
            {/* Middle (Empty space for Can) */}
            <div className="hidden md:block"></div>

            {/* Right Table */}
            <div className="flex flex-col items-end justify-center w-full">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, margin: "-100px" }}
                 variants={tableVariant}
                 className="border-[4px] border-royal-navy p-6 md:p-10 w-full md:w-[120%] -ml-0 md:-ml-[20%] text-royal-navy font-playfair bg-sand/50 backdrop-blur-sm"
               >
                 <div className="flex justify-between items-end mb-6">
                   <span className="text-4xl md:text-5xl leading-none">NUTRITIONAL<br/>VALUES</span>
                   <span className="text-right text-2xl md:text-3xl leading-none">FOR<br/>100ML</span>
                 </div>
                 <div className="border-t-[3px] border-royal-navy py-3 flex justify-between text-xl md:text-2xl">
                   <span>ENERGY VALUE</span><span>40KCAL</span>
                 </div>
                 <div className="border-t-[3px] border-royal-navy py-3 flex justify-between text-xl md:text-2xl">
                   <span>TOTAL FAT</span><span>0G</span>
                 </div>
                 <div className="border-t-[3px] border-royal-navy py-3 flex justify-between text-xl md:text-2xl">
                   <span>CARBOHYDRATES</span><span>10G</span>
                 </div>
                 <div className="border-t-[3px] border-royal-navy py-3 flex justify-between text-xl md:text-2xl">
                   <span>PROTEIN</span><span>0G</span>
                 </div>
                 <div className="border-t-[3px] border-royal-navy py-3 flex justify-between text-xl md:text-2xl">
                   <span>SALT</span><span>0.1G</span>
                 </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* BOTTLES SECTION */}
        <section className="section trigger-bottles min-h-[150vh] relative bg-royal-navy text-sand pt-40 overflow-hidden">
          {/* Wavy top divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-10">
            <svg className="relative block w-full h-[150px] md:h-[200px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.27,15.71,154.51,26.5,223.39,40.75Z" className="fill-royal-navy"></path>
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-30">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={textVariant} className="font-caveat text-3xl md:text-4xl text-sand mb-2">Find your perfect size</motion.p>
              <motion.h2 variants={textVariant} className="font-playfair text-6xl md:text-[100px] text-white mb-24 tracking-wide">RC COLA BOTTLES</motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pb-40">
                {/* Left Bottle */}
                <motion.div variants={textVariant} className="flex flex-col items-center justify-start">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-sand mb-8 relative flex items-center justify-center">
                     {/* Placeholder for the left plastic bottle */}
                     <div className="w-16 h-[120%] bg-royal-navy/20 absolute bottom-8 rounded-full blur-md"></div>
                     <div className="font-playfair text-royal-navy/50 text-2xl absolute">IMG</div>
                  </div>
                  <h3 className="font-playfair text-5xl text-white">RC COLA</h3>
                  <p className="font-playfair text-3xl text-sand/70">0.5L</p>
                </motion.div>
                
                {/* Center (Empty for 3D Can) */}
                <div className="flex flex-col items-center justify-start">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-sand mb-8 relative"></div>
                  <h3 className="font-playfair text-5xl text-white">RC COLA</h3>
                  <p className="font-playfair text-3xl text-sand/70">0.33L</p>
                </div>

                {/* Right Bottle */}
                <motion.div variants={textVariant} className="flex flex-col items-center justify-start">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-sand mb-8 relative flex items-center justify-center">
                     {/* Placeholder for the right plastic bottle */}
                     <div className="w-16 h-[120%] bg-royal-navy/20 absolute bottom-8 rounded-full blur-md"></div>
                     <div className="font-playfair text-royal-navy/50 text-2xl absolute">IMG</div>
                  </div>
                  <h3 className="font-playfair text-5xl text-white">RC COLA</h3>
                  <p className="font-playfair text-3xl text-sand/70">0.5L</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
