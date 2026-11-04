import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function DermatologySkinSvg({
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
      aria-label="Dermatology Cutaneous Skin Stratum Layers with Hair Follicle and Sebaceous Gland"
      {...props}
    >
      <title>Dermatology</title>
      <defs>
        <linearGradient id={`${id}-epi-grad`} x1="60" y1="100" x2="180" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id={`${id}-derma-grad`} x1="60" y1="135" x2="180" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>

      <g>
        {/* Epidermal Shield Orbit */}
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
        {/* ANATOMICAL SKIN BLOCK (Epidermis & Dermis Layers)           */}
        {/* ============================================================ */}
        {/* Epidermis (Upper Stratum Layer) */}
        <path
          d="M62 108 C80 106 100 110 120 108 C140 106 160 110 178 108 L178 136 L62 136 Z"
          fill={`url(#${id}-epi-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Stratum Corneum Cellular Brick Wall Pattern */}
        <line x1="72" y1="120" x2="100" y2="120" stroke="#005EB1" strokeWidth="1.6" strokeDasharray="3 3" />
        <line x1="140" y1="120" x2="168" y2="120" stroke="#005EB1" strokeWidth="1.6" strokeDasharray="3 3" />

        {/* Dermis & Subcutis (Lower Vascular Layer) */}
        <path
          d="M62 136 L178 136 L178 186 C178 190 174 194 170 194 L70 194 C66 194 62 190 62 186 Z"
          fill={`url(#${id}-derma-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dermal Papillae Undulations */}
        <path
          d="M66 150 C74 146 82 154 90 150 C98 146 106 154 114 150"
          stroke="#EA580C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M130 150 C138 146 146 154 154 150 C162 146 170 154 174 150"
          stroke="#EA580C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* ============================================================ */}
        {/* PILOSEBACEOUS UNIT (Hair Shaft, Follicle & Sebaceous Gland)  */}
        {/* ============================================================ */}
        {/* Hair Shaft Emerging upward through epidermis */}
        <path
          d="M120 180 L120 48"
          stroke="#0F2B48"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Follicular Sheath Funnel */}
        <path
          d="M112 110 C112 130 114 155 116 180 C118 184 122 184 124 180 C126 155 128 130 128 110"
          fill="#FFFFFF"
          stroke="#0F2B48"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Sebaceous Lipid Gland (Right of follicle) */}
        <path
          d="M128 144 C136 142 144 146 144 154 C144 162 136 166 128 162 Z"
          fill="#FED7AA"
          stroke="#0F2B48"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="136" cy="154" r="2.5" fill="#F87901" />

        {/* Protective Topical Lipid Barrier Rays above skin */}
        <path
          d="M74 88 C94 84 146 84 166 88"
          stroke="#005EB1"
          strokeWidth="2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Cutaneous Restoration Sparkles */}
        <path
          d="M174 72 L176 77 L181 79 L176 81 L174 86 L172 81 L167 79 L172 77 Z"
          fill="#F87901"
        />
        <path
          d="M68 84 L70 88 L74 90 L70 92 L68 96 L66 92 L62 90 L66 88 Z"
          fill="#005EB1"
        />
      </g>
    </svg>
  );
}
