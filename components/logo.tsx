"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function Logo({
  className = "",
  width = 200,
  height = 80,
  showText = false,
}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt="Hoskbrew"
          width={width}
          height={height}
          className="drop-shadow-lg"
          priority
        />
      </div>
      {showText && (
        <span className="font-display text-2xl md:text-3xl tracking-wide hidden sm:block">
          Physical Games
        </span>
      )}
    </Link>
  );
}

export function LogoSmall({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/logo.svg"
        alt="Hoskbrew"
        width={140}
        height={56}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}
