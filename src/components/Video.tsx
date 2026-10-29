'use client';

import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Lock body scroll and allow Escape to close while the modal is open
  useEffect(() => {
    if (!isPlaying) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsPlaying(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isPlaying]);

  return (
    <section className="w-full relative h-[500px] md:h-[800px] flex justify-center items-center overflow-hidden bg-royal-navy">
      
      {/* 1. Base Cover Image (optimised and resized by next/image) */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        <Image
          src="/Coffee_plant_growing_in_highlands.jpeg"
          alt="Coffee plants growing in the Kenyan highlands"
          fill
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
      </motion.div>
      
      {/* 2. Base Play Button */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        onClick={() => setIsPlaying(true)}
        aria-label="Play the Kilolua video"
        className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/40 flex items-center justify-center group hover:bg-white/10 transition-colors backdrop-blur-sm"
      >
        <Play size={40} className="text-white ml-2 opacity-90 group-hover:opacity-100 transition-opacity" fill="#ba172a" />
      </motion.button>

      {/* 3. The Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Kilolua video"
            className="fixed inset-0 z-50 flex items-center justify-center bg-sand p-4 md:p-12"
            onClick={() => setIsPlaying(false)} // Clicking the sand background closes it
          >
            
            {/* Close Button (X) */}
            <button 
              onClick={() => setIsPlaying(false)}
              aria-label="Close video"
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-3 text-royal-navy hover:text-royal-red transition-colors bg-white/50 rounded-full backdrop-blur-md"
            >
              <X size={32} strokeWidth={2.5} />
            </button>

            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <video 
                src="/video.mp4" 
                poster="/video-poster.jpg"
                autoPlay 
                playsInline
                controls 
                className="w-full h-full object-contain outline-none" 
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}