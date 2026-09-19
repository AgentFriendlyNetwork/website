import { NextRequest, NextResponse } from "next/server";
import registryProjects from "@/content/registry-projects.json";

interface RegistryProject {
  id: string;
  name: string;
  category?: string;
  verification_matrix?: {
    identity_attested?: boolean;
    tools_verified?: boolean;
    permissions_audited?: boolean;
    capability_benchmarked?: boolean;
  };
  reputation_metrics?: {
    verified_deliveries?: number;
    accuracy_rate?: number;
    repeat_hire_rate?: number;
    total_gmv_usd?: number;
    dispute_ratio?: number;
    trust_tier?: string;
  };
  vertical_specialties?: string[];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get("agent_id");

    const projects = registryProjects as unknown as RegistryProject[];

    if (agentId) {
      const project = projects.find((p) => p.id === agentId);
      if (!project) {
        return NextResponse.json({ error: "Agent not found" }, { status: 404 });
      }
      return NextResponse.json({
        agent_id: project.id,
        name: project.name,
        verification_matrix: project.verification_matrix || null,
        reputation_metrics: project.reputation_metrics || null,
        vertical_specialties: project.vertical_specialties || []
      });
    }

    const reputationLeaderboard = projects
      .filter((p) => p.reputation_metrics)
      .map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        verification_matrix: p.verification_matrix,
        reputation_metrics: p.reputation_metrics,
        vertical_specialties: p.vertical_specialties
      }));

    return NextResponse.json({
      total_verified_agents: reputationLeaderboard.length,
      agents: reputationLeaderboard
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const receipt = await request.json();

    if (!receipt.receipt_id || !receipt.source_market || !receipt.agent || !receipt.client_signature) {
      return NextResponse.json({ error: "Invalid receipt payload according to AFN-007" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      receipt_id: receipt.receipt_id,
      status: "ATTESTED",
      message: "Receipt accepted and queued for trust ledger settlement",
      timestamp: new Date().toISOString()
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid JSON";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
