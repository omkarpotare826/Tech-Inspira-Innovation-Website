"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Monitor, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function SamarthPapadCaseStudy() {
  const [activeTimelineYear, setActiveTimelineYear] = useState<number>(2002);
  const [activeTab, setActiveTab] = useState<"hero" | "about" | "products" | "cart" | "payment" | "footer">("hero");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  interface ShowcaseTab {
    id: "hero" | "about" | "products" | "cart" | "payment" | "footer";
    name: string;
    image: string;
    mobileImage?: string;
    tagline: string;
    metrics: string;
    description: string;
  }

  const showcaseTabs: ShowcaseTab[] = [
    {
      id: "hero" as const,
      name: "Home Hero",
      image: "/images/papad-hero.png",
      mobileImage: "/images/papad-hero-mobile.png",
      tagline: "Modernized Visual Welcomer",
      metrics: "Sub-2.0s Load Speed",
      description: "A warm and inviting landing banner emphasizing heritage ('Welcome to Samarth Papad'), premium call-to-actions, and integrated contact actions."
    },
    {
      id: "about" as const,
      name: "Heritage & About",
      image: "/images/papad-about.png",
      mobileImage: "/images/papad-about-mobile.png",
      tagline: "Hygienic Values & Storytelling",
      metrics: "100% Quality Assurance",
      description: "An informative section highlighting traditional taste, hygienic hand-made processes, retail/wholesale orders, and 12-month fresh availability."
    },
    {
      id: "products" as const,
      name: "Product Catalog",
      image: "/images/papad-products.png",
      mobileImage: "/images/papad-products-mobile.png",
      tagline: "Conversion Optimized Catalog",
      metrics: "+38% Order Volume",
      description: "A clear grid showcase of authentic Maharashtrian papad packs (Urad, Moong, Sabudana) with Marathi annotations, price lists, and responsive ordering buttons."
    },
    {
      id: "cart" as const,
      name: "Active Cart",
      image: "/images/papad-cart.png",
      mobileImage: "/images/papad-cart-mobile.png",
      tagline: "Fluid Dynamic Cart Sidebar",
      metrics: "Seamless UX",
      description: "An intuitive cart overlay letting customers adjust item weights, view realtime totals, and proceed directly to checkout without page reloads."
    },
    {
      id: "payment" as const,
      name: "Checkout Payment",
      image: "/images/papad-payment.png",
      mobileImage: "/images/papad-payment-mobile.png",
      tagline: "Integrated Razorpay Gateway",
      metrics: "99.9% Payment Success",
      description: "A secure, customized payment page that integrates direct order tracking and multiple payment methods for seamless nationwide retail fulfillment."
    },
    {
      id: "footer" as const,
      name: "Footer & Brand Info",
      image: "/images/papad-footer.png",
      mobileImage: "/images/papad-footer-mobile.png",
      tagline: "Engaging Footer & Contact",
      metrics: "Informative & Clean",
      description: "A well-structured footer section featuring wholesale/retail order calls, navigation quick links, local contact coordinates, and brand assurance statements."
    }
  ];

  const currentTab = showcaseTabs.find(t => t.id === activeTab) || showcaseTabs[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 selection:bg-brand-blue/30 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 pb-12 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none opacity-25 z-0">
          <div className="grid-3d-floor" />
        </div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full radial-glow opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Back button */}
          <div className="mb-10 text-left">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          {/* Core Header */}
          <div className="max-w-4xl space-y-4 mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              Traditional Gruh Udyog Case Study
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Samarth Papad
              </span>
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl">
              Modernizing an authentic Maharashtrian papad and kurdai brand through an ultra-fast digital store, Razorpay checkouts, and transparent ingredient visualizers.
            </p>
          </div>

          {/* Showcase Control Panel & Device Switcher */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10 text-left">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-cyan">interactive workspace</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">Portfolio Screenshot Vault</h3>
            </div>
            
            {/* Device Switcher */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950/60 border border-brand-border/30">
              <button
                onClick={() => setDeviceMode("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  deviceMode === "desktop"
                    ? "bg-brand-cyan text-[#020617] font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                onClick={() => setDeviceMode("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  deviceMode === "mobile"
                    ? "bg-brand-cyan text-[#020617] font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>
          </div>

          {/* Premium Browser Mockup Container */}
          <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl border border-brand-border/30 bg-slate-950/40 backdrop-blur-xl flex flex-col overflow-hidden mb-8 shadow-2xl">
            {/* Browser Top Bar */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-brand-border/20 bg-slate-900/50 select-none">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="w-[60%] sm:w-[40%] h-5 bg-slate-950/60 rounded-md text-[10px] text-slate-500 flex items-center justify-center font-mono truncate px-2">
                www.samarthpapad.in/{activeTab}
              </div>
              <div className="w-6" /> {/* spacer */}
            </div>

            {/* Sub Tabs Bar */}
            <div className="flex border-b border-brand-border/10 bg-slate-950/30 overflow-x-auto select-none no-scrollbar">
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider border-r border-brand-border/10 shrink-0 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-brand-dark/80 text-brand-cyan border-b-2 border-b-brand-cyan"
                      : "text-slate-500 hover:text-slate-300 hover:bg-brand-dark/30"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            
            {/* Content Area */}
            <div className="flex-grow relative flex items-center justify-center bg-[#050b18] overflow-hidden p-6 group">
              <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent pointer-events-none" />
              
              {deviceMode === "desktop" ? (
                /* Desktop Viewport */
                <div className="w-full h-full rounded-2xl border border-brand-border/20 overflow-y-auto bg-slate-950/80 shadow-2xl relative custom-scrollbar flex justify-center items-start">
                  <img
                    src={currentTab.image}
                    alt={currentTab.name}
                    className="w-full h-auto object-contain object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ) : (
                /* Mobile Mockup Viewport */
                <div className="relative w-[280px] h-[360px] sm:h-[420px] bg-slate-950 rounded-[40px] border-[6px] border-slate-800 shadow-2xl p-2.5 overflow-hidden flex flex-col justify-between transition-all duration-500 animate-fadeIn">
                  {/* Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-slate-800 rounded-full z-30" />
                  
                  {/* Mobile Screen content (Scrollable Screenshot) */}
                  <div className="w-full h-full rounded-[30px] overflow-y-auto bg-[#050b18] border border-slate-900/60 custom-scrollbar select-none relative">
                    <img
                      src={currentTab.mobileImage || currentTab.image}
                      alt={currentTab.name}
                      className="w-full h-auto object-contain object-top opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Screen Information block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl border border-brand-border/25 bg-[#040e24]/60 backdrop-blur-md mb-28 text-left relative overflow-hidden">
            <div className="absolute right-6 top-6 text-7xl font-black text-slate-800/10 select-none uppercase font-mono">
              {activeTab}
            </div>
            
            <div className="md:col-span-8 space-y-3 relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-lg font-black text-white uppercase tracking-wider">{currentTab.tagline}</span>
                <span className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                  {currentTab.metrics}
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                {currentTab.description}
              </p>
            </div>
            
            <div className="md:col-span-4 flex items-center md:justify-end justify-start relative z-10">
              <a
                href="https://www.samarthpapad.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-orange-500 text-orange-500 text-xs font-bold uppercase tracking-wider transition-all hover:bg-orange-500 hover:text-[#020617] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer"
              >
                Visit Live Site
              </a>
            </div>
          </div>

          {/* Section: Challenge vs Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-28 items-center text-left">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-[10px] tracking-[0.2em] font-semibold text-orange-500 uppercase">The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-none">Expanding Beyond Local Markets</h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                Samarth Papad has built a reputation for producing high-quality, homemade papads and kurdais. However, they faced difficulty scaling their retail outreach due to a lack of direct online checkouts, leading to manual phone ordering pipelines. They needed an easy-to-use e-commerce store with integrated secure payments to allow automated order fulfillment nationwide.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">Our Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-none">Seamless Razorpay E-commerce Store</h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                We designed and deployed a streamlined Next.js storefront incorporating a visual product catalog switcher and direct Razorpay checkout automation. The new digital store simplifies ordering down to a single click, allowing customers to easily buy fresh homemade products throughout the year.
              </p>
            </div>
          </div>

          {/* Legacy Timeline Experience */}
          <div className="mb-28 text-left relative">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-orange-500 font-bold">Brand Heritage</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Brand Journey</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                See how we helped Samarth Papad expand from a home-based Gruh Udyog into a digital store.
              </p>
            </div>

            {/* Timeline Horizontal Selector */}
            <div className="max-w-xl mx-auto flex justify-between items-center border-b border-brand-border/20 pb-4 mb-10 relative">
              <div className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500" 
                style={{ 
                  width: "33.33%", 
                  left: activeTimelineYear === 2002 ? "0%" : activeTimelineYear === 2015 ? "33.33%" : "66.66%" 
                }} 
              />
              {[2002, 2015, 2026].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveTimelineYear(year)}
                  className={`text-sm sm:text-base font-extrabold uppercase tracking-widest cursor-pointer px-4 pb-2 transition-colors ${
                    activeTimelineYear === year ? "text-orange-500" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {year === 2026 ? (
                    <span>
                      2026<span className="hidden sm:inline"> (Digital Launch)</span>
                    </span>
                  ) : (
                    year
                  )}
                </button>
              ))}
            </div>

            {/* Active Year Card Display */}
            <div className="max-w-2xl mx-auto p-8 rounded-3xl glass-card border border-brand-border/25 bg-brand-dark/40 shadow-xl min-h-[160px] flex flex-col justify-center items-start space-y-3 relative overflow-hidden">
              <div className="absolute right-6 top-6 text-7xl font-black text-slate-800/15 select-none font-mono">
                {activeTimelineYear}
              </div>
              
              {activeTimelineYear === 2002 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Gruh Udyog Roots</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Started as a home-based enterprise in Maharashtra, focusing on handmade, sun-dried urad and moong papads using premium natural ingredients.
                  </p>
                </div>
              )}
              {activeTimelineYear === 2015 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Hygienic Scale & Packaging</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Established standard manufacturing hygiene benchmarks and launched modern packaging solutions, expanding wholesale distributions to regional retail chains.
                  </p>
                </div>
              )}
              {activeTimelineYear === 2026 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Automated Online Store</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Deployed the custom Next.js storefront with Razorpay checkout. Nationwide delivery automation enables customers to order fresh, handmade papad directly from their phones.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Project Details metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24 text-center">
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Order Completion</span>
              <div className="text-2xl font-black text-white">99.9%</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Monthly Order Volume</span>
              <div className="text-2xl font-black text-white">+38%</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mobile Load Speed</span>
              <div className="text-2xl font-black text-orange-400">Sub-2.0s</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Direct Checkouts</span>
              <div className="text-2xl font-black text-orange-400">+54%</div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Contact Form */}
      <Contact />
    </div>
  );
}
