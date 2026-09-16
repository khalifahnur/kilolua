"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const teamData = [
    {
      name: "Christine Macharia-Denoon",
      title: "Co-Founder & Strategic Lead",
      desc: "Christine leads Kilolua’s overall strategy, governance and commercial development.",
      location: "Kenya",
    },
    {
      name: "Gordon Denoon",
      title: "Co-Founder & Sustainability",
      desc: "Gordon is the sustainability and development initiatives lead.",
      location: "Kenya",
    },
    {
      name: "Gladys Mwangi",
      title: "Chief Financial Officer",
      desc: "Gladys leads financial management, controls and commercial oversight.",
      location: "Kenya",
    },
    {
      name: "Jane Macharia",
      title: "Murang’a Region Liaison",
      desc: "Jane provides Kilolua’s critical connection to coffee-growing communities.",
      location: "Kenya",
    },
    {
      name: "Brian & Rose Macharia",
      title: "European Market",
      desc: "Brian and Rose lead Kilolua’s French market development.",
      location: "France",
    },
    {
      name: "Lily Macharia",
      title: "Australia Market",
      desc: "Lily leads market outreach and relationship development in Australia.",
      location: "Australia",
    },
    {
      name: "Ian Muiruri",
      title: "Systems & Digital",
      desc: "Ian leads systems development, digital capability and marketing.",
      location: "Global",
    },
  ];

  const faqs = [
    {
      q: "What makes Kilolua different from other suppliers?",
      a: "Our team gives Kilolua an unusual farm-to-market footprint, connecting smallholder communities directly with international markets.",
    },
    {
      q: "What is Stadipass?",
      a: "Stadipass is our newly launched ticketing platform, bringing the same level of supply-chain expertise and technological capability to the event and experiences sector.",
    },
    {
      q: "How do you ensure sustainability?",
      a: "We focus on building commercially sustainable models that generate measurable economic and social value for our coffee-growing communities.",
    },
    {
      q: "Can I request a specific regional coffee?",
      a: "Yes, our strong local relationships allow us to source highly specific, traceable lots from across Kenya.",
    },
    {
      q: "Where is Kilolua based?",
      a: "We have team members positioned in Kenya, France, and Australia to ensure a truly global yet locally-rooted operation.",
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[75svh] lg:h-screen lg:min-h-[700px] flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[#e4decb] pt-24 lg:pt-28">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="w-full lg:w-[55%] pb-20 px-8 md:px-16 lg:pl-[8%] lg:pr-24 flex flex-col justify-center relative z-10">
          <h1 className="font-['Playfair_Display',_serif] text-[#111a30] text-[1rem] md:text-[2rem] lg:text-[3rem] leading-[1.05] tracking-tight mb-6">
            Exceptional coffee shouldn't be{" "}
            <span className="italic font-['Caveat',_cursive] pr-2">this</span>{" "}
            hard to source.
          </h1>

          <p className="text-[#111a30]/80 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-['Lora',_serif]">
            We're a team of supply-chain experts, engineers, and market
            specialists who believe good coffee shouldn't be this hard to reach.
          </p>

          <div className="space-y-4">
            {[
              "Direct connection to international markets",
              "Deep coffee-sector & supply chain expertise",
              "Traceable, sustainable, and empowering",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#ba172a]" />
                <span className="font-medium text-[15px] text-[#111a30]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col h-[50vh] lg:h-full relative z-10 mt-8 lg:mt-0">
          <div className="flex-1 overflow-hidden relative">
            <img
              src="/coffee-cup-seeds.png"
              alt="Coffee farming detail"
              className="w-full h-full object-cover rounded-tl-3xl lg:rounded-none lg:rounded-bl-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-8 md:px-16 max-w-[1400px] mx-auto text-[#111a30]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[200px] font-['Lora',_serif]">
              A complex supply chain, and a lot of intermediaries.
            </p>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-3xl md:text-5xl leading-[1.1] mb-8">
              Kilolua’s team combines coffee-sector knowledge, supply-chain
              expertise, sustainability, finance, and technology.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-['Lora',_serif]">
              With team members positioned in Kenya, France and Australia, our
              structure is designed to connect smallholder coffee communities
              directly with international markets while retaining strong local
              relationships. Every step, every bean, every partnership is built
              on transparency.
            </p>

            <div className="pl-6 border-l-2 border-[#ba172a]">
              <p className="font-['Playfair_Display',_serif] text-xl italic text-[#111a30] mb-2">
                "We weren't trying to just trade coffee. We were trying to make
                the path to the farmer feel a lot less distant."
              </p>
              <p className="text-sm text-gray-500 font-['Lora',_serif]">
                -- Christine Macharia-Denoon, Co-founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-32 overflow-hidden border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
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
                <div
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
                </div>
              );
            })}
          </div>

          {/* Center Text & Button */}
          <div className="text-center max-w-3xl mx-auto px-8 relative z-10">
            <h3 className="text-[12px] font-bold tracking-widest text-gray-400 mb-6 uppercase">
              THE PEOPLE BEHIND KILOLUA
            </h3>
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
              Rooted in Kenya. Connected globally. One mission.
            </h2>
            <button className="bg-royal-red hover:bg-red-800 text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center gap-3 transition-colors shadow-sm">
              Contact us{" "}
              <ArrowRight
                size={18}
                className="bg-[#111a30] text-[#cbf078] rounded-full p-1"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl leading-[1.1] mb-12">
              Expanding our reach with Stadipass.
            </h2>
            <div className="font-['Playfair_Display',_serif] text-[#ba172a] text-4xl mb-2">
              45K+
            </div>
            <div className="text-sm text-[#111a30] font-medium leading-tight">
              Tickets
              <br />
              Processed
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/stadipass.png"
              alt="stadipass platform"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4">
              <CheckCircle2
                size={24}
                className="text-[#ba172a] shrink-0 mt-1"
              />
              <p className="text-gray-700 leading-relaxed font-['Lora',_serif]">
                <span className="font-bold text-[#111a30]">
                  Seamless event ticketing platform
                </span>{" "}
                bringing the same technological rigor we apply to supply chains
                directly to the experiences sector.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2
                size={24}
                className="text-[#ba172a] shrink-0 mt-1"
              />
              <p className="text-gray-700 leading-relaxed font-['Lora',_serif]">
                <span className="font-bold text-[#111a30]">
                  Users rate their Stadipass experience 4.9 out of 5
                </span>
                , proof that complex logistical systems can scale while feeling
                simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-['Playfair_Display',_serif] text-[#111a30] text-4xl md:text-5xl leading-[1.1] mb-16">
              Common Questions & Answers
            </h2>
            <p className="text-sm text-gray-500 max-w-sm font-['Lora',_serif]">
              Our FAQ is here to answer what matters most, giving you clarity
              and confidence before you partner with us.
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
      </section>
    </>
  );
}
