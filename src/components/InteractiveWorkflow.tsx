"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Code,
  Layers,
  Gauge,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight,
  Play,
  Terminal as TerminalIcon,
  Zap,
  Sparkles,
  Users,
  Compass,
  Database,
  Smartphone,
  Eye,
  Settings,
  Shield,
  Upload,
  RefreshCw,
  Search,
  Check,
  Award,
  BookOpen,
  MousePointer,
  Briefcase,
  Layers as LayersIcon
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

interface InteractiveWorkflowProps {
  serviceId: string;
  workflowSteps: WorkflowStep[];
}

export default function InteractiveWorkflow({ serviceId, workflowSteps }: InteractiveWorkflowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycling steps
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle 3D card parallax tilt tracking with transition toggle to avoid jitter
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsHovered(true);
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true); // Stop autoplay when user manually interacts
  };

  // Master visual router
  const renderVisual = () => {
    switch (serviceId) {
      case "web-development":
        return <WebDevVisual activeIndex={activeIndex} />;
      case "ui-ux-design":
        return <UiUxVisual activeIndex={activeIndex} />;
      case "mobile-app-development":
        return <MobileAppVisual activeIndex={activeIndex} />;
      case "ai-automation":
        return <AiAutomationVisual activeIndex={activeIndex} />;
      case "digital-marketing":
        return <DigitalMarketingVisual activeIndex={activeIndex} />;
      case "seo-services":
        return <SeoVisual activeIndex={activeIndex} />;
      case "branding-identity":
        return <BrandingVisual activeIndex={activeIndex} />;
      case "graphic-design":
        return <GraphicDesignVisual activeIndex={activeIndex} />;
      default:
        return <WebDevVisual activeIndex={activeIndex} />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left Column: Interactive Timeline List */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
        {workflowSteps.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={step.step}
              onClick={() => handleStepClick(idx)}
              onMouseEnter={() => {
                setIsPaused(true);
              }}
              className={`text-left w-full transition-all duration-500 rounded-2xl p-5 border flex items-start gap-4 group relative overflow-hidden ${
                isActive
                  ? "bg-[#0b1731]/75 border-brand-cyan/60 shadow-[0_0_30px_rgba(0,210,255,0.12)] scale-[1.02] lg:translate-x-4"
                  : "bg-[#081124]/40 border-brand-border/10 hover:border-brand-cyan/30 hover:bg-[#0b1731]/30 hover:scale-[1.01]"
              }`}
            >
              {/* Glowing active card background pill */}
              {isActive && (
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-blue to-brand-cyan shadow-[0_0_15px_#00d2ff]" />
              )}

              {/* Step Number Circle */}
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-500 ${
                  isActive
                    ? "border-brand-cyan bg-[#020617] text-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.3)] animate-pulse"
                    : "border-brand-border/30 bg-[#030712] text-slate-500 group-hover:text-slate-300 group-hover:border-brand-cyan/40"
                }`}
              >
                {step.step}
              </div>

              {/* Text Context */}
              <div className="space-y-1">
                <h4
                  className={`text-sm font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-xs font-medium leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: 3D Interactive Parallax Stage */}
      <div className="lg:col-span-7 flex items-center justify-center perspective-3d w-full">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsPaused(true)}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
            transformStyle: "preserve-3d"
          }}
          className="w-full min-h-[420px] glass-card rounded-3xl border border-brand-border/20 p-8 flex flex-col justify-between relative overflow-hidden group select-none"
        >
          {/* Subtle moving particle background inside grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[radial-gradient(#00a8ff_1px,transparent_1px)] [background-size:24px_24px] group-hover:opacity-30 transition-opacity" />

          {/* Glowing orbital spot light */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Stage Top Bar */}
          <div className="flex justify-between items-center z-10 border-b border-brand-border/10 pb-4 shrink-0 depth-layer-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">
                Workflow Stage // {workflowSteps[activeIndex]?.title || `Step 0${activeIndex + 1}`}
              </span>
            </div>
            {isPaused && (
              <button
                onClick={() => setIsPaused(false)}
                className="text-[10px] text-brand-cyan border border-brand-cyan/30 bg-brand-cyan/5 px-2 py-0.5 rounded hover:bg-brand-cyan/10 flex items-center gap-1 font-bold uppercase transition-colors"
                title="Resume Autoplay Sequence"
              >
                <Play className="w-2.5 h-2.5 fill-brand-cyan" /> Autoplay
              </button>
            )}
          </div>

          {/* Stage Core Content Area */}
          <div className="flex-grow flex items-center justify-center my-6 relative z-10 depth-layer-2 min-h-[220px]">
            {renderVisual()}
          </div>

          {/* Stage Footer Bar */}
          <div className="flex justify-between items-center z-10 border-t border-brand-border/10 pt-4 shrink-0 depth-layer-1 text-slate-500 text-[10px] font-bold uppercase">
            <span>Tech Inspira // {serviceId.replace("-", " ")}</span>
            <span className="text-brand-cyan flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> Click / Interact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   1. WEB DEVELOPMENT VISUALS
   ========================================================================= */
