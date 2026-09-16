import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { coffeeProfiles } from '../data/coffeeProfiles';


export default function CoffeeShowcase({ t, itemVariants, scaleVariants }) {
  const profilesArray = Object.values(coffeeProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCoffee = profilesArray[currentIndex];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profilesArray.length);
  };

  return (
    <div className="relative w-full max-w-[1000px] mt-24 md:mt-16 flex flex-col md:flex-row justify-between items-center min-h-[600px]">

      <div className="md:absolute left-0 top-[20%] z-30 flex flex-col items-start mb-12 md:mb-0 bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-xl md:w-1/2">
        <motion.p variants={itemVariants} className="font-caveat text-3xl mb-2 text-royal-red">
          {currentCoffee.subtitle}
        </motion.p>
        
        <motion.h4 variants={itemVariants} className="font-playfair text-5xl md:text-6xl mb-4 tracking-wide uppercase text-gray-900">
          {currentCoffee.name}
        </motion.h4>
        
        <motion.p variants={itemVariants} className="font-lora text-lg text-gray-700 mb-8 max-w-md">
          {currentCoffee.description}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Link 
            href={`/coffee/${currentCoffee.slug}`} 
            className="bg-royal-red text-white font-playfair text-xl tracking-widest px-8 py-3 hover:bg-red-800 transition-colors shadow-lg text-center uppercase"
          >
            {t('landing.products.btn') || 'Discover'}
          </Link>
          
          <button 
            onClick={handleNext}
            className="bg-gray-900 text-white font-playfair text-xl tracking-widest px-8 py-3 hover:bg-gray-700 transition-colors shadow-lg uppercase flex items-center justify-center gap-2"
          >
            Next <span className="text-2xl leading-none">➔</span>
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-center items-center w-full md:w-1/2 md:ml-auto">
        <motion.div 
          key={currentCoffee.slug} 
          variants={scaleVariants} 
          initial="hidden"
          animate="visible"
          className="relative w-[280px] md:w-[350px] h-[400px] md:h-[500px] rounded-[20px] shadow-[20px_40px_50px_rgba(0,0,0,0.3)] z-20 flex flex-col overflow-hidden border-4 border-white bg-gray-100"
        >
          <img 
            src={currentCoffee.assets.cup || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600&auto=format&fit=crop"} 
            alt={currentCoffee.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12">
             <p className="font-playfair text-[12px] text-white tracking-widest uppercase mb-2">
               Origin: {currentCoffee.origin} • {currentCoffee.regions[0]}
             </p>
             
             <div className="flex flex-wrap gap-2 mt-2">
               {currentCoffee.cupProfile.map((note, idx) => (
                 <span key={idx} className="font-lora text-[11px] text-white font-bold tracking-wider bg-white/20 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/30">
                   {note}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="absolute left-[30%] md:left-[50%] top-[10%] w-[300px] md:w-[450px] z-10 pointer-events-none drop-shadow-2xl opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1527960471264-932f22e36125?q=80&w=600&auto=format&fit=crop" 
            alt="Splash Effect" 
            className="w-full h-auto object-contain mix-blend-multiply"
            style={{ clipPath: 'circle(50% at 50% 50%)' }}
          />
        </motion.div>
      </div>
    
    </div>
  );
}