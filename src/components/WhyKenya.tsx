'use client';

import { motion, Variants } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Leaf, Sprout, Box } from 'lucide-react';

export default function WhyKenya() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="whykenya" className="relative w-full min-h-[1600px] font-sans text-white overflow-hidden flex flex-col selection:bg-white/20  ">
    
      <div 
        className="absolute top-0 left-0 w-full h-[40%] bg-cover bg-center pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/land.png')",
          clipPath: "ellipse(180% 100% at 50% 0%)" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-[60%] bg-cover bg-top pointer-events-none z-0"
        style={{ backgroundImage: "url('/soil.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-32 flex flex-col h-full">

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full mt-12 md:mt-24"
        >
          <motion.div 
            variants={itemVariants}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h4 className="font-sans font-medium text-lg md:text-xl text-white/90 mb-10 tracking-wide">
              {t('landing.why_kenya.higher_title')}
            </h4>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative w-48 h-24 flex justify-center">
                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">

                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 10 50 A 40 40 0 0 1 70 15" fill="none" stroke="#2ECC71" strokeWidth="6" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(46,204,113,0.6)]" />
                  {/* Ticks */}
                  <text x="5" y="55" fontSize="4" fill="rgba(255,255,255,0.5)">3</text>
                  <text x="92" y="55" fontSize="4" fill="rgba(255,255,255,0.5)">10</text>
                </svg>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-4xl font-light text-white leading-none">6.5</div>
                  <div className="text-[10px] text-[#2ECC71] font-bold tracking-widest mt-1 uppercase">Good</div>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {t('landing.why_kenya.higher_p1')}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1.5 rounded-full w-fit border border-[#2ECC71]/20">
                  <span className="w-2 h-2 rounded-full bg-[#2ECC71]"></span>
                  +1.5 pts since 2021
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h4 className="font-sans font-medium text-lg md:text-xl text-white/90 mb-10 tracking-wide">
              {t('landing.why_kenya.legacy_title')}
            </h4>

            <div className="flex flex-col md:flex-row items-end gap-8 h-32">
              <div className="flex-shrink-0 mb-2 md:mb-0">
                <div className="text-5xl font-light text-white leading-none">74<span className="text-2xl text-white/50">%</span></div>
                <div className="text-xs text-white/50 mt-2 font-light">{t('landing.why_kenya.legacy_desc')}</div>
              </div>
              
              <div className="flex-1 w-full flex items-end justify-between gap-1 h-full pb-4 border-b border-white/10">
                <div className="w-full flex flex-col items-center gap-2 group/bar">
                  <div className="text-[10px] text-white/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">3</div>
                  <div className="w-full bg-[#E74C3C] h-[10%] rounded-t-sm relative"></div>
                  <div className="text-[9px] text-white/40 mt-1">Critical</div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 group/bar">
                  <div className="text-[10px] text-white/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">9</div>
                  <div className="w-full bg-[#E67E22] h-[25%] rounded-t-sm relative"></div>
                  <div className="text-[9px] text-white/40 mt-1">Degraded</div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 group/bar">
                  <div className="text-[10px] text-white/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">15</div>
                  <div className="w-full bg-[#F1C40F] h-[40%] rounded-t-sm relative"></div>
                  <div className="text-[9px] text-white/40 mt-1">Fair</div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 group/bar">
                  <div className="text-[10px] text-white/90">51</div>
                  <div className="w-full bg-[#2ECC71] h-[90%] rounded-t-sm relative shadow-[0_0_15px_rgba(46,204,113,0.3)]"></div>
                  <div className="text-[9px] text-white/90 mt-1">Good</div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 group/bar">
                  <div className="text-[10px] text-white/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">23</div>
                  <div className="w-full bg-[#1ABC9C] h-[35%] rounded-t-sm relative"></div>
                  <div className="text-[9px] text-white/40 mt-1">Optimal</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* --- BOTTOM SECTION (SOIL: METRICS & STACKED CARDS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 w-full mt-40 md:mt-64 relative">
          
          {/* Global SVG Connecting Lines (Visible only on desktop) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" style={{ transform: 'translate(30%, 15%)' }}>
            {/* Top connection */}
            <path d="M 0 0 L 150 0 L 150 -50 L 300 -50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <circle cx="300" cy="-50" r="2" fill="rgba(255,255,255,0.6)" />
            
            {/* Middle connection */}
            <path d="M -50 150 L 250 150 L 250 100 L 350 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx="-50" cy="150" r="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            
            {/* Bottom connection */}
            <path d="M -20 350 L 100 350 L 100 400 L 250 400" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 6" />
            <rect x="-23" y="347" width="6" height="6" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </svg>

          {/* Left Soil Column: Typography & Core Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col text-white max-w-xl relative z-10"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-[1.1] mb-12 tracking-tight">
              {/* Assumes format: "Business at risk. It is time to act." */}
              {t('landing.why_kenya.forward_title').split('.').map((sentence, i, arr) => (
                <span key={i} className="block">{sentence}{i < arr.length - 1 ? '.' : ''}</span>
              ))}
            </motion.h2>

            {/* Circular Icons Row */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-12">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Sprout className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Huge Metrics Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <div className="text-5xl md:text-6xl font-light mb-4 text-white drop-shadow-md">
                  +50<span className="text-3xl">%</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed pr-4 font-light">
                  {t('landing.why_kenya.forward_p1')}
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-light mb-4 text-white drop-shadow-md">
                  +60<span className="text-3xl">%</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed pr-4 font-light">
                  {t('landing.why_kenya.forward_p2')}
                </p>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              {t('landing.why_kenya.bright_title')}
            </motion.p>
          </motion.div>

          {/* Right Soil Column: Stacked Floating Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 md:gap-8 justify-center w-full lg:pl-12 relative z-10"
          >
            {/* Card 1: Water (Updated to use actual image) */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl flex items-center gap-6 w-full max-w-md ml-auto hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                <img src="/water-drop.png" alt="Water retention" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-white/60 mb-1 font-light">{t('landing.why_kenya.card1_title')}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-light">246</span>
                  <span className="text-xs text-white/40">m³/ha</span>
                </div>
                {/* Thin progress line */}
                <div className="w-full h-[2px] bg-white/10 mt-3 relative rounded-full">
                  <div className="absolute top-0 left-0 h-full w-[60%] bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Biodiversity / Minerals (Updated to use actual image) */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl flex items-center gap-6 w-full max-w-md ml-auto md:-ml-12 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                <img src="/minerals.png" alt="Biodiversity" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-white/60 mb-1 font-light">{t('landing.why_kenya.card2_title')}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-light">11</span>
                  <span className="text-xs text-white/40">kg/ha</span>
                </div>
                <div className="w-full h-[2px] bg-white/10 mt-3 relative rounded-full">
                  <div className="absolute top-0 left-0 h-full w-[45%] bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Carbon Stock (Left as Box Icon since no image was provided for this) */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl flex items-center gap-6 w-full max-w-md ml-auto mt-12 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 shrink-0 bg-[#2c2c2c] rounded-lg drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center overflow-hidden relative">
                <Box className="w-10 h-10 text-white/40" strokeWidth={1} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-white/60 mb-1 font-light">Carbon stock</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-light">260</span>
                  <span className="text-xs text-white/40">t/ha of equivalent CO2</span>
                </div>
                <div className="w-full h-[2px] bg-white/10 mt-3 relative rounded-full">
                  <div className="absolute top-0 left-0 h-full w-[85%] bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}