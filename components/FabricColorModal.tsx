"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FabricColor {
  name: string;
  hex: string;
}

interface FabricColorModalProps {
  isOpen: boolean;
  color: FabricColor | null;
  imageSrc: string;
  onClose: () => void;
}

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function FabricColorModal({
  isOpen,
  color,
  imageSrc,
  onClose,
}: FabricColorModalProps) {
  if (!color) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex flex-col items-center md:items-center justify-start md:justify-center bg-background/95 backdrop-blur-md p-4 pb-48 md:p-12 md:pb-64 overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-on-background/10 bg-surface-container-low/60 flex items-center justify-center hover:bg-on-background/10 text-on-background transition-colors z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Modal Content Container */}
          <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
            {/* Left: Fabric Image with Color */}
            <motion.div
              key={color.hex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-1/2 h-40 md:h-auto md:aspect-square rounded-xl overflow-hidden border border-secondary/10 bg-surface-container-lowest flex-shrink-0 relative"
            >
              {/* Color Background */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: color.hex }}
              />

              {/* Fabric Image */}
              <img
                src={imageSrc}
                alt={color.name}
                className="w-full h-full object-cover mix-blend-multiply"
                style={{
                  mixBlendMode: "multiply",
                  filter: "grayscale(100%)",
                }}
              />
            </motion.div>

            {/* Right: Color Information */}
            <motion.div
              key={`info-${color.hex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: luxuryEase, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-1/2 space-y-3 md:space-y-6"
            >
              {/* Title */}
              <div>
                <p className="text-xs text-on-surface-variant mb-3 uppercase tracking-[0.2em] font-label-caps">
                  Fabric Color
                </p>
                <h2 className="font-display-lg text-[0.21875rem] leading-[0.7] md:text-[0.5625rem] text-on-background">
                  {color.name}
                </h2>
              </div>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-secondary/40" />

              {/* Hex Code */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 md:w-20 md:h-20 rounded-lg border border-outline/30 shadow-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <code className="font-mono text-lg font-semibold text-on-background block">
                      {color.hex}
                    </code>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Experience the richness of our premium fabric collection. This color showcases how the textile's natural texture is beautifully enhanced with carefully selected hues, creating authentic and sophisticated visual representations.
              </p>

              {/* Color Details Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 pt-1 md:pt-4">
                <div className="space-y-2 p-3 rounded-lg bg-surface-container-low/50">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                    Blend Mode
                  </p>
                  <p className="text-sm font-semibold text-on-background">
                    Multiply
                  </p>
                </div>
                <div className="space-y-2 p-3 rounded-lg bg-surface-container-low/50">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                    Effect
                  </p>
                  <p className="text-sm font-semibold text-on-background">
                    Grayscale
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
