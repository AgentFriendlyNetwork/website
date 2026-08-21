export interface Principle {
  id: string;
  number: string;
  title: string;
  shortDefinition: string;
  description: string;
  technicalRequirements: string[];
  examples: string[];
}

export const PRINCIPLES: Principle[] = [
  {
    id: "machine-readable",
    number: "01",
    title: "Machine-Readable",
    shortDefinition: "Outputs and interfaces formatted natively for parseability without heuristic regex scraping.",
    description:
      "All execution output, data feeds, and errors must be emitted as strictly structured payloads (such as JSON or JSONL) with zero unstructured terminal escape artifacts or arbitrary plain text logs.",
    technicalRequirements: [
      "Dedicated non-interactive output mode (--json / --jsonl / Content-Type: application/json)",
      "Strict schema adherence according to RFC specs",
      "Explicit schema definitions bundled with payload or queryable via introspection",
    ],
    examples: ["Clean JSON arrays", "Typed streaming events", "Standard JSON-Schema validation"],
  },
  {
    id: "deterministic",
    number: "02",
    title: "Deterministic",
    shortDefinition: "Predictable behavior, strict idempotency boundaries, and standardized return codes.",
    description:
      "Given the same input parameters and environmental state, operations must yield predictable side effects, standardized exit codes, and repeatable outcomes without subtle interactive prompts.",
    technicalRequirements: [
      "Standardized non-zero exit codes mapped to unambiguous failure domains",
      "Strict Idempotency-Key support across all state-mutating actions",
      "Zero unhandled interactive STDIN deadlocks in headless runtime mode",
    ],
    examples: ["Deterministic exit codes (0, 1, 2, 64-78)", "Idempotent mutation APIs", "Headless timeout safeguards"],
  },
  {
    id: "discoverable",
    number: "03",
    title: "Discoverable Capabilities",
    shortDefinition: "Self-describing interfaces enabling autonomous runtime capability discovery.",
    description:
      "AI Agents should not rely on hardcoded static assumptions. Services and CLI utilities must expose introspection endpoints, manifests, and command schemas at runtime.",
    technicalRequirements: [
      "Standard manifest location at /.well-known/agent.json and llms.txt",
      "Introspection flags (--schema / --agent-capabilities / OpenAPI endpoint)",
      "Structured capability descriptors detailing parameters, permissions, and side effects",
    ],
    examples: ["/.well-known/agent.json", "--schema introspection flag", "llms.txt semantic index"],
  },
  {
    id: "safe-automation",
    number: "04",
    title: "Safe Automation",
    shortDefinition: "Clear security boundaries, rate quotas, and reversible execution safeguards.",
    description:
      "Autonomous systems must operate within well-defined permission envelopes with explicit confirmation gates on destructive operations, non-interactive rate limits, and rollback primitives.",
    technicalRequirements: [
      "Explicit capability-based access control and read-only sandbox options",
      "Standardized dry-run mode (--dry-run / ?dry_run=true)",
      "X-Agent-Budget and Rate-Limit quota transparency headers",
    ],
    examples: ["Granular scoped API tokens", "Compensating rollback transactions", "Simulated dry-run validation"],
  },
  {
    id: "observable",
    number: "05",
    title: "Observable Execution",
    shortDefinition: "Transparent execution traces, correlation IDs, and structured diagnostic telemetry.",
    description:
      "Every automated action initiated by an agent must be traceable, auditable, and correlated across multi-step execution workflows to ensure accountability and rapid remediation.",
    technicalRequirements: [
      "Propagation of W3C TraceContext (traceparent) and X-Agent-Trace-ID",
      "Structured event logging capturing input parameters, agent decisions, and tool returns",
      "Auditable execution provenance logs for compliance and replay",
    ],
    examples: ["OpenTelemetry trace spans", "Step-by-step decision auditing", "Structured JSON diagnostic logs"],
  },
];
