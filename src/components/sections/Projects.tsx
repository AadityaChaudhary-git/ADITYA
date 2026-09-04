"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import {
  ArrowRight,
  BarChart3,
  Code2,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";

const projects = [
  {
    slug: "nurotrack",
    title: "NuroTrack",
    description:
      "An AI-powered productivity monitoring and analytics system that tracks desktop activity, provides productivity insights, and uses machine learning for productivity prediction.",
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "Firebase",
      "Chart.js",
      "Scikit-learn",
    ],
    github: "https://github.com/AadityaChaudhary-git/NuroTrack",
    live: null,
    bgColor: "bg-neo-blue/20" as const,
    span: "lg:col-span-2",
    accentColor: "blue" as const,
    graphic: (
      <BarChart3
        className="w-24 h-24 text-neo-blue"
        strokeWidth={2.5}
      />
    ),
  },

  {
    slug: "cybershield",
    title: "CyberShield Threat Detection",
    description:
      "A machine learning-powered network security analytics system that analyzes network activity, classifies suspicious events, and generates risk scores through a Flask-based dashboard.",
    tech: [
      "Python",
      "Scikit-learn",
      "SQL",
      "Flask",
      "Random Forest",
    ],
    github:
      "https://github.com/AadityaChaudhary-git/CyberShield-Threat-Detection",
    live: null,
    bgColor: "bg-neo-yellow/20" as const,
    span: "lg:col-span-1",
    accentColor: "yellow" as const,
    graphic: (
      <ShieldCheck
        className="w-24 h-24 text-neo-yellow"
        strokeWidth={2.5}
      />
    ),
  },

  {
    slug: "telecom-churn",
    title: "Telecom Customer Churn Analysis",
    description:
      "A data analytics and machine learning project that analyzes customer behavior, identifies key churn drivers, and compares classification models to predict customers at risk of leaving.",
    tech: [
      "Python",
      "SQL",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],
    github:
      "https://github.com/AadityaChaudhary-git/Telecom-Customer-Churn-Analysis",
    live: null,
    bgColor: "bg-neo-blue/20" as const,
    span: "lg:col-span-1",
    accentColor: "blue" as const,
    graphic: (
      <TrendingDown
        className="w-24 h-24 text-neo-blue"
        strokeWidth={2.5}
      />
    ),
  },

  {
    slug: "leetcode",
    title: "LeetCode Solutions",
    description:
      "A collection of 60+ solved LeetCode problems covering Data Structures and Algorithms using Python, along with SQL and MySQL database problems.",
    tech: ["Python", "SQL", "MySQL", "DSA"],
    github: "https://github.com/AadityaChaudhary-git/LeetCode",
    live: null,
    bgColor: "bg-neo-yellow/20" as const,
    span: "lg:col-span-1",
    accentColor: "yellow" as const,
    graphic: (
      <Code2
        className="w-24 h-24 text-neo-yellow"
        strokeWidth={2.5}
      />
    ),
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black"
    >
      {/* Section Heading */}
      <div className="mb-20">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          FEATURED{" "}
          <span className="bg-neo-blue text-white border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">
            PROJECTS
          </span>
        </h2>

        <p className="mt-6 max-w-2xl font-inter text-base md:text-lg font-semibold leading-relaxed text-neutral-600">
          A selection of projects where I apply Python, SQL, machine learning,
          data analysis, and software development to solve practical problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: idx * 0.05,
            }}
            className={`${proj.span} flex`}
          >
            <Card
              variant="white"
              shadowColor={proj.accentColor}
              tilt
              className="flex flex-col justify-between p-0 overflow-hidden w-full h-full"
              data-cursor="project"
            >
              {/* Project Graphic */}
              <div
                className={`relative h-48 md:h-56 w-full border-b-4 border-black ${proj.bgColor} flex items-center justify-center`}
              >
                {/* Background Grid */}
                <div className="absolute inset-0 paper-grid opacity-30 pointer-events-none" />

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 border-2 border-black bg-white" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-2 border-black bg-white" />

                {/* Icon */}
                <div className="transform hover:scale-110 transition-transform duration-300 relative z-10">
                  {proj.graphic}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  {/* Case Study Number */}
                  <span className="font-space text-xs font-black uppercase text-neutral-500 tracking-wider">
                    CASE STUDY #{String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-space text-2xl font-black uppercase tracking-wide">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm font-semibold leading-relaxed text-neutral-600">
                    {proj.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant={proj.accentColor}
                        className="text-[9px] py-0.5 px-1.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 border-t-4 border-black pt-4 flex items-center justify-between">
                  {/* Case Study */}
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="font-space text-xs font-black uppercase tracking-wider text-black flex items-center gap-1 hover:underline"
                  >
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* GitHub */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black p-1.5 bg-white hover:bg-neo-yellow transition-all rounded-[4px] shadow-[2px_2px_0px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111111] active:translate-y-0 active:shadow-[1px_1px_0px_0px_#111111]"
                    title="GitHub Code"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <GithubIcon className="h-4 w-4 text-black" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}