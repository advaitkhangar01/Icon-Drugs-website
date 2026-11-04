import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function NutraceuticalsVitalitySvg({
  className = "w-full h-full",
  isActive = false,
  ...props
}: SvgProps) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Nutraceuticals and Botanical Bioactive Antioxidant Molecular Lattice Illustration"
      {...props}
    >
      <title>Nutraceuticals & General Wellness</title>
      <defs>
        <linearGradient id={`${id}-leaf-grad`} x1="60" y1="180" x2="180" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#ECFDF5" />
          <stop offset="100%" stopColor="#A7F3D0" />
        </linearGradient>
        <linearGradient id={`${id}-hex-grad-1`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id={`${id}-hex-grad-2`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFEDD5" />
          <stop offset="100%" stopColor="#F87901" />
        </linearGradient>
      </defs>

      <g>
        {/* Metabolic Orbit Rings */}
        <circle
          cx="120"
          cy="120"
          r="88"
          stroke="#005EB1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.35"
        />
        <circle
          cx="120"
          cy="120"
          r="72"
          stroke="#F87901"
          strokeWidth="1.2"
          strokeDasharray="2 4"
          opacity="0.45"
        />

        {/* ============================================================ */}
        {/* SCIENTIFIC BOTANICAL LEAF WITH VASCULAR VENATION             */}
        {/* ============================================================ */}
        <path
          d="M58 178 C64 126 104 68 178 54 C184 94 162 168 58 178 Z"
          fill={`url(#${id}-leaf-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Primary Vascular Midrib */}
        <path
          d="M58 178 C94 154 134 116 178 54"
          stroke="#0F2B48"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Secondary Lateral Vein Arcs */}
        <path d="M88 156 C96 142 110 138 126 140" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M112 136 C124 118 140 114 156 116" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M136 108 C144 94 156 90 170 90" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M96 150 C94 162 90 168 84 172" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M120 130 C118 144 112 152 106 158" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* INTERLOCKED ANTIOXIDANT HEXAGONAL MOLECULAR SYSTEM (BENZENE) */}
        {/* ============================================================ */}
        {/* Primary Molecular Hexagon Ring (Center-Left) */}
        <g>
          <path
            d="M92 78 L114 65 L136 78 L136 103 L114 116 L92 103 Z"
            fill={`url(#${id}-hex-grad-1)`}
            stroke="#0F2B48"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Inner Aromatic Conjugated Double Bonds */}
          <path d="M114 73 L129 82" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M129 97 L114 106" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M99 97 L99 84" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />
          {/* Core Molecular Center Node */}
          <circle cx="114" cy="90.5" r="3.5" fill="#005EB1" />
        </g>

        {/* Secondary Bioactive Hexagon (Interlocked Right) */}
        <g>
          <path
            d="M136 103 L158 90 L180 103 L180 128 L158 141 L136 128 Z"
            fill={`url(#${id}-hex-grad-2)`}
            stroke="#0F2B48"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <circle cx="158" cy="115.5" r="4" fill="#FFFFFF" stroke="#0F2B48" strokeWidth="1.8" />
        </g>

        {/* Chemical Bond Connector Lines */}
        <line x1="114" y1="65" x2="114" y2="48" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="114" cy="46" r="4" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />

        <line x1="180" y1="128" x2="194" y2="136" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="196" cy="138" r="4" fill="#005EB1" stroke="#0F2B48" strokeWidth="1.8" />

        {/* Bioactive Micronutrient Sparkles */}
        <path
          d="M62 82 L64 87 L69 89 L64 91 L62 96 L60 91 L55 89 L60 87 Z"
          fill="#F87901"
        />
        <path
          d="M188 74 L190 79 L195 81 L190 83 L188 88 L186 83 L181 81 L186 79 Z"
          fill="#005EB1"
        />
        <path
          d="M128 174 L130 178 L134 180 L130 182 L128 186 L126 182 L122 180 L126 178 Z"
          fill="#F87901"
        />
      </g>
    </svg>
  );
}
