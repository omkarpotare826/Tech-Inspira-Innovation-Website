"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Palette, Feather, Award } from "lucide-react";

export default function BrandingIdentityPage() {
  // Config state
  const [archetype, setArchetype] = useState<"Futuristic" | "Classic" | "Creative">("Futuristic");
  const [fontFamily, setFontFamily] = useState<"Sans" | "Serif" | "Monospace">("Sans");

  // Colors based on selection
  const getColors = () => {
    if (archetype === "Classic") return ["#d4af37", "#1e293b", "#ffffff"]; // Gold, slate, white
    if (archetype === "Creative") return ["#f43f5e", "#fb923c", "#1e1b4b"]; // Rose, orange, indigo
    return ["#00d2ff", "#0066ff", "#020617"]; // Cyan, blue, midnight
  };

  const getFontLabel = () => {
    if (fontFamily === "Serif") return "Georgia / Playfair";
    if (fontFamily === "Monospace") return "JetBrains Mono / Space";
    return "Sora / Plus Jakarta";
  };

  const getArchetypeDesc = () => {
    if (archetype === "Classic") return "Trustworthy, high-end, establishing authoritative presence.";
    if (archetype === "Creative") return "Playful, friendly, encouraging active engagement and storytelling.";
    return "Tech-driven, forward-thinking, disruptive and neon-accented.";
  };

  const workflowSteps = [
    { step: "01", title: "Brand Discovery", description: "Mapping core values, mission alignment, and establishing your market positioning." },
    { step: "02", title: "Logo Concepts", description: "Sketching vector concepts representing your brand icon and custom typography." },
    { step: "03", title: "Color Psychology", description: "Choosing a curated set of hex values that evoke target client sentiments." },
    { step: "04", title: "Asset Templates", description: "Creating stationary guides, business cards, email footers, and letterheads." },
    { step: "05", title: "Style Guidelines", description: "Documenting spacing, type sizing rules, and asset rules in a brand book." },
  ];

  return (
    <ServiceLayout
      title="Branding & Identity"
      subtitle="We construct complete, memorable brand identities that resonate with your target audience. From logo marks to complete typography guides, we ensure cohesive visual branding."
      serviceId="branding-identity"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Identity Archetype Picker</h3>
            <p className="text-xs text-slate-400">Configure archetypes and type families to build a style sheet.</p>
          </div>

          {/* Archetype Buttons */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Brand Archetype</span>
            <div className="grid grid-cols-3 gap-2">
              {["Futuristic", "Classic", "Creative"].map((a) => (
                <button
                  key={a}
                  onClick={() => setArchetype(a as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    archetype === a
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Typography Mood</span>
            <div className="grid grid-cols-3 gap-2">
              {["Sans", "Serif", "Monospace"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFontFamily(f as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    fontFamily === f
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Swatches display */}
          <div className="space-y-2 border-t border-brand-border/10 pt-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Color Palette</span>
            <div className="flex gap-3">
              {getColors().map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg border border-brand-border/20 shadow-inner" style={{ backgroundColor: color }} />
                  <span className="text-[8px] font-bold text-slate-500 uppercase">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Suggested Fonts</span>
              <div className="text-xs font-extrabold text-white mt-1 leading-none">{getFontLabel()}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Brand Persona</span>
              <div className="text-[9px] font-bold text-brand-cyan mt-1 leading-relaxed">{getArchetypeDesc()}</div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center perspective-3d group">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Brand assets package cards mockup stacked in Y-Z space */}
          <div className="tilt-3d-card w-[80%] space-y-4 select-none relative">
            
            {/* Stationery Box Mockup */}
            <div className="p-4 rounded-2xl glass-card border border-brand-border/25 shadow-2xl flex flex-col justify-between min-h-[120px] transition-all duration-500" style={{ backgroundColor: getColors()[2] }}>
              <div className="flex justify-between items-start">
                {/* Brand Name Logo text */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold tracking-wider text-white" style={{ fontFamily: fontFamily === "Serif" ? "Georgia, serif" : fontFamily === "Monospace" ? "monospace" : "inherit" }}>
                    INSPIRA
                  </span>
                  <span className="text-[6px] tracking-widest font-semibold uppercase" style={{ color: getColors()[0] }}>
                    {archetype} Identity
                  </span>
                </div>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: getColors()[0] }} />
              </div>

              {/* Tagline / detail */}
              <div className="text-[7px] text-slate-400 font-semibold border-t border-brand-border/10 pt-2 flex justify-between items-center">
                <span>ESTABLISHED 2026</span>
                <span className="uppercase" style={{ color: getColors()[0] }}>Style guide verified</span>
              </div>
            </div>

            {/* Business Card Overlay */}
            <div className="depth-layer-2 absolute -bottom-6 right-[-10px] w-[60%] aspect-[1.6] rounded-xl border border-brand-cyan/20 p-3 shadow-2xl flex flex-col justify-between z-20 transition-all duration-500" style={{ backgroundColor: getColors()[1] }}>
              <span className="text-[7px] font-bold text-white leading-none">INSPIRA</span>
              <div className="space-y-0.5">
                <span className="text-[5px] text-slate-400 font-bold block">Brand Representative</span>
                <span className="text-[6px] font-extrabold block" style={{ color: getColors()[0] }}>creative@inspira.in</span>
              </div>
            </div>

          </div>

          {/* Floating Indicators */}
          <div className="absolute top-[10%] left-[-15%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Feather className="w-3 h-3 text-brand-cyan" /> Visual Assets
          </div>
          <div className="absolute bottom-[10%] left-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Award className="w-3 h-3 text-brand-cyan" /> Premium Grade
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
