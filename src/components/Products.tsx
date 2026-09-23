import React, { useState } from "react";
import { motion, Variants } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import { coffeeProfiles } from "../data/coffeeProfiles";

const CoffeeModel = dynamic(() => import("./CoffeeModel"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-white/50">
      Loading 3D...
    </div>
  ),
});

export default function Products() {
  const { t } = useTranslation();
  const profilesArray = Object.values(coffeeProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCoffee = profilesArray[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % profilesArray.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + profilesArray.length) % profilesArray.length,
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="products"
      className="relative w-full pt-10 pb-32 md:pt-20 md:pb-20 bg-royal-red text-sand overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="wave-top-red">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#e4decb"
          ></path>
        </svg>
      </div>

      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="absolute w-[20%] h-[20%] rounded-full border border-white"></div>
        <div className="absolute w-[40%] h-[40%] rounded-full border border-white"></div>
        <div className="absolute w-[60%] h-[60%] rounded-full border border-white"></div>
        <div className="absolute w-[80%] h-[80%] rounded-full border border-white"></div>
        <div className="absolute w-[100%] h-[100%] rounded-full border border-white"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="w-full max-w-[1400px] px-6 md:px-12 mx-auto relative z-10 flex flex-col items-center"
      >
        <div className="w-full flex justify-between items-start relative z-20">
          <div>
            <motion.h3
              variants={itemVariants}
              className="font-caveat text-4xl md:text-5xl mb-2 transform -rotate-3 ml-2"
            >
              {t("landing.products.subtitle")}
            </motion.h3>
            <motion.h2
              variants={itemVariants}
              className="font-playfair text-7xl md:text-[100px] font-bold leading-[0.85] tracking-wide"
            >
              {t("landing.products.title")}
            </motion.h2>
          </div>

          <motion.div
            variants={itemVariants}
            className="font-playfair text-7xl md:text-[90px] flex items-baseline opacity-90 tracking-wider"
          >
            <span>{currentIndex + 1}</span>
            <span className="text-4xl md:text-6xl opacity-50">
              /{profilesArray.length}
            </span>
          </motion.div>
        </div>

        <div className="relative w-full max-w-[1000px] mt-24 md:mt-16 flex flex-col md:flex-row justify-center items-center">
          <motion.div
            key={`text-${currentCoffee.slug}`}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="md:absolute left-0 top-[30%] z-30 flex flex-col items-start mb-12 md:mb-0 bg-royal-red/0 backdrop-blur-none p-4 md:p-0"
          ></motion.div>

          <div className="relative z-10 flex justify-center items-center">
            <motion.div
              key={`can-${currentCoffee.slug}`}
              initial="hidden"
              animate="visible"
              variants={scaleVariants}
              className="relative w-[140px] md:w-[200px] h-[380px] md:h-[450px] rounded-[20px] md:rounded-[30px]"
            >
              <div className="flex-1 w-full h-full flex flex-col items-center justify-start mt-12">
                {/* 1. Text is placed normally at the top */}
                <span className="font-caveat font-bold text-[70px] md:text-[100px] text-white -rotate-12 leading-none drop-shadow-md px-2 text-center mb-4">
                  {currentCoffee.name}
                </span>

                {/* 2. 3D model sits below the text, taking up the remaining space */}
                <div className="w-full flex-1 min-h-[250px] relative z-10 cursor-grab active:cursor-grabbing">
                  <CoffeeModel />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute left-[50%] top-[10%] w-[250px] md:w-[400px] z-30 pointer-events-none drop-shadow-2xl"
            ></motion.div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex gap-10 mt-20 z-20 cursor-pointer"
        >
          <button
            onClick={handlePrev}
            className="text-white hover:text-gray-200 transition-transform hover:-translate-x-2"
          >
            <ArrowLeft size={56} strokeWidth={1} />
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-gray-200 transition-transform hover:translate-x-2"
          >
            <ArrowRight size={56} strokeWidth={1} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
