export interface CompanyInfo {
  name: string;
  tagline: string;
  heritageYears: string;
  foundedYear: string;
  facilitiesCount: string;
  productsCount: string;
  marketsCount: string;
  certifications: string[];
  headquarters: string;
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

export interface Product {
  id: string;
  slug: string;
  name: string;
  genericName: string;
  category: string;
  therapySlug: string;
  strength: string;
  dosageForm: string;
  packSize: string;
  indications: string[];
  dosage: string;
  mechanism: string;
  warnings: string[];
  storage: string;
  isRx: boolean;
  image: string;
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
  tagline: "Healthcare, built on experience.",
  heritageYears: "25+",
  foundedYear: "2002",
  facilitiesCount: "04+",
  productsCount: "150+",
  marketsCount: "25+",
  certifications: ["WHO-GMP Compliant", "ISO 9001:2015", "GLP Certified Labs"],
  headquarters: "Industrial Pharma Belt, State-of-the-Art Complex",
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
    bgImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
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
    bgImage: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=85",
    alt: "Quality control research scientist analyzing chemical compounds",
  },
  {
    id: 3,
    accentLabel: "03 / THERAPEUTIC FOCUS",
    tagline: "SPECIALIZED MEDICAL PORTFOLIOS",
    headline: "Focused on better healthcare.",
    subtext: "Engineered formulations spanning critical care, cardiology, neurology, and everyday restorative medicine addressing urgent clinical gaps.",
    ctaText: "Our Therapeutic Focus",
    ctaLink: "/therapeutic-areas",
    bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=85",
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
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85",
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
    value: "150+",
    label: "Active Formulations",
    description: "Therapeutic solutions across multi-specialty clinical domains",
  },
  {
    value: "99.8%",
    label: "Batch Purity Standard",
    description: "Rigorous quality assays conforming to WHO-GMP standards",
  },
  {
    value: "25+",
    label: "Global Markets",
    description: "Serving healthcare providers, hospital networks and distributors",
  },
];

export const therapyAreasData: TherapyArea[] = [
  {
    id: "cardio",
    slug: "cardiovascular",
    name: "Cardiovascular Care",
    iconName: "HeartPulse",
    shortDesc: "Hypertension, lipid control, and cardiac therapeutics engineered for vascular stability.",
    fullDesc: "Icon Drugs provides high-precision cardiovascular formulations targeting essential hypertension, ischemic heart conditions, and dyslipidemia to minimize vascular morbidity.",
    heroImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80",
    stats: "24 Formulations Available",
    conditions: ["Hypertension", "Coronary Artery Disease", "Hyperlipidemia"],
    productCount: 24,
  },
  {
    id: "neuro",
    slug: "neurology-cns",
    name: "Neurology & CNS",
    iconName: "Brain",
    shortDesc: "Neuro-active agents, neuropathic pain management, and psychiatric wellness formulations.",
    fullDesc: "Advanced therapeutic interventions designed to cross blood-brain barriers effectively, modulating neurotransmission for neuropathic stabilization.",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    stats: "18 Formulations Available",
    conditions: ["Neuropathic Pain", "Generalized Anxiety", "Migraine Prophylaxis"],
    productCount: 18,
  },
  {
    id: "gastro",
    slug: "gastroenterology",
    name: "Gastroenterology",
    iconName: "Stomach",
    shortDesc: "Proton pump inhibitors, prokinetics, and GI mucosal protective agents.",
    fullDesc: "Comprehensive gastrointestinal therapeutics targeting acid-peptic disorders, GERD, and mucosal restoration with optimized bioavailability.",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    stats: "28 Formulations Available",
    conditions: ["GERD", "Peptic Ulcer Disease", "Functional Dyspepsia"],
    productCount: 28,
  },
  {
    id: "resp",
    slug: "respiratory-pulmonology",
    name: "Respiratory & Pulmonology",
    iconName: "Lungs",
    shortDesc: "Bronchodilators, inhaled anti-inflammatory agents, and cough therapies.",
    fullDesc: "Targeted pulmonary medicine engineered to optimize airway dynamics, reduce bronchial hyper-reactivity, and alleviate restrictive pulmonary symptoms.",
    heroImage: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80",
    stats: "16 Formulations Available",
    conditions: ["Asthma", "COPD", "Allergic Rhinitis"],
    productCount: 16,
  },
  {
    id: "anti-infectives",
    slug: "anti-infectives-antibiotics",
    name: "Anti-Infectives & Antimicrobials",
    iconName: "ShieldAlert",
    shortDesc: "Broad-spectrum antimicrobials, cephalosporins, and macrolides combating resistant pathogens.",
    fullDesc: "Stringently assayed anti-infective formulations calibrated for reliable bacterial clearance and minimized resistance pathways in inpatient and outpatient settings.",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    stats: "32 Formulations Available",
    conditions: ["Lower Respiratory Infections", "SSTI", "Urinary Tract Infections"],
    productCount: 32,
  },
  {
    id: "endocrinology",
    slug: "endocrinology-metabolism",
    name: "Endocrinology & Diabetology",
    iconName: "Activity",
    shortDesc: "Glycemic management, insulin sensitizers, and metabolic regulators.",
    fullDesc: "Therapies formulated to assist clinicians in achieving target HbA1c levels, preserving beta-cell function, and mitigating secondary metabolic sequelae.",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    stats: "22 Formulations Available",
    conditions: ["Type 2 Diabetes Mellitus", "Metabolic Syndrome", "Thyroid Imbalances"],
    productCount: 22,
  },
];

