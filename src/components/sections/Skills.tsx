
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

const categories = ["ALL", "LANGUAGES", "DATA & ML", "BACKEND", "DATABASES", "TOOLS"];

const skills = [
  { name: "Python", category: "LANGUAGES", variant: "red" as const },
  { name: "SQL", category: "LANGUAGES", variant: "green" as const },
  { name: "Java", category: "LANGUAGES", variant: "purple" as const },
  { name: "C++", category: "LANGUAGES", variant: "yellow" as const },
  { name: "JavaScript", category: "LANGUAGES", variant: "blue" as const },

  { name: "Pandas", category: "DATA & ML", variant: "yellow" as const },
  { name: "NumPy", category: "DATA & ML", variant: "green" as const },
  { name: "Scikit-learn", category: "DATA & ML", variant: "blue" as const },
  { name: "Matplotlib", category: "DATA & ML", variant: "purple" as const },
  { name: "Data Cleaning", category: "DATA & ML", variant: "red" as const },
  { name: "Exploratory Data Analysis", category: "DATA & ML", variant: "yellow" as const },
  { name: "Data Visualization", category: "DATA & ML", variant: "blue" as const },
  { name: "Machine Learning", category: "DATA & ML", variant: "green" as const },

  { name: "Flask", category: "BACKEND", variant: "red" as const },
  { name: "REST APIs", category: "BACKEND", variant: "purple" as const },

  { name: "MySQL", category: "DATABASES", variant: "yellow" as const },
  { name: "SQLite", category: "DATABASES", variant: "blue" as const },
  { name: "MongoDB", category: "DATABASES", variant: "green" as const },

  { name: "Git", category: "TOOLS", variant: "red" as const },
  { name: "GitHub", category: "TOOLS", variant: "purple" as const },
  { name: "VS Code", category: "TOOLS", variant: "blue" as const },
  { name: "Excel", category: "TOOLS", variant: "yellow" as const },
  { name: "Google Sheets", category: "TOOLS", variant: "green" as const },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const filteredSkills = activeCategory === "ALL"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black">
      <div className="mb-16">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          TECH{" "}
          <span className="bg-neo-green border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">
            STACK & SKILLS
          </span>
        </h2>
      </div>

      <Card variant="white" className="p-8 md:p-12">
        <div className="flex flex-wrap gap-2.5 mb-10 border-b-4 border-black pb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-space text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 border-2 border-black rounded-[4px] cursor-none transition-all ${
                  isActive
                    ? "bg-neo-black text-white shadow-[2px_2px_0px_0px_var(--neo-bg)] -translate-x-[2px] -translate-y-[2px]"
                    : "bg-white text-black shadow-[3px_3px_0px_0px_#111111] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#111111] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#111111]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div layout className="flex flex-wrap gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                whileHover={{ y: -5, rotate: Math.random() > 0.5 ? 2.5 : -2.5 }}
                className="cursor-none"
              >
                <Badge
                  variant={skill.variant}
                  className="text-sm md:text-base border-4 px-4 py-2 shadow-[4px_4px_0px_0px_#111111]"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Card>
    </section>
  );
}

