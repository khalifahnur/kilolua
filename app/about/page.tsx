'use client';

import { CheckCircle2, ArrowRight, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamData = [
    {
      name: "Gladys Mwangi",
      title: t("about.team.gladys_title", "Chief Financial Officer"),
      desc: t("about.team.gladys_desc", "Gladys leads financial management, controls and commercial oversight."),
    },
    {
      name: "Ian Muiruri",
      title: t("about.team.ian_title", "Systems & Digital"),
      desc: t("about.team.ian_desc", "Ian leads systems development, digital capability and marketing."),
    },
    {
      name: "Jane Macharia",
      title: t("about.team.jane_title", "Murang’a Region Liaison"),
      desc: t("about.team.jane_desc", "Jane provides Kilolua’s critical connection to coffee-growing communities."),
    },
    {
      name: "Christine Macharia-Denoon",
      title: t("about.team.christine_title", "Co-Founder & Strategic Lead"),
      desc: t("about.team.christine_desc", "Christine leads Kilolua’s overall strategy, governance and commercial development."),
    },
    {
      name: "Gordon Denoon",
      title: t("about.team.gordon_title", "Co-Founder & Sustainability"),
      desc: t("about.team.gordon_desc", "Gordon is the sustainability and development initiatives lead."),
    },
    {
      name: "Brian & Rose Macharia",
      title: t("about.team.brian_rose_title", "European Market"),
      desc: t("about.team.brian_rose_desc", "Brian and Rose lead Kilolua’s French market development."),
    },
    {
      name: "Lily Macharia",
      title: t("about.team.lily_title", "Australia Market"),
      desc: t("about.team.lily_desc", "Lily leads market outreach and relationship development in Australia."),
    },
  ];

  const faqs = [
    {
      q: t("about.faqs.q1", "What makes Kilolua different from other suppliers?"),
      a: t("about.faqs.a1", "Our team gives Kilolua an unusual farm-to-market footprint, connecting smallholder communities directly with international markets."),
    },
    {
      q: t("about.faqs.q2", "What is Stadipass?"),
      a: t("about.faqs.a2", "Stadipass is our newly launched ticketing platform, bringing the same level of supply-chain expertise and technological capability to the event and experiences sector."),
    },
    {
      q: t("about.faqs.q3", "How do you ensure sustainability?"),
      a: t("about.faqs.a3", "We focus on building commercially sustainable models that generate measurable economic and social value for our coffee-growing communities."),
    },
    {
      q: t("about.faqs.q4", "Can I request a specific regional coffee?"),
      a: t("about.faqs.a4", "Yes, our strong local relationships allow us to source highly specific, traceable lots from across Kenya."),
    },
    {
      q: t("about.faqs.q5", "Where is Kilolua based?"),
      a: t("about.faqs.a5", "We have team members positioned in Kenya, France, and Australia to ensure a truly global yet locally-rooted operation."),
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden pt-32 md:pt-48 pb-12">
      {/* OUR STORY SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pb-24 px-8 md:px-16 max-w-[1400px] mx-auto text-[#111a30]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="font-playfair text-3xl md:text-[50px] font-bold text-royal-navy mb-8 leading-[0.85] tracking-wide uppercase">
              {t("about.story_title", "OUR STORY")}
            </p>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <div className="pl-6 border-l-2 border-[#ba172a]">
              <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-xl md:text-2xl leading-[1.1] mb-8">
                {t("about.story_subtitle", "For Kilolua, a good cup of coffee tells a bigger story: of the people who grew it, the place it came from, and the value that can return to its community.")}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-['Lora',_serif]">
              {t("about.story_desc", "Kilolua began as a family business with a simple belief: strong relationships and reliable delivery can create lasting value. Founded in Kenya by Christine and Gordon Denoon, the company built its experience connecting people, goods and markets through procurement and logistics. Today, that experience is guiding Kilolua’s next chapter in coffee. Kenyan coffee carries the work of small-scale farmers in every cup. Kilolua wants more of that work to be seen and valued, especially the contribution of women. Its developing coffee approach starts at the farm: building responsible relationships with producers, protecting quality as coffee moves through the supply chain, and helping connect its origin to buyers who care about how it was grown. As a family-owned Kenyan company with connections across Africa, Europe and Australia, Kilolua brings a local understanding and an international outlook to that ambition. It is exploring ways to add value through quality, traceability and market access, while keeping farmer livelihoods and environmental care at the heart of its decisions.")}
            </p>
          </div>
        </div>
      </motion.section>

      {/* TEAM SECTION */}
      <section className="pt-12 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-[50px] font-bold text-royal-navy mb-8 leading-[0.85] tracking-wide uppercase text-center"
          >
            {t("about.team_title", "THE PEOPLE BEHIND KILOLUA")}
          </motion.h3>
          
          <div className="w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center gap-4 lg:gap-6 mb-24 relative">
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-[300px] border-t border-gray-200 rounded-[100%] pointer-events-none -z-10"></div>

            {teamData.map((member, index) => {
              const getMarginTop = (idx: number) => {
                if (idx === 3) return "md:mt-0";
                if (idx === 2 || idx === 4) return "md:mt-12 lg:mt-16";
                if (idx === 1 || idx === 5) return "md:mt-24 lg:mt-32";
                return "md:mt-36 lg:mt-48";
              };

              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={index}
                  className={`flex flex-col items-center w-full sm:w-[45%] md:w-[14%] mb-8 md:mb-0 ${getMarginTop(index)}`}
                >
                  <div className="w-full max-w-[180px] aspect-[3/4] bg-[#e4decb]/40 rounded-2xl mb-4 shadow-sm border border-gray-200"></div>
                  <div className="text-center px-1">
                    <h3 className="font-['Playfair_Display',_serif] text-lg lg:text-xl font-medium text-[#111a30] mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {member.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-8 relative z-10"
          >
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
              {t("about.mission_statement", "Rooted in Kenya. Connected globally. One mission.")}
            </h2>
            <button className="bg-royal-red hover:bg-red-800 text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center gap-3 transition-colors shadow-sm">
              {t("about.contact_btn", "Contact us")}{" "}
              <ArrowRight
                size={18}
                className="bg-[#111a30] text-[#cbf078] rounded-full p-1"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* STADIPASS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl leading-[1.1] mb-12">
              {t("about.stadipass.title", "Expanding our reach with Stadipass.")}
            </h2>
            <div className="font-['Playfair_Display',_serif] text-[#ba172a] text-4xl mb-2">
              45K+
            </div>
            <div 
              className="text-sm text-[#111a30] font-medium leading-tight"
              dangerouslySetInnerHTML={{ __html: t("about.stadipass.tickets", "Tickets<br/>Processed") }}
            />
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/stadipass.png"
              alt="stadipass platform"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
            />
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} className="text-[#ba172a] shrink-0 mt-1" />
              <p 
                className="text-gray-700 leading-relaxed font-['Lora',_serif]"
                dangerouslySetInnerHTML={{ __html: t("about.stadipass.bullet1", "<span class='font-bold text-[#111a30]'>Seamless event ticketing platform</span> bringing the same technological rigor we apply to supply chains directly to the experiences sector.") }}
              />
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} className="text-[#ba172a] shrink-0 mt-1" />
              <p 
                className="text-gray-700 leading-relaxed font-['Lora',_serif]"
                dangerouslySetInnerHTML={{ __html: t("about.stadipass.bullet2", "<span class='font-bold text-[#111a30]'>Users rate their Stadipass experience 4.9 out of 5</span>, proof that complex logistical systems can scale while feeling simple.") }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl leading-[1.1] mb-16">
              {t("about.faq_title", "Common Questions & Answers")}
            </h2>
            <p className="text-sm text-gray-500 max-w-sm font-['Lora',_serif]">
              {t("about.faq_desc", "Our FAQ is here to answer what matters most, giving you clarity and confidence before you partner with us.")}
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border-t border-gray-200">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full py-6 flex justify-between items-center text-left hover:bg-[#e4decb]/30 transition-colors"
                  >
                    <span className="font-['Playfair_Display',_serif] text-[#111a30] text-xl font-medium pr-8">
                      {faq.q}
                    </span>
                    <Plus
                      size={24}
                      className={`text-[#ba172a] shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-gray-600 leading-relaxed font-['Lora',_serif]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}