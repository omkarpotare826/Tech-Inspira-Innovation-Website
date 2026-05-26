"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { User, Bell, MessageSquare, CreditCard, WifiOff } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  // Config state
  const [platform, setPlatform] = useState<"iOS" | "Android" | "Both">("Both");
  const [features, setFeatures] = useState({
    auth: true,
    notifications: false,
    chat: false,
    payments: false,
    offline: false,
  });

  const toggleFeature = (key: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Computations
  const getEstimatedBudget = () => {
    let base = 60000;
    if (features.auth) base += 15000;
    if (features.notifications) base += 12000;
    if (features.chat) base += 25000;
    if (features.payments) base += 20000;
    if (features.offline) base += 18000;

    let multiplier = platform === "Both" ? 1.6 : 1.0;
    return Math.round(base * multiplier);
  };

  const getTimelineWeeks = () => {
    let base = 4;
    let count = Object.values(features).filter(Boolean).length;
    let multiplier = platform === "Both" ? 1.4 : 1.0;
    return Math.round((base + count * 1.5) * multiplier);
  };

  const getDbTech = () => {
    if (features.chat || features.offline) return "MongoDB / SQLite";
    return "Firebase / Supabase";
  };

  const workflowSteps = [
    { step: "01", title: "App Scoping", description: "Mapping core modules, logic flowcharts, and selecting native vs cross-platform framework." },
    { step: "02", title: "Interface Design", description: "Designing native screens, navigation grids, and interactive touch assets." },
    { step: "03", title: "Core Coding", description: "Coding the core application in React Native / Flutter and linking REST APIs." },
    { step: "04", title: "Beta Test", description: "Setting up sandboxes on TestFlight and Google Play Console for private client testing." },
    { step: "05", title: "App Launch", description: "Preparing app descriptions, keywords, assets, and submitting to Apple & Google Stores." },
  ];

  return (
    <ServiceLayout
      title="Mobile App Development"
      subtitle="We build powerful, secure, and native-feeling mobile applications for iOS & Android. Leveraging cross-platform frameworks, we deliver fast-performing apps with a single codebase."
      serviceId="mobile-app-development"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">App Spec Planner</h3>
            <p className="text-xs text-slate-400">Select platforms and features to estimate project parameters.</p>
          </div>

          {/* Platform selection */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Target Stores</span>
            <div className="grid grid-cols-3 gap-2">
              {["iOS", "Android", "Both"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p as any)}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 ${
                    platform === p
                      ? "bg-brand-cyan text-[#020617] border border-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                      : "bg-brand-dark/50 text-slate-400 border border-brand-border/20 hover:border-brand-cyan/40"
                  }`}
                >
                  {p === "Both" ? "iOS + Android" : p}
                </button>
              ))}
            </div>
          </div>

          {/* Features check list */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Required Features</span>
            
            <div className="space-y-2">
              {/* Feature 1 */}
              <button
                onClick={() => toggleFeature("auth")}
                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  features.auth ? "border-brand-cyan/40 bg-brand-cyan/5 text-white" : "border-brand-border/20 bg-brand-dark/30 text-slate-400 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider">User Authentication</span>
                </div>
                <span className="text-xs font-bold">₹15,000</span>
              </button>

              {/* Feature 2 */}
              <button
                onClick={() => toggleFeature("notifications")}
                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  features.notifications ? "border-brand-cyan/40 bg-brand-cyan/5 text-white" : "border-brand-border/20 bg-brand-dark/30 text-slate-400 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider">Push Notifications</span>
                </div>
                <span className="text-xs font-bold">₹12,000</span>
              </button>

              {/* Feature 3 */}
              <button
                onClick={() => toggleFeature("chat")}
                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  features.chat ? "border-brand-cyan/40 bg-brand-cyan/5 text-white" : "border-brand-border/20 bg-brand-dark/30 text-slate-400 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider">Chat & Messaging</span>
                </div>
                <span className="text-xs font-bold">₹25,000</span>
              </button>

              {/* Feature 4 */}
              <button
                onClick={() => toggleFeature("payments")}
                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  features.payments ? "border-brand-cyan/40 bg-brand-cyan/5 text-white" : "border-brand-border/20 bg-brand-dark/30 text-slate-400 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider">Payment gateway</span>
                </div>
                <span className="text-xs font-bold">₹20,000</span>
              </button>

              {/* Feature 5 */}
              <button
                onClick={() => toggleFeature("offline")}
                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-colors ${
                  features.offline ? "border-brand-cyan/40 bg-brand-cyan/5 text-white" : "border-brand-border/20 bg-brand-dark/30 text-slate-400 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <WifiOff className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider">Offline Sync Support</span>
                </div>
                <span className="text-xs font-bold">₹18,000</span>
              </button>
            </div>
          </div>

          {/* Stats Output */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Est. Budget</span>
              <div className="text-sm sm:text-base font-extrabold text-white">₹{getEstimatedBudget().toLocaleString('en-IN')}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Timeline</span>
              <div className="text-sm sm:text-base font-extrabold text-brand-cyan">{getTimelineWeeks()} Weeks</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Tech Stack</span>
              <div className="text-[9px] font-bold text-white mt-1 leading-normal">{getDbTech()}</div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center perspective-3d group">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Rotating smartphone frame */}
          <div className="tilt-3d-card relative w-[65%] aspect-[0.5] bg-[#020617] rounded-[36px] border-4 border-[#374151] shadow-2xl p-2 flex flex-col justify-between overflow-hidden">
            {/* Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-3 bg-[#374151] rounded-full z-20" />

            {/* Screen */}
            <div className="w-full h-full bg-[#050b18] rounded-[28px] p-4 pt-8 flex flex-col justify-between select-none relative">
              {/* Header */}
              <div className="flex justify-between items-center pb-2 border-b border-brand-border/15">
                <span className="text-[8px] font-bold text-white">App Simulator</span>
                <span className="text-[6px] text-brand-cyan uppercase tracking-widest">{platform === "Both" ? "iOS/Android" : platform}</span>
              </div>

              {/* Main Content Grid showing active features */}
              <div className="grid grid-cols-2 gap-3 my-auto">
                {/* Auth Icon */}
                <div className={`p-2 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
                  features.auth ? "border-brand-cyan/35 bg-brand-cyan/5 text-brand-cyan scale-100" : "border-slate-800 bg-[#081024]/40 text-slate-700 scale-90"
                }`}>
                  <User className="w-4 h-4" />
                  <span className="text-[5px] font-bold uppercase tracking-wider">Auth</span>
                </div>

                {/* Notifications Icon */}
                <div className={`p-2 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
                  features.notifications ? "border-brand-cyan/35 bg-brand-cyan/5 text-brand-cyan scale-100" : "border-slate-800 bg-[#081024]/40 text-slate-700 scale-90"
                }`}>
                  <Bell className="w-4 h-4" />
                  <span className="text-[5px] font-bold uppercase tracking-wider">Alerts</span>
                </div>

                {/* Chat Icon */}
                <div className={`p-2 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
                  features.chat ? "border-brand-cyan/35 bg-brand-cyan/5 text-brand-cyan scale-100" : "border-slate-800 bg-[#081024]/40 text-slate-700 scale-90"
                }`}>
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-[5px] font-bold uppercase tracking-wider">Chat</span>
                </div>

                {/* Payments Icon */}
                <div className={`p-2 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
                  features.payments ? "border-brand-cyan/35 bg-brand-cyan/5 text-brand-cyan scale-100" : "border-slate-800 bg-[#081024]/40 text-slate-700 scale-90"
                }`}>
                  <CreditCard className="w-4 h-4" />
                  <span className="text-[5px] font-bold uppercase tracking-wider">Pay</span>
                </div>
              </div>

              {/* Offline icon indicator */}
              <div className="flex justify-between items-center pt-2 border-t border-brand-border/10">
                <span className="text-[6px] text-slate-500 font-bold uppercase">SQLite Cache</span>
                <WifiOff className={`w-3.5 h-3.5 transition-colors ${features.offline ? "text-brand-cyan" : "text-slate-800"}`} />
              </div>
            </div>
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
