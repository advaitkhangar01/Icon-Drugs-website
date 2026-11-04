import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function GastroenterologyStomachSvg({
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
      aria-label="Gastroenterology Anatomical Stomach with Mucosal Lining and Duodenum"
      {...props}
    >
      <title>Gastroenterology & Acid-Peptic Disorders</title>
      <defs>
        <linearGradient id={`${id}-stomach-grad`} x1="80" y1="50" x2="160" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFF1EB" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
        <linearGradient id={`${id}-mucosa-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#005EB1" />
        </linearGradient>
      </defs>

      <g>
        {/* Enteric Protection Orbit */}
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
        {/* ESOPHAGUS (Inflow Tract & Cardiac Sphincter)                 */}
        {/* ============================================================ */}
        <path
          d="M120 36 L120 68 C120 74 122 78 126 80 L132 80 C136 78 138 74 138 68 L138 36 Z"
          fill="#F0F7FF"
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Esophageal annular rings */}
        <line x1="120" y1="46" x2="138" y2="46" stroke="#005EB1" strokeWidth="1.8" />
        <line x1="120" y1="58" x2="138" y2="58" stroke="#005EB1" strokeWidth="1.8" />

        {/* ============================================================ */}
        {/* ANATOMICAL STOMACH BODY & FUNDUS                             */}
        {/* ============================================================ */}
        <path
          d="M120 68 C104 68 88 80 84 100 C78 126 82 152 102 170 C122 188 152 188 170 166 C182 152 184 132 176 114 C170 100 158 92 148 94 C140 96 136 92 134 82 C134 76 136 70 138 68 Z"
          fill={`url(#${id}-stomach-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Greater Curvature Rugae / Mucosal Waves */}
        <path d="M96 112 C94 128 98 144 110 156" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M112 118 C112 134 118 148 130 158" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M130 126 C134 140 144 148 154 150" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* DUODENUM & PYLORIC CANAL (Outflow C-Loop)                    */}
        {/* ============================================================ */}
        <path
          d="M102 170 C92 172 82 180 82 192 C82 204 94 212 108 210 C120 208 126 196 126 186"
          fill="none"
          stroke="#A285D5"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Pyloric Sphincter Constriction Ring */}
        <circle cx="102" cy="170" r="4.5" fill="#FFFFFF" stroke="#0F2B48" strokeWidth="2" />
        <circle cx="102" cy="170" r="2" fill="#F87901" />

        {/* Acid-Suppression / Gastroprotection Proton Shield Halo */}
        <path
          d="M74 110 C70 132 74 154 90 172"
          stroke="#005EB1"
          strokeWidth="2.2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Bio-Motility Sparkles */}
        <path
          d="M174 88 L176 93 L181 95 L176 97 L174 102 L172 97 L167 95 L172 93 Z"
          fill="#F87901"
        />
        <path
          d="M66 142 L68 146 L72 148 L68 150 L66 154 L64 150 L60 148 L64 146 Z"
          fill="#005EB1"
        />
      </g>
    </svg>
  );
}
