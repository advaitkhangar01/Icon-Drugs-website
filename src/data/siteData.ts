// ============================================================================
// ICON DRUGS MASTER REPOSITORY & CLINICAL MONOGRAPH DATA
// WHO-GMP Certified Pharmaceutical Formulations & Therapeutic Portfolios
// ============================================================================

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  heritageYears: string;
  foundedYear: string;
  facilitiesCount: string;
  productsCount: string;
  marketsCount: string;
  certifications: string[];
  headquarters: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  address: string;
}

export interface HeroSlide {
  id: number;
  tagline: string;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  alt: string;
  accentLabel: string;
}

export interface QuickStat {
  value: string;
  label: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

export interface TherapyArea {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  stats: string;
  conditions: string[];
  productCount: number;
}

export interface ChemicalData {
  name: string;
  formula: string;
  molecularWeight: string;
  pubchemCid: number;
  structureUrl: string;
}

export interface IngredientAction {
  ingredient: string;
  role: string;
  chemicalData?: ChemicalData;
}

export interface CommercialData {
  moqFranchise: string;
  moqThirdParty: string;
  masterShipperPacking: string;
  hsnCode: string;
  gstRate: string;
  cartonDimensions?: string;
  grossWeight?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  genericName: string;
  category: string;
  therapySlug: string;
  strength: string;
  dosageForm: string;
  packSize: string;
  indications: string[];
  dosage: string;
  mechanism: string;
  ingredientActions?: IngredientAction[];
  clinicalHighlights?: string[];
  targetSpecialties?: string[];
  warnings: string[];
  storage: string;
  isRx: boolean;
  image?: string;
  commercialData?: CommercialData;
  complementarySlugs?: string[];
}

export interface DoctorSpecialty {
  id: string;
  slug: string;
  name: string;
  portfolio: string[];
  indications: string;
}

export interface HealthCondition {
  id: string;
  slug: string;
  title: string;
  category: string;
  overview: string;
  symptoms: string[];
  riskFactors: string[];
  management: string[];
  relatedTherapySlug: string;
  relatedProductIds: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Quality" | "Innovation" | "Corporate" | "Clinical";
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface QualityPillar {
  title: string;
  subtitle: string;
  description: string;
  standard: string;
  icon: string;
}

export const companyData: CompanyInfo = {
  name: "Icon Drugs",
  legalName: "ICON DRUGS PRIVATE LIMITED",
  tagline: "Healthcare, built on experience.",
  heritageYears: "25+",
  foundedYear: "2002",
  facilitiesCount: "04+",
  productsCount: "25 Formulations",
  marketsCount: "25+",
  certifications: ["WHO-GMP Compliant", "ISO 9001:2015", "GLP Certified Labs", "DCGI Approved Formulations"],
  headquarters: "Nagpur, Maharashtra, India",
  city: "Nagpur",
  state: "Maharashtra",
  country: "India",
  phone: "+91 712 294 0128",
  email: "business@icondrugs.com",
  address: "Pharma Industrial Complex, Nagpur, Maharashtra 440001, India",
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    accentLabel: "01 / HERITAGE & VISION",
    tagline: "25+ YEARS OF PHARMACEUTICAL EXCELLENCE",
    headline: "Healthcare, built on experience.",
    subtext: "Over two and a half decades of uncompromised precision, manufacturing integrity, and steadfast dedication to patient outcomes worldwide.",
    ctaText: "Discover Our Story",
    ctaLink: "#our-story",
    bgImage: "/backgrounds/hero-slide-1.jpg",
    alt: "Modern pharmaceutical manufacturing facility with robotic technology",
  },
  {
    id: 2,
    accentLabel: "02 / QUALITY SYSTEMS",
    tagline: "GLOBAL COMPLIANCE & PROTOCOLS",
    headline: "Quality at every single stage.",
    subtext: "End-to-end analytical validation, sterile batch processing, and global pharmacopeia compliance safeguarding every dose we formulate.",
    ctaText: "Our Commitment to Quality",
    ctaLink: "#quality",
    bgImage: "/backgrounds/hero-slide-2.jpg",
    alt: "Quality control research scientist analyzing chemical compounds",
  },
  {
    id: 3,
    accentLabel: "03 / THERAPEUTIC FOCUS",
    tagline: "SPECIALIZED MEDICAL PORTFOLIOS",
    headline: "Focused on better healthcare.",
    subtext: "Engineered formulations spanning neurology, musculoskeletal orthopedics, gastroenterology, respiratory medicine, and anti-infectives.",
    ctaText: "Our Therapeutic Focus",
    ctaLink: "/therapeutic-areas",
    bgImage: "/backgrounds/hero-slide-3.jpg",
    alt: "Clinical laboratory with advanced microscopic analysis",
  },
  {
    id: 4,
    accentLabel: "04 / STRATEGIC ALLIANCES",
    tagline: "GLOBAL INSTITUTIONAL ALLIANCES",
    headline: "Built for long-term partnerships.",
    subtext: "Collaborating with healthcare systems, hospitals, leading clinicians, and pharmaceutical distributors across five continents.",
    ctaText: "Start a Conversation",
    ctaLink: "/business-enquiry",
    bgImage: "/backgrounds/hero-slide-4.jpg",
    alt: "Modern medical conference and hospital collaborative setting",
  },
];

export const quickStats: QuickStat[] = [
  {
    value: "25+",
    label: "Years in Pharma",
    description: "Decades of trusted manufacturing and clinical adherence",
  },
  {
    value: "25",
    label: "Core Formulations",
    description: "Validated therapeutic solutions spanning 10 clinical segments",
  },
  {
    value: "400 kms",
    label: "Radius Served",
    description: "400 kms radius of Maharashtra is being served with daily supply networks",
  },
  {
    value: "99.8%",
    label: "Batch Purity Standard",
    description: "Rigorous chromatographic assays conforming to WHO-GMP standards",
  },
];

export const therapyAreasData: TherapyArea[] = [
  {
    id: "neuro",
    slug: "neurology-neuropathic-pain",
    name: "Neurology & Neuropathic Pain",
    iconName: "Brain",
    shortDesc: "Neuro-active agents, remyelinating compounds, and targeted central and peripheral neuropathic pain therapies.",
    fullDesc: "Icon Drugs provides advanced neurological formulations engineered to stabilize sensory neurotransmission, alleviate hyperalgesia and allodynia, and restore axonal myelin integrity in chronic neuropathies.",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    stats: "5 Formulations Available",
    conditions: ["Diabetic Peripheral Neuropathy", "Postherpetic Neuralgia", "Fibromyalgia", "Cervical Vertebral Syndrome", "Neurovascular Deficits"],
    productCount: 5,
  },
  {
    id: "ortho",
    slug: "orthopedics-musculoskeletal",
    name: "Orthopedics & Musculoskeletal Pain",
    iconName: "Activity",
    shortDesc: "Rapid-acting anti-inflammatories, selective COX-2 inhibitors, proteolytic anti-edema enzymes, and topical analgesics.",
    fullDesc: "Targeted clinical portfolios addressing acute and chronic arthritic disorders, traumatic fractures, sports injuries, and post-operative inflammation with high gastric safety.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    stats: "6 Formulations Available",
    conditions: ["Osteoarthritis", "Rheumatoid Arthritis", "Ankylosing Spondylitis", "Post-Surgical Edema", "Lumbago & Sprains"],
    productCount: 6,
  },
  {
    id: "bone",
    slug: "bone-health-minerals",
    name: "Bone Health & Mineral Metabolism",
    iconName: "ShieldCheck",
    shortDesc: "Bioactive calcitriol softgels, amino-chelated calcium aspartate, and osteotropic co-factors.",
    fullDesc: "Comprehensive bone mineral optimization formulations engineered to accelerate trabecular bone mineralization, prevent fracture fragility, and avoid calcium-induced constipation.",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    stats: "2 Formulations Available",
    conditions: ["Osteoporosis", "Osteomalacia", "Bone Fractures", "Post-Menopausal Bone Fragility", "Gestational Hypocalcemia"],
    productCount: 2,
  },
  {
    id: "gastro",
    slug: "gastroenterology",
    name: "Gastroenterology & Acid-Peptic Disorders",
    iconName: "Activity",
    shortDesc: "Proton pump inhibitors, dual acid-motility regulators, and whole-gut prokinetics.",
    fullDesc: "High-precision gastrointestinal formulations targeting erosive and non-erosive GERD, peptic ulceration, and functional dyspepsia with accelerated mucosal healing.",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    stats: "2 Formulations Available",
    conditions: ["GERD", "Erosive Esophagitis", "Peptic & Duodenal Ulcers", "Functional Dyspepsia", "Bile Reflux"],
    productCount: 2,
  },
  {
    id: "obgyn",
    slug: "obstetrics-gynecology",
    name: "Obstetrics, Gynecology & Hematinics",
    iconName: "HeartPulse",
    shortDesc: "Uteroplacental nitric oxide donors, high-absorption ferrous ascorbate, and maternal micronutrient support.",
    fullDesc: "Specialized maternal and gynecological therapeutics designed to improve gestational hemodynamics, prevent pre-eclampsia/IUGR, and resolve pregnancy-induced anemia with superior gastrointestinal tolerance.",
    heroImage: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80",
    stats: "2 Formulations Available",
    conditions: ["Intrauterine Growth Retardation (IUGR)", "Pregnancy-Induced Hypertension", "Gestational Anemia", "Oligohydramnios", "Menorrhagia"],
    productCount: 2,
  },
  {
    id: "resp",
    slug: "respiratory-pulmonology",
    name: "Respiratory, Pulmonology & Allergy",
    iconName: "Stethoscope",
    shortDesc: "Bronchodilators, mucolytics, safe non-narcotic anti-tussives, and leukotriene receptor antagonists.",
    fullDesc: "Engineered respiratory formulations providing targeted relief across wet productive cough, dry tickling allergy cough, bronchial asthma, and chronic allergic rhinitis.",
    heroImage: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80",
    stats: "3 Formulations Available",
    conditions: ["Productive Wet Cough", "Dry Allergic Cough", "Bronchial Asthma", "COPD Exacerbations", "Allergic Rhinitis"],
    productCount: 3,
  },
  {
    id: "infectives",
    slug: "anti-infectives-urology",
    name: "Anti-Infectives & Urology",
    iconName: "ShieldAlert",
    shortDesc: "Targeted urinary tract antiseptics on WHO Essential Medicine list and broad-spectrum antimicrobial fluoroquinolone synergies.",
    fullDesc: "Stringently assayed anti-infective formulations calibrated for reliable bacterial clearance against multidrug-resistant pathogens, complicated UTIs, and mixed polymicrobial infections.",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    stats: "2 Formulations Available",
    conditions: ["Acute & Recurrent Cystitis", "Complicated UTIs", "Bacterial Diarrhea & Dysentery", "Dental & Deep Tissue Infections", "Surgical Prophylaxis"],
    productCount: 2,
  },
  {
    id: "derma",
    slug: "dermatology",
    name: "Dermatology",
    iconName: "Sparkles",
    shortDesc: "Comprehensive triple-action broad-spectrum antifungal, anti-inflammatory, and antibacterial topical formulations.",
    fullDesc: "Multi-modal topical therapy providing swift relief from intense pruritus, erythema, and mixed bacterial-fungal cutaneous infections.",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    stats: "1 Formulation Available",
    conditions: ["Mixed Fungal & Bacterial Dermatitis", "Eczema", "Psoriasis Flares", "Tinea Corporis & Pedis", "Severe Pruritus"],
    productCount: 1,
  },
  {
    id: "immuno",
    slug: "immunology-rheumatology",
    name: "Immunology, Corticosteroids & Rheumatology",
    iconName: "ShieldCheck",
    shortDesc: "Third-generation oxazoline systemic corticosteroids engineered for potent immunosuppression with reduced bone and metabolic side effects.",
    fullDesc: "Advanced therapeutic intervention designed to suppress severe autoimmune inflammation while preserving bone mineral density and glycemic control.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    stats: "1 Formulation Available",
    conditions: ["Severe Bronchial Asthma", "Rheumatoid & Juvenile Arthritis", "Nephrotic Syndrome", "Crohn's Disease & UC", "Systemic Lupus (SLE)"],
    productCount: 1,
  },
  {
    id: "nutra",
    slug: "nutraceuticals-wellness",
    name: "Nutraceuticals & General Wellness",
    iconName: "Sparkles",
    shortDesc: "Master antioxidant complexes with high-dose Lycopene, Ginkgo Biloba, Green Tea, and full-spectrum micronutrients.",
    fullDesc: "Targeted cellular antioxidant and mitochondrial protection formulations designed to neutralize free radicals, support vascular endothelium, and sustain metabolic vitality.",
    heroImage: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    stats: "1 Formulation Available",
    conditions: ["Oxidative Stress & Free Radical Damage", "Diabetic Microvascular Complications", "Retinal Macular Degeneration", "Cardiovascular Endothelial Strain", "General Debility & Fatigue"],
    productCount: 1,
  },
];

export const productsData: Product[] = [
  // 1. Prenerve Caps
  {
    id: "icon-prenerve-caps",
    slug: "prenerve-caps",
    name: "Prenerve Caps",
    image: "/products/Prenerve Capsules Packaging Duo.png",
    tagline: "The Power to Recharge Neurons — The Nerve Rejuvenator",
    genericName: "Pregabalin 75 mg + Methylcobalamin 750 mcg",
    category: "Neurology & Neuropathic Pain",
    therapySlug: "neurology-neuropathic-pain",
    strength: "75 mg / 750 mcg",
    dosageForm: "Capsules",
    packSize: "10 x 10 Capsules Blister Pack",
    indications: [
      "Postherpetic Neuralgia",
      "Diabetic Peripheral Neuropathy",
      "Alcohol-Induced Neuropathy",
      "Fibromyalgia & Chronic Pain Disorders",
      "Spinal Cord Injury Neuropathy",
    ],
    dosage: "1 capsule once or twice daily after meals, titrated per clinical assessment.",
    mechanism: "Pregabalin binds selectively to alpha-2-delta auxiliary subunits of voltage-gated calcium channels in the CNS, reducing the release of excitatory neurotransmitters (substance P, glutamate, and noradrenaline). Methylcobalamin actively stimulates protein and nucleic acid synthesis in neuronal Schwann cells, accelerating axonal regeneration and structural myelin sheath repair.",
    ingredientActions: [
      {
        ingredient: "Pregabalin (75 mg)",
        role: "Modulates hyperactive calcium channels in injured sensory pathways, attenuating central sensitization and hyperalgesia.",
        chemicalData: {
          name: "Pregabalin",
          formula: "C8H17NO2",
          molecularWeight: "159.23 g/mol",
          pubchemCid: 5486971,
          structureUrl: "/molecules/pregabalin.png",
        },
      },
      {
        ingredient: "Methylcobalamin (750 mcg)",
        role: "Biologically active B12 coenzyme promoting lecithin synthesis, transmethylation, and remyelination of damaged nerve fibers.",
        chemicalData: {
          name: "Methylcobalamin",
          formula: "C63H91CoN13O14P",
          molecularWeight: "1344.4 g/mol",
          pubchemCid: 44120302,
          structureUrl: "/molecules/methylcobalamin.png",
        },
      },
    ],
    clinicalHighlights: [
      "Synergistic dual action targeting both neural pain transmission and axonal healing",
      "Relieves hyperalgesia and allodynia in chronic neuropathic states",
      "Effective in chronic pain syndromes including fibromyalgia",
    ],
    targetSpecialties: ["Neurologists & Neuro-Physicians", "General Physicians & Consulting Doctors"],
    warnings: [
      "May cause dizziness and somnolence during initial titration; caution while operating machinery",
      "Dosage adjustment recommended in patients with compromised creatinine clearance",
      "Taper gradually upon discontinuation to prevent withdrawal rebound symptoms",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture and direct light.",
    isRx: true,
  },

  // 2. Prenerve-NT
  {
    id: "icon-prenerve-nt",
    slug: "prenerve-nt",
    name: "Prenerve-NT",
    image: "/products/Prenerve-NT Tablets and Blister Pack.png",
    tagline: "Make Neuron Strong & Painfree — Eases Neuropathic Pain",
    genericName: "Pregabalin 75 mg + Nortriptyline HCl 10 mg + Methylcobalamin 1500 mcg",
    category: "Neurology & Neuropathic Pain",
    therapySlug: "neurology-neuropathic-pain",
    strength: "75 mg / 10 mg / 1500 mcg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Severe Neuropathic Pain",
      "Diabetic Peripheral Neuropathy",
      "Post-Herpetic Neuralgia",
      "Cutaneous Allodynia & Hyperalgesia",
      "Fibromyalgia with Chronic Fatigue Syndrome",
    ],
    dosage: "1 tablet once daily at bedtime, or as prescribed by a neurologist.",
    mechanism: "Triple-synergy mechanism: Nortriptyline blocks the presynaptic reuptake of norepinephrine and serotonin, potentiation of descending inhibitory spinal pathways; Pregabalin dampens calcium channel currents; Methylcobalamin provides intensive remyelination and metabolic neuroprotection.",
    ingredientActions: [
      {
        ingredient: "Pregabalin (75 mg)",
        role: "Reduces hyper-activated neurotransmitter release at primary afferent synapses.",
        chemicalData: {
          name: "Pregabalin",
          formula: "C8H17NO2",
          molecularWeight: "159.23 g/mol",
          pubchemCid: 5486971,
          structureUrl: "/molecules/pregabalin.png",
        },
      },
      {
        ingredient: "Nortriptyline HCl (10 mg)",
        role: "Tricyclic reuptake inhibitor increasing serotonin and noradrenaline in the brainstem, interrupting pain signals.",
        chemicalData: {
          name: "Nortriptyline",
          formula: "C19H21N",
          molecularWeight: "263.38 g/mol",
          pubchemCid: 4543,
          structureUrl: "/molecules/nortriptyline.png",
        },
      },
      {
        ingredient: "Methylcobalamin (1500 mcg)",
        role: "High-potency cobalamin restoring the myelin sheath and accelerating nerve conduction velocity.",
        chemicalData: {
          name: "Methylcobalamin",
          formula: "C63H91CoN13O14P",
          molecularWeight: "1344.4 g/mol",
          pubchemCid: 44120302,
          structureUrl: "/molecules/methylcobalamin.png",
        },
      },
    ],
    clinicalHighlights: [
      "More Potent Analgesia with Lesser Side Effects",
      "Better clinical efficacy achieved at lower individual doses due to pharmacological synergy",
      "Normalizes hyper-sensitized pain thresholds and sleep architecture",
    ],
    targetSpecialties: ["Neurologists & Neuro-Physicians"],
    warnings: [
      "Contraindicated in patients with acute recovery phase of myocardial infarction or severe cardiac arrhythmias",
      "Avoid concomitant use with MAO inhibitors",
      "Monitor for anticholinergic effects like dry mouth or mild drowsiness",
    ],
    storage: "Store below 25°C in original moisture-barrier packaging.",
    isRx: true,
  },

  // 3. Prenerve Forte
  {
    id: "icon-prenerve-forte",
    slug: "prenerve-forte",
    name: "Prenerve Forte",
    image: "/products/Prename Forte Capsules Product Display.png",
    tagline: "Adds Life to Lifeless Nerves — Giving a New Start to Life",
    genericName: "Methylcobalamin 1500 mcg + Benfotiamine 15 mg + ALA 100 mg + Inositol 100 mg + B-Complex + Lutein",
    category: "Neurology & Neuropathic Pain",
    therapySlug: "neurology-neuropathic-pain",
    strength: "Comprehensive 11-Compound Matrix",
    dosageForm: "Capsules",
    packSize: "10 x 10 Capsules Blister Pack",
    indications: [
      "Diabetic Neuropathy & Microvascular Complications",
      "Peripheral Sensory & Motor Neuropathy",
      "Entrapment & Nerve Compression Syndromes (Carpal Tunnel)",
      "Drug-Induced Neuropathy (Chemotherapy / Anti-TB)",
      "Alcohol-Induced Neuropathy",
    ],
    dosage: "1 capsule daily after a principal meal.",
    mechanism: "Comprehensive neuro-rejuvenation: Benfotiamine inhibits the toxic hexosamine and AGE pathways caused by hyperglycemia; Alpha Lipoic Acid quenches free radicals and recycles glutathione; Inositol and Choline restore phosphatidylinositol pools in nerve membranes to accelerate nerve conduction velocity; B-complex supports neurotransmitter synthesis.",
    ingredientActions: [
      {
        ingredient: "Methylcobalamin (1500 mcg)",
        role: "Promotes lecithin synthesis and repair of neuronal structural membranes.",
        chemicalData: {
          name: "Methylcobalamin",
          formula: "C63H91CoN13O14P",
          molecularWeight: "1344.4 g/mol",
          pubchemCid: 44120302,
          structureUrl: "/molecules/methylcobalamin.png",
        },
      },
      {
        ingredient: "Benfotiamine (15 mg)",
        role: "Lipid-soluble B1 that blocks diabetic microvascular and endothelial damage.",
        chemicalData: {
          name: "Benfotiamine",
          formula: "C19H23N4O6PS",
          molecularWeight: "466.4 g/mol",
          pubchemCid: 3032771,
          structureUrl: "/molecules/benfotiamine.png",
        },
      },
      {
        ingredient: "Alpha Lipoic Acid (100 mg)",
        role: "Universal intracellular antioxidant neutralizing oxidative neuro-inflammation.",
        chemicalData: {
          name: "Alpha Lipoic Acid",
          formula: "C8H14O2S2",
          molecularWeight: "206.33 g/mol",
          pubchemCid: 864,
          structureUrl: "/molecules/alpha-lipoic-acid.png",
        },
      },
      {
        ingredient: "Inositol & Choline (100 mg / 50 mg)",
        role: "Constituents of neuronal cell membranes that increase nerve conduction speed.",
        chemicalData: {
          name: "Myo-Inositol",
          formula: "C6H12O6",
          molecularWeight: "180.16 g/mol",
          pubchemCid: 892,
          structureUrl: "/molecules/inositol.png",
        },
      },
    ],
    clinicalHighlights: [
      "Comprehensive 11-compound neuro-metabolic matrix preventing neuronal complications",
      "Restores lost vibration perception and pinprick sensation in feet and hands",
      "High oral bioavailability with lipid-soluble vitamins",
    ],
    targetSpecialties: ["Neurologists & Neuro-Physicians", "General Physicians & Consulting Doctors"],
    warnings: [
      "Safe and well tolerated; rare cases of mild gastrointestinal upset",
      "Inform physician if receiving simultaneous heavy metal therapy",
    ],
    storage: "Store in a cool, dark place away from heat and direct sunlight.",
    isRx: true,
  },

  // 4. Prenerve Inj
  {
    id: "icon-prenerve-inj",
    slug: "prenerve-inj",
    name: "Prenerve Inj",
    image: "/products/PRENERVE Injection Packaging Shot.png",
    tagline: "Revitalize Neuronal Conditions — Rapid Parenteral Neuro-Rejuvenation",
    genericName: "Mecobalamin 1500 mcg + Folic Acid 0.7 mg + Niacinamide 12 mg",
    category: "Neurology & Neuropathic Pain",
    therapySlug: "neurology-neuropathic-pain",
    strength: "1500 mcg / 0.7 mg / 12 mg per 2 ml",
    dosageForm: "Injection",
    packSize: "Single-Dose 2 ml Ampoules (Tray of 5)",
    indications: [
      "Acute Diabetic Neuropathy",
      "Cervical Vertebral Syndrome & Sciatic Radiculopathy",
      "Severe Pernicious & Megaloblastic B12 Deficiency",
      "Hyperhomocysteinemia & Ischemic Neuro-Vascular Events",
      "Peripheral Neuropathy with Sensory Paralysis",
    ],
    dosage: "Intramuscular (IM) or slow Intravenous (IV) injection under clinical supervision.",
    mechanism: "Parenteral formulation bypassing gastrointestinal absorption barriers to deliver high concentrations of Mecobalamin straight to neuronal tissues for immediate nucleic acid synthesis and transmethylation. Folic acid and Niacinamide normalize homocysteine levels and enhance microvascular perfusion.",
    ingredientActions: [
      {
        ingredient: "Mecobalamin (1500 mcg)",
        role: "Directly active in CNS/PNS for nucleic acid synthesis and neuro-regeneration.",
        chemicalData: {
          name: "Methylcobalamin",
          formula: "C63H91CoN13O14P",
          molecularWeight: "1344.4 g/mol",
          pubchemCid: 44120302,
          structureUrl: "/molecules/methylcobalamin.png",
        },
      },
      {
        ingredient: "Folic Acid (0.7 mg)",
        role: "Essential cofactor for DNA synthesis and normal erythrocyte maturation.",
        chemicalData: {
          name: "Folic Acid",
          formula: "C19H19N7O6",
          molecularWeight: "441.4 g/mol",
          pubchemCid: 135398658,
          structureUrl: "/molecules/folic-acid.png",
        },
      },
      {
        ingredient: "Niacinamide (12 mg)",
        role: "Rectifies sensory perception deficits and optimizes microcirculatory oxygenation.",
        chemicalData: {
          name: "Niacinamide",
          formula: "C6H6N2O",
          molecularWeight: "122.12 g/mol",
          pubchemCid: 936,
          structureUrl: "/molecules/niacinamide.png",
        },
      },
    ],
    clinicalHighlights: [
      "Bypasses GI absorption barriers for rapid therapeutic plasma levels",
      "Immediate management of severe acute radicular and vertebral pain syndromes",
      "WHO-GMP validated sterile ampoule filling standards",
    ],
    targetSpecialties: ["Neurologists & Neuro-Physicians"],
    warnings: [
      "For IM/IV administration by registered healthcare professionals only",
      "Not recommended in early Leber's hereditary optic neuropathy",
    ],
    storage: "Store protected from light between 2°C and 25°C. Do not freeze.",
    isRx: true,
  },

  // 5. Argicon Tab
  {
    id: "icon-argicon-tab",
    slug: "argicon-tab",
    name: "Argicon Tab",
    image: "/products/ARGICON L-Arginine Tablet Boxes.png",
    tagline: "Add Life to Lifeless Nerves — The Powerful Neuroprotector",
    genericName: "L-Arginine 1000 mg",
    category: "Neurology & Neuropathic Pain",
    therapySlug: "neurology-neuropathic-pain",
    strength: "1000 mg",
    dosageForm: "Tablets",
    packSize: "10 x 1 x 10 / 10 x 10 Tablets Blister Pack",
    indications: [
      "Neurovascular Impairments & Ischemic Neuropathy",
      "Peripheral Arterial Disease (PAD) & Intermittent Claudication",
      "Angina Pectoris & Endothelial Dysfunction",
      "Hypertension & Migraine Prophylaxis",
      "Diabetic Microangiopathy & Erectile Dysfunction",
    ],
    dosage: "1 tablet once or twice daily with water, preferably on an empty stomach or between meals.",
    mechanism: "Substrate for endothelial nitric oxide synthase (eNOS), which catalyzes the production of endogenous nitric oxide (NO). NO stimulates guanylyl cyclase, generating cyclic GMP to relax vascular smooth muscles, dilate microvessels, and restore oxygenated microcirculation to ischemic nerves and cardiovascular tissue.",
    ingredientActions: [
      {
        ingredient: "L-Arginine (1000 mg)",
        role: "Potent nitric oxide (NO) precursor driving endothelial vasodilation and reducing vascular resistance.",
        chemicalData: {
          name: "L-Arginine",
          formula: "C6H14N4O2",
          molecularWeight: "174.20 g/mol",
          pubchemCid: 6322,
          structureUrl: "/molecules/l-arginine.png",
        },
      },
    ],
    clinicalHighlights: [
      "Restores vital microvascular blood flow to starved peripheral nerve bundles",
      "Supports endothelial nitric oxide synthesis to reduce systemic arterial resistance",
      "Aids functional mobility and exercise tolerance in claudication",
    ],
    targetSpecialties: ["Neurologists & Neuro-Physicians", "Urologists & Nephrologists"],
    warnings: [
      "Use cautiously in patients with severe renal impairment or acute asthma",
      "May potentiate antihypertensive medications; monitor blood pressure",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture.",
    isRx: true,
  },

  // 6. APAR / APAR-S / APAR-MR Range
  {
    id: "icon-apar-range",
    slug: "apar-range",
    name: "APAR / APAR-S / APAR-MR Range",
    image: "/products/Aceclofenac Paracetamol Medicine Pack.png",
    tagline: "Super Speed, Super Power & Prompt Relief — Powerful Yet Safer",
    genericName: "Aceclofenac + Paracetamol (± Serratiopeptidase / Thiocolchicoside)",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "APAR / APAR-S (15 mg Ser) / APAR-MR (4 mg Thio)",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Osteoarthritis & Rheumatoid Arthritis",
      "Ankylosing Spondylitis & Low Back Pain (Lumbago)",
      "Post-Surgical & Post-Trauma Pain",
      "Acute Musculoskeletal Spasms & Joint Stiffness",
      "Dental & Odontogenic Extraction Pain",
    ],
    dosage: "1 tablet twice daily with meals, or as directed by the physician.",
    mechanism: "Aceclofenac delivers preferential COX-2 inhibition with minimal gastric irritation; Paracetamol provides central analgesic synergy; Serratiopeptidase in APAR-S hydrolyzes fibrin and inflammatory exudates; Thiocolchicoside in APAR-MR acts as a selective GABA-A agonist to relieve muscle spasticity without causing sedation.",
    ingredientActions: [
      {
        ingredient: "Aceclofenac (100 mg)",
        role: "Selective COX-2 inhibitor with superior gastric and cardiovascular tolerability.",
        chemicalData: {
          name: "Aceclofenac",
          formula: "C16H13Cl2NO4",
          molecularWeight: "354.18 g/mol",
          pubchemCid: 71771,
          structureUrl: "/molecules/aceclofenac.png",
        },
      },
      {
        ingredient: "Paracetamol (325 mg)",
        role: "Synergistic central analgesic and antipyretic agent.",
        chemicalData: {
          name: "Paracetamol",
          formula: "C8H9NO2",
          molecularWeight: "151.16 g/mol",
          pubchemCid: 1983,
          structureUrl: "/molecules/paracetamol.png",
        },
      },
      {
        ingredient: "Serratiopeptidase (15 mg in APAR-S)",
        role: "Proteolytic enzyme clearing inflammatory exudates, hematomas, and edema.",
      },
      {
        ingredient: "Thiocolchicoside (4 mg in APAR-MR)",
        role: "Non-sedating muscle relaxant acting via spinal GABAergic inhibition.",
        chemicalData: {
          name: "Thiocolchicoside",
          formula: "C27H33NO10S",
          molecularWeight: "563.6 g/mol",
          pubchemCid: 9809493,
          structureUrl: "/molecules/thiocolchicoside.png",
        },
      },
    ],
    clinicalHighlights: [
      "Suppresses acute pain within 2–3 hours of administration",
      "Tailored three-tier portfolio: Analgesic (APAR), Anti-Edema (APAR-S), Muscle Relaxant (APAR-MR)",
      "High gastrointestinal safety profile compared to conventional NSAIDs",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Dentists & Oral Maxillofacial Surgeons", "General Physicians & Consulting Doctors"],
    warnings: [
      "Contraindicated in patients with active peptic ulceration or severe renal/hepatic impairment",
      "Do not exceed recommended paracetamol dosages from multiple concurrent medications",
    ],
    storage: "Store in a cool dry place protected from light.",
    isRx: true,
  },

  // 7. CT-Flam
  {
    id: "icon-ct-flam",
    slug: "ct-flam",
    name: "CT-Flam",
    image: "/products/CT-Flam Tablets Product Packaging.png",
    tagline: "Reduce Oedema with CT-Flam — Cut Down Suffering Softly",
    genericName: "Trypsin 48 mg + Bromelain 90 mg + Rutoside Trihydrate 100 mg + Aceclofenac 100 mg",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "48 mg / 90 mg / 100 mg / 100 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Post-Operative Edema & Hematoma Resolution",
      "Post-Tooth Extraction & Maxillofacial Swelling",
      "Sports Injuries, Sprains & Strains",
      "Osteoarthritis & Rheumatoid Arthritis Flares",
      "Tendonitis, Bursitis & Spondylopathies",
    ],
    dosage: "1 tablet twice daily after meals until inflammation and edema subside.",
    mechanism: "Multi-enzymatic debridement therapy: Trypsin rapidly digests micro-thrombi and necrotic cellular debris; Bromelain provides anti-thrombotic and fibrinolytic activity; Rutoside Trihydrate acts as a vascular-protectant bioflavonoid decreasing microvascular permeability; Aceclofenac controls immediate pain and inflammation.",
    ingredientActions: [
      {
        ingredient: "Trypsin (48 mg)",
        role: "Rapidly digests fibrin clots and dead tissue at inflammatory sites.",
      },
      {
        ingredient: "Bromelain (90 mg)",
        role: "Proteolytic pineapple enzyme with anti-inflammatory and anti-edematous action.",
      },
      {
        ingredient: "Rutoside Trihydrate (100 mg)",
        role: "Flavonoid antioxidant reducing vascular hyper-permeability and capillary fragility.",
        chemicalData: {
          name: "Rutoside Trihydrate",
          formula: "C27H30O16",
          molecularWeight: "610.5 g/mol",
          pubchemCid: 5280805,
          structureUrl: "/molecules/rutin.png",
        },
      },
      {
        ingredient: "Aceclofenac (100 mg)",
        role: "Potent NSAID controlling surgical and traumatic pain.",
        chemicalData: {
          name: "Aceclofenac",
          formula: "C16H13Cl2NO4",
          molecularWeight: "354.18 g/mol",
          pubchemCid: 71771,
          structureUrl: "/molecules/aceclofenac.png",
        },
      },
    ],
    clinicalHighlights: [
      "Enzymatic debridement clears surgical swelling and hematomas 40% faster",
      "Accelerates tissue healing in sports trauma and maxillofacial extractions",
      "Enhances antibiotic penetration into inflamed soft tissues",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Dentists & Oral Maxillofacial Surgeons"],
    warnings: [
      "Caution in patients with bleeding disorders or those receiving anticoagulants",
      "Not recommended in severe hepatic impairment",
    ],
    storage: "Store below 25°C in a dry place protected from sunlight.",
    isRx: true,
  },

  // 8. Serek-D
  {
    id: "icon-serek-d",
    slug: "serek-d",
    name: "Serek-D",
    image: "/products/Diclofenac Tablets Product Packaging.png",
    tagline: "Dual Action Rapid Pain Relief & Enzyme Penetration",
    genericName: "Diclofenac Potassium 50 mg + Serratiopeptidase 10 mg",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "50 mg / 10 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Fractures & Dislocations",
      "Sports Injuries, Sprains & Tendonitis",
      "Post-Operative Trauma & Edema",
      "Dental Abscess & Odontogenic Pain",
      "ENT Inflammatory Conditions (Sinusitis / Otitis)",
    ],
    dosage: "1 tablet two to three times daily after food.",
    mechanism: "Diclofenac Potassium provides faster dissolution and quicker clinical pain relief than sodium salts; Serratiopeptidase breaks down peptide chains of inflammatory bradykinin and promotes drainage of edema.",
    ingredientActions: [
      {
        ingredient: "Diclofenac Potassium (50 mg)",
        role: "Rapid-onset NSAID delivering fast systemic pain relief within 30 minutes.",
        chemicalData: {
          name: "Diclofenac",
          formula: "C14H11Cl2NO2",
          molecularWeight: "295.14 g/mol",
          pubchemCid: 3033,
          structureUrl: "/molecules/diclofenac.png",
        },
      },
      {
        ingredient: "Serratiopeptidase (10 mg)",
        role: "Proteolytic anti-inflammatory enzyme clearing cellular debris and swelling.",
      },
    ],
    clinicalHighlights: [
      "Fast-acting potassium salt ensures rapid onset of analgesic relief",
      "Reduces post-surgical swelling and hematomas effectively",
      "Improves local tissue circulation for accelerated recovery",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Dentists & Oral Maxillofacial Surgeons", "General Physicians & Consulting Doctors"],
    warnings: [
      "Avoid in active gastrointestinal ulceration or severe renal dysfunction",
      "Monitor blood pressure in hypertensive patients",
    ],
    storage: "Store below 25°C in a cool and dry place.",
    isRx: true,
  },

  // 9. Serek-DP
  {
    id: "icon-serek-dp",
    slug: "serek-dp",
    name: "Serek-DP",
    image: "/products/Diclofenac Tablets Product Packaging.png",
    tagline: "The Analgesic with Extra Strength — Clinically Effective NSAID",
    genericName: "Diclofenac Potassium 50 mg + Serratiopeptidase 15 mg + Paracetamol 325 mg",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "50 mg / 15 mg / 325 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Blister Pack",
    indications: [
      "Acute Spondylitis & Ankylosing Spondylitis",
      "Frozen Shoulder & Severe Joint Trauma",
      "Low Back Pain & Sciatica",
      "Post-Dental Extraction & Maxillofacial Pain",
      "Severe Post-Surgical Musculoskeletal Pain",
    ],
    dosage: "1 tablet twice daily after meals.",
    mechanism: "Extra-strength triple-action formula: Diclofenac Potassium relieves peripheral inflammation; Paracetamol acts centrally to amplify pain thresholds; High-dose Serratiopeptidase accelerates drug penetration into joint capsules and clears swelling.",
    ingredientActions: [
      {
        ingredient: "Diclofenac Potassium (50 mg)",
        role: "Rapid-acting NSAID for swift control of acute joint and tissue inflammation.",
        chemicalData: {
          name: "Diclofenac",
          formula: "C14H11Cl2NO2",
          molecularWeight: "295.14 g/mol",
          pubchemCid: 3033,
          structureUrl: "/molecules/diclofenac.png",
        },
      },
      {
        ingredient: "Serratiopeptidase (15 mg)",
        role: "Enhanced-dose enzyme improving drug penetration and micro-circulatory drainage.",
      },
      {
        ingredient: "Paracetamol (325 mg)",
        role: "Central analgesic and antipyretic providing synergistic pain relief.",
        chemicalData: {
          name: "Paracetamol",
          formula: "C8H9NO2",
          molecularWeight: "151.16 g/mol",
          pubchemCid: 1983,
          structureUrl: "/molecules/paracetamol.png",
        },
      },
    ],
    clinicalHighlights: [
      "Triple-action extra-strength formula for refractory musculoskeletal pain",
      "Accelerates drug penetration into inflamed joints and dental tissues",
      "Ensures fastest onset of action in severe flares",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Dentists & Oral Maxillofacial Surgeons"],
    warnings: [
      "Do not co-administer with other paracetamol or NSAID products",
      "Discontinue if allergic skin rashes or GI discomfort occurs",
    ],
    storage: "Store in a dry place below 30°C. Protect from moisture.",
    isRx: true,
  },

  // 10. Serek-N
  {
    id: "icon-serek-n",
    slug: "serek-n",
    name: "Serek-N",
    image: "/products/SEREK-N Medicine Box and Blister Pack.png",
    tagline: "Targeted Anti-Inflammatory for Arthritis & Dysmenorrhea",
    genericName: "Nimesulide 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "100 mg / 325 mg / 15 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Blister Pack",
    indications: [
      "Osteoarthritis & Rheumatoid Arthritis Flares",
      "Acute Low Back Pain & Lumbago",
      "Severe Dysmenorrhea & Pelvic Inflammatory Pain",
      "Post-Operative Gynecological & General Pain",
      "Dental Pain & Oral Inflammations",
    ],
    dosage: "1 tablet twice daily after food for short-term pain relief (max 15 days).",
    mechanism: "Nimesulide is a preferential COX-2 inhibitor with rapid 15-minute onset that scavenges free radicals and inhibits chondrocyte apoptosis; Paracetamol boosts central antipyretic synergy; Serratiopeptidase rapidly clears inflammatory edema.",
    ingredientActions: [
      {
        ingredient: "Nimesulide (100 mg)",
        role: "Preferential COX-2 inhibitor with rapid onset and cartilage-protective properties.",
        chemicalData: {
          name: "Nimesulide",
          formula: "C13H12N2O5S",
          molecularWeight: "308.31 g/mol",
          pubchemCid: 4495,
          structureUrl: "/molecules/nimesulide.png",
        },
      },
      {
        ingredient: "Paracetamol (325 mg)",
        role: "Centrally acts to elevate pain threshold and bring down fever.",
        chemicalData: {
          name: "Paracetamol",
          formula: "C8H9NO2",
          molecularWeight: "151.16 g/mol",
          pubchemCid: 1983,
          structureUrl: "/molecules/paracetamol.png",
        },
      },
      {
        ingredient: "Serratiopeptidase (15 mg)",
        role: "Fibrinolytic enzyme accelerating hematoma and inflammatory exudate drainage.",
      },
    ],
    clinicalHighlights: [
      "Rapid 15-minute symptomatic relief in acute arthritic flares",
      "Excellent efficacy in primary and secondary dysmenorrhea",
      "Dual anti-inflammatory and anti-edematous coverage",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Gynecologists & Obstetricians (OB-GYN)"],
    warnings: [
      "Short-term use only; contraindicated in patients with active liver disease or alcohol dependency",
      "Do not prescribe to children under 12 years of age",
    ],
    storage: "Store below 25°C away from humidity and heat.",
    isRx: true,
  },

  // 11. Prenerve Gel
  {
    id: "icon-prenerve-gel",
    slug: "prenerve-gel",
    name: "Prenerve Gel",
    image: "/products/PRENERVE Gel Product Set.png",
    tagline: "Powerful Muscle Relaxant — Powerful Pain Relief at the Site",
    genericName: "Diclofenac Diethylamine 1.16% + Linseed Oil 3% + Methyl Salicylate 10% + Menthol 5%",
    category: "Orthopedics & Musculoskeletal Pain",
    therapySlug: "orthopedics-musculoskeletal",
    strength: "1.16% / 3% / 10% / 5% w/w",
    dosageForm: "Topical Gel",
    packSize: "30 g Laminated Tube",
    indications: [
      "Acute Backache, Lumbago & Sciatica",
      "Sprains, Strains & Sports Injuries",
      "Joint Stiffness & Osteoarthritic Knee Pain",
      "Cervical Spondylitis & Neck Spasms",
      "Frozen Shoulder & Muscular Contusions",
    ],
    dosage: "Apply gently to the affected site 3 to 4 times daily without vigorous rubbing.",
    mechanism: "Multi-action transdermal delivery: Diclofenac Diethylamine penetrates deep into synovial joints to inhibit COX-2 locally; Linseed Oil supplies alpha-linolenic acid to suppress localized prostaglandins; Methyl Salicylate induces warm microvascular hyperaemia; Menthol creates cooling counter-irritation.",
    ingredientActions: [
      {
        ingredient: "Diclofenac Diethylamine (1.16% w/w)",
        role: "Penetrates transdermally for site-specific NSAID relief without systemic GI load.",
        chemicalData: {
          name: "Diclofenac",
          formula: "C14H11Cl2NO2",
          molecularWeight: "295.14 g/mol",
          pubchemCid: 3033,
          structureUrl: "/molecules/diclofenac.png",
        },
      },
      {
        ingredient: "Linseed Oil (3% w/w)",
        role: "Natural anti-inflammatory oil suppressing inflammatory cutaneous cytokines.",
      },
      {
        ingredient: "Methyl Salicylate (10% w/w)",
        role: "Deep counter-irritant stimulating localized blood flow and tissue relaxation.",
        chemicalData: {
          name: "Methyl Salicylate",
          formula: "C8H8O3",
          molecularWeight: "152.15 g/mol",
          pubchemCid: 4133,
          structureUrl: "/molecules/methyl-salicylate.png",
        },
      },
      {
        ingredient: "Menthol (5% w/w)",
        role: "Instant cooling sensation that desensitizes superficial nociceptive pain fibers.",
        chemicalData: {
          name: "L-Menthol",
          formula: "C10H20O",
          molecularWeight: "156.27 g/mol",
          pubchemCid: 16666,
          structureUrl: "/molecules/menthol.png",
        },
      },
    ],
    clinicalHighlights: [
      "Site-specific relief with zero gastrointestinal or renal systemic burden",
      "Cardiovascularly safe for hypertensive and elderly cardiac patients",
      "Quick absorption, non-greasy, and non-staining gel base",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "General Physicians & Consulting Doctors"],
    warnings: [
      "For external topical application only; do not apply to open wounds or broken skin",
      "Avoid contact with eyes and mucous membranes; wash hands after application",
    ],
    storage: "Store below 30°C. Keep tube tightly closed after use. Do not freeze.",
    isRx: false,
  },

  // 12. Precal Softgel
  {
    id: "icon-precal-softgel",
    slug: "precal-softgel",
    name: "Precal Softgel",
    image: "/products/PRECAL Softgel Capsules Product Display.png",
    tagline: "In Progressive Bone Disease — The Premium Calcium",
    genericName: "Calcitriol 0.25 mcg + Calcium Carbonate 500 mg + Zinc 7.5 mg + Vit K2-7 + B12 + Folate",
    category: "Bone Health & Mineral Metabolism",
    therapySlug: "bone-health-minerals",
    strength: "Calcitriol 0.25 mcg / Ca Carbonate 500 mg / K2-7 45 mcg",
    dosageForm: "Softgel Capsules",
    packSize: "10 x 1 x 10 Softgel Capsules Blister Pack",
    indications: [
      "Post-Menopausal Osteoporosis",
      "Senile & Age-Related Osteoporosis",
      "Bone Fragility & Pathological Fracture Prevention",
      "Osteomalacia & Chronic Hypocalcemia",
      "Pregnancy & Lactation Calcium Supplementation",
    ],
    dosage: "1 softgel capsule daily after meals, or as recommended by an endocrinologist.",
    mechanism: "Calcitriol enhances active intestinal absorption of calcium and phosphate; Calcium Carbonate restores structural bone mineral density; Vitamin K2-7 carboxylates osteocalcin to direct calcium specifically into the bone matrix and away from blood vessels; Zinc and Magnesium support osteoblast collagen synthesis.",
    ingredientActions: [
      {
        ingredient: "Calcitriol (0.25 mcg)",
        role: "Biologically active Vitamin D3 increasing intestinal calcium transport by over 300%.",
        chemicalData: {
          name: "Calcitriol (1,25-DHVD3)",
          formula: "C27H44O3",
          molecularWeight: "416.6 g/mol",
          pubchemCid: 5280453,
          structureUrl: "/molecules/calcitriol.png",
        },
      },
      {
        ingredient: "Calcium Carbonate (500 mg)",
        role: "Elemental calcium source essential for remineralizing porous trabecular bone.",
        chemicalData: {
          name: "Calcium Carbonate",
          formula: "CCaO3",
          molecularWeight: "100.09 g/mol",
          pubchemCid: 10112,
          structureUrl: "/molecules/calcium-carbonate.png",
        },
      },
      {
        ingredient: "Vitamin K2-7 (45 mcg)",
        role: "Directs calcium into the bone hydroxyapatite matrix, preventing vascular calcification.",
        chemicalData: {
          name: "Menaquinone-7 (Vit K2)",
          formula: "C46H64O2",
          molecularWeight: "649.0 g/mol",
          pubchemCid: 5360980,
          structureUrl: "/molecules/vitamin-k2-7.png",
        },
      },
      {
        ingredient: "Zinc (7.5 mg) & Magnesium (50 mg)",
        role: "Critical enzymatic cofactors for osteoblastic activity and normal bone collagen turnover.",
      },
    ],
    clinicalHighlights: [
      "Softgel Advantage: easy to swallow, higher bio-absorption, and zero chalky taste",
      "Vitamin K2-7 ensures calcium deposits into bones rather than coronary arteries",
      "Prevents paresthesia and vibratory loss with neuro-active B12 and L-methylfolate",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Gynecologists & Obstetricians (OB-GYN)"],
    warnings: [
      "Contraindicated in patients with active hypercalcemia or hypervitaminosis D",
      "Monitor serum calcium and phosphate levels periodically during prolonged therapy",
    ],
    storage: "Store in a cool dry place below 25°C. Protect from excessive heat and direct moisture.",
    isRx: true,
  },

  // 13. Precal-D
  {
    id: "icon-precal-d",
    slug: "precal-d",
    name: "Precal-D",
    image: "/products/Calcium and Vitamin D Tablet Packaging.png",
    tagline: "Convert Fragility into Durability — Renders Toughness to Bones",
    genericName: "Calcium Aspartate + Magnesium Hydroxide + Zinc + Vitamin D3",
    category: "Bone Health & Mineral Metabolism",
    therapySlug: "bone-health-minerals",
    strength: "Chelated Calcium Aspartate + Co-factors",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Bone Fragility & Recurrent Fractures",
      "Bone Deformities & Osteopenia",
      "Hypocalcemia in Pregnancy & Lactation",
      "Osteomalacia & Chronic Joint Degeneration",
      "Post-Menopausal Bone Loss",
    ],
    dosage: "1 tablet once or twice daily after meals.",
    mechanism: "Calcium Aspartate is an organically chelated amino-acid calcium compound with >90% bioavailability that does not require stomach acid for absorption. Magnesium Hydroxide exerts a gentle laxative balancing effect that neutralizes the constipation commonly associated with calcium supplementation; Vitamin D3 drives bone remineralization.",
    ingredientActions: [
      {
        ingredient: "Calcium Aspartate",
        role: "Highly bioavailable organic chelated calcium that absorbs smoothly without stomach acid.",
      },
      {
        ingredient: "Magnesium Hydroxide",
        role: "Counteracts calcium-induced constipation by retaining bowel hydration.",
      },
      {
        ingredient: "Vitamin D3",
        role: "Enhances systemic mineral absorption and stimulates osteoblastic bone deposition.",
      },
    ],
    clinicalHighlights: [
      "Organic chelated formulation eliminates calcium-induced constipation",
      "Superior gastrointestinal absorption rate compared to standard calcium salts",
      "Renders remarkable toughness and durability to fragile bones",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Gynecologists & Obstetricians (OB-GYN)"],
    warnings: [
      "Safe in pregnancy when used under medical supervision",
      "Dose titration needed in chronic kidney disease",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture.",
    isRx: true,
  },

  // 14. Pandom / Pandom-SR
  {
    id: "icon-pandom-range",
    slug: "pandom-range",
    name: "Pandom / Pandom-SR",
    image: "/products/PANDOM SR Tablets Pharmaceutical Packaging.png",
    tagline: "Controls Acid & Reflux — The GI Fire Extinguisher",
    genericName: "Pantoprazole 40 mg + Domperidone 10 mg / 30 mg SR",
    category: "Gastroenterology & Acid-Peptic Disorders",
    therapySlug: "gastroenterology",
    strength: "Pandom Tab: 20/10 mg | Pandom-SR: 40/30 mg",
    dosageForm: "Tablets & Capsules",
    packSize: "10 x 10 Tablets & SR Capsules Alu-Alu Strip",
    indications: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Erosive & Non-Erosive Esophagitis",
      "Peptic & Duodenal Ulcer Disease",
      "Functional Dyspepsia & Acid Belching",
      "Post-Operative & NSAID-Induced Nausea & Gastritis",
    ],
    dosage: "1 tablet or capsule daily in the morning, 30 to 60 minutes before breakfast.",
    mechanism: "Dual-action acid-motility control: Pantoprazole irreversibly binds to and inhibits the gastric H+/K+ ATPase enzyme in parietal cells, halting gastric acid secretion. Domperidone acts as a peripheral dopamine D2 receptor antagonist, increasing lower esophageal sphincter tone and stimulating antral gastroduodenal motility to prevent retrograde reflux.",
    ingredientActions: [
      {
        ingredient: "Pantoprazole Sodium (40 mg)",
        role: "Irreversibly inhibits proton pump to provide sustained 24-hour gastric acid suppression.",
        chemicalData: {
          name: "Pantoprazole",
          formula: "C16H15F2N3O4S",
          molecularWeight: "383.37 g/mol",
          pubchemCid: 4679,
          structureUrl: "/molecules/pantoprazole.png",
        },
      },
      {
        ingredient: "Domperidone (10 mg / 30 mg SR)",
        role: "Prokinetic agent that accelerates gastric emptying and prevents nausea and reflux.",
        chemicalData: {
          name: "Domperidone",
          formula: "C22H24ClN5O2",
          molecularWeight: "425.9 g/mol",
          pubchemCid: 3151,
          structureUrl: "/molecules/domperidone.png",
        },
      },
    ],
    clinicalHighlights: [
      "The GI Fire Extinguisher: provides rapid relief from heartburn within hours",
      "Dual control targeting both acid overproduction and delayed gastric emptying",
      "Sustained-release capsule format delivers uninterrupted 24-hour nocturnal relief",
    ],
    targetSpecialties: ["Gastroenterologists & GI Surgeons", "General Physicians & Consulting Doctors"],
    warnings: [
      "Capsule should be swallowed whole; do not crush or chew",
      "Long-term PPI therapy may warrant periodic monitoring of serum magnesium and Vitamin B12",
    ],
    storage: "Store in a dry place below 25°C. Protect from moisture.",
    isRx: true,
  },

  // 15. Rabicon / Rabicon-L
  {
    id: "icon-rabicon-range",
    slug: "rabicon-range",
    name: "Rabicon / Rabicon-L",
    image: "/products/Rabicon Tablets Blister Pack and Box.png",
    tagline: "Erases Acid, Regulates Motility — Greater Success in Reflux",
    genericName: "Rabeprazole Sodium 20 mg (± Levosulpiride 75 mg SR)",
    category: "Gastroenterology & Acid-Peptic Disorders",
    therapySlug: "gastroenterology",
    strength: "Rabicon: 20 mg | Rabicon-L: 20 mg / 75 mg SR",
    dosageForm: "Tablets & Capsules",
    packSize: "10 x 10 Tablets & SR Capsules Alu-Alu Strip",
    indications: [
      "Severe Refractory GERD & Dyspepsia",
      "Reflux Oesophagitis (including post-gastrectomy bile reflux)",
      "Gastric & Duodenal Ulcer Disease",
      "Zollinger-Ellison Syndrome & Hyperacidity",
      "Chronic Gastritis & Post-Operative Nausea",
    ],
    dosage: "1 capsule daily in the morning on an empty stomach, 30 minutes before food.",
    mechanism: "Fastest pKa proton pump inhibition: Rabeprazole is converted into active sulfenamide at higher pH than other PPIs, initiating faster acid shutdown. Levosulpiride selectively blocks central and peripheral dopamine D2 receptors while enhancing 5-HT4 mediated acetylcholine release, restoring coordinated peristalsis along BOTH the proximal AND distal gut.",
    ingredientActions: [
      {
        ingredient: "Rabeprazole Sodium (20 mg)",
        role: "Fastest-acting proton pump inhibitor achieving superior endoscopic mucosal healing rates.",
        chemicalData: {
          name: "Rabeprazole",
          formula: "C18H21N3O3S",
          molecularWeight: "359.4 g/mol",
          pubchemCid: 5029,
          structureUrl: "/molecules/rabeprazole.png",
        },
      },
      {
        ingredient: "Levosulpiride (75 mg SR in Rabicon-L)",
        role: "Advanced prokinetic acting on both proximal and distal bowel, unlike domperidone.",
        chemicalData: {
          name: "Levosulpiride",
          formula: "C15H23N3O4S",
          molecularWeight: "341.4 g/mol",
          pubchemCid: 65860,
          structureUrl: "/molecules/levosulpiride.png",
        },
      },
    ],
    clinicalHighlights: [
      "Levosulpiride outperforms Domperidone with active prokinetic regulation on both proximal and distal gut",
      "Fastest pKa activation provides rapid relief from the first dose",
      "Effective in maintaining histological healing in complex bile reflux",
    ],
    targetSpecialties: ["Gastroenterologists & GI Surgeons"],
    warnings: [
      "Not recommended in patients with pheochromocytoma or GI hemorrhage",
      "May cause mild somnolence in sensitive individuals during early therapy",
    ],
    storage: "Store in a cool and dry place below 25°C.",
    isRx: true,
  },

  // 16. Argicon Sachet
  {
    id: "icon-argicon-sachet",
    slug: "argicon-sachet",
    name: "Argicon Sachet",
    image: "/products/ARGICON Orange Sachet Packaging.png",
    tagline: "Create Comforts During Gestation — Successful Pregnancy Outcome",
    genericName: "L-Arginine 3 g + Proanthocyanidin Granules 75 mg",
    category: "Obstetrics, Gynecology & Hematinics",
    therapySlug: "obstetrics-gynecology",
    strength: "3 g / 75 mg per 5 g Sachet",
    dosageForm: "Sachet Granules",
    packSize: "10 x 5 g Sachet Box",
    indications: [
      "Intrauterine Growth Retardation (IUGR)",
      "Pregnancy-Induced Hypertension (PIH)",
      "Pre-Eclampsia & Placental Insufficiency",
      "Oligohydramnios (Low Amniotic Fluid)",
      "Luteal Phase Defect & Ovarian Function Support",
    ],
    dosage: "Dissolve contents of 1 sachet in half a glass of drinking water, taken once or twice daily.",
    mechanism: "L-Arginine acts as a biological precursor of Nitric Oxide (NO) in the vascular endothelium, promoting smooth muscle relaxation in uterine and umbilical spiral arteries. This significantly reduces maternal vascular resistance, boosts placental blood flow, and enhances fetal nutrient delivery. Proanthocyanidins deliver antioxidant capillary stabilization.",
    ingredientActions: [
      {
        ingredient: "L-Arginine (3 g)",
        role: "Drives nitric oxide synthesis to dilate uteroplacental arteries and support fetal growth.",
        chemicalData: {
          name: "L-Arginine",
          formula: "C6H14N4O2",
          molecularWeight: "174.20 g/mol",
          pubchemCid: 6322,
          structureUrl: "/molecules/l-arginine.png",
        },
      },
      {
        ingredient: "Proanthocyanidin Granules (75 mg)",
        role: "Potent bioflavonoid maintaining placental vascular wall integrity and micro-circulation.",
        chemicalData: {
          name: "Proanthocyanidin B1",
          formula: "C30H26O12",
          molecularWeight: "578.5 g/mol",
          pubchemCid: 108065,
          structureUrl: "/molecules/proanthocyanidin.png",
        },
      },
    ],
    clinicalHighlights: [
      "Supports and improves ovarian function, restoring healthy reproductive cycles",
      "Clinically improves Amniotic Fluid Index (AFI) in oligohydramnios",
      "Optimizes birth weight in high-risk IUGR pregnancies",
    ],
    targetSpecialties: ["Gynecologists & Obstetricians (OB-GYN)"],
    warnings: [
      "To be used strictly under clinical supervision of a gynecologist during pregnancy",
      "Check blood pressure regularly during high-risk gestation management",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture and direct light.",
    isRx: true,
  },

  // 17. Fobiron
  {
    id: "icon-fobiron",
    slug: "fobiron",
    name: "Fobiron (Tablets & Syrup)",
    image: "/products/Fobiron Tablets Blister Pack and Box.png",
    tagline: "For Faster Recovery from Deficiency State — The Risk-Free Iron",
    genericName: "Ferrous Ascorbate + Folic Acid + Zinc Sulphate",
    category: "Obstetrics, Gynecology & Hematinics",
    therapySlug: "obstetrics-gynecology",
    strength: "Tablets: 100 mg / 1.5 mg / 22.5 mg | Syrup: 30 mg / 500 mcg per 5 ml",
    dosageForm: "Tablets & Syrup",
    packSize: "3 x 10 Tablets Pack & 150 ml Flavored Suspension",
    indications: [
      "Iron Deficiency Anemia in Pregnancy & Lactation",
      "Menorrhagia & Heavy Menstrual Blood Loss",
      "Pre & Post-Operative Anemia in Surgical Patients",
      "Anemia Associated with Chronic Medical Diseases",
      "General Fatigue & Sub-optimal Serum Ferritin",
    ],
    dosage: "Tablets: 1 tablet daily after food. Syrup: 5-10 ml once or twice daily, or as advised by the doctor.",
    mechanism: "Ferrous Ascorbate consists of iron coordinated with ascorbic acid; the ascorbate maintains iron in the soluble and highly bioavailable ferrous (Fe2+) state even in neutral duodenal pH, enabling up to 50% greater absorption than ferrous sulphate. Folic acid supports normoblastic erythropoiesis; Zinc serves as an essential cofactor for fetal growth and hemoglobin synthesis.",
    ingredientActions: [
      {
        ingredient: "Ferrous Ascorbate (100 mg elemental iron)",
        role: "Absorbed 50% more than ferrous sulphate, with minimal gastric irritation and no metallic taste.",
        chemicalData: {
          name: "Iron Ascorbate",
          formula: "C12H14FeO12",
          molecularWeight: "406.08 g/mol",
          pubchemCid: 16212154,
          structureUrl: "/molecules/ferrous-ascorbate.png",
        },
      },
      {
        ingredient: "Folic Acid (1.5 mg)",
        role: "Prevents neural tube defects and ensures rapid erythrocyte maturation in bone marrow.",
        chemicalData: {
          name: "Folic Acid",
          formula: "C19H19N7O6",
          molecularWeight: "441.4 g/mol",
          pubchemCid: 135398658,
          structureUrl: "/molecules/folic-acid.png",
        },
      },
      {
        ingredient: "Zinc Sulphate (22.5 mg)",
        role: "Promotes fetal development, strengthens immunity, and aids wound healing.",
      },
    ],
    clinicalHighlights: [
      "Absorbed 50% more than conventional Ferrous Sulphate with higher bio-available iron",
      "Ensures rapid increase in hemoglobin and serum ferritin levels",
      "Risk-free iron: eliminates nausea, constipation, gastric burning, and dental staining",
    ],
    targetSpecialties: ["Gynecologists & Obstetricians (OB-GYN)", "General Physicians & Consulting Doctors"],
    warnings: [
      "Avoid taking concurrently with tea, coffee, or milk which may inhibit iron absorption",
      "Keep out of reach of children; unintentional iron overdose is toxic in infants",
    ],
    storage: "Store below 25°C in a dry place. Protect syrup from direct sunlight.",
    isRx: true,
  },

  // 18. Recoff
  {
    id: "icon-recoff-syrup",
    slug: "recoff-syrup",
    name: "Recoff Syrup",
    image: "/products/Recoff Cough Syrup Bottle.png",
    tagline: "A Novel & Trusted Bronchodilator — Cough Off with Recoff",
    genericName: "Ambroxol HCl 15 mg + Guaiphenesin 50 mg + Terbutaline 1.5 mg with Menthol",
    category: "Respiratory, Pulmonology & Allergy",
    therapySlug: "respiratory-pulmonology",
    strength: "Per 5 ml: 15 mg / 50 mg / 1.5 mg",
    dosageForm: "Syrup",
    packSize: "60 ml / 100 ml Amber PET Bottle with Measuring Cup",
    indications: [
      "Productive (Wet) Mucus-Laden Cough",
      "Acute & Chronic Bronchitis",
      "Bronchial Asthma with Viscid Mucus",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Emphysema & Tracheobronchitis",
    ],
    dosage: "Adults: 10 ml three times daily. Children (6-12 yrs): 5 ml three times daily.",
    mechanism: "Triple broncho-mucociliary relief: Ambroxol depolymerizes mucopolysaccharide fibers and stimulates pulmonary surfactant; Guaiphenesin increases respiratory tract fluid volume to reduce mucus adhesiveness; Terbutaline stimulates bronchial beta-2 receptors causing rapid bronchodilation; Menthol soothes inflamed pharyngeal tissues.",
    ingredientActions: [
      {
        ingredient: "Ambroxol HCl (15 mg)",
        role: "A novel mucolytic that liquefies tenacious secretions and boosts surfactant synthesis.",
        chemicalData: {
          name: "Ambroxol",
          formula: "C13H18Br2N2O",
          molecularWeight: "378.10 g/mol",
          pubchemCid: 2132,
          structureUrl: "/molecules/ambroxol.png",
        },
      },
      {
        ingredient: "Guaiphenesin (50 mg)",
        role: "A time-tested expectorant reducing sputum viscosity for effortless expulsion.",
        chemicalData: {
          name: "Guaiphenesin",
          formula: "C10H14O4",
          molecularWeight: "198.22 g/mol",
          pubchemCid: 3516,
          structureUrl: "/molecules/guaiphenesin.png",
        },
      },
      {
        ingredient: "Terbutaline Sulphate (1.5 mg)",
        role: "Safe and effective bronchodilator widening constricted airways.",
        chemicalData: {
          name: "Terbutaline",
          formula: "C12H19NO3",
          molecularWeight: "225.28 g/mol",
          pubchemCid: 5403,
          structureUrl: "/molecules/terbutaline.png",
        },
      },
      {
        ingredient: "Menthol",
        role: "Provides a persistent soothing cooling effect to irritated mucosal nerve endings.",
        chemicalData: {
          name: "L-Menthol",
          formula: "C10H20O",
          molecularWeight: "156.27 g/mol",
          pubchemCid: 16666,
          structureUrl: "/molecules/menthol.png",
        },
      },
    ],
    clinicalHighlights: [
      "Comprehensive triple-action clearing of productive wet cough and thick phlegm",
      "Rapid bronchodilation restores effortless breathing within 15–30 minutes",
      "Pleasant soothing flavor with long-lasting pharyngeal relief",
    ],
    targetSpecialties: ["Pulmonologists & Chest Physicians", "General Physicians & Consulting Doctors"],
    warnings: [
      "Use with caution in patients with severe cardiac disease, hyperthyroidism, or diabetes",
      "Not recommended for dry, non-productive cough",
    ],
    storage: "Store below 25°C. Keep bottle tightly closed and shake well before use.",
    isRx: true,
  },

  // 19. Recoff-DX
  {
    id: "icon-recoff-dx-syrup",
    slug: "recoff-dx-syrup",
    name: "Recoff-DX Syrup",
    image: "/products/Recoff-Dx Cough Syrup Packaging.png",
    tagline: "Safe & Reliable Anti-Cough Solution — An Ideal Anti-Cough Therapy",
    genericName: "Dextromethorphan HBr 10 mg + Phenylephrine HCl 5 mg + Chlorpheniramine Maleate 2 mg",
    category: "Respiratory, Pulmonology & Allergy",
    therapySlug: "respiratory-pulmonology",
    strength: "Per 5 ml: 10 mg / 5 mg / 2 mg",
    dosageForm: "Syrup",
    packSize: "60 ml / 100 ml Amber PET Bottle with Measuring Cup",
    indications: [
      "Dry / Tickling Non-Productive Cough",
      "Allergic Cough & Nasal Congestion",
      "Asthmatic Irritative Nocturnal Cough",
      "Pharyngitis, Laryngitis & Post-Nasal Drip",
      "Upper Respiratory Tract Allergic Infiltration",
    ],
    dosage: "Adults: 5-10 ml every 4 to 6 hours as needed (maximum 40 ml in 24 hours).",
    mechanism: "Centrally acting anti-tussive: Dextromethorphan suppresses the medullary cough center without respiratory depression or addiction. Phenylephrine constricts dilated nasal mucosal capillaries to clear sinus congestion. Chlorpheniramine blocks peripheral H1 histamine receptors to halt sneezing, rhinorrhea, and allergic airway irritation.",
    ingredientActions: [
      {
        ingredient: "Dextromethorphan HBr (10 mg)",
        role: "Centrally acting safe anti-tussive that elevates the threshold of the cough center.",
        chemicalData: {
          name: "Dextromethorphan",
          formula: "C18H25NO",
          molecularWeight: "271.4 g/mol",
          pubchemCid: 5360696,
          structureUrl: "/molecules/dextromethorphan.png",
        },
      },
      {
        ingredient: "Phenylephrine HCl (5 mg)",
        role: "A reliable nasal decongestant shrinking swollen respiratory mucosa.",
        chemicalData: {
          name: "Phenylephrine",
          formula: "C9H13NO2",
          molecularWeight: "167.21 g/mol",
          pubchemCid: 6041,
          structureUrl: "/molecules/phenylephrine.png",
        },
      },
      {
        ingredient: "Chlorpheniramine Maleate (2 mg)",
        role: "Antihistamine that relieves allergic sneezing, rhinorrhea, and throat tickling.",
        chemicalData: {
          name: "Chlorpheniramine",
          formula: "C16H19ClN2",
          molecularWeight: "274.79 g/mol",
          pubchemCid: 2725,
          structureUrl: "/molecules/chlorpheniramine.png",
        },
      },
    ],
    clinicalHighlights: [
      "Targeted anti-tussive solution for hacking, dry nocturnal cough",
      "Simultaneously relieves chest tickle and stuffed nasal airways",
      "Non-narcotic formulation with no risk of physical dependence",
    ],
    targetSpecialties: ["Pulmonologists & Chest Physicians", "General Physicians & Consulting Doctors"],
    warnings: [
      "May cause mild drowsiness; avoid operating heavy equipment or driving",
      "Avoid concurrent usage with MAO inhibitors or within 14 days of cessation",
    ],
    storage: "Store below 25°C. Protect from moisture and direct light.",
    isRx: true,
  },

  // 20. Allerkast
  {
    id: "icon-allerkast",
    slug: "allerkast",
    name: "Allerkast Tablets",
    image: "/products/Allerkast Tablets Medicine Pack.png",
    tagline: "Freedom to Breathe in Fresh Air — Freedom from Allergy",
    genericName: "Montelukast Sodium 10 mg + Levocetirizine HCl 5 mg",
    category: "Respiratory, Pulmonology & Allergy",
    therapySlug: "respiratory-pulmonology",
    strength: "10 mg / 5 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Seasonal & Perennial Allergic Rhinitis",
      "Chronic Idiopathic Urticaria (Hives & Wheals)",
      "Allergic Airway Hyper-responsiveness & Extrinsic Asthma",
      "Atopic Eczema & Allergic Dermatitis",
      "Sneezing, Nasal Pruritus & Watery Ocular Symptoms",
    ],
    dosage: "1 tablet once daily in the evening, taken with or without food.",
    mechanism: "Complete dual allergic blockade: Montelukast competitively blocks cysteinyl leukotriene (CysLT1) receptors in the bronchial and nasal mucosa, suppressing eosinophilic infiltration and edema. Levocetirizine is an enantiopure 3rd-generation H1 receptor antagonist that provides non-sedating, potent peripheral histamine blockade.",
    ingredientActions: [
      {
        ingredient: "Montelukast Sodium (10 mg)",
        role: "Leukotriene receptor antagonist preventing bronchoconstriction and airway edema.",
        chemicalData: {
          name: "Montelukast",
          formula: "C35H36ClNO3S",
          molecularWeight: "586.2 g/mol",
          pubchemCid: 5281040,
          structureUrl: "/molecules/montelukast.png",
        },
      },
      {
        ingredient: "Levocetirizine HCl (5 mg)",
        role: "Third-generation non-sedative antihistamine reducing nasal airflow resistance and itching.",
        chemicalData: {
          name: "Levocetirizine",
          formula: "C21H25ClN2O3",
          molecularWeight: "388.9 g/mol",
          pubchemCid: 154900,
          structureUrl: "/molecules/levocetirizine.png",
        },
      },
    ],
    clinicalHighlights: [
      "Convenient once-daily evening dosing provides uninterrupted 24-hour allergy control",
      "Controls both upper nasal/ocular symptoms and lower bronchial hypersensitivity",
      "Minimal sedation compared to older first-generation antihistamines",
    ],
    targetSpecialties: ["Pulmonologists & Chest Physicians", "Dermatologists & Cosmetologists", "General Physicians & Consulting Doctors"],
    warnings: [
      "Patients should be counseled regarding rare neuropsychiatric symptoms (mood changes)",
      "Not intended for the reversal of acute severe bronchospasm in status asthmaticus",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture and light.",
    isRx: true,
  },

  // 21. Nitobact / Nitobact SR
  {
    id: "icon-nitobact-sr",
    slug: "nitobact-sr",
    name: "Nitobact / Nitobact SR",
    image: "/products/Nitobact Nitrofurantoin Tablets Packaging.png",
    tagline: "When UTI Disturbs Life — Keeps Kidney Happy",
    genericName: "Nitrofurantoin 100 mg (Sustained Release)",
    category: "Anti-Infectives & Urology",
    therapySlug: "anti-infectives-urology",
    strength: "100 mg SR",
    dosageForm: "Tablets",
    packSize: "10 x 10 Sustained Release Tablets",
    indications: [
      "Acute Uncomplicated Urinary Tract Infections (Cystitis)",
      "Recurrent & Chronic Urinary Tract Infections",
      "Long-Term Prophylaxis against Recurrent UTIs",
      "Catheter-Associated Urinary Bacterial Colonization",
      "Pyelitis & Pyelonephritis Post-Acute Therapy",
    ],
    dosage: "Treatment: 1 tablet twice daily for 7 days with food or milk. Prophylaxis: 1 tablet at bedtime.",
    mechanism: "Bacterial intracellular enzymes reduce Nitrofurantoin to reactive electrophilic intermediates that attack ribosomal RNA, DNA, and metabolic enzymes. High therapeutic concentrations are concentrated selectively in the urinary bladder with minimal systemic serum levels, preventing systemic microbiota disruption and avoiding cross-resistance.",
    ingredientActions: [
      {
        ingredient: "Nitrofurantoin (100 mg SR)",
        role: "Urinary antiseptic with zero cross-resistance, active against ESBL-producing E. coli and VRE strains.",
        chemicalData: {
          name: "Nitrofurantoin",
          formula: "C8H6N4O5",
          molecularWeight: "238.16 g/mol",
          pubchemCid: 6604200,
          structureUrl: "/molecules/nitrofurantoin.png",
        },
      },
    ],
    clinicalHighlights: [
      "Featured on the World Health Organization's (WHO) List of Essential Medicines",
      "Remains the proven first-line empirical agent for acute uncomplicated cystitis",
      "High activity against multidrug-resistant gram-negative bacilli including ESBL and VRE strains",
    ],
    targetSpecialties: ["Urologists & Nephrologists", "General Physicians & Consulting Doctors"],
    warnings: [
      "Contraindicated in patients with severe renal impairment (eGFR < 45 ml/min) or anuria",
      "Contraindicated in pregnant women at term (38-42 weeks) due to risk of infant hemolytic anemia",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture.",
    isRx: true,
  },

  // 22. Ocon-OZ
  {
    id: "icon-ocon-oz",
    slug: "ocon-oz",
    name: "Ocon-OZ",
    image: "/products/OCON-OZ Tablets Packaging and Blister Pack.png",
    tagline: "The Powerful Weapon Against Severe Infections — Kill Infections Powerfully",
    genericName: "Ofloxacin 200 mg + Ornidazole 500 mg",
    category: "Anti-Infectives & Urology",
    therapySlug: "anti-infectives-urology",
    strength: "200 mg / 500 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Blister Pack",
    indications: [
      "Acute Bacterial & Amoebic Diarrhea / Dysentery",
      "Skin & Soft Tissue Infections (SSTI) & Diabetic Foot Ulcers",
      "Dental & Odontogenic Deep Tissue Infections",
      "Gynecological Infections & Pelvic Inflammatory Disease (PID)",
      "Pre- & Post-Surgical Antimicrobial Prophylaxis",
    ],
    dosage: "1 tablet twice daily after meals for 5 to 7 days, or as advised by the clinician.",
    mechanism: "Comprehensive broad-spectrum coverage: Ofloxacin inhibits bacterial DNA gyrase and topoisomerase IV, executing rapid bactericidal destruction of aerobic gram-negative and positive pathogens. Ornidazole is converted by microbial nitroreductase into reactive free nitro radicals that disrupt the helical DNA of anaerobic bacteria and protozoans.",
    ingredientActions: [
      {
        ingredient: "Ofloxacin (200 mg)",
        role: "Fluoroquinolone with intense bactericidal and deep tissue penetrative power.",
        chemicalData: {
          name: "Ofloxacin",
          formula: "C18H20FN3O4",
          molecularWeight: "361.37 g/mol",
          pubchemCid: 4583,
          structureUrl: "/molecules/ofloxacin.png",
        },
      },
      {
        ingredient: "Ornidazole (500 mg)",
        role: "Potent 5-nitroimidazole delivering antiprotozoal and anaerobic antimicrobial clearance.",
        chemicalData: {
          name: "Ornidazole",
          formula: "C7H10ClN3O3",
          molecularWeight: "219.62 g/mol",
          pubchemCid: 28061,
          structureUrl: "/molecules/ornidazole.png",
        },
      },
    ],
    clinicalHighlights: [
      "Complete antimicrobial coverage against aerobic bacteria, anaerobes, and protozoa",
      "Rapid resolution of acute infective gastroenteritis and mixed surgical infections",
      "High cure rate in complicated dental abscesses and diabetic foot ulcers",
    ],
    targetSpecialties: ["Gastroenterologists & GI Surgeons", "Dentists & Oral Maxillofacial Surgeons", "General Physicians & Consulting Doctors"],
    warnings: [
      "Avoid alcohol consumption during treatment and for at least 3 days after finishing Ornidazole",
      "Not recommended in patients with a history of tendon disorders or QT prolongation",
    ],
    storage: "Store in a dry place below 25°C. Protect from light.",
    isRx: true,
  },

  // 23. Dermicon-BN
  {
    id: "icon-dermicon-bn",
    slug: "dermicon-bn",
    name: "Dermicon-BN Cream",
    image: "/products/Dermicon-BN Cream Packaging Shot.png",
    tagline: "Decimates Fungal Infections — Acts in Three Ways",
    genericName: "Clotrimazole 1% + Beclomethasone Dipropionate 0.025% + Neomycin Sulphate 0.50%",
    category: "Dermatology",
    therapySlug: "dermatology",
    strength: "1% / 0.025% / 0.50% w/w",
    dosageForm: "Topical Cream",
    packSize: "10 g Laminated Derma Tube",
    indications: [
      "Mixed Fungal & Bacterial Skin Infections",
      "Infected Eczema & Seborrheic Dermatitis",
      "Contact Dermatitis & Severe Cutaneous Pruritus",
      "Tinea Corporis, Tinea Cruris (Jock Itch) & Tinea Pedis",
      "Intertrigo & Inflammatory Fungal Dermatomycoses",
    ],
    dosage: "Cleanse affected skin gently, then apply a thin layer 2 to 3 times daily.",
    mechanism: "Acts in Three Ways: Clotrimazole disrupts fungal cell membrane ergosterol biosynthesis, killing dermatophytes and yeasts. Beclomethasone suppresses inflammatory prostaglandins and cytokines, rapidly alleviating intense itching and erythema. Neomycin binds to bacterial 30S ribosomal subunits to eradicate secondary gram-positive and gram-negative invaders.",
    ingredientActions: [
      {
        ingredient: "Clotrimazole (1% w/w)",
        role: "Broad-spectrum antifungal decimating fungal ergosterol cell membranes.",
        chemicalData: {
          name: "Clotrimazole",
          formula: "C22H17ClN2",
          molecularWeight: "344.8 g/mol",
          pubchemCid: 2812,
          structureUrl: "/molecules/clotrimazole.png",
        },
      },
      {
        ingredient: "Beclomethasone Dipropionate (0.025% w/w)",
        role: "Topical corticosteroid delivering rapid relief from erythema, swelling, and severe itching.",
        chemicalData: {
          name: "Beclomethasone",
          formula: "C22H29ClO5",
          molecularWeight: "408.9 g/mol",
          pubchemCid: 21700,
          structureUrl: "/molecules/beclomethasone.png",
        },
      },
      {
        ingredient: "Neomycin Sulphate (0.50% w/w)",
        role: "Aminoglycoside antibiotic preventing and eliminating bacterial superinfections.",
        chemicalData: {
          name: "Neomycin B",
          formula: "C23H46N6O13",
          molecularWeight: "614.6 g/mol",
          pubchemCid: 8378,
          structureUrl: "/molecules/neomycin.png",
        },
      },
    ],
    clinicalHighlights: [
      "Acts in Three Ways: Antifungal + Anti-inflammatory + Antibacterial coverage",
      "Rapidly calms itching, redness, and scaling within the first 24–48 hours",
      "First-line empiric choice for mixed and complicated dermatological lesions",
    ],
    targetSpecialties: ["Dermatologists & Cosmetologists", "General Physicians & Consulting Doctors"],
    warnings: [
      "For external dermatological use only; avoid application to the eyes or facial mucous membranes",
      "Do not apply under occlusive dressings unless instructed by a dermatologist",
    ],
    storage: "Store below 25°C. Keep the tube tightly closed. Do not freeze.",
    isRx: true,
  },

  // 24. ZenCort
  {
    id: "icon-zencort",
    slug: "zencort",
    name: "ZenCort Tablets",
    image: "/products/Zencort Deflazacort Tablet Pack.png",
    tagline: "The Search for Steroid with Safety & Efficacy — Safety Corticosteroid",
    genericName: "Deflazacort 6 mg",
    category: "Immunology, Corticosteroids & Rheumatology",
    therapySlug: "immunology-rheumatology",
    strength: "6 mg",
    dosageForm: "Tablets",
    packSize: "10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Severe Bronchial Asthma & Refractory Airway Inflammation",
      "Rheumatoid Arthritis & Juvenile Chronic Arthritis",
      "Nephrotic Syndrome & Interstitial Nephritis",
      "Crohn's Disease & Ulcerative Colitis Flares",
      "Systemic Lupus Erythematosus (SLE) & Polymyalgia Rheumatica",
      "Pemphigus Vulgaris, Uveitis & Optic Neuritis",
    ],
    dosage: "Initial dose 6 to 90 mg/day depending on clinical severity, tapered under specialist care.",
    mechanism: "Third-generation oxazoline derivative of prednisolone. Deflazacort binds to glucocorticoid receptors to suppress lymphocyte proliferation, inhibit cytokine transcription, and modulate inflammatory cell migration. Its unique chemical structure confers high glucocorticoid anti-inflammatory potency while showing minimal affinity for mineralocorticoid receptors, resulting in significantly less bone mineral loss, reduced diabetogenic risk, and lower sodium/water retention.",
    ingredientActions: [
      {
        ingredient: "Deflazacort (6 mg)",
        role: "Third-generation oxazoline corticosteroid providing potent systemic anti-inflammatory suppression with improved bone safety.",
        chemicalData: {
          name: "Deflazacort",
          formula: "C25H31NO6",
          molecularWeight: "441.5 g/mol",
          pubchemCid: 189821,
          structureUrl: "/molecules/deflazacort.png",
        },
      },
    ],
    clinicalHighlights: [
      "Safety Corticosteroid: higher efficacy with markedly reduced bone mineral loss",
      "Lower diabetogenic risk and less cushingoid weight gain than Prednisolone",
      "Proven superior long-term tolerability in chronic juvenile and rheumatoid conditions",
    ],
    targetSpecialties: ["Orthopedic Surgeons & Rheumatologists", "Pulmonologists & Chest Physicians", "Dermatologists & Cosmetologists"],
    warnings: [
      "Do not discontinue abruptly; gradual dose tapering is required after chronic therapy",
      "Monitor blood pressure and serum glucose in patients with hypertension or diabetes",
    ],
    storage: "Store below 25°C in a dry place. Protect from moisture.",
    isRx: true,
  },

  // 25. Lycotox
  {
    id: "icon-lycotox",
    slug: "lycotox",
    name: "Lycotox Tablets",
    image: "/products/LYCOTOX Supplement Packaging Display.png",
    tagline: "A Multipurpose Antioxidant with Lycopene — Fulfills Void of Health for Evergreen Life",
    genericName: "Green Tea + Ginkgo Biloba + Lycopene 5000 mcg + Multivitamins + Zinc & Minerals",
    category: "Nutraceuticals & General Wellness",
    therapySlug: "nutraceuticals-wellness",
    strength: "Comprehensive Botanical & Mineral Formulation",
    dosageForm: "Tablets",
    packSize: "10 x 1 x 10 / 10 x 10 Tablets Alu-Alu Pack",
    indications: [
      "Oxidative Stress & Free Radical Cellular Damage",
      "Diabetic Vascular & Neuropathic Complications",
      "Hypertension & Elevated LDL Cholesterol Protection",
      "Age-Related Macular Degeneration & Retinal Stress",
      "Male & Female Sub-fertility (Sperm Quality & Motility)",
      "Pre-Eclampsia Prevention & General Debility/Convalescence",
    ],
    dosage: "1 tablet once daily after breakfast or lunch with water.",
    mechanism: "Master antioxidant and mitochondrial defense matrix: Lycopene is the most potent biological scavenger of singlet oxygen free radicals, preserving cellular DNA and vascular lipid membranes. Ginkgo Biloba and Green Tea extract boost microvascular capillary perfusion. Full-spectrum vitamins and trace minerals (Zinc, Selenium, Chromium, Manganese) replenish essential enzymatic cofactors.",
    ingredientActions: [
      {
        ingredient: "Lycopene (10% 5000 mcg)",
        role: "Master carotenoid antioxidant neutralizing free radicals and shielding endothelial lipids.",
        chemicalData: {
          name: "Lycopene",
          formula: "C40H56",
          molecularWeight: "536.9 g/mol",
          pubchemCid: 446925,
          structureUrl: "/molecules/lycopene.png",
        },
      },
      {
        ingredient: "Green Tea & Grape Seed Extract (25 mg / 10 mg)",
        role: "High-potency bioflavonoid polyphenols improving arterial elasticity and tissue perfusion.",
      },
      {
        ingredient: "Ginkgo Biloba (15 mg)",
        role: "Cerebrovascular and peripheral microcirculation enhancer protecting neurons.",
        chemicalData: {
          name: "Ginkgolide B",
          formula: "C20H24O10",
          molecularWeight: "424.4 g/mol",
          pubchemCid: 9909166,
          structureUrl: "/molecules/ginkgolide.png",
        },
      },
      {
        ingredient: "Multivitamins & Essential Minerals",
        role: "Full daily profile of Vitamin A, B-Complex, C, D3, E, Biotin, Zinc, Selenium, Chromium, and Molybdenum.",
      },
    ],
    clinicalHighlights: [
      "A Complete Nutritional Support for Blissful Health",
      "Proven improvement in insulin sensitivity and endothelial microcirculation",
      "Normalizes hormone levels and improves reproductive cell vitality",
    ],
    targetSpecialties: ["General Physicians & Consulting Doctors", "Dermatologists & Cosmetologists"],
    warnings: [
      "Nutritional dietary supplement; do not exceed the recommended daily dose",
      "Safe and suitable for long-term daily health maintenance",
    ],
    storage: "Store below 25°C in a dry place protected from sunlight.",
    isRx: false,
  },
];

export const doctorSpecialtiesData: DoctorSpecialty[] = [
  {
    id: "spec-neuro",
    slug: "neurologists-neuro-physicians",
    name: "Neurologists & Neuro-Physicians",
    portfolio: ["prenerve-caps", "prenerve-nt", "prenerve-forte", "prenerve-inj", "argicon-tab"],
    indications: "Diabetic peripheral neuropathy, post-herpetic neuralgia, entrapment neuropathy, radiculopathy, fibromyalgia, migraine prophylaxis.",
  },
  {
    id: "spec-ortho",
    slug: "orthopedic-surgeons-rheumatologists",
    name: "Orthopedic Surgeons & Rheumatologists",
    portfolio: ["apar-range", "ct-flam", "serek-dp", "prenerve-gel", "precal-softgel", "precal-d", "zencort"],
    indications: "Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute trauma, fractures, post-op edema, osteoporosis, lumbago, tendonitis.",
  },
  {
    id: "spec-obgyn",
    slug: "gynecologists-obstetricians",
    name: "Gynecologists & Obstetricians (OB-GYN)",
    portfolio: ["argicon-sachet", "fobiron", "precal-softgel", "precal-d", "serek-n", "ocon-oz"],
    indications: "IUGR, pre-eclampsia, PIH, pregnancy-induced anemia, menorrhagia, gestational calcium deficiency, pelvic inflammatory disease, hysterectomy pain.",
  },
  {
    id: "spec-gastro",
    slug: "gastroenterologists-gi-surgeons",
    name: "Gastroenterologists & GI Surgeons",
    portfolio: ["pandom-range", "rabicon-range", "ocon-oz", "zencort"],
    indications: "GERD, erosive esophagitis, functional dyspepsia, peptic ulcers, post-gastrectomy bile reflux, bacterial/amoebic diarrhea, inflammatory bowel disease flares.",
  },
  {
    id: "spec-pulmo",
    slug: "pulmonologists-chest-physicians",
    name: "Pulmonologists & Chest Physicians",
    portfolio: ["recoff-syrup", "recoff-dx-syrup", "allerkast", "zencort"],
    indications: "Productive wet cough, bronchitis, COPD, allergic dry cough, bronchial asthma, asthmatic cough, perennial allergic rhinitis.",
  },
  {
    id: "spec-gp",
    slug: "general-physicians-consulting-doctors",
    name: "General Physicians & Consulting Doctors",
    portfolio: ["apar-range", "serek-d", "pandom-range", "allerkast", "recoff-dx-syrup", "nitobact-sr", "ocon-oz", "fobiron", "lycotox"],
    indications: "Acute viral fever with body ache, acute upper respiratory symptoms, functional hyperacidity, uncomplicated UTIs, acute gastroenteritis, iron deficiency, general fatigue.",
  },
  {
    id: "spec-derma",
    slug: "dermatologists-cosmetologists",
    name: "Dermatologists & Cosmetologists",
    portfolio: ["dermicon-bn", "allerkast", "zencort", "lycotox"],
    indications: "Mixed fungal & bacterial dermatomycoses, contact dermatitis, eczema, psoriasis, chronic idiopathic urticaria, severe pruritus, skin oxidative stress.",
  },
  {
    id: "spec-dental",
    slug: "dentists-oral-surgeons",
    name: "Dentists & Oral Maxillofacial Surgeons",
    portfolio: ["apar-range", "serek-d", "serek-dp", "ct-flam", "ocon-oz"],
    indications: "Post-dental extraction pain & edema, odontogenic infections, maxillofacial trauma, periapical abscess, post-surgical dental inflammation.",
  },
  {
    id: "spec-uro",
    slug: "urologists-nephrologists",
    name: "Urologists & Nephrologists",
    portfolio: ["nitobact-sr", "argicon-tab", "zencort"],
    indications: "Acute and recurrent urinary tract infections (UTIs), catheter-associated bacteriuria, nephrotic syndrome, erectile dysfunction, peripheral neurovascular deficits.",
  },
];

export const healthConditionsData: HealthCondition[] = [
  {
    id: "cond-neuropathy",
    slug: "neuropathic-pain-management",
    title: "Diabetic Peripheral Neuropathy & Nerve Compression",
    category: "Neurology & Neuropathic Pain",
    overview: "Neuropathic pain arises from progressive metabolic or mechanical damage to peripheral nerve axons and myelin sheaths, leading to severe shooting burning pain, allodynia, and numbness.",
    symptoms: ["Burning sensation in feet & hands ('glove and stocking' distribution)", "Lancinating electric shock-like shooting pains", "Hyperalgesia and tactile allodynia (pain from light touch)", "Loss of vibratory perception and reflexes"],
    riskFactors: ["Longstanding poorly controlled blood glucose (HbA1c > 7.0%)", "Microvascular oxidative stress and advanced glycation end-products (AGE)", "Vitamin B12 and folate deficiency", "Alcohol consumption and neurotoxic agents"],
    management: [
      "Targeted calcium alpha-2-delta ligand modulation (Pregabalin)",
      "Descending monoaminergic pain pathway inhibition (Nortriptyline)",
      "High-dose active neurological cobalamin remyelination therapy (Methylcobalamin)",
      "Antioxidant and microvascular preservation with Benfotiamine & Alpha Lipoic Acid",
    ],
    relatedTherapySlug: "neurology-neuropathic-pain",
    relatedProductIds: ["icon-prenerve-caps", "icon-prenerve-nt", "icon-prenerve-forte", "icon-prenerve-inj"],
  },
  {
    id: "cond-osteoarthritis",
    slug: "osteoarthritis-joint-inflammation",
    title: "Osteoarthritis & Musculoskeletal Inflammation",
    category: "Orthopedics & Musculoskeletal Pain",
    overview: "A degenerative and inflammatory synovial joint disease characterized by progressive breakdown of articular cartilage, subchondral bone remodeling, synovial hypertrophy, and chronic debilitating pain.",
    symptoms: ["Joint pain exacerbated by weight-bearing and activity", "Morning joint stiffness lasting under 30 minutes", "Crepitus and reduced joint range of motion", "Peri-articular edema and bone tenderness"],
    riskFactors: ["Age, mechanical joint overload, and obesity", "Previous joint injury, fractures, or sports trauma", "Genetics and repetitive biomechanical stress"],
    management: [
      "Preferential COX-2 inhibition with gastric-protective agents (Aceclofenac)",
      "Enzymatic resolution of post-traumatic edema and hematomas (Trypsin, Bromelain, Serratiopeptidase)",
      "Site-specific transdermal anti-inflammatory gels avoiding systemic GI toxicity",
      "Physical therapy and non-weight bearing aerobic exercises",
    ],
    relatedTherapySlug: "orthopedics-musculoskeletal",
    relatedProductIds: ["icon-apar-range", "icon-ct-flam", "icon-serek-dp", "icon-prenerve-gel"],
  },
  {
    id: "cond-gerd",
    slug: "gerd-acid-reflux",
    title: "GERD & Acid-Peptic Mucosal Disorders",
    category: "Gastroenterology",
    overview: "Gastroesophageal Reflux Disease occurs when retrograde surge of acidic gastric juice breaches lower esophageal sphincter mechanisms, inducing epithelial erosion, pain, and esophageal dysmotility.",
    symptoms: ["Retrosternal heartburn and acidic regurgitation", "Epigastric fullness and functional dyspepsia", "Water brash and nocturnal dry coughing fits", "Odynophagia or post-prandial distress"],
    riskFactors: ["Delayed gastric emptying and impaired lower esophageal sphincter tone", "Hiatal hernia and obesity", "Late evening heavy meals and recumbent posture", "Excessive caffeine, spicy foods, or NSAID use"],
    management: [
      "High-potency irreversible proton pump inhibition (Pantoprazole / Rabeprazole)",
      "Prokinetic co-therapy stimulating full-gut forward motility (Domperidone / Levosulpiride)",
      "Dietary moderation and elevating head of bed during sleep",
    ],
    relatedTherapySlug: "gastroenterology",
    relatedProductIds: ["icon-pandom-range", "icon-rabicon-range"],
  },
  {
    id: "cond-uti",
    slug: "urinary-tract-infections",
    title: "Acute & Recurrent Urinary Tract Infections (Cystitis)",
    category: "Anti-Infectives & Urology",
    overview: "Bacterial colonization of the urothelium, predominantly by uropathogenic Escherichia coli, resulting in intense dysuria, frequency, bladder spasms, and recurrent cystitis episodes.",
    symptoms: ["Sharp burning pain during micturition (dysuria)", "Persistent urgency and high-frequency urination", "Suprapubic pelvic discomfort", "Turbid, foul-smelling, or microscopic hematuric urine"],
    riskFactors: ["Female anatomy, sexual activity, and post-menopausal hypoestrogenism", "Catheterization and urinary stasis", "Multidrug-resistant bacterial strains (ESBL / VRE)"],
    management: [
      "First-line urinary antiseptic therapy with zero cross-resistance (Nitrofurantoin SR)",
      "Adequate oral hydration to flush urinary tract",
      "Prophylactic bedtime dosing in recurrent female cystitis",
    ],
    relatedTherapySlug: "anti-infectives-urology",
    relatedProductIds: ["icon-nitobact-sr"],
  },
];

export const insightsData: InsightArticle[] = [
  {
    id: "art-01",
    slug: "advancing-aseptic-injectable-standards",
    title: "Advancing Sterile Integrity: Cleanroom Protocols in Indian Formulation Manufacturing",
    category: "Quality",
    date: "October 02, 2026",
    readTime: "5 min read",
    author: "Icon Drugs Quality Assurance Board",
    excerpt: "An inside analysis of closed-barrier isolator systems, continuous airborne particle monitoring, and microbial sterility testing across our newest formulation lines.",
    content: [
      "Modern pharmaceutical manufacturing leaves zero room for margin of error. As pharmacopeial standards evolve worldwide, the transition from conventional cleanroom spaces to automated barrier isolators has redefined sterile assurance levels (SAL).",
      "At Icon Drugs, our engineering architecture deploys laminar airflow HEPA filtration operating at 99.997% retention down to 0.3 microns. By eliminating direct human intervention in the primary filling zone, batch bioburden risks are systematically minimized.",
      "Furthermore, our in-line optical inspection machines verify fill-volume precision and particulate freedom at 400 units per minute, delivering absolute confidence to intensive care units and healthcare providers.",
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "art-02",
    slug: "navigating-polymorphism-bioavailability",
    title: "Overcoming Solubility Limits: Crystal Polymorphism and Bioavailability Optimization",
    category: "Innovation",
    date: "September 18, 2026",
    readTime: "7 min read",
    author: "Formulation R&D Team",
    excerpt: "How particle engineering, micronization, and polymorphic state stabilization turn poorly soluble actives into rapidly bioequivalent commercial products.",
    content: [
      "Over 40% of newly developed chemical entities fall under BCS Class II, characterized by low aqueous solubility but high membrane permeability. Ensuring repeatable therapeutic delivery requires cutting-edge physical stabilization.",
      "Our R&D laboratory utilizes X-ray powder diffraction (XRPD) and differential scanning calorimetry (DSC) to characterize crystal forms during scale-up.",
      "Through optimized solid dispersion carriers and fluidized-bed spray coating, Icon Drugs formulations achieve clinical absorption rates comparable to originator reference products, making vital therapies accessible to wider patient demographics.",
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "art-03",
    slug: "strengthening-hospital-supply-chains",
    title: "Resilient Healthcare Supply Chains: From Raw Active Sourcing to Hospital Ward Delivery",
    category: "Corporate",
    date: "August 29, 2026",
    readTime: "4 min read",
    author: "Supply Chain & Operations",
    excerpt: "Examining strategic backward integration, cold-chain GPS tracking, and buffer warehousing strategies that kept essential medications uninterrupted.",
    content: [
      "Healthcare institutions rely on predictable, uninterrupted access to critical care medicines. Disruptions in global API logistics underscore the necessity of strategic manufacturing independence.",
      "Icon Drugs operates a dual-source qualification framework for all active pharmaceutical ingredients (APIs) and critical excipients, supported by multi-regional warehousing hubs.",
      "Every consignee dispatch incorporates continuous temperature data logging to guarantee that cold-chain sensitive therapeutics arrive with pharmacological integrity intact.",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const qualityPillars: QualityPillar[] = [
  {
    title: "WHO-GMP Validated Facilities",
    subtitle: "Sterile & Solid Dosage Lines",
    description: "Fully compliant HVAC zoning with pressure cascades, automated CIP/SIP systems, and HEPA Class A/B cleanroom integrity.",
    standard: "WHO Technical Report Series",
    icon: "ShieldCheck",
  },
  {
    title: "Chromatographic Assay Testing",
    subtitle: "Precision Purity Guarantees",
    description: "Every production batch undergoes high-performance liquid chromatography (HPLC) and GC-MS testing to confirm strict impurity limits.",
    standard: "Pharmacopeial monographs (IP/BP/USP)",
    icon: "FlaskConical",
  },
  {
    title: "Stability-Controlled Warehousing",
    subtitle: "Zone IVb Climate Compatibility",
    description: "Real-time humidity and thermal logging chambers subjecting samples to accelerated 40°C/75% RH stress to substantiate shelf-life claims.",
    standard: "ICH Q1A(R2) Guidelines",
    icon: "ThermometerSnowflake",
  },
  {
    title: "Complete Batch Traceability",
    subtitle: "Barcoded Material Integrity",
    description: "Digitized track-and-trace serialization from raw vendor dispensing to secondary packaging, ensuring anti-counterfeiting transparency.",
    standard: "2D GS1 DataMatrix Compliant",
    icon: "QrCode",
  },
];

export const companyMilestones: Milestone[] = [
  {
    year: "2002",
    title: "Inception & First Facility",
    description: "Icon Drugs was established with a singular vision: manufacturing high-quality, accessible pharmaceuticals with unwavering integrity.",
    tag: "Foundation",
  },
  {
    year: "2008",
    title: "Solid Dosage Expansion",
    description: "Commissioned dedicated automated tablet and capsule production lines, crossing our first 50 registered therapeutic formulations.",
    tag: "Scale",
  },
  {
    year: "2015",
    title: "WHO-GMP Certification",
    description: "Achieved international WHO-GMP accreditation and introduced specialized neurology, orthopedics, and gastroenterology divisions.",
    tag: "Accreditation",
  },
  {
    year: "2020",
    title: "R&D Analytical Center",
    description: "Inaugurated dedicated formulation research laboratories equipped with HPLC, UV-Vis spectrophotometry, and stability chambers.",
    tag: "Innovation",
  },
  {
    year: "Today",
    title: "25+ Years of Care",
    description: "A trusted medical partner to hospitals, distributors, and clinicians with 25 distinct core formulations across 10 therapeutic areas.",
    tag: "Global Presence",
  },
];

// ---------------------------------------------------------------------------
// Commercial & Cross-Sell Utilities
// ---------------------------------------------------------------------------

const COMPLEMENTARY_MAP: Record<string, string[]> = {
  "prenerve-caps": ["prenerve-nt", "prenerve-forte", "calicon-plus"],
  "prenerve-nt": ["prenerve-forte", "iclofen-sp", "calicon-plus"],
  "prenerve-forte": ["prenerve-nt", "calicon-plus", "d3-icon-60k"],
  "iclofen-sp": ["p-icon-dsr", "iclofen-mr", "mobirise-4"],
  "iclofen-mr": ["iclofen-sp", "p-icon-40", "dicrowin-gm"],
  "iclofen-th": ["iclofen-sp", "rab-icon-dsr", "mobirise-4"],
  "mobirise-4": ["iclofen-th", "iclofen-sp", "dicrowin-gm"],
  "calicon-plus": ["d3-icon-60k", "prenerve-forte", "dicrowin-gm"],
  "d3-icon-60k": ["calicon-plus", "fe-icon", "prenerve-caps"],
  "dicrowin-gm": ["iclofen-sp", "calicon-plus", "mobirise-4"],
  "p-icon-40": ["p-icon-dsr", "meg-icon-mps", "iclofen-sp"],
  "p-icon-dsr": ["p-icon-40", "rab-icon-dsr", "meg-icon-o"],
  "rab-icon-dsr": ["rab-icon-ls", "p-icon-dsr", "meg-icon-mps"],
  "rab-icon-ls": ["rab-icon-dsr", "meg-icon-o", "p-icon-40"],
  "meg-icon-mps": ["meg-icon-o", "p-icon-dsr", "rab-icon-dsr"],
  "meg-icon-o": ["meg-icon-mps", "p-icon-40", "rab-icon-ls"],
  "ceficon-o": ["ceficon-of", "clav-icon-625", "z-icon-500"],
  "ceficon-of": ["ceficon-o", "clav-icon-625", "icon-p-650"],
  "mikacin-500": ["iconzone-sb", "clav-icon-625", "ceficon-of"],
  "iconzone-sb": ["mikacin-500", "p-icon-40", "ceficon-o"],
  "clav-icon-625": ["lev-icon-m", "icon-kof-ls", "c-kof"],
  "z-icon-500": ["lev-icon-m", "c-kof", "icon-p-650"],
  "lev-icon-m": ["lev-icon-m-kid", "icon-kof-ls", "c-kof"],
  "lev-icon-m-kid": ["lev-icon-m", "c-kof", "icon-p-650"],
  "icon-kof-ls": ["c-kof", "lev-icon-m", "clav-icon-625"],
  "c-kof": ["icon-p-650", "lev-icon-m", "icon-kof-ls"],
  "icon-p-650": ["c-kof", "iclofen-sp", "ceficon-o"],
  "fe-icon": ["calicon-plus", "d3-icon-60k", "prenerve-forte"],
  "n-icon": ["mikacin-500", "iconzone-sb", "fe-icon"],
};

export function getProductCommercialData(product: Product): CommercialData {
  if (product.commercialData) {
    return product.commercialData;
  }

  const form = product.dosageForm.toLowerCase();

  if (form.includes("injection")) {
    return {
      moqFranchise: "1 Master Shipper (200 Vials)",
      moqThirdParty: "5,000 Vials (Commercial Batch)",
      masterShipperPacking: "200 Vials / Foam-Padded Shipper",
      hsnCode: "3004.20",
      gstRate: "12%",
      cartonDimensions: "40 x 30 x 25 cm",
      grossWeight: "7.2 kg",
    };
  }

  if (form.includes("syrup") || form.includes("suspension")) {
    return {
      moqFranchise: "1 Master Shipper (60 Bottles)",
      moqThirdParty: "3,000 Bottles (Commercial Batch)",
      masterShipperPacking: "60 PET / Glass Bottles Carton with Partition",
      hsnCode: "3004.90",
      gstRate: "12%",
      cartonDimensions: "48 x 38 x 26 cm",
      grossWeight: "14.5 kg",
    };
  }

  if (form.includes("sachet")) {
    return {
      moqFranchise: "1 Master Shipper (500 Sachets)",
      moqThirdParty: "10,000 Sachets (Custom Batch)",
      masterShipperPacking: "50 Inner Boxes (500 Sachets) / Shipper",
      hsnCode: "2106.90",
      gstRate: "18%",
      cartonDimensions: "38 x 28 x 22 cm",
      grossWeight: "5.8 kg",
    };
  }

  // Tablets / Capsules standard solid oral dosage
  return {
    moqFranchise: "1 Master Shipper (100 Boxes)",
    moqThirdParty: "5,000 Boxes (Contract Mfg)",
    masterShipperPacking: "100 Boxes / Heavy-Duty 5-Ply Corrugated Shipper",
    hsnCode: "3004.90",
    gstRate: "12%",
    cartonDimensions: "45 x 35 x 30 cm",
    grossWeight: "8.6 kg",
  };
}

export function getComplementaryProducts(product: Product): Product[] {
  const customSlugs = product.complementarySlugs || COMPLEMENTARY_MAP[product.slug];
  if (customSlugs && customSlugs.length > 0) {
    const list = productsData.filter((p) => customSlugs.includes(p.slug));
    if (list.length > 0) return list;
  }

  // Fallback: Products from the same or related therapy area
  return productsData
    .filter((p) => p.slug !== product.slug && p.therapySlug === product.therapySlug)
    .slice(0, 3);
}

// ============================================================================
// HOMEPAGE EXPANSION: CERTIFICATIONS, TESTIMONIALS, FRANCHISE & FAQ DATA
// ============================================================================

export interface CertificationItem {
  id: string;
  category: string;
  title: string;
  descriptor: string;
  issuer: string;
  code: string;
  validity: string;
  description: string;
  badge: string;
  iconName: string;
  logoSrc?: string;
  logoAlt?: string;
  isTypographicBadge?: boolean;
  categoryTag?: string;
  governingBody?: string;
  scopeNotes?: string;
  verificationStatus?: string;
  verificationNote?: string;
  auditCycle?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "who-gmp",
    category: "Manufacturing Standards",
    title: "WHO-GMP",
    descriptor: "Good Manufacturing Practices",
    issuer: "World Health Organization Guidelines (Schedule M)",
    code: "GMP/CERT/2024-884",
    validity: "Active & Monitored",
    description: "Formulation manufacturing plants adhere rigorously to Revised Schedule M directives and international WHO-GMP good manufacturing principles, ensuring validated HVAC cleanroom classifications, purified water systems, and contamination controls.",
    badge: "Manufacturing Standards",
    iconName: "ShieldCheck",
    logoSrc: "/accreditations/who-logo.svg",
    logoAlt: "World Health Organization Official Emblem",
    isTypographicBadge: false,
    categoryTag: "MANUFACTURING STANDARDS",
    governingBody: "State Drug Controller & CDSCO Directorate",
    scopeNotes: "Oral solid dosage (tablets, capsules), oral liquids, and dry powder suspension manufacturing suites.",
    verificationStatus: "Statutory Schedule M Compliance",
    verificationNote: "Certified by statutory drug licensing authorities conforming to WHO Technical Report Series Good Manufacturing Practice directives.",
    auditCycle: "Annual Regulatory Inspection & Batch Revalidation",
  },
  {
    id: "iso-9001",
    category: "Quality Management",
    title: "ISO 9001:2015",
    descriptor: "Quality Management System",
    issuer: "Quality Management Systems (QMS)",
    code: "ISO-QMS-9001:2015-IND",
    validity: "Audited & Validated",
    description: "Systemic quality assurance protocols covering vendor qualification, raw material identity verification, in-process analytical testing, packaging barrier integrity, and end-to-end batch traceability.",
    badge: "Quality Management",
    iconName: "Award",
    logoSrc: "/accreditations/iso-9001.svg",
    logoAlt: "ISO 9001:2015 Quality Management Standard Mark",
    isTypographicBadge: false,
    categoryTag: "QUALITY MANAGEMENT",
    governingBody: "Accredited Certification Registrar (ISO 9001:2015)",
    scopeNotes: "API procurement, analytical laboratory operations, warehousing controls, and batch distribution logistics.",
    verificationStatus: "Standardized QMS Certification",
    verificationNote: "Certified compliance with international ISO 9001:2015 Quality Management System standards by an accredited conformity assessment body.",
    auditCycle: "Triennial Recertification with Annual Surveillance Audits",
  },
  {
    id: "glp-labs",
    category: "Laboratory Quality",
    title: "GLP Laboratories",
    descriptor: "Analytical Testing & Quality Control",
    issuer: "Good Laboratory Practice Standards",
    code: "GLP/LAB/QAC-412",
    validity: "Internal Calibrated Protocol",
    description: "Quality control and analytical laboratories operate under calibrated Good Laboratory Practice guidelines, utilizing HPLC, UV-Vis spectrophotometry, and photostability chambers for comprehensive pharmacopeial monograph testing.",
    badge: "Laboratory Quality",
    iconName: "CheckCircle",
    logoSrc: "",
    logoAlt: "Good Laboratory Practice Laboratory Quality",
    isTypographicBadge: true,
    categoryTag: "LABORATORY QUALITY",
    governingBody: "Internal Quality Assurance Directorate (Pharmacopeial Protocols)",
    scopeNotes: "Chromatographic assaying, dissolution rate kinetics, microbial limits testing (MLT), and accelerated stability studies.",
    verificationStatus: "Internal QA Protocol (Asset Verification Pending)",
    verificationNote: "Reflects internal laboratory compliance with pharmacopeial GLP protocols. Independent third-party accreditation asset currently awaiting documentation verification.",
    auditCycle: "Quarterly Equipment Calibration & Analytical Method Validation",
  },
  {
    id: "dcgi-approved",
    category: "Drug Regulation",
    title: "CDSCO / DCGI",
    descriptor: "Applicable Regulatory Approvals",
    issuer: "Central Drugs Standard Control Organisation (CDSCO)",
    code: "CDSCO-DCGI-APPROVED",
    validity: "Statutory Approval",
    description: "All therapeutic formulations conform rigorously to monographs in the Indian Pharmacopoeia (IP) and statutory approvals issued under the Drugs and Cosmetics Act by the CDSCO Directorate.",
    badge: "Drug Regulation",
    iconName: "FileCheck",
    logoSrc: "/accreditations/cdsco-logo.png",
    logoAlt: "Central Drugs Standard Control Organisation Official Emblem",
    isTypographicBadge: false,
    categoryTag: "DRUG REGULATION",
    governingBody: "Directorate General of Health Services, Ministry of Health and Family Welfare",
    scopeNotes: "Prescription fixed-dose combinations, active pharmaceutical ingredients, labeling declarations, and licensed monograph specifications.",
    verificationStatus: "National Regulatory Clearance",
    verificationNote: "Official emblem of the Central Drugs Standard Control Organisation (CDSCO) under the Ministry of Health and Family Welfare, Government of India.",
    auditCycle: "Monograph Adherence & Product License Renewal per Drug Rules",
  },
  {
    id: "fssai-nutra",
    category: "Food Safety",
    title: "FSSAI",
    descriptor: "Applicable Food & Nutraceutical Licensing",
    issuer: "Food Safety and Standards Authority of India",
    code: "FSSAI-LIC-100220310",
    validity: "Compliant License",
    description: "Specialised nutraceuticals, antioxidant syrups, and dietary wellness supplements produced in compliance with the Food Safety and Standards (Health Supplements and Nutraceuticals) Regulations.",
    badge: "Food Safety",
    iconName: "Sparkles",
    logoSrc: "/accreditations/fssai-logo.png",
    logoAlt: "Food Safety and Standards Authority of India Official Logo",
    isTypographicBadge: false,
    categoryTag: "FOOD SAFETY",
    governingBody: "Food Safety and Standards Authority of India, Government of India",
    scopeNotes: "Specific to health supplements, antioxidant botanical formulations, vitamins, and minerals. Does not apply to prescription pharmaceutical formulations.",
    verificationStatus: "Statutory Dietary Formulation License",
    verificationNote: "Authentic registered logo of the Food Safety and Standards Authority of India (FSSAI). Scope is strictly limited to authorized nutraceutical portfolio products.",
    auditCycle: "Annual Statutory License Renewal & Food Safety Audits",
  },
];

export interface FranchiseBenefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export const franchiseBenefitsData: FranchiseBenefit[] = [
  {
    id: "monopoly",
    title: "100% Exclusive District Monopoly",
    description: "Contractually guaranteed territory exclusivity so your marketing investments and doctor relationships remain exclusively yours without internal price competition.",
    metric: "1 District",
    metricLabel: "1 Exclusive Partner",
    iconName: "ShieldAlert",
  },
  {
    id: "promotional-kit",
    title: "Full Doctor Promotional Arsenal",
    description: "Physician visual aids, medical representative leather bags, sample catch covers, glossy reminder cards, product glossaries, and branded chemist prescription pads.",
    metric: "Free Kit",
    metricLabel: "With Qualifying Orders",
    iconName: "Briefcase",
  },
  {
    id: "margins",
    title: "High Margin & Transparent Net Rates",
    description: "Direct manufacturer net rates ensure distributors earn superior return on capital, enabling aggressive incentives for retail stockists and prescribing physicians.",
    metric: "High ROI",
    metricLabel: "Transparent Wholesale Net",
    iconName: "TrendingUp",
  },
  {
    id: "dispatch",
    title: "24–48 Hour Express Dispatch",
    description: "Central warehouse dispatch with barcode verification ensures zero stockout downtime. We partner with express surface and air pharma logistics across India.",
    metric: "24–48h",
    metricLabel: "Dispatch Turnaround",
    iconName: "Truck",
  },
];

export interface TestimonialItem {
  id: string;
  type: "franchise" | "doctor";
  quote: string;
  author: string;
  role: string;
  location: string;
  metric: string;
  metricLabel: string;
  tag: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "dist-1",
    type: "franchise",
    quote: "Partnering with Icon Drugs 4 years ago for our district was the best decision for our pharma agency. The packaging quality—especially the Alu-Alu strips and clean blistering—stands out immediately to doctors. Their Prenerve range is now a brand name in our territory.",
    author: "Rajeshwar Sharma",
    role: "Managing Director, Shivam Healthcare Agencies",
    location: "Varanasi & Purvanchal District, UP",
    metric: "4+ Years",
    metricLabel: "Franchise Partnership",
    tag: "PCD Franchise Partner",
  },
  {
    id: "doc-1",
    type: "doctor",
    quote: "In clinical practice, bioavailability and therapeutic consistency are paramount. I have routinely prescribed Icon Drugs' Prenerve-NT and Argicon formulations for peripheral neuropathy and maternal care. The patient compliance and clinical outcomes have been exemplary.",
    author: "Dr. Alok Nath Singhal",
    role: "Senior Consultant Neuro-Physician, MBBS, MD (Medicine)",
    location: "Apex Neuro Care Center, Lucknow",
    metric: "500+ Patients",
    metricLabel: "Prescribed with Consistent Efficacy",
    tag: "Consultant Physician",
  },
  {
    id: "dist-2",
    type: "franchise",
    quote: "Icon Drugs honors its district monopoly commitment 100%. Never once have we faced distributor undercutting. When we place an order, dispatch happens within 48 hours and promotional visual aids are always included.",
    author: "Harpreet Singh Sodhi",
    role: "Proprietor, Sodhi Life Sciences",
    location: "Ludhiana & Jalandhar, Punjab",
    metric: "₹45L+ Annual",
    metricLabel: "Territory Turnover",
    tag: "PCD Franchise Partner",
  },
  {
    id: "doc-2",
    type: "doctor",
    quote: "The APAR-DSR and APAR-40 formulations offer swift acid neutralization with reliable enteric release. Our gastroenterology outpatients report rapid symptom relief with zero gastric irritability.",
    author: "Dr. Sneha Parikh",
    role: "MD (Gastroenterology), Clinical Associate Professor",
    location: "Western Regional Medical Center, Ahmedabad",
    metric: "High Bioequivalence",
    metricLabel: "Documented In-Vitro Dissolution",
    tag: "Gastroenterologist",
  },
];

export interface HomeFaqItem {
  id: string;
  question: string;
  answer: string;
  category: "PCD Franchise" | "Manufacturing" | "Orders & Dispatch";
}

export const homeFaqData: HomeFaqItem[] = [
  {
    id: "faq-1",
    category: "PCD Franchise",
    question: "What is the minimum investment required to start an Icon Drugs PCD franchise?",
    answer: "Our PCD franchise model is designed to be accessible and scalable. You can begin with a modest starting investment (typically starting from ₹25,000 to ₹50,000 per district order) without any upfront non-refundable franchise deposit. We do not impose rigid monthly sales targets, allowing you to build sustainable distribution at your own pace.",
  },
  {
    id: "faq-2",
    category: "PCD Franchise",
    question: "Do you provide exclusive district monopoly rights?",
    answer: "Yes, absolutely. We grant contractually protected, district-wise exclusive distribution and marketing monopoly. Once a territory is allotted to you for our product line, no other distributor or stockist in that defined district will be supplied that same product portfolio, safeguarding your marketing efforts and price integrity.",
  },
  {
    id: "faq-3",
    category: "PCD Franchise",
    question: "What promotional and marketing support is supplied with the consignment?",
    answer: "Every qualifying franchise partner receives a comprehensive medical representative (MR) kit, including multi-page spiral visual aids, doctor product glossaries, catch covers with sample blisters, reminder sticky pads, chemist order books, visiting cards, and digital PDF marketing collaterals for physician outreach.",
  },
  {
    id: "faq-4",
    category: "Manufacturing",
    question: "Do you undertake third-party contract manufacturing for private brands?",
    answer: "Yes. In addition to our PCD franchise business, Icon Drugs offers third-party and loan-license manufacturing across tablets, capsules, dry syrups, and liquid formulations. We offer batch flexibility, assist with artwork/packaging design, and provide complete certificate of analysis (COA) documents adhering to WHO-GMP standards.",
  },
  {
    id: "faq-5",
    category: "Orders & Dispatch",
    question: "What is the order dispatch turnaround time and courier coverage?",
    answer: "All standard orders are processed and dispatched within 24 to 48 hours from our central warehouse. We partner with reliable pharma surface and air cargo operators (including cold-chain options where indicated) with end-to-end tracking to tier-1 cities, district headquarters, and interior logistics hubs across India.",
  },
];

