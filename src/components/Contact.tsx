"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Phone,
  Mail,
  Globe,
  Send,
} from "lucide-react";
import Logo from "./Logo";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry — ${service} | from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService Required: ${service}\n\nProject Details:\n${message}`
    );
    window.location.href = `mailto:inspira.innovations00@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus("success");
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020617] border-t border-brand-border/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full radial-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Inner Panel Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Take Your <br />
            Business to the <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,168,255,0.2)]">Next Level?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Contact us today for a free consultation and let's discuss how we can build something amazing together.
          </p>
        </div>

        {/* Contact Glassmorphism Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#040e24]/90 to-[#020818]/90 border border-brand-border/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Side: Interactive Contact Form */}
            <div className="space-y-6">
              {formStatus === "success" ? (
                <div className="p-6 rounded-2xl bg-brand-cyan/5 border border-brand-border/20 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">Inquiry Sent!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {name}! We have received your inquiry and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setFormStatus("idle"); setName(""); setEmail(""); setMessage(""); }}
                    className="text-xs font-bold text-brand-cyan underline uppercase tracking-widest hover:text-white transition-colors pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase leading-none">
                      Let's Build Something <br />
                      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Amazing Together!</span>
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">
                      Fill out this form and we'll reach out to discuss your project.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-xl border border-brand-border/30 bg-brand-dark/50 text-xs text-white placeholder-slate-600 focus:border-brand-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-xl border border-brand-border/30 bg-brand-dark/50 text-xs text-white placeholder-slate-600 focus:border-brand-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Service Required</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-brand-border/30 bg-brand-dark/95 text-xs text-white focus:border-brand-cyan focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Mobile App Dev">Mobile App Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Digital Marketing">Digital Marketing / SEO</option>
                      <option value="Other">Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Project Details</label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project, timeline, or requirements..."
                      className="w-full px-4 py-2 rounded-xl border border-brand-border/30 bg-brand-dark/50 text-xs text-white placeholder-slate-600 focus:border-brand-cyan focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-cyan disabled:bg-slate-700 text-white hover:text-[#020617] py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side: Grid of 4 Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Instagram */}
              <a
                href="https://instagram.com/inspiraatech"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl border border-brand-border/20 bg-brand-dark/50 hover:border-brand-cyan/45 hover:bg-brand-cyan/5 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#c13584]/10 border border-[#c13584]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-[#c13584]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">@inspiraatech</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8767302763"
                className="group p-4 rounded-2xl border border-brand-border/20 bg-brand-dark/50 hover:border-brand-cyan/45 hover:bg-brand-cyan/5 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">8767302763</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:inspira.innovations00@gmail.com"
                className="group p-4 rounded-2xl border border-brand-border/20 bg-brand-dark/50 hover:border-brand-cyan/45 hover:bg-brand-cyan/5 transition-all duration-300 flex items-center gap-4 col-span-1 sm:col-span-2 overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-brand-cyan transition-colors">
                    inspira.innovations00@gmail.com
                  </span>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://www.techinspirainnovation.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl border border-brand-border/20 bg-brand-dark/50 hover:border-brand-cyan/45 hover:bg-brand-cyan/5 transition-all duration-300 flex items-center gap-4 col-span-1 sm:col-span-2 overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Website</span>
                  <span className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-brand-cyan transition-colors">
                    www.techinspirainnovation.in
                  </span>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* Footer Bottom elements */}
        <div className="mt-24 border-t border-brand-border/15 pt-8 flex flex-col items-center space-y-6">
          <Link href="/">
            <Logo showSubtitle={true} iconSize={40} />
          </Link>
          
          {/* Tagline */}
          <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.3em] text-slate-500 uppercase flex flex-wrap justify-center gap-2 sm:gap-4 select-none">
            <span>Innovate</span>
            <span className="text-brand-cyan">•</span>
            <span>Design</span>
            <span className="text-brand-cyan">•</span>
            <span>Develop</span>
            <span className="text-brand-cyan">•</span>
            <span>Grow</span>
          </div>

          {/* Copyright */}
          <div className="text-[10px] font-semibold text-slate-600 text-center">
            &copy; {new Date().getFullYear()} Tech Inspira Innovation. All Rights Reserved.
          </div>

        </div>

      </div>
    </section>
  );
}
