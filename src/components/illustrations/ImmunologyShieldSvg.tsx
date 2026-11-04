import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function ImmunologyShieldSvg({
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
      aria-label="Immunology and Corticosteroid Molecular Immunoglobulin IgG Antibody"
      {...props}
    >
      <title>Immunology, Corticosteroids & Autoimmune</title>
      <defs>
        <linearGradient id={`${id}-body-grad`} x1="70" y1="40" x2="170" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F0F7FF" />
          <stop offset="100%" stopColor="#D4E7FC" />
        </linearGradient>
        <linearGradient id={`${id}-accent-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#005EB1" />
        </linearGradient>
        <linearGradient id={`${id}-orange-glow`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFA63D" />
          <stop offset="100%" stopColor="#F87901" />
        </linearGradient>
      </defs>

      <g>
        {/* Outer Circular Cellular Defense Orbit */}
        <circle
          cx="120"
          cy="120"
          r="86"
          stroke="#005EB1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.35"
        />
        <circle
          cx="120"
          cy="120"
          r="98"
          stroke="#005EB1"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.2"
        />

        {/* Outer Soft Shield Halo (Subtle Backdrop) */}
        <path
          d="M120 40 C154 40 178 52 178 74 C178 126 158 170 120 196 C82 170 62 126 62 74 C62 52 86 40 120 40 Z"
          fill="#EEF6FF"
          stroke="#005EB1"
          strokeWidth="1.6"
          strokeDasharray="5 3"
          opacity="0.5"
        />

        {/* ============================================================ */}
        {/* SCIENTIFIC IMMUNOGLOBULIN (IgG) ANTIBODY MONOMER             */}
        {/* ============================================================ */}

        {/* FC STEM (Constant Heavy Chain Trunk) */}
        <path
          d="M110 128 L110 186 C110 191 114 195 119 195 L121 195 C126 195 130 191 130 186 L130 128 Z"
          fill={`url(#${id}-body-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        {/* Fc Stem Inter-chain midline */}
        <line x1="120" y1="132" x2="120" y2="192" stroke="#005EB1" strokeWidth="1.8" opacity="0.6" strokeDasharray="3 2" />

        {/* LEFT FAB ARM (Antigen Binding Heavy + Light Chains) */}
        <g>
          {/* Heavy Chain Branch Left */}
          <path
            d="M111 128 L72 82 C69 78 69 72 73 68 L79 63 C83 59 90 60 93 64 L121 114 Z"
            fill={`url(#${id}-body-grad)`}
            stroke="#0F2B48"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Light Chain (VL / CL companion rod) */}
          <path
            d="M62 98 L51 85 C48 81 49 76 53 72 L60 66 C64 63 69 64 72 68 L83 81 Z"
            fill={`url(#${id}-accent-blue)`}
            stroke="#0F2B48"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Antigen Binding Cavity Left Tip */}
          <path
            d="M66 61 C68 57 73 57 76 60"
            stroke="#F87901"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>

        {/* RIGHT FAB ARM (Antigen Binding Heavy + Light Chains) */}
        <g>
          {/* Heavy Chain Branch Right */}
          <path
            d="M129 128 L168 82 C171 78 171 72 167 68 L161 63 C157 59 150 60 147 64 L119 114 Z"
            fill={`url(#${id}-body-grad)`}
            stroke="#0F2B48"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Light Chain (VL / CL companion rod) */}
          <path
            d="M178 98 L189 85 C192 81 191 76 187 72 L180 66 C176 63 171 64 168 68 L157 81 Z"
            fill={`url(#${id}-accent-blue)`}
            stroke="#0F2B48"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Antigen Binding Cavity Right Tip */}
          <path
            d="M174 61 C172 57 167 57 164 60"
            stroke="#F87901"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>

        {/* Central Disulfide Hinge & Corticosteroid Molecular Receptor */}
        <circle cx="120" cy="120" r="14" fill="#FFFFFF" stroke="#0F2B48" strokeWidth="2.6" />
        <path
          d="M120 111 L128 116 L128 125 L120 130 L112 125 L112 116 Z"
          fill={`url(#${id}-orange-glow)`}
          stroke="#0F2B48"
          strokeWidth="1.8"
        />

        {/* Antigen Targets / Immune Receptor Ligands */}
        <g>
          {/* Left Antigen Node */}
          <circle cx="68" cy="54" r="5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />
          <line x1="68" y1="46" x2="68" y2="40" stroke="#005EB1" strokeWidth="1.6" strokeDasharray="2 2" />

          {/* Right Antigen Node */}
          <circle cx="172" cy="54" r="5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />
          <line x1="172" y1="46" x2="172" y2="40" stroke="#005EB1" strokeWidth="1.6" strokeDasharray="2 2" />

          {/* Peripheral Signaling Nodes */}
          <circle cx="186" cy="144" r="3.5" fill="#005EB1" />
          <circle cx="54" cy="144" r="3.5" fill="#005EB1" />
          <circle cx="120" cy="208" r="4" fill="#F87901" stroke="#0F2B48" strokeWidth="1.6" />
        </g>

        {/* Precision Medical Sparkles */}
        <path
          d="M192 108 L194 113 L199 115 L194 117 L192 122 L190 117 L185 115 L190 113 Z"
          fill="#F87901"
        />
        <path
          d="M48 108 L50 113 L55 115 L50 117 L48 122 L46 117 L41 115 L46 113 Z"
          fill="#005EB1"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
