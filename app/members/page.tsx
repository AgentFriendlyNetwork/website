import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowUpRight, ArrowRight } from "lucide-react";
import { MEMBERS } from "@/content/members";

export const metadata: Metadata = {
  title: "Members & Working Groups",
  description: "Founding members, participating companies, open-source projects, and developers of the Agent-Friendly Network.",
};

export default function MembersPage() {
  const categories = [
    { title: "Open Source Projects & Steering Groups", type: "PROJECT" },
    { title: "Research Labs & Academic Institutions", type: "RESEARCH" },
    { title: "Companies & AI Platforms", type: "COMPANY" },
    { title: "Individual Contributors & Engineers", type: "DEVELOPER" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
          <Users className="w-4 h-4 text-zinc-300" />
          <span>AFN CONSORTIUM DIRECTORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Consortium Members & Contributors
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          The Agent Friendly Network brings together open-source maintainers, AI developers, research labs, and infrastructure providers committed to open, deterministic agent standards.
        </p>
      </div>

      {/* 2. Membership Tiers & Governance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 space-y-3">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Tier 1 &bull; Technical Steering
          </div>
          <h3 className="text-base font-semibold text-zinc-100">
            Steering Committee (TSC)
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Responsible for reviewing RFCs, ratifying standards, and governing overall architectural consistency across all working groups.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 space-y-3">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Tier 2 &bull; Working Groups
          </div>
          <h3 className="text-base font-semibold text-zinc-100">
            Working Group Contributors
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Engineers and teams authoring specifications, maintaining reference implementations, and verifying tooling compliance.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-5 space-y-3">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Tier 3 &bull; Ecosystem Adopters
          </div>
          <h3 className="text-base font-semibold text-zinc-100">
            Ecosystem Members
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Projects and companies implementing AFN-compliant CLI schemas, API headers, or agent.json discoverability manifests.
          </p>
        </div>
      </div>

      {/* 3. Member Directory Lists */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const membersInCat = MEMBERS.filter((m) => m.category === cat.type);
          return (
            <div key={cat.type} className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {cat.title}
                </h2>
                <span className="font-mono text-xs text-zinc-400">
                  {membersInCat.length} LISTED
                </span>
              </div>

              {membersInCat.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {membersInCat.map((member) => (
                    <div
                      key={member.id}
                      className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-5 space-y-3 flex flex-col justify-between hover:border-zinc-700 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-1">
                          <span>{member.role}</span>
                          <span>Joined {member.joinedDate}</span>
                        </div>
                        <h3 className="text-base font-semibold text-zinc-100">
                          {member.name}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                          {member.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs">
                        <span className="text-zinc-400">
                          Focus: {member.contributionArea}
                        </span>
                        {member.url && (
                          <a
                            href={member.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-300 hover:text-white inline-flex items-center gap-1"
                          >
                            <span>Profile</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-zinc-800 bg-zinc-950/40 rounded-lg p-6 text-center text-xs font-mono text-zinc-400">
                  Open for new applicants in this category. Submit your application below.
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Join CTA */}
      <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl font-bold text-white">
            Join the Network as a Member
          </h3>
          <p className="text-sm text-zinc-300">
            Whether as an individual developer, open-source maintainer, or enterprise partner, your participation shapes open standards for autonomous agents.
          </p>
        </div>
        <Link
          href="/join"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors font-mono whitespace-nowrap"
        >
          <span>Apply to Join</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
