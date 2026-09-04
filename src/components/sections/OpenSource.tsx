"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { Star, GitFork, GitCommit, GitPullRequest } from "lucide-react";

// Generate mock contributions board data
const contributionCols = 32;
const contributionRows = 7;

const pinnedRepos = [
  {
    name: "agent-kernel",
    description: "An ultra-light Python framework for orchestrating distributed, state-saving multi-agent system loops.",
    language: "Python",
    stars: 382,
    forks: 41,
    color: "bg-[#3572A5]",
  },
  {
    name: "qdrant-index-optimizer",
    description: "Autotuning optimizer plugin for Qdrant vector index configurations, dynamically optimizing search latency vs recall.",
    language: "Rust",
    stars: 184,
    forks: 18,
    color: "bg-[#dea584]",
  },
  {
    name: "react-neo-brutalist",
    description: "Premium, responsive component library containing customizable neo-brutalist buttons, inputs, and cards.",
    language: "TypeScript",
    stars: 125,
    forks: 12,
    color: "bg-[#3178c6]",
  },
];

const latestCommits = [
  {
    repo: "agent-kernel",
    hash: "6f5c8b2",
    message: "feat: incorporate hierarchical memory retrieval router",
    time: "2 hours ago",
  },
  {
    repo: "qdrant-index-optimizer",
    hash: "a4c219f",
    message: "fix: reduce memory allocation overhead on index update",
    time: "5 hours ago",
  },
  {
    repo: "react-neo-brutalist",
    hash: "d7f10e4",
    message: "docs: add command palette keyboard shortcuts tutorial",
    time: "1 day ago",
  },
];

export default function OpenSource() {
  const contributions = useMemo(() => {
    const levels = [
      "bg-neutral-100 dark:bg-neutral-900 border-[1px] border-neutral-200 dark:border-neutral-800",
      "bg-emerald-100 dark:bg-emerald-950/40 border-[1px] border-emerald-200 dark:border-emerald-900",
      "bg-emerald-300 dark:bg-emerald-900/60 border-[1px] border-emerald-400 dark:border-emerald-800",
      "bg-emerald-500 dark:bg-emerald-700/80 border-[1px] border-emerald-600 dark:border-emerald-700",
      "bg-emerald-600 dark:bg-emerald-500 border-[1px] border-emerald-700 dark:border-emerald-500"
    ];
    return Array.from({ length: contributionCols * contributionRows }, () => {
      const r = Math.random();
      if (r < 0.45) return levels[0];
      if (r < 0.75) return levels[1];
      if (r < 0.9) return levels[2];
      if (r < 0.97) return levels[3];
      return levels[4];
    });
  }, []);

  return (
    <section
      id="opensource"
      className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black"
    >
      {/* Title */}
      <div className="mb-20">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          OPEN <span className="bg-neo-purple border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">SOURCE</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Contribution board and latest commits */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* GitHub Graph Card */}
          <Card variant="white" className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-space text-xl font-black uppercase tracking-wider flex items-center gap-2">
                <GitPullRequest className="h-5 w-5" /> @arzoo-dev contributions
              </h3>
              <Badge variant="green" className="text-[10px]">
                Active
              </Badge>
            </div>

            {/* Grid display */}
            <div className="w-full overflow-x-auto pb-2">
              <div
                className="grid gap-1"
                style={{
                  gridTemplateColumns: `repeat(${contributionCols}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${contributionRows}, minmax(0, 1fr))`,
                  width: "100%",
                  minWidth: "480px",
                }}
              >
                {contributions.map((lvl, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-sm ${lvl}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-[10px] font-bold text-neutral-500 font-space">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                <div className="h-3 w-3 rounded-sm bg-neutral-100 border border-neutral-200" />
                <div className="h-3 w-3 rounded-sm bg-emerald-100" />
                <div className="h-3 w-3 rounded-sm bg-emerald-300" />
                <div className="h-3 w-3 rounded-sm bg-emerald-500" />
                <div className="h-3 w-3 rounded-sm bg-emerald-600" />
                <span className="ml-1">More</span>
              </div>
            </div>
          </Card>

          {/* Latest commits Card */}
          <Card variant="white" className="p-6">
            <h3 className="font-space text-xl font-black uppercase tracking-wider mb-6 flex items-center gap-2">
              <GitCommit className="h-5 w-5" /> Recent commits
            </h3>

            <div className="space-y-4">
              {latestCommits.map((cmt) => (
                <div
                  key={cmt.hash}
                  className="flex items-start justify-between border-b-2 border-dashed border-neutral-200 dark:border-neutral-800 pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <span className="font-space text-xs font-black text-neo-blue bg-neo-blue/15 px-2 py-0.5 rounded border border-black/10 inline-block mr-2">
                      {cmt.repo}
                    </span>
                    <span className="font-inter text-sm font-semibold text-neutral-700">
                      {cmt.message}
                    </span>
                  </div>
                  <div className="text-right pl-4">
                    <code className="font-mono text-xs font-bold text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded border border-black/10">
                      {cmt.hash}
                    </code>
                    <span className="block text-[10px] font-bold text-neutral-400 mt-1 uppercase font-space">
                      {cmt.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column: Pinned repos */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-space text-2xl font-black uppercase tracking-wide text-neutral-500 mb-2">
            PINNED REPOSITORIES
          </h3>

          <div className="flex flex-col gap-6">
            {pinnedRepos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 14, delay: idx * 0.05 }}
              >
                <Card variant="white" shadowColor="purple" tilt className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-space text-lg font-black uppercase tracking-wide text-black hover:underline cursor-none">
                      {repo.name}
                    </h4>
                    <span className="h-3 w-3 rounded-full border border-black shadow-[1px_1px_0px_0px_#111111] bg-neo-purple" />
                  </div>
                  
                  <p className="font-inter text-xs font-semibold leading-relaxed text-neutral-600 mb-6">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                        <Star className="h-4.5 w-4.5 text-neo-yellow fill-neo-yellow stroke-black stroke-[1.5px]" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                        <GitFork className="h-4.5 w-4.5 text-black" />
                        {repo.forks}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 font-space uppercase">
                      <span className={`h-2.5 w-2.5 rounded-full border border-black/20 ${repo.color}`} />
                      {repo.language}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
