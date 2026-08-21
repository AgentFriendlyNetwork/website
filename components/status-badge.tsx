import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "DRAFT" | "PROPOSED" | "RATIFIED" | "REFERENCE" | "PRODUCTION" | "INCUBATING" | string;
  className?: string;
  showBracket?: boolean;
}

export function StatusBadge({ status, className, showBracket = true }: StatusBadgeProps) {
  const normalized = status.toUpperCase();

  const getStyle = () => {
    switch (normalized) {
      case "RATIFIED":
      case "PRODUCTION":
        return "border-emerald-700/60 bg-emerald-950/40 text-emerald-300";
      case "PROPOSED":
        return "border-amber-700/60 bg-amber-950/40 text-amber-300";
      case "DRAFT":
      case "INCUBATING":
        return "border-sky-700/60 bg-sky-950/40 text-sky-300";
      case "REFERENCE":
        return "border-zinc-600/60 bg-zinc-900/60 text-zinc-300";
      default:
        return "border-zinc-700 bg-zinc-900 text-zinc-300";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium border rounded transition-colors",
        getStyle(),
        className
      )}
    >
      {showBracket ? `[${normalized}]` : normalized}
    </span>
  );
}