function WebDevVisual({ activeIndex }: { activeIndex: number }) {
  // Discovery
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <line x1="20%" y1="50%" x2="50%" y2="20%" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="80%" x2="80%" y2="50%" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-xl flex flex-col items-center">
              <FileText className="w-5 h-5 text-brand-blue mb-1" />
              <span className="text-[8px] font-bold uppercase text-slate-400">Briefing</span>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
            <div className="p-3 bg-brand-cyan/20 border border-brand-cyan/40 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(0,210,255,0.15)] scale-110">
              <Compass className="w-6 h-6 text-brand-cyan mb-1 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-[8px] font-bold uppercase text-white">Sitemap</span>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
            <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-xl flex flex-col items-center">
              <Code className="w-5 h-5 text-brand-blue mb-1" />
              <span className="text-[8px] font-bold uppercase text-slate-400">Specs</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Defining wireframe architecture, content maps, and site structure outline.</p>
      </div>
    );
  }
  // Prototyping
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center perspective-3d">
          <div style={{ transform: "rotateX(30deg) rotateY(-20deg)", transformStyle: "preserve-3d" }} className="w-[180px] h-[100px] border border-brand-cyan bg-[#071329]/80 rounded-lg p-2.5 shadow-[0_0_20px_rgba(0,210,255,0.15)] flex flex-col justify-between relative">
            <div className="w-12 h-2 bg-brand-cyan/30 rounded" />
            <div className="grid grid-cols-3 gap-1.5 my-1.5">
              <div className="h-8 bg-slate-900 border border-brand-cyan/15 rounded flex items-center justify-center text-[7px] text-slate-400">Card</div>
              <div className="h-8 bg-slate-900 border border-brand-cyan/15 rounded flex items-center justify-center text-[7px] text-slate-400">Details</div>
              <div className="h-8 bg-brand-cyan/10 border border-brand-cyan/30 rounded flex items-center justify-center text-[7px] text-brand-cyan font-bold">API</div>
            </div>
            <div className="w-full h-2 bg-brand-cyan/30 rounded" />
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Constructing interactive screen layouts and approval wireframes.</p>
      </div>
    );
  }
  // Coding
  if (activeIndex === 2) {
    return <CodingVisualHelper />;
  }
  // Speed Audit
  if (activeIndex === 3) {
    return <SpeedAuditVisualHelper />;
  }
  // Deployment
  return <DeploymentVisualHelper />;
}

/* =========================================================================
   2. UI/UX DESIGN VISUALS
   ========================================================================= */
function UiUxVisual({ activeIndex }: { activeIndex: number }) {
  const [activePersona, setActivePersona] = useState(0);
  const [activeTheme, setActiveTheme] = useState("cyber");
  const [isSimulating, setIsSimulating] = useState(false);

  // User Research
  if (activeIndex === 0) {
    const personas = [
      { name: "Sarah (Founder)", age: "32", goal: "Boost conversion rates", frustration: "High checkout dropoffs" },
      { name: "John (Retailer)", age: "45", goal: "Easy store updates", frustration: "Complex CMS layouts" }
    ];
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="flex gap-2 mb-3">
            {personas.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => setActivePersona(idx)}
                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                  activePersona === idx ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {p.name.split(" ")[0]}
              </button>
            ))}
          </div>
          <div className="w-full max-w-[240px] bg-slate-900/60 border border-brand-border/20 rounded-xl p-3 text-[10px] space-y-1.5 animate-fade-in">
            <div className="flex justify-between font-bold text-white border-b border-brand-border/10 pb-1">
              <span>Goal: {personas[activePersona].goal}</span>
              <span className="text-brand-cyan">Age: {personas[activePersona].age}</span>
            </div>
            <p className="text-slate-400 text-[9px]"><strong className="text-red-400 font-bold">Pain Point:</strong> {personas[activePersona].frustration}</p>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Mapping target user demography, goals, and frustration parameters.</p>
      </div>
    );
  }
  // Info Architecture
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="flex flex-col items-center gap-1.5 w-full max-w-[200px]">
            <div className="px-3 py-1 bg-brand-cyan/20 border border-brand-cyan text-white text-[9px] font-bold rounded uppercase">Home</div>
            <div className="w-[1px] h-3 bg-brand-cyan/40" />
            <div className="grid grid-cols-3 gap-2 w-full">
              <div className="p-1 bg-[#0b1731] border border-brand-border/30 rounded text-center text-[8px] text-slate-300">Services</div>
              <div className="p-1 bg-[#0b1731] border border-brand-border/30 rounded text-center text-[8px] text-slate-300">Portfolio</div>
              <div className="p-1 bg-[#0b1731] border border-brand-border/30 rounded text-center text-[8px] text-slate-300">Contact</div>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Organizing sitemaps, nested user flows, and page layout priorities.</p>
      </div>
    );
  }
  // Wireframing
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="w-[180px] h-[100px] border border-dashed border-brand-cyan/40 rounded-lg p-2 flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="w-6 h-2 border border-dashed border-brand-cyan/40 rounded" />
              <div className="w-4 h-2 border border-dashed border-brand-cyan/40 rounded" />
            </div>
            <div className="w-full h-8 border border-dashed border-brand-cyan/40 rounded flex items-center justify-center text-[8px] text-brand-cyan/60 font-mono">Hero Slider</div>
            <div className="flex gap-2">
              <div className="w-full h-2 border border-dashed border-brand-cyan/40 rounded" />
              <div className="w-full h-2 border border-dashed border-brand-cyan/40 rounded" />
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Sketching blueprints and layout structures focusing strictly on content utility.</p>
      </div>
    );
  }
  // Visual Design
  if (activeIndex === 3) {
    const getGrad = () => {
      if (activeTheme === "emerald") return "from-emerald-500 via-teal-600 to-emerald-800";
      if (activeTheme === "purple") return "from-purple-600 via-fuchsia-600 to-indigo-800";
      return "from-brand-blue via-brand-cyan to-blue-900";
    };
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-3 mb-3">
            {["cyber", "emerald", "purple"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={`w-4 h-4 rounded-full border ${
                  activeTheme === t ? "border-white ring-2 ring-brand-cyan" : "border-transparent"
                } ${
                  t === "cyber" ? "bg-brand-cyan" : t === "emerald" ? "bg-emerald-400" : "bg-purple-500"
                }`}
              />
            ))}
          </div>
          <div className={`w-[140px] h-[70px] bg-gradient-to-br ${getGrad()} rounded-xl p-2 flex flex-col justify-between shadow-2xl transition-all duration-500`}>
            <span className="text-[8px] font-extrabold uppercase text-white tracking-widest">Brand Style</span>
            <div className="w-full h-4 rounded bg-white/20 backdrop-blur" />
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Applying typography, color harmony systems, and pixel-perfect skin mockups.</p>
      </div>
    );
  }
  // Interactive Prototyping
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
        <div className="relative w-[130px] h-[80px] bg-slate-900 border border-brand-border/30 rounded-lg p-2 flex flex-col justify-between">
          <div className="w-10 h-1.5 bg-slate-800 rounded" />
          {isSimulating ? (
            <div className="text-center text-[7px] text-emerald-400 font-bold animate-pulse">Screen Transition OK</div>
          ) : (
            <div className="w-full h-8 bg-brand-cyan/10 border border-brand-cyan/20 rounded flex items-center justify-center text-[8px] text-brand-cyan">Submit Card</div>
          )}
          <button
            onClick={() => {
              setIsSimulating(true);
              setTimeout(() => setIsSimulating(false), 2000);
            }}
            className="absolute bottom-1 right-1 bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-[7px] px-1.5 py-0.5 rounded transition-all"
          >
            {isSimulating ? "Clicking..." : "Test Button"}
          </button>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Simulating interactive user journeys, testing flows, and exporting handoffs.</p>
    </div>
  );
}

