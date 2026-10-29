import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    
    const duration = 1400;
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
        onCompleteRef.current();
      }, 250); // slight pause at 100 before triggering exit
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const word = "KILOLUA";
  const letters = word.split("");

  return (
    <motion.div
      className="preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sand text-[#3b3b3b]"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="noise-overlay" aria-hidden="true" />
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
