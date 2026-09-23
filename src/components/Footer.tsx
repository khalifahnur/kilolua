import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Parallax effect: moves from -50% (higher up, hidden behind pre-footer) to 0% (fully revealed)
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navLinks = [
    { name: t("nav.home"), key: "HOME" },
    { name: t("nav.about"), key: "ABOUT" },
    { name: t("nav.production"), key: "PRODUCTION" },
    { name: t("nav.traceability"), key: "TRACEABILITY" },
    { name: t("nav.our_coffee"), key: "OUR COFFEE" },
    { name: t("nav.our_team"), key: "OUR TEAM" },
    { name: t("nav.get_in_touch"), key: "GET IN TOUCH" },
  ];

  return (
    <>
      <div className="relative z-20 w-full bg-royal-navy pt-20 pb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between w-full h-full px-6 md:px-12 relative z-10">
          <div className="mb-20 md:mb-0">
            <div className="flex items-center gap-2 group cursor-pointer relative text-sand">
              <Link
                href="/"
                className="flex flex-col items-center relative group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={"/logo.png"}
                    width={100}
                    height={100}
                    alt="kilolua logo"
                  />
                </div>
              </Link>
            </div>
          </div>

          <motion.nav
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerVariants}
            className="flex flex-col gap-4 md:gap-6 items-start md:pr-[25%]"
          >
            {navLinks.map((link) => (
              <motion.a
                variants={itemVariants}
                key={link.key}
                href={
                  link.key === "HOME"
                    ? "/"
                    : link.key === "PRODUCTION"
                      ? "/production"
                      : link.key === "TRACEABILITY"
                        ? "/traceability"
                        : link.key === "ABOUT"
                          ? "/about"
                          : `#${link.key.toLowerCase().replace(/ /g, "-")}`
                }
                className="font-playfair text-[40px] md:text-[65px] tracking-wide text-sand hover:text-royal-red transition-colors leading-[0.9] uppercase"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </div>

      <div
        ref={footerRef}
        className="relative z-10 w-full overflow-hidden bg-sand text-royal-navy min-h-[100svh] flex flex-col"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>

        <motion.div
          style={{ y }}
          className="w-full pt-16 max-w-[1600px] mx-auto flex flex-col justify-end min-h-[100svh] pb-8 px-6 md:px-12 flex-1"
        >
          <div className="w-full overflow-hidden mt-auto pt-20 pb-4">
            <h1 className="font-playfair font-bold text-[#1e1e1e] text-[10vw] sm:text-[10vw] md:text-[12vw] leading-[0.75] select-none w-full align-center text-center uppercase">
              K I L O L U A
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mt-8 mb-12">
            <div className="flex flex-wrap gap-6 md:gap-10 font-lora text-xs font-bold opacity-80">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("openContact"));
                }}
                className="hover:text-royal-red transition-colors uppercase"
              >
                {t("footer.contact")}
              </a>
              <a
                href="#privacy"
                className="hover:text-royal-red transition-colors uppercase"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#terms"
                className="hover:text-royal-red transition-colors uppercase"
              >
                {t("footer.terms")}
              </a>
            </div>

            <div className="font-lora text-xs opacity-70 font-medium">
              {t("footer.rights")}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
