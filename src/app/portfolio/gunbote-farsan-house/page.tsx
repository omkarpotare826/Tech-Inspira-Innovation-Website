"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, ShoppingBag, MapPin, Monitor, Smartphone, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function GunboteFarsanCaseStudy() {
  const [cartCount, setCartCount] = useState(0);
  const [activeIngredientCard, setActiveIngredientCard] = useState<number | null>(null);
  const [activeTimelineYear, setActiveTimelineYear] = useState<number>(1990);
  const [selectedOutlet, setSelectedOutlet] = useState<"deccan" | "kothrud" | "hadapsar" | "pimple">("deccan");

  const [activeTab, setActiveTab] = useState<"hero" | "bestsellers" | "categories" | "banner" | "delivery" | "cart" | "payment" | "login">("hero");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  const showcaseTabs = [
    {
      id: "hero" as const,
      name: "Home Hero",
      image: "/images/farsan-hero.png",
      mobileImage: "/images/farsan-hero-mobile.jpg",
      tagline: "Regional Taste Branding",
      metrics: "Sub-2.1s Load Speed",
      description: "A cinematic homepage welcome section that merges traditional Maharashtrian slogans (घरगुती स्वाद, आपुलकीचा गोडवा) with a premium navigation layout and high-end typography."
    },
    {
      id: "bestsellers" as const,
      name: "Bestseller Shelf",
      image: "/images/farsan-bestsellers.png",
      mobileImage: "/images/farsan-bestsellers-mobile.jpg",
      tagline: "Conversion Optimized Products",
      metrics: "+32% Direct Engagement",
      description: "A beautiful bestseller showcase displaying product cards with clear pricing in Rupees (₹70.00), ratings, trust badges (Daily Fresh, Secure Payment), and active add-to-cart flows."
    },
    {
      id: "categories" as const,
      name: "Snack Categories",
      image: "/images/farsan-categories.png",
      mobileImage: "/images/farsan-categories-mobile.jpg",
      tagline: "Visual Catalog Navigation",
      metrics: "48% Dropoff Reduction",
      description: "Circular dynamic category segments (Shev, Chivda, Sweets, Upwas) designed with micro-hover expansions to encourage intuitive content discovery."
    },
    {
      id: "banner" as const,
      name: "Interactive Banner",
      image: "/images/farsan-banner.png",
      mobileImage: "/images/farsan-banner-mobile.jpg",
      tagline: "Ingredient Visual Guides",
      metrics: "60FPS Fluid Transition",
      description: "Custom graphical banner illustrating core recipe dishes (Bhel Bhadang, Tukda Chakli) with elegant handwritten labels and dynamic indicator lines."
    },
    {
      id: "delivery" as const,
      name: "Quick Delivery",
      image: "/images/farsan-delivery.png",
      mobileImage: "/images/farsan-delivery-mobile.jpg",
      tagline: "Aggregator Integration Hub",
      metrics: "+41% Retention Increase",
      description: "Branded Zomato and Swiggy shortcut action buttons combined with stylized illustrations of delivery drivers, making order placement accessible."
    },
    {
      id: "cart" as const,
      name: "Active Cart",
      image: "/images/farsan-cart.png",
      mobileImage: "/images/farsan-cart-mobile.jpg",
      tagline: "Seamless Cart Experience",
      metrics: "Frictionless Ordering",
      description: "A clean slide-out cart drawer showing order item details, pricing adjustments, quantity controls, and direct checkout call-to-actions without leaving the page."
    },
    {
      id: "payment" as const,
      name: "Checkout Payment",
      image: "/images/farsan-payment.png",
      mobileImage: "/images/farsan-payment-mobile.jpg",
      tagline: "Multi-channel Gateways",
      metrics: "Razorpay Integration",
      description: "A premium Razorpay payment modal integration supporting active scanning of UPI QR codes, cards, netbanking, and wallet systems to maximize conversion rates."
    },
    {
      id: "login" as const,
      name: "Client Log In",
      image: "/images/farsan-login.png",
      mobileImage: "/images/farsan-login-mobile.jpg",
      tagline: "Secure Authentication",
      metrics: "OAuth & JWT Enabled",
      description: "A minimalist, clean modal login flow supporting Google and Facebook social authentication alongside traditional email access options."
    }
  ];

  const currentTab = showcaseTabs.find(t => t.id === activeTab) || showcaseTabs[0];

  // Snacks details for the Interactive Cards
  const snacks = [
    {
      id: 1,
      name: "Special Chiwda",
      tagline: "Cashew & Raisin Blend",
      ingredients: "Premium flattened rice (Poha), roasted cashews, sweet raisins, green chillies, curry leaves, and traditional spice blend.",
      price: "₹180",
      accent: "#f59e0b"
    },
    {
      id: 2,
      name: "Bakarwadi",
      tagline: "Sweet & Tangy Spirals",
      ingredients: "Gram flour (Besan), dynamic poppy seeds, dry grated coconut, tamarind paste, sesame seeds, and warm Maharashtrian garam masala.",
      price: "₹220",
      accent: "#ef4444"
    },
    {
      id: 3,
      name: "Shev / Sev",
      tagline: "Crispy Spiced Twigs",
      ingredients: "Sieved chickpea flour, double-refined peanut oil, ajwain seeds, hing (asafoetida), and mild red chilli powder.",
      price: "₹150",
      accent: "#10b981"
    }
  ];

  // Store Outlet details
  const outlets = {
    deccan: { name: "Deccan Gymkhana", address: "Shop 4, Gymkhana Chambers, Karve Rd, Pune 411004", hours: "9:00 AM - 10:00 PM", contact: "020-25448373" },
    kothrud: { name: "Kothrud Outlet", address: "Saraswati Corner, DP Road, Near Kothrud Bus Stand, Pune 411038", hours: "9:30 AM - 9:30 PM", contact: "020-25381990" },
    hadapsar: { name: "Hadapsar Hub", address: "Mega Center, Solapur Road, Near Akashwani, Pune 411028", hours: "10:00 AM - 10:00 PM", contact: "020-26871020" },
    pimple: { name: "Pimple Saudagar Store", address: "Roseland Plaza, Linear Garden Path, Pimple Saudagar, Pune 411027", hours: "10:00 AM - 9:30 PM", contact: "020-27209110" }
  };

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Marquee Case Study
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Gunbote Farsan House
              </span>
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl">
              Modernizing a legacy Maharashtrian snack brand established in 1990 through premium interactive ecommerce, cinematic food presentation, and glassmorphic UI.
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
                www.gunbotefarsanhouse.in/{activeTab}
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
              <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              
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
                <span className="px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-[10px] font-bold uppercase tracking-widest">
                  {currentTab.metrics}
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                {currentTab.description}
              </p>
            </div>
            
            <div className="md:col-span-4 flex items-center md:justify-end justify-start relative z-10">
              <a
                href="https://www.gunbotefarsanhouse.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-brand-cyan text-brand-cyan text-xs font-bold uppercase tracking-wider transition-all hover:bg-brand-cyan hover:text-[#020617] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] cursor-pointer"
              >
                Visit Live Site
              </a>
            </div>
          </div>

          {/* Section: Challenge vs Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-28 items-center text-left">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] tracking-[0.2em] font-semibold text-amber-500 uppercase">The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-none">Traditional Brand, Outdated Store</h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                Gunbote Farsan had a 30-year legacy of incredible traditional snacks in Pune, but their online store was outdated, slow, and not mobile-friendly. They needed a premium digital experience to match their reputation and showcase their products to modern online shoppers.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-cyan uppercase">Our Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-none">Ultra-Fast E-commerce Platform</h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                We designed and built a lightning-fast, high-end online store. It loads instantly on mobile, features beautiful interactive animations, shows clear ingredient details, and makes ordering authentic snacks a delightful experience.
              </p>
            </div>
          </div>

          {/* Product Interaction Concept: "Snack Experience Cards" */}
          <div className="mb-28 text-left">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-500">snack selector</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Snack Experience Cards</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Click on any product card below to reveal active ingredients and trigger our simulation cart loader.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {snacks.map((snack) => {
                const isActive = activeIngredientCard === snack.id;
                return (
                  <div 
                    key={snack.id}
                    className="relative rounded-3xl p-6 border border-brand-border/20 bg-brand-dark/50 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between items-start min-h-[280px]"
                    style={{
                      boxShadow: isActive ? `0 15px 30px rgba(0,0,0,0.5), 0 0 15px ${snack.accent}20` : ""
                    }}
                  >
                    <div className="w-full space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-black text-white">{snack.name}</span>
                        <span className="text-xs font-bold text-amber-500 font-mono">{snack.price}</span>
                      </div>
                      
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">{snack.tagline}</span>

                      {/* Expandable ingredients list */}
                      <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                        {isActive ? snack.ingredients : "Click 'Reveal Ingredients' below to check recipe transparency details."}
                      </p>
                    </div>

                    <div className="w-full border-t border-brand-border/10 pt-4 mt-6 flex justify-between items-center">
                      <button
                        onClick={() => setActiveIngredientCard(isActive ? null : snack.id)}
                        className="text-[9px] font-black text-brand-cyan hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
                      >
                        {isActive ? "Hide Details" : "Reveal Ingredients"}
                      </button>

                      <button
                        onClick={() => {
                          setCartCount(prev => prev + 1);
                        }}
                        className="px-3.5 py-1.5 rounded-full text-[9px] font-black text-[#020617] uppercase tracking-wider transition-all cursor-pointer hover:scale-105 active:scale-95"
                        style={{ backgroundColor: snack.accent }}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legacy Timeline Experience */}
          <div className="mb-28 text-left relative">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-cyan font-bold">Brand Heritage</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Legacy Timeline Experience</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Browse our brand journey from Pune traditional roots in 1990 to an online premium commerce store.
              </p>
            </div>

            {/* Timeline Horizontal Selector */}
            <div className="max-w-xl mx-auto flex justify-between items-center border-b border-brand-border/20 pb-4 mb-10 relative">
              <div className="absolute bottom-0 left-0 h-[2px] bg-brand-cyan transition-all duration-500" 
                style={{ 
                  width: "33.33%", 
                  left: activeTimelineYear === 1990 ? "0%" : activeTimelineYear === 2010 ? "33.33%" : "66.66%" 
                }} 
              />
              {[1990, 2010, 2026].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveTimelineYear(year)}
                  className={`text-sm sm:text-base font-extrabold uppercase tracking-widest cursor-pointer px-4 pb-2 transition-colors ${
                    activeTimelineYear === year ? "text-brand-cyan" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {year === 2026 ? (
                    <span>
                      2026<span className="hidden sm:inline"> (Launch)</span>
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
              
              {activeTimelineYear === 1990 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Pune Roots</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Started as a small local storefront in Pune, making traditional snacks batch-by-batch over wood fires using authentic family recipes.
                  </p>
                </div>
              )}
              {activeTimelineYear === 2010 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Growing Strong</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Opened multiple modern retail outlets across Pune while maintaining strict quality and our signature spice blends.
                  </p>
                </div>
              )}
              {activeTimelineYear === 2026 && (
                <div className="space-y-2 animate-fadeIn relative z-10">
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Global Digital Store</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    Launched a premium online store with cinematic media, transparent ingredient breakdowns, and fast, user-friendly mobile ordering.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pune Presence Store Locator Map */}
          <div className="mb-24 text-left">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-500">store locator</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Interactive Outlet Map</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Click on the location pins in Pune to easily find our physical store details, hours, and contacts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Interactive Vector Map (Left Col) */}
              <div className="lg:col-span-7 flex justify-center items-center">
                <div className="relative w-full max-w-[380px] aspect-square rounded-3xl border border-brand-border/20 bg-brand-dark/30 p-4">
                  {/* Decorative map outline */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Stylized Pune boundary contours */}
                    <path d="M40,50 Q80,20 130,40 T170,110 T140,170 T60,150 T30,100 Z" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="3" />
                    <path d="M50,60 Q90,30 140,50 T160,110 T130,160 T70,140 T40,110 Z" fill="none" stroke="rgba(0,210,255,0.04)" strokeWidth="1.5" />
                    
                    {/* Pimple Saudagar Pin */}
                    <g 
                      onClick={() => setSelectedOutlet("pimple")}
                      className="cursor-pointer group/pin"
                    >
                      <circle cx="70" cy="50" r="12" fill={selectedOutlet === "pimple" ? "rgba(0,210,255,0.15)" : "transparent"} className="animate-ping" style={{ animationDuration: '3s' }} />
                      <circle cx="70" cy="50" r="5" fill={selectedOutlet === "pimple" ? "#00d2ff" : "#3b82f6"} />
                    </g>

                    {/* Deccan Gymkhana Pin */}
                    <g 
                      onClick={() => setSelectedOutlet("deccan")}
                      className="cursor-pointer group/pin"
                    >
                      <circle cx="100" cy="90" r="12" fill={selectedOutlet === "deccan" ? "rgba(0,210,255,0.15)" : "transparent"} className="animate-ping" style={{ animationDuration: '2.5s' }} />
                      <circle cx="100" cy="90" r="5" fill={selectedOutlet === "deccan" ? "#00d2ff" : "#3b82f6"} />
                    </g>

                    {/* Kothrud Pin */}
                    <g 
                      onClick={() => setSelectedOutlet("kothrud")}
                      className="cursor-pointer group/pin"
                    >
                      <circle cx="60" cy="120" r="12" fill={selectedOutlet === "kothrud" ? "rgba(0,210,255,0.15)" : "transparent"} className="animate-ping" style={{ animationDuration: '3.5s' }} />
                      <circle cx="60" cy="120" r="5" fill={selectedOutlet === "kothrud" ? "#00d2ff" : "#3b82f6"} />
                    </g>

                    {/* Hadapsar Pin */}
                    <g 
                      onClick={() => setSelectedOutlet("hadapsar")}
                      className="cursor-pointer group/pin"
                    >
                      <circle cx="150" cy="140" r="12" fill={selectedOutlet === "hadapsar" ? "rgba(0,210,255,0.15)" : "transparent"} className="animate-ping" style={{ animationDuration: '3s' }} />
                      <circle cx="150" cy="140" r="5" fill={selectedOutlet === "hadapsar" ? "#00d2ff" : "#3b82f6"} />
                    </g>

                    {/* Pune Rivers intersection design (Mula Mutha) */}
                    <path d="M20,100 Q80,95 100,90 T180,85" stroke="rgba(0,210,255,0.06)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Outlet details card (Right Col) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="p-8 rounded-3xl glass-card border border-brand-border/25 bg-[#040e24]/80 shadow-2xl relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-black text-white uppercase tracking-wider">
                        {outlets[selectedOutlet].name}
                      </h4>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-brand-border/10">
                      <div className="text-left text-xs font-semibold text-slate-400">
                        <span className="font-extrabold text-slate-300 block uppercase tracking-widest text-[9px] pb-1">Location Address</span>
                        {outlets[selectedOutlet].address}
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="text-left">
                          <span className="font-extrabold text-slate-300 block uppercase tracking-widest text-[9px] pb-1">Store Hours</span>
                          <span className="text-xs font-semibold text-slate-400">{outlets[selectedOutlet].hours}</span>
                        </div>
                        <div className="text-left">
                          <span className="font-extrabold text-slate-300 block uppercase tracking-widest text-[9px] pb-1">Contact Number</span>
                          <span className="text-xs font-semibold text-slate-400">{outlets[selectedOutlet].contact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24 text-center">
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Retention</span>
              <div className="text-2xl font-black text-white">+41%</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Product Clicks</span>
              <div className="text-2xl font-black text-white">+32%</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mobile Load Speed</span>
              <div className="text-2xl font-black text-brand-cyan">Sub-2.1s</div>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-brand-border/20 bg-brand-dark/40 space-y-1">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">User Engagement</span>
              <div className="text-2xl font-black text-brand-cyan">+48%</div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Contact Form */}
      <Contact />
    </div>
  );
}
