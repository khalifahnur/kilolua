"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ProductionPage() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cardsData = [
    {
      year: "step1",
      title: t("production.steps.1_title"),
      text1: t("production.steps.1_text1"),
      text2: t("production.steps.1_text2"),
      img: "",
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
      img: "",
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
      img: "",
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
      img: "",
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
      img: "",
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
      img: "",
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
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
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
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
              }}
            ></div>
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

              <div className="absolute left-[5%] md:left-[12%] bottom-[15%] md:bottom-[20%] w-[80px] md:w-[160px] aspect-[4/5] -rotate-[12deg] shadow-2xl z-10 hover:rotate-[-8deg] transition-transform duration-500">
                <img
                  src={card.img}
                  alt={`Left ${card.year}`}
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <div className="relative z-20 w-[120px] md:w-[240px] aspect-[3/4] shadow-[0_25px_50px_rgba(0,0,0,0.6)] mb-[10vh] md:mb-[6vh]">
                <img
                  src={card.img}
                  alt={`Center ${card.year}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-[5%] md:right-[12%] bottom-[15%] md:bottom-[20%] w-[80px] md:w-[160px] aspect-[4/5] rotate-[12deg] shadow-2xl z-10 hover:rotate-[8deg] transition-transform duration-500">
                <img
                  src={card.img}
                  alt={`Right ${card.year}`}
                  className="w-full h-full object-cover object-right"
                />
              </div>
              
            </div>
            <div
              className={`relative flex-[0.9] w-full flex flex-col items-center text-center px-6 md:px-12 z-30 ${card.textClass} pb-8`}
            >
              <div className="max-w-2xl mx-auto">
                <h4 className="font-playfair font-bold text-xl md:text-lg mb-3 md:mb-4 tracking-wider uppercase">
                  {card.title}
                </h4>
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