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

const collections = [
  {
    title: "Dining Tables",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtnYawqEji4alGOHxO25btGUoRyx7T9-VX-DkiGdkLGaHznTOir1icyLMypKDMRN-APgo1HycsxBUMebS3DDxGvO4m6qA8JoMlBkREeWtKBYkuTboOmPGuJic8zRcNUiYQLNL8TppZuQ8jLZ60aNg8gs4UeUibenzeVcNjZZ7Lyd5oOFAohOx-TfPD0JVVlsixqpEv_WlmdiRKuqbrbTR3looXWsFj8XPQp9pDB3j6CWDetM6jSpxz0JYOJ7_K4h4QqgKix0Af-Xp6"
  },
  {
    title: "Office Furniture",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJlNmZZ8_7masznzA4OcWaQ6GURl16AXN7eQVa6KjtmX0Kd3wV8baRagFcBo291umi6vtTIUmBK7mo69kdbmcMcC1bzBqnuT4kzso2nv6Dqm3YcQ65e45qzohq9vRRA6VP9964Sx8hpu_vtgQRUtarDghnFgeAKG-EUvFt_gSRYyJGljo_n-dO_NNsKF_Xt_RK4PSA5WFS6ZLYdFF38JA97igRig-N9T9xI6PDhWjUPmBaDjI8_xbnO5gO0l3f-Is1SO3kWT3eYi"
  },
  {
    title: "Bedroom",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwUc7WI8gDwqZm6TMK2VVN1OKSx1f_U8C8UIF66zPo1tDepGeBHPVDedXrTuWXGq-ikIPvtFBzGefz_01J0ICG5xsUlkSGjmF8Fviz0h17j-R2VGEJjnH8ZVmEGWTyfkD5_WcAH3pMOnMEAAVEtJK44ILMCC3iVJrvGjTdGtdY2om6_2dAZVlaN5VmXHeq6yub5KRz7fNJDK9ngEXPoFbwidp-GlVzRX2JyKfhuY669PDjXBGZb9FH8C-ca85qOn8mPiZ0-7kb586g"
  },
  {
    title: "Living Room",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXF6oKnVyiXEg3Fo7PZgstfcb3yrIkWpHfoL4cTMMttmWbAab-kzxpEDuhQe4J7_3RXrpreDK6KcA95j0lh65VrtcP3LhW1DPNIHj-x8jYrd5bOip6bRTTra6kNqeE7ajsYYrYETAHLdj6zev8NvYYISpslGJdVQSDGU36JhK2MXNyCOU5pa2wLqEGuyF07uOMvoF_6o-GSK2mT5B8hMlIexmIZsPFKs81uhVGaT3l5lrp4Nzt7EewAL0bCH0yR7uuE1e0jB-7bkCM"
  },
  {
    title: "Shelves",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpkugN0DoOpA_GHquH-bf-kfB_RzfjmHgvHfMfjTNJzX4-jMRnUcvA0LGfTELu-8hNVmfqixei4WKfEh8WW6qmTJMt6T5qKQRwfd-cmd75hwtXSG0jko0qXu2jytrRg9ifeKnoBuXQmNfP7PH9AxaGEBLAZOLXISSCd_C43BPTiJwWhdFkW2qnvXqG5nDFUjrlxe80DL0EBhCDitLm1Sl5xLrQzeZ99EaoYKoH2w8SKkYu0_qb_KaaXcBBGuSRDJdlJ3QreGaGfZv"
  }
];

export default function WoodCollectionsPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-20">
        {/* Collection Section Header */}
        <section className="py-20 md:py-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="font-headline-lg text-4xl md:text- headline-lg text-on-background mb-6 uppercase tracking-tight"
            >
              Discover Our Collections
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
              className="h-px bg-secondary/30 mx-auto"
            ></motion.div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="pb-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {/* Top Row: 3 items (each spans 2 columns in md:grid-cols-6) */}
              {collections.slice(0, 3).map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="md:col-span-2 group relative aspect-square overflow-hidden cursor-pointer rounded-xl hairline-border"
                >
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="font-headline-md text-white mb-2">{item.title}</h3>
                    <div className="w-0 group-hover:w-full h-px bg-secondary transition-all duration-500 mb-4"></div>
                    <div className="flex items-center gap-2 text-secondary font-label-caps text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Bottom Row: 2 items centered (spacer 1, item 2, item 2, spacer 1) */}
              <div className="hidden md:block md:col-span-1"></div>
              {collections.slice(3, 5).map((item, idx) => (
                <motion.div 
                  key={idx + 3}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="md:col-span-2 group relative aspect-square overflow-hidden cursor-pointer rounded-xl hairline-border"
                >
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="font-headline-md text-white mb-2">{item.title}</h3>
                    <div className="w-0 group-hover:w-full h-px bg-secondary transition-all duration-500 mb-4"></div>
                    <div className="flex items-center gap-2 text-secondary font-label-caps text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="hidden md:block md:col-span-1"></div>
            </div>
          </div>
        </section>

        {/* Technical Excellence Ticker */}
        <section className="py-20 border-y border-secondary/10 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-wrap gap-12 lg:gap-20 items-center justify-center font-label-caps text-[10px] md:text-xs text-on-surface-variant tracking-[0.3em] uppercase opacity-70">
              <span className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Sustainably Sourced Oak
              </span>
              <span className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Architectural Precision
              </span>
              <span className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Hand-Finished Walnut
              </span>
              <span className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Bespoke Dimensions
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
