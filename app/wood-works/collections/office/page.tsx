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

export default function OfficeCollectionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full flex items-center justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0.95 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full h-full object-cover" 
              src="/office.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="max-w-2xl space-y-6"
            >
              <span className="font-label-caps text-secondary tracking-[0.3em] uppercase text-sm">Executive Series</span>
              <h1 className="font-display-lg text-4xl md:text-7xl text-on-surface leading-tight">Office</h1>
              <p className="font-body-lg text-on-surface-variant/80 max-w-lg leading-relaxed">
                Where architectural precision meets bespoke craftsmanship. Our office collection is engineered for the modern visionary who demands excellence in every detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Bento Grid */}
        <section className="py-24 md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Primary Product: Walnut Office Desk */}
            <motion.div {...fadeUp} className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-surface-container-low border border-secondary/10 rounded-xl p-1 shadow-2xl">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC_WHdivJiQZ4Sip9RZqVsaPbCmuPJ774TSrh9KaS5jUVts_auQvHxF41boTRsDJDUIba3cbRmY0Jv_K2FvupDVEn8GBKSkgIuMNHMmom0p5vJfghSSvN898Us7gSk_jmF_VEOegv1tDmmzwOBUUoygV9FPAy5_qfdOJMaLiGPuFyVSE0DZI-gSNEG_3BjoPzsPXUGjtR4GOyoUJC8hkVXeEbgzUKfldQ5cbhIAxK2iG3TW7Z0_4RR2fg2gbHagSNLdhgFCZLOA3UZ"
                />
              </div>
              <div className="p-8 md:p-10 space-y-4">
                <h3 className="font-headline-md text-2xl md:text-3xl text-secondary">Walnut Office Desk with Black Epoxy River and Metal Legs</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
                <p className="text-on-surface-variant font-body-md leading-relaxed text-sm md:text-base">
                  This modern walnut office desk features a bold black epoxy river flowing through the center, creating a striking blend of natural beauty and contemporary design. Handcrafted for durability and style.
                </p>
                <button className="mt-4 flex items-center gap-2 text-secondary font-label-caps uppercase tracking-widest text-xs group/btn">
                  Technical Specs 
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </motion.div>

            {/* Side Product: Blue Epoxy Shelves */}
            <motion.div {...fadeUp} className="md:col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-container-low border border-secondary/10 rounded-xl flex-1 group overflow-hidden shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtG-HBxVcz10fUr2IFo6z8KChh29h7Xwyc4BiEZaiPpbukvudYmnVXnhoG5N2fRCThsEiG2cVn2As6JHoitV-ALArHRJ9FRwknnPl1GntF0Og8X3gAlYm3TQ7UsVurguyCYFoOpqxx_62sc4AuFsBlfEPm_AOfevLpHFdXXzPscUUlhwMK8iyWRNY6rIG6lfHyrGLOjXUwgcGxM6Tqhm1808PkygOnDEJaqBqfHXdvhcq-mUC9NoqIGvR1e3Tz1TlF1CVX42tCgopR"
                  />
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-xl md:text-2xl text-secondary leading-tight mb-4">Wooden Shelves with Blue Epoxy Inlay</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Add a touch of modern elegance to your space with these handcrafted floating wooden shelves featuring stunning blue epoxy inlays.</p>
                </div>
              </div>
            </motion.div>

            {/* More Products */}
            <motion.div {...fadeUp} className="md:col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-container-low border border-secondary/10 rounded-xl flex-1 group overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw3DdhCl828K1Zz7YIruoDC-IUQ1ws3wbi_s2KfCnKHLAOfGt4xLhXpYM4Zp1JfAHsxTicdwEgXQdCJXvRTXYgXk2EPtC-AyT5o2XiSiWNQBAebhDziDLLwirEmOi5I3Kx-DJ90qncZP3XFyfRSTVLCtlOscRrDYkSdtnU6D-HXwNfCsWMP_9oVBCGP3onxncKAUOpNgOI4EIqghyJPGJzPf5BCqz2-r4TTwt9iOFCUlFSaUcJy7O7_XcdQCmL9l3He6LYHvKS4M0w"
                  />
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-xl md:text-2xl text-secondary leading-tight mb-4">Light Brown Floating Shelves – Beige Inlay</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Enhance your office décor with these stunning light brown wooden floating shelves featuring elegant beige epoxy inlays.</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-surface-container-low border border-secondary/10 rounded-xl p-1 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="aspect-square overflow-hidden h-full relative z-0">
                  <img 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqWvWLcDo4IS-OVmRK8iFKsfqs92xR209_9H4AbK8kQSPdHCdFZrub6e4C3Dv5HCdpWFvWUsNZaQBDgixK-ZpsvrC2fBrAauMShKDGe-ULCdNnxYjW0JPYboJDt48xpDoIwpD8l9KSRwUYVU6hNhGs9Icy5rDg3rd8WPsdLXQHAQCYYVhlQdny_fH_FieMX1TUvbulI59LOfyGhkDfonrAa8wY-_B1Jdh8utnGnCFFKGGUhV3LrcqRm7ibUrYEwURVwE7wpDZGA_W"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center relative z-10 bg-surface-container-low">
                  <h3 className="font-headline-md text-xl md:text-2xl text-secondary mb-4">Oval Walnut Desk with Black Epoxy River</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent mb-6"></div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">
                    This elegant oval walnut desk features a sleek black epoxy river running through the center, adding a contemporary artistic touch to its warm, natural wood surface.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Large Scale Storage */}
            <motion.div {...fadeUp} className="md:col-span-12 bg-surface-container border border-secondary/10 rounded-xl overflow-hidden group shadow-2xl flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 overflow-hidden h-[400px] lg:h-auto">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ntIdIO1xJqpFwa_yEYaO52fQxgLbH4nKupf_InAPuTY9YFIn164uf2rUdbDZgjkWder8GpUdim-aLFJjZLrxuCQx8Owf0h4Evd7qln6OlLWFdvcpSwzvNYHS3aWZBJR6R1NTED1cWbWH7SkPiPeR1XoLoNJci2_V-7EJ3Ltlu8M6UKFhCarNmVzvBGMRL7VyBeAszgJpVczAC_7b5suyLFYWuNDSW1jHBJejz5NejZIkx4zLOJ7F1JWblg4Mxzd__4Z0x0f8djaP"
                />
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <span className="font-label-caps text-secondary/60 tracking-widest uppercase text-xs">Signature Storage</span>
                  <h3 className="font-headline-lg text-2xl lg:text-4xl text-on-surface leading-tight">Mid-Century Modern Light Oak Bookshelf</h3>
                </div>
                <p className="text-on-surface-variant font-body-lg text-sm lg:text-base leading-relaxed">
                  Elevate your home or office with this stunning mid-century modern bookshelf, crafted from light oak for a warm, contemporary feel.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Black Hardware", "12 Open Shelves", "Light Oak", "Hidden Storage"].map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-[10px] lg:text-xs font-label-caps uppercase text-on-surface tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legacy / Stats Section */}
        <section className="py-[120px] bg-surface-container-lowest border-y border-secondary/10 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 blur-[80px]"></div>
              <img 
                className="w-full aspect-[4/5] object-cover rounded-xl border border-secondary/20 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcPNAySRYjA7cxPIYW70R5ImPj6298x4hNMSwFjPwkrJWNRudGwFv2s2HYawPLktLLTD3VgtCbeGDZMko40HtiaX0paGaWYzGx0dCshX0231vcwbuO38ZNBaSecslVonIha5yMSd6MUgdbC9IWrSB_hbtjhMLPFBEZYB1zL7VaFzkjtGCowiH2DuM8vyVsQlBGiTEhKj0javeQxwu_91X_qhNnbUDUufBkZvMXaAA6fQZnsSrsv4PBpgEDHTOP5763s09421unvUnd"
              />
              <div className="absolute bottom-[-20px] right-[-20px] bg-background/90 backdrop-blur-xl p-8 md:p-12 border border-secondary/20 shadow-2xl rounded-xl">
                <div className="text-secondary font-headline-lg text-5xl md:text-7xl leading-none mb-2">25+</div>
                <div className="text-on-surface-variant font-label-caps tracking-widest uppercase text-[10px]">Years of Experience</div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-10">
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
                <span className="font-label-caps tracking-[0.2em] uppercase text-sm">Our Legacy</span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface leading-tight">Decades of Trusted Excellence</h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-lg">
                Our extensive expertise allows us to tackle projects of any size and complexity, always delivering results that exceed expectations.
              </p>
              <ul className="space-y-6">
                {["Superior Workmanship", "Transparent Practices", "Creative Solutions"].map(item => (
                  <li key={item} className="flex items-center gap-4 group">
                    <span className="w-10 h-[1px] bg-secondary group-hover:w-16 transition-all duration-500"></span>
                    <span className="text-[10px] md:text-xs font-label-caps uppercase tracking-widest text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[160px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgD5P6Hz2QZ69Nq4_ju9wfVgTBWsZ-UzodZP2ukgKGjNaiq_T9mzd8iGDqSvlNVFjj03w271bdqU_b9ldwwuOzsknHD4IRM3FwMMSSYEAf6KOSwNpikbg6VL6FBOHfx61CHzXB-bt7rdfvomnk-0Ewx5UE70mfxmekSEqJ4y0FQlX7O7DA3cVzkBnpDzR8zMqWqOO-AzekHUsDvJAOM5buQCQkGIp4kmNmpqDf9GxSUCWUHdM3o-UgphAhkWIVBuQZFiT2CQN36F4"
            />
            <div className="absolute inset-0 bg-background/80"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-3xl space-y-10">
            <motion.div {...fadeUp}>
              <h2 className="font-display-lg text-3xl md:text-5xl lg:text-[56px] text-on-surface leading-tight">Ready to transform your office space?</h2>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">Contact us today to schedule a consultation or to learn more about our executive office solutions.</p>
              <div className="pt-6">
                <Link 
                  href="/contact"
                  className="inline-block bg-secondary text-on-secondary-fixed px-12 py-5 font-label-caps text-xs uppercase tracking-[0.2em] hover:bg-secondary-fixed transition-all shadow-xl"
                >
                  Get A Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
