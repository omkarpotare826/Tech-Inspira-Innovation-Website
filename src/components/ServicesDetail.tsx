"use client";

import React, { useState } from "react";
import {
  Zap,
  Smartphone,
  ShieldAlert,
  LineChart,
  Settings,
  Users,
  Layers,
  PenTool,
  Clock,
  IndianRupee,
  Target,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
} from "lucide-react";

export default function ServicesDetail() {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = 3;

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative py-24 bg-[#020617] border-t border-brand-border/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Web Development", "UI/UX Design", "AI Automation"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveSlide(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                activeSlide === idx
                  ? "bg-brand-cyan text-[#020617] border-brand-cyan shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                  : "bg-transparent text-slate-400 border-brand-border/40 hover:border-brand-cyan/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slide Window */}
        <div className="relative w-full overflow-hidden min-h-[600px]">
          
          {/* SLIDE 0: Web Development */}
          {activeSlide === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 animate-fadeIn">
              
              {/* Left Column: Spec lists */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-border flex items-center justify-center">
                      <Zap className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Service Details</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
                    Website <br />
                    <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,168,255,0.2)]">
                      Development
                    </span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed pt-2">
                    We build fast, secure & responsive websites that not only look great but also deliver results.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-2">
                  {[
                    {
                      title: "Fast & Optimized",
                      desc: "High performance websites for better user experience.",
                      icon: Zap,
                    },
                    {
                      title: "Fully Responsive",
                      desc: "Perfect display on all devices desktop, tablet & mobile.",
                      icon: Smartphone,
                    },
                    {
                      title: "Secure & Reliable",
                      desc: "Advanced security & clean code for a safe website.",
                      icon: ShieldAlert,
                    },
                    {
                      title: "SEO Friendly",
                      desc: "Built with best SEO practices to rank higher on Google.",
                      icon: LineChart,
                    },
                    {
                      title: "Easy to Manage",
                      desc: "User-friendly & easy to update and maintain.",
                      icon: Settings,
                    },
                  ].map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div key={feat.title} className="flex gap-4 group">
                        <div className="w-8 h-8 rounded-full border border-brand-border/40 bg-brand-dark/50 flex items-center justify-center shrink-0 group-hover:border-brand-cyan transition-colors">
                          <Icon className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{feat.title}</h4>
                          <p className="text-xs text-slate-400 font-medium leading-normal">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Visual Mockup + Stats */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-full max-w-[420px] aspect-[1.4] bg-[#020617] rounded-xl border border-brand-border shadow-2xl p-2.5 overflow-hidden">
                  
                  {/* Laptop Mock content */}
                  <div className="w-full h-full bg-[#070f21] rounded-lg overflow-hidden flex flex-col justify-between p-3 relative select-none">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-brand-border/15 pb-1">
                      <span className="text-[7px] font-bold text-white tracking-widest">YourBrand</span>
                      <div className="flex gap-1.5 text-[5px] font-medium text-slate-400">
                        <span>About</span>
                        <span>Services</span>
                        <span>Portfolio</span>
                      </div>
                    </div>

                    {/* Banner */}
                    <div className="grid grid-cols-2 gap-2 items-center h-full">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-white leading-tight">
                          We Build Digital Experiences That <span className="text-brand-cyan">Drive Growth</span>
                        </div>
                        <div className="text-[5px] text-slate-400">
                          Modern websites. Strong performance.
                        </div>
                        <div className="px-1.5 py-0.5 bg-brand-cyan rounded-full inline-block text-[4px] text-[#020617] font-semibold">
                          Get Started
                        </div>
                      </div>
                      {/* Mountains Background preview */}
                      <div className="w-full h-[85%] rounded bg-[#0b1a38] border border-brand-border/10 overflow-hidden relative flex items-end">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10" />
                        <svg className="w-full h-[60%] text-brand-cyan/20" viewBox="0 0 100 100" fill="currentColor">
                          <polygon points="0,100 30,30 60,100" />
                          <polygon points="40,100 70,40 100,100" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Performance overlay badge */}
                  <div className="absolute top-0 sm:-top-4 right-0 sm:-right-4 w-24 h-24 rounded-2xl glass-card flex flex-col items-center justify-center p-2.5 scale-90 border border-brand-cyan/30">
                    <span className="text-[9px] uppercase font-bold text-slate-400">Performance</span>
                    <div className="relative w-10 h-10 flex items-center justify-center mt-1">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="20" cy="20" r="16" stroke="rgba(0,168,255,0.15)" strokeWidth="3" fill="transparent" />
                        <circle cx="20" cy="20" r="16" stroke="#00d2ff" strokeWidth="3" fill="transparent" strokeDasharray="100" strokeDashoffset="2" />
                      </svg>
                      <span className="absolute text-[8px] font-extrabold text-white">98%</span>
                    </div>
                    <span className="text-[7px] font-semibold text-brand-cyan mt-1">Excellent</span>
                  </div>

                  {/* Speed gauge overlay badge */}
                  <div className="absolute bottom-2 sm:bottom-6 left-0 sm:-left-6 w-24 h-20 rounded-2xl glass-card flex flex-col items-center justify-center p-2 scale-90 border border-brand-cyan/30">
                    <span className="text-[9px] uppercase font-bold text-slate-400">Website Speed</span>
                    <div className="flex items-center gap-1 mt-1.5 text-white">
                      <Zap className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                      <span className="text-sm font-extrabold">1.2s</span>
                    </div>
                    <span className="text-[7px] font-semibold text-brand-cyan">Fast Loading</span>
                  </div>

                  {/* Responsive overlay badge */}
                  <div className="absolute bottom-0 sm:-bottom-4 right-0 sm:-right-2 w-28 h-12 rounded-xl glass-card flex items-center justify-around px-2 border border-brand-cyan/20">
                    <span className="text-[8px] uppercase font-bold text-slate-400">Responsive</span>
                    <div className="flex gap-1.5 text-brand-cyan">
                      <Smartphone className="w-3.5 h-3.5" />
                      <div className="w-3.5 h-3.5 border border-brand-cyan rounded flex items-center justify-center text-[5px] font-extrabold">TB</div>
                      <div className="w-4 h-3 border border-brand-cyan rounded flex items-center justify-center text-[5px] font-extrabold">DK</div>
                    </div>
                  </div>

                </div>

                {/* Technologies List */}
                <div className="w-full max-w-[420px] mt-10 p-5 rounded-2xl bg-brand-dark/40 border border-brand-border/25">
                  <h4 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Technologies We Use
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 items-center justify-items-center text-center">
                    {[
                      { name: "WordPress", color: "text-blue-400" },
                      { name: "Laravel", color: "text-red-500" },
                      { name: "React", color: "text-cyan-400" },
                      { name: "Next.js", color: "text-white" },
                      { name: "PHP", color: "text-indigo-400" },
                      { name: "MySQL", color: "text-sky-500" },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="w-full py-1.5 rounded-lg border border-brand-border/20 bg-brand-dark/50 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all duration-300"
                      >
                        <div className={`text-[10px] font-extrabold tracking-wider ${tech.color}`}>
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* SLIDE 1: UI/UX Design */}
          {activeSlide === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 animate-fadeIn">
              
              {/* Left Column: Spec lists */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-border flex items-center justify-center">
                      <PenTool className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Service Details</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
                    UI/UX <br />
                    <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,168,255,0.2)]">
                      Design
                    </span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed pt-2">
                    We design beautiful, intuitive and user-centered interfaces that create memorable digital experiences.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-2">
                  {[
                    {
                      title: "User-Centered Approach",
                      desc: "We design with users in mind to create intuitive experiences.",
                      icon: Users,
                    },
                    {
                      title: "Modern & Minimal",
                      desc: "Clean, modern and minimal designs that leave a lasting impression.",
                      icon: Smartphone,
                    },
                    {
                      title: "Wireframing & Prototyping",
                      desc: "Structured wireframes and interactive prototypes for better visualization.",
                      icon: Layers,
                    },
                    {
                      title: "Pixel Perfect Design",
                      desc: "High-quality, pixel-perfect UI that enhances brand value.",
                      icon: PenTool,
                    },
                  ].map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div key={feat.title} className="flex gap-4 group">
                        <div className="w-8 h-8 rounded-full border border-brand-border/40 bg-brand-dark/50 flex items-center justify-center shrink-0 group-hover:border-brand-cyan transition-colors">
                          <Icon className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{feat.title}</h4>
                          <p className="text-xs text-slate-400 font-medium leading-normal">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Visual Mockup + Flowchart */}
              <div className="lg:col-span-6 flex flex-col items-center">
                
                {/* Two overlapping iPhones */}
                <div className="relative w-full max-w-[340px] aspect-[0.7] flex items-center justify-center mb-8">
                  {/* Backdrop glowing halo */}
                  <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-cyan/20 blur-xl animate-pulse" />

                  {/* Main iPhone */}
                  <div className="absolute left-[5%] top-0 w-[55%] aspect-[0.5] bg-[#020617] rounded-[24px] border-4 border-[#374151] shadow-2xl overflow-hidden z-20">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-[#374151] rounded-full z-20" />
                    
                    {/* UI Content */}
                    <div className="absolute inset-0 p-3 pt-5 pb-3 bg-[#050b18] flex flex-col justify-between select-none">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <span className="text-[6px] text-slate-400 font-bold">Hello, Alex 👋</span>
                            <span className="text-[4px] text-slate-500">Good Morning!</span>
                          </div>
                          <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                        </div>
                        <div className="h-4 bg-slate-800/40 rounded flex items-center px-1">
                          <span className="text-[4px] text-slate-500">Search anything...</span>
                        </div>
                        <div className="p-2 rounded-lg bg-brand-cyan/5 border border-brand-cyan/15 space-y-1">
                          <span className="text-[4px] text-slate-400 block uppercase font-bold">Total Balance</span>
                          <span className="text-xs font-bold text-white block leading-none">₹2,48,500.00</span>
                          <span className="text-[4px] text-green-400 block font-semibold">↑ 12.5%</span>
                        </div>
                        {/* Tiny Graph */}
                        <svg className="w-full h-8 text-brand-cyan" viewBox="0 0 100 30" fill="none">
                          <path d="M0,25 Q15,5 30,18 T60,5 T90,20 L100,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M0,25 Q15,5 30,18 T60,5 T90,20 L100,10 L100,30 L0,30 Z" fill="currentColor" fillOpacity="0.05" />
                        </svg>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-1.5">
                        {Array(4).fill(0).map((_, i) => (
                          <div key={i} className="aspect-square rounded-md bg-[#0a142c] border border-brand-border/10 flex items-center justify-center">
                            <span className="text-[4px] text-brand-cyan font-bold">Icon</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Secondary iPhone (overlapping) */}
                  <div className="absolute right-[5%] bottom-0 w-[55%] aspect-[0.5] bg-[#020617] rounded-[24px] border-4 border-[#374151] shadow-2xl overflow-hidden z-10 opacity-80">
                    <div className="absolute inset-0 p-3 pt-6 pb-4 bg-[#030814] flex flex-col justify-between select-none">
                      <div className="w-6 h-6 rounded-full bg-brand-cyan/15 flex items-center justify-center">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-bold text-white block leading-tight">Make Your Experience Better</span>
                        <span className="text-[5px] text-slate-400 block">We design products that are easy to use and love.</span>
                      </div>
                      <div className="w-full py-1 bg-brand-cyan rounded-md text-[5px] font-bold text-[#020617] text-center uppercase tracking-wider">
                        Get Started
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design Process Roadmap */}
                <div className="w-full max-w-[420px] p-5 rounded-2xl bg-brand-dark/40 border border-brand-border/25">
                  <h4 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Our Design Process
                  </h4>
                  <div className="flex justify-between items-center">
                    {[
                      { step: "01", name: "Research" },
                      { step: "02", name: "Wireframe" },
                      { step: "03", name: "Design" },
                      { step: "04", name: "Prototype" },
                      { step: "05", name: "Deliver" },
                    ].map((step, idx) => (
                      <React.Fragment key={step.name}>
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded-full border border-brand-cyan/30 bg-brand-dark/80 text-brand-cyan text-[10px] font-extrabold flex items-center justify-center shadow-[0_0_10px_rgba(0,168,255,0.1)]">
                            {step.step}
                          </div>
                          <span className="text-[8px] font-semibold tracking-wider text-slate-300 mt-1.5 uppercase">
                            {step.name}
                          </span>
                        </div>
                        {idx < 4 && (
                          <div className="flex-1 h-[1.5px] bg-brand-cyan/25 mx-1 hidden sm:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* SLIDE 2: AI Automation */}
          {activeSlide === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 animate-fadeIn">
              
              {/* Left Column: Spec lists */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-border flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-brand-cyan animate-spin" style={{ animationDuration: '4s' }} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Service Details</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
                    AI <br />
                    <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,168,255,0.2)]">
                      Automation
                    </span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed pt-2">
                    Smarter Workflows. Better Results. Less Effort.<br />
                    We help businesses automate repetitive tasks, save time, reduce costs and focus on what really matters - Growth.
                  </p>
                </div>

                {/* 4 Benefits Icons */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Save Time", icon: Clock },
                    { label: "Reduce Costs", icon: IndianRupee },
                    { label: "Improve Accuracy", icon: Target },
                    { label: "Boost Productivity", icon: TrendingUp },
                  ].map((ben) => {
                    const Icon = ben.icon;
                    return (
                      <div key={ben.label} className="flex items-center gap-3 p-3 rounded-xl border border-brand-border/20 bg-brand-dark/30 hover:border-brand-cyan/35 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">{ben.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* What We Automate Tags */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">What We Automate</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "CRM Automation",
                      "Email Automation",
                      "Lead Management",
                      "Appointment Scheduling",
                      "Social Media Automation",
                      "AI Chatbots & Support",
                    ].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg border border-brand-border/20 bg-[#081124] text-[10px] sm:text-xs font-semibold text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Robot illustration + Quote */}
              <div className="lg:col-span-6 flex flex-col items-center">
                
                {/* Robot Graphics Frame */}
                <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 radial-glow-strong opacity-20 blur-xl" />
                  
                  {/* Orbit node layout */}
                  <div className="relative w-[70%] aspect-square rounded-full border border-brand-cyan/20 flex items-center justify-center">
                    
                    {/* Cute Robot SVG */}
                    <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] drop-shadow-[0_10px_20px_rgba(0,168,255,0.3)] animate-float">
                      {/* Body */}
                      <rect x="30" y="45" width="40" height="35" rx="8" fill="#1e293b" stroke="#00d2ff" strokeWidth="2.5" />
                      {/* Head */}
                      <rect x="25" y="15" width="50" height="30" rx="12" fill="#0f172a" stroke="#00d2ff" strokeWidth="2.5" />
                      {/* Eyes Screen */}
                      <rect x="32" y="21" width="36" height="15" rx="6" fill="#020617" stroke="#00a8ff" strokeWidth="1" />
                      {/* Glowing Blue Eyes */}
                      <circle cx="43" cy="28" r="3" fill="#00d2ff" className="animate-pulse" />
                      <circle cx="57" cy="28" r="3" fill="#00d2ff" className="animate-pulse" />
                      {/* Ears/Antennas */}
                      <circle cx="23" cy="30" r="3.5" fill="#1e293b" stroke="#00d2ff" strokeWidth="1.5" />
                      <circle cx="77" cy="30" r="3.5" fill="#1e293b" stroke="#00d2ff" strokeWidth="1.5" />
                      <line x1="50" y1="15" x2="50" y2="8" stroke="#00d2ff" strokeWidth="2" />
                      <circle cx="50" cy="6" r="3.5" fill="#00d2ff" />
                      {/* Hands typing */}
                      <circle cx="25" cy="60" r="4.5" fill="#1e293b" stroke="#00d2ff" strokeWidth="2" />
                      <circle cx="75" cy="60" r="4.5" fill="#1e293b" stroke="#00d2ff" strokeWidth="2" />
                      {/* Laptop */}
                      <path d="M35 80 L65 80 L72 90 L28 90 Z" fill="#0f172a" stroke="#00d2ff" strokeWidth="2" />
                    </svg>

                    {/* Orbiting Tech Nodes */}
                    {[
                      { name: "Workflow", top: "-5%", left: "45%" },
                      { name: "Chatbot", top: "25%", left: "85%" },
                      { name: "Data", top: "75%", left: "72%" },
                      { name: "Reporting", top: "80%", left: "18%" },
                      { name: "API", top: "25%", left: "-5%" },
                    ].map((node) => (
                      <div
                        key={node.name}
                        className="absolute px-2.5 py-1.5 rounded-lg border border-brand-border bg-brand-dark text-[8px] font-bold uppercase tracking-widest text-brand-cyan shadow-[0_0_10px_rgba(0,168,255,0.1)] hover:border-brand-cyan/70 hover:shadow-[0_0_15px_rgba(0,210,255,0.25)] transition-all duration-300 pointer-events-auto"
                        style={{ top: node.top, left: node.left }}
                      >
                        {node.name}
                      </div>
                    ))}

                  </div>
                </div>

                {/* Quote block */}
                <div className="w-full max-w-[420px] p-5 rounded-2xl glass-card border border-brand-cyan/20 text-center relative mt-6">
                  <p className="text-base sm:text-lg font-script font-bold tracking-wide italic text-brand-cyan">
                    "Let AI handle the repetitive. You focus on growing your business."
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Footer of slider (Slide indicators & Arrows) */}
          <div className="mt-12 flex justify-between items-center border-t border-brand-border/15 pt-8">
            <div className="flex gap-1.5 items-center">
              {Array(totalSlides).fill(0).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? "w-8 bg-brand-cyan" : "w-2 bg-brand-border/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Swipe left / click arrows
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-lg border border-brand-border/40 bg-brand-dark/80 flex items-center justify-center text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-lg border border-brand-border/40 bg-brand-dark/80 flex items-center justify-center text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
