"use client";

import { motion } from "framer-motion";
import { lineRevealVariants } from "@/lib/animations";
import React from "react";

interface LineRevealTextProps {
  text: string;
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  containerClassName?: string;
  staggerDelay?: number;
}

/**
 * Architectural Typography Component
 * Reveals text line by line from bottom to top with stagger delay
 * Perfect for Playfair Display headlines
 */
export function LineRevealText({
  text,
  className = "",
  tag: Tag = "h2" as keyof React.JSX.IntrinsicElements,
  containerClassName = "",
  staggerDelay = 0.1,
}: LineRevealTextProps) {
  // Split text into lines by natural breaks
  const lines = text.split("\n").filter((line) => line.trim());

  // If single line, treat as one unit
  if (lines.length === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={containerClassName}
      >
        <Tag className={className}>{text}</Tag>
      </motion.div>
    );
  }

  // Multi-line reveal
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={containerClassName}
    >
      <Tag className={className}>
        {lines.map((line, index) => (
          <motion.div
            key={`${index}-${line}`}
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: (idx: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * staggerDelay,
                },
              }),
            }}
            className="inline"
          >
            {line}
            {index < lines.length - 1 && <br />}
          </motion.div>
        ))}
      </Tag>
    </motion.div>
  );
}

/**
 * Inline Line Reveal - for text that flows normally
 * Useful when you need word-wrapping instead of explicit breaks
 */
export function InlineLineRevealText({
  text,
  className = "",
  tag: Tag = "p" as keyof React.JSX.IntrinsicElements,
  containerClassName = "",
}: Omit<LineRevealTextProps, "staggerDelay">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={containerClassName}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}