/* =========================================================================
   3. MOBILE APP DEVELOPMENT VISUALS
   ========================================================================= */
function MobileAppVisual({ activeIndex }: { activeIndex: number }) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth"]);
  const [appScreen, setAppScreen] = useState("home");
  const [qaStatus, setQaStatus] = useState("idle");

  const toggleFeature = (f: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]
    );
  };

  // Product Scoping
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-2">Scope Features Checklist</span>
          <div className="flex gap-2 mb-2">
            {["auth", "payments", "chat"].map((f) => (
              <button
                key={f}
                onClick={() => toggleFeature(f)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-all ${
                  selectedFeatures.includes(f) ? "bg-brand-cyan text-[#020617] border-brand-cyan" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="text-[9px] text-slate-400 font-mono mt-1">
            Complexity: <span className="text-brand-cyan font-bold">{selectedFeatures.length > 2 ? "Complex Architecture" : "Standard Model"}</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Scoping feature requirements, security guidelines, and development estimates.</p>
      </div>
    );
  }
  // UX Design
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-2">
          {/* Phone Frame */}
          <div className="w-[75px] h-[130px] border-2 border-brand-cyan/40 bg-slate-900 rounded-xl p-1.5 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[6px] font-bold text-slate-500">
              <span>9:41</span>
              <span>LTE</span>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-1.5 my-1">
              <div className="w-10 h-10 rounded-full border border-dashed border-brand-cyan/30 flex items-center justify-center text-[7px] text-brand-cyan/50 font-bold uppercase">Mockup</div>
              <div className="w-12 h-2 bg-slate-800 rounded" />
            </div>
            <div className="flex justify-around border-t border-brand-border/10 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Prototyping mobile-specific UX patterns, swipe triggers, and key layouts.</p>
      </div>
    );
  }
  // App Coding
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="bg-slate-950 rounded-xl border border-brand-border/20 p-3 w-[200px] text-[8px] font-mono text-brand-blue flex flex-col justify-between h-[110px] shadow-2xl">
            <div>
              <span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-slate-300">"react"</span>;
              <br />
              <span className="text-pink-500">import</span> {"{ View }"} <span className="text-pink-500">from</span> <span className="text-slate-300">"react-native"</span>;
            </div>
            <div className="border-t border-brand-border/10 pt-1.5 text-slate-400 flex justify-between items-center">
              <span>Android // iOS build</span>
              <span className="text-brand-cyan font-bold animate-pulse">BUILT OK</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Coding mobile apps using Next-Gen Hybrid React Native / Flutter engines.</p>
      </div>
    );
  }
  // QA Testing
  if (activeIndex === 3) {
    const handleReRun = () => {
      setQaStatus("testing");
      setTimeout(() => setQaStatus("success"), 2000);
    };
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="w-full max-w-[200px] bg-slate-900 border border-brand-border/20 rounded-xl p-2.5 text-[9px] space-y-1.5">
            <div className="flex justify-between items-center text-slate-400">
              <span>Security Check</span>
              <span className={qaStatus === "testing" ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>{qaStatus === "testing" ? "Running..." : "Passed ✅"}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Layout Check</span>
              <span className={qaStatus === "testing" ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>{qaStatus === "testing" ? "Running..." : "Passed ✅"}</span>
            </div>
          </div>
          <button
            onClick={handleReRun}
            className="mt-3 bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-[8px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all"
          >
            {qaStatus === "testing" ? "Testing..." : "Re-run QA"}
          </button>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Auditing code stability, cross-platform layouts, and testing API limits.</p>
      </div>
    );
  }
  // App Store Launch
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-900 border border-brand-border/20 rounded-xl text-center shadow-lg">
            <Smartphone className="w-5 h-5 text-brand-cyan mx-auto mb-1 animate-pulse" />
            <span className="text-[8px] font-bold text-white uppercase">App Store</span>
          </div>
          <div className="p-3 bg-slate-900 border border-brand-border/20 rounded-xl text-center shadow-lg">
            <Globe className="w-5 h-5 text-brand-blue mx-auto mb-1 animate-pulse" />
            <span className="text-[8px] font-bold text-white uppercase">Google Play</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Compiling build configurations, styling assets, and submitting pages for review.</p>
    </div>
  );
}

