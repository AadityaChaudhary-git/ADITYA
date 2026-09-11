"use client";

import React from "react";

import { motion } from "framer-motion";

import Card from "../ui/Card";

import { Brain, Code, GraduationCap, Database, Eye, Download } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section id="about" className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black">
      <div className="mb-16">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          WHO IS{" "}
          <span className="bg-neo-purple border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">
            ADITYA?
          </span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
          <Card variant="white" tilt className="flex flex-col justify-between h-full min-h-[450px]">
            <div className="space-y-6">
              <div className="flex gap-2.5">
                <span className="h-4.5 w-4.5 rounded-full bg-neo-red border-2 border-black" />
                <span className="h-4.5 w-4.5 rounded-full bg-neo-yellow border-2 border-black" />
                <span className="h-4.5 w-4.5 rounded-full bg-neo-green border-2 border-black" />
              </div>

              <h3 className="font-space text-3xl font-black uppercase tracking-wide">
                THE STORY SO FAR
              </h3>

              <p className="font-inter text-base font-semibold leading-relaxed text-neutral-700">
                I&apos;m Aditya Chaudhary, a first-year MCA student at Graphic Era University,
                Dehradun. I&apos;m passionate about problem-solving, data, and technology, with a
                growing focus on Python, SQL, Data Analytics, and Machine Learning.
              </p>

              <p className="font-inter text-base font-semibold leading-relaxed text-neutral-700">
                I&apos;m also strengthening my Data Structures and Algorithms fundamentals and
                learning by building practical projects rather than only studying theory.
              </p>

              <p className="font-inter text-base font-semibold leading-relaxed text-neutral-700">
                My goal is to turn what I learn into useful, practical solutions and continue
                growing toward a career in data analytics and technology.
              </p>
            </div>

            <div className="mt-8 border-t-4 border-black pt-6 flex items-center justify-between flex-wrap gap-4">
              <span className="font-space text-xs font-black uppercase tracking-wider text-neutral-500">
                FOCUS: DATA ANALYTICS & MACHINE LEARNING
              </span>

              <div className="flex gap-2 flex-wrap">
                <span className="bg-neo-blue/20 text-neo-black border-2 border-black px-2 py-0.5 text-xs font-bold rounded">
                  PYTHON
                </span>

                <span className="bg-neo-yellow/20 text-neo-black border-2 border-black px-2 py-0.5 text-xs font-bold rounded">
                  SQL
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Card
              variant="yellow"
              tilt
              className="p-4 flex flex-col justify-between items-start min-h-[140px] hover:rotate-[-2deg]"
            >
              <GraduationCap className="h-6 w-6" />

              <div>
                <h4 className="font-space text-3xl font-black">MCA</h4>
                <p className="font-space text-xs font-black uppercase text-neutral-600">
                  2026–2028
                </p>
              </div>
            </Card>

            <Card
              variant="red"
              tilt
              className="p-4 flex flex-col justify-between items-start min-h-[140px] hover:rotate-[2deg]"
            >
              <Database className="h-6 w-6 text-white" />

              <div>
                <h4 className="font-space text-3xl font-black text-white">DATA</h4>
                <p className="font-space text-xs font-black uppercase text-neutral-200">
                  Analytics Focus
                </p>
              </div>
            </Card>

            <Card
              variant="purple"
              tilt
              className="p-4 flex flex-col justify-between items-start min-h-[140px] hover:rotate-[2deg]"
            >
              <Code className="h-6 w-6" />

              <div>
                <h4 className="font-space text-3xl font-black">BCA</h4>
                <p className="font-space text-xs font-black uppercase text-neutral-600">
                  7.6 / 10 CGPA
                </p>
              </div>
            </Card>

            <Card
              variant="green"
              tilt
              className="p-4 flex flex-col justify-between items-start min-h-[140px] hover:rotate-[-2deg]"
            >
              <Brain className="h-6 w-6" />

              <div>
                <h4 className="font-space text-3xl font-black">ML</h4>
                <p className="font-space text-xs font-black uppercase text-neutral-600">
                  Learning & Building
                </p>
              </div>
            </Card>
          </div>

          <Card variant="blue" className="p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 animate-pulse" />

              <span className="font-space text-xs font-black uppercase tracking-wider text-black">
                Currently building
              </span>
            </div>

            <h4 className="font-space text-xl font-black uppercase leading-tight">
              NUROTRACK
            </h4>

            <p className="font-inter text-xs font-bold text-neutral-800 mt-2">
              An AI-powered productivity monitoring and analytics system using Python, Flask,
              SQLite, Firebase, Chart.js, and Scikit-learn.
            </p>
          </Card>

          {/* RESUME */}
          <Card
            variant="white"
            className="p-5 border-dashed flex items-center justify-between gap-4"
          >
            <div className="flex flex-col">
              <h4 className="font-space text-lg font-black uppercase">
                RESUME.PDF
              </h4>

              <p className="font-inter text-xs font-semibold text-neutral-500">
                View or download my latest resume.
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <a
                href="/AdityaResume_SD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-space text-[10px] font-black uppercase border-2 border-black px-3 py-2 bg-neo-blue text-white shadow-[2px_2px_0px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111111] active:translate-y-0 active:shadow-[1px_1px_0px_0px_#111111] transition-all"
              >
                <Eye className="h-3.5 w-3.5" />
                View
              </a>

              <a
                href="/AdityaResume_SD.pdf"
                download="AdityaResume_SD.pdf"
                className="flex items-center gap-1.5 font-space text-[10px] font-black uppercase border-2 border-black px-3 py-2 bg-white text-black shadow-[2px_2px_0px_0px_#111111] hover:bg-neo-yellow hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111111] active:translate-y-0 active:shadow-[1px_1px_0px_0px_#111111] transition-all"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}