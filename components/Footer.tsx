"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-20 border-t border-secondary/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="font-display-lg text-secondary uppercase text-[32px]">VOLANETTI</div>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Crafting architectural excellence through bespoke textiles. Trusted by the world&apos;s leading design firms.
          </p>
          <div className="flex gap-6 mt-4">
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity">public</span>
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity">mail</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 mt-10 md:mt-0 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-secondary mb-2">Company</h5>
            <Link href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">About Us</Link>
            <Link href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Sustainability</Link>
            <Link href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Press Kit</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-secondary mb-2">Trade</h5>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Trade Access</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Material Care</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Order Samples</Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-secondary mb-2">Legal</h5>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Contact</Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-secondary/5">
        <p className="font-label-caps text-[10px] text-on-surface-variant/50 tracking-widest uppercase">
          © 2024 Volanetti Manufacturing Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
