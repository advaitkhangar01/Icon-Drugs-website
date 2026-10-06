import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
  showTagline?: boolean;
}

export default function IconLogo({
  variant = "color",
  className = "h-11 w-auto",
  showTagline = false,
}: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Client's transparent logo asset */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0">
        <Image
          src="/transparent-logo.png"
          alt="Icon Drugs Brand Mark"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Wordmark & Descriptor */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5 font-heading">
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight ${
              isWhite ? "text-white" : "text-[#005EB1]"
            }`}
          >
            ICON
          </span>
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight ${
              isWhite ? "text-white/90" : "text-[#111111]"
            }`}
          >
            DRUGS
          </span>
        </div>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.22em] mt-1 ${
            isWhite ? "text-[#F87901]" : "text-[#F87901]"
          }`}
        >
          PHARMACEUTICALS
        </span>
      </div>

      {showTagline && (
        <span
          className={`hidden xl:inline-block text-xs font-medium pl-3.5 border-l ${
            isWhite ? "border-white/20 text-blue-100" : "border-slate-300 text-slate-500"
          }`}
        >
          Healthcare, built on experience.
        </span>
      )}
    </div>
  );
}
