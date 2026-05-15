"use client";

import { motion } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: luxuryEase }
};

export default function WoodGalleryPage() {
  return (
    <div className="bg-background text-on-background min-h-screen pt-32 pb-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="mb-20"
        >
          <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase text-sm">Wood Works</span>
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-background mb-8 uppercase">Project Gallery</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A visual showcase of our structural and decorative woodworking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
             <motion.div key={i} {...fadeUp} className="aspect-video bg-surface-container-low rounded-lg hairline-border flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors flex items-center justify-center">
                  <span className="font-label-caps text-secondary/30 text-[10px] uppercase tracking-widest italic">Gallery Image {i}</span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
