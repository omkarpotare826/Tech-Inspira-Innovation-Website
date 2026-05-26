"use client";

import React from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "STARTER",
    price: "₹4,999",
    period: "one-time",
    description: "Perfect for personal brands & landing pages",
    features: [
      "Single Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "7-Day Delivery",
    ],
    popular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "₹14,999",
    period: "one-time",
    description: "Best for growing businesses",
    features: [
      "Multi-Page Website (up to 5)",
      "Custom UI/UX Design",
      "SEO Optimized",
      "Social Media Integration",
      "Razorpay/Payment Gateway",
      "14-Day Delivery",
      "30-Day Free Support",
    ],
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "₹29,999+",
    period: "starting at",
    description: "Full-scale digital transformation",
    features: [
      "Unlimited Pages",
      "E-commerce Store",
      "AI Chatbot Integration",
      "Advanced SEO & Analytics",
      "Custom Admin Dashboard",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-[#020617] overflow-hidden border-t border-brand-border/10"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full radial-glow opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full radial-glow opacity-15 pointer-events-none" />

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,168,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,168,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">
              Packages
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Simple{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,168,255,0.2)]">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            No surprises, no hidden fees. Choose a plan that fits your needs and
            let&apos;s build something amazing together.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                tier.popular
                  ? "glass-card border-brand-cyan/40 shadow-[0_0_40px_rgba(0,210,255,0.15)] lg:scale-105 lg:-my-4 z-10"
                  : "glass-card"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-[11px] font-bold uppercase tracking-wider text-[#020617] shadow-[0_4px_15px_rgba(0,210,255,0.3)]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.15em] ${
                    tier.popular ? "text-brand-cyan" : "text-slate-500"
                  }`}
                >
                  {tier.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {tier.price}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-1 block">
                  {tier.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-8 pb-6 border-b border-white/5">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3.5 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.popular
                          ? "bg-brand-cyan/15 text-brand-cyan"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? "bg-brand-cyan text-[#020617] hover:bg-[#00a8ff] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)]"
                    : "border border-brand-border/40 text-slate-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(0,210,255,0.1)]"
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-slate-500 mt-12">
          All prices in INR. Custom packages available on request.{" "}
          <a
            href="#contact"
            className="text-brand-cyan hover:underline transition-colors"
          >
            Contact us
          </a>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
}
