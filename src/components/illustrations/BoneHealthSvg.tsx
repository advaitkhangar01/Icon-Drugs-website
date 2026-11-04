import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function BoneHealthSvg({
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
      aria-label="Bone Health Anatomical Femur with Trabecular Osteon Micro-Architecture"
      {...props}
    >
      <title>Bone Health & Mineral Metabolism</title>
      <defs>
        <linearGradient id={`${id}-bone-grad`} x1="60" y1="60" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F7FF" />
          <stop offset="100%" stopColor="#D4E7FC" />
        </linearGradient>
        <linearGradient id={`${id}-matrix-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
      </defs>

      <g>
        {/* Mineral Orbit Ring */}
        <circle
          cx="120"
          cy="120"
          r="86"
          stroke="#005EB1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* ============================================================ */}
        {/* ANATOMICAL LONG BONE (Diagonal Cortical Shaft)              */}
        {/* ============================================================ */}
        <path
          d="M84 72 C80 62 86 52 98 52 C108 52 114 60 114 68 C116 62 126 58 134 64 C144 72 142 84 136 92 L158 128 C166 124 178 126 182 136 C186 146 180 156 170 158 C176 166 174 176 164 182 C154 188 142 182 140 172 L116 134 C108 138 96 136 92 126 C88 116 94 106 104 104 L84 72 Z"
          fill={`url(#${id}-bone-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cortical Shaft Contour Accent */}
        <path d="M106 104 L128 140" stroke="#005EB1" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

        {/* ============================================================ */}
        {/* PRECISION OSTEON TRABECULAR MICRO-ARCHITECTURE CALLOUT       */}
        {/* ============================================================ */}
        {/* Inspection Callout Lens Circle */}
        <g transform="translate(136, 88)">
          <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0F2B48" strokeWidth="2.8" />
          <circle cx="0" cy="0" r="28" fill={`url(#${id}-matrix-grad)`} stroke="#005EB1" strokeWidth="1.6" strokeDasharray="3 2" />

          {/* Central Haversian Canal (Vascular core) */}
          <circle cx="0" cy="0" r="5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.6" />

          {/* Concentric Lamellae Rings & Mineral Nodes */}
          <circle cx="0" cy="0" r="13" stroke="#005EB1" strokeWidth="1.4" strokeDasharray="2 2" />
          <circle cx="0" cy="0" r="21" stroke="#0F2B48" strokeWidth="1.4" strokeDasharray="3 3" />

          {/* Hexagonal Osteocyte Mineral Lattice */}
          <path
            d="M0 -18 L15 -9 L15 9 L0 18 L-15 9 L-15 -9 Z"
            fill="none"
            stroke="#005EB1"
            strokeWidth="1.4"
          />

          {/* Calcium / Mineral Ion Dots on Lattice */}
          <circle cx="0" cy="-18" r="2.2" fill="#F87901" />
          <circle cx="15" cy="-9" r="2.2" fill="#005EB1" />
          <circle cx="15" cy="9" r="2.2" fill="#F87901" />
          <circle cx="0" cy="18" r="2.2" fill="#005EB1" />
          <circle cx="-15" cy="9" r="2.2" fill="#F87901" />
          <circle cx="-15" cy="-9" r="2.2" fill="#005EB1" />
        </g>

        {/* Callout Indicator Line connecting shaft to lens */}
        <path d="M102 114 L114 98" stroke="#005EB1" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="102" cy="114" r="3" fill="#005EB1" />

        {/* Calcification Sparkles */}
        <path
          d="M178 68 L180 73 L185 75 L180 77 L178 82 L176 77 L171 75 L176 73 Z"
          fill="#F87901"
        />
        <path
          d="M68 152 L70 156 L74 158 L70 160 L68 164 L66 160 L62 158 L66 156 Z"
          fill="#005EB1"
        />
      </g>
    </svg>
  );
}
