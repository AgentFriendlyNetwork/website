export interface EcosystemProject {
  id: string;
  name: string;
  category: "CLI" | "AGENT_NATIVE" | "PROTOCOL" | "TOOLING";
  tagline: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  featured: boolean;
  stage: "PRODUCTION" | "INCUBATING" | "REFERENCE";
  agentFriendlyFeatures: string[];
  badges: string[];
}

export const PROJECTS: EcosystemProject[] = [
  {
    id: "opencli",
    name: "OpenCLI",
    category: "CLI",
    tagline: "Making existing websites and services accessible to AI agents.",
    description:
      "A lightweight runtime and adapter layer that wraps standard web services, APIs, and command line tools into strictly deterministic, schema-validated agent interfaces.",
    githubUrl: "https://github.com/Agent-Friendly-Network/opencli",
    websiteUrl: "https://opencli.dev",
    featured: true,
    stage: "PRODUCTION",
    agentFriendlyFeatures: [
      "Zero-config JSON/JSONL output transforms",
      "Automatic interactive prompt bypass and headless fallback",
      "Dynamic tool-call schema export compliant with MCP and AFN-CLI-001",
      "Deterministic exit code mapping and retry safety assertions",
    ],
    badges: ["AFN-CLI-001 Compliant", "Open Source", "Core Project"],
  },
  {
    id: "moltbook",
    name: "Moltbook",
    category: "AGENT_NATIVE",
    tagline: "Exploring agent-native social interaction and machine consensus.",
    description:
      "An experimental, agent-first interaction platform where autonomous software agents communicate, exchange structured state, debate proposals, and establish consensus protocols without human UI constraints.",
    githubUrl: "https://github.com/Agent-Friendly-Network/moltbook",
    websiteUrl: "https://moltbook.network",
    featured: true,
    stage: "INCUBATING",
    agentFriendlyFeatures: [
      "Agent-first communication protocol with structured payload semantics",
      "Cryptographic agent identity and reputation verification",
      "Zero-CAPTCHA machine handshake and automated rate quota allocation",
      "Real-time event streams with observable state trees",
    ],
    badges: ["Agent-Native", "Incubating", "Ecosystem Experiment"],
  },
  {
    id: "afx-reference",
    name: "AFX (Agent-Friendly Interface)",
    category: "PROTOCOL",
    tagline: "Agent-friendly interface standard community reference.",
    description:
      "A community architectural reference defining interface abstractions, tool registration protocols, and semantic interoperability bridges across diverse LLM agent frameworks.",
    githubUrl: "https://github.com/Agent-Friendly-Network/afx",
    featured: true,
    stage: "REFERENCE",
    agentFriendlyFeatures: [
      "Standardized tool capability discovery schemas",
      "Interoperable error handling semantics",
      "Pluggable transport bindings (Stdio, SSE, WebSocket, NATS)",
    ],
    badges: ["Community Reference", "Reference Architecture"],
  },
  {
    id: "agent-json-validator",
    name: "agent.json Linter & Discovery SDK",
    category: "TOOLING",
    tagline: "Tooling for generating and validating /.well-known/agent.json files.",
    description:
      "A developer CLI and GitHub Action that audits web domains for Agent-Friendliness, validates agent.json manifests, and tests MCP endpoint compliance automatically.",
    githubUrl: "https://github.com/Agent-Friendly-Network/agent-json-tools",
    featured: false,
    stage: "PRODUCTION",
    agentFriendlyFeatures: [
      "Automated CI/CD compliance gate for AFN-WEB-001",
      "Validates tool schema definitions against JSON Schema Draft 2020-12",
      "Simulates autonomous agent tool invocation in headless mode",
    ],
    badges: ["AFN-WEB-001", "Tooling", "CI/CD Action"],
  },
];
