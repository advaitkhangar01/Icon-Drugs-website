import React from "react";
import Image from "next/image";

export interface TherapeuticAreaIllustrationProps {
  id: string;
  className?: string;
  isActive?: boolean;
  priority?: boolean;
}

export interface TherapeuticAreaAsset {
  src: string;
  alt: string;
  cleanLabel: string;
  scientificFocus: string;
}

/**
 * Centralized Category-to-Asset Mapping for Premium 2.5D Isometric Medical Illustrations
 * All assets are genuine 1024x1024 PNGs with alpha transparency, modeled with clinical
 * white/blue materials, subtle orange therapeutic accents, and 3/4 isometric perspective.
 */
export const THERAPEUTIC_AREA_ASSETS: Record<string, TherapeuticAreaAsset> = {
  neuro: {
    src: "/therapeutic-areas/neurology-neuropathic-pain.png",
    alt: "2.5D isometric anatomical 3D brain model sculpted in porcelain white and clinical blue with synaptic neural pathways",
    cleanLabel: "Neurology",
    scientificFocus: "Neuro-active & remyelinating compounds",
  },
  ortho: {
    src: "/therapeutic-areas/orthopedics-musculoskeletal.png",
    alt: "2.5D isometric anatomical knee joint model showing ivory-white bone, medical blue cartilage, and therapeutic interface",
    cleanLabel: "Orthopedics",
    scientificFocus: "Joint articulation & anti-inflammatory enzymes",
  },
  bone: {
    src: "/therapeutic-areas/bone-health-mineral-metabolism.png",
    alt: "2.5D isometric cross-section of ivory bone showing porous trabecular matrix and mineral spheres",
    cleanLabel: "Bone Health",
    scientificFocus: "Trabecular density & mineral metabolism",
  },
  gastro: {
    src: "/therapeutic-areas/gastroenterology.png",
    alt: "2.5D isometric clinical digestive model of human stomach, esophagus, and duodenum in porcelain white with coral-orange mucosal folds",
    cleanLabel: "Gastroenterology",
    scientificFocus: "Acid-peptic control & gastro-kinetic agents",
  },
  obgyn: {
    src: "/therapeutic-areas/obstetrics-gynecology.png",
    alt: "2.5D isometric clinical anatomical model of uterus, fallopian tubes, and ovaries in polished porcelain white and coral accents",
    cleanLabel: "Obstetrics & Gynecology",
    scientificFocus: "Maternal-fetal wellness & hematinics",
  },
  resp: {
    src: "/therapeutic-areas/respiratory-pulmonology.png",
    alt: "2.5D isometric anatomical lungs model with trachea and branching bronchial tree in pale clinical blue and white",
    cleanLabel: "Respiratory",
    scientificFocus: "Pulmonary bronchodilation & allergy relief",
  },
  infectives: {
    src: "/therapeutic-areas/anti-infectives-urology.png",
    alt: "2.5D isometric pharmaceutical capsule, molecular lattice, and abstract therapeutic particle cluster",
    cleanLabel: "Anti-Infectives",
    scientificFocus: "Broad-spectrum antimicrobials & urological care",
  },
  derma: {
    src: "/therapeutic-areas/dermatology.png",
    alt: "2.5D isometric skin cross-section showing epidermis, translucent dermis, hair follicle, and clinical pedestal",
    cleanLabel: "Dermatology",
    scientificFocus: "Cutaneous barrier restoration & topical actives",
  },
  immuno: {
    src: "/therapeutic-areas/immunology-rheumatology.png",
    alt: "2.5D isometric Y-shaped antibody immunoglobulin docking into a receptor with corticosteroid molecular elements",
    cleanLabel: "Immunology",
    scientificFocus: "Immunomodulation & rheumatologic care",
  },
  nutra: {
    src: "/therapeutic-areas/nutraceuticals-wellness.png",
    alt: "2.5D isometric supplement capsule, sculpted botanical leaf, and glowing micronutrient pearls",
    cleanLabel: "Nutraceuticals",
    scientificFocus: "Evidence-led micronutrients & antioxidant wellness",
  },
};

export default function TherapeuticAreaIllustration({
  id,
  className = "w-full h-full",
  isActive = false,
  priority = false,
}: TherapeuticAreaIllustrationProps) {
  const asset = THERAPEUTIC_AREA_ASSETS[id] || THERAPEUTIC_AREA_ASSETS.neuro;

  return (
    <div
      className={`relative flex items-center justify-center overflow-visible select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu origin-center ${
          isActive
            ? "scale-108 -translate-y-1.5 drop-shadow-[0_16px_28px_rgba(0,94,177,0.22)]"
            : "scale-100 opacity-92 group-hover:opacity-100 group-hover:scale-104 drop-shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
        }`}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          width={512}
          height={512}
          priority={priority}
          className="w-full h-full object-contain pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
