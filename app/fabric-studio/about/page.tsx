"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: luxuryEase }
};

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background min-h-screen pt-32">
      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: luxuryEase }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase text-sm">About Us</span>
                  <h1 className="font-display-lg text-4xl md:text-6xl text-secondary leading-[1.1]">
                    Crafted with Elegance. <br/>
                    <span className="italic font-medium">Designed for Distinction.</span>
                  </h1>
                </div>
                <div className="space-y-6 max-w-xl">
                  <p className="font-body-lg text-on-surface/80 leading-relaxed">
                    We believe in the art of fine textile. For over three decades, we&apos;ve specialized in luxury <span className="text-secondary font-bold">velvet and linen curtains</span>, woven from carefully selected fibers and finished by skilled artisans.
                  </p>
                  <p className="font-body-lg text-on-surface/80 leading-relaxed">
                    Our mission is simple: to help designers and businesses bring warmth, sophistication, and authenticity into every space.
                  </p>
                  <p className="font-body-lg text-on-surface/80 leading-relaxed">
                    Every panel we make is a blend of precision, passion, and purpose, crafted to elevate interiors around the world.
                  </p>
                </div>
              </motion.div>

              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: luxuryEase }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden border border-secondary/20 shadow-2xl">
                  <img 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQFGk1zgqZgvx83dr-j0iONiSeZ7i9G5uE4M0aUog7bCuQ8vLiCGTiunQcfLV3DVqIFykhgHmt0VcFvpnJdd6UhEcjwU-jCihMlbGB7aeCsZQWk4mqjbLzfop6qybOu63GFQQaZrGwynj08qUKdMTYgWkeu1pCNwii1Y1NngQw46XGC4jK4eY3XYb-5MLKWf3t_5uDio53-beV4mt--23PVcrpdqTxDcUT67paO3SGNxjNQiZ2kQUY5Ryq4D6x68jcrR_h8eaenNu2"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-secondary/30 hidden md:block pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Atelier Philosophy */}
        <section className="bg-surface-container py-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div {...fadeUp}>
                <h2 className="font-headline-lg text-headline-lg text-secondary mb-8">Three Decades of Craftsmanship</h2>
                <p className="font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                  Our atelier in Northern Italy remains the heart of our operations. Here, traditional weaving techniques meet modern engineering to create textiles that are as durable as they are beautiful. We don&apos;t just manufacture; we curate atmospheres.
                </p>
              </motion.div>
              <motion.div 
                {...fadeUp}
                className="flex justify-end"
              >
                <div className="w-full md:w-3/4 aspect-video bg-primary-container border border-secondary/10 relative group overflow-hidden rounded-xl">
                  <img 
                    alt="Craftsmanship" 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP194glPOdcpZ0Ib-6GDusBsovk_W7yEruYyTdxVA8YoYXaDcFdRI23StsQbxbrl_IHeki92ruibPQyjV3T1InsFELogqtD1aXTFGunFLuFdp49QTRPD-2SoC1MJDGYzeu7Ms-zvr3mJiVxwHKYrzVNLpb_ErgHFCtBBG4TkRwLTcUYr_gHuT4-CLhqP5j_6qnSzuhQtkcjmxRpuoWMVE5jEpPrzPoCpF4VKd0UhFhh0xPRkqscfwgTmJz3rL2_RtcAno4X66kCo7x"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {[
              { title: "Precision", desc: "Every stitch is measured to the millimeter. Our technical specs are designed to meet the rigorous demands of hospitality and high-end residential projects.", icon: "architecture" },
              { title: "Passion", desc: "We are driven by the tactile joy of premium materials. From the weight of the drape to the sheen of the velvet, every detail is a labor of love.", icon: "favorite" },
              { title: "Purpose", desc: "Our goal is to enhance the human experience within built environments. Sustainability and ethical sourcing are core to our manufacturing DNA.", icon: "lightbulb" }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="initial"
                whileInView="whileInView"
                className="p-10 md:p-12 border border-secondary/10 bg-surface-container-low hover:border-secondary/30 transition-all duration-500 group rounded-xl"
              >
                <span className="material-symbols-outlined text-secondary text-4xl mb-8">{value.icon}</span>
                <h3 className="font-headline-md text-secondary mb-4">{value.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
                <div className="mt-8 h-px bg-secondary/10 group-hover:bg-secondary/40 transition-all w-16"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop text-center border-t border-secondary/10">
          <div className="max-w-2xl mx-auto space-y-12">
            <motion.h2 {...fadeUp} className="font-headline-lg text-on-surface">Experience Volanetti Excellence</motion.h2>
            <motion.div 
              {...fadeUp}
              className="flex flex-col md:flex-row justify-center gap-6"
            >
              <button className="bg-secondary text-on-secondary-fixed px-12 py-5 font-label-caps uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all shadow-lg">
                Request Swatches
              </button>
              <Link href="/collections" className="border border-secondary text-secondary px-12 py-5 font-label-caps uppercase tracking-widest hover:bg-secondary hover:text-on-secondary-fixed transition-all text-center">
                View Collections
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
