"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isFabricStudio = pathname.startsWith("/fabric-studio");
  const isWoodWorks = pathname.startsWith("/wood-works");

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-secondary/20 h-20">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        {/* Logo Left */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
          <Link href="/" className="font-playfair font-bold text-secondary tracking-tighter uppercase text-[28px] min-[375px]:text-[30px] whitespace-nowrap z-50 block">
            Volanetti
          </Link>
        </motion.div>
        
        {/* Desktop Menu Center/Right */}
        <div className="hidden md:flex items-center gap-10 lg:gap-16">
          <div className="flex items-center gap-8 lg:gap-12">
            {isFabricStudio ? (
              <>
                <Link href="/fabric-studio/catalog" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname.includes('/catalog') ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Catalog</Link>
                <Link href="/fabric-studio/about" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname.includes('/about') ? 'text-secondary border-b border-secondary pb-1' : ''}`}>About</Link>
                <Link href="/fabric-studio/contact" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname.includes('/contact') ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Contact</Link>
              </>
            ) : isWoodWorks ? (
              <>
                <Link href="/wood-works/collections" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname.includes('/collections') ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Collections</Link>
                <Link href="/wood-works/gallery" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname.includes('/gallery') ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Gallery</Link>
                <Link href="/contact" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname === '/contact' ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Contact</Link>
              </>
            ) : (
              <>
                <Link href="/fabric-studio" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname === '/fabric-studio' ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Fabric Studio</Link>
                <Link href="/wood-works" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname === '/wood-works' ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Wood Works</Link>
                <Link href="/about" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname === '/about' ? 'text-secondary border-b border-secondary pb-1' : ''}`}>About</Link>
                <Link href="/contact" className={`font-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 ${pathname === '/contact' ? 'text-secondary border-b border-secondary pb-1' : ''}`}>Contact</Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 border-l border-secondary/20 pl-10 lg:pl-16">
            <Link href="/contact" className="hidden sm:block font-label-caps bg-secondary text-on-secondary-fixed px-6 py-3 hover:opacity-90 transition-all cursor-pointer">
              Trade Access
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Right */}
        <div className="flex md:hidden items-center flex-shrink-0">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary p-2 z-[70] hover:bg-secondary/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-[32px]">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

    </header>
    
    <AnimatePresence>
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[400px] bg-[#0c0f0f] border-r border-secondary/20 z-[65] flex flex-col p-8 pt-24 shadow-[20px_0_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-8">
              {isFabricStudio ? (
                <>
                  <Link onClick={closeMenu} href="/fabric-studio/catalog" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Catalog</Link>
                  <Link onClick={closeMenu} href="/fabric-studio/about" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">About</Link>
                  <Link onClick={closeMenu} href="/fabric-studio/contact" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Contact</Link>
                </>
              ) : isWoodWorks ? (
                <>
                  <Link onClick={closeMenu} href="/wood-works/collections" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Collections</Link>
                  <Link onClick={closeMenu} href="/wood-works/gallery" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Gallery</Link>
                  <Link onClick={closeMenu} href="/contact" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Contact</Link>
                </>
              ) : (
                <>
                  <Link onClick={closeMenu} href="/fabric-studio" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Fabric Studio</Link>
                  <Link onClick={closeMenu} href="/wood-works" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Wood Works</Link>
                  <Link onClick={closeMenu} href="/about" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">About</Link>
                  <Link onClick={closeMenu} href="/contact" className="text-2xl font-label-caps text-on-surface hover:text-secondary border-b border-secondary/10 pb-4">Contact</Link>
                </>
              )}
            </div>

            <div className="mt-auto flex flex-col gap-6">
              <Link onClick={closeMenu} href="/contact" className="font-label-caps bg-secondary text-on-secondary-fixed px-6 py-5 w-full uppercase tracking-[0.2em] shadow-lg text-center">
                Trade Access
              </Link>
              <div className="flex justify-center gap-6 text-on-surface-variant/40">
                 <span className="material-symbols-outlined">public</span>
                 <span className="material-symbols-outlined">mail</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}
