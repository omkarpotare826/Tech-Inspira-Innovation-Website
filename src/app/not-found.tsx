"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,168,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,168,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full radial-glow opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full radial-glow opacity-20 pointer-events-none" />

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <div className="text-center space-y-8 max-w-lg">
          {/* 404 Number */}
          <h1 className="text-[10rem] sm:text-[14rem] font-extrabold leading-none tracking-tighter bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-blue bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,168,255,0.3)] select-none">
            404
          </h1>

          {/* Message */}
          <div className="space-y-3 -mt-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Page Not Found
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Back to Home Button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-cyan text-[#020617] text-sm font-semibold uppercase tracking-wider hover:bg-[#00a8ff] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-brand-border" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-brand-border" />
          </div>
        </div>
      </div>
    </main>
  );
}