/* =========================================================================
   4. AI & AUTOMATION VISUALS
   ========================================================================= */
function AiAutomationVisual({ activeIndex }: { activeIndex: number }) {
  const [epochs, setEpochs] = useState(1);
  const [activePipeline, setActivePipeline] = useState<string | null>(null);
  const [payloadRes, setPayloadRes] = useState<any>(null);

  // Feasibility Study
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-slate-900 border border-brand-cyan/20 rounded-lg text-center text-[8px] font-mono text-slate-400">
              MySQL Data Feed
            </div>
            <div className="h-0.5 w-6 bg-brand-cyan/30" />
            <div className="p-2.5 bg-brand-cyan/10 border border-brand-cyan rounded-xl text-center text-[9px] font-bold text-white shadow-[0_0_10px_rgba(0,210,255,0.2)]">
              AI Feasibility
            </div>
            <div className="h-0.5 w-6 bg-brand-cyan/30" />
            <div className="p-2 bg-slate-900 border border-brand-cyan/20 rounded-lg text-center text-[8px] font-mono text-slate-400">
              Custom LLM
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Analyzing database infrastructure, model viability, and custom automation goals.</p>
      </div>
    );
  }
  // Model Training
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="w-full max-w-[200px] mb-2 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
            <span>Epochs: {epochs}/5</span>
            <span className="text-brand-cyan">Accuracy: {epochs === 1 ? "42%" : epochs === 3 ? "76%" : "98.9%"}</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={epochs}
            onChange={(e) => setEpochs(parseInt(e.target.value))}
            className="w-full max-w-[200px] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan mb-3"
          />
          <div className="w-full max-w-[200px] h-[30px] relative">
            <svg className="w-full h-full" viewBox="0 0 100 20">
              <path
                d={`M 0,20 Q 25,18 50,${20 - epochs * 3.5} T 100,${20 - epochs * 3.8}`}
                fill="none"
                stroke="#00d2ff"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Fine-tuning dataset parameters and testing neural net accuracy outputs.</p>
      </div>
    );
  }
  // Pipeline Setup
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-2">
            {["Slack Notification", "Database sync"].map((t) => (
              <button
                key={t}
                onClick={() => setActivePipeline(t)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                  activePipeline === t ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-3 text-[9px] text-slate-400 font-mono bg-slate-900/60 p-2.5 rounded-xl border border-brand-border/15 min-w-[150px] text-center">
            {activePipeline ? (
              <span>Trigger: <strong className="text-brand-cyan font-bold">{activePipeline}</strong></span>
            ) : (
              <span className="text-slate-500 font-bold animate-pulse">Select Pipeline Trigger</span>
            )}
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Configuring automated triggers, system API integrations, and webhook models.</p>
      </div>
    );
  }
  // API Integration
  if (activeIndex === 3) {
    const handleSend = () => {
      setPayloadRes("loading");
      setTimeout(() => {
        setPayloadRes({ status: "success", processingTime: "12ms" });
      }, 1500);
    };
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          {payloadRes === "loading" ? (
            <div className="w-6 h-6 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan animate-spin" />
          ) : payloadRes ? (
            <div className="bg-slate-950 p-2 rounded border border-brand-border/20 text-[8px] font-mono text-emerald-400 w-full max-w-[160px] text-left">
              {"{"}
              <br />
              &nbsp;&nbsp;status: "success",
              <br />
              &nbsp;&nbsp;time: "{payloadRes.processingTime}"
              <br />
              {"}"}
            </div>
          ) : (
            <button
              onClick={handleSend}
              className="bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-[8px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all"
            >
              Send Payload API
            </button>
          )}
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Writing REST API endpoints, security authentication, and webhook responses.</p>
      </div>
    );
  }
  // Scaling & Monitoring
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
        <div className="grid grid-cols-3 gap-3 text-center w-full max-w-[240px]">
          <div className="p-2 bg-slate-900 border border-brand-border/20 rounded-xl">
            <span className="text-[8px] text-slate-500 font-bold block uppercase">CPU</span>
            <span className="text-xs font-black text-white font-mono animate-pulse">12%</span>
          </div>
          <div className="p-2 bg-slate-900 border border-brand-border/20 rounded-xl">
            <span className="text-[8px] text-slate-500 font-bold block uppercase">RAM</span>
            <span className="text-xs font-black text-white font-mono">1.8GB</span>
          </div>
          <div className="p-2 bg-[#0b1731] border border-brand-cyan/30 rounded-xl">
            <span className="text-[8px] text-brand-cyan font-bold block uppercase">Active</span>
            <span className="text-xs font-black text-brand-cyan font-mono animate-pulse">400/s</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Deploying servers to cloud clusters, managing RAM limits, and tracking response speed.</p>
    </div>
  );
}

/* =========================================================================
   5. DIGITAL MARKETING VISUALS
   ========================================================================= */
