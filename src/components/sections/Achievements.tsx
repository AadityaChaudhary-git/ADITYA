
"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Trophy, Code2, BriefcaseBusiness } from "lucide-react";

const achievements = [
  {
    title: "Uttarakhand State Shooting Ball Championship 2022",
    icon: Trophy,
    stat: "3rd",
    suffix: " Position",
    description: "Achieved 3rd Position in the 1st Uttarakhand State Shooting Ball Championship 2022.",
    variant: "yellow" as const,
  },
  {
    title: "LeetCode",
    icon: Code2,
    stat: "200+",
    suffix: " Problems",
    description: "Solved 200+ LeetCode problems covering Python Data Structures and Algorithms and SQL.",
    variant: "blue" as const,
  },
  {
    title: "Deloitte Data Analytics",
    icon: BriefcaseBusiness,
    stat: "COMPLETED",
    suffix: "",
    description: "Completed the Deloitte Data Analytics Job Simulation with practical tasks in data analysis and forensic technology.",
    variant: "red" as const,
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  } as const;

  return (
    <section id="achievements" className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black">
      <div className="mb-20">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          NOTABLE{" "}
          <span className="bg-neo-red text-white border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[1deg]">
            ACHIEVEMENTS
          </span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <motion.div key={achievement.title} variants={itemVariants} className="flex">
              <Card variant="white" shadowColor={achievement.variant} tilt className="flex flex-col justify-between p-6 w-full">
                <div>
                  <div className="flex justify-between items-center mb-6 gap-4">
                    <span className="font-space text-sm font-black uppercase text-neutral-500 tracking-wider">
                      {achievement.title}
                    </span>
                    <div className="border-2 border-black p-2 rounded bg-neutral-100 shadow-[2px_2px_0px_0px_#111111] shrink-0">
                      <Icon className="h-5 w-5 text-black" />
                    </div>
                  </div>

                  <h3 className="font-space text-4xl sm:text-5xl font-black leading-none mb-4">
                    {achievement.stat}
                    <span className="font-space text-xl font-black">{achievement.suffix}</span>
                  </h3>

                  <p className="font-inter text-sm font-semibold leading-relaxed text-neutral-600">
                    {achievement.description}
                  </p>
                </div>

                <div className="mt-8 border-t-2 border-dashed border-black/20 pt-4 flex justify-between items-center">
                  <span className="font-space text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    VERIFIED
                  </span>
                  <div className="h-2 w-2 rounded-full bg-neo-green" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

