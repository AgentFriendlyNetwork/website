export interface SupportChannel {
  id: string;
  name: string;
  type: "GITHUB_SPONSORS" | "STRIPE" | "CRYPTO" | "CORPORATE";
  tagline: string;
  description: string;
  url?: string;
  details?: string;
}

export const FUND_ALLOCATIONS = [
  {
    category: "Open Standards",
    percentage: "35%",
    description: "RFC drafting, schema maintenance, specification benchmarking, and formal protocol verification.",
  },
  {
    category: "Open Source Infrastructure",
    percentage: "30%",
    description: "Continuous testing infrastructure for OpenCLI, agent.json validators, and headless testbeds.",
  },
  {
    category: "Developer Programs",
    percentage: "20%",
    description: "Grants and bounties for developers writing agent-friendly CLI wrappers and protocol adapters.",
  },
  {
    category: "AFN Operations",
    percentage: "15%",
    description: "Domain hosting, legal compliance, governance tooling, and technical steering committee operations.",
  },
];

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: "github-sponsors",
    name: "GitHub Sponsors",
    type: "GITHUB_SPONSORS",
    tagline: "Monthly or one-time developer sponsorship with zero payment friction.",
    description: "Directly sponsor the Agent-Friendly Network organization via GitHub Sponsors.",
    url: "https://github.com/sponsors/Agent-Friendly-Network",
  },
  {
    id: "stripe-portal",
    name: "Stripe Global Portal",
    type: "STRIPE",
    tagline: "Direct credit card and international business payment processing.",
    description: "Support AFN via international card payments, ACH, and business invoices.",
    url: "https://agentfriendly.network/support",
  },
  {
    id: "crypto-treasury",
    name: "Agent-Native Crypto Treasury",
    type: "CRYPTO",
    tagline: "Transparent on-chain treasury supporting USDC, ETH, and autonomous micro-settlements.",
    description: "Cryptographic treasury multisig for transparent, verifiable agent-to-agent funding.",
    details: "Treasury Address: 0xAFN... (Multisig Managed)",
  },
  {
    id: "corporate-sponsor",
    name: "Corporate Partner / Sponsor",
    type: "CORPORATE",
    tagline: "Strategic enterprise sponsorship for AI platforms and cloud infrastructure providers.",
    description: "For enterprises seeking to align developer platforms with AFN interoperability standards.",
    url: "mailto:contact@agentfriendly.network",
  },
];
