"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Globe2, Layers3 } from "lucide-react";

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  speed: Math.random() * 0.3 + 0.1,
  opacity: Math.random() * 0.6 + 0.2,
  hue: Math.floor(Math.random() * 60) + 180, // cyan to purple range
}));

const SERVICES = [
  { icon: Zap, label: "AI Automation", color: "#a78bfa", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.25)" },
  { icon: Globe2, label: "Web Development", color: "#22d3ee", bg: "rgba(34,211,238,0.10)", border: "rgba(34,211,238,0.25)" },
  { icon: Layers3, label: "UI/UX Design", color: "#f0abfc", bg: "rgba(240,171,252,0.10)", border: "rgba(240,171,252,0.25)" },
  { icon: Sparkles, label: "SEO & Growth", color: "#6ee7b7", bg: "rgba(110,231,183,0.10)", border: "rgba(110,231,183,0.25)" },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [spotX, setSpotX] = useState(0);
  const [spotY, setSpotY] = useState(0);
  const [time, setTime] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animate time
  useEffect(() => {
    let frame: number;
    const tick = () => {
      setTime(t => t + 0.005);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Track mouse for spotlight + parallax
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      setMouse({ x: nx, y: ny });
      setSpotX(e.clientX - r.left);
      setSpotY(e.clientY - r.top);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const parallaxStyle = (depth: number) => ({
    transform: `translate(${(mouse.x - 0.5) * depth}px, ${(mouse.y - 0.5) * depth}px)`,
    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020617 0%, #050d24 50%, #02061a 100%)" }}
    >
      {/* ── Aurora background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main aurora blobs */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: 700, height: 700,
            top: "-15%", right: "-10%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full animate-blob animation-delay-2000"
          style={{
            width: 600, height: 600,
            bottom: "-10%", left: "-5%",
            background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(99,102,241,0.05) 50%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute rounded-full animate-blob animation-delay-4000"
          style={{
            width: 400, height: 400,
            top: "30%", left: "30%",
            background: "radial-gradient(circle, rgba(240,171,252,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Mouse-following iridescent spotlight */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700, height: 700,
            left: spotX - 350,
            top: spotY - 350,
            background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)",
            filter: "blur(60px)",
            transition: "left 0.5s cubic-bezier(0.16,1,0.3,1), top 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `calc(${p.y}% + ${Math.sin(time * p.speed + p.id) * 30}px)`,
              width: p.size,
              height: p.size,
              background: `hsl(${p.hue}, 80%, 75%)`,
              opacity: p.opacity * (0.6 + 0.4 * Math.sin(time * p.speed * 2 + p.id)),
              boxShadow: `0 0 ${p.size * 3}px hsl(${p.hue}, 80%, 75%)`,
              transition: "top 0.1s linear",
            }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <div className="flex flex-col items-start text-left space-y-8" style={parallaxStyle(-12)}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(139,92,246,0.08)",
                borderColor: "rgba(139,92,246,0.3)",
                color: "#a78bfa",
                boxShadow: "0 0 20px rgba(139,92,246,0.1)",
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              AI-Powered Tech Agency
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="block text-white/90">We Build</span>
                <span className="block text-white/90">Digital</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 45%, #f0abfc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 30px rgba(167,139,250,0.4))",
                  }}
                >
                  Experiences
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-lg text-slate-400 font-medium max-w-md leading-relaxed">
              Creative design meets smart engineering.{" "}
              <span className="text-violet-300 font-semibold">We transform ideas</span> into
              high-performance digital products that grow businesses.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              {[["10+", "Projects"], ["98%", "Satisfaction"], ["5★", "Rating"]].map(([val, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-black text-white"
                    style={{ textShadow: "0 0 20px rgba(167,139,250,0.5)" }}>{val}</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                  boxShadow: "0 8px 32px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <span>Let's Work Together</span>
                <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
                {/* shine sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)" }} />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm text-slate-300 hover:text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[520px]" style={parallaxStyle(18)}>

            {/* Outer glow ring */}
            <div
              className="absolute rounded-full animate-pulse"
              style={{
                width: 440, height: 440,
                background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
                border: "1px solid rgba(139,92,246,0.1)",
              }}
            />

            {/* Main glassmorphic card */}
            <div
              className="relative w-full max-w-[340px] aspect-square sm:w-[380px] sm:h-[380px] rounded-[30px] sm:rounded-[40px] flex flex-col justify-between p-6 sm:p-8 select-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 50%, rgba(34,211,238,0.04) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(40px)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.12) inset",
                transform: `rotateX(${(mouse.y - 0.5) * -8}deg) rotateY(${(mouse.x - 0.5) * 8}deg)`,
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Inner grid texture */}
              <div
                className="absolute inset-0 rounded-[30px] sm:rounded-[40px] opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Top section */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-violet-400 mb-1">Tech Inspira AI</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">All Systems Online</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">v4.2.1</div>
                  <div className="text-[8px] font-mono text-slate-600">0x9F82A4</div>
                </div>
              </div>

              {/* Center crystal visualization */}
              <div className="relative z-10 flex items-center justify-center flex-1 py-2 sm:py-4">
                <div className="relative scale-90 sm:scale-100">
                  {/* Rotating rings */}
                  {[70, 52, 34].map((size, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 rounded-full border"
                      style={{
                        width: size * 2, height: size * 2,
                        marginLeft: -size, marginTop: -size,
                        borderColor: i === 0
                          ? "rgba(139,92,246,0.25)"
                          : i === 1
                          ? "rgba(34,211,238,0.2)"
                          : "rgba(240,171,252,0.15)",
                        transform: `rotate(${time * (i % 2 === 0 ? 30 : -20) * (i + 1)}deg)`,
                        borderStyle: i === 2 ? "dashed" : "solid",
                      }}
                    />
                  ))}

                  {/* Core sphere */}
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, rgba(240,171,252,0.9), rgba(139,92,246,0.7) 50%, rgba(34,211,238,0.5))",
                      boxShadow: "0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2), inset 0 -4px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Inner shine */}
                    <div
                      className="absolute w-6 h-6 rounded-full"
                      style={{
                        top: "18%", left: "20%",
                        background: "rgba(255,255,255,0.5)",
                        filter: "blur(4px)",
                      }}
                    />
                    <Sparkles className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                  </div>

                  {/* Orbiting dots */}
                  {[0, 1, 2, 3].map(i => {
                    const angle = time * 1.5 + (i * Math.PI) / 2;
                    const r = 62;
                    return (
                      <div
                        key={i}
                        className="absolute w-2.5 h-2.5 rounded-full"
                        style={{
                          top: "50%", left: "50%",
                          marginTop: -5, marginLeft: -5,
                          transform: `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)`,
                          background: ["#a78bfa", "#22d3ee", "#f0abfc", "#6ee7b7"][i],
                          boxShadow: `0 0 8px ${["rgba(167,139,250,0.8)", "rgba(34,211,238,0.8)", "rgba(240,171,252,0.8)", "rgba(110,231,183,0.8)"][i]}`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Services grid */}
              <div className="relative z-10 grid grid-cols-2 gap-1.5 sm:gap-2">
                {SERVICES.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <button
                      key={i}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl text-left transition-all duration-300 cursor-pointer"
                      style={{
                        background: hovered === i ? svc.bg : "rgba(255,255,255,0.03)",
                        border: `1px solid ${hovered === i ? svc.border : "rgba(255,255,255,0.07)"}`,
                        transform: hovered === i ? "scale(1.04)" : "scale(1)",
                        boxShadow: hovered === i ? `0 4px 20px ${svc.color}22` : "none",
                      }}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: svc.color }} />
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-300">{svc.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Floating accent chips */}
            <div
              className="absolute top-6 -left-4 px-3 py-2 rounded-2xl text-[9px] font-black uppercase tracking-wider hidden sm:block"
              style={{
                background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(34,211,238,0.2)",
                color: "#22d3ee",
                boxShadow: "0 8px 24px rgba(34,211,238,0.1)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              ✦ Next.js &amp; React
            </div>

            <div
              className="absolute bottom-14 -right-4 px-3 py-2 rounded-2xl text-[9px] font-black uppercase tracking-wider hidden sm:block"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#a78bfa",
                boxShadow: "0 8px 24px rgba(167,139,250,0.1)",
                animation: "float 7s ease-in-out infinite 1s",
              }}
            >
              ✦ AI Automation
            </div>

            <div
              className="absolute top-1/2 -right-6 px-3 py-2 rounded-2xl text-[9px] font-black uppercase tracking-wider hidden sm:block"
              style={{
                background: "rgba(110,231,183,0.08)",
                border: "1px solid rgba(110,231,183,0.2)",
                color: "#6ee7b7",
                boxShadow: "0 8px 24px rgba(110,231,183,0.1)",
                animation: "float 8s ease-in-out infinite 0.5s",
              }}
            >
              ✦ Razorpay
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020617)" }}
      />

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce'>
        <span className='text-[10px] uppercase tracking-[0.3em] font-semibold text-slate-500'>Scroll</span>
        <div className='w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1'>
          <div className='w-1 h-2 rounded-full bg-brand-cyan animate-pulse' />
        </div>
      </div>
    </section>
  );
}