export const productsData: Product[] = [
  {
    id: "icon-card-01",
    slug: "icon-atorvastatin-tab",
    name: "Icon-Atorva 20",
    genericName: "Atorvastatin Calcium Trihydrate",
    category: "Cardiovascular Care",
    therapySlug: "cardiovascular",
    strength: "20 mg",
    dosageForm: "Film-Coated Tablet",
    packSize: "10 x 10 Blister Pack",
    indications: ["Primary Hypercholesterolemia", "Prevention of Cardiovascular Events", "Atherosclerotic Vascular Disease"],
    dosage: "Initial therapy 10-20 mg once daily, max 80 mg daily as directed by physician.",
    mechanism: "HMG-CoA reductase inhibitor, upregulates hepatic LDL receptors to enhance catabolism of circulating LDL particles.",
    warnings: ["Contraindicated in active liver disease", "Monitor liver enzymes periodically", "Discontinue if unexplained myopathy occurs"],
    storage: "Store below 25°C in a dry place. Protect from moisture and direct light.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-card-02",
    slug: "icon-telmisartan-40",
    name: "Icon-Telmi 40",
    genericName: "Telmisartan",
    category: "Cardiovascular Care",
    therapySlug: "cardiovascular",
    strength: "40 mg",
    dosageForm: "Uncoated Tablet",
    packSize: "10 x 10 Alu-Alu Pack",
    indications: ["Essential Hypertension", "Cardiovascular Risk Reduction in Atherothrombotic Disease"],
    dosage: "40 mg once daily. Some patients may benefit from 20 mg or titrated to 80 mg.",
    mechanism: "Selective Angiotensin II receptor blocker (AT1 subtype) with high lipophilicity and sustained 24-hour trough-to-peak control.",
    warnings: ["Fetal toxicity in pregnancy", "Monitor serum potassium in renal impairment"],
    storage: "Store in original blister pack away from high humidity.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-gastro-01",
    slug: "icon-pantop-dsr",
    name: "Icon-Panto DSR",
    genericName: "Pantoprazole Sodium 40mg + Domperidone SR 30mg",
    category: "Gastroenterology",
    therapySlug: "gastroenterology",
    strength: "40 mg / 30 mg",
    dosageForm: "Sustained-Release Capsule",
    packSize: "10 x 10 Alu-Alu Strip",
    indications: ["Gastroesophageal Reflux Disease (GERD)", "Erosive Esophagitis", "Reflux-associated Nausea"],
    dosage: "One capsule daily taken 30-60 minutes before breakfast.",
    mechanism: "Pantoprazole irreversibly blocks H+/K+ ATPase enzyme in parietal cells; Domperidone accelerates gastric emptying through D2 antagonism.",
    warnings: ["Long-term PPI use may reduce magnesium levels", "Not recommended in patients with severe cardiac arrhythmias"],
    storage: "Keep in a cool dry place below 30°C.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-resp-01",
    slug: "icon-mont-lc",
    name: "Icon-Montair LC",
    genericName: "Montelukast Sodium 10mg + Levocetirizine HCl 5mg",
    category: "Respiratory & Pulmonology",
    therapySlug: "respiratory-pulmonology",
    strength: "10 mg / 5 mg",
    dosageForm: "Film-Coated Tablet",
    packSize: "10 x 10 Blister Pack",
    indications: ["Allergic Rhinitis with Comorbid Asthma", "Seasonal Pollen Sensitivities", "Chronic Idiopathic Urticaria"],
    dosage: "1 tablet once daily in the evening.",
    mechanism: "Dual action leukotriene receptor antagonism (CysLT1) paired with selective peripheral H1 histamine blockade.",
    warnings: ["May cause mild somnolence in sensitive patients", "Neuropsychiatric monitoring recommended"],
    storage: "Protect from light and heat. Store under 25°C.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-anti-01",
    slug: "icon-cef-200",
    name: "Icon-Cefurox 500",
    genericName: "Cefuroxime Axetil USP",
    category: "Anti-Infectives & Antimicrobials",
    therapySlug: "anti-infectives-antibiotics",
    strength: "500 mg",
    dosageForm: "Film-Coated Tablet",
    packSize: "10 x 1 x 10 Alu-Alu Pack",
    indications: ["Acute Bacterial Exacerbations of Bronchitis", "Community-Acquired Pharyngitis", "Uncomplicated Pyelonephritis"],
    dosage: "250-500 mg every 12 hours after meals for 7-10 days depending on clinical severity.",
    mechanism: "Second-generation cephalosporin inhibiting peptidoglycan bacterial cell wall cross-linking.",
    warnings: ["Hypersensitivity to cephalosporins or beta-lactams", "Complete full prescribed course to prevent microbial resistance"],
    storage: "Store dry, away from direct sunlight.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "icon-neuro-01",
    slug: "icon-pregab-nt",
    name: "Icon-Prega NT",
    genericName: "Pregabalin 75mg + Nortriptyline HCl 10mg",
    category: "Neurology & CNS",
    therapySlug: "neurology-cns",
    strength: "75 mg / 10 mg",
    dosageForm: "Film-Coated Tablet",
    packSize: "10 x 10 Blister",
    indications: ["Diabetic Peripheral Neuropathy", "Post-Herpetic Neuralgia", "Central Neuropathic Pain"],
    dosage: "1 tablet at bedtime, titrated under specialist supervision.",
    mechanism: "Alpha-2-delta calcium subunit binding modulates excitatory synaptic transmission; tricyclic component boosts descending serotonin/noradrenaline pain inhibition.",
    warnings: ["Drowsiness and dizziness precaution", "Do not abruptly discontinue"],
    storage: "Store at controlled room temperature.",
    isRx: true,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
  },
];

