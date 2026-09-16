import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    
    const duration = 2500; // 2.5 seconds to load
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      // Restore scroll on unmount
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500); // slight pause at 100 before triggering exit
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const word = "KILOLUA";
  const letters = word.split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sand text-[#3b3b3b]"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            />
      {/* Main Waving Text */}
      <div className="flex overflow-visible relative">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="font-playfair text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight mx-[-1px] md:mx-[1px]"
            initial={{ y: 0 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-16 md:bottom-24 font-lora text-sm md:text-base tracking-widest opacity-80">
        {Math.floor(progress)} / 100
      </div>
    </motion.div>
  );
}
