import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "FARM",
    desc: "Coffee begins with the farmers and communities who cultivate it.",
    img: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "COOPERATIVE",
    desc: "We build direct relationships with cooperatives and grower groups at origin.",
    img: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "LOT",
    desc: "Each lot carries its own identity, quality profile, processing method and origin story.",
    img: "https://images.unsplash.com/photo-1628189871790-a7d0e4e5e40e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "EXPORT",
    desc: "Documentation, logistics and customs are managed with transparency from Kenya to destination.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a56?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "ROASTERY",
    desc: "The journey ends with specialty roasters who know where their coffee came from.",
    img: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TraceabilityScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  useGSAP(
    () => {
      const listItems = gsap.utils.toArray<HTMLLIElement>(".step-item");
      const slides = gsap.utils.toArray<HTMLDivElement>(".slide-img");
      const fill = document.querySelector(".progress-fill");

      if (!listItems.length || !slides.length || !fill) return;

      const scrollDistance = listItems.length * 80;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: `+=${scrollDistance}%`,
          pin: true,
          scrub: 1,
        },
      });

      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left",
      });

      listItems.forEach((item, i) => {
        const title = item.querySelector(".step-title");
        const number = item.querySelector(".step-number");
        const descWrapper = item.querySelector(".step-desc-wrapper");

        const previousItem = listItems[i - 1];
        const previousTitle = previousItem?.querySelector(".step-title");
        const previousNumber = previousItem?.querySelector(".step-number");
        const previousDescWrapper =
          previousItem?.querySelector(".step-desc-wrapper");

        const startTime = i;
        const transitionDuration = 0.5;

        if (previousItem) {
          tl.to(
            title,
            { color: "#ba172a", duration: transitionDuration },
            startTime,
          )
            .to(
              number,
              { color: "#ba172a", duration: transitionDuration },
              startTime,
            )
            .to(
              descWrapper,
              {
                height: "auto",
                opacity: 1,
                marginTop: 12,
                duration: transitionDuration,
              },
              startTime,
            )
            .to(
              slides[i],
              {
                autoAlpha: 1,
                scale: 1,
                duration: transitionDuration,
                ease: "power2.out",
              },
              startTime,
            )

            .to(
              previousTitle,
              { color: "rgba(17, 26, 48, 0.3)", duration: transitionDuration },
              startTime,
            )
            .to(
              previousNumber,
              { color: "rgba(17, 26, 48, 0.3)", duration: transitionDuration },
              startTime,
            )
            .to(
              previousDescWrapper,
              {
                height: 0,
                opacity: 0,
                marginTop: 0,
                duration: transitionDuration,
              },
              startTime,
            )
            .to(
              slides[i - 1],
              {
                autoAlpha: 0,
                scale: 0.95,
                duration: transitionDuration,
                ease: "power2.out",
              },
              startTime,
            );
        } else {
          gsap.set(title, { color: "#ba172a" });
          gsap.set(number, { color: "#ba172a" });
          gsap.set(descWrapper, { height: "auto", opacity: 1, marginTop: 12 });
          gsap.set(slides[i], { autoAlpha: 1, scale: 1 });

          listItems.slice(1).forEach((otherItem) => {
            gsap.set(otherItem.querySelector(".step-title"), {
              color: "rgba(17, 26, 48, 0.3)",
            });
            gsap.set(otherItem.querySelector(".step-number"), {
              color: "rgba(17, 26, 48, 0.3)",
            });
            gsap.set(otherItem.querySelector(".step-desc-wrapper"), {
              height: 0,
              opacity: 0,
              marginTop: 0,
            });
          });

          slides.slice(1).forEach((slide) => {
            gsap.set(slide, { autoAlpha: 0, scale: 1.05 });
          });
        }
      });

      tl.to(
        fill,
        {
          scaleY: 1,
          ease: "none",
          duration: tl.duration(),
        },
        0,
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full relative bg-sand pt-12 pb-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <section className="text-center max-w-3xl mx-auto px-6 mb-12 md:mb-16 bg-sand">
        {/* <h2 
                  className="font-playfair text-xl md:text-3xl lg:text-6xl text-royal-navy leading-[0.9] mb-8 distressed tracking-wide uppercase"
                  dangerouslySetInnerHTML={{ __html: t('traceability.featured_title') }}
                >
                </h2> */}
        <p className="text-royal-navy/90 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          {t("traceability.featured_desc")}
        </p>
      </section>
      <section className="pin-section w-full h-screen min-h-[600px] flex justify-center items-center overflow-hidden relative z-20 bg-sand">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row px-6 md:px-12 relative h-full py-12 md:py-24">
          <div className="hidden md:block absolute left-12 top-[20%] bottom-[20%] w-[2px] bg-royal-navy/10 rounded-full overflow-hidden">
            <div className="progress-fill absolute top-0 left-0 w-full h-full bg-royal-red rounded-full"></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center h-full z-10 relative pl-0 md:pl-16">
            <div className="md:hidden absolute left-0 top-[20%] bottom-[20%] w-[2px] bg-royal-navy/10 rounded-full overflow-hidden">
              <div className="progress-fill absolute top-0 left-0 w-full h-full bg-royal-red rounded-full"></div>
            </div>

            <ul className="list m-0 p-0 list-none flex flex-col justify-center gap-6 md:gap-10 relative z-10 ml-6 md:ml-0">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="step-item flex flex-col cursor-default"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="step-number font-caveat text-2xl md:text-3xl lg:text-4xl text-royal-navy/30 tracking-wider w-8 md:w-10 text-right shrink-0">
                      {`0${index + 1}`}
                    </span>
                    <h3 className="step-title font-playfair font-bold text-3xl md:text-4xl lg:text-5xl m-0 tracking-wide uppercase text-royal-navy/30">
                      {step.title}
                    </h3>
                  </div>

                  <div className="step-desc-wrapper h-0 opacity-0 overflow-hidden ml-12 md:ml-16">
                    <p className="font-lora font-medium text-sm md:text-[17px] leading-relaxed text-royal-navy/80 max-w-sm m-0">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 relative h-[45vh] md:h-full mt-12 md:mt-0 flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl border border-royal-navy/5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="slide-img absolute inset-0 opacity-0 invisible origin-center"
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
