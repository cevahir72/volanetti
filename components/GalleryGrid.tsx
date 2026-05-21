"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getGalleryItems, GalleryItem } from "@/lib/galleryData";
import { luxuryEase } from "@/lib/animations";

interface GalleryGridProps {
  initialImages: string[];
}

const CATEGORIES = ["All", "Dining Tables", "Living Room", "Bedroom", "Office", "Shelves"];

export default function GalleryGrid({ initialImages }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  const items = getGalleryItems(initialImages);
  
  // Filter items based on active tab
  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, filteredItems]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx > 0 ? selectedIdx - 1 : filteredItems.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx < filteredItems.length - 1 ? selectedIdx + 1 : 0);
  };

  const activeItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="text-center mb-20"
      >
        <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase text-sm">Wood Works</span>
        <h1 className="font-display-lg text-4xl md:text-6xl text-on-background mb-8 uppercase">Project Gallery</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A visual showcase of our structural and decorative woodworking.
        </p>
      </motion.div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIdx(null); // Reset lightbox index on filter change
              }}
              className={`relative px-6 py-3 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 rounded-full border ${
                isActive
                  ? "border-secondary text-on-secondary-fixed bg-secondary/10"
                  : "border-on-surface/10 text-on-surface-variant hover:text-on-background hover:border-on-surface/30"
              }`}
            >
              {category}
              {isActive && (
                <motion.span
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full bg-secondary/5 -z-10 shadow-[0_0_20px_rgba(233,193,118,0.15)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hairline-border bg-surface-container-low"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Premium Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                {/* Glow bar at top of card bounding box */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                
                <span className="font-label-caps text-secondary text-[10px] tracking-[0.2em] mb-2 uppercase block">
                  {item.category}
                </span>
                
                <h3 className="font-playfair text-xl md:text-2xl text-on-background mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                
                <div className="w-0 group-hover:w-16 h-[1px] bg-secondary/60 transition-all duration-500 mb-4" />
                
                <p className="font-body-md text-xs text-on-surface-variant line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
                  <span className="material-symbols-outlined text-secondary text-sm">fullscreen</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-12 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="absolute top-4 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-10">
              <span className="font-label-caps text-secondary/60 text-xs tracking-widest uppercase">
                {selectedIdx + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-10 h-10 rounded-full border border-on-background/10 bg-surface-container-low/60 flex items-center justify-center hover:bg-on-background/10 text-on-background transition-colors"
                aria-label="Close lightbox"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Lightbox Content Container */}
            <div className="w-full max-w-5xl flex flex-col items-center justify-center h-[75vh] relative mt-10">
              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full border border-on-background/10 bg-surface-container-low/40 flex items-center justify-center hover:bg-on-background/10 text-on-background transition-colors hover:border-secondary/40 group"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined group-hover:text-secondary transition-colors">arrow_back</span>
              </button>

              {/* Main Image Frame */}
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: luxuryEase }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-full max-w-full flex items-center justify-center overflow-hidden rounded-xl border border-secondary/10 bg-surface-container-lowest"
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full border border-on-background/10 bg-surface-container-low/40 flex items-center justify-center hover:bg-on-background/10 text-on-background transition-colors hover:border-secondary/40 group"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined group-hover:text-secondary transition-colors">arrow_forward</span>
              </button>
            </div>

            {/* Captions Block */}
            <motion.div
              key={`captions-${activeItem.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
              onClick={(e) => e.stopPropagation()}
              className="text-center max-w-2xl px-4 mt-6 z-10"
            >
              <span className="font-label-caps text-secondary tracking-[0.2em] text-[10px] md:text-xs mb-2 uppercase block">
                {activeItem.category}
              </span>
              <h2 className="font-playfair text-2xl md:text-4xl text-on-background mb-4 uppercase tracking-wide">
                {activeItem.title}
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                {activeItem.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
