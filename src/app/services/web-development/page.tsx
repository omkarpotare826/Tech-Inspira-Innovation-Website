"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Zap, Shield, Sparkles } from "lucide-react";

export default function WebDevelopmentPage() {
  // Calculator state
  const [pages, setPages] = useState(5);
  const [complexity, setComplexity] = useState("Custom"); // Basic, Custom, Premium
  const [dynamic, setDynamic] = useState(false);

  // Compute values
  const getEstimatedBudget = () => {
    let base = 15000;
    let pageCost = pages * 1500;
    let complexityMultiplier = complexity === "Basic" ? 1 : complexity === "Custom" ? 1.6 : 2.5;
    let dynamicAdd = dynamic ? 10000 : 0;
    return Math.round((base + pageCost + dynamicAdd) * complexityMultiplier);
  };

  const getEstimatedSpeed = () => {
    let baseSpeed = 0.6;
    let pagePenalty = pages * 0.03;
    let complexityPenalty = complexity === "Basic" ? 0.1 : complexity === "Custom" ? 0.3 : 0.6;
    let dynamicPenalty = dynamic ? 0.4 : 0;
    return (baseSpeed + pagePenalty + complexityPenalty + dynamicPenalty).toFixed(1);
  };

  const getTrafficLimit = () => {
    if (complexity === "Premium") return "500k+ / month";
    if (complexity === "Custom") return "100k / month";
    return "15k / month";
  };

  const workflowSteps = [
    { step: "01", title: "Discovery", description: "Auditing requirements, target audience, and structuring sitemap/features." },
    { step: "02", title: "Prototyping", description: "Creating initial wireframes and interactive UI mockups for approval." },
    { step: "03", title: "Coding", description: "Pixel-perfect frontend development and backend integration with Next.js/React." },
    { step: "04", title: "Speed Audit", description: "Compiling assets, compressing images, and optimizing server parameters." },
    { step: "05", title: "Deployment", description: "Deploying to secure cloud servers, setting SSL, and launching live." },
  ];

  return (
    <ServiceLayout
      title="Web Development"
      subtitle="We build fast, secure & responsive websites that not only look great but also deliver results. Our optimized codebase ensures maximum search visibility and rapid page load times."
      serviceId="web-development"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Project Estimator</h3>
            <p className="text-xs text-slate-400">Configure your website needs and see instant metrics.</p>
          </div>

          {/* Slider 1: Pages */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Pages: {pages}</span>
              <span className="text-slate-500 font-semibold">1 - 25+</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Tabs: Complexity */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Design Complexity</span>
            <div className="grid grid-cols-3 gap-2">
              {["Basic", "Custom", "Premium"].map((c) => (
                <button
                  key={c}
                  onClick={() => setComplexity(c)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    complexity === c
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle: Dynamic Features */}
          <div className="flex justify-between items-center py-2 border-y border-brand-border/10">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Dynamic Integrations</span>
              <span className="text-[10px] text-slate-400">Add user authentication, CMS, or databases.</span>
            </div>
            <button
              onClick={() => setDynamic(!dynamic)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                dynamic ? "bg-brand-cyan" : "bg-slate-800"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  dynamic ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Est. Budget</span>
              <div className="text-base font-extrabold text-white">₹{getEstimatedBudget().toLocaleString('en-IN')}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Load Speed</span>
              <div className="text-base font-extrabold text-brand-cyan flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-brand-cyan animate-pulse" />
                {getEstimatedSpeed()}s
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Traffic Limit</span>
              <div className="text-[10px] font-bold text-white mt-1 leading-none">{getTrafficLimit()}</div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Dynamic Interactive SVG Server Rack */}
          <svg viewBox="0 0 200 220" className="w-[80%] h-[80%] drop-shadow-2xl animate-float">
            {/* Server Rack Outline */}
            <rect x="20" y="10" width="160" height="200" rx="10" fill="#050b18" stroke="#00d2ff" strokeWidth="3" opacity="0.9" />

            {/* Server Blade 1 */}
            <g className="group cursor-pointer">
              <rect x="30" y="30" width="140" height="35" rx="6" fill="#0b172a" stroke="#00a8ff" strokeWidth="1.5" />
              {/* HDD slots */}
              <rect x="40" y="42" width="15" height="12" rx="1" fill="#00d2ff" opacity="0.8" className="animate-pulse" />
              <rect x="60" y="42" width="15" height="12" rx="1" fill="#0ea5e9" opacity="0.8" />
              {/* LED status light */}
              <circle cx="155" cy="48" r="3" fill="#00d2ff" className="animate-ping" style={{ animationDuration: '1.5s' }} />
              <circle cx="155" cy="48" r="2" fill="#00d2ff" />
            </g>

            {/* Server Blade 2 */}
            <g className="group cursor-pointer">
              <rect x="30" y="80" width="140" height="35" rx="6" fill="#0b172a" stroke="#00a8ff" strokeWidth="1.5" />
              {/* Dynamic packet animation speed linked to slider state */}
              <rect x="40" y="92" width="40" height="10" rx="2" fill="#050c18" stroke="rgba(0,168,255,0.3)" />
              {/* Animated progress bar representing complexity loading */}
              <rect
                x="40"
                y="92"
                width={complexity === "Basic" ? "20" : complexity === "Custom" ? "30" : "38"}
                height="10"
                rx="2"
                fill="#00d2ff"
                className="transition-all duration-500"
              />
              <circle cx="155" cy="98" r="3" fill={dynamic ? "#00d2ff" : "#ef4444"} className="animate-pulse" />
              <circle cx="155" cy="98" r="2" fill={dynamic ? "#00d2ff" : "#ef4444"} />
            </g>

            {/* Server Blade 3 */}
            <g className="group cursor-pointer">
              <rect x="30" y="130" width="140" height="35" rx="6" fill="#0b172a" stroke="#00a8ff" strokeWidth="1.5" />
              {/* Mini Charts */}
              <path d="M40,158 L60,140 L80,152 L100,138 L120,150" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="155" cy="148" r="2" fill="#00d2ff" />
            </g>

            {/* Connection Node bottom */}
            <path d="M100,165 L100,200" stroke="#00a8ff" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="100" cy="195" r="4" fill="#00d2ff" className="animate-ping" />
            <circle cx="100" cy="195" r="2.5" fill="#00d2ff" />
          </svg>

          {/* Floating tags */}
          <div className="absolute top-[20%] left-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Shield className="w-3 h-3 text-brand-cyan" /> Secure SSL
          </div>
          <div className="absolute bottom-[20%] right-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Sparkles className="w-3 h-3 text-brand-cyan" /> Next.js 16
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
