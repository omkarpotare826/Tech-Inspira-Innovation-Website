"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Layers, Eye, ShieldCheck } from "lucide-react";

export default function UiUxDesignPage() {
  // Config state
  const [stage, setStage] = useState<"Wireframe" | "Style Guide" | "Hi-Fi Visual">("Hi-Fi Visual");
  const [platform, setPlatform] = useState<"iOS" | "Web">("iOS");
  const [themeColor, setThemeColor] = useState<"Cyan" | "Purple" | "Amber">("Cyan");

  // Computed details
  const getThemeHex = () => {
    if (themeColor === "Purple") return "#a855f7";
    if (themeColor === "Amber") return "#f59e0b";
    return "#00d2ff";
  };

  const getEngagementLift = () => {
    if (stage === "Hi-Fi Visual") return "+42% Conversion";
    if (stage === "Style Guide") return "+25% Branding";
    return "+15% UX Clarity";
  };

  const getDesignWeeks = () => {
    let base = 2;
    if (platform === "Web") base += 1.5;
    if (stage === "Hi-Fi Visual") base += 2;
    return base;
  };

  const workflowSteps = [
    { step: "01", title: "User Research", description: "Analyzing target demographics, user personas, and scoping main user flows." },
    { step: "02", title: "Information Architecture", description: "Drafting structural sitemaps and mapping page hierarchy and flows." },
    { step: "03", title: "Wireframing", description: "Sketching low-fidelity grids to focus purely on content hierarchy and utility." },
    { step: "04", title: "Visual Design", description: "Applying typography, color guides, and details to render high-fidelity mockups." },
    { step: "05", title: "Interactive Prototyping", description: "Linking screens to simulate user journeys, user testing, and developer handoff." },
  ];

  return (
    <ServiceLayout
      title="UI/UX Design"
      subtitle="We design beautiful, intuitive, and user-centered interfaces that create memorable digital experiences. Our design process aligns visual delight with flawless functionality to maximize conversions."
      serviceId="ui-ux-design"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">UI Simulator</h3>
            <p className="text-xs text-slate-400">Interact with stages, platforms, and colors to see visual shifts.</p>
          </div>

          {/* Selector 1: Design Stage */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Design Stage</span>
            <div className="grid grid-cols-3 gap-2">
              {["Wireframe", "Style Guide", "Hi-Fi Visual"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStage(s as any)}
                  className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 ${
                    stage === s
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Selector 2: Platform */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Target Platform</span>
            <div className="grid grid-cols-2 gap-2">
              {["iOS", "Web"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    platform === p
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Selector 3: Color Palette */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Theme Accents</span>
            <div className="flex gap-4">
              {[
                { name: "Cyan", color: "bg-brand-cyan" },
                { name: "Purple", color: "bg-purple-500" },
                { name: "Amber", color: "bg-amber-500" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => setThemeColor(c.name as any)}
                  className={`w-7 h-7 rounded-full ${c.color} relative flex items-center justify-center transition-transform hover:scale-110 cursor-pointer`}
                >
                  {themeColor === c.name && (
                    <div className="w-9 h-9 rounded-full border-2 border-white absolute pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Output */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Design Time</span>
              <div className="text-sm sm:text-base font-extrabold text-white">{getDesignWeeks()} Weeks</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">UX Lift</span>
              <div className="text-[10px] sm:text-xs font-extrabold text-brand-cyan mt-1 leading-none">{getEngagementLift()}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Accessibility</span>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                WCAG AA
              </div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Interactive Screen Model Container */}
          <div className="relative w-[75%] aspect-[0.7] flex items-center justify-center">
            {platform === "iOS" ? (
              // iPhone Mockup
              <div className="relative w-full h-full bg-[#020617] rounded-[32px] border-4 border-[#374151] shadow-2xl p-2.5 overflow-hidden transition-all duration-300">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-3 bg-[#374151] rounded-full z-20" />
                
                {/* Simulated Screen Content based on stage */}
                <div className="w-full h-full bg-[#050b18] rounded-[24px] p-4 pt-6 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* Wireframe view */}
                  {stage === "Wireframe" && (
                    <div className="space-y-4 animate-fadeIn h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-12 h-3 bg-slate-700/50 rounded" />
                        <div className="w-full h-16 bg-slate-700/20 border border-dashed border-slate-700/40 rounded-lg flex items-center justify-center">
                          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Image Box</span>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-2 bg-slate-700/30 rounded" />
                          <div className="w-3/4 h-2 bg-slate-700/30 rounded" />
                        </div>
                      </div>
                      <div className="w-full h-8 bg-slate-700/40 rounded-xl flex items-center justify-center">
                        <span className="text-[6px] text-slate-500 font-bold">BUTTON</span>
                      </div>
                    </div>
                  )}

                  {/* Style Guide view */}
                  {stage === "Style Guide" && (
                    <div className="space-y-4 animate-fadeIn h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block border-b border-brand-border/25 pb-1">Typography</span>
                        <div className="text-base font-extrabold text-white font-sans leading-none">Heading (Sora)</div>
                        <div className="text-[10px] text-slate-300 font-medium">Paragraph (Plus Jakarta)</div>
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Palette Swatch</span>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: getThemeHex() }} />
                          <div className="w-6 h-6 rounded-lg bg-slate-700" />
                          <div className="w-6 h-6 rounded-lg bg-[#0b1329]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hi-Fi view */}
                  {stage === "Hi-Fi Visual" && (
                    <div className="space-y-4 animate-fadeIn h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Dashboard</span>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getThemeHex() }} />
                        </div>
                        
                        <div className="p-3 rounded-xl border border-brand-border/20 bg-brand-dark/50 space-y-1">
                          <span className="text-[6px] uppercase font-bold text-slate-500 tracking-wider block">Wallet Balance</span>
                          <span className="text-base font-bold text-white block">₹1,42,285.00</span>
                        </div>
                      </div>

                      <div className="w-full py-2.5 rounded-xl text-center text-[8px] font-bold uppercase tracking-wider text-[#020617] transition-all duration-300" style={{ backgroundColor: getThemeHex() }}>
                        Transfer Funds
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ) : (
              // Web Browser Mockup
              <div className="relative w-full h-[75%] bg-[#020617] rounded-xl border-2 border-[#374151] shadow-2xl p-1 overflow-hidden transition-all duration-300">
                {/* Browser Top Bar */}
                <div className="flex justify-between items-center px-2 py-1.5 border-b border-[#374151]/50 bg-slate-900/50">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="w-[60%] h-3 bg-slate-950/60 rounded text-[5px] text-slate-500 flex items-center px-1">techinspira.in</div>
                </div>

                {/* Content */}
                <div className="w-full h-[calc(100%-25px)] bg-[#050b18] p-3 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-3 h-[70%] items-center">
                    <div className="space-y-1.5">
                      <div className="w-6 h-2 bg-slate-800 rounded" />
                      <div className="text-[10px] font-bold text-white leading-tight">
                        We build sites that <span style={{ color: getThemeHex() }}>Convert</span>
                      </div>
                    </div>
                    {/* Visual box */}
                    <div className="h-full rounded bg-slate-900/50 border border-brand-border/10 flex items-center justify-center">
                      {stage === "Wireframe" ? (
                        <div className="w-6 h-6 border border-dashed border-slate-700 transform rotate-45" />
                      ) : (
                        <div className="w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: getThemeHex(), filter: 'blur(3px)' }} />
                      )}
                    </div>
                  </div>
                  <div className="w-16 h-4 rounded text-[6px] font-bold uppercase tracking-wider text-[#020617] flex items-center justify-center" style={{ backgroundColor: getThemeHex() }}>
                    Get Demo
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Overlay layers details */}
          <div className="absolute top-[10%] left-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Layers className="w-3 h-3 text-brand-cyan" /> 3D Layer Stack
          </div>
          <div className="absolute bottom-[10%] right-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Eye className="w-3 h-3 text-brand-cyan" /> User Tested
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
