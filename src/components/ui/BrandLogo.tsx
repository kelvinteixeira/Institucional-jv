import { LogoMark } from "@/components/ui/LogoMark";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

interface BrandLogoProps {
  variant?: "horizontal" | "stacked";
  className?: string;
  iconClassName?: string;
  priority?: boolean;
}

export function BrandLogo({
  variant = "horizontal",
  className,
  iconClassName,
  priority = false,
}: BrandLogoProps) {
  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center text-center", className)}>
        <LogoMark
          priority={priority}
          className={cn("h-16 w-16 sm:h-20 sm:w-20", iconClassName)}
        />
        <span className="mt-3 font-display text-xl font-bold tracking-[0.2em] text-gold sm:text-2xl">
          {siteConfig.brand.name}
        </span>
        <div className="mt-2 flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60 sm:w-12" />
          <span className="text-[10px] font-medium tracking-[0.35em] text-gold/90 uppercase sm:text-xs">
            {siteConfig.brand.tagline}
          </span>
          <span className="h-px w-8 bg-gold/60 sm:w-12" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark
        priority={priority}
        className={cn("h-16 w-16 sm:h-[72px] sm:w-[72px]", iconClassName)}
      />
      <div>
        <span className="block font-display text-lg font-bold leading-tight tracking-[0.15em] text-gold sm:text-xl">
          {siteConfig.brand.name}
        </span>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-px w-4 bg-gold/50" />
          <span className="text-[10px] font-medium tracking-[0.3em] text-gold/80 uppercase">
            {siteConfig.brand.tagline}
          </span>
          <span className="h-px w-4 bg-gold/50" />
        </div>
      </div>
    </div>
  );
}
