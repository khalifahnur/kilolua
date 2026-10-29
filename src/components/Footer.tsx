"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { SITE, emailHref, phoneHref } from "../data/site";
import { openContact } from "../lib/contact";

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
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.production"), href: "/production" },
    { name: t("nav.traceability"), href: "/traceability" },
    { name: t("nav.our_coffee"), href: "/#products" },
    { name: t("nav.our_team"), href: "/about" },
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
            aria-label="Footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerVariants}
            className="flex flex-col gap-4 md:gap-6 items-start md:pr-[25%]"
          >
            {navLinks.map((link) => (
              <motion.div variants={itemVariants} key={link.name}>
                <Link
                  href={link.href}
                  className="font-playfair text-[40px] md:text-[65px] tracking-wide text-sand hover:text-royal-red transition-colors leading-[0.9] uppercase"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>

      <div
        ref={footerRef}
        className="relative z-10 w-full overflow-hidden bg-sand text-royal-navy min-h-[100svh] flex flex-col"
      >
        <div className="noise-overlay" aria-hidden="true" />

        <motion.div
          style={{ y }}
          className="w-full pt-16 max-w-[1600px] mx-auto flex flex-col justify-end min-h-[100svh] pb-8 px-6 md:px-12 flex-1"
        >
          <div className="w-full overflow-hidden mt-auto pt-20 pb-4">
            <p aria-hidden="true" className="font-playfair font-bold text-[#1e1e1e] text-[10vw] sm:text-[10vw] md:text-[12vw] leading-[0.75] select-none w-full align-center text-center uppercase">
              K I L O L U A
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mt-8 mb-12">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-10 font-lora text-xs font-bold opacity-80">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
                className="hover:text-royal-red transition-colors uppercase"
              >
                {t("footer.contact")}
              </a>
              <a href={emailHref} className="hover:text-royal-red transition-colors">
                {SITE.email}
              </a>
              <a href={phoneHref} className="hover:text-royal-red transition-colors">
                {SITE.phoneDisplay}
              </a>
              <Link href="/privacy" className="hover:text-royal-red transition-colors uppercase">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-royal-red transition-colors uppercase">
                {t("footer.terms")}
              </Link>
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
