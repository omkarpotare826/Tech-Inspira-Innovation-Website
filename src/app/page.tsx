import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import ServicesDetail from "@/components/ServicesDetail";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 selection:bg-brand-blue/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <ServicesOverview />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ServicesDetail />
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}