function DigitalMarketingVisual({ activeIndex }: { activeIndex: number }) {
  const [budget, setBudget] = useState(1000);
  const [adPlatform, setAdPlatform] = useState("instagram");

  // Audience Research
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-[200px] border border-brand-border/20 bg-slate-900/60 rounded-xl p-3 text-[10px] space-y-1">
            <div className="flex justify-between font-bold text-white border-b border-brand-border/10 pb-1">
              <span>Audience Target</span>
              <span className="text-brand-cyan">98% Match</span>
            </div>
            <p className="text-slate-400 text-[9px]"><strong className="text-brand-cyan font-bold">Interests:</strong> SaaS, Entrepreneurship, Tech Tech</p>
            <p className="text-slate-400 text-[9px]"><strong className="text-brand-cyan font-bold">Demographics:</strong> 24 - 45 Years, Worldwide</p>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Segmenting user personas, market behavior patterns, and keyword indicators.</p>
      </div>
    );
  }
  // Campaign Strategy
  if (activeIndex === 1) {
    const impressions = budget * 10;
    const clicks = Math.round(impressions * 0.05);
    const leads = Math.round(clicks * 0.12);
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="w-full max-w-[200px] mb-2 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
            <span>Budget: ₹{budget}</span>
            <span className="text-brand-cyan">Est. Conversion</span>
          </div>
          <input
            type="range"
            min="1000"
            max="10000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(parseInt(e.target.value))}
            className="w-full max-w-[200px] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan mb-2"
          />
          <div className="flex justify-between w-full max-w-[220px] text-[8px] font-mono text-slate-400 text-center mt-1">
            <div className="p-1 bg-slate-900 border border-brand-border/15 rounded flex-grow">Views: {impressions}</div>
            <div className="p-1 bg-slate-900 border border-brand-border/15 rounded flex-grow mx-1">Clicks: {clicks}</div>
            <div className="p-1 bg-[#0b1731] border border-brand-cyan/30 rounded flex-grow text-brand-cyan font-bold">Leads: {leads}</div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Configuring paid ad budgets and calculating CPC return-on-investment parameters.</p>
      </div>
    );
  }
  // Content Creation
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-2 mb-2">
            {["instagram", "linkedin"].map((p) => (
              <button
                key={p}
                onClick={() => setAdPlatform(p)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                  adPlatform === p ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="w-[120px] h-[75px] bg-[#071329] border border-brand-cyan/20 rounded-xl p-2 flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-brand-cyan" />
              <span className="text-[7px] font-bold text-white uppercase">{adPlatform} Post</span>
            </div>
            <div className="w-full h-8 bg-slate-900 rounded border border-brand-border/20 flex items-center justify-center text-[7px] text-slate-500 uppercase tracking-widest font-bold">Asset Image</div>
            <div className="w-10 h-1 bg-brand-cyan/40 rounded" />
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Writing ad copy headlines and creating optimized image and video layout packages.</p>
      </div>
    );
  }
  // Launch & Optimize
  if (activeIndex === 3) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
          <div className="grid grid-cols-2 gap-4 w-full max-w-[240px] text-center">
            <div className="p-2 border border-dashed border-brand-border/30 rounded-xl bg-slate-900/50">
              <span className="text-[8px] text-slate-500 font-bold block uppercase">Ad Variant A</span>
              <span className="text-[10px] font-bold text-white">CTR: 2.1%</span>
            </div>
            <div className="p-2 border border-brand-cyan/30 rounded-xl bg-[#0b1731] shadow-[0_0_10px_rgba(0,210,255,0.1)]">
              <span className="text-[8px] text-brand-cyan font-bold block uppercase">Ad Variant B</span>
              <span className="text-[10px] font-bold text-brand-cyan">CTR: 4.8% 🔥</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Monitoring A/B ad variations and optimizing high-performance channels in real-time.</p>
      </div>
    );
  }
  // Analytics Reporting
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
        <div className="w-full max-w-[200px] h-[100px] border border-brand-border/20 bg-slate-900 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[8px] font-bold text-slate-500 uppercase border-b border-brand-border/10 pb-1">
            <span>ROI Audit Report</span>
            <span className="text-emerald-400">Total ROI: +312%</span>
          </div>
          <div className="flex gap-2 items-end justify-center h-12">
            <div className="w-4 h-6 bg-brand-blue/30 rounded" />
            <div className="w-4 h-10 bg-brand-blue/30 rounded" />
            <div className="w-4 h-12 bg-brand-cyan rounded shadow-[0_0_10px_rgba(0,210,255,0.3)]" />
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Compiling target campaign metrics, lead audits, and generating performance reviews.</p>
    </div>
  );
}

/* =========================================================================
   6. SEO SERVICES VISUALS
   ========================================================================= */
