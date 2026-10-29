"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ProductionScreen() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cardsData = [
    {
      year: "step1",
      title: t("production.steps.1_title"),
      text1: t("production.steps.1_text1"),
      text2: t("production.steps.1_text2"),
      bgClass: "bg-sand",
      hexColor: "#e4decb",
      textClass: "text-royal-navy",
      accentClass: "text-royal-navy",
    },
    {
      year: "step2",
      title: t("production.steps.2_title"),
      text1: t("production.steps.2_text1"),
      text2: t("production.steps.2_text2"),
      bgClass: "bg-royal-navy",
      hexColor: "#0A1B3F",
      textClass: "text-sand",
      accentClass: "text-sand",
    },
    {
      year: "step3",
      title: t("production.steps.3_title"),
      text1: t("production.steps.3_text1"),
      text2: t("production.steps.3_text2"),
      bgClass: "bg-royal-red",
      hexColor: "#A31621",
      textClass: "text-sand",
      accentClass: "text-sand",
    },
    {
      year: "step4",
      title: t("production.steps.4_title"),
      text1: t("production.steps.4_text1"),
      text2: t("production.steps.4_text2"),
      bgClass: "bg-sand",
      hexColor: "#e4decb",
      textClass: "text-royal-navy",
      accentClass: "text-royal-navy",
    },
    {
      year: "step5",
      title: t("production.steps.5_title"),
      text1: t("production.steps.5_text1"),
      text2: t("production.steps.5_text2"),
      bgClass: "bg-royal-navy",
      hexColor: "#0A1B3F",
      textClass: "text-sand",
      accentClass: "text-sand",
    },
    {
      year: "step6",
      title: t("production.steps.6_title"),
      text1: t("production.steps.6_text1"),
      text2: t("production.steps.6_text2"),
      bgClass: "bg-royal-red",
      hexColor: "#A31621",
      textClass: "text-sand",
      accentClass: "text-sand",
      finalMsg: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0 || !containerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.set(cards, { clearProps: "transform" }); 
      
      gsap.set(cards.slice(1), { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        tl.to(card, {
          yPercent: 0,
          y: index * 15,
          ease: "none",
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-sand text-royal-navy overflow-x-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full pt-40 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto text-center"
      >
        <h1
          className="font-playfair text-6xl md:text-[100px] leading-[0.85] tracking-wide text-royal-navy distressed uppercase"
          dangerouslySetInnerHTML={{ __html: t("production.hero_title") }}
        ></h1>
        <p className="mt-8 font-lora font-medium max-w-2xl mx-auto text-lg opacity-80">
          {t("production.hero_desc")}
        </p>
      </motion.section>

      <div
        ref={containerRef}
        className="relative w-full h-[100dvh] overflow-hidden bg-sand"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center ${card.bgClass} overflow-hidden ${
              index > 0
                ? "rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-15px_40px_rgba(0,0,0,0.4)]"
                : ""
            }`}
            style={{
              zIndex: index + 1,
              backgroundColor: card.hexColor,
            }}
          >
            <div className="noise-overlay" aria-hidden="true" />
            <div className="relative flex-[1.1] w-full max-w-[1200px] flex justify-center items-end pb-[4vh] md:pb-[2vh] mt-2 md:mt-6">
              
<svg
  className="absolute bottom-0 left-0 w-full h-[60%] md:h-[80%] opacity-40 pointer-events-none z-0"
  viewBox="0 0 1000 200"
  preserveAspectRatio="none"
>
  <path
    d="M-10,200 Q500,-50 1010,200"
    fill="none"
    stroke="currentColor"
    strokeWidth="3" 
    vectorEffect="non-scaling-stroke"
    className={card.accentClass}
  />
</svg>

              <div className={`relative z-20 flex flex-col items-center justify-end mb-[6vh] md:mb-[4vh] select-none ${card.textClass}`} aria-hidden="true">
                <span className="font-caveat text-3xl md:text-5xl opacity-90 mb-2">
                  {t(`production.steps.${index + 1}_step`).split("—")[1]?.trim()}
                </span>
                <span className="font-playfair font-bold leading-[0.8] text-[34vw] md:text-[18rem] opacity-25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div
              className={`relative flex-[0.9] w-full flex flex-col items-center text-center px-6 md:px-12 z-30 ${card.textClass} pb-8`}
            >
              <div className="max-w-2xl mx-auto">
                <h2 className="font-playfair font-bold text-xl md:text-lg mb-3 md:mb-4 tracking-wider uppercase">
                  {card.title}
                </h2>
                <p className="font-lora text-sm md:text-lg opacity-90 leading-relaxed ">
                  {card.text1}
                </p>
                {card.text2 && (
                  <p className="font-lora text-sm md:text-lg opacity-90 mt-3 leading-relaxed ">
                    {card.text2}
                  </p>
                )}

                {card.finalMsg && (
                  <div className="mt-8 pt-8 border-t border-current/20">
                    <p className="font-playfair text-lg md:text-xl font-bold uppercase tracking-widest">
                      {t("production.cta_title")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}