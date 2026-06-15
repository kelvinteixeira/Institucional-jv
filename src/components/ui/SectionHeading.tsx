import { cn } from "@/lib/utils/cn";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {label && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-widest",
            light ? "text-gold" : "text-gold-dark"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-0.5 w-16",
          light ? "bg-gold" : "bg-gold"
        )}
      />
    </div>
  );
}
