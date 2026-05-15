"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function FabricStudio() {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;600&display=swap');

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* TopAppBar */}
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-secondary/20 h-16 flex items-center justify-between px-margin-mobile"
      >
        <motion.div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary active:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined">menu</span>
          </motion.button>
        </motion.div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-headline-md text-headline-md-mobile uppercase tracking-widest text-secondary">
            VOLANETTI
          </span>
        </div>
        <div className="w-6"></div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-16 pt-32">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            alt="Bespoke Architectural Textiles Hero"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujFXZV9B2XPh1h5lkcDEbTTtJRvodXZ-ynJwyMzzKxyS8QOzlAfZXKd-VoYedGUjSVaX2alI_Epr1sywqa4Dhs9PoQFjIcfQ4NxMuQgG7oQYOdujMtYwrGmpiQqbxqrpA7t0rNpEEvsdjEN_M3F5kLHyWRjQHKbkIgs4JYT4T_GWefWZVn6WijDW1eZjywYpi78sGTq95IDjMwIzFssJkPSrL4FAeeHDFa77n5X3s9APa6UKjueo7r1doQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 px-margin-mobile"
        >
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-secondary mb-4 max-w-sm">
            Bespoke Architectural Textiles
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xs">
            The gold standard for the world&apos;s most ambitious projects.
          </p>
          <div className="flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-secondary text-primary-container font-label-caps uppercase tracking-widest rounded-lg active:scale-[0.98] transition-transform"
            >
              Explore Collections
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-secondary text-secondary font-label-caps uppercase tracking-widest rounded-lg active:scale-[0.98] transition-transform"
            >
              Request Quote
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Product Collections */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-surface"
      >
        <div className="px-margin-mobile mb-8 flex justify-between items-end">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface"
          >
            The Collections
          </motion.h2>
          <motion.a
            whileHover={{ borderBottomColor: "#e9c176", color: "#e9c176" }}
            className="font-label-caps text-secondary uppercase border-b border-secondary/30 pb-1 transition-colors"
          >
            View All
          </motion.a>
        </div>
        <div className="flex overflow-x-auto gap-gutter px-margin-mobile pb-8 snap-x no-scrollbar">
          {[
            {
              name: "Velvet Drapery",
              image:
                "https://lh3.googleusercontent.com/aida/ADBb0uhWODgQ-5eQU7JEYTV5H9S2Sr33YXgwy9FX4_kEPxX2jXyXtvyyBUpVkcFMKUn4sf-LAXh10muj2rx5mEIKlq93kAwDYPSDvx_r1IQbcAIOxNFlKjbGynp6k0w5SyQhMHhE5VcGcB2RKSN4EEZU-p78vDEHrHFr1ZigUU62ocsbOsXqEui1v5wKzqlbKFW1_Tno-hSD52ArG0MK6Pc2MReOqNV2MM7UeNMOzaDOVMYhzsJwmdAb6P9lZaI",
            },
            {
              name: "Linen Curtains",
              image:
                "https://lh3.googleusercontent.com/aida/ADBb0ujIEaf3Dq3PxxGqsDo2B7ANBsGC0FijXlhMOh_02bHquLEU4ULar1HjcXmV_rK_mXwhrQ5PEZTHr4BllKI4peTbwotsVDILQydBRd1ddLk0RusmwauWKHdbhyvJWDYFLIEFze3Wo8El0JKZ-_5M9HaPBgmbwHLJ_qxFOqoVtadOyrN88QuR79VTLM2TUvkeJXnZ0NaaRZPcmCwfDAdQNwWJcddrHLQB-6iy5l0m8HJsJJjzC7fD53yTQwpR",
            },
            {
              name: "Bespoke Services",
              image:
                "https://lh3.googleusercontent.com/aida/ADBb0uj0Jk98SIt9sWuqy93DqpHvo9rxjuJ0jD79rHC_FugmzLJRHNEFvupfYWzRj5v3kGoCyBzill2JKawrdc2E83otJfdkEDOr1kfhDmtF-mmW5A3Z40plI52-wBoP9nnSHE6qKDDXW0LphIE-Z7MOjPzP60iqhzdwTNxh9JEPTkKiUxOuklw5jiNDJdk8G3FdqH7NF0JLtG6FQa6DCAaWf7nMJfvFIj40th6vuEp9GtEyopVrCr09CRnQ1iUL",
            },
          ].map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-none w-72 snap-center group"
            >
              <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg border border-secondary/20">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                  src={collection.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4"
                >
                  <p className="font-label-caps text-secondary uppercase tracking-widest">
                    {collection.name}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Volanetti */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-margin-mobile bg-surface-container-lowest"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-headline-lg-mobile text-headline-lg-mobile text-secondary mb-12 text-center"
        >
          Why Volanetti
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              title: "Competitive Trade Pricing",
              description: "Exclusive wholesale rates for verified partners.",
              icon: "shopping_bag",
            },
            {
              title: "Custom Sizing & Labeling",
              description: "Tailored dimensions to match your project specifications.",
              icon: "straighten",
            },
            {
              title: "Fast Production & Shipping",
              description: "Global logistics infrastructure to meet demanding schedules.",
              icon: "local_shipping",
            },
            {
              title: "Dedicated Account Manager",
              description: "Direct technical support from a specialist.",
              icon: "person",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-secondary/30 rounded-full"
              >
                <span className="material-symbols-outlined text-secondary">{benefit.icon}</span>
              </motion.div>
              <div>
                <h3 className="font-body-lg font-bold text-on-surface mb-2">{benefit.title}</h3>
                <p className="font-body-md text-on-surface-variant">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-surface-container-lowest border-t border-secondary/10 py-16 px-margin-mobile"
      >
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline-md text-headline-md text-secondary mb-6">VOLANETTI</h2>
            <p className="font-body-md text-on-surface-variant max-w-xs mb-8">
              Architectural textiles for the discerning eye. Crafted with precision in our London studio.
            </p>
            <div className="flex flex-col gap-4">
              {["B2B Portal", "Material Specs", "Sustainability", "Terms", "Contact"].map(
                (link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ color: "#e9c176", paddingLeft: "8px" }}
                    transition={{ duration: 0.3 }}
                    className="font-body-md text-on-surface-variant hover:text-secondary transition-colors"
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-secondary/5"
          >
            <h4 className="font-label-caps text-secondary uppercase tracking-widest mb-4">Newsletter</h4>
            <div className="flex border-b border-secondary/30 pb-2">
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/50"
                placeholder="Email Address"
                type="email"
              />
              <motion.button
                whileHover={{ scale: 1.1, color: "#e9c176" }}
                className="text-secondary"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-on-surface-variant/40 font-label-caps text-xs"
          >
            © 2024 Volanetti Fabric Studio. Architectural Textiles.
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
