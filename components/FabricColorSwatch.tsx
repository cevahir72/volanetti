"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FabricColorModal from "./FabricColorModal";

interface FabricColor {
  name: string;
  hex: string;
}

interface FabricColorSwatchProps {
  colors: FabricColor[];
  imageSrc: string;
  title?: string;
}

const luxuryEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function FabricColorSwatch({ 
  colors, 
  imageSrc = "/fabric_image.png",
  title = "Fabric Colors"
}: FabricColorSwatchProps) {
  const [selectedColor, setSelectedColor] = useState<FabricColor>(colors[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleColorSelect = (color: FabricColor) => {
    setSelectedColor(color);
    setIsModalOpen(true);
  };

  const handleDesktopColorSelect = (color: FabricColor) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full space-y-6">
      {/* Desktop Grid View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {colors.map((color, index) => (
            <motion.button
              key={`${color.hex}-${index}`}
              onClick={() => {
                handleDesktopColorSelect(color);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer ${
                selectedColor.hex === color.hex
                  ? "ring-2 ring-secondary shadow-lg"
                  : "opacity-75 hover:opacity-100"
              }`}
            >
              {/* Color Background */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: color.hex }}
              />

              {/* Fabric Image with Mix Blend Mode */}
              <img
                src={imageSrc}
                alt={color.name}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                style={{
                  mixBlendMode: "multiply",
                  filter: "grayscale(100%)",
                }}
              />

              {/* Hover Label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  {color.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {/* Fabric Image with Selected Color - Full Width */}
        <motion.div
          key={selectedColor.hex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low relative"
        >
          {/* Color Background */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: selectedColor.hex }}
          />

          {/* Fabric Image */}
          <img
            src={imageSrc}
            alt={selectedColor.name}
            className="w-full h-full object-cover mix-blend-multiply"
            style={{
              mixBlendMode: "multiply",
              filter: "grayscale(100%)",
            }}
          />

          {/* Color Info Overlay */}
          <motion.div
            key={`info-${selectedColor.hex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4"
          >
            <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
              Selected Color
            </p>
            <h3 className="font-semibold text-on-background text-base">
              {selectedColor.name}
            </h3>
            <code className="text-xs text-on-surface-variant font-mono">
              {selectedColor.hex}
            </code>
          </motion.div>
        </motion.div>

        {/* Color Palette as Bullet Points */}
        <div className="space-y-3">
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-label-caps">
            Select Color
          </p>
          <div className="flex flex-wrap gap-3">
            {colors.map((color, index) => (
              <motion.button
                key={`dot-${color.hex}-${index}`}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group transition-all duration-300 ${
                  selectedColor.hex === color.hex ? "scale-125" : ""
                }`}
                title={color.name}
              >
                {/* Outer Ring for Selected State */}
                {selectedColor.hex === color.hex && (
                  <motion.div
                    layoutId="selectedRing"
                    className="absolute inset-0 rounded-full border-2 border-secondary"
                    style={{ width: 48, height: 48, margin: -4 }}
                  />
                )}

                {/* Color Dot */}
                <div
                  className="w-10 h-10 rounded-full border border-outline/30 shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="bg-surface-container-highest rounded-md px-2 py-1 whitespace-nowrap border border-outline/20">
                    <p className="text-xs font-medium text-on-background">
                      {color.name}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tap to View Details CTA */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 rounded-lg border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-secondary/10"
        >
          View Details
        </motion.button>
      </div>

      {/* Color Modal */}
      <FabricColorModal
        isOpen={isModalOpen}
        color={selectedColor}
        imageSrc={imageSrc}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
