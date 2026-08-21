import React from "react";
import type { Metadata } from "next";
import { BookOpen, GitPullRequest, ArrowUpRight } from "lucide-react";
import { STANDARDS, WORKING_GROUPS } from "@/content/standards";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = {
  title: "Standards & Specifications",
  description: "Official RFC specifications, working groups, and interface standards for the Agent-Friendly Network.",
};

export default function StandardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      {/* 1. Header Intro */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
          <BookOpen className="w-4 h-4 text-zinc-300" />
          <span>AFN SPECIFICATION REPOSITORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Agent-Friendly Standards & RFCs
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          AFN publishes formal technical specifications, schema requirements, and protocol conventions to ensure tools, CLIs, and web services are reliably operable by autonomous AI agents.
        </p>
      </div>

      {/* 2. Standards Lifecycle Process */}
      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
            RFC Standardization Lifecycle
          </span>
          <span className="font-mono text-[11px] text-zinc-400">PROCESS-SOP-01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 font-mono text-xs">
          <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80 space-y-1">
            <div className="text-sky-400 font-semibold">Stage 1: DRAFT</div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Initial community proposal submitted via GitHub PR. Open for technical debate and prototyping.
            </p>
          </div>
          <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80 space-y-1">
            <div className="text-amber-400 font-semibold">Stage 2: PROPOSED</div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Reviewed by Working Group. Requires at least two independent reference implementations.
            </p>
          </div>
          <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80 space-y-1">
            <div className="text-emerald-400 font-semibold">Stage 3: RATIFIED</div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Approved by AFN Technical Steering Committee. Finalized standard baseline.
            </p>
          </div>
          <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80 space-y-1">
            <div className="text-zinc-400 font-semibold">Stage 4: REFERENCE</div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Ecosystem architectural reference and interoperability documentation.
            </p>
          </div>
        </div>
      </div>

      {/* 3. RFC Registry List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Active Specifications & RFCs
          </h2>
          <span className="font-mono text-xs text-zinc-400">
            TOTAL: {STANDARDS.length} SPECIFICATIONS
          </span>
        </div>

        <div className="space-y-4">
          {STANDARDS.map((rfc) => (
            <div
              key={rfc.id}
              className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 hover:border-zinc-700 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-zinc-100 bg-zinc-800 px-2.5 py-1 rounded border border-zinc-700">
                    {rfc.code}
                  </span>
                  <StatusBadge status={rfc.stage} />
                  <span className="font-mono text-xs text-zinc-400">
                    {rfc.workingGroup}
                  </span>
                </div>
                <div className="font-mono text-xs text-zinc-400">
                  Last Updated: {rfc.lastUpdated}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {rfc.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {rfc.abstract}
                </p>
              </div>

              <div className="bg-zinc-950/80 rounded border border-zinc-800/80 p-4 space-y-2">
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Key Normative Requirements:
                </div>
                <ul className="space-y-1.5 font-mono text-xs text-zinc-300">
                  {rfc.keyPoints.map((kp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-400 select-none">-</span>
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="font-mono text-xs text-zinc-400">
                  CATEGORY: {rfc.category}
                </div>
                <a
                  href="https://github.com/Agent-Friendly-Network"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white"
                >
                  <span>View RFC Discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Working Groups */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Technical Working Groups
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Chartered committees responsible for drafting and maintaining RFC domain tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORKING_GROUPS.map((wg) => (
            <div
              key={wg.id}
              className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-1">
                  Working Group
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">
                  {wg.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {wg.charter}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 font-mono text-xs space-y-1">
                <div className="text-zinc-400 text-[11px]">Assigned RFCs:</div>
                <div className="text-zinc-300">{wg.rfcs.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. RFC Submission Callout */}
      <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl font-bold text-white">
            Propose a New Standard (RFC)
          </h3>
          <p className="text-sm text-zinc-300">
            Have an interface pattern, CLI schema, or agent discoverability mechanism? Submit an RFC proposal to the AFN repository.
          </p>
        </div>
        <a
          href="https://github.com/Agent-Friendly-Network"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors font-mono whitespace-nowrap"
        >
          <span>Submit Proposal</span>
          <GitPullRequest className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
