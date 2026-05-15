"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import fabrics from "@/data/fabrics.json";

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: luxuryEase }
};

export default function FabricCatalog() {
  return (
    <div className="bg-background text-on-background min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="mb-16"
        >
          <nav className="flex items-center gap-2 text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest text-[10px]">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <Link href="/fabric-studio" className="hover:text-secondary">Fabric Studio</Link>
            <span>/</span>
            <span className="text-secondary">Catalog</span>
          </nav>
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-background mb-4">Fabric Catalog</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">A comprehensive selection of our finest architectural textiles. Filter by material or explore our complete inventory.</p>
        </motion.div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {fabrics.map((fabric) => (
            <motion.div 
              key={fabric.id}
              {...fadeUp}
              className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hairline-border hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-surface-container-highest">
                <img 
                  src={fabric.image} 
                  alt={fabric.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase">{fabric.category}</span>
                </div>
              </div>

              {/* Details Container */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-md text-xl text-on-surface group-hover:text-secondary transition-colors">{fabric.name}</h3>
                    <p className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest uppercase mt-1">{fabric.code}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div 
                    className="w-8 h-8 rounded-full border border-secondary/20 shadow-inner" 
                    style={{ backgroundColor: fabric.hex }}
                  ></div>
                  <span className="font-body-md text-sm text-on-surface-variant">{fabric.hex}</span>
                </div>

                <button className="mt-4 w-full py-3 hairline-border text-on-background font-label-caps text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-on-secondary-fixed transition-all">
                  Request Sample
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Pagination Placeholder */}
        <motion.div {...fadeUp} className="mt-20 flex justify-center">
          <button className="px-12 py-4 bg-secondary/10 border border-secondary text-secondary font-label-caps uppercase tracking-widest hover:bg-secondary hover:text-on-secondary-fixed transition-all">
            Load More Materials
          </button>
        </motion.div>
      </div>
    </div>
  );
}