function SeoVisual({ activeIndex }: { activeIndex: number }) {
  const [seoScore, setSeoScore] = useState(88);
  const [crawlStep, setCrawlStep] = useState("idle");

  // Keyword Research
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
          <div className="w-full max-w-[220px] bg-slate-900 border border-brand-border/20 rounded-xl p-2.5 text-[9px] font-mono text-slate-400 space-y-1">
            <div className="flex justify-between border-b border-brand-border/10 pb-1 text-slate-500 font-bold uppercase">
              <span>Keyword Keyword</span>
              <span>Diff</span>
            </div>
            <div className="flex justify-between text-white font-bold">
              <span>1. SaaS Web Dev</span>
              <span className="text-emerald-400 font-bold">Low</span>
            </div>
            <div className="flex justify-between">
              <span>2. Web Design Company</span>
              <span className="text-amber-400 font-bold">Medium</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Scoping high-intent terms, auditing search volume, and checking keyword difficulty.</p>
      </div>
    );
  }
  // Technical Audit
  if (activeIndex === 1) {
    const handleCrawl = () => {
      setCrawlStep("crawling");
      setTimeout(() => setCrawlStep("done"), 1500);
    };
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="w-full max-w-[200px] bg-slate-900 border border-brand-border/20 rounded-xl p-2.5 text-[9px] space-y-1">
            <div className="flex justify-between">
              <span>Schema Markup</span>
              <span className={crawlStep === "done" ? "text-emerald-400 font-bold" : "text-slate-500 font-bold"}>{crawlStep === "done" ? "Valid ✅" : "Checking..."}</span>
            </div>
            <div className="flex justify-between">
              <span>Robot.txt Map</span>
              <span className={crawlStep === "done" ? "text-emerald-400 font-bold" : "text-slate-500 font-bold"}>{crawlStep === "done" ? "Valid ✅" : "Checking..."}</span>
            </div>
          </div>
          <button
            onClick={handleCrawl}
            className="mt-3 bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-[8px] uppercase tracking-wider px-2 py-1 rounded transition-all"
          >
            {crawlStep === "crawling" ? "Auditing..." : "Crawl Website"}
          </button>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Scanning index structures, checking meta tags, and validating site XML maps.</p>
      </div>
    );
  }
  // Content Optimization
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="w-full max-w-[200px] mb-2 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
            <span>Optimization: {seoScore}%</span>
            <span className={seoScore > 90 ? "text-emerald-400" : "text-amber-400"}>{seoScore > 90 ? "SEO Perfect" : "Fix Issues"}</span>
          </div>
          <input
            type="range"
            min="60"
            max="100"
            value={seoScore}
            onChange={(e) => setSeoScore(parseInt(e.target.value))}
            className="w-full max-w-[200px] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan mb-2"
          />
          <div className="text-[8px] font-mono text-slate-400 bg-slate-900 border border-brand-border/15 px-2.5 py-1 rounded-lg">
            Header hierarchy, density, and title meta configurations.
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Adding keyword tags, formatting headers, and verifying page density.</p>
      </div>
    );
  }
  // Link Building
  if (activeIndex === 3) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 border border-brand-border/20 rounded-xl text-center shadow-lg">
              <span className="text-[7px] text-slate-500 font-bold block uppercase">DA 90 Domain</span>
              <span className="text-[9px] font-bold text-emerald-400">Backlink Established</span>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
            <div className="p-2.5 bg-[#0b1731] border border-brand-cyan rounded-xl text-center shadow-lg animate-pulse">
              <span className="text-[7px] text-brand-cyan font-bold block uppercase">Your Website</span>
              <span className="text-[9px] font-bold text-white">Trust Rank Up</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Publishing guest articles and acquiring high-authority backlinks to boost SEO rank.</p>
      </div>
    );
  }
  // Performance Tracking
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
        <div className="w-full max-w-[200px] h-[100px] border border-brand-border/20 bg-slate-900 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[8px] font-bold text-slate-500 uppercase border-b border-brand-border/10 pb-1">
            <span>SERP Position Tracking</span>
            <span className="text-emerald-400">Rank: #1 🔥</span>
          </div>
          <div className="w-full h-[40px] relative">
            <svg className="w-full h-full" viewBox="0 0 100 20">
              <path
                d="M 0,20 L 30,16 L 60,10 L 100,2"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Monitoring keyword rankings and generating monthly organic search volume updates.</p>
    </div>
  );
}

/* =========================================================================
   7. BRANDING & IDENTITY VISUALS
   ========================================================================= */
function BrandingVisual({ activeIndex }: { activeIndex: number }) {
  const [activeArchetype, setActiveArchetype] = useState("creator");
  const [logoStyle, setLogoStyle] = useState("serif");

  // Brand Strategy
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-2 mb-3">
            {["creator", "hero", "ruler"].map((a) => (
              <button
                key={a}
                onClick={() => setActiveArchetype(a)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                  activeArchetype === a ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
          <div className="text-[9px] text-slate-400 font-mono bg-slate-900 border border-brand-border/15 px-3 py-2 rounded-xl text-center min-w-[160px]">
            {activeArchetype === "creator" ? (
              <span>Personality: <strong className="text-white">Innovative & Expressive</strong></span>
            ) : activeArchetype === "hero" ? (
              <span>Personality: <strong className="text-white">Bold & Courageous</strong></span>
            ) : (
              <span>Personality: <strong className="text-white">Authoritative & Confident</strong></span>
            )}
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Auditing brand pillars, values, and positioning statements.</p>
      </div>
    );
  }
  // Logo Concepts
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-2 mb-3">
            {["sans", "serif", "geometric"].map((style) => (
              <button
                key={style}
                onClick={() => setLogoStyle(style)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                  logoStyle === style ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
          <div className="p-4 bg-[#071329] border border-brand-cyan/20 rounded-xl min-w-[120px] text-center shadow-lg">
            <span
              style={{
                fontFamily: logoStyle === "serif" ? "Georgia, serif" : logoStyle === "sans" ? "Arial, sans-serif" : "monospace"
              }}
              className="text-lg font-black text-white uppercase tracking-widest block"
            >
              Inspira
            </span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Drafting original wordmarks, logo vectors, and matching typography pairings.</p>
      </div>
    );
  }
  // Visual Identity
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="flex gap-4">
            <div className="w-16 h-20 bg-slate-900 border border-brand-border/20 rounded-xl p-2 flex flex-col justify-between shadow-lg">
              <div className="w-4 h-4 bg-brand-cyan rounded-full" />
              <div className="w-full h-2 bg-slate-800 rounded" />
              <div className="w-8 h-2 bg-slate-800 rounded" />
            </div>
            <div className="w-16 h-20 bg-[#0b1731] border border-brand-cyan/30 rounded-xl p-2 flex flex-col justify-between shadow-2xl animate-float">
              <div className="w-4 h-4 bg-brand-blue rounded-full" />
              <div className="w-full h-2 bg-brand-cyan/30 rounded" />
              <div className="w-8 h-2 bg-brand-cyan/30 rounded" />
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Establishing custom brand guidelines, spacing, and packaging color schemes.</p>
      </div>
    );
  }
  // Collateral Design
  if (activeIndex === 3) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
          <div className="w-[150px] h-[90px] bg-[#071329] border border-brand-cyan/20 rounded-xl p-2.5 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-center border-b border-brand-border/10 pb-1.5">
              <span className="text-[8px] font-bold text-white uppercase tracking-wider">Business Card Mockup</span>
              <span className="text-[7px] text-brand-cyan font-bold">Inspira Group</span>
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-slate-900 border border-brand-border/20 rounded" />
              <div className="w-12 h-2 bg-slate-900 border border-brand-border/20 rounded" />
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Designing physical and digital brand assets, business cards, and merchandise.</p>
      </div>
    );
  }
  // Style Guide Handout
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
        <div className="p-3.5 bg-slate-900 border border-brand-border/20 rounded-xl text-center shadow-lg w-[140px]">
          <BookOpen className="w-6 h-6 text-brand-cyan mx-auto mb-1 animate-pulse" />
          <span className="text-[8px] font-bold text-white uppercase tracking-wider">Download Guide</span>
          <span className="text-[7px] text-slate-400 block font-mono mt-0.5">PDF Guidelines</span>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Packaging final brand systems, asset formats, and client handbook guidebooks.</p>
    </div>
  );
}

