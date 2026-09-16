import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[75svh] min-h-[500px] lg:h-screen lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-sand">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <svg className="w-0 h-0 absolute pointer-events-none">
        <filter id="distress-filter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.1"
            numOctaves="3"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -4"
            result="scratches"
          />
          <feFlood floodColor="#ffffff" floodOpacity="0.8" result="white" />
          <feComposite
            in="white"
            in2="scratches"
            operator="in"
            result="whiteScratches"
          />
          <feComposite
            in="whiteScratches"
            in2="SourceGraphic"
            operator="over"
          />
        </filter>
      </svg>

      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full pointer-events-none z-0 px-4">
        <div className="flex flex-col items-center justify-center font-playfair text-royal-red font-bold text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[9vw] xl:text-[9vw] leading-[0.85] tracking-tight distressed select-none w-full text-center mix-blend-multiply mt-25 md:mt-16">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-0 relative whitespace-nowrap"
          >
            {t("landing.hero.line1")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="z-0 relative mt-2 md:mt-3"
          >
            <span className="whitespace-nowrap">
              {t("landing.hero.line2").split(" ")[0]}{" "}
              {t("landing.hero.line2").split(" ")[1]}
            </span>{" "}
            <br className="md:hidden" />
            <span className="whitespace-nowrap">
              {t("landing.hero.line2").split(" ").slice(2).join(" ")}
            </span>
          </motion.span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] h-full flex justify-between items-center px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="absolute left-[5%] md:left-[8%] lg:left-[12%] top-[35%] md:top-[45%] w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44  flex items-center justify-center z-20 mix-blend-multiply"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute right-[5%] md:right-[8%] lg:right-[10%] top-[35%] md:top-[20%] max-w-[140px] md:max-w-[200px] lg:max-w-[220px] z-20"
        >
          <p
            className="text-royal-navy font-medium text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("landing.hero.desc") }}
          ></p>
        </motion.div>
      </div>
    </section>
  );
}
