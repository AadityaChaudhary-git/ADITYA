
"use client";

import React from "react";
import Marquee from "../ui/Marquee";
import { ArrowUp } from "lucide-react";
import canvasConfetti from "canvas-confetti";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    canvasConfetti({ particleCount: 50, angle: 90, spread: 60, origin: { y: 0.9 } });
  };

  return (
    <footer className="border-t-4 border-black bg-white dark:bg-[#111111] w-full mt-auto relative z-10">
      <Marquee text="LET'S BUILD WITH DATA" speed="slow" variant="yellow" />
      <Marquee text="LEARN • ANALYZE • SOLVE • SHIP" speed="fast" variant="black" outline />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-space text-3xl font-black uppercase text-black dark:text-white">ADITYA</h2>
          <p className="font-inter text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            DATA • CODE • CURIOSITY • © {new Date().getFullYear()}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="border-4 border-black p-3.5 bg-neo-yellow hover:bg-[#ffe066] transition-all rounded-[4px] shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111111] active:translate-y-0 active:shadow-[2px_2px_0px_0px_#111111] flex items-center justify-center cursor-none"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-black" />
        </button>
      </div>
    </footer>
  );
}