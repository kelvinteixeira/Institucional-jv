"use client";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ProfileImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  const altText =
    alt ?? `Foto profissional de ${siteConfig.lawyer.fullName}`;

  if (hasError) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-light to-navy-muted",
          className
        )}
      >
        <Image
          src="/logo-mark.png"
          alt={siteConfig.brand.name}
          width={100}
          height={100}
          className="mb-3 h-20 w-20 opacity-40"
        />
        <span className="font-display text-lg font-bold text-white/30">
          {siteConfig.brand.name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={altText}
      fill
      priority={priority}
      className={cn("object-cover object-top", imageClassName)}
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setHasError(true)}
    />
  );
}
