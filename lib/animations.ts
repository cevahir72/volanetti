import { Variants } from "framer-motion";

/**
 * Custom easing curve: cubic-bezier(0.16, 1, 0.3, 1)
 * Provides a luxury, smooth settling effect
 */
export const luxuryEase = [0.16, 1, 0.3, 1] as const;

/**
 * Luxury Loading Effect
 * Used for all page components to create a "slowly settling" sensation
 */
export const luxuryFadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

/**
 * Stagger container for luxury animations
 * Controls timing between child animations
 */
export const luxuryStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Line reveal animation for architectural typography
 * Each line slides up from bottom when entering viewport
 */
export const lineRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: luxuryEase,
      delay: index * 0.1,
    },
  }),
};

/**
 * Smooth slide-in from left (for images and content blocks)
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

/**
 * Smooth slide-in from right
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

/**
 * Scale and fade animation
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};
