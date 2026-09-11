"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingDoodles() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const y1 = useTransform(scrollY, [0, 4000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 4000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 4000], [0, -150]);
  const y4 = useTransform(scrollY, [0, 4000], [0, 250]);
  const y5 = useTransform(scrollY, [0, 4000], [0, -400]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Star (top left) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[5%] left-[4%] text-neo-yellow drop-shadow-[2px_2px_0px_#111111]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9Z" />
        </svg>
      </motion.div>

      {/* Circle (top right) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[12%] right-[5%] text-neo-blue"
      >
        <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
          <circle cx="16" cy="16" r="10" />
        </svg>
      </motion.div>

      {/* Cross (middle left) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[32%] left-[6%] text-neo-red rotate-[15deg]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M4 4L20 20M20 4L4 20" />
        </svg>
      </motion.div>

      {/* Square (middle right) */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[48%] right-[8%] text-neo-purple rotate-[35deg]"
      >
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="4">
          <rect x="2" y="2" width="24" height="24" />
        </svg>
      </motion.div>

      {/* Zigzag (lower left) */}
      <motion.div
        style={{ y: y5 }}
        className="absolute top-[65%] left-[5%] text-neo-green"
      >
        <svg width="48" height="18" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M2 14L10 2L18 14L26 2L34 14" />
        </svg>
      </motion.div>

      {/* Cross (lower right) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[78%] right-[4%] text-neo-red rotate-[-20deg]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M4 4L20 20M20 4L4 20" />
        </svg>
      </motion.div>

      {/* Star (bottom center-left) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[90%] left-[8%] text-neo-yellow scale-[1.5]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9Z" />
        </svg>
      </motion.div>
    </div>
  );
}
