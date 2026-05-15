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

export default function BedroomCollectionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: luxuryEase }}
              alt="Luxury Bedroom Collection" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKnqQcJcPdmCdqt-LGsNDfUkX78B9z2IReTDNJx39prCfTSzkegbM9hdtvIrm_2H1wH4PQiRqSUtW2-IoRVpXxCe_O1yzOazdyT5fattD_bySaDASwzKWdR7FvU3Exl3vvDULxcX8prIGffdbY788pGeNlwxlYslZqWlpZEjtxltWILzBm1pU_yfgb1Ald3vLHfXzSX_UiopJR3YO7zH7ykJyGJFBk90tFeZb0j13aKw4rCQJPlMzNK5AVY9ZzCpwpsBLYvN0DeeGY"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
            >
              <span className="font-label-caps text-secondary mb-4 block tracking-[0.2em] uppercase text-sm">Bespoke Hardwood</span>
              <h1 className="font-display-lg text-4xl md:text-7xl text-on-background max-w-2xl mb-6">
                Bedroom Collections
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                Where architectural precision meets organic artistry. Discover our signature epoxy river inlays and masterfully crafted walnut suites.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-on-secondary-fixed font-label-caps px-8 py-4 hover:bg-secondary-fixed-dim transition-all tracking-widest uppercase">
                  View Lookbook
                </button>
                <button className="border border-secondary/40 text-on-background font-label-caps px-8 py-4 hover:bg-secondary/10 transition-all tracking-widest uppercase">
                  Material Samples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Bento Grid */}
        <section className="py-24 md:py-40 bg-background">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Product 1: The Hero Bed (Large Span) */}
              <motion.div {...fadeUp} className="md:col-span-8 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden h-full flex flex-col md:flex-row shadow-2xl">
                  <div className="md:w-1/2 overflow-hidden h-[400px] md:h-auto">
                    <img 
                      alt="Oak Bed Frame" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYb8LNG7-4NLydduReAtGY-BNzRlTtnGxxyk1_g0qfoC0aM7dsyI4BHhTZz4tZXB3LexFHmaq4Ij2aBBJsV6Z4EPkpJxTVLdX8UpscZtfdAzWjkPmHpDX283P9l8X1zUU-Au3QiIyU8PX5YvDSv-1ov7_5epqEa3rJjkzN1OMyiBRe3tIRgxkEAGnPmOgFhdn3fQrs2zeuhm8MBOF71zYi1x22Y3tXJzezQrIIRiSvBFsjZeAZVUnMghLp2EYm1v6teIkwl0um67Zj"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="font-label-caps text-[10px] text-secondary mb-2 tracking-widest uppercase">Masterpiece Series</span>
                    <h3 className="font-headline-md text-2xl md:text-3xl text-on-background mb-4">Modern Oak Bed Frame with Striking Blue Epoxy River Design</h3>
                    <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">
                      A contemporary bedroom centerpiece featuring a captivating blue epoxy river that flows seamlessly across the headboard and footboard.
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {["TWIN", "FULL", "QUEEN", "KING"].map(size => (
                        <span key={size} className="bg-background text-secondary text-[10px] font-bold px-3 py-1 border border-secondary/20">{size}</span>
                      ))}
                    </div>
                    <button className="mt-auto border-b border-secondary text-secondary font-label-caps text-xs w-fit py-2 hover:tracking-widest transition-all uppercase tracking-widest">
                      Enquire for Sizing
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Product 2: Wardrobe & Mirror */}
              <motion.div {...fadeUp} className="md:col-span-4 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden flex flex-col h-full shadow-2xl">
                  <div className="h-80 overflow-hidden">
                    <img 
                      alt="Walnut Wardrobe" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9by-cl26PgOWz3F4N9LQtfcFamO7fUlhN2eVOctcDyFxnd_4iTaNsfgdUPFuKIaMx0cPauOnzTbsq50lk2lrA7Ii8PSmIDmsMIuoaQgvWz1NH7KOChZj7SaYNs6gBYURl_bNKBKsNSWvZD-_caMNtS7svCtuooTJyxUbQwWpGgyR-EfJG5xGUVotnd1wQiszVhqMxH4VS5q6KBWC3POOhvyqRYYDTSA_jv08PuYX3hJWM7WH4YNH2NYNSML12vV4-6Cti3xwmoHU"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-headline-md text-2xl leading-tight text-on-background mb-4">Walnut Wardrobe with Teal Epoxy Accents & Mirror</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                      Mid-century elegance with minimalist black handles and teal resin inlay detailing.
                    </p>
                    <ul className="text-[12px] space-y-2 text-on-surface-variant border-t border-secondary/10 pt-4 mb-6">
                      <li className="flex justify-between"><span>76″ H x 40″ W x 18″ D</span> <span className="text-secondary">(18" Deep)</span></li>
                      <li className="flex justify-between"><span>76″ H x 40″ W x 24″ D</span> <span className="text-secondary">(24" Deep)</span></li>
                    </ul>
                    <button className="bg-secondary text-on-secondary-fixed font-label-caps py-3 w-full uppercase tracking-widest text-xs">Configure Storage</button>
                  </div>
                </div>
              </motion.div>

              {/* Product 3: Nightstand (Featured Accent) */}
              <motion.div {...fadeUp} className="md:col-span-4 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute top-4 right-4 z-10 bg-secondary text-on-secondary-fixed px-3 py-1 font-bold text-[10px] uppercase tracking-widest">New Release</div>
                    <img 
                      alt="Walnut Nightstand" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPk34z5Gil12JwgERl7fu__BmcH3cwYmH2_8ciPfkKPzBe6u7Fwa2yk5i5OesMfefIvBSfqywctyTBSjMew39ik-hUjutgBb1bO1WszuAm9XMxVy4zcwc66yk0JaqbnFqOHb6xohdvrIXlqpgkel4pBSM4iBzWNRlKNIWjz_hYdYM-6ezP1lkXPQPEw2_0o3NEgUXkSxh7RWgCDXHDmqLkZlEDgJfyDn6Qb-3cF8naNfi5yEjV66ZZwoI2XSJA8kC3E6Dp-zs7JIwD"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline-md text-xl text-on-background mb-3">Walnut Nightstand with Blue Epoxy River</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      Handcrafted with a smooth-glide drawer and open storage shelf. A striking contrast of natural warmth and modern artistry.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-headline-md text-secondary text-2xl">$1,850</span>
                      <Link href="/contact" className="material-symbols-outlined text-on-surface-variant hover:text-secondary transition-colors">arrow_forward</Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Product 4: Dresser (Asymmetric Pattern) */}
              <motion.div {...fadeUp} className="md:col-span-8 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden flex flex-col md:flex-row-reverse h-full shadow-2xl">
                  <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                    <img 
                      alt="Wooden Dresser" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD2ls4pAnkJJkaWGvYoHK8bgUSmc4Dp2SS5dqIXlDzerjYhiuUIfPYPEOSpGwHpgUSJfIzJu5qfcTY1sBSmIqUxzOSi2etcr6ywlBASnag2DeL88lhT216jw-5eQLlIjLo4QBUOowsMkZ4z_zZWpFb87ZkP_uqIeXquTUsj8LwPm0YYWAMcgvk4LlQhhk6PeDWKxvP9wQ7DKko_iEKtH9gr55fuMQtn_Rog0e1igLz1CkoblzU32cA8mOfFjzvMSHbToFZU9mbaPLI"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                    <h3 className="font-headline-md text-2xl md:text-3xl text-on-background mb-4">Mid-Century Modern Dresser with Blue Epoxy Handles</h3>
                    <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                      Elevate your interior with 6-drawer storage featuring striking custom-poured blue handles and a sleek architectural silhouette.
                    </p>
                    <div className="space-y-3 mb-8">
                      {[
                        { label: "48″ Long Dresser", size: "36″ H x 48″ L x 19″ D" },
                        { label: "60″ Long Dresser", size: "36″ H x 60″ L x 19″ D" },
                        { label: "72″ Long Dresser", size: "36″ H x 72″ L x 19″ D" }
                      ].map(spec => (
                        <div key={spec.label} className="flex justify-between border-b border-secondary/10 pb-2">
                          <span className="text-sm">{spec.label}</span>
                          <span className="text-secondary font-bold text-sm tracking-tight">{spec.size}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-auto bg-secondary text-on-secondary-fixed px-6 py-4 font-label-caps text-xs uppercase tracking-widest">Request Finish Samples</button>
                  </div>
                </div>
              </motion.div>

              {/* Product 5 & 6 Row */}
              <motion.div {...fadeUp} className="md:col-span-6 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 h-full shadow-2xl">
                  <div className="h-96 md:h-full overflow-hidden">
                    <img alt="Jewelry Cupboard" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFIq1-u1hygn6l7iO_TzEHbfmDn6E9ceb8-wuGX9UGitB-WdGHv5tQ3AoAayhl8bzgQbqcibRCqtrmYwpTSOlWJhe3ztOF9_wynulgzZ46OV9cvbjyoYeOfLH-Wm61nYnmGZ947t2NIiskLVLHOYAtbP2VLtAFfELoWZlLNVtvqUrCRiEV0AdYwAD2XdlVAjexJ-01JYiUDPxmDxltzbz3Ya9W8NNrmsh_ALWYgh22FIMYTejKvjkOUoHzet3ulbB4t-IK8vPOM3hg" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="font-headline-md text-xl leading-tight text-on-background mb-4">Dark Wood Jewelry Mirror Cupboard</h3>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                      Featuring striking teal epoxy edge detailing and a tilting full-length mirror. A fusion of timeless craftsmanship and modern design.
                    </p>
                    <div className="bg-background/40 p-4 border-l-2 border-secondary mb-6">
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Internal Storage</p>
                      <p className="text-[10px] text-on-surface-variant leading-relaxed">Necklace hooks, ring slots, earring racks, and velvet-lined compartments.</p>
                    </div>
                    <button className="text-on-background border border-secondary/40 px-4 py-3 font-label-caps text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-on-secondary-fixed transition-all">View Interior</button>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="md:col-span-6 group">
                <div className="bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 h-full shadow-2xl">
                  <div className="h-96 md:h-full overflow-hidden order-last md:order-first">
                    <img alt="Makeup Organizer" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMS_e4PUoCxTmHcp27kfZcxQ7m4XWqBTrH1L-UPlznB4521YpwjQ20sy-N8QVUdTFF-sEYPZQ87MXqkCPeFHSOM7n64gqITeLY574c7b06a9JStdycMAQ1e3aAEhJBqg3lfXUSdTQkd4agIj95p8a0o1HJrKPxXoA90-B0k0fLLRxxxRd1wVexhHzVuzqTp1QkZrcYuwFuN3DRxhOBOmUZPcau5pJFtgeWzOPVMmaNbRl16XhMxF3CqtCN2h1vLS18foL9_PkhyS5n" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="font-headline-md text-xl leading-tight text-on-background mb-4">Dark Wood Standing Jewelry & Makeup Cabinet</h3>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                      Mirrored door opens to reveal specialized compartments for perfumes, skincare, and fine jewelry.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="border border-secondary/10 p-3 bg-background/20">
                        <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Height</p>
                        <p className="font-headline-md text-lg text-secondary">65 IN</p>
                      </div>
                      <div className="border border-secondary/10 p-3 bg-background/20">
                        <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Width</p>
                        <p className="font-headline-md text-lg text-secondary">17 IN</p>
                      </div>
                    </div>
                    <button className="bg-secondary text-on-secondary-fixed px-4 py-3 font-label-caps text-[10px] tracking-widest uppercase font-bold hover:opacity-90 transition-all">Order Now</button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Craftsmanship Background" 
              className="w-full h-full object-cover opacity-20 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwOGzYOd_mZjbZrHtzYUs3vFCpnjYIp--ANQVdtG73SKtu-n7hiI7LlUSm04lWTK_DQZfjHw2VvtabsBHRspMWq5P299Ko8S_oOy-verklgWgXCtsIyDUlDgf0sEfGBd4MetF2DSY3kxKxjqP67Ik1IG_rS5wlquE4_L-dayzcJUMvMUaRRb5oQJwcQ87kVAkCHpUPoAOVSVpo1rlIQYjalH41husd-wuJBqTODFcqLHeNuag3e7fTJzkXvDZK525vK1esPkir2aCV"
            />
            <div className="absolute inset-0 bg-background/60"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-background mb-6">Ready to transform your indoor space?</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                Contact us today to schedule a consultation or to learn more about our bespoke bedroom solutions.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-secondary text-on-secondary-fixed px-12 py-5 font-label-caps text-xs font-bold tracking-[0.2em] transition-all hover:scale-105 uppercase"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
