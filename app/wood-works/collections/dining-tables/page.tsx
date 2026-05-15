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

export default function DiningTablesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary-container">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0.85 }}
              animate={{ scale: 1, opacity: 0.85 }}
              transition={{ duration: 2, ease: luxuryEase }}
              alt="Dining Tables Hero" 
              className="w-full h-full object-cover" 
              src="/dining.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="max-w-2xl"
            >
              <span className="font-label-caps text-secondary mb-4 block tracking-[0.3em] uppercase text-sm">The Dining Collection</span>
              <h1 className="font-display-lg text-4xl md:text-7xl text-on-background mb-8">Dining Tables</h1>
              <div className="w-24 h-1 bg-secondary"></div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 md:py-40 bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
              
              {/* Product 1: Emerald Green */}
              <motion.div {...fadeUp} className="group">
                <div className="aspect-[4/5] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 relative rounded-xl shadow-2xl">
                  <img 
                    alt="Emerald Green Epoxy Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCohm_096TbU_gPftyrnma7p623N6m0Xfcx2SQ4SdIB7UcZ8o48Z0MEvxpcGlFPvJruys6L4nbsczwLlelQU_76zCtsE-F9DRWbKuspYPN5OEzUAtrINruuibyYBC-iTFfde_YPx6_6IPYo0pYnpDXPOGjfOXaSXLYNmJXLZzg0XXmau-7uxD3ij45Xe_dOtdTOxTH8c725YdEPT9gxyQ7A22O4W34t-saGjfKnrkXfxAmaFYrkfRuiZTW4wfIwXp8H-oNKinvzBdNl"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 bg-background/60 backdrop-blur-md border border-secondary/30 text-secondary font-label-caps text-[10px] tracking-widest uppercase">Unique Edition</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-2xl text-secondary mb-4">Round Live Edge Walnut Dining Table with Emerald Green Epoxy River</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                  This exquisite oval round dining table combines the timeless beauty of solid walnut with a stunning emerald green epoxy river flowing through its center. The live edge design preserves the wood’s natural contours.
                </p>
              </motion.div>

              {/* Product 2: Lavender */}
              <motion.div {...fadeUp} className="group md:mt-32">
                <div className="aspect-[4/5] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 relative rounded-xl shadow-2xl">
                  <img 
                    alt="Lavender Epoxy Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs22u51AKv9gXuaMIcHdCloQ1fhHLQ1_EHur9g76LKvOHW19qvGJbpn11CNsd8Kh6-koVHW6OaRx8-xcW1cxbrbzsDK1rN9Qg3k7yoQfrbpqCEd9-cLKmrrL8Unbi8F6GbWGoc6PoVv8o8VoBqeEFImiwN5OukqYpaUoVK0DtnHM6d7gJQvoufsdAl4fWOYqZ60hUwWDWGHUrmzzPX40x9oDPoWD1His7dMNWegL7AgTHdcCjP4DoBRDtN-6TkPD9btCRuXRRlHW7"
                  />
                </div>
                <h3 className="font-headline-md text-2xl text-secondary mb-4">Round Live Edge Walnut Dining Table with Lavender Epoxy River</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                  This elegant round dining table pairs the warmth of solid walnut with the soft sophistication of a lavender epoxy river. Handcrafted with precision and supported by a sturdy base.
                </p>
              </motion.div>

              {/* Product 3: Rectangular */}
              <motion.div {...fadeUp} className="group md:col-span-2">
                <div className="aspect-[21/9] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 rounded-xl shadow-2xl">
                  <img 
                    alt="Rectangular Gathering Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFH3DnoyKwlkGuFg5cQv2iZOnZNXq7vQT9Q0rM1toHTM-KukyUcOUawG8OZ0bt4F0oToGolvhyoAt5lZzket821MVZ0mw5pjN6yi7QFZQ_JJXSxs738jpqKXwcGcHtXzFpy86FrT2d22p-5jGg7NMn5aH4w8V-e5fQ4_xkaGYCeprt4NEKeZ1RFgJU-0cKnyXEqomEklY66gVPTrwJncQDY1GgEKyEwyQ6IiFv2Io5X0shWHzCKXV63CBYOVTukSf81CBRAmuhwdnw"
                  />
                </div>
                <h3 className="font-headline-md text-2xl md:text-3xl text-secondary mb-4">Rustic Live Edge Rectangular Wooden Gathering Table</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80 max-w-3xl">
                  A stunning rectangular wooden table featuring a smooth, hand-finished surface with natural live edge detailing. Supported by sturdy legs, perfect for family meals or social gatherings.
                </p>
              </motion.div>

              {/* Product 4: Round Gathering */}
              <motion.div {...fadeUp} className="group">
                <div className="aspect-[4/5] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 rounded-xl shadow-2xl">
                  <img 
                    alt="Round Gathering Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl89yhpKNehtKpBAlaPVwADGGHPSz9vWOB8csNy2CSrfWRKLm2QULMrSjrJS3SDapsuWiycTahwuCr-K_4Q8ZiSMv6k_Iacs6TR3q8ryt8z-R9QXM7lkRq069B9nt60azhC5dUOdLF3hLHSkwT4uaiWwC80xpL8C4pFVruK8wxpWPjga6w2ea_4uhmSGqpS9KDOw35Zf4XSWaqzB6u_5n0I2PdjJWhVE_7-oHTaBIelWTWHSlSRzqyCyWleWRNCi2GG_u749417HBD"
                  />
                </div>
                <h3 className="font-headline-md text-2xl text-secondary mb-4">Rustic Live Edge Round Wooden Gathering Table</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                  A beautifully crafted round wooden table featuring a natural live edge design. Its timeless design blends rustic charm with contemporary style.
                </p>
              </motion.div>

              {/* Product 5: Blue River (Large) */}
              <motion.div {...fadeUp} className="group md:col-span-2">
                <div className="aspect-[21/9] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 rounded-xl shadow-2xl">
                  <img 
                    alt="Blue River Centerpiece Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pAVlYngaewVrgK9THTG3T30WUCM7bnY6Te0Eouuov2LiA3OV-Zi-6ZHsHi9n6Yv7L2fKrZ_6yY_-WwidonpdjpRhjCS1ZoDf4hYQskbSkB9gk7p_HggSfO0_Gl0pYDxk1lIZn5J3nfMhG1KbSfVTMKEVod-B05O2tidEutH-EbMpWg4cfaGVvjWTTihiZla3YKimvizMcVqAORVWjLDvnef0bhEgMl9GpK1YIxESEot0NmlKRAwvSw-lyS2LgRHcrejJ5dJbZVGi"
                  />
                </div>
                <div className="max-w-3xl">
                  <h3 className="font-headline-md text-2xl md:text-3xl text-secondary mb-4">Live Edge Walnut Dining Table with Blue Epoxy River Centerpiece</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                    This handcrafted live edge walnut dining table features a stunning blue epoxy “river” running through its center, creating a captivating focal point. Each piece is one-of-a-kind.
                  </p>
                </div>
              </motion.div>

              {/* Product 6: Walnut Farmhouse */}
              <motion.div {...fadeUp} className="group">
                <div className="aspect-[4/3] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 rounded-xl shadow-2xl">
                  <img 
                    alt="Walnut Farmhouse Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiepv9_FohIAD3x5KpbEHJtL137pcSWv07Km0BFx6PWKhXDTpkIQn9XNbEa5Gfrbx583taaWXaUfXq1dwo_DBRYTB0x1Vbw1lgfgB6AmAmcafybLyuQpx2Aqo0oSEk_9N9WpfN9ChyjAfcW9KR01AW0U1TkhXYqq24ntfOdiNOxZ1L_Xh_Lu6Ujkack-NfOrYr9jTFNpJ2OFivANpJhvneFXbRUJCTqN9c2wS_J0vo3_nL3Smogx_07pPor6pjCOaUmwiPcuXoTw-0"
                  />
                </div>
                <h3 className="font-headline-md text-2xl text-secondary mb-4">Solid Walnut Farmhouse Dining Table with Matching Benches</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                  Timeless elegance and warmth with clean lines and a sturdy trestle-style base. Designed for durability and style.
                </p>
              </motion.div>

              {/* Product 7: Oak Farmhouse */}
              <motion.div {...fadeUp} className="group">
                <div className="aspect-[4/3] bg-surface-container-low border border-secondary/10 overflow-hidden mb-8 rounded-xl shadow-2xl">
                  <img 
                    alt="Oak Farmhouse Table" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrsNTG4wveXEyAxWaTwn3RQaWprJwU6AErYqtx9hSIH0L3fnVagOX-KWeIPl0J_Ni1Js9Gtfpsh1FQavR8x8KX2bfYE1eEQoaZMLCiV8kxWsrB6n0o4wKC-1Rn1gvCOJsgfQf1oVk5-kxXMZLG9yIMz1ROB_gP0Nx9JhKblr-pzyn_GJSYACBh4cVW3p5MjEMGGUHhZSEHdiTcoVMWgJjsahIoVk5Czhr07T_qpw_N4r6f63Epb-XQwMbnaeSsV78s8gsZBWDbReNX"
                  />
                </div>
                <h3 className="font-headline-md text-2xl text-secondary mb-4">Solid Oak Farmhouse Dining Table with Matching Benches</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80">
                  Light oak finish highlights natural grain patterns, creating an inviting centerpiece for family meals.
                </p>
              </motion.div>

              {/* Product 8: Modern Inlay (Featured) */}
              <motion.div {...fadeUp} className="group md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-container-low border border-secondary/10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      alt="Modern Oak Inlay Table" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWvzyzk72EEAL3NJfckGNf4M5F3d02XP71BaSLGojG4OuLw3rpiSNfQjXNUE1C-RlZ_Nmn5Y81A1IjaUyfoxKKuvwG2xxfQWFyd5PSwogQ3NZcaJFLVcup9MpTKC1Hb87zI9yxR4RqxZabfI0GRMInEMkIbv-KoG_WqUW_3ecZlt7sEl1BFgmtprSJ2DLM0W7JKDxeIj3Mo-3nOXdHO6V0J5CDIJRECqw8OKbJv94FsDwEte_61TkCePiPslAbWfRTlnDKm30tj0iT"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <span className="font-label-caps text-secondary block mb-6 uppercase tracking-widest text-sm">Contemporary Precision</span>
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-6">Modern Light Oak Table with Ivory Epoxy Inlays</h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed opacity-80 mb-8">
                      Sleek, glossy ivory epoxy inlays set diagonally for a bold, modern look. Blends natural warmth with a sophisticated touch.
                    </p>
                    <Link href="/contact" className="inline-block border border-secondary text-secondary px-10 py-4 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary/10 transition-all">
                      Inquire for Custom Order
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-container-lowest py-32 border-t border-secondary/10 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <motion.div {...fadeUp}>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-6">Ready to transform your dining space?</h2>
              <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                Contact us today to schedule a consultation or to learn more about our bespoke dining solutions.
              </p>
              <Link 
                href="/contact" 
                className="bg-secondary text-on-secondary-fixed px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-fixed transition-all shadow-xl shadow-secondary/10"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 right-0 opacity-5 select-none pointer-events-none">
            <div className="font-display-lg text-[200px] leading-none tracking-tighter">VOLANETTI</div>
          </div>
        </section>
      </main>
    </div>
  );
}
