import React from "react";
import Link from "next/link";
import registryProjects from "@/content/registry-projects.json";

interface AgentProject {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  standards_compliance: string[];
  verification_matrix?: {
    identity_attested: boolean;
    tools_verified: boolean;
    permissions_audited: boolean;
    capability_benchmarked: boolean;
  };
  reputation_metrics?: {
    verified_deliveries: number;
    accuracy_rate: number;
    repeat_hire_rate: number;
    total_gmv_usd: number;
    dispute_ratio: number;
    trust_tier: string;
  };
  vertical_specialties?: string[];
}

function getVerifiedAgents(): AgentProject[] {
  const list = registryProjects as unknown as AgentProject[];
  return list.filter((p) => Boolean(p.reputation_metrics));
}

export default function ReputationExplorerPage() {
  const agents = getVerifiedAgents();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="border-b border-slate-800 pb-8">
          <div className="flex items-center space-x-3 text-emerald-400 font-mono text-sm tracking-wider uppercase mb-2">
            <span>AFN-007 / Verified Trust Layer</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Agent Trust & Reputation Explorer
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl leading-relaxed">
            Verifiable real-world delivery data and cryptographic acceptance receipts. 
            Certifications can be copied; long-term verifiable work performance cannot.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/api/v1/reputation"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-slate-700 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Open API: /api/v1/reputation
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800">
              Protocol: AFN-007 Provenance
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6 hover:border-slate-700 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/80 mb-2">
                    {agent.reputation_metrics?.trust_tier || "Verified"}
                  </span>
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">did:afn:agent:{agent.id}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {((agent.reputation_metrics?.accuracy_rate || 0) * 100).toFixed(1)}%
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">SLA Accuracy</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{agent.description}</p>

              {agent.verification_matrix && (
                <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-800/80 space-y-3">
                  <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                    AFN-008 Four-Tier Attestation
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span>Identity Attested</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span>Tools Verified</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span>Permissions Audited</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span>Capability Benchmarked</span>
                    </div>
                  </div>
                </div>
              )}

              {agent.reputation_metrics && (
                <div className="grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white font-mono">
                      {agent.reputation_metrics.verified_deliveries.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-500">Verified Units</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">
                      {((agent.reputation_metrics.repeat_hire_rate) * 100).toFixed(1)}%
                    </div>
                    <div className="text-[11px] text-slate-500">Repeat Hire</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">
                      ${agent.reputation_metrics.total_gmv_usd.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-500">Volume Settled</div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-500">
                <span>Dispute Ratio: {((agent.reputation_metrics?.dispute_ratio || 0) * 100).toFixed(2)}%</span>
                <a
                  href={agent.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  View in Marketplace
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
