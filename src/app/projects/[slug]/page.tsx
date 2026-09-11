
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import canvasConfetti from "canvas-confetti";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    tech: string[];
    github: string;
    accentColor: "yellow" | "red" | "purple" | "green" | "blue";
  }
> = {
  nurotrack: {
    title: "NuroTrack",
    description:
      "An AI-powered productivity monitoring and analytics system that tracks desktop activity, provides productivity insights, and uses machine learning for productivity prediction.",
    tech: ["Python", "Flask", "SQLite", "Firebase", "Chart.js", "Scikit-learn"],
    github: "https://github.com/AadityaChaudhary-git/NuroTrack",
    accentColor: "blue",
  },
  leetcode: {
    title: "LeetCode Solutions",
    description:
      "A collection of 60+ solved LeetCode problems covering Data Structures and Algorithms using Python and SQL/MySQL problems.",
    tech: ["Python", "SQL", "MySQL", "DSA"],
    github: "https://github.com/AadityaChaudhary-git/LeetCode",
    accentColor: "yellow",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  useEffect(() => {
    if (project) {
      canvasConfetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.3 },
        colors: ["#FFD84D", "#FF6B6B", "#B79DFF", "#C9F27B", "#8ED8FF"],
      });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between paper-grid bg-neo-bg">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <Card variant="white" className="max-w-md text-center p-12">
            <h1 className="font-space text-6xl font-black mb-4">404</h1>
            <p className="font-inter text-base font-bold text-neutral-600 mb-8">
              Project case study not found.
            </p>
            <Link href="/" className="cursor-none">
              <Button variant="yellow">Back Home</Button>
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between paper-grid bg-neo-bg">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-16 space-y-12">
        <Link href="/" className="cursor-none inline-block">
          <Button variant="white" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <Card
          variant="white"
          shadowColor={project.accentColor}
          className="p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 paper-grid opacity-20 pointer-events-none" />

          <article className="relative z-10 space-y-8">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant={project.accentColor}>
                  {tech}
                </Badge>
              ))}
            </div>

            <h1 className="font-space text-4xl md:text-6xl font-black uppercase tracking-tight text-black">
              {project.title}
            </h1>

            <p className="font-inter text-lg font-bold text-neutral-600 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="border-t-4 border-black pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-space text-xl font-black uppercase mb-3">Project Overview</h2>
                <p className="font-inter text-sm font-semibold leading-relaxed text-neutral-600">
                  This project is part of Aditya&apos;s practical learning journey in Python,
                  data, machine learning, and problem solving.
                </p>
              </div>

              <div>
                <h2 className="font-space text-xl font-black uppercase mb-3">Technology</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant={project.accentColor}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t-4 border-dashed border-black/20">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-none inline-block">
                <Button variant="black">
                  <GithubIcon className="mr-2 h-4 w-4" /> View Code
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </article>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

