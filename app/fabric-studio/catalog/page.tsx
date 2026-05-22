"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FabricColorSwatch from "@/components/FabricColorSwatch";
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
          <h1 className="font-display-lg text-[0.625rem] md:text-3xl text-on-background mb-4">Fabric Color Palette</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">Explore our comprehensive range of fabric colors. Interact with the swatches to see how each color transforms the texture of our premium fabric.</p>
        </motion.div>

        {/* Color Swatch Section */}
        <motion.div {...fadeUp}>
          <FabricColorSwatch 
            colors={fabrics}
            imageSrc="/fabric_image.png"
            title="Fabric Colors"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div {...fadeUp} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-outline-variant/30">
          <div className="space-y-3">
            <h3 className="font-headline-sm text-xl text-secondary">Desktop View</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Hover over any color swatch in the 4-column grid to see a detailed preview. Click to select and view detailed information about the color.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-headline-sm text-xl text-secondary">Mobile View</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Scroll through the color swatches horizontally. Tap any color to select it and view a larger preview with the complete color information.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-headline-sm text-xl text-secondary">Color Technology</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Our grayscale fabric image is enhanced with CSS blend modes to show an authentic representation of how each color interacts with the textile.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
