"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { TrendingUp, Users, Target } from "lucide-react";

export default function DigitalMarketingPage() {
  // Simulator State
  const [adSpend, setAdSpend] = useState(100000);
  const [ctr, setCtr] = useState(2.0); // %
  const [cvr, setCvr] = useState(3.0); // %

  const cpc = 40; // Cost Per Click (₹40)

  // Computations
  const getClicks = () => Math.round(adSpend / cpc);
  const getConversions = () => Math.round(getClicks() * (cvr / 100));
  
  const getRoas = () => {
    let salesValue = getConversions() * 8000; // Average Order Value ₹8000
    return (salesValue / adSpend).toFixed(1);
  };

  const getCpa = () => {
    let convs = getConversions();
    return convs > 0 ? Math.round(adSpend / convs).toLocaleString('en-IN') : "0";
  };

  const workflowSteps = [
    { step: "01", title: "Target Audit", description: "Analyzing audience demographics, competitors' ad strategies, and keyword positioning." },
    { step: "02", title: "Ad Creatives", description: "Designing high-converting banners, copywriting, and structured landing pages." },
    { step: "03", title: "Campaign Launch", description: "Configuring Facebook Ads Pixel and Google Ads tracking and bidding models." },
    { step: "04", title: "A/B Testing", description: "Testing visual headlines, formats, and interest groups to scale winning ads." },
    { step: "05", title: "Scaling & ROI", description: "Increasing spend on top performers and reducing CPAs via custom retargeting." },
  ];

  return (
    <ServiceLayout
      title="Digital Marketing"
      subtitle="We launch high-performing ad campaigns across social and search networks. Our analytics-first strategy focuses on optimizing your Customer Acquisition Costs (CAC) to scale ROI."
      serviceId="digital-marketing"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Ad Campaign Simulator</h3>
            <p className="text-xs text-slate-400">Tweak metrics to forecast sales, ROAS, and Cost Per Lead.</p>
          </div>

          {/* Slider 1: Ad Spend */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Monthly Budget: ₹{adSpend.toLocaleString('en-IN')}</span>
              <span className="text-slate-500 font-semibold">₹25,000 - ₹5,00,000</span>
            </div>
            <input
              type="range"
              min="25000"
              max="500000"
              step="25000"
              value={adSpend}
              onChange={(e) => setAdSpend(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 2: Click-Through Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Ad CTR: {ctr}%</span>
              <span className="text-slate-500 font-semibold">0.5 - 5%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={ctr}
              onChange={(e) => setCtr(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 3: Conversion Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Landing Page CVR: {cvr}%</span>
              <span className="text-slate-500 font-semibold">0.5 - 10%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={cvr}
              onChange={(e) => setCvr(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Sales/Month</span>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-brand-cyan" />
                {getConversions()}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Target CPA</span>
              <div className="text-sm sm:text-base font-extrabold text-white">₹{getCpa()}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Est. ROAS</span>
              <div className="text-sm sm:text-base font-extrabold text-brand-cyan flex items-center justify-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" />
                {getRoas()}x
              </div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Conversion Funnel SVG */}
          <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] drop-shadow-2xl animate-float">
            {/* Top Stage: Awareness */}
            <polygon
              points="20,30 180,30 150,70 50,70"
              fill="rgba(0, 168, 255, 0.15)"
              stroke="#00a8ff"
              strokeWidth="2"
              className="cursor-pointer hover:fill-brand-blue/30 transition-colors"
            />
            <text x="100" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" letterSpacing="1.5">AWARENESS (CLICKS: {getClicks()})</text>

            {/* Mid Stage: Consideration */}
            <polygon
              points="53,75 147,75 125,120 75,120"
              fill="rgba(0, 210, 255, 0.1)"
              stroke="#00d2ff"
              strokeWidth="2"
              className="cursor-pointer hover:fill-brand-cyan/20 transition-colors"
            />
            <text x="100" y="100" textAnchor="middle" fill="#00d2ff" fontSize="8" fontWeight="bold" letterSpacing="1">INTEREST (CTR: {ctr}%)</text>

            {/* Bottom Stage: Conversion */}
            <polygon
              points="78,125 122,125 108,170 92,170"
              fill="rgba(14, 165, 233, 0.25)"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              className="cursor-pointer hover:fill-sky-500/40 transition-colors"
            />
            <text x="100" y="148" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">SALES ({getConversions()})</text>

            {/* Animated particles flowing down based on budget size */}
            <circle cx="100" cy="40" r="3" fill="#00d2ff" className="animate-ping" style={{ animationDuration: adSpend > 5000 ? '1s' : '2.5s' }} />
            <circle cx="100" cy="90" r="2.5" fill="#00a8ff" className="animate-ping" style={{ animationDuration: adSpend > 5000 ? '0.8s' : '2s' }} />
          </svg>

          {/* Floating Indicators */}
          <div className="absolute bottom-[10%] right-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <Target className="w-3 h-3 text-brand-cyan" /> ROAS Driven
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
