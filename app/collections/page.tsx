"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: luxuryEase }
};

export default function CollectionsPage() {
  return (
    <div className="bg-[#F9F7F2] text-surface-container-highest min-h-screen selection:bg-secondary/30 selection:text-surface-container-highest">
      <main className="pt-24 md:pt-32 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-container-highest mb-4">The Material Study</h1>
          <p className="font-body-lg text-body-lg text-outline max-w-2xl">Refined textiles and architectural window solutions, engineered for the modern interior.</p>
        </motion.div>

        {/* Product Collection Cards Section */}
        <section className="grid grid-cols-1 gap-12 md:gap-24">
          {[
            {
              id: 1,
              tag: "Velvet Drapery",
              title: "Lustrous Heritage",
              desc: "Exquisite heavy-weight velvet with a signature soft luster. Designed to absorb sound and modulate light with architectural precision.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi0Ym_fMrXfYnxvVVUDRcZgl-ynBtgeb0AzfoxTiqWtJVSM6HhEd_VD3yrY82DfMBdm2841aE58kpI_uZNXJwZpi141kKyRjaECyfxKaWiWjUIkeEUOubzvHy4x71jORKOzmuUSyIn7ux_701jrWHHk5LgkpPtz4BEzMki2s-r8dV7dDh5wlH1w9pTVww-xW81rXifuu1fzSV3gKvAzVMGnCEcFv2oB9PwxHipUkS6GCv3JqASloMC4NceYMrjc8E6KBQaeCvFuWRY",
              reverse: false
            },
            {
              id: 2,
              tag: "Linen Curtains",
              title: "Organic Structuralism",
              desc: "Artisanal Belgian linen with a refined, natural weave. A breathable textile that brings a tactile, airy sophistication to any high-end space.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJDjTzW7EUC0yvH8yQXaNetSjmOVsZ1WD165uGyk5qgPP-0f5fdvNab_DvVDtu2R0aZUIdOzEhBsFHKrQqMR0stzrgffGBD-GukT2viiUpUusFCGRT5FT62m-_xz7AzSd_YUjjCERPxksdLllSqt2mGchtSaYAcOOOXe4_lfv5IYYGL8pewL3xRAIzhfK8wqWg1gdszozFMMxmK_VUvvA8IJzyHwwvqYApH_haG7ADEYfDNZap5QCDXn6ggKv2gT2Dv0_veg9erBtk",
              reverse: true
            },
            {
              id: 3,
              tag: "Custom Orders",
              title: "Tailored Precision",
              desc: "Bespoke window treatments tailored to your exact specifications. Our master artisans work alongside architects to deliver unique manufacturing excellence.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Nuk7BfM3Qv01txJLkxl9lTn_vD-_1bpmMcLnmjdr4XevgQydPeJdtJQBtsURcMMN-XR50q3hZxPdSOa9zVB5L3Ts1UjYo45AfGvcb5CjoOGCArikMQSSYDOfyW_WXjf6-fHortTJRzUvQzZoEeAAytv3oDZ32mdp58P-sPPNWrBJ16kp8-mMojxLoFh78txWX6QafqWwM_3YHuyxE7mgHHGmrkNepTsJ0Nm1IMlr7z7-W5IuQNsoWMq4nDGs-IksoOQ1dXJh0eXT",
              reverse: false
            }
          ].map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className={`group flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center bg-white/40 p-6 md:p-12 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-xl`}
            >
              <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src={item.img}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-6">
                <span className="font-label-caps text-sm text-secondary uppercase tracking-[0.2em]">{item.tag}</span>
                <h2 className="font-headline-md text-3xl md:text-5xl text-surface-container-highest leading-tight">{item.title}</h2>
                <p className="font-body-md text-lg text-outline leading-relaxed">{item.desc}</p>
                <Link href="#" className="inline-flex items-center space-x-3 text-surface-container-highest font-label-caps uppercase tracking-widest hover:text-secondary transition-colors group/link w-fit">
                  <span>View Collection</span>
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Technical Specs CTA */}
        <motion.section 
          {...fadeUp}
          className="mt-24 md:mt-40 p-12 md:p-20 bg-primary-container rounded-2xl text-center md:text-left flex flex-col md:flex-row justify-between items-center border border-secondary/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
          <div className="mb-8 md:mb-0 md:max-w-2xl relative z-10">
            <h3 className="font-headline-md text-3xl md:text-4xl text-on-surface mb-6">Architectural Resources</h3>
            <p className="font-body-md text-lg text-on-primary-container leading-relaxed">Download our technical specifications, material swatches, and integration guides for professional interior developers.</p>
          </div>
          <button className="bg-secondary text-primary-container px-12 py-5 rounded-full font-label-caps uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-lg relative z-10">
            Access Library
          </button>
        </motion.section>
      </main>
    </div>
  );
}
