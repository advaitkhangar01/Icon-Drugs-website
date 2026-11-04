import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function AntiInfectivesMicrobeSvg({
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
      aria-label="Anti-Infectives Targeted Bacterial Pathogen with Molecular Disruption Vectors"
      {...props}
    >
      <title>Anti-Infectives & Urology</title>
      <defs>
        <linearGradient id={`${id}-microbe-grad`} x1="70" y1="70" x2="170" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F7FF" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id={`${id}-pill-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="100%" stopColor="#F87901" />
        </linearGradient>
      </defs>

      <g>
        {/* Antiseptic Elimination Field */}
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
        {/* BACTERIAL CAPSULAR WALL & PEPTIDOGLYCAN CORE                */}
        {/* ============================================================ */}
        {/* Outer Capsule / Cellular Membrane */}
        <circle
          cx="116"
          cy="124"
          r="48"
          fill={`url(#${id}-microbe-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
        />

        {/* Inner Peptidoglycan Ring */}
        <circle
          cx="116"
          cy="124"
          r="40"
          fill="none"
          stroke="#005EB1"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />

        {/* Bacterial Genetic Material (Nucleoid Chromosome Loop) */}
        <path
          d="M102 114 C96 122 106 134 116 128 C124 122 132 132 126 138 C120 144 110 138 106 130"
          fill="none"
          stroke="#F87901"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Membrane Receptors / Antigen Spikes radiating outward */}
        <line x1="116" y1="76" x2="116" y2="66" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="116" cy="64" r="2.5" fill="#005EB1" />

        <line x1="150" y1="90" x2="158" y2="82" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="160" cy="80" r="2.5" fill="#005EB1" />

        <line x1="164" y1="124" x2="174" y2="124" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="176" cy="124" r="2.5" fill="#005EB1" />

        <line x1="150" y1="158" x2="158" y2="166" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="160" cy="168" r="2.5" fill="#005EB1" />

        <line x1="116" y1="172" x2="116" y2="182" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="116" cy="184" r="2.5" fill="#005EB1" />

        <line x1="82" y1="158" x2="74" y2="166" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="72" cy="168" r="2.5" fill="#005EB1" />

        <line x1="68" y1="124" x2="58" y2="124" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="56" cy="124" r="2.5" fill="#005EB1" />

        <line x1="82" y1="90" x2="74" y2="82" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="72" cy="80" r="2.5" fill="#005EB1" />

        {/* ============================================================ */}
        {/* TARGETED ANTIMICROBIAL VECTOR (Precision Formulation Capsule) */}
        {/* ============================================================ */}
        <g transform="translate(142, 60) rotate(35)">
          <rect
            x="0"
            y="0"
            width="38"
            height="18"
            rx="9"
            fill={`url(#${id}-pill-grad)`}
            stroke="#0F2B48"
            strokeWidth="2.4"
          />
          <line x1="19" y1="0" x2="19" y2="18" stroke="#0F2B48" strokeWidth="2" />
          <path d="M6 5 L13 5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* Targeted Attack Vectors */}
        <path d="M148 94 L138 104" stroke="#F87901" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />

        {/* Elimination Sparkles */}
        <path
          d="M62 68 L64 73 L69 75 L64 77 L62 82 L60 77 L55 75 L60 73 Z"
          fill="#F87901"
        />
        <path
          d="M174 158 L176 162 L180 164 L176 166 L174 170 L172 166 L168 164 L172 162 Z"
          fill="#005EB1"
        />
      </g>
    </svg>
  );
}
