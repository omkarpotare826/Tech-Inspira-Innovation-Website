"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Search, Trophy, Sparkles } from "lucide-react";

export default function SeoServicesPage() {
  // Config state
  const [backlinks, setBacklinks] = useState(25); // DA
  const [blogs, setBlogs] = useState(2); // articles/mo
  const [techScore, setTechScore] = useState(70); // %

  // Computations
  const getRank = () => {
    let baseRank = 80;
    let linkDiscount = backlinks * 0.5;
    let blogDiscount = blogs * 2.2;
    let techDiscount = (techScore - 50) * 0.4;
    return Math.max(1, Math.round(baseRank - linkDiscount - blogDiscount - techDiscount));
  };

  const getTrafficVal = () => {
    let rank = getRank();
    let multiplier = rank === 1 ? 650000 : rank < 5 ? 320000 : rank < 10 ? 120000 : 25000;
    return (blogs * 12000 + multiplier).toLocaleString('en-IN');
  };

  const workflowSteps = [
    { step: "01", title: "Technical Audit", description: "Crawl inspection to identify index blocks, broken links, and metadata gaps." },
    { step: "02", title: "Keyword Map", description: "Mapping search volume, intent clusters, and sizing quick-win target keywords." },
    { step: "03", title: "Content Forge", description: "Drafting optimized articles, FAQs, and structures to address user queries." },
    { step: "04", title: "Link Outreach", description: "Partnering with authority publishers to secure high-quality context backlink assets." },
    { step: "05", title: "Rank Tracking", description: "Monitoring index shifts daily and tuning page headings based on keyword positions." },
  ];

  return (
    <ServiceLayout
      title="SEO Services"
      subtitle="We align technical compliance with strategic keyword clusters and link outreach to climb Google's rankings. Our white-hat SEO strategy drives qualified organic search intent to your business."
      serviceId="seo-services"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">SERP Rank Simulator</h3>
            <p className="text-xs text-slate-400">Optimize site strength to see keyword positions and traffic value rise.</p>
          </div>

          {/* Slider 1: Backlinks */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Domain Authority (DA): {backlinks}</span>
              <span className="text-slate-500 font-semibold">10 - 90</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={backlinks}
              onChange={(e) => setBacklinks(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 2: Articles */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Blog Articles/Month: {blogs}</span>
              <span className="text-slate-500 font-semibold">1 - 15</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={blogs}
              onChange={(e) => setBlogs(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 3: Tech SEO Health */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Tech Health Score: {techScore}%</span>
              <span className="text-slate-500 font-semibold">50 - 100%</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              value={techScore}
              onChange={(e) => setTechScore(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Google Rank</span>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center justify-center gap-1">
                <Search className="w-3.5 h-3.5 text-brand-cyan" />
                #{getRank()}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Est. Traffic Value</span>
              <div className="text-sm sm:text-base font-extrabold text-white">₹{getTrafficVal()}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Authority Class</span>
              <div className="text-[10px] font-bold text-brand-cyan mt-1.5 leading-none">
                {backlinks > 70 ? "Enterprise" : backlinks > 40 ? "Established" : "Growth"}
              </div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center perspective-3d group">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Simulated Google SERP Card list stacked in 3D */}
          <div className="tilt-3d-card w-[80%] space-y-3.5 select-none relative">
            
            {/* Rank 1 Card */}
            <div className={`p-3 rounded-xl border transition-all duration-300 ${
              getRank() <= 5 ? "border-brand-cyan bg-[#07132e]/90 shadow-[0_0_15px_rgba(0,210,255,0.15)] z-20" : "border-slate-800 bg-brand-dark/50 z-10"
            }`}>
              <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>{getRank() <= 5 ? "yourwebsite.in" : "competitor-a.com"}</span>
                </div>
                {getRank() <= 5 ? (
                  <span className="text-brand-cyan flex items-center gap-0.5"><Trophy className="w-3 h-3 text-brand-cyan" /> #1</span>
                ) : (
                  <span>#1 Rank</span>
                )}
              </div>
              <h4 className="text-[10px] font-bold text-white mt-1">Best Digital Agency Solutions</h4>
            </div>

            {/* Rank 2 Card */}
            <div className={`p-3 rounded-xl border transition-all duration-300 ${
              getRank() > 5 && getRank() <= 20 ? "border-brand-cyan bg-[#07132e]/90 shadow-[0_0_15px_rgba(0,210,255,0.15)] z-20" : "border-slate-800 bg-brand-dark/50 z-10"
            }`}>
              <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>{getRank() > 5 && getRank() <= 20 ? "yourwebsite.in" : "competitor-b.com"}</span>
                </div>
                {getRank() > 5 && getRank() <= 20 ? (
                  <span className="text-brand-cyan">#{getRank()}</span>
                ) : (
                  <span>#2 Rank</span>
                )}
              </div>
              <h4 className="text-[10px] font-bold text-white mt-1">Innovative Digital Agency</h4>
            </div>

            {/* Rank 3 Card / Below Page 1 */}
            <div className={`p-3 rounded-xl border transition-all duration-300 ${
              getRank() > 20 ? "border-brand-cyan bg-[#07132e]/90 shadow-[0_0_15px_rgba(0,210,255,0.15)] z-20" : "border-slate-800 bg-brand-dark/50 z-10"
            }`}>
              <div className="flex justify-between items-center text-[8px] font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>{getRank() > 20 ? "yourwebsite.in" : "competitor-c.com"}</span>
                </div>
                <span>{getRank() > 20 ? `#${getRank()}` : "#25 Rank"}</span>
              </div>
              <h4 className="text-[10px] font-bold text-white mt-1">Tech Inspira Innovation Details</h4>
            </div>

            {/* Star background decoration */}
            <div className="absolute -top-12 -left-4 pointer-events-none scale-75 opacity-70">
              <Sparkles className="w-6 h-6 text-brand-cyan animate-pulse" />
            </div>

          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
