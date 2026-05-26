"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "portfolio", "testimonials", "contact"];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { name: "Home", href: isHome ? "#home" : "/" },
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "Portfolio", href: isHome ? "#portfolio" : "/#portfolio" },
    { name: "Testimonials", href: isHome ? "#testimonials" : "/#testimonials" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#020617]/80 backdrop-blur-md border-b border-brand-border/35 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo showSubtitle={true} iconSize={32} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full ${
                link.href === `#${activeSection}`
                  ? "text-brand-cyan after:w-full"
                  : "text-slate-300 hover:text-brand-cyan after:w-0"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href='tel:8767302763' className='flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-green-400 transition-colors'>
            <Phone className='w-4 h-4' /> 8767302763
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#020617] bg-brand-cyan hover:bg-[#00a8ff] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Start Project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-brand-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-lg border-b border-brand-border/50 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-cyan transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a href='tel:8767302763' onClick={() => setIsOpen(false)} className='flex items-center justify-center gap-1.5 text-sm font-medium text-slate-300 hover:text-green-400 transition-colors'>
            <Phone className='w-4 h-4' /> 8767302763
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-sm font-semibold uppercase tracking-wider text-[#020617] bg-brand-cyan hover:bg-[#00a8ff] px-6 py-3 rounded-full transition-colors duration-300"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
}
