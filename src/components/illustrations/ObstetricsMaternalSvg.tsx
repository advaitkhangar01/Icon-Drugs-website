import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function ObstetricsMaternalSvg({
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
      aria-label="Obstetrics & Gynecology Maternal Profile with Gestational Sanctuary and Hematinics"
      {...props}
    >
      <title>Obstetrics, Gynecology & Hematinics</title>
      <defs>
        <linearGradient id={`${id}-mat-grad`} x1="60" y1="40" x2="180" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F5F3FF" />
          <stop offset="100%" stopColor="#DDD6FE" />
        </linearGradient>
        <linearGradient id={`${id}-fetal-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>

      <g>
        {/* Gestational Protection Orbit */}
        <circle
          cx="120"
          cy="120"
          r="86"
          stroke="#A285D5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.35"
        />

        {/* ============================================================ */}
        {/* MATERNAL SANCTUARY SILHOUETTE (Graceful Curved Contour)      */}
        {/* ============================================================ */}
        {/* Maternal Head / Profile Flowing into Embracing Torso */}
        <path
          d="M124 44 C116 44 110 50 110 58 C110 66 116 72 124 72 C118 78 114 86 114 96 C114 98 108 100 102 104 C88 114 78 132 78 152 C78 178 96 196 122 196 C152 196 172 174 172 144 C172 108 150 78 138 68 C138 60 142 54 140 48 C136 44 130 44 124 44 Z"
          fill={`url(#${id}-mat-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gentle Maternal Facial Contour Arc */}
        <path d="M124 44 C132 44 136 50 136 58" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* FETAL EMBRACE & AMNIOTIC CORE                                */}
        {/* ============================================================ */}
        {/* Inner Amniotic Haven Sac */}
        <path
          d="M110 118 C98 126 94 142 96 156 C98 168 108 176 122 176 C138 176 150 164 150 148 C150 132 140 120 126 116 C118 114 114 116 110 118 Z"
          fill="#FFFFFF"
          stroke="#005EB1"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* Developing Infant Fetal Form */}
        <path
          d="M122 130 C116 130 112 134 112 140 C112 146 116 148 118 152 C120 156 120 162 126 162 C132 162 136 156 136 148 C136 138 130 130 122 130 Z"
          fill={`url(#${id}-fetal-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Fetal head nod */}
        <circle cx="122" cy="136" r="3.5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.6" />

        {/* Hematinic (Iron/Folate) Vital Flow Loop */}
        <path
          d="M92 142 C84 148 84 162 92 168"
          stroke="#F87901"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="86" cy="155" r="4" fill="#F87901" stroke="#0F2B48" strokeWidth="1.6" />

        {/* Vitality Sparkles */}
        <path
          d="M174 102 L176 107 L181 109 L176 111 L174 116 L172 111 L167 109 L172 107 Z"
          fill="#F87901"
        />
        <path
          d="M66 128 L68 132 L72 134 L68 136 L66 140 L64 136 L60 134 L64 132 Z"
          fill="#A285D5"
        />
      </g>
    </svg>
  );
}