/* =========================================================================
   8. GRAPHIC DESIGN VISUALS
   ========================================================================= */
function GraphicDesignVisual({ activeIndex }: { activeIndex: number }) {
  const [feedbackState, setFeedbackState] = useState("draft");
  const [bendAngle, setBendAngle] = useState(0);

  // Creative Brief
  if (activeIndex === 0) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
          <div className="w-full max-w-[200px] border border-brand-border/20 bg-slate-900/60 rounded-xl p-3 text-[10px] space-y-1.5">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block border-b border-brand-border/10 pb-1">Creative Brief Summary</span>
            <p className="text-slate-400 text-[9px]"><strong className="text-brand-cyan font-bold">Category:</strong> Custom vector graphics & print banners</p>
            <p className="text-slate-400 text-[9px]"><strong className="text-brand-cyan font-bold">Format:</strong> SVG source models & high-res print files</p>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Reviewing creative layout briefs, canvas proportions, and format dimensions.</p>
      </div>
    );
  }
  // Brainstorming
  if (activeIndex === 1) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center p-3">
          <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
            <div className="h-14 bg-[#071329] border border-brand-cyan/20 rounded-lg flex items-center justify-center text-[7px] text-slate-400 uppercase tracking-widest font-bold shadow-md">Grid</div>
            <div className="h-14 bg-[#0b1731] border border-brand-cyan/20 rounded-lg flex items-center justify-center text-[7px] text-slate-400 uppercase tracking-widest font-bold shadow-md animate-float">Mood</div>
            <div className="h-14 bg-[#071329] border border-brand-cyan/20 rounded-lg flex items-center justify-center text-[7px] text-slate-400 uppercase tracking-widest font-bold shadow-md">Vector</div>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Assembling moodboards, checking typography options, and structuring visual blocks.</p>
      </div>
    );
  }
  // Concept Design
  if (activeIndex === 2) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <input
            type="range"
            min="-20"
            max="20"
            value={bendAngle}
            onChange={(e) => setBendAngle(parseInt(e.target.value))}
            className="w-full max-w-[180px] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan mb-3"
          />
          <div className="w-full max-w-[180px] h-[40px] border border-dashed border-brand-cyan/40 rounded-lg flex items-center justify-center relative bg-slate-900/50">
            <svg className="w-full h-full overflow-visible">
              <path
                d={`M 10,20 Q 90,${20 + bendAngle} 170,20`}
                fill="none"
                stroke="#00d2ff"
                strokeWidth="2"
                className="transition-all duration-100"
              />
              <circle cx="90" cy={20 + bendAngle} r="4" fill="#00d2ff" className="animate-pulse" />
            </svg>
            <span className="absolute text-[8px] font-mono text-slate-500 top-1">Vector Curve Anchor Simulator</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Bending vector paths, setting bezier curves, and rendering core concept mockups.</p>
      </div>
    );
  }
  // Iterative Feedback
  if (activeIndex === 3) {
    return (
      <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
        <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center p-3">
          <div className="flex gap-3 mb-3">
            {["draft", "polished"].map((f) => (
              <button
                key={f}
                onClick={() => setFeedbackState(f)}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                  feedbackState === f ? "bg-brand-cyan text-[#020617]" : "bg-slate-900 text-slate-400 border border-brand-border/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="p-3 border border-brand-cyan/20 bg-[#071329] rounded-xl text-center min-w-[140px] shadow-lg">
            {feedbackState === "draft" ? (
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Draft Model</span>
            ) : (
              <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-mono font-bold animate-pulse">Polished Layout ✅</span>
            )}
          </div>
        </div>
        <p className="text-[11px] text-slate-400 text-center font-medium">Reviewing client feedback guidelines and applying design polish changes.</p>
      </div>
    );
  }
  // Final Handoff
  return (
    <div className="w-full flex flex-col justify-between h-full min-h-[220px]">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3 text-center w-full max-w-[200px]">
          <div className="p-2 bg-slate-900 border border-brand-border/20 rounded-xl">
            <span className="text-[8px] text-slate-500 font-bold block uppercase">Vector</span>
            <span className="text-[10px] font-mono text-white">SVG / EPS</span>
          </div>
          <div className="p-2 bg-slate-900 border border-brand-border/20 rounded-xl">
            <span className="text-[8px] text-slate-500 font-bold block uppercase">Print</span>
            <span className="text-[10px] font-mono text-white">PDF / TIFF</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium">Exporting final high-resolution assets in SVG source and print format guidelines.</p>
    </div>
  );
}

/* =========================================================================
   GENERIC PIPELINE SUB-VISUALS (SHARED BY WEB DEVELOPMENT)
   ========================================================================= */
function CodingVisualHelper() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "import React from 'react';",
    "const TechInspiraApp = () => {",
    "  return (",
    "    <div className='gradient-bg'>",
    "      <Hero headline='Innovation' />",
    "      <ServiceLayout grid={5} />"
  ]);

  const handleRunCompiler = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setSuccess(false);
    
    setTimeout(() => {
      setLines((prev) => [
        ...prev,
        "// compiling chunks...",
        "✔ success: compiled build assets",
        "✔ success: verified security hashes"
      ]);
      setIsCompiling(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch h-auto md:h-[150px] min-h-[150px]">
        <div className="md:col-span-7 bg-slate-950 rounded-xl border border-brand-border/15 p-2.5 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center border-b border-brand-border/10 pb-1 mb-1.5 shrink-0">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
              <TerminalIcon className="w-2.5 h-2.5 text-brand-cyan" /> src/app/page.tsx
            </span>
          </div>
          <div className="flex-grow overflow-hidden flex flex-col justify-end text-[8px] font-mono text-slate-300 space-y-0.5">
            {lines.slice(-6).map((line, i) => (
              <div key={i} className={line.startsWith("✔") ? "text-emerald-400 font-bold" : line.startsWith("//") ? "text-slate-500" : "text-brand-blue"}>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 bg-[#030816] rounded-xl border border-brand-border/15 p-2.5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-1 border-b border-brand-border/10 pb-1 mb-1 text-[8px] font-bold text-slate-500 uppercase">
            <Globe className="w-2.5 h-2.5 text-brand-cyan" /> Preview
          </div>
          <div className="flex-grow flex flex-col items-center justify-center min-h-[80px]">
            {isCompiling ? (
              <div className="w-5 h-5 rounded-full border border-brand-cyan/20 border-t-brand-cyan animate-spin" />
            ) : success ? (
              <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                <CheckCircle className="w-2.5 h-2.5 text-emerald-400" /> Compiled OK
              </span>
            ) : (
              <button
                onClick={handleRunCompiler}
                className="bg-brand-cyan hover:bg-[#00a8ff] text-[#020617] font-bold text-[8px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all"
              >
                Compile
              </button>
            )}
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium mt-2">Writing modular backend integrations and compiling frontend component layouts.</p>
    </div>
  );
}

function SpeedAuditVisualHelper() {
  const [activeMetric, setActiveMetric] = useState<"speed" | "seo">("speed");

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center h-auto md:h-[150px] min-h-[150px]">
        <div className="md:col-span-6 flex flex-col items-center justify-center relative py-2">
          <svg className="w-24 h-24 transform -rotate-90">
            <path d="M 10,60 A 50,50 0 1,1 110,60" fill="none" stroke="#0f172a" strokeWidth="6" />
            <path d={activeMetric === "speed" ? "M 10,60 A 50,50 0 1,1 109,55" : "M 10,60 A 50,50 0 1,1 110,60"} fill="none" stroke="#00d2ff" strokeWidth="6" className="transition-all duration-1000" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black text-white leading-none">{activeMetric === "speed" ? "99" : "100"}</span>
            <span className="text-[7px] uppercase tracking-widest text-slate-500 font-extrabold mt-0.5">Score</span>
          </div>
        </div>

        <div className="md:col-span-6 space-y-1.5 flex flex-col justify-center py-2">
          {(["speed", "seo"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActiveMetric(m)}
              className={`py-1.5 px-2.5 rounded-lg text-[8px] font-bold uppercase tracking-wider text-left border transition-all ${
                activeMetric === m ? "bg-[#0b1731] border-brand-cyan/60 text-brand-cyan" : "bg-[#030712]/50 border-brand-border/10 text-slate-400"
              }`}
            >
              {m === "speed" ? "⚡ PageSpeed Index" : "🔍 SEO crawler check"}
            </button>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium mt-2">Auditing page size metrics, load constraints, and search layout rankings.</p>
    </div>
  );
}

function DeploymentVisualHelper() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="relative w-full h-[150px] bg-slate-950/40 rounded-2xl border border-brand-border/15 overflow-hidden flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center relative w-full h-[120px]">
          <div className="relative z-10 bg-[#071329] border border-brand-cyan/40 w-10 h-10 rounded-xl flex items-center justify-center animate-float">
            <Globe className="w-5 h-5 text-brand-cyan" />
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[1px] h-[50px] bg-gradient-to-t from-transparent via-brand-cyan/40 to-transparent relative top-4">
              <div className="absolute w-1 h-1 rounded-full bg-brand-cyan shadow-[0_0_10px_#00d2ff] left-[-1.5px] animate-packet-flow" />
            </div>
          </div>
          <div className="absolute bottom-1 bg-[#030712] border border-brand-border/30 px-2.5 py-1 rounded-lg text-[7px] font-mono text-slate-500 font-bold uppercase tracking-widest">
            UPLINK TO CLOUD CDN
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 text-center font-medium mt-2">Deploying application builds to secure cloud edge containers with active SSL.</p>
    </div>
  );
}
