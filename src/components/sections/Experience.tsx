
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const journey = [
  {
    role: "MCA — AI & Data Science",
    company: "Graphic Era University, Dehradun",
    duration: "2026 – 2028 • CURRENTLY 1ST SEMESTER",
    description:
      "Currently pursuing a Master of Computer Applications while building stronger foundations in data analytics, Python, SQL, machine learning, and problem solving.",
    tech: ["MCA", "AI & DATA SCIENCE", "PYTHON", "SQL"],
    color: "yellow" as const,
  },
  {
    role: "BUILDING & LEARNING",
    company: "Independent Projects",
    duration: "CURRENT",
    description:
      "Developing practical projects such as NuroTrack and a growing LeetCode solution repository while strengthening Data Structures and Algorithms fundamentals.",
    tech: ["DATA ANALYTICS", "MACHINE LEARNING", "DSA", "GITHUB"],
    color: "blue" as const,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black relative"
    >
      <div className="mb-20 text-left lg:text-center">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          LEARNING{" "}
          <span className="bg-neo-yellow border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[1deg]">
            JOURNEY
          </span>
        </h2>
      </div>

      <div className="relative min-h-[600px] w-full">
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[8px] bg-neo-black/10 dark:bg-white/10 -translate-x-1/2 rounded-full hidden sm:block" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[8px] bg-neo-black dark:bg-white -translate-x-1/2 rounded-full origin-top hidden sm:block"
        />

        <div className="space-y-12 lg:space-y-8 relative">
          {journey.map((item, idx) => {
            const isEven = idx % 2 === 0;

            const card = (
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 90, damping: 14 }}
              >
                <Card variant="white" shadowColor={item.color} tilt className="relative">
                  <span className="font-space text-xs font-black text-neutral-500 uppercase tracking-widest block mb-1">
                    {item.duration}
                  </span>
                  <h3 className="font-space text-2xl font-black uppercase tracking-wide">
                    {item.role}
                  </h3>
                  <h4 className="font-space text-lg font-black text-neo-black uppercase tracking-wide mb-4">
                    @ {item.company}
                  </h4>
                  <p className="font-inter text-sm font-semibold leading-relaxed text-neutral-600 mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <Badge key={tech} variant={item.color} className="text-[10px] py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );

            return (
              <div
                key={item.role}
                className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full"
              >
                <div className={`w-full lg:w-[46%] ${isEven ? "order-1" : "order-2 lg:text-right"}`}>
                  {isEven ? card : <div className="hidden lg:block" />}
                </div>

                <div className="absolute left-4 lg:left-1/2 h-8 w-8 rounded-full border-4 border-black bg-white -translate-x-1/2 flex items-center justify-center z-10 shadow-[2px_2px_0px_0px_#111111] hidden sm:flex">
                  <div className={`h-3.5 w-3.5 rounded-full ${item.color === "yellow" ? "bg-neo-yellow" : "bg-neo-blue"}`} />
                </div>

                <div className={`w-full lg:w-[46%] ${isEven ? "order-2" : "order-1"}`}>
                  {!isEven ? card : <div className="hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
