"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const AVATAR_COLORS = [
  {
    bg: "linear-gradient(135deg, rgba(245,158,11,0.25), rgba(234,88,12,0.15))",
    border: "rgba(245,158,11,0.5)",
    glow: "rgba(245,158,11,0.2)",
    text: "#fbbf24",
    tag: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  {
    bg: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(239,68,68,0.15))",
    border: "rgba(249,115,22,0.5)",
    glow: "rgba(249,115,22,0.2)",
    text: "#fb923c",
    tag: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  },
];

const REVIEWS = [
  {
    name: "Kunal Gunbote",
    role: "Owner",
    company: "Gunbote Farsan House",
    location: "Pune",
    avatar: "KG",
    rating: 5,
    tag: "E-commerce & Web Design",
    quote:
      "Our farsan business has been running since 1990, but our old website was slow and looked completely outdated. Tech Inspira transformed our online presence — the new store loads in under 2 seconds, product pages beautifully showcase our Chivda, Bakarwadi, and Shev with full ingredient details, and customers can now order directly via Zomato and Swiggy. Online engagement jumped over 40% in the very first month. Khup chaan kaam!",
  },
  {
    name: "Piyush Jawale",
    role: "Founder",
    company: "Samarth Papad",
    location: "Gruh Udyog, Maharashtra",
    avatar: "PJ",
    rating: 5,
    tag: "Razorpay & Online Store",
    quote:
      "Before Tech Inspira, our customers had to call us manually to place every order — it was slow and hard to scale. Now we have a proper online store with Razorpay checkout built in. People can order our Urad, Moong, and Sabudana papads directly from their phones in one click. Monthly order volume is up 38% and we're reaching customers well beyond our local area. The site captures the traditional, homemade feel of our product perfectly. Very professional team!",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((next + REVIEWS.length) % REVIEWS.length);
      setAnimating(false);
    }, 220);
  };

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(active + 1), 6000);
    return () => clearInterval(t);
  }, [active]);

  const rev = REVIEWS[active];
  const ac = AVATAR_COLORS[active];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#020617] overflow-hidden border-t border-white/[0.05]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #00d2ff 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] font-bold text-brand-cyan uppercase">
              Client Testimonials
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Our{" "}
            <span
              className="bg-gradient-to-r from-brand-blue via-brand-cyan to-purple-400 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 20px rgba(0,210,255,0.25))" }}
            >
              Clients Say
            </span>
          </h2>
          <p className="text-slate-500 text-sm font-medium max-w-md mx-auto">
            Real results from real businesses we&apos;ve helped grow online.
          </p>
        </div>

        {/* ── Featured Quote Panel ── */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 mb-10 overflow-hidden transition-all duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(4,14,36,0.95) 0%, rgba(2,8,24,0.98) 100%)",
            border: `1px solid ${ac.border}`,
            boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 0 40px ${ac.glow}`,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
          }}
        >
          {/* Quote icon watermark */}
          <Quote
            className="absolute top-6 right-8 w-20 h-20 opacity-[0.04]"
            style={{ color: ac.text }}
          />

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar column */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black tracking-wider select-none"
                style={{
                  background: ac.bg,
                  border: `2px solid ${ac.border}`,
                  color: ac.text,
                  boxShadow: `0 0 30px ${ac.glow}`,
                }}
              >
                {rev.avatar}
              </div>
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote content */}
            <div className="flex-1 space-y-5">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${ac.tag}`}>
                ✦ {rev.tag}
              </div>

              <blockquote
                className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed"
                style={{ fontStyle: "normal" }}
              >
                <span className="text-2xl mr-1 leading-none" style={{ color: ac.text }}>"</span>
                {rev.quote}
                <span className="text-2xl ml-1 leading-none" style={{ color: ac.text }}>"</span>
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div>
                  <div className="text-base font-black" style={{ color: ac.text }}>
                    {rev.name}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                    {rev.role} · {rev.company} · {rev.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Three Client Cards (always visible) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {REVIEWS.map((r, i) => {
            const color = AVATAR_COLORS[i];
            const isActive = i === active;
            return (
              <button
                key={r.name}
                onClick={() => go(i)}
                className="text-left rounded-2xl p-5 transition-all duration-400 cursor-pointer group"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(4,14,36,0.98), rgba(8,20,50,0.95))"
                    : "rgba(4,10,28,0.6)",
                  border: `1px solid ${isActive ? color.border : "rgba(255,255,255,0.07)"}`,
                  boxShadow: isActive ? `0 0 30px ${color.glow}` : "none",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{
                      background: color.bg,
                      border: `1px solid ${color.border}`,
                      color: color.text,
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-black text-white leading-tight">{r.name}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                      {r.company}
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                  {r.quote}
                </p>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Navigation ── */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => go(active - 1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="h-1.5 rounded-full transition-all duration-400 cursor-pointer"
                style={{
                  width: i === active ? 28 : 6,
                  background: i === active ? AVATAR_COLORS[i].text : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(active + 1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
