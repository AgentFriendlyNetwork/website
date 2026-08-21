import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, ArrowUpRight, Cpu, ArrowRight } from "lucide-react";
import { FUND_ALLOCATIONS, SUPPORT_CHANNELS } from "@/content/support";

export const metadata: Metadata = {
  title: "Support the Agent-Friendly Internet",
  description: "Support open standards, testing infrastructure, and developer grants for the Agent Friendly Network (AFN).",
};

export default function SupportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
          <HeartHandshake className="w-4 h-4 text-zinc-300" />
          <span>AFN SUSTAINABILITY & OPEN TREASURY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Support the Agent-Friendly Internet
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          The Agent Friendly Network is a non-profit open standards initiative. Membership for individual developers, open-source maintainers, and researchers is completely free. Financial contributions accelerate independent specification development and open testing infrastructure.
        </p>
      </div>

      {/* 2. Free Membership Policy Notice */}
      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-zinc-200 font-semibold uppercase">
            Founding Philosophy: Zero Paywalls on Open Standards
          </div>
          <p className="text-zinc-400 text-[11px]">
            Founding Member: Free &bull; Open Source Project: Free &bull; Developer: Free &bull; No barrier to participation.
          </p>
        </div>
        <Link
          href="/join"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors whitespace-nowrap"
        >
          <span>Join Free</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3. Transparent Fund Allocation */}
      <div className="space-y-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
            Financial Transparency
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How Funds Are Allocated
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Every contribution directly funds community-governed open assets and standard tracks.
          </p>
        </div>

        {/* ASCII Allocation Tree */}
        <div className="border border-zinc-800 bg-zinc-950/90 rounded-lg p-6 font-mono text-xs text-zinc-300">
          <div className="text-zinc-400 font-semibold mb-3">
            Funds Allocation Topology:
          </div>
          <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
{`Funds support:
├── Open Standards              (35%) — RFC drafting, formal verification, schema registries
├── Open Source Infrastructure  (30%) — Testbed CI/CD, OpenCLI adapters, validator endpoints
├── Developer Programs          (20%) — Grants, bounties, and tooling implementation support
└── AFN Operations              (15%) — Domain, legal compliance, and steering operations`}
          </pre>
        </div>

        {/* Detailed Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUND_ALLOCATIONS.map((alloc) => (
            <div
              key={alloc.category}
              className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="font-semibold text-zinc-200">{alloc.category}</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                    {alloc.percentage}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {alloc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Agent-Native Treasury Governance */}
      <div className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <Cpu className="w-4 h-4 text-zinc-300" />
          <span>INNOVATIVE EXPERIMENT</span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Agent-Native Organization Governance
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            AFN operates on the very principles it formalizes. Operational budgeting and grant accounting are orchestrated via an automated Agent pipeline with human steering committee authorization gates.
          </p>
        </div>

        <div className="bg-zinc-950/90 rounded border border-zinc-800 p-5 font-mono text-xs text-zinc-300 overflow-x-auto">
          <div className="text-zinc-500 mb-2"># Operational Flow Model</div>
          <div className="text-zinc-200 font-semibold">
            Donations &rarr; AFN Treasury &rarr; Agent-Managed Budgeting &rarr; Human Steering Approval &rarr; Disbursal
          </div>
          <div className="text-zinc-500 text-[11px] mt-3">
            Autonomous software tracks CI usage, tests compliance benchmarks, and calculates developer bounty milestones automatically.
          </div>
        </div>
      </div>

      {/* 5. Support Pathways */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Support Channels
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Low-friction payment options for global developers and institutional supporters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUPPORT_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {channel.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                    {channel.type}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-medium">
                  {channel.tagline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {channel.description}
                </p>
                {channel.details && (
                  <div className="mt-2 p-2 rounded bg-zinc-950/80 border border-zinc-800/80 font-mono text-[11px] text-zinc-400">
                    {channel.details}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800/60">
                {channel.url && (
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-200 hover:text-white"
                  >
                    <span>Proceed via {channel.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
