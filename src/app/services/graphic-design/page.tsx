"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Sparkles, Image as ImageIcon, Laptop } from "lucide-react";

export default function GraphicDesignPage() {
  // Config state
  const [format, setFormat] = useState<"Instagram" | "Billboard" | "T-Shirt">("Instagram");
  const [accentGrad, setAccentGrad] = useState<"Blue" | "Purple" | "Gold">("Blue");
  const [headline, setHeadline] = useState("INSPIRA");

  // Computed values
  const getGradientClass = () => {
    if (accentGrad === "Purple") return "from-fuchsia-500 to-indigo-500";
    if (accentGrad === "Gold") return "from-amber-400 to-orange-500";
    return "from-brand-blue to-brand-cyan";
  };

  const getExportSize = () => {
    if (format === "Billboard") return "4.2 MB";
    if (format === "T-Shirt") return "1.8 MB";
    return "820 KB";
  };

  const getExportRes = () => {
    if (format === "Billboard") return "3840 x 2160 (4K)";
    if (format === "T-Shirt") return "2400 x 2400 (Print)";
    return "1080 x 1080 (Square)";
  };

  const workflowSteps = [
    { step: "01", title: "Creative Brief", description: "Discussing campaign visual objectives, sizing formats, and brand guidelines." },
    { step: "02", title: "Concept Drafts", description: "Sketching initial design assets, vector wireframes, and layouts for feedback." },
    { step: "03", title: "Asset Creation", description: "Building high-resolution graphics, applying typography and gradient mapping." },
    { step: "04", title: "Mockup Testing", description: "Applying graphics to product mockups (t-shirts, boards, digital screens) for testing." },
    { step: "05", title: "Final Delivery", description: "Exporting high-resolution vector PDFs, print-ready files, and social-ready crops." },
  ];

  return (
    <ServiceLayout
      title="Graphic Design"
      subtitle="We design eye-catching visual assets that leave a lasting impression. From high-resolution marketing billboards to custom prints and social media creatives, we bring ideas to life."
      serviceId="graphic-design"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Visual Canvas Config</h3>
            <p className="text-xs text-slate-400">Configure layouts and overlay text to see live asset exports.</p>
          </div>

          {/* Selector 1: Asset Format */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Mockup Format</span>
            <div className="grid grid-cols-3 gap-2">
              {["Instagram", "Billboard", "T-Shirt"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    format === f
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Input: Text Overlay */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Headline Overlay</label>
            <input
              type="text"
              maxLength={12}
              value={headline}
              onChange={(e) => setHeadline(e.target.value.toUpperCase())}
              placeholder="ENTER TEXT"
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border/30 bg-brand-dark/50 text-xs text-white placeholder-slate-600 focus:border-brand-cyan focus:outline-none transition-colors"
            />
          </div>

          {/* Selector 2: Accents */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Glow Accents</span>
            <div className="grid grid-cols-3 gap-2">
              {["Blue", "Purple", "Gold"].map((g) => (
                <button
                  key={g}
                  onClick={() => setAccentGrad(g as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    accentGrad === g
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Export Res</span>
              <div className="text-xs font-extrabold text-white mt-1 leading-none">{getExportRes()}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">File Size</span>
              <div className="text-xs font-extrabold text-brand-cyan mt-1 leading-none">{getExportSize()}</div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center perspective-3d group">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Dynamic Mockup Preview Frame */}
          <div className="tilt-3d-card w-[80%] aspect-square rounded-2xl border border-brand-border/20 p-4 bg-brand-dark/40 flex items-center justify-center relative overflow-hidden shadow-2xl">
            
            {/* Instagram Mockup (Square Card with glowing content) */}
            {format === "Instagram" && (
              <div className="w-[85%] aspect-square rounded-xl bg-[#030815] border border-brand-border/20 p-3 shadow-inner flex flex-col justify-between animate-fadeIn relative">
                <div className="flex justify-between items-center text-[7px] font-bold text-slate-400">
                  <span>@inspira.tech</span>
                  <span>Instagram</span>
                </div>
                
                {/* Graphics element */}
                <div className="my-auto py-6 rounded-lg bg-gradient-to-br from-slate-900 to-black border border-brand-border/10 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className={`absolute w-12 h-12 rounded-full bg-gradient-to-r ${getGradientClass()} blur-xl opacity-35 animate-pulse`} />
                  <span className={`text-base font-extrabold tracking-widest bg-gradient-to-r ${getGradientClass()} bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,168,255,0.2)] relative z-10`}>
                    {headline || "INSPIRA"}
                  </span>
                </div>

                <div className="text-[6px] text-slate-500 font-bold border-t border-brand-border/10 pt-1.5 flex justify-between">
                  <span>Likes: 1,482</span>
                  <span>Explore Feed</span>
                </div>
              </div>
            )}

            {/* Billboard Mockup (Large banner on structural rack) */}
            {format === "Billboard" && (
              <div className="w-[95%] aspect-[1.8] rounded bg-gradient-to-r from-slate-900 to-black border border-brand-border/20 p-3 flex flex-col justify-between shadow-2xl animate-fadeIn relative select-none">
                {/* Spotlights */}
                <div className="flex justify-around absolute top-1 left-0 w-full px-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                </div>
                
                {/* Graphic overlay text */}
                <div className="my-auto text-center flex flex-col items-center justify-center">
                  <span className={`text-lg font-extrabold tracking-[0.18em] bg-gradient-to-r ${getGradientClass()} bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,210,255,0.2)]`}>
                    {headline || "INSPIRA"}
                  </span>
                  <span className="text-[5px] text-slate-400 font-semibold tracking-wider uppercase mt-1">Leading Creative Digital Solutions</span>
                </div>

                {/* Structure frame bottom */}
                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[8px] h-[16px] bg-[#374151]" />
              </div>
            )}

            {/* T-Shirt Mockup */}
            {format === "T-Shirt" && (
              <div className="w-[80%] aspect-square flex items-center justify-center animate-fadeIn relative">
                {/* SVG T-Shirt Shape */}
                <svg viewBox="0 0 100 100" className="w-[90%] h-[90%] drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]">
                  {/* Shirt body */}
                  <path
                    d="M 30,15 L 42,10 L 58,10 L 70,15 L 85,25 L 75,40 L 68,36 L 68,90 L 32,90 L 32,36 L 25,40 L 15,25 Z"
                    fill="#080e1b"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  {/* Collar curve */}
                  <path d="M 42,10 C 45,15 55,15 58,10" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                  
                  {/* Dynamic Graphic printed on shirt */}
                  <g transform="translate(0, 5)">
                    <circle cx="50" cy="40" r="10" fill="url(#shirtGrad)" opacity="0.8" />
                    <text
                      x="50"
                      y="53"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="6.5"
                      fontWeight="extrabold"
                      letterSpacing="0.5"
                    >
                      {headline || "INSPIRA"}
                    </text>
                  </g>

                  <defs>
                    <linearGradient id="shirtGrad" x1="40" y1="30" x2="60" y2="50" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

          </div>

          {/* Floating Indicators */}
          <div className="absolute top-[10%] left-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Sparkles className="w-3 h-3 text-brand-cyan" /> Vector Shapes
          </div>
          <div className="absolute bottom-[10%] right-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Laptop className="w-3 h-3 text-brand-cyan" /> Print Ready
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
