"use client";

import React from "react";
import {
  Code2,
  PenTool,
  Smartphone,
  Bot,
  Megaphone,
  TrendingUp,
  Paintbrush,
  Palette,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  startingPrice: string;
}

export default function ServicesOverview() {
  const services: ServiceItem[] = [
    {
      id: "web-development",
      icon: Code2,
      title: "Web Development",
      description: "Fast, secure & responsive websites tailored to your business.",
      startingPrice: "From ₹4,999",
    },
    {
      id: "ui-ux-design",
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centered designs that create smooth digital experiences.",
      startingPrice: "From ₹3,999",
    },
    {
      id: "mobile-app-development",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Powerful mobile apps built for Android & iOS platforms.",
      startingPrice: "From ₹19,999",
    },
    {
      id: "ai-automation",
      icon: Bot,
      title: "AI Automation",
      description: "Automate workflows & boost productivity with smart AI solutions.",
      startingPrice: "From ₹9,999",
    },
    {
      id: "digital-marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Reach the right audience and grow your brand online.",
      startingPrice: "From ₹4,999/mo",
    },
    {
      id: "seo-services",
      icon: TrendingUp,
      title: "SEO Services",
      description: "Improve visibility, rank higher & grow organically.",
      startingPrice: "From ₹2,999/mo",
    },
    {
      id: "branding-identity",
      icon: Paintbrush,
      title: "Branding & Identity",
      description: "Build a strong brand identity that leaves a lasting impression.",
      startingPrice: "From ₹6,999",
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Design",
      description: "Creative designs for your social media, posters, banners & more.",
      startingPrice: "From ₹999",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background glow and grids */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full radial-glow opacity-20 pointer-events-none" />
      
      {/* 3D scrolling floor grid */}
      <div className="absolute bottom-0 left-0 w-full h-[350px] overflow-hidden pointer-events-none opacity-35">
        <div className="grid-3d-floor" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header (Matching Slide 2 exactly) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">
              What We Offer
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-none relative inline-block">
            <span className="absolute -top-10 left-0 text-3xl font-script text-brand-cyan font-normal capitalize">
              Our
            </span>
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.35)]">
              SERVICES
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed pt-4">
            We provide end-to-end <span className="text-brand-cyan">digital solutions</span> to
            help your business grow, stand out and succeed in the digital world.
          </p>
        </div>

        {/* 8 Services Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="perspective-3d group relative block cursor-pointer"
              >
                <div className="tilt-3d-card relative p-6 rounded-2xl glass-card flex flex-col justify-between items-start space-y-6 h-full min-h-[220px]">
                  {/* Accent blue card glow behind icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-brand-blue/10 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon Container with glowing ring (layer 2) */}
                  <div className="depth-layer-2 relative w-12 h-12 rounded-xl flex items-center justify-center border border-brand-border bg-brand-dark shadow-[0_0_15px_rgba(0,168,255,0.15)] group-hover:border-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-cyan transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text Details (layer 1) */}
                  <div className="depth-layer-1 space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-brand-cyan transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                      {service.description}
                    </p>
                    <span className='inline-block mt-2 px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase tracking-wider'>
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Corner link button (layer 1) */}
                  <div className="depth-layer-1 w-full flex justify-end items-center text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-brand-cyan transition-colors pt-2">
                    <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Details
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
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
