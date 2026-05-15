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

export default function WoodWorksPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main>
        {/* Full-Screen Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: luxuryEase }}
              alt="Volanetti Walnut Dining Table" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB29A_IFw8MjYGnM1amPcWrmmA8oXLpa1g7rFG6hq8mJYdBGdok51cYSqLjS9-q9hz9hW7fXmEnT_kz_yMf2x1cXf2rfKqt3B6XUoDx8xFeepjyrP817mJP_TEUTmSeXA9zNuFkfcqRxy9uJSFz6RaW9eW8k7pdLCInHNPmFw2b0ruEpEqL7kqhGHiqaHAkVhozeO7xjpVxHDGiIy9Jrqkf5Zqj-Mcamefb6A--RNSbYTBg5271LoMdv2axglCDygNvwCBbB8rOkDnR"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
              className="max-w-2xl bg-primary-container/30 backdrop-blur-sm p-8 md:p-12 border-l border-secondary/20"
            >
              <p className="font-label-caps text-secondary mb-6 tracking-[0.2em] uppercase">
                Handcrafted Solid Hardwood
              </p>
              <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface mb-8 leading-tight">
                Furniture Built to Last Generations
              </h1>
              <p className="font-body-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
                Custom dining tables, office furniture & bedroom pieces — crafted from walnut, oak, and maple with architectural precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/wood-works/collections" className="bg-secondary text-on-secondary-fixed px-8 py-4 font-label-caps flex items-center justify-center gap-2 hover:bg-secondary-fixed-dim transition-all uppercase tracking-widest">
                  Explore Collections
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link href="/contact" className="border border-on-surface text-on-surface px-8 py-4 font-label-caps flex items-center justify-center hover:bg-on-surface/10 transition-all uppercase tracking-widest">
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-4">
            <span className="font-label-caps text-[10px] text-secondary/60 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-secondary/60 to-transparent"></div>
          </div>
        </section>

        {/* Bento Grid Highlights */}
        <section className="py-32 bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {/* Feature Large */}
              <motion.div 
                {...fadeUp}
                className="md:col-span-7 group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] border border-secondary/10 rounded-xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Precision Engineering" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgfL6EXK6CDRl2P1f16BjMX0SnuIMxJICn-_7t8PmTFiBHOvzqEVQ9v5TCPrzuHgXN4PjiVuzgPwl5oj2VVlEOdvqzOo1v3faUsr3eNkH_jneaRZwHnciuL0fkqIRRRfiqaScvXC6bqSTmumtHFUbcPIrMFpeoVtcCbsrSFaPER5Plhd55BwgJq38TpR2xdYmCTdJk9o6dCuxj7zPNFg8lQgjkyFy2ECyBJdRMvFqjXOj8CDudkNns8G6Yc4ELuAv60OnbKvGs9MTC"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="mt-8">
                  <span className="font-label-caps text-secondary mb-2 block uppercase tracking-widest">Bespoke Process</span>
                  <h3 className="font-headline-md text-on-surface mb-4">Precision Engineering</h3>
                  <p className="text-on-surface-variant font-body-md max-w-md leading-relaxed">
                    Every joint is a testament to our commitment to structural integrity and timeless aesthetics.
                  </p>
                </div>
              </motion.div>

              {/* Feature Small Stack */}
              <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">
                <motion.div {...fadeUp} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-video border border-secondary/10 rounded-xl">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt="Executive Series" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnqNxJK9ruNGubxATbnjdQRdJxpKwHlzcZkGDHUBqwl20wRLYMWiVDJN_dLodmOD9Wk6RW_lzU3Rr2ROAQzvsvLlnj4IYlMZR6BAfOcn1v5WyxAJ4kPOFcqJVRDCFYJoQNEL8pcuOPg0gKQ0Xue0WGpRhLXgnAJNJ-KGfYZUWliu6wo1tkcWEtBi9LNV6rCKNQf0Bgt2GWeA3E21Ekf6wl3Nt3l37O8uN-FwoAGG8pwPIvXGdC8gqrSWZznpo9JPe8bdXlQKBx1EN"
                    />
                  </div>
                  <div className="mt-6">
                    <h4 className="font-headline-md text-on-surface text-2xl">Executive Series</h4>
                    <p className="text-on-surface-variant font-body-md">Commanding presence for the modern workspace.</p>
                  </div>
                </motion.div>
                <motion.div {...fadeUp} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-video border border-secondary/10 rounded-xl">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt="Material Selection" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnJqczJb8gKoEy5thWLfLRP6PLqOrNdpTaJbkBEMMx74MRgkbmjyRQl6tatVwpggpqCcF43y4KNYNiMfaKtgyMHR3GlZ7HJlMXetwyRjRZmwqNw634adq9ZJ34FzxPUrTCcs6nkPR1DcOspaSiFs31rRc26fqCnVX7h9ipKKYtlSg-w7hH85PQui-0d5cFx5pO2ZiMoymSsfEy8b6TWX13zDK-As5O4LdehlbzLJc2EZ4NOSuL1Re7759YW0kUlWwxtX8hJ84BCri3"
                    />
                  </div>
                  <div className="mt-6">
                    <h4 className="font-headline-md text-on-surface text-2xl">Material Selection</h4>
                    <p className="text-on-surface-variant font-body-md">Sustainably sourced premium hardwoods.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-32 bg-surface-container-low border-y border-secondary/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div {...fadeUp}>
                <h2 className="font-headline-lg text-4xl md:text-5xl mb-8">Technical Excellence</h2>
                <p className="text-on-surface-variant font-body-lg mb-12 leading-relaxed">
                  Our workshop combines traditional joinery techniques with modern CNC precision to create pieces that withstand the test of time.
                </p>
                <ul className="space-y-6">
                  {[
                    { label: "Kiln-Dried Timber", value: "6-8% Moisture Content" },
                    { label: "Finish Options", value: "Natural Oil / Polyurethane" },
                    { label: "Custom Sizing", value: "Up to 14ft Seamless" },
                    { label: "Lead Time", value: "8-12 Weeks" }
                  ].map((spec, idx) => (
                    <li key={idx} className="flex justify-between items-center py-4 border-b border-on-surface/10">
                      <span className="font-label-caps text-xs text-on-surface uppercase tracking-widest">{spec.label}</span>
                      <span className="text-on-surface-variant font-body-md">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                {...fadeUp}
                className="relative"
              >
                <div className="aspect-[3/4] border border-secondary/20 p-4 rounded-xl">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    alt="Master Craftsman" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnSYR1bUb2qs5VzyKH3GubDo3lMTC5uBVhfHQ21OjTF1_raPnXOUcf1Q4-TDaPRUTVGBE4MPpJHGVMDGpJ-T45PcNWNb-fh379C-btIVcym4Qa6odhmVl4xN8u6jEhKYNtE-bneHeEZ2S3Q9rh2V-8vxCImCGYADHgrvzaw52xMtoR0rbgD_A8Gg0a30YEOOU9M6aJx9qP3Pd0e8H8Y6mSyGro6nSto2jdysKNuOxPPEO7clipOwjv18365QShi5bdMHaFxFntknfQ"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-secondary p-8 hidden md:block shadow-2xl">
                  <span className="font-display-lg text-on-secondary-fixed block leading-none text-6xl">25+</span>
                  <span className="font-label-caps text-on-secondary-fixed/80 uppercase tracking-widest text-xs">Years of Heritage</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
