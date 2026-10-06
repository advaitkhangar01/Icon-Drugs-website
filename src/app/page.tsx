import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/sections/HeroSlider";
import QuickStatsPanel from "@/components/sections/QuickStatsPanel";
import SplitTile from "@/components/ui/SplitTile";
import MilestonesTimeline from "@/components/sections/MilestonesTimeline";
import TherapeuticFocusGrid from "@/components/sections/TherapeuticFocusGrid";
import QualitySection from "@/components/sections/QualitySection";
import InsightsTeaser from "@/components/sections/InsightsTeaser";
import PartnershipCTA from "@/components/sections/PartnershipCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Full Viewport 4-Slide Hero Slider with clip-path & text reveal */}
        <HeroSlider />

        {/* Quick Facts Panel overlapping Hero bottom */}
        <QuickStatsPanel />

        {/* SplitTile 1: Our Story (Heritage & Decades of Care) */}
        <div id="our-story" className="pt-12">
          <SplitTile
            side="left"
            imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
            imageAlt="Pharmaceutical researchers collaborating inside laboratory"
            categoryTag="Decades of Heritage"
            headline="Built over decades. Moving forward with scientific precision."
            subtext="From our foundation over 25 years ago to today's multi-specialty formulation lines, Icon Drugs has maintained an unyielding principle: patient safety and therapeutic bioequivalence always come first."
            bulletPoints={[
              "Continuous reinvestment into modern analytical chemistry instrumentation",
              "Robust distribution networks connecting primary clinics to tertiary hospitals",
              "Stringent raw material audit protocols across verified API sources",
            ]}
            primaryCtaText="Discover Our Heritage"
            primaryCtaLink="/#milestones"
            secondaryCtaText="Our Therapeutic Focus"
            secondaryCtaLink="/therapeutic-areas"
            statBadge={{
              value: "25+ Years",
              label: "Decades in pharma excellence",
            }}
            overlayGraphic="arc"
          />
        </div>

        {/* Milestones Horizontal Timeline */}
        <MilestonesTimeline />

        {/* Therapeutic Focus Grid */}
        <TherapeuticFocusGrid />

        {/* Full-width Quality & Safety Philosophy */}
        <QualitySection />

        {/* SplitTile 2: People / Human Impact */}
        <SplitTile
          side="right"
          imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Doctor communicating compassionately with patient during consultation"
          categoryTag="Human Impact & Care"
          headline="Healthcare is ultimately human."
          subtext="Behind every batch test, chromatographic assay, and blister packaging is an individual seeking wellness, relief, or long-term management. We calibrate our formulations so doctors can prescribe with absolute certainty."
          bulletPoints={[
            "Formulations designed for patient compliance and swallowability",
            "Clear bilingual labeling adhering to international pharmacovigilance guidelines",
            "Targeted solutions designed for chronic cardiometabolic and acute respiratory conditions",
          ]}
          primaryCtaText="Healthcare Professional Information"
          primaryCtaLink="/healthcare-professionals"
          bgColor="bg-white"
          statBadge={{
            value: "100%",
            label: "Pharmacovigilance monitored",
          }}
          overlayGraphic="arc"
        />

        {/* Editorial Trust Quote Block */}
        <section className="py-20 bg-[#00477F] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-6xl font-serif text-[#F87901] block mb-4">“</span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-snug mb-8">
              Reliable pharmaceutical care requires more than standard production; it demands an uncompromising culture of precision from raw chemical synthesis to bedside delivery.
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg text-white">Icon Drugs Scientific Advisory Board</div>
              <div className="text-sm text-blue-200 uppercase tracking-widest mt-1">
                Quality & Pharmacopeia Adherence
              </div>
            </div>
          </div>
        </section>

        {/* Insights / News Teaser */}
        <InsightsTeaser />

        {/* Partnership Call to Action */}
        <PartnershipCTA />
      </main>
      <Footer />
    </>
  );
}
