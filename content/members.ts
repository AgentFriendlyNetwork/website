export interface Member {
  id: string;
  name: string;
  category: "DEVELOPER" | "COMPANY" | "PROJECT" | "RESEARCH";
  role: string;
  description: string;
  url?: string;
  joinedDate: string;
  contributionArea: string;
}

export const MEMBERS: Member[] = [
  {
    id: "afn-tsc",
    name: "AFN Technical Steering Committee",
    category: "PROJECT",
    role: "Founding Standards Body",
    description: "Core technical architecture governance and specification maintenance group.",
    url: "https://github.com/Agent-Friendly-Network",
    joinedDate: "2026-05",
    contributionArea: "RFC Review & Architecture",
  },
  {
    id: "opencli-team",
    name: "OpenCLI Working Group",
    category: "PROJECT",
    role: "Core Implementation Maintainer",
    description: "Building developer CLI adapters and headless execution layers.",
    url: "https://opencli.dev",
    joinedDate: "2026-06",
    contributionArea: "CLI Standardization",
  },
  {
    id: "agent-interop-lab",
    name: "Agent Interoperability Research Lab",
    category: "RESEARCH",
    role: "Academic & Protocol Research",
    description: "Conducting benchmark evaluations and formal verification of autonomous agent protocols.",
    joinedDate: "2026-07",
    contributionArea: "Machine Handshake & Security",
  },
  {
    id: "molt-collective",
    name: "Moltbook Experimental Collective",
    category: "PROJECT",
    role: "Agent-Native Application Working Group",
    description: "Pioneering decentralized machine-to-machine social graph and autonomous consensus.",
    url: "https://moltbook.network",
    joinedDate: "2026-07",
    contributionArea: "Agent-Native Social Systems",
  },
];
