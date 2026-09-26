import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 font-mono text-xs mb-6">
        <Compass className="w-3.5 h-3.5 text-emerald-400" />
        <span>HTTP 404 // ROUTE NOT FOUND</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
        Resource or Protocol Unresolved
      </h1>

      <p className="text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
        The requested URL does not match any active specification, registry entity, or consortium documentation page.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-8 text-left">
        <Link
          href="/standards"
          className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 transition group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
            <span>RFC STANDARDS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-sm font-semibold text-white">Explore AFN Protocols</p>
          <p className="text-xs text-zinc-400 mt-1">Agent-to-Agent communication specifications</p>
        </Link>

        <Link
          href="/projects"
          className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 transition group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
            <span>REGISTRY</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-sm font-semibold text-white">Verified Ecosystem</p>
          <p className="text-xs text-zinc-400 mt-1">Compliant tools, frameworks, and agents</p>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-mono text-xs font-semibold transition"
        >
          <span>Return to AFN Home</span>
        </Link>

        <a
          href="https://agentuniver.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-mono text-xs font-semibold hover:bg-emerald-500/20 transition"
        >
          <span>AgentUniver Marketplace</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
