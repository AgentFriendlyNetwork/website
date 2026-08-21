import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GitPullRequest, Mail, Shield, ArrowUpRight, Terminal, Users, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Network & Participate",
  description: "Guidelines for developers, companies, and projects to join the Agent Friendly Network and contribute to open standards.",
};

export default function JoinPage() {
  const pathways = [
    {
      title: "Individual Developers & Researchers",
      icon: Users,
      feeNotice: "100% Free & Open",
      description:
        "Participate in technical working groups, propose new RFCs, debate specifications, and implement agent-friendly developer tools.",
      actionText: "Join via GitHub Discussions",
      url: "https://github.com/Agent-Friendly-Network",
      steps: [
        "Read existing RFCs in /standards",
        "Join RFC discussions on GitHub",
        "Submit standard proposals via Pull Request",
      ],
    },
    {
      title: "Open Source Projects",
      icon: Terminal,
      feeNotice: "100% Free & Open",
      description:
        "Get your CLI tool, API framework, or MCP server indexed in the official AFN ecosystem directory and obtain standard compliance verification.",
      actionText: "Submit Project Issue",
      url: "https://github.com/Agent-Friendly-Network",
      steps: [
        "Audit tool against AFN-CLI-001 or AFN-WEB-001",
        "Implement machine-readable output flags (--json)",
        "Open a Project Directory Submission on GitHub",
      ],
    },
    {
      title: "Companies & AI Platforms",
      icon: Shield,
      feeNotice: "Corporate Partner / Sponsor",
      description:
        "Collaborate on industrial agent interoperability, sponsor testbed infrastructure, and align enterprise APIs with AFN standards.",
      actionText: "Contact Steering Committee",
      url: "mailto:contact@agentfriendly.network",
      steps: [
        "Incorporate AFN headers (X-Agent-Budget, Idempotency-Key)",
        "Deploy /.well-known/agent.json manifest",
        "Sign membership charter with AFN Steering Committee",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
          <GitPullRequest className="w-4 h-4 text-zinc-300" />
          <span>AFN PARTICIPATION CHARTER</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Join the Agent-Friendly Network
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          The future of autonomous software requires open, vendor-neutral protocols. We invite engineers, open-source maintainers, and companies to contribute to the standard.
        </p>
      </div>

      {/* 2. Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pathways.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="font-semibold text-zinc-100 text-base">
                      {p.title}
                    </h2>
                  </div>
                </div>

                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                  {p.feeNotice}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {p.description}
                </p>

                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Process Checklist:
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-300">
                    {p.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-zinc-500 select-none">-</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-mono bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors"
                >
                  <span>{p.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Financial Support & Treasury Callout */}
      <div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <HeartHandshake className="w-4 h-4 text-zinc-300" />
            <span>FINANCIAL SUSTAINABILITY & TREASURY</span>
          </div>
          <h3 className="text-lg font-bold text-white">
            Support the Agent-Friendly Internet
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Financial contributions directly fund non-profit open standards research, testbed infrastructure, and developer grants with transparent on-chain/public accounting.
          </p>
        </div>
        <Link
          href="/support"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white text-xs font-mono whitespace-nowrap transition-colors"
        >
          <span>Support AFN</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4. GitHub Issue Submission Template */}
      <div className="border border-zinc-800 bg-zinc-950/80 rounded-xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Standard Application Protocol
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              GitHub RFC & Project Submission Format
            </h2>
          </div>
          <a
            href="https://github.com/Agent-Friendly-Network"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white"
          >
            <span>Open GitHub Repo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          To submit a new project for directory inclusion or propose an amendment to an RFC, please copy the template below and open a new Issue or PR in the organization repository:
        </p>

        <div className="rounded-lg bg-zinc-900/90 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
          <pre className="leading-relaxed whitespace-pre">
{`### AFN Submission Information

- **Type**: [Project Directory | RFC Proposal | Working Group Membership]
- **Name / Organization**: [Your Project or Company Name]
- **Repository / Website**: [https://github.com/org/repo]
- **Target Standard**: [AFN-CLI-001 | AFN-API-001 | AFN-WEB-001]

### Agent-Friendly Capability Checklist
- [ ] Outputs strict JSON/JSONL when invoked non-interactively
- [ ] Exposes schema introspection (--schema or /.well-known/agent.json)
- [ ] Deterministic exit codes and idempotency safeguards implemented
- [ ] Safe execution boundaries tested under headless runtime mode

### Description & Rationale
[Explain the tool or proposed standard modification and how it empowers autonomous agents...]`}
          </pre>
        </div>
      </div>

      {/* 5. Direct Communication Channel */}
      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3 text-zinc-300">
          <Mail className="w-4 h-4 text-zinc-400" />
          <span>Steering Committee Inquiries: contact@agentfriendly.network</span>
        </div>
        <a
          href="mailto:contact@agentfriendly.network"
          className="text-zinc-200 hover:text-white underline underline-offset-4"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
}
