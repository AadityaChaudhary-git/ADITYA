
"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "NPTEL Elite",
    subtitle: "Human Computer Interaction",
    detail: "95% consolidated score.",
    variant: "purple" as const,
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    subtitle: "Practical Experience",
    detail: "Completed practical tasks in data analysis and forensic technology.",
    variant: "green" as const,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black">
      <div className="mb-16">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          CERTIFIED{" "}
          <span className="bg-neo-green border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">
            SKILLS
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card variant="white" shadowColor={cert.variant} tilt className="p-7 h-full">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="border-2 border-black p-3 bg-neutral-100 shadow-[2px_2px_0px_0px_#111111]">
                  <Award className="h-6 w-6" />
                </div>
                <Badge variant={cert.variant}>CERTIFICATION</Badge>
              </div>
              <h3 className="font-space text-2xl md:text-3xl font-black uppercase leading-tight">
                {cert.title}
              </h3>
              <p className="font-space text-base font-black uppercase mt-3">{cert.subtitle}</p>
              <p className="font-inter text-sm font-semibold leading-relaxed text-neutral-600 mt-3">
                {cert.detail}
              </p>
              <div className="mt-8 border-t-2 border-dashed border-black/20 pt-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-space text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  Completed
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

