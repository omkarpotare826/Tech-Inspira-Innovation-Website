"use client";

import React, { useState } from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export default function AiAutomationPage() {
  // Calculator state
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(2500);

  // Computations
  const getHoursSavedMonth = () => {
    return Math.round(teamSize * hoursPerWeek * 4.3);
  };

  const getCostSavedMonth = () => {
    return getHoursSavedMonth() * hourlyWage;
  };

  const getAnnualRoi = () => {
    let monthlySavings = getCostSavedMonth();
    let setupCost = 200000 + teamSize * 12000;
    let annualSavings = monthlySavings * 12;
    return Math.max(100, Math.round(((annualSavings - setupCost) / setupCost) * 100));
  };

  const workflowSteps = [
    { step: "01", title: "Workflow Audit", description: "Mapping your current toolset and identifying bottlenecks and repetitive tasks." },
    { step: "02", title: "Automation Design", description: "Designing logic flows, trigger rules, and choosing automation bridges (Zapier, Make, custom scripts)." },
    { step: "03", title: "API Integration", description: "Linking tools like CRMs, emails, scheduling, Slack, and Google Sheets." },
    { step: "04", title: "AI Prompt Training", description: "Training OpenAI/Claude prompts for smart classification and drafting tasks." },
    { step: "05", title: "Launch & Monitoring", description: "Running test workflows, configuring alerts, and monitoring logs for errors." },
  ];

  return (
    <ServiceLayout
      title="AI Automation"
      subtitle="We help businesses automate repetitive workflows, save thousands of employee hours, and leverage custom AI agents to draft emails, qualify leads, and manage schedules automatically."
      serviceId="ai-automation"
      interactiveTool={
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Automation ROI Calc</h3>
            <p className="text-xs text-slate-400">Calculate hours and capital saved by automating workflows.</p>
          </div>

          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Team Size: {teamSize}</span>
              <span className="text-slate-500 font-semibold">1 - 50</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 2: Hours per Employee */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Hours Saved/Emp/Week: {hoursPerWeek}h</span>
              <span className="text-slate-500 font-semibold">1 - 20h</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Slider 3: Wage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Avg Hourly Wage: ₹{hourlyWage.toLocaleString('en-IN')}/hr</span>
              <span className="text-slate-500 font-semibold">₹1,000 - ₹8,000</span>
            </div>
            <input
              type="range"
              min="1000"
              max="8000"
              step="100"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/10 text-center">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Hours Saved/Mo</span>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                {getHoursSavedMonth()} hrs
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Capital Saved/Mo</span>
              <div className="text-sm sm:text-base font-extrabold text-white">₹{getCostSavedMonth().toLocaleString('en-IN')}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold text-slate-500">Estimated ROI</span>
              <div className="text-sm sm:text-base font-extrabold text-brand-cyan flex items-center justify-center gap-0.5">
                <Zap className="w-3.5 h-3.5 fill-brand-cyan" />
                {getAnnualRoi()}%
              </div>
            </div>
          </div>
        </div>
      }
      interactiveObject={
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 radial-glow opacity-30 blur-xl" />

          {/* Interactive Automation Graph */}
          <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] drop-shadow-2xl">
            {/* Connection Lines with animated dashes representing signals */}
            <path d="M40,50 L100,100" stroke="#00a8ff" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
            <path d="M40,150 L100,100" stroke="#00a8ff" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M100,100 L160,100" stroke="#00d2ff" strokeWidth="3" strokeDasharray="6 6" />

            {/* Signal Pulses traveling based on calculations speed */}
            <circle cx="70" cy="75" r="4" fill="#00d2ff" className="animate-ping" style={{ animationDuration: hoursPerWeek > 10 ? '1s' : '2.5s' }} />
            <circle cx="130" cy="100" r="5" fill="#00d2ff" className="animate-ping" style={{ animationDuration: hoursPerWeek > 10 ? '0.8s' : '2s' }} />

            {/* Input Trigger Node 1 */}
            <g className="cursor-pointer group">
              <circle cx="40" cy="50" r="16" fill="#0b172a" stroke="#00a8ff" strokeWidth="2" />
              <text x="40" y="53" textAnchor="middle" fill="#00d2ff" fontSize="8" fontWeight="bold">EMAIL</text>
            </g>

            {/* Input Trigger Node 2 */}
            <g className="cursor-pointer group">
              <circle cx="40" cy="150" r="16" fill="#0b172a" stroke="#00a8ff" strokeWidth="2" />
              <text x="40" y="153" textAnchor="middle" fill="#00d2ff" fontSize="8" fontWeight="bold">LEADS</text>
            </g>

            {/* Central AI Engine Router Node */}
            <g className="cursor-pointer group animate-float">
              <circle cx="100" cy="100" r="24" fill="#040d21" stroke="#00d2ff" strokeWidth="3.5" />
              <text x="100" y="103" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="extrabold" className="animate-pulse">AI</text>
            </g>

            {/* Output Node */}
            <g className="cursor-pointer group">
              <circle cx="160" cy="100" r="16" fill="#0b172a" stroke="#00a8ff" strokeWidth="2" />
              <text x="160" y="103" textAnchor="middle" fill="#00d2ff" fontSize="8" fontWeight="bold">CRM</text>
            </g>
          </svg>

          {/* Floating Indicators */}
          <div className="absolute top-[10%] right-[-10%] glass-card px-2.5 py-1.5 rounded-lg border border-brand-cyan/20 text-[9px] font-bold text-brand-cyan uppercase flex items-center gap-1.5 scale-90">
            <ShieldCheck className="w-3 h-3 text-brand-cyan" /> Zapier / Make
          </div>
        </div>
      }
      workflowSteps={workflowSteps}
    />
  );
}
