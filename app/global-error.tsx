"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AFN Global Root Error caught:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <head>
        <title>AFN Global Gateway Error</title>
        <script
          defer
          src="https://umami.wangteng.tech/script.js"
          data-website-id="2b6eb8d4-026b-4a99-9c96-17bc86c9d2b0"
        />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
          <div className="inline-block px-3 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs mb-4">
            GLOBAL EXECUTION EXCEPTION
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Agent Friendly Network</h1>
          <p className="text-sm text-zinc-400 mb-6">
            A critical root-level error occurred. The system has prevented cascading failure.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition"
            >
              Reset Session
            </button>
            <a
              href="/"
              className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs transition"
            >
              Reload Portal
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
