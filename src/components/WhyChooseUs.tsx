"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, IndianRupee, HeadphonesIcon, MessageCircle } from "lucide-react";

interface PillarCard {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
  accentBg: string;
  accentGlow: string;
  accentBorder: string;
  stat: string;
  statNumber: number;
  statSuffix: string;
}

const pillars: PillarCard[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Projects delivered in 7–14 business days with quality-assured milestones",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-400/10",
    accentGlow: "shadow-[0_0_20px_rgba(34,211,238,0.25)]",
    accentBorder: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    stat: "7–14",
    statNumber: 14,
    statSuffix: " Days",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Premium quality at startup-friendly prices — no hidden costs",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentGlow: "shadow-[0_0_20px_rgba(52,211,153,0.25)]",
    accentBorder: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    stat: "0",
    statNumber: 0,
    statSuffix: " Hidden Costs",
  },
  {
    icon: HeadphonesIcon,
    title: "30-Day Free Support",
    description:
      "Post-launch bug fixes and support included free for 30 days",
    accent: "text-violet-400",
    accentBg: "bg-violet-400/10",
    accentGlow: "shadow-[0_0_20px_rgba(167,139,250,0.25)]",
    accentBorder: "hover:border-violet-400/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]",
    stat: "30",
    statNumber: 30,
    statSuffix: " Days Free",
  },
  {
    icon: MessageCircle,
    title: "Always Reachable",
    description:
      "Direct WhatsApp and phone access — real humans, not chatbots",
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
    accentGlow: "shadow-[0_0_20px_rgba(251,191,36,0.25)]",
    accentBorder: "hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    stat: "24/7",
    statNumber: 24,
    statSuffix: "/7 Access",
  },
];

function AnimatedCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="mt-4 pt-4 border-t border-white/5">
      <span className="text-2xl font-extrabold text-white tabular-nums">
        {label === "Affordable Pricing" ? "" : count}
        {label === "Affordable Pricing" ? "Zero" : ""}
      </span>
      <span className="text-sm text-slate-400 ml-1">{suffix}</span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 bg-[#020617] overflow-hidden border-t border-brand-border/10"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full radial-glow opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full radial-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">
              Our Promise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.2)]">
              Tech Inspira
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We combine speed, affordability, and quality to deliver digital
            solutions that truly make a difference.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`glass-card rounded-2xl p-6 flex flex-col transition-all duration-500 ${pillar.accentBorder}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${pillar.accentBg} ${pillar.accentGlow} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${pillar.accent}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {pillar.description}
                </p>

                {/* Animated Counter */}
                <AnimatedCounter
                  target={pillar.statNumber}
                  suffix={pillar.statSuffix}
                  label={pillar.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
