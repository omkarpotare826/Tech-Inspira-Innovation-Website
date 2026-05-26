"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#020617] overflow-hidden border-t border-brand-border/10">
      
      {/* Neural Network Background Visuals */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none z-0" fill="none">
        <path d="M -100,200 C 150,150 250,250 400,200 S 650,150 800,200 S 1050,250 1200,200 S 1450,150 1600,200" stroke="#00d2ff" strokeWidth="1.5" strokeDasharray="6, 12" />
        <path d="M -100,400 C 100,450 300,350 500,400 S 700,450 900,400 S 1100,350 1300,400 S 1500,450 1700,400" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6, 12" />
        <circle cx="250" cy="180" r="3" fill="#00d2ff" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="250" cy="180" r="2.5" fill="#00d2ff" />
        <circle cx="900" cy="400" r="3" fill="#a855f7" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="900" cy="400" r="2.5" fill="#a855f7" />
      </svg>

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full radial-glow opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Storytelling & Quote */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Brands Through <br />
                <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.2)]">Digital Innovation</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                Tech Inspira Innovation is a premium soft-futuristic digital agency. We construct state-of-the-art websites, intuitive user interfaces, and automated AI workflows that streamline business pipelines and scale operations.
              </p>
            </div>

            {/* Quote block */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#030d22] to-[#04122d] border border-brand-border/40 shadow-xl overflow-hidden group">
              <div className="absolute -right-4 -bottom-6 text-brand-blue opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-36 h-36" />
              </div>
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-brand-cyan shrink-0 animate-pulse" />
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-bold tracking-wide text-white font-script italic">
                    Where Creativity meets Technology
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    Tech Inspira Tagline
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Project Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center perspective-3d group">
            <div className="tilt-3d-card relative w-full max-w-[520px] flex flex-col items-center gap-6">
              
              {/* Browser Frame with Real Screenshot */}
              <div className="depth-layer-1 w-full rounded-2xl border border-brand-border/30 bg-slate-950/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-brand-border/20 bg-slate-900/60">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 h-5 rounded-md bg-slate-950/60 flex items-center justify-center">
                    <span className="text-[9px] text-slate-500 font-mono">gunbotefarsanhouse.in</span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/farsan-hero.png"
                    alt="Gunbote Farsan House — Built by Tech Inspira"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Mobile Preview */}
              <div className="depth-layer-3 absolute -bottom-4 right-0 sm:-right-4 w-[120px] rounded-[20px] border-[4px] border-slate-700 bg-slate-950 shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden z-30">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-700 rounded-full z-20" />
                <img
                  src="/images/papad-hero.png"
                  alt="Samarth Papad mobile — Built by Tech Inspira"
                  className="w-full aspect-[9/16] object-cover object-top"
                />
              </div>

              {/* Caption badge */}
              <div className="absolute -bottom-4 left-4 px-3 py-1.5 rounded-xl bg-brand-dark/90 border border-brand-border/30 text-[9px] font-bold text-brand-cyan uppercase tracking-wider shadow-lg z-20">
                ✦ Live Projects by Tech Inspira
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
