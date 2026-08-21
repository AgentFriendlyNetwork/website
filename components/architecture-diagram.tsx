import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Terminal, Users, Cpu, Layers } from "lucide-react";

export function ArchitectureDiagram() {
  const pillars = [
    {
      title: "Standards",
      code: "TRACK-01",
      description: "Interface specifications, deterministic execution schemas, and web discoverability protocols.",
      href: "/standards",
      icon: BookOpen,
      items: ["AFN-CLI-001 (CLI Standard)", "AFN-API-001 (API Contract)", "AFN-WEB-001 (agent.json)", "AFX Core Reference"],
      badge: "Specifications",
    },
    {
      title: "Projects",
      code: "TRACK-02",
      description: "Toolchains, runtime adapters, and open-source infrastructure bridging tools to AI agents.",
      href: "/projects",
      icon: Terminal,
      items: ["OpenCLI Runtime", "MCP Adapter Layer", "agent.json Linter / Validator", "CLI Discovery Tools"],
      badge: "Tooling & Infra",
    },
    {
      title: "Agent-Native",
      code: "TRACK-03",
      description: "Applications and platforms architected agent-first without human interface assumptions.",
      href: "/agent-native",
      icon: Cpu,
      items: ["Moltbook Agent Social", "Autonomous Coordination", "Machine Consensus Layer", "Agent-to-Agent Handshake"],
      badge: "Emergent Paradigm",
    },
    {
      title: "Members",
      code: "TRACK-04",
      description: "Global network of developers, engineering teams, open-source projects, and research institutions.",
      href: "/members",
      icon: Users,
      items: ["Individual Developers", "Open Source Projects", "AI Infrastructure Companies", "Research Labs & Universities"],
      badge: "Consortium",
    },
  ];

  return (
    <div className="w-full">
      {/* Visual Terminal/ASCII Box Header */}
      <div className="border border-zinc-800 bg-zinc-950/80 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-zinc-300" />
            <span className="text-zinc-200 font-semibold tracking-wider uppercase">
              AFN Ecosystem Topology
            </span>
          </div>
          <span className="text-[11px] text-zinc-400">
            SPEC_LEVEL: v0.1-ARCH
          </span>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-zinc-700 transition-all rounded-md p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
                    <span className="text-zinc-400 font-medium">{pillar.code}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-zinc-300" />
                    <h3 className="font-semibold text-zinc-100 text-base group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400">
                    {pillar.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-zinc-400 select-none">-</span>
                        <span className="text-zinc-300 truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/60">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>View track details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
