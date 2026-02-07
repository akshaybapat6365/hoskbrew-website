"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "full";
  className?: string;
  asLink?: boolean;
  priority?: boolean;
}

const WHITE_VARIANTS_AVAILABLE = ["horizontal", "stacked"];

export function Logo({
  variant = "horizontal",
  className,
  asLink = true,
  priority = true,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";
  const hasWhiteVariant = WHITE_VARIANTS_AVAILABLE.includes(variant);
  const useWhiteVariant = isDarkMode && hasWhiteVariant;

  const colorMode = useWhiteVariant ? "white" : "color";
  const logoSrc = `/logos/${variant}-${colorMode}.svg`;

  const logoSizes = {
    horizontal: { width: 343, height: 41, minHeight: 32, minWidth: 100 },
    stacked: { width: 202, height: 147, minHeight: 48, minWidth: 64 },
    full: { width: 202, height: 147, minHeight: 60, minWidth: 80 },
  };

  const { width, height, minHeight } = logoSizes[variant];

  const invertClass =
    isDarkMode && !hasWhiteVariant ? "invert brightness-200" : "";

  const logoElement = (
    <div
      className={cn(
        "relative transition-transform duration-300 hover:scale-105",
        className,
      )}
      style={{
        minHeight: `${minHeight}px`,
      }}
    >
      <Image
        src={logoSrc}
        alt="HoskBrew"
        width={width}
        height={height}
        className={cn(
          "h-auto",
          variant === "horizontal" && "w-auto max-h-8 md:max-h-10",
          variant === "stacked" && "w-auto max-h-12 md:max-h-16",
          variant === "full" && "w-auto max-h-16 md:max-h-20",
          invertClass,
        )}
        priority={priority}
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded-sm"
        aria-label="HoskBrew Home"
      >
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}

export function LogoResponsive({
  className,
  priority = true,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <div className="hidden md:block">
        <Logo variant="horizontal" className={className} priority={priority} />
      </div>
      <div className="block md:hidden">
        <Logo variant="stacked" className={className} priority={priority} />
      </div>
    </>
  );
}
