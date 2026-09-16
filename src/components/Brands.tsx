import { motion, Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Brands() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      id="partner"
      className="relative w-full pt-20 pb-32 md:pt-32 md:pb-48 bg-royal-red text-sand overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="absolute top-[0px] left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[100px] lg:h-[140px]"
        >
          <defs>
            <pattern
              id="soil-pattern"
              patternUnits="userSpaceOnUse"
              width="1200"
              height="120"
            >
              <image
                href="/soil.png"
                x="0"
                y="0"
                width="1200"
                height="120"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#soil-pattern)"
          ></path>
        </svg>
      </div>
      <div className="wave-bottom-red z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#111a30"
          ></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="w-full mb-12 md:mb-16 flex flex-col items-center text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="font-caveat text-3xl md:text-4xl mb-2 text-royal-navy transform -rotate-2"
          >
            {t("landing.brands.subtitle")}
          </motion.h3>
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-5xl md:text-[80px] lg:text-[100px] leading-[0.9] tracking-wide uppercase text-sand drop-shadow-xl"
            dangerouslySetInnerHTML={{ __html: t("landing.brands.title") }}
          ></motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="w-full max-w-[900px] mx-auto border-t-[1.5px] border-sand/30"
        >
          <motion.a
            href="/#contact"
            onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.dispatchEvent(new Event("openContact"));
            }}
            variants={itemVariants}
            className="group relative flex items-center justify-between py-8 md:py-12 border-b-[1.5px] border-sand/30 hover:bg-white transition-all duration-500 px-6 md:px-10 overflow-hidden"
          >
            <div className="flex items-center relative z-10">
              <h3 className="font-playfair text-2xl md:text-4xl lg:text-5xl text-sand group-hover:text-royal-navy transition-colors duration-500 tracking-wide uppercase drop-shadow-sm group-hover:drop-shadow-none">
                {t("landing.brands.buyer")}
              </h3>
            </div>

            <ArrowRight
              className="w-6 h-6 md:w-10 md:h-10 text-sand group-hover:text-royal-red transition-transform duration-500 group-hover:translate-x-3 shrink-0 relative z-10"
              strokeWidth={1.5}
            />
          </motion.a>
          <motion.a
            href="/#contact"
            onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.dispatchEvent(new Event("openContact"));
            }}
            variants={itemVariants}
            className="group relative flex items-center justify-between py-8 md:py-12 border-b-[1.5px] border-sand/30 hover:bg-white transition-all duration-500 px-6 md:px-10 overflow-hidden"
          >
            <div className="flex items-center relative z-10">
              <h3 className="font-playfair text-2xl md:text-4xl lg:text-5xl text-sand group-hover:text-royal-navy transition-colors duration-500 tracking-wide uppercase drop-shadow-sm group-hover:drop-shadow-none">
                {t("landing.brands.farmer")}
              </h3>
            </div>

            <ArrowRight
              className="w-6 h-6 md:w-10 md:h-10 text-sand group-hover:text-royal-red transition-transform duration-500 group-hover:translate-x-3 shrink-0 relative z-10"
              strokeWidth={1.5}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
