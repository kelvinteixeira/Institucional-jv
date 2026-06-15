import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface LogoMarkProps {
  className?: string;
  priority?: boolean;
}

export function LogoMark({ className, priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden
      width={88}
      height={88}
      priority={priority}
      className={cn("h-20 w-20 shrink-0 object-contain sm:h-[88px] sm:w-[88px]", className)}
    />
  );
}
