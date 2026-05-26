"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import InteractiveWorkflow from "./InteractiveWorkflow";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  serviceId: string;
  interactiveTool: React.ReactNode;
  interactiveObject: React.ReactNode;
  workflowSteps: WorkflowStep[];
}

export default function ServiceLayout({
  title,
  subtitle,
  serviceId,
  interactiveTool,
  interactiveObject,
  workflowSteps,
}: ServiceLayoutProps) {
  // Simple map to link to next services for continuous browsing
  const servicesList = [
    "web-development",
    "ui-ux-design",
    "mobile-app-development",
    "ai-automation",
    "digital-marketing",
    "seo-services",
    "branding-identity",
    "graphic-design",
  ];
  
  const currentIdx = servicesList.indexOf(serviceId);
  const nextServiceId = servicesList[(currentIdx + 1) % servicesList.length];
  
  const formatName = (id: string) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 selection:bg-brand-blue/30 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 pb-12 relative overflow-hidden">
        {/* Background 3D grid and glows */}
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none opacity-30 z-0">
          <div className="grid-3d-floor" />
        </div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full radial-glow opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Back button and breadcrumb */}
          <div className="mb-10">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all services
            </Link>
          </div>

          {/* Title Header */}
          <div className="max-w-4xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border/40 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              Service Details
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.25)]">
                {title}
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Interactive Playground Block (Side-by-Side: Left tool, Right 3D object) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-6 w-full">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-border/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-xl pointer-events-none" />
                {interactiveTool}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center w-full min-h-[350px]">
              {interactiveObject}
            </div>
          </div>

          {/* "How We Work" Workflow Section */}
          <div className="mb-24 relative">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-cyan">
                Our Workflow
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                How We Work For You
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Our systematic step-by-step process ensures transparency, accuracy, and pixel-perfect deliverables.
              </p>
            </div>

            {/* Interactive 3D Stepper Component */}
            <InteractiveWorkflow serviceId={serviceId} workflowSteps={workflowSteps} />
          </div>

          {/* Next Service Navigation */}
          <div className="border-t border-brand-border/20 pt-12 mb-12 flex justify-between items-center flex-wrap gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Next Service</span>
              <span className="text-lg font-bold text-white">{formatName(nextServiceId)}</span>
            </div>
            <Link
              href={`/services/${nextServiceId}`}
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,210,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300"
            >
              Explore Next <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Form Contact */}
      <Contact />
    </div>
  );
}
