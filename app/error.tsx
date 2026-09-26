"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home, ArrowUpRight } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception for telemetry diagnosis
    console.error("AFN Application Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Degraded State Handled
            </span>
            <h2 className="text-xl font-bold text-white">System Runtime Exception</h2>
          </div>
        </div>

        <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
          The AFN application encountered an unexpected runtime failure during operation. A safe fallback state has been activated.
        </p>

        {error.message && (
          <div className="p-3 bg-zinc-950 border border-zinc-800/80 rounded-lg text-xs font-mono text-zinc-400 mb-6 overflow-x-auto">
            <code>{error.message}</code>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-mono transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 text-xs font-mono transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <a
            href="https://github.com/Agent-Friendly-Network/A2A-Protocols/issues"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors ml-auto"
          >
            <span>Report Issue</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
