export interface StandardRFC {
  id: string;
  code: string;
  title: string;
  stage: "DRAFT" | "PROPOSED" | "RATIFIED" | "REFERENCE";
  category: "CLI" | "API" | "WEB" | "MCP" | "DATA" | "INTEROP";
  workingGroup: string;
  lastUpdated: string;
  abstract: string;
  keyPoints: string[];
  docUrl?: string;
}

export interface WorkingGroup {
  id: string;
  name: string;
  charter: string;
  lead: string;
  rfcs: string[];
}

export const STANDARDS: StandardRFC[] = [
  {
    id: "afn-001-cli",
    code: "AFN-001",
    title: "Agent-Friendly Command Line Interface Specification",
    stage: "PROPOSED",
    category: "CLI",
    workingGroup: "WG-CLI Automation",
    lastUpdated: "2026-08-21",
    abstract:
      "Defines runtime flags, machine-readable output schemas (--json, --schema), deterministic exit codes, and non-interactive execution guarantees for terminal utilities.",
    keyPoints: [
      "Strict structured JSON/JSONL output over stdout with zero terminal escape noise",
      "Dynamic command discovery via --schema and tool definition introspection",
      "Deterministic non-zero exit codes mapped to standardized error categories",
      "Non-interactive fallback guarantees preventing unhandled STDIN prompt deadlocks",
    ],
    docUrl: "/docs/spec/AFN-001-CLI-Friendly.md",
  },
  {
    id: "afn-002-api",
    code: "AFN-002",
    title: "Deterministic API Contracts for Autonomous Agents",
    stage: "DRAFT",
    category: "API",
    workingGroup: "WG-API & Handshake",
    lastUpdated: "2026-08-21",
    abstract:
      "Establishes idempotency keys, rate-limit discovery headers, machine-readable error recovery hints, and atomic operation boundaries for Web APIs.",
    keyPoints: [
      "Mandatory Idempotency-Key handling on all mutating state endpoints",
      "Granular Retry-After and rate-limit discovery headers",
      "Machine-actionable error payloads conforming to RFC 9457",
      "OpenAPI 3.1 schema publishing for autonomous tool discovery",
    ],
    docUrl: "/docs/spec/AFN-002-API-Friendly.md",
  },
  {
    id: "afn-003-web",
    code: "AFN-003",
    title: "Agent-Friendly Web Property & Documentation Specification",
    stage: "DRAFT",
    category: "WEB",
    workingGroup: "WG-Web Discoverability",
    lastUpdated: "2026-08-21",
    abstract:
      "Specifies the llms.txt standard files, markdown content negotiation, and accessibility tree preservation for indexing website capabilities.",
    keyPoints: [
      "Plaintext semantic context mapping via llms.txt and llms-full.txt",
      "Content negotiation supporting Accept: text/markdown for clean LLM ingestion",
      "Explicit robots.txt AI agent policies and security declarations",
      "Semantic HTML tags and accessible ARIA landmark preservation",
    ],
    docUrl: "/docs/spec/AFN-003-Web-Friendly.md",
  },
  {
    id: "afn-004-mcp",
    code: "AFN-004",
    title: "Agent-Friendly Model Context Protocol (MCP) Server & Tool Specification",
    stage: "DRAFT",
    category: "MCP",
    workingGroup: "WG-MCP & Context",
    lastUpdated: "2026-08-21",
    abstract:
      "Establishes production-grade design and governance guidelines for Model Context Protocol servers, tools, timeouts, and token budgeting.",
    keyPoints: [
      "Concise, intent-driven tool naming and descriptions preventing model distraction",
      "Strict JSON Schema input validation with explicit enumerations and bounds",
      "Mandatory tool execution timeouts (max 30s) and cancellation token handling",
      "Token-optimized payloads with automatic pagination and summarization",
    ],
    docUrl: "/docs/spec/AFN-004-MCP-Friendly.md",
  },
  {
    id: "afn-005-data",
    code: "AFN-005",
    title: "Agent-Friendly Structured Data & Knowledge Specification",
    stage: "DRAFT",
    category: "DATA",
    workingGroup: "WG-Data & Semantics",
    lastUpdated: "2026-08-21",
    abstract:
      "Specifies dataset publication, metadata indexing, schema declaration, and entity resolution designed for direct ingestion by AI agents.",
    keyPoints: [
      "Explicit schema definitions via JSON Schema, JSON-LD, or Parquet",
      "Standard global entity URIs and identifier resolution",
      "Dataset manifests with pre-computed semantic chunks for RAG pipelines",
      "Semantic versioning and immutable snapshot hashing for deterministic benchmarks",
    ],
    docUrl: "/docs/spec/AFN-005-Data-Friendly.md",
  },
  {
    id: "afx-ref-001",
    code: "AFX-CORE",
    title: "Agent-Friendly Interface Standard Reference (AFX)",
    stage: "REFERENCE",
    category: "INTEROP",
    workingGroup: "WG-External References",
    lastUpdated: "2026-08-21",
    abstract:
      "Community reference architecture for standardizing agent interface abstractions, state representations, and execution wrappers across heterogeneous tools.",
    keyPoints: [
      "Community reference for agent interface conventions",
      "Unified abstraction layer over legacy command-line tools",
      "Bi-directional event streaming and execution tracing primitives",
    ],
  },
];

export const WORKING_GROUPS: WorkingGroup[] = [
  {
    id: "wg-cli",
    name: "CLI Automation Working Group",
    charter:
      "Standardizing command-line interfaces for reliable, structured, deterministic AI Agent execution.",
    lead: "AFN Technical Steering Committee",
    rfcs: ["AFN-001"],
  },
  {
    id: "wg-api",
    name: "API & Handshake Working Group",
    charter:
      "Defining robust, self-remediating, and deterministic API protocols tailored for autonomous systems.",
    lead: "AFN Technical Steering Committee",
    rfcs: ["AFN-002"],
  },
  {
    id: "wg-web",
    name: "Web Discoverability Working Group",
    charter:
      "Establishing web-scale discoverability standards (llms.txt, semantic negotiation) for machine agents.",
    lead: "AFN Technical Steering Committee",
    rfcs: ["AFN-003"],
  },
  {
    id: "wg-mcp",
    name: "MCP & Context Working Group",
    charter:
      "Formulating standards for Model Context Protocol servers, tool safety, timeouts, and schema clarity.",
    lead: "AFN Technical Steering Committee",
    rfcs: ["AFN-004"],
  },
  {
    id: "wg-data",
    name: "Data & Semantics Working Group",
    charter:
      "Defining machine-readable dataset packaging, semantic chunking, and JSON-LD entity linking standards.",
    lead: "AFN Technical Steering Committee",
    rfcs: ["AFN-005"],
  },
];
