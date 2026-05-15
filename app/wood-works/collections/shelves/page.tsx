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

export default function ShelvesCollectionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzXy00uvR4lnHB2DTtmzroWEOoBbC2tGixYQlhEKZN_at91-sO3HYG0sCZ6s4Mduo3bFzmoAx0LS_T5X4L1R4WCuI7dCJ9A8SbcScyKhEPoyCmBdo8aq86BHub5zUUw88tR1YtWgXmJ4XhW4PdyN43BmHQaPDKXEYdyXrf5kDOzDMdkEU-cNYZvrPr7dquyAYvx4gArevgIuHPhcJSp7eUccfrpnBzBXOub9tL3-RoSZipeJEc3218De-nDP_k_Jf-ILS9ws0jFvp_"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="relative z-10 max-w-4xl space-y-6"
          >
            <h1 className="font-display-lg text-5xl md:text-8xl text-on-surface tracking-tighter">Shelves</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Architectural precision meets functional artistry. Explore our collection of bespoke shelving solutions.
            </p>
          </motion.div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-container-max mx-auto py-24 md:py-[120px] px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Product 1: Large Asymmetric */}
            <motion.article {...fadeUp} className="lg:col-span-8 group">
              <div className="relative overflow-hidden bg-surface-container aspect-[16/9] border border-secondary/10 rounded-xl shadow-2xl">
                <img 
                  alt="Modern Floating Wooden Shelves" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQrT_8f_lC-2c7U-IBaj9-0GPg81mGicAvLJqQC3v5GYGmSptup8N7UD30xD4PtF3AedCtz-FDSTIVbCB71oiflvPPyWGUMlxbtEMT_oVvE7wJ36iqmF82ZS7S-UbiJjcb9aQQPVSUbEU7niv22h97bjIIfDFOx6Mx8enS_S-FDLQpgBJn86193xK_gckKTcnNQAtB4x9jpjlqRvFxx9ZKIMbTieUG21EcPaZm6jPOgp6F5rKPm_fr1sKd8GWIM86BDxs6n6qZdJmo"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-primary-container/80 backdrop-blur-md border border-secondary/20 px-4 py-1 font-label-caps text-[10px] text-secondary uppercase tracking-widest">Signature Collection</span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-4 leading-tight">Modern Floating Wooden Shelves with Blue Epoxy Inlay</h2>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">
                    Add a touch of modern elegance to your space with these handcrafted floating wooden shelves featuring stunning blue epoxy inlays. Each piece showcases unique wood grain patterns paired with a vibrant epoxy river.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="border-b border-secondary/10 pb-4">
                    <span className="font-label-caps text-[10px] text-secondary block mb-2 uppercase tracking-widest">MATERIAL</span>
                    <span className="font-body-md text-on-surface">Live Edge Walnut & Blue Epoxy</span>
                  </div>
                  <Link href="/contact" className="w-full border border-secondary text-secondary py-4 font-label-caps text-xs uppercase text-center tracking-widest hover:bg-secondary hover:text-on-secondary-fixed transition-all">
                    Enquire Details
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Product 2: Side Column */}
            <motion.article {...fadeUp} className="lg:col-span-4 group flex flex-col">
              <div className="relative overflow-hidden bg-surface-container aspect-[3/4] border border-secondary/10 rounded-xl shadow-2xl">
                <img 
                  alt="Light Brown Wooden Floating Shelves" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE-S3khv36xwIW0J4x625zd-dxoUBTHSi_IUuHnTTxr0lWMuBXirMoyh9Gy6XjI0nVKTnV-uTCrqh_yfmE5lp5cgXeMC-BGpFLiQ0uDVrTDXE0FlxEEWSPcpG9fns1Cnoo9EByBwgLJjlQMd7M2NHcXF9BS918eqKEvkurcsluf-fqJIag0dkTZ2J-48N8eETJO_oB0VwvgrPFdQ3KKAKpTc2e2o8defFjRy3F_dwn4M8dbIrS8f1G1urbHBBxuYp4EzZFFBWFdDKS"
                />
              </div>
              <div className="mt-8">
                <h2 className="font-headline-md text-xl md:text-2xl leading-tight text-on-surface mb-4">Light Brown Shelves with Beige Epoxy Inlay</h2>
                <p className="font-body-md text-on-surface-variant line-clamp-4 mb-6 leading-relaxed text-sm">
                  Enhance your office décor with these stunning light brown wooden floating shelves featuring elegant beige epoxy inlays. Combining natural wood grain with smooth, modern epoxy design.
                </p>
                <button className="group/btn flex items-center gap-3 font-label-caps text-xs text-secondary uppercase tracking-widest">
                  View Specifications
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </motion.article>

            {/* Product 3: Full Width Editorial Style */}
            <motion.article {...fadeUp} className="lg:col-span-12 mt-12 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-t border-secondary/10 pt-16 md:pt-24">
              <div className="order-2 lg:order-1">
                <span className="font-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block text-xs">Focal Points</span>
                <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-6 leading-tight">Modern Coastal Fireplace Mantel with Pink Epoxy Accent</h2>
                <p className="font-body-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed text-sm md:text-base">
                  This modern coastal-style fireplace mantel blends natural elegance with a vibrant touch. The light oak beam features a striking pink epoxy inlay, adding a bold artistic flair to any room.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-secondary text-on-secondary-fixed px-10 py-4 font-label-caps text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-secondary/10"
                >
                  Request Custom Quote
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-secondary/20 hidden md:block"></div>
                <div className="relative overflow-hidden aspect-video border border-secondary/10 shadow-2xl rounded-xl">
                  <img 
                    alt="Modern Fireplace Mantel" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTJqzov_pgy6wG8mjjqp0KEDB30AX6fxTsWQmq7z8urv9fKM_lw2d0idUje5zfuQbBgf4OmJ6USUeS5NPib1mn0QlaaG8k2-pdYuz_lmGT_vC8lac1NC8amEItEcteIT4UOcRFspxNmuGAwJ6H-vLvsuVhl6-BdFK07pOLQ8jGKnR8GjjzUwpqC3T5UOZLaSSQ7TyWqbUDGizvQhA7JZ0Fp3pADV1bTUNpPBjWcgoG07Asyr2D27HOR0izXvrCvMyfk4pHrPoYNNBw"
                  />
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-container-lowest py-32 text-center border-t border-secondary/10 overflow-hidden relative">
          <motion.div {...fadeUp} className="max-w-container-max mx-auto px-margin-mobile relative z-10">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-8">Ready to transform your indoor space?</h2>
            <Link 
              href="/contact"
              className="inline-block bg-secondary text-on-secondary-fixed px-12 py-5 font-label-caps text-xs md:text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-2xl shadow-secondary/10"
            >
              Get A Free Quote
            </Link>
          </motion.div>
          <div className="absolute bottom-0 right-0 opacity-5 select-none pointer-events-none">
            <div className="font-display-lg text-[200px] leading-none tracking-tighter">SHELVES</div>
          </div>
        </section>
      </main>
    </div>
  );
}
