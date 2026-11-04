import React, { useId } from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  isActive?: boolean;
}

export default function BrainNeurologySvg({
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
      aria-label="Neurology Anatomical Brain with Synaptic Neural Pathway"
      {...props}
    >
      <title>Neurology & Neuropathic Pain</title>
      <defs>
        <linearGradient id={`${id}-cortex-grad`} x1="40" y1="40" x2="200" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F0F7FF" />
          <stop offset="100%" stopColor="#CCE3FB" />
        </linearGradient>
        <linearGradient id={`${id}-stem-grad`} x1="110" y1="160" x2="140" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0EFFE" />
          <stop offset="100%" stopColor="#BAD9FB" />
        </linearGradient>
      </defs>

      <g>
        {/* Subtle Neural Orbit Ring */}
        <circle
          cx="120"
          cy="115"
          r="86"
          stroke="#005EB1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* ============================================================ */}
        {/* BRAINSTEM & PONS                                             */}
        {/* ============================================================ */}
        <path
          d="M110 162 C110 180 113 198 116 208 C118 212 126 212 128 208 C132 198 134 180 134 162 Z"
          fill={`url(#${id}-stem-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pons horizontal grooves */}
        <path d="M113 176 C120 178 124 178 131 176" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        <path d="M114 188 C120 190 124 190 130 188" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        <path d="M116 198 C120 200 124 200 128 198" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* CEREBELLUM (Posterior inferior folia)                        */}
        {/* ============================================================ */}
        <path
          d="M128 148 C144 148 166 152 175 165 C180 172 176 184 165 187 C152 190 138 188 131 178 C127 173 126 162 128 148 Z"
          fill="#D9ECFD"
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M138 158 C150 159 162 163 169 169" stroke="#0F2B48" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M136 168 C148 169 159 172 166 177" stroke="#0F2B48" strokeWidth="1.8" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* CEREBRAL CORTEX (Hemispheric convolutions & sulci)           */}
        {/* ============================================================ */}
        <path
          d="M66 144 C48 140 38 122 41 102 C44 80 56 58 77 46 C94 36 116 38 131 44 C148 38 172 42 186 56 C200 70 204 92 200 112 C197 129 187 142 173 150 C160 156 142 155 130 150 C121 154 99 156 88 153 C76 151 69 148 66 144 Z"
          fill={`url(#${id}-cortex-grad)`}
          stroke="#0F2B48"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Anatomical Sulcal Grooves */}
        {/* Lateral Sylvian Fissure */}
        <path d="M66 106 C80 102 96 108 112 102 C126 96 138 102 152 98" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        {/* Central Rolando Sulcus */}
        <path d="M116 44 C114 62 120 74 116 88 C112 98 108 106 108 118" stroke="#0F2B48" strokeWidth="2.2" strokeLinecap="round" />
        {/* Frontal Lobe Convolution */}
        <path d="M52 82 C64 80 74 88 86 86 C98 84 104 74 102 64" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        <path d="M72 58 C80 68 88 72 98 72" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        {/* Parietal & Occipital Convolutions */}
        <path d="M142 54 C146 66 156 72 168 70 C180 68 188 78 192 88" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        <path d="M154 84 C162 94 174 98 186 104" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />
        {/* Temporal Lobe Gyri */}
        <path d="M60 124 C72 120 84 126 96 128 C108 130 118 126 126 134" stroke="#0F2B48" strokeWidth="2" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* SYNAPTIC NEURAL TRANSMISSION PATHWAY                         */}
        {/* ============================================================ */}
        <path
          d="M68 94 C88 84 108 112 134 94 C154 80 174 104 186 92"
          stroke="#005EB1"
          strokeWidth="2.4"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Synaptic Nodes */}
        <circle cx="68" cy="94" r="4.5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />
        <circle cx="98" cy="98" r="3.5" fill="#005EB1" />
        <circle cx="134" cy="94" r="5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />
        <circle cx="162" cy="88" r="3.5" fill="#005EB1" />
        <circle cx="186" cy="92" r="4.5" fill="#F87901" stroke="#0F2B48" strokeWidth="1.8" />

        {/* Precision Action Potential Sparkles */}
        <path
          d="M102 54 L104 59 L109 61 L104 63 L102 68 L100 63 L95 61 L100 59 Z"
          fill="#F87901"
        />
        <path
          d="M178 132 L180 136 L184 138 L180 140 L178 144 L176 140 L172 138 L176 136 Z"
          fill="#F87901"
        />
      </g>
    </svg>
  );
}
