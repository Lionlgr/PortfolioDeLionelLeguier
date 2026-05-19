import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "default" | "accent" | "outline" | "soft";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const styles: Record<Variant, string> = {
    default: "bg-zinc-900 text-zinc-300 border-zinc-800",
    accent: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    outline: "bg-transparent text-zinc-400 border-zinc-700/60",
    soft: "bg-zinc-900/60 text-zinc-300 border-zinc-800/80",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
