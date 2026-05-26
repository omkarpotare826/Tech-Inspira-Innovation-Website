"use client";

import React, { useState } from "react";
import { ArrowUpRight, Github, Monitor, Layers } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Gunbote Farsan House",
      tagline: "Premium Digital Commerce Experience",
      description: "Modernizing a legacy Maharashtrian snack brand established in 1990 through premium interactive ecommerce, cinematic food presentation, and glassmorphic UI.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "GSAP Animations"],
      stats: "+48% User Engagement",
      href: "/portfolio/gunbote-farsan-house",
      accent: "from-amber-500 to-orange-600",
      glow: "rgba(245, 158, 11, 0.25)",
      image: "/images/farsan-hero.png"
    },
    {
      id: 2,
      title: "Samarth Papad",
      tagline: "Homemade Quality, Modern Checkout",
      description: "Bringing authentic, handmade papad varieties online with a fast-loading storefront, direct category filters, and an integrated Razorpay payment gateway.",
      tags: ["Next.js", "React", "Razorpay API", "Tailwind CSS", "TypeScript"],
      stats: "+38% Monthly Orders",
      href: "/portfolio/samarth-papad",
      accent: "from-orange-500 to-amber-600",
      glow: "rgba(249, 115, 22, 0.25)",
      image: "/images/papad-hero.png"
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-[#020617] overflow-hidden border-t border-brand-border/10">
      {/* Visual background highlights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full radial-glow opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">
              Recent Deployments
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-none relative inline-block">
            <span className="absolute -top-10 left-0 text-3xl font-script text-brand-cyan font-normal capitalize">
              Our
            </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.3)]">
              PORTFOLIO
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed pt-4">
            Explore some of our latest <span className="text-brand-cyan">production builds</span> combining advanced frontend design with regional e-commerce transformations.
          </p>
        </div>

        {/* 3D Showcase Grid (2 columns max-w-5xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj) => {
            const isActive = activeProject === proj.id;
            return (
              <Link
                key={proj.id}
                href={proj.href}
                onMouseEnter={() => setActiveProject(proj.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="perspective-3d relative group block cursor-pointer"
              >
                {/* Accent neon card shadow glow */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ backgroundColor: proj.glow, transform: "scale(0.95)" }}
                />

                <div className="tilt-3d-card relative p-8 rounded-3xl bg-gradient-to-br from-[#040e24]/90 to-[#020818]/90 border border-brand-border/25 shadow-2xl flex flex-col justify-between items-start h-full min-h-[380px] overflow-hidden">
                  
                  {/* Decorative Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-10" />

                  <div className="w-full space-y-6 relative z-20">
                    {/* Top row */}
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-brand-border/30 flex items-center justify-center">
                        <Layers className="w-5 h-5 text-brand-cyan" />
                      </div>
                      
                      <div className="flex gap-2">
                        <div 
                          className="w-8 h-8 rounded-full bg-slate-900/80 border border-brand-border/20 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </div>
                        <div 
                          className="w-8 h-8 rounded-full bg-slate-900/80 border border-brand-border/20 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                        >
                          <Monitor className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className='w-full h-40 rounded-xl overflow-hidden border border-brand-border/20 bg-slate-950/50'>
                      <img src={proj.image} alt={proj.title} className='w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500' />
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-2xl font-black text-white group-hover:text-brand-cyan transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                        {proj.tagline}
                      </span>
                    </div>

                    {/* Paragraph */}
                    <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed text-left">
                      {proj.description}
                    </p>

                    {/* Badges Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full border border-brand-border/20 bg-slate-950/40 text-[9px] font-bold text-slate-300 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stats & CTA */}
                  <div className="w-full border-t border-brand-border/10 pt-4 mt-6 flex justify-between items-center relative z-20">
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Impact Metric</span>
                      <span className="text-xs font-extrabold text-brand-cyan">{proj.stats}</span>
                    </div>

                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors"
                    >
                      Case Study
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
