import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function RespiratoryLungsSvg({
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
      aria-label="Respiratory Pulmonology Anatomical Lungs with Trachea and Bronchial Tree"
      {...props}
    >
      <title>Respiratory, Pulmonology & Allergy</title>
      <defs>
        <linearGradient id={`${id}-lung-left`} x1="60" y1="80" x2="110" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id={`${id}-lung-right`} x1="180" y1="80" x2="130" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
      </defs>

      <g>
        {/* Pulmonary Aeration Orbit */}
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
        {/* TRACHEA (Windpipe with Cartilaginous Rings)                  */}
        {/* ============================================================ */}
        <path
          d="M112 36 L112 88 L128 88 L128 36 Z"
          fill="#FFFFFF"
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tracheal cartilage rings */}
        <line x1="112" y1="46" x2="128" y2="46" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="56" x2="128" y2="56" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="66" x2="128" y2="66" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="76" x2="128" y2="76" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" />

        {/* Carina Bifurcation Triangle */}
        <path d="M112 88 L120 98 L128 88" stroke="#0F2B48" strokeWidth="2.4" fill="#FFFFFF" />

        {/* ============================================================ */}
        {/* RIGHT LOBE (Anatomical Left side of viewer)                  */}
        {/* ============================================================ */}
        <path
          d="M108 92 C96 90 82 98 72 112 C60 128 58 152 64 172 C70 188 88 194 102 188 C108 186 112 178 112 168 L112 100 Z"
          fill={`url(#${id}-lung-left)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Bronchial Tree Branches */}
        <path d="M112 100 C100 112 88 126 84 146" stroke="#005EB1" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M96 122 C90 128 82 132 76 136" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M90 140 C86 148 84 158 86 166" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />

        {/* Alveolar Micro-Clusters Left */}
        <circle cx="76" cy="136" r="3" fill="#F87901" stroke="#0F2B48" strokeWidth="1.4" />
        <circle cx="86" cy="166" r="3" fill="#005EB1" stroke="#0F2B48" strokeWidth="1.4" />
        <circle cx="72" cy="154" r="2.5" fill="#F87901" />

        {/* ============================================================ */}
        {/* LEFT LOBE (Anatomical Right side of viewer with Cardiac Notch) */}
        {/* ============================================================ */}
        <path
          d="M132 92 C144 90 158 98 168 112 C180 128 182 152 176 172 C170 188 152 194 138 188 C132 186 128 178 128 168 L128 100 Z"
          fill={`url(#${id}-lung-right)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Bronchial Tree Branches */}
        <path d="M128 100 C140 112 152 126 156 146" stroke="#005EB1" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M144 122 C150 128 158 132 164 136" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M150 140 C154 148 156 158 154 166" stroke="#005EB1" strokeWidth="1.8" strokeLinecap="round" />

        {/* Alveolar Micro-Clusters Right */}
        <circle cx="164" cy="136" r="3" fill="#F87901" stroke="#0F2B48" strokeWidth="1.4" />
        <circle cx="154" cy="166" r="3" fill="#005EB1" stroke="#0F2B48" strokeWidth="1.4" />
        <circle cx="168" cy="154" r="2.5" fill="#F87901" />

        {/* Bronchodilator Flow Sparkles */}
        <path
          d="M120 188 L122 193 L126 195 L122 197 L120 202 L118 197 L114 195 L118 193 Z"
          fill="#F87901"
        />
        <path
          d="M184 104 L186 108 L190 110 L186 112 L184 116 L182 112 L178 110 L182 108 Z"
          fill="#005EB1"
        />
      </g>
    </svg>
  );
}
