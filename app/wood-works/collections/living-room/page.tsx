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

export default function LivingRoomCollectionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative h-[70vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wIF6ig5sjNatf5zds110L1e04lapT3l3I11jQYUOJCYUvwlN-tQWsCzIyai9nxjL6RQWAtnJIcUjPJ61Ztap1wHjcxQ0Ov9XM6eTm8-Z-OGREqVIPsGd7UVW9S-IgT6BueNPr4vyme0w7FY7F0KAVHC5t4XHnOYl21st5j9XdN_PKeiHI8IuNP4P-5ZV5QaRKeWzRZEy5RaDC4JKIR1LJl_8LifslJkvR7Py5a9rhwgVYbL7zwh64P0y_q0l_FUtXyxjdeZOHH91"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="relative z-10"
          >
            <span className="font-label-caps text-secondary mb-4 block uppercase tracking-[0.4em] text-xs md:text-sm">Curated Spaces</span>
            <h1 className="font-display-lg text-4xl md:text-7xl text-on-surface max-w-4xl mx-auto leading-tight">Living Room</h1>
            <p className="font-body-lg text-on-surface-variant mt-6 max-w-2xl mx-auto leading-relaxed">
              Where architectural precision meets the warmth of bespoke craftsmanship. Discover our latest manufacture of artisanal seating and surfaces.
            </p>
          </motion.div>
        </header>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 space-y-24 md:space-y-32">
          
          {/* Bento Grid Section 1 */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Product 1: Elegant Nested Coffee Tables */}
            <motion.div {...fadeUp} className="md:col-span-8 group cursor-pointer">
              <div className="relative aspect-video overflow-hidden border border-secondary/10 bg-surface-container-low rounded-xl shadow-2xl">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBncK8fBy58DaaSqLcVluPFPWR-1WltXLkdXGoT3lx7qDaXdlxsEzPU5XvHG7r2LBwi7P2TzbIqIpF3bm-BUatTZgp67zpYEBRp_hbdbQT4c6DmDWnF0AfRfzGM9z_kWJPYqGbj5XBoWQsOk5Y8zcrfpceytme6ewoEPzc9ZlME6tdcU-r_9PswK6huqpnWUspAoSdPmr_uXsIf6GckB5Z1mY-TDdjYEKGQlwLzKsZ2CKO17084cXNnAeNztZh6cOYz55049xONOYmy"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-background/90 border border-secondary/20 text-secondary font-label-caps text-[10px] px-3 py-1 uppercase tracking-widest">OAK & EPOXY</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="max-w-xl">
                  <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-2">Elegant Nested Coffee Tables with Cream Epoxy and Natural Wood Grain</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">
                    A sophisticated pairing that maximizes utility without sacrificing visual weight. The cream epoxy inlay creates a fluid, organic contrast.
                  </p>
                </div>
                <button className="font-label-caps text-secondary border-b border-secondary pb-1 text-xs uppercase tracking-widest hover:pr-4 transition-all">View Specs</button>
              </div>
            </motion.div>

            {/* Product 2: Walnut Bench */}
            <motion.div {...fadeUp} className="md:col-span-4 group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border border-secondary/10 bg-surface-container-low rounded-xl shadow-2xl">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhMTEqgTtE1cv1jExMA78DvvFdRAV__aiaUuzw9JbaGXe7baeOFJ_-rrS-wfi66eja7feQlR2UvfTbhF8nNrAihZTVE0GGrKCkEMl0ZvRDWKq2wBG0ttSwGGF47mZNBlA1U1C7W-akCZcVaPTem0ifcl5N3oFoep4UfREa5HKyI61FZ2CWU-pt3plcDgYOJBoGgHdGjFrIk6LfBAHfGyjsyOqD1oWEiqZ9DHMTXqcwPu4U6fJFQ_wE1knBkEP1FJz2PxuqkjmY6wZ"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-headline-md text-xl md:text-2xl text-on-surface mb-2">Walnut Bench with Gray Epoxy Inlay and Hairpin Legs</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">Industrial elegance redefined. A statement piece for hallways or living areas.</p>
              </div>
            </motion.div>
          </section>

          {/* Feature Spotlight */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center border-y border-secondary/10 py-16">
            <motion.div {...fadeUp} className="md:col-span-5 order-2 md:order-1">
              <span className="font-label-caps text-secondary mb-4 block text-xs tracking-widest">DETAIL WORK</span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-6 leading-tight">Handcrafted Wooden Tissue Box Holder</h2>
              <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                Elevating the everyday. This piece features precision-carved structural stripes that highlight the verticality of the grain, finished with a tactile jute bow.
              </p>
              <ul className="space-y-4 mb-10 border-t border-on-surface/10 pt-8">
                <li className="flex justify-between items-center py-2 border-b border-on-surface/10">
                  <span className="text-on-surface-variant font-label-caps text-[10px] tracking-widest uppercase">Material</span>
                  <span className="text-on-surface text-sm">Premium Solid Wood</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-on-surface/10">
                  <span className="text-on-surface-variant font-label-caps text-[10px] tracking-widest uppercase">Finish</span>
                  <span className="text-on-surface text-sm">Matte Sealant</span>
                </li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp} className="md:col-span-7 order-1 md:order-2">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] border border-secondary/10 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4q84YQalixEVMQWfyN1CCE_epI5sExBx4kU8WmAuSOmyI2E-iPQI0gH1Jcejw4ktNLZIT8j2FBostoqqjXgDy1rkgtifWbEtuKeXOn5qLRHyEzqiKmS9bifRRqlmdlSoHaB6nEuCFLXfGu385obqF_7KBKVJoN4inZvHixERgk_rf1PatJ-8CASf9VrRPe2Iy-7L2RbCR9zWSiuqlu6O7BtmMfw8-THv3a2fxqbezhcaEMTUFa_YaWipo_8WjhXuY3zkeboohwpEX"
                />
              </div>
            </motion.div>
          </section>

          {/* Product Grid Row 2 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Product 4 */}
            <motion.div {...fadeUp} className="group">
              <div className="aspect-square border border-secondary/10 overflow-hidden mb-6 relative rounded-xl shadow-xl bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAcfATpH52XsPOMD-UhhS5QSq8dWvMPM4jn-WRlJ8keJBjsx1Wqet0mO50X0IVxy-ULurZBW8cr2NarHaT5A56dHvt-Pg8hdKw6XowbA7MJ5MNe8-3Wo2a6DKasNwlsop7XHxU2hMis1dc2T6kaVDY7f1IsOOZE33DRJPaxXA3A4dA1ThfkW04QVwiFrR5qhHT7U6ldiBm_Rf3wnoOHxpzrxfEjwwertlBJKQIUT9B393fKSE3ul6icrTwSb7dlin13b6rJMCxcBiO"
                />
              </div>
              <h4 className="font-headline-md text-xl text-on-surface mb-2">Set of 3 Wooden Nesting Tables with Turquoise Epoxy River Design</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">A vibrant focal point that marries river flows with geometric precision.</p>
            </motion.div>
            
            {/* Product 5 */}
            <motion.div {...fadeUp} className="group">
              <div className="aspect-square border border-secondary/10 overflow-hidden mb-6 relative rounded-xl shadow-xl bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlWzx_rEZidUsdvx-dAvP7W0JRErq4bVrwAgbUh1ERF0nvuk8nUojgOsem2QUVeK6GTkkpPm-O6EuYtXkV-j3I5f-YJvzu8kc1hxT9gr8zJF6dujHeLl-S7s_IhtnEd3J1VZclUbPWaZVBGukdTG_b03j_NGnd6OqBLoNe_MZdG4uOUit6rO8OvfIfb9uYze49YQ2EcOXkgpdyew8bQZWeSZwbepA3PyriAr8JUYIxUUiEBejKMLJJbrEvRH9YntEDCjXE57WtoR8l"
                />
              </div>
              <h4 className="font-headline-md text-xl text-on-surface mb-2">Live Edge Walnut Coffee Table with Diagonal Brown Epoxy Inlay</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Modern Rustic Centerpiece. Each diagonal inlay is hand-poured.</p>
            </motion.div>

            {/* Product 6 */}
            <motion.div {...fadeUp} className="group">
              <div className="aspect-square border border-secondary/10 overflow-hidden mb-6 relative rounded-xl shadow-xl bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTyhQBd2Jq-tCqjbAkd_29Rf4mWshvJRW8b3wmT6rIKAIyuJYeKX0lPGpMWTaOqgeqCWPSIg8JX5GuArfH88zAdlImcGHTjRnZTb845d24SbyimC2Dn4zf-u6fBNAzTJD3-bJPiiMaZWVwXiUg4gOsNCpyuJE959S38YkYDk8KQtEUQ16rP7is9Ul-_ISbQDrmkO2QitVRwrHDBcEFKb7NQ9oJASs5MshMwbIhO5bVJqissurNOaRAn0PMpcgnl_CQoghMMOAHbRve"
                />
              </div>
              <h4 className="font-headline-md text-xl text-on-surface mb-2">Compact Wooden Folding Coffee Table</h4>
              <p className="font-body-md text-on-surface-variant mb-4 text-sm leading-relaxed">Precision engineered for urban environments where space is at a premium.</p>
              <div className="flex gap-4">
                <div className="bg-surface-container border border-secondary/10 px-3 py-1">
                  <span className="text-secondary font-label-caps text-[10px]">13.5" W × 18" L</span>
                </div>
                <div className="bg-surface-container border border-secondary/10 px-3 py-1">
                  <span className="text-secondary font-label-caps text-[10px]">28" HEIGHT</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Final Major Showcase */}
          <section className="border-t border-secondary/10 pt-24 md:pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div {...fadeUp} className="relative h-[400px] md:h-[500px] border border-secondary/10 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBETHv3dSCHwYfkbrTZvXqsUVz56hZaeCSp4aAj2YsOzOVyydomVryqBFSRDtgiaIcFS2kZmXtw9PXCz6CaRT01mryvxzk7gIN1mg9yDRqSsxDuZy_AzcRGCT2En-ExGwKgnXfmei7q0NtXCZEV0NOAvo1255SmJyqI-HzVvgPNCVM-c7mrgU7Jh4uImkZlsb6xJ0ObxrC3ec5gsn-pWqdE7dRM6e5PbTvuXMnLUKzCyd466Ix0FqPR3L1rlEDjaAY65WaxXbA6eegU"
                />
              </motion.div>
              <motion.div {...fadeUp} className="md:pl-12">
                <h3 className="font-headline-lg text-2xl md:text-4xl text-on-surface mb-6 leading-tight">Natural Live-Edge Wood Coffee Table with Tapered Legs</h3>
                <p className="font-body-lg text-on-surface-variant mb-8 text-sm md:text-base leading-relaxed">
                  A masterclass in contrast. The heavy, unrefined presence of the live-edge timber is elevated by the needle-sharp precision of tapered black steel.
                </p>
                <button className="bg-secondary text-on-secondary-fixed px-10 py-4 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-fixed transition-all">Download Technical Specs</button>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-surface-container-lowest border border-secondary/10 rounded-2xl py-24 text-center shadow-2xl overflow-hidden relative">
            <motion.div {...fadeUp} className="relative z-10">
              <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-6 leading-tight">Ready to transform your indoor space?</h2>
              <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Our design consultants are available to help you specify the perfect materials and finishes for your architectural project.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link href="/contact" className="bg-secondary text-on-secondary-fixed px-12 py-4 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-fixed transition-all">Request Catalog</Link>
                <Link href="/contact" className="border border-secondary text-secondary px-12 py-4 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary/10 transition-all">Book a Consultation</Link>
              </div>
            </motion.div>
            <div className="absolute top-0 right-0 opacity-5 select-none pointer-events-none">
              <div className="font-display-lg text-[150px] leading-none tracking-tighter">VOLA</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
