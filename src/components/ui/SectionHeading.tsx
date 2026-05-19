import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400/80">
          <span className="size-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-balance text-base text-zinc-400 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
