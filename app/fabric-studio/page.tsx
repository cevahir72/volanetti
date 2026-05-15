"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const luxuryEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: luxuryEase }
};

export default function FabricStudio() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main>
        {/* Hero Section - Matching Home Page Format */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: luxuryEase }}
              alt="Volanetti Fabric Studio" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi0Ym_fMrXfYnxvVVUDRcZgl-ynBtgeb0AzfoxTiqWtJVSM6HhEd_VD3yrY82DfMBdm2841aE58kpI_uZNXJwZpi141kKyRjaECyfxKaWiWjUIkeEUOubzvHy4x71jORKOzmuUSyIn7ux_701jrWHHk5LgkpPtz4BEzMki2s-r8dV7dDh5wlH1w9pTVww-xW81rXifuu1fzSV3gKvAzVMGnCEcFv2oB9PwxHipUkS6GCv3JqASloMC4NceYMrjc8E6KBQaeCvFuWRY"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
              className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col items-start justify-center"
            >
              <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase text-sm md:text-base">Fabric Studio</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-[1.1]">
                Masterful Textiles.<br/>
                <span className="italic font-medium">Architectural Precision.</span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg mb-12">
                Discover our curated selection of high-performance fabrics, engineered for the world&apos;s most sophisticated interiors.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/fabric-studio/catalog" className="bg-secondary text-on-secondary-fixed font-label-caps px-10 py-5 hover:bg-secondary-fixed-dim transition-all shadow-lg text-center min-w-[240px]">
                  View Fabric Catalog
                </Link>
                <button className="hairline-border text-on-background font-label-caps px-10 py-5 hover:bg-white/5 transition-all text-center min-w-[240px]">
                  Request Swatches
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="px-margin-mobile md:px-margin-desktop mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Curated Selections</h2>
                <p className="font-body-md text-on-surface-variant">Explore our diverse range of materials, from artisanal linens to heavy-weight velvets.</p>
              </div>
              <Link className="font-label-caps text-secondary uppercase border-b border-secondary/30 pb-1 hover:border-secondary transition-colors" href="/fabric-studio/catalog">Explore Catalog</Link>
            </div>
            
            <div className="flex overflow-x-auto gap-gutter px-margin-mobile md:px-margin-desktop pb-8 no-scrollbar snap-x md:grid md:grid-cols-3">
              {[
                { title: "Velvet Series", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi0Ym_fMrXfYnxvVVUDRcZgl-ynBtgeb0AzfoxTiqWtJVSM6HhEd_VD3yrY82DfMBdm2841aE58kpI_uZNXJwZpi141kKyRjaECyfxKaWiWjUIkeEUOubzvHy4x71jORKOzmuUSyIn7ux_701jrWHHk5LgkpPtz4BEzMki2s-r8dV7dDh5wlH1w9pTVww-xW81rXifuu1fzSV3gKvAzVMGnCEcFv2oB9PwxHipUkS6GCv3JqASloMC4NceYMrjc8E6KBQaeCvFuWRY" },
                { title: "Linen Series", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJDjTzW7EUC0yvH8yQXaNetSjmOVsZ1WD165uGyk5qgPP-0f5fdvNab_DvVDtu2R0aZUIdOzEhBsFHKrQqMR0stzrgffGBD-GukT2viiUpUusFCGRT5FT62m-_xz7AzSd_YUjjCERPxksdLllSqt2mGchtSaYAcOOOXe4_lfv5IYYGL8pewL3xRAIzhfK8wqWg1gdszozFMMxmK_VUvvA8IJzyHwwvqYApH_haG7ADEYfDNZap5QCDXn6ggKv2gT2Dv0_veg9erBtk" },
                { title: "Sheer Systems", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Nuk7BfM3Qv01txJLkxl9lTn_vD-_1bpmMcLnmjdr4XevgQydPeJdtJQBtsURcMMN-XR50q3hZxPdSOa9zVB5L3Ts1UjYo45AfGvcb5CjoOGCArikMQSSYDOfyW_WXjf6-fHortTJRzUvQzZoEeAAytv3oDZ32mdp58P-sPPNWrBJ16kp8-mMojxLoFh78txWX6QafqWwM_3YHuyxE7mgHHGmrkNepTsJ0Nm1IMlr7z7-W5IuQNsoWMq4nDGs-IksoOQ1dXJh0eXT" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeUp}
                  className="flex-none w-72 md:w-auto snap-center group"
                >
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg border border-secondary/20">
                    <img 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      src={item.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="font-label-caps text-secondary uppercase tracking-widest text-lg">{item.title}</p>
                      <div className="h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-500 mt-2"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Fabric Studio */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <motion.h2 
              {...fadeUp}
              className="font-headline-lg-mobile md:text-headline-lg text-secondary mb-16 text-center"
            >
              Manufacturing Excellence
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
              {[
                { title: "Industrial Grade", desc: "Fabrics tested for high-traffic environments and extreme durability.", icon: "settings_input_component" },
                { title: "Sound Modulation", desc: "Acoustic properties engineered to absorb sound and reduce echoes.", icon: "volume_up" },
                { title: "Light Precision", desc: "Blackout and light-filtering solutions for perfect environmental control.", icon: "brightness_medium" },
                { title: "Sustainable Origin", desc: "Commitment to eco-friendly sourcing and low-impact manufacturing.", icon: "eco" }
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="flex flex-col items-center md:items-start text-center md:text-left gap-6 group"
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border border-secondary/30 rounded-full group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-500">
                    <span className="material-symbols-outlined text-secondary text-3xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-body-lg font-bold text-on-surface mb-3 text-xl">{benefit.title}</h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-24 md:py-32 bg-background border-t border-secondary/10 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20">
              <motion.h2 {...fadeUp} className="font-display-lg text-4xl md:text-6xl text-on-background mb-4 uppercase tracking-tight">Partner With Us</motion.h2>
              <motion.p {...fadeUp} className="font-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">Wholesalers & Designers</motion.p>
              <motion.p {...fadeUp} className="font-body-md text-on-surface-variant italic">The Volanetti Promise: <span className="text-secondary font-medium not-italic">Strictly B2B</span></motion.p>
            </div>

            <motion.div 
              {...fadeUp}
              className="bg-surface-container-low p-8 md:p-16 rounded-2xl hairline-border relative group"
            >
              <div className="absolute top-0 left-10 w-24 h-1 bg-secondary rounded-full transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-12 space-y-8">
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    We proudly serve <span className="text-on-background font-semibold">interior design studios, hospitality groups, event planners, and retail stores</span> seeking dependable quality and responsive service.
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="font-headline-md text-on-background">As a wholesale partner, you&apos;ll enjoy:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Competitive trade pricing",
                        "Custom sizing & labeling",
                        "Fast production & shipping",
                        "Dedicated account management"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-body-md">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-body-md text-on-surface-variant pt-4 border-t border-secondary/10">
                    We&apos;re ready to grow with you, from your first order to full-scale rollouts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Banner */}
            <motion.div 
              {...fadeUp}
              className="mt-12 bg-secondary/10 hairline-border border-secondary/30 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 group hover:bg-secondary/20 transition-all duration-500"
            >
              <div className="text-center md:text-left">
                <h3 className="font-headline-lg text-on-background mb-2">Join Us In Making A Difference</h3>
                <p className="font-label-caps text-secondary tracking-widest text-sm uppercase">Apply for Wholesale Account</p>
              </div>
              <Link href="/fabric-studio/contact" className="bg-secondary text-on-secondary-fixed font-label-caps px-12 py-5 hover:bg-secondary-fixed-dim transition-all shadow-lg min-w-[200px] text-center uppercase tracking-widest">
                Apply
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What Our Partners Say Section */}
        <section className="py-24 md:py-32 bg-surface-container-lowest border-t border-secondary/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20">
              <motion.h2 {...fadeUp} className="font-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">What Our Partners Say</motion.h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {[
                {
                  quote: "We’ve sourced from Volanetti for our boutique hotel chain, the velvet quality and service are unmatched.",
                  author: "M. Parker",
                  role: "Interior Designer",
                  location: "NYC - Upper West Side"
                },
                {
                  quote: "Their linen drapery transformed our client’s villa, soft light, elegant feel, flawless finish.",
                  author: "R. Lopez",
                  role: "Designer",
                  location: "Florida - Key West"
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeUp}
                  className="relative p-10 md:p-14 bg-background hairline-border rounded-2xl flex flex-col justify-between group hover:border-secondary/30 transition-all duration-700"
                >
                  <span className="material-symbols-outlined text-secondary/20 text-6xl absolute top-6 left-6 group-hover:text-secondary/40 transition-colors">format_quote</span>
                  
                  <div className="relative z-10">
                    <p className="font-display-md italic text-2xl md:text-3xl text-on-background leading-snug mb-10">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-secondary/10">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <span className="font-label-caps text-secondary text-xl">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg font-bold text-on-background">{testimonial.author}</h4>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                        {testimonial.role} <span className="text-secondary mx-1">|</span> {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
