import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GitPullRequest,
  Check,
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { StatusBadge } from "@/components/status-badge";
import { PRINCIPLES } from "@/content/principles";
import { PROJECTS } from "@/content/projects";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="flex flex-col items-center">
      {/* 1. Hero Section */}
      <section className="w-full border-b border-zinc-800/80 bg-grid-pattern relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-300 font-mono text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>INTERNET STANDARD INITIATIVE &bull; DRAFT v0.1</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
            Building an <span className="underline decoration-zinc-600 underline-offset-8">Agent-Friendly</span> Internet.
          </h1>

          <div className="space-y-2 max-w-3xl text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8">
            <p className="text-zinc-100 font-medium">
              The internet was built for humans.
            </p>
            <p className="text-zinc-400">
              Agent Friendly Network (AFN) connects developers, open-source projects, and companies to build software, protocols, and APIs that work reliably for AI agents.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/standards"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors font-mono"
            >
              <span>Explore Standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-zinc-700 bg-zinc-900/60 text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-colors font-mono"
            >
              <span>Join AFN</span>
            </Link>
            <a
              href="https://github.com/Agent-Friendly-Network"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-zinc-400 hover:text-zinc-200 text-sm font-mono transition-colors"
            >
              <span>GitHub Organization</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="w-full border-b border-zinc-800/80 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="border-l-2 border-zinc-600 pl-6 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              The Core Thesis
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 max-w-3xl leading-snug">
              Every software system of the next decade requires both a Human Interface and an Agent Interface.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed pt-1">
              For thirty years, protocols and interfaces were optimized for visual rendering, DOM trees, CAPTCHAs, and manual human clicks. As autonomous agents execute workflows on our behalf, systems must expose deterministic, machine-discoverable, and safe interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Architecture Topology Section */}
      <section className="w-full border-b border-zinc-800/80 bg-zinc-950/60 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
                Ecosystem Architecture
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The Four Pillars of AFN
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Interlocking standard tracks and operational workgroups
            </p>
          </div>

          <ArchitectureDiagram />
        </div>
      </section>

      {/* 4. Principles Section */}
      <section className="w-full border-b border-zinc-800/80 bg-zinc-950 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
              Core Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Makes Software Agent-Friendly?
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl mt-2">
              Five foundational criteria defining whether a CLI, API, or web service is designed for deterministic autonomous execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.id}
                className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 space-y-3 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-zinc-400 font-bold">PRINCIPLE {principle.number}</span>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {principle.shortDefinition}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400">Key requirement:</div>
                  <div className="text-xs font-mono text-zinc-300">
                    {principle.technicalRequirements[0]}
                  </div>
                </div>
              </div>
            ))}

            {/* Evaluation CTA Card */}
            <div className="border border-dashed border-zinc-700 bg-zinc-900/20 rounded-lg p-5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="font-mono text-xs text-zinc-400 font-bold">COMPLIANCE</div>
                <h3 className="text-base font-semibold text-zinc-100">
                  Audit Your Project
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Verify if your command-line tools and web APIs satisfy the AFN baseline requirements for AI agent safety and discoverability.
                </p>
              </div>
              <Link
                href="/standards"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-200 hover:text-white pt-4"
              >
                <span>Read Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Ecosystem Projects */}
      <section className="w-full border-b border-zinc-800/80 bg-zinc-950/40 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
                Ecosystem Index
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1"
            >
              <span>View All Projects in Registry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-zinc-800 bg-zinc-900/50 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <StatusBadge status={project.stage} />
                    <span className="font-mono text-[11px] text-zinc-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/80 mb-4">
                    <div className="text-[11px] font-mono text-zinc-400">Agent-Friendly Capabilities:</div>
                    {project.agentFriendlyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-mono text-[11px] text-zinc-300">
                        <span className="text-zinc-400 select-none">-</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((b) => (
                      <span
                        key={b}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700/40"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 p-1"
                      aria-label={`${project.name} Repository`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Join & Community Callout */}
      <section className="w-full bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Participation & Governance
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Join the Agent-Friendly Network
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Whether you are a developer building CLI adapters, a company exposing agent-ready APIs, or a researcher formalizing autonomous protocols, AFN provides the standard foundation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 font-mono text-xs text-zinc-300">
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  [+] Developers
                </div>
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  [+] Companies
                </div>
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  [+] OSS Projects
                </div>
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  [+] Researchers
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors font-mono"
                >
                  <span>Become a Member</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/Agent-Friendly-Network"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-zinc-700 bg-zinc-900 text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-colors font-mono"
                >
                  <span>Submit RFC via GitHub</span>
                  <GitPullRequest className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
