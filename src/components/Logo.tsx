"use client";

import React from "react";

interface LogoProps {
  showSubtitle?: boolean;
  className?: string;
  iconSize?: number;
}

export default function Logo({ showSubtitle = false, className = "", iconSize = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Dynamic vector SVG Logo Icon */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: iconSize, height: iconSize * 1.15 }}
      >
        <svg
          viewBox="0 0 100 115"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(0,210,255,0.25)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Leaf/Shield Shape */}
          <path
            d="M 22 15 L 72 15 C 80 15 85 20 85 28 L 85 48 C 85 64 70 76 54 76 L 34 76 C 24 76 18 70 18 60 L 18 28 C 18 20 22 15 22 15 Z"
            stroke="url(#logoGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(3, 10, 28, 0.4)"
          />
          {/* Inner Swoosh Curve */}
          <path
            d="M 18 60 C 18 36 38 15 85 15"
            stroke="url(#logoGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Three Pixels (Little Squares) at bottom left */}
          <rect x="23" y="86" width="8" height="8" rx="2" fill="#00a8ff" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
          <rect x="36" y="81" width="10" height="10" rx="2.5" fill="#00d2ff" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <rect x="30" y="97" width="6" height="6" rx="1.5" fill="#0ea5e9" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Gradients */}
          <defs>
            <linearGradient id="logoGrad" x1="18" y1="15" x2="85" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white leading-none">
          TECH INSPIRA
        </span>
        <span className="text-[10px] sm:text-xs tracking-[0.25em] font-extrabold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent uppercase leading-tight mt-1">
          INNOVATION
        </span>
        {showSubtitle && (
          <span className="text-[7px] sm:text-[8px] tracking-[0.18em] font-bold text-slate-400 uppercase mt-1 border-t border-brand-border/20 pt-1">
            UI/UX DESIGN & WEB DEVELOPMENT
          </span>
        )}
      </div>
    </div>
  );
}
