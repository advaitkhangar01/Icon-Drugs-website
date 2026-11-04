import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
  showTagline?: boolean;
  markOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function IconLogo({
  variant = "color",
  className = "",
  showTagline = false,
  markOnly = false,
  size = "md",
}: LogoProps) {
  const isWhite = variant === "white";

  const sizeClasses = {
    sm: {
      mark: "h-8 w-8 sm:h-9 sm:w-9",
      iconText: "text-lg sm:text-xl",
      pharmaText: "text-[7.5px] sm:text-[8px] tracking-[0.2em]",
    },
    md: {
      mark: "h-10 w-10 sm:h-11 sm:w-11",
      iconText: "text-xl sm:text-2xl",
      pharmaText: "text-[8.5px] sm:text-[9.5px] tracking-[0.22em]",
    },
    lg: {
      mark: "h-12 w-12 sm:h-14 sm:w-14",
      iconText: "text-2xl sm:text-3xl",
      pharmaText: "text-[10px] sm:text-[11px] tracking-[0.24em]",
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Client's original logo brand mark, centered & optimized */}
      <div className={`relative ${sizeClasses.mark} shrink-0`}>
        <Image
          src="/icon-brand-mark.png"
          alt="Icon Drugs Brand Mark"
          fill
          sizes="56px"
          className={`object-contain transition-transform duration-200 ${
            isWhite ? "brightness-110 drop-shadow-[0_2px_8px_rgba(0,94,177,0.35)]" : "drop-shadow-sm"
          }`}
          priority
        />
      </div>

      {/* Brand Wordmark & Descriptor */}
      {!markOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5 font-heading">
            <span
              className={`font-black tracking-tight ${sizeClasses.iconText} ${
                isWhite ? "text-white" : "text-[#005EB1]"
              }`}
            >
              ICON
            </span>
            <span
              className={`font-black tracking-tight ${sizeClasses.iconText} ${
                isWhite ? "text-white/95" : "text-[#111111]"
              }`}
            >
              DRUGS
            </span>
          </div>
          <span
            className={`font-bold uppercase mt-1 ${sizeClasses.pharmaText} ${
              isWhite ? "text-[#FFA733]" : "text-[#F87901]"
            }`}
          >
            PHARMACEUTICALS
          </span>
        </div>
      )}

      {showTagline && !markOnly && (
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