export const healthConditionsData: HealthCondition[] = [
  {
    id: "cond-hyper",
    slug: "hypertension-management",
    title: "Essential Hypertension & Vascular Strain",
    category: "Cardiovascular Health",
    overview: "Hypertension is a chronic hemodynamic disorder where arterial pressure is persistently elevated, increasing systemic risk of cardiac hypertrophy, stroke, and nephrosclerosis.",
    symptoms: ["Often asymptomatic ('silent progression')", "Morning occipital headaches", "Exertional dyspnea", "Dizziness or visual blurring in severe spikes"],
    riskFactors: ["Excess sodium intake", "Genetic predisposition", "Physical inactivity", "Elevated LDL-C & metabolic dysregulation"],
    management: [
      "Evidence-based pharmacotherapy (ARBs, ACE inhibitors, Calcium channel blockers)",
      "Daily blood pressure logging under clinical protocol",
      "DASH dietary adaptation and sodium reduction to <2g/day",
      "Regular supervised aerobic cardiovascular training",
    ],
    relatedTherapySlug: "cardiovascular",
    relatedProductIds: ["icon-card-01", "icon-card-02"],
  },
  {
    id: "cond-gerd",
    slug: "gerd-acid-reflux",
    title: "GERD & Upper Gastrointestinal Pathophysiology",
    category: "Gastrointestinal Health",
    overview: "Gastroesophageal Reflux Disease (GERD) arises when lower esophageal sphincter transient relaxations allow retrograde gastric acid surge into the non-keratinized esophageal mucosa.",
    symptoms: ["Retrosternal heartburn", "Acid regurgitation into pharynx", "Nocturnal dry cough", "Epigastric fullness"],
    riskFactors: ["Delayed gastric motility", "Hiatal hernia", "Obesity and elevated intra-abdominal pressure", "Certain foods and smoking"],
    management: [
      "Targeted acid-suppressive therapy with proton pump inhibitors",
      "Prokinetic co-therapy where dysmotility is demonstrated",
      "Elevating bed head by 15-20cm during nocturnal episodes",
      "Avoiding late-night meals within 3 hours of reclining",
    ],
    relatedTherapySlug: "gastroenterology",
    relatedProductIds: ["icon-gastro-01"],
  },
  {
    id: "cond-asthma",
    slug: "allergic-airway-disorders",
    title: "Allergic Airway Hyper-responsiveness & Rhinitis",
    category: "Respiratory Health",
    overview: "An integrated inflammation pathway of the upper and lower respiratory tracts driven by environmental allergen triggering and eosinophilic airway infiltration.",
    symptoms: ["Sneezing paroxysms", "Nasal congestion & rhinorrhea", "Wheezing and chest tightness", "Nocturnal waking from bronchial constriction"],
    riskFactors: ["Atopic predisposition", "Aero-allergens (dust mites, pollen)", "Cold air and humidity shifts", "Occupational airborne irritants"],
    management: [
      "Leukotriene receptor antagonists and non-sedating antihistamines",
      "Inhaled corticosteroid combination therapy for bronchial maintenance",
      "Environmental control and allergen mitigation",
      "Peak expiratory flow rate monitoring",
    ],
    relatedTherapySlug: "respiratory-pulmonology",
    relatedProductIds: ["icon-resp-01"],
  },
];

export const insightsData: InsightArticle[] = [
  {
    id: "art-01",
    slug: "advancing-aseptic-injectable-standards",
    title: "Advancing Sterile Integrity: Next-Generation Cleanroom Standards in Indian Pharma",
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
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
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
    description: "Achieved international WHO-GMP accreditation and introduced specialized cardiovascular and gastroenterology divisions.",
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
    description: "A trusted medical partner to hospitals, distributors, and clinicians with over 150 formulations across 6 therapeutic areas.",
    tag: "Global Presence",
  },
];
