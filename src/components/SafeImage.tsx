"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SafeImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`image-fallback flex h-full w-full items-center justify-center ${className ?? ""}`}
      >
        <span className="max-w-[70%] text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Metakent İnşaat
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
