import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function OrthopedicsJointSvg({
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
      aria-label="Orthopedics Articulated Knee Joint with Cartilage and Meniscus Cushioning"
      {...props}
    >
      <title>Orthopedics & Musculoskeletal Pain</title>
      <defs>
        <linearGradient id={`${id}-bone-grad`} x1="80" y1="30" x2="160" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F7FF" />
          <stop offset="100%" stopColor="#D4E7FC" />
        </linearGradient>
        <linearGradient id={`${id}-cartilage-grad`} x1="90" y1="110" x2="150" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      <g>
        {/* Subtle Biomechanical Motion Arcs */}
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
        {/* FEMUR (Distal Thigh Bone & Articular Condyles)               */}
        {/* ============================================================ */}
        <path
          d="M106 36 L106 78 C96 82 86 92 86 112 C86 122 96 126 108 126 C116 126 119 120 120 118 C121 120 124 126 132 126 C144 126 154 122 154 112 C154 92 144 82 134 78 L134 36 Z"
          fill={`url(#${id}-bone-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Femoral Intercondylar Notch */}
        <path d="M120 102 C120 114 120 118 120 118" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* TIBIA & FIBULA (Proximal Lower Leg)                         */}
        {/* ============================================================ */}
        {/* Tibial Plateau and Shaft */}
        <path
          d="M90 144 C90 138 98 134 120 134 C142 134 150 138 150 144 C150 152 140 156 136 164 L136 210 L104 210 L104 164 C100 156 90 152 90 144 Z"
          fill={`url(#${id}-bone-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fibula Head (Lateral companion bone) */}
        <path
          d="M152 150 C156 148 162 150 162 156 L160 206 C160 209 157 210 154 210 L146 210 L146 160 Z"
          fill="#D9ECFD"
          stroke="#0F2B48"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />

        {/* ============================================================ */}
        {/* ARTICULAR CARTILAGE & MENISCAL CUSHION                       */}
        {/* ============================================================ */}
        {/* Medial & Lateral Meniscus Shock Absorbers */}
        <path
          d="M92 128 C96 126 108 126 112 128 C112 132 104 135 94 135 C90 135 90 131 92 128 Z"
          fill={`url(#${id}-cartilage-grad)`}
          stroke="#0F2B48"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M128 128 C132 126 144 126 148 128 C150 131 150 135 146 135 C136 135 128 132 128 128 Z"
          fill={`url(#${id}-cartilage-grad)`}
          stroke="#0F2B48"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Anterior Cruciate Ligament (Cross band) */}
        <path d="M114 122 L126 136" stroke="#005EB1" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="2 2" />

        {/* ============================================================ */}
        {/* PATELLA (Kneecap Float Profile)                              */}
        {/* ============================================================ */}
        <path
          d="M112 96 C112 91 116 88 120 88 C124 88 128 91 128 96 C128 104 124 109 120 109 C116 109 112 104 112 96 Z"
          fill="#FFFFFF"
          stroke="#0F2B48"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="98.5" r="2.5" fill="#F87901" />

        {/* Synovial Lubrication / Flexion Indicators */}
        <path d="M78 116 C74 122 74 128 78 134" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M166 116 C170 122 170 128 166 134" stroke="#005EB1" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />

        {/* Mobility Sparkles */}
        <path
          d="M72 98 L74 103 L79 105 L74 107 L72 112 L70 107 L65 105 L70 103 Z"
          fill="#F87901"
        />
        <path
          d="M168 96 L170 100 L174 102 L170 104 L168 108 L166 104 L162 102 L166 100 Z"
          fill="#F87901"
        />
      </g>
    </svg>
  );
}
