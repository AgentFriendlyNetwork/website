"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight, PlusCircle, Filter } from "lucide-react";
import { PROJECTS } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "All Projects", value: "ALL" },
  { label: "CLI & Adapters", value: "CLI" },
  { label: "Agent-Native", value: "AGENT_NATIVE" },
  { label: "Protocols & Bridges", value: "PROTOCOL" },
  { label: "Tooling & CI/CD", value: "TOOLING" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-12">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
          <Terminal className="w-4 h-4 text-zinc-300" />
          <span>AFN ECOSYSTEM DIRECTORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Agent-Friendly Projects & Tools
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          Explore open-source software, CLI wrappers, protocol bridges, and agent-native applications verified for machine discoverability and deterministic execution.
        </p>
      </div>

      {/* 2. Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-3 py-1.5 rounded text-xs font-mono transition-colors",
              activeCategory === cat.value
                ? "bg-zinc-100 text-zinc-950 font-semibold"
                : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 border border-zinc-800"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 space-y-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-zinc-100">
                    {project.name}
                  </span>
                  <StatusBadge status={project.stage} />
                </div>
                <span className="font-mono text-xs text-zinc-400 uppercase">
                  {project.category}
                </span>
              </div>

              <div>
                <p className="text-xs text-zinc-300 font-medium mb-2">
                  {project.tagline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Agent-Friendly Features */}
              <div className="bg-zinc-950/80 rounded border border-zinc-800/80 p-3.5 space-y-2">
                <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  Agent-Friendly Capabilities:
                </div>
                <div className="space-y-1">
                  {project.agentFriendlyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 font-mono text-[11px] text-zinc-300">
                      <span className="text-zinc-400 select-none">-</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Submission Callout */}
      <div className="border border-dashed border-zinc-800 bg-zinc-950/60 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Directory Submission
          </div>
          <h3 className="text-xl font-bold text-white">
            Have an Agent-Friendly tool or library?
          </h3>
          <p className="text-sm text-zinc-400">
            Submit your repository or service to be cataloged in the official AFN ecosystem directory after standard compliance verification.
          </p>
        </div>
        <Link
          href="/join"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors font-mono whitespace-nowrap"
        >
          <span>Submit a Project</span>
          <PlusCircle className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
