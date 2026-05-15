"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LineRevealText } from "@/components/LineRevealText";
import {
  luxuryFadeUp,
  luxuryStaggerContainer,
  slideInLeft,
  luxuryEase,
} from "@/lib/animations";

export default function Home() {
  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="bg-background/80 dark:bg-background/80 docked full-width top-0 sticky z-50 backdrop-blur-xl border-b border-secondary/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          <div className="text-headline-md font-headline-md tracking-tight text-on-surface dark:text-on-surface">
            VOLANETTI
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-secondary dark:text-secondary border-b border-secondary pb-1 text-label-caps font-label-caps transition-all duration-200" href="#">Fabric Studio</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 text-label-caps font-label-caps" href="#">Wood Works</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 text-label-caps font-label-caps" href="#">Our Craft</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 text-label-caps font-label-caps" href="#">Contact</Link>
          </div>
          <button className="bg-secondary text-on-secondary px-6 py-2.5 text-label-caps font-label-caps hover:opacity-90 transition-all duration-200">
            Request Quote
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section: Full-screen Split Layout */}
        <section className="flex flex-col md:flex-row h-screen min-h-[700px] w-full overflow-hidden">
          {/* Left Side: Fabric Studio */}
          <div className="group relative flex-1 h-1/2 md:h-full hero-split-hover bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlE_DhdpgiS204cg2ssaaPpUsIFLR0mWzJp2dHBBy07dh5rWSmmNE0wpd_039o3Rb1V3lftTRbxNdaOssy9cjvrux35rPCTs2Y__zNIgYVabUIVM89JKtJIy2YJPnFG6Uyfp8cT9RyMdzXEHOrU5wBf_McHU2HSOUW_NXUqkNm2MGHFeOXe6FI6VBQ9zVJ6mlYi-nGKmAkHLn0_-3ILtJjAyYG4F7w5Sr40tiVsomd3vRk-em2qUq_YSWXLJ8-VKxtEkfMam0T7Dzz')" }}>
            <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/60 transition-all duration-500"></div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
              className="relative h-full flex flex-col items-center justify-center p-12 text-center"
            >
              <h2 className="text-on-surface font-display-lg text-display-lg-mobile md:text-display-lg mb-8 drop-shadow-lg">Fabric Studio</h2>
              <div className="overlay flex flex-col items-center gap-6">
                <button className="border border-secondary text-secondary px-12 py-4 text-label-caps font-label-caps hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                  Enter
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Wood Works */}
          <div className="group relative flex-1 h-1/2 md:h-full hero-split-hover bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsuqy8c6S71_2gUXC66fWHz_NQgr259ELA4Qw5wYwyw2T4Xvh5m34Yf6sqXWR1OmU6Jl8d5l47YmnSCIUczhTZ1XSsUKHjw7VQSoTo_kEPevhguqPJfM_E2LaFb5JkzIz5E93SQg_Czdq6qZeN6Hg_XjS1LcC0b7Bef2t4RWiY3Y2ELYyokq05P0N8o6HMkkut5_vtyPjPcU27kGNYFtctKvPrrzVlBSXVlUPIiuCdmArRboGGDJCCpbhtI_P8xWQWOGMm7rtbaO9W')" }}>
            <div className="absolute inset-0 bg-primary-container/30 group-hover:bg-primary-container/50 transition-all duration-500"></div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
              className="relative h-full flex flex-col items-center justify-center p-12 text-center"
            >
              <h2 className="text-on-surface font-display-lg text-display-lg-mobile md:text-display-lg mb-8 drop-shadow-lg">Wood Works</h2>
              <div className="overlay flex flex-col items-center gap-6">
                <button className="border border-secondary text-secondary px-12 py-4 text-label-caps font-label-caps hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                  Enter
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Narrative Section */}
        <section className="bg-primary-container py-32 md:py-48">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={luxuryStaggerContainer}
              className="grid md:grid-cols-12 gap-12 items-end"
            >
              <motion.div variants={luxuryFadeUp} className="md:col-span-7">
                <span className="text-secondary font-label-caps text-label-caps mb-6 block">ESTABLISHED EXCELLENCE</span>
                <LineRevealText
                  text="Manufacturing Excellence for the Architectural Avant-Garde."
                  className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight"
                  tag="h2"
                />
              </motion.div>
              <motion.div variants={luxuryFadeUp} className="md:col-span-5 pb-2">
                <p className="text-on-primary-container font-body-lg text-body-lg leading-relaxed max-w-prose">
                  Volanetti stands at the intersection of industrial precision and artisanal heritage. We provide high-end B2B solutions for developers and designers who demand the tactile luxury of custom fabrications with the reliability of master-scale manufacturing.
                </p>
              </motion.div>
            </motion.div>

            {/* B2B Feature Grid */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={luxuryStaggerContainer}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: "architecture", title: "Architectural Spec", desc: "Meticulously engineered materials ready for technical integration into luxury developments and commercial spaces." },
                { icon: "precision_manufacturing", title: "Bespoke Scalability", desc: "From single custom pieces to full-suite hospitality contracts, we maintain rigorous quality standards at every volume." },
                { icon: "handshake", title: "Partner Relations", desc: "Dedicated account managers and technical support for architects, interior designers, and high-end developers." }
              ].map((item, i) => (
                <motion.div key={i} variants={luxuryFadeUp} className="border border-secondary/20 p-8 bg-surface-container-lowest transition-all hover:border-secondary/40 hover:-translate-y-2">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon={item.icon}>{item.icon}</span>
                  <h3 className="text-on-surface font-headline-md text-headline-md mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technical Excellence Detail (Editorial Showcase) */}
        <section className="bg-surface py-32 border-t border-secondary/10 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                className="w-full md:w-1/2 aspect-square bg-surface-container-low overflow-hidden relative"
              >
                <img 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="A detailed macro shot of a precision joinery technique" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA9eahz8H6R51IKDtFKXja4X2AT5JnDa89sHBu8Td2o16vT5hmhwnSMpIashbjmN8FMEIs7hfD8SWrjTDMQDsbyNvwb2X3ineA4LEaCLtQzh8G2azwdaHc5VKQR7pH74neIB7uKIV7mdxL0xJM7w9yd_hQS48vQJ7QETFR8pw_9YpFRm1t8Oi6d94ZqiCiDfTbxA6yoAysFfNa-qfuG2qjoRR7Rnrsu866BF7UeRxHLYkVhGab9fe3g26v98aoUPPu0FJxrnJoYA2e" 
                />
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={luxuryStaggerContainer}
                className="w-full md:w-1/2"
              >
                <motion.h2 variants={luxuryFadeUp} className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
                  The Material Integrity Manifesto
                </motion.h2>
                <ul className="space-y-6">
                  {[
                    { num: "01", title: "Sourcing Ethics", desc: "FSC-certified timbers and sustainably harvested natural fibers from European mills." },
                    { num: "02", title: "Technical Tolerance", desc: "Precision milling with tolerances within 0.5mm for seamless architectural installation." },
                    { num: "03", title: "Performance Testing", desc: "All textiles meet high-traffic contract rub counts and international fire safety standards." },
                  ].map((item, i) => (
                    <motion.li key={i} variants={luxuryFadeUp} className="flex gap-4 border-b border-on-surface/10 pb-4">
                      <span className="text-secondary font-label-caps text-label-caps">{item.num}</span>
                      <div>
                        <h4 className="text-on-surface font-label-caps text-label-caps mb-1 uppercase">{item.title}</h4>
                        <p className="text-on-surface-variant text-body-md">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Shell */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest full-width border-t border-secondary/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="text-headline-md font-headline-md text-on-surface dark:text-on-surface">
              VOLANETTI
              <p className="text-label-caps font-label-caps text-on-surface-variant mt-2 tracking-widest">MANUFACTURING HOUSE</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-secondary font-label-caps text-label-caps mb-2">SOLUTIONS</span>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Fabric Studio</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Wood Works</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Custom Projects</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-secondary font-label-caps text-label-caps mb-2">TECHNICAL</span>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Sustainability</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Technical Specs</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Certifications</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-secondary font-label-caps text-label-caps mb-2">COMPANY</span>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Privacy Policy</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">LinkedIn</Link>
                <Link className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 transition-all duration-300 text-body-md" href="#">Instagram</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-secondary/10">
            <p className="text-label-caps font-label-caps text-on-surface-variant text-center md:text-left">
              © 2024 VOLANETTI MANUFACTURING EXCELLENCE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity" data-icon="language">language</span>
              <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity" data-icon="share">share</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
