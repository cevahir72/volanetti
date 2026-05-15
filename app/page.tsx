"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: luxuryEase }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          {/* Full Height Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: luxuryEase }}
              alt="Volanetti Emerald Velvet Drapery" 
              className="w-full h-full object-cover" 
              src="/home_img.png"
            />
            {/* Tonal Layering Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
              className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col items-start justify-center bg-primary-container/30 backdrop-blur-md p-8 md:p-12 border-l border-secondary/20"
            >
              <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase">Bespoke Fabrication</span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: luxuryEase }}
                className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-[1.1]"
              >
                Handcrafted Drapery.<br/>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: luxuryEase }}
                  className="italic font-medium"
                >Exclusive to the Trade.</motion.span>
              </motion.h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg mb-8">
                Velvet & Linen Curtains <span className="text-secondary mx-2">|</span> Custom Sizing <span className="text-secondary mx-2">|</span> Wholesale Pricing
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/fabric-studio" className="px-6 py-2 bg-secondary/10 border border-secondary/30 text-secondary font-label-caps uppercase tracking-widest hover:bg-secondary hover:text-primary-container transition-all backdrop-blur-sm">
                  Fabric Studio
                </Link>
                <Link href="/wood-works" className="px-6 py-2 bg-white/5 border border-white/10 text-on-surface-variant font-label-caps uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all backdrop-blur-sm">
                  Wood Works
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="bg-secondary text-on-secondary-fixed font-label-caps px-10 py-5 hover:bg-secondary-fixed-dim transition-all shadow-lg text-center block"
                  >
                    Request Trade Access
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/collections" 
                    className="hairline-border text-on-background font-label-caps px-10 py-5 hover:bg-white/5 transition-all text-center block"
                  >
                    View Catalog
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </div>
        </section>

        {/* Technical Mastery Section */}
        <section className="bg-surface-container-lowest py-32 border-t border-secondary/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
              {/* Detail Showcase Image */}
              <motion.div {...fadeUp} className="w-full md:w-1/2">
                <div className="relative group overflow-hidden hairline-border rounded-lg">
                  <img 
                    className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Macro close-up of emerald velvet"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZm1e8z4HQF8c6IDE2ebU2Txkq8CFN9VmRbpb6Eitq6hUrWWtdUDx4TsBM-Sjtn5_0NUkPIOBCXY6X8zOgD4idxseDSGWRHvhR2_fAPhxk02mCS3YLftgyEj-c-5A3c89SkkmLGjWf6i17QiaRY9l64er3lsivwe4HuvOxPUldQsOzUEB2eiWY71g48psHAhmEWq39dNZ_qmJp2AJYM3DJNd9OXy3pxvIL5an3-Q4jrIx8cLR3xToi0L-s6DTt5iVj8Yh86mj6_hL0"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary-container/80 backdrop-blur-md p-6 md:p-8 w-full md:w-3/4 hairline-border border-b-0 border-l-0">
                    <h3 className="font-headline-md text-secondary mb-2">Technical Mastery</h3>
                    <p className="font-body-md text-on-surface-variant">Precision engineered for the most demanding interior environments.</p>
                  </div>
                </div>
              </motion.div>

              {/* Specification Grid */}
              <div className="w-full md:w-1/2 grid grid-cols-1 gap-10 lg:gap-12 md:pl-8 lg:pl-12">
                {[
                  { label: "Weight", value: "540 g/m²", desc: "Industrial grade density ensuring elegant drape and durability.", icon: "balance" },
                  { label: "Opacity", value: "Blackout Grade", desc: "Zero light penetration for high-end hospitality and residential suites.", icon: "dark_mode" },
                  { label: "Material", value: "100% Belgian Linen", desc: "Sustainably sourced fibers woven in the historic Flanders region.", icon: "eco" }
                ].map((spec, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="border-b border-on-surface/10 pb-6"
                  >
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-label-caps text-secondary uppercase mb-2">{spec.label}</h4>
                      <span className="material-symbols-outlined text-secondary text-[20px]">{spec.icon}</span>
                    </div>
                    <p className="font-headline-md text-on-surface">{spec.value}</p>
                    <p className="font-body-md text-on-surface-variant mt-2">{spec.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signature Collections (Bento Style) */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-background">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px]">
              <motion.div 
                {...fadeUp}
                className="col-span-12 md:col-span-8 relative overflow-hidden hairline-border rounded-xl row-span-2 group"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="Atelier Collection Showcase"
                  src="/drape.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12">
                  <h2 className="font-headline-lg text-3xl md:text-5xl mb-4 text-on-background">The Atelier Collection</h2>
                  <Link href="/collections" className="text-secondary font-label-caps flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Selection <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                {...fadeUp}
                className="col-span-12 md:col-span-4 bg-primary-container p-8 md:p-10 flex flex-col justify-end hairline-border rounded-xl"
              >
                <h3 className="font-headline-md text-secondary mb-4">Contract Solutions</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Optimized workflows for large-scale development projects and commercial interiors.</p>
                <Link href="/contact" className="font-label-caps border-b border-secondary/40 self-start pb-1 hover:border-secondary transition-colors group/link">
                  Learn More
                  <motion.span 
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </Link>
              </motion.div>

              <motion.div 
                {...fadeUp}
                className="col-span-12 md:col-span-4 relative overflow-hidden hairline-border rounded-xl group"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Hardware Systems Detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8pRDc8IAuJ0Z-DIjINFZwlG1PugUuzge6Q36QsJ6QX3hAh08holaa578LsG6M2S0VWXvqCF_UtCASozIY7DucQJX7eIjJz257t5drzo2ln6xFV7w7i96LWguAkuT-NdU2nk9est-2u7sKgJFvDzTAs_cVbu5mtxNQ723XsUX9SK1YwVyyqU6_g8h2gQRuxRV3x6G6NBW0TKumQEyIWLAdSkP_TfnicAzGWL-xVuyLpLGQQDukBemPbOsGboRN_mR43MRrI4lY3BqM"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-label-caps tracking-widest text-on-background">Hardware Systems</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
