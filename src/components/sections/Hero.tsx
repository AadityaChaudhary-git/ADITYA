
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import canvasConfetti from "canvas-confetti";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  } as const;

  const celebrate = () => {
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#FFD84D", "#FF6B6B", "#B79DFF", "#C9F27B", "#8ED8FF"],
    });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center px-6 py-20 max-w-7xl mx-auto w-full border-b-4 border-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-start space-y-6 md:space-y-8"
      >
        <motion.div variants={itemVariants} onClick={celebrate}>
          <Badge variant="green" className="active:scale-95 transition-transform">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse inline-block" />
            Open for opportunities
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1">
          <h1 className="font-space text-7xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-neo-black">
            HELLO
            <br />
            I&apos;M{" "}
            <span className="text-transparent [-webkit-text-stroke:3px_var(--neo-black)] font-space">
              ADITYA
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 font-space text-sm sm:text-base md:text-xl font-black uppercase"
        >
          <span className="bg-neo-yellow border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#111111] rotate-[-2deg] inline-block">
            DATA ANALYST
          </span>
          <span className="bg-neo-blue text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#111111] rotate-[2deg] inline-block">
            PYTHON
          </span>
          <span className="bg-neo-purple border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#111111] rotate-[-1deg] inline-block">
            MACHINE LEARNING
          </span>
          <span className="bg-neo-red text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#111111] rotate-[1deg] inline-block">
            PROBLEM SOLVER
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-base sm:text-lg md:text-xl font-bold leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          First-year MCA student passionate about data, Python, SQL, and machine learning.
          I learn by building practical projects, solving problems, and turning data into
          useful insights.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
          <Button variant="yellow" magnetic size="lg" onClick={scrollToProjects}>
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="white"
            magnetic
            size="lg"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Get in Touch <FileText className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex gap-2.5">
            <a
              href="https://github.com/AadityaChaudhary-git"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black p-3 bg-white hover:bg-neo-blue transition-all rounded-[4px] shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111111] active:translate-y-0 active:shadow-[2px_2px_0px_0px_#111111]"
              title="GitHub"
            >
              <GithubIcon className="h-5 w-5 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaditya-chaudhary-3a322b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black p-3 bg-white hover:bg-neo-purple transition-all rounded-[4px] shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111111] active:translate-y-0 active:shadow-[2px_2px_0px_0px_#111111]"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5 text-black" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="font-space text-[10px] font-black uppercase tracking-widest text-neutral-500">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-neutral-500" />
        </motion.div>
      </div>
    </section>
  );
}