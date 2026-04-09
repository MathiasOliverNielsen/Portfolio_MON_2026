"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Roterende tekster i hero-titlen
const roles = ["Web Udvikler", "Frontend Udvikler", "React Udvikler"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Skifter rolle hvert 3. sekund med fade
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan/10 via-transparent to-transparent rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="hero-grid max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center w-full relative z-[1]">
        {/* Left – tekst */}
        <div className="space-y-6">
          <div className="inline-block bg-cyan-dim border border-cyan/30 text-cyan text-[0.75rem] tracking-wider uppercase px-[14px] py-[6px] transition-all duration-300 hover:border-cyan/60 hover:shadow-lg hover:shadow-cyan/20">Søger praktikplads 2026</div>

          <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.15] tracking-tight">
            Mathias
            <br />
            Oliver
            <br />
            <span className="text-cyan drop-shadow-lg drop-shadow-cyan/50">Nielsen</span>
          </h1>

          {/* Roterende rolle */}
          <p className={`font-syne text-[1.05rem] text-muted tracking-[0.04em] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>{roles[roleIndex]}</p>

          <p className="text-muted text-[0.97rem] max-w-[480px] leading-relaxed">Jeg er i gang med at uddanne mig som webudvikler og søger en virksomhedspraktik, hvor jeg kan udvikle mine kompetencer og få erfaring med rigtige opgaver.</p>

          <div className="flex gap-3 flex-wrap pt-2">
            <a href="#projekter" className="btn-clip bg-cyan text-[#080c18] px-7 py-3 font-medium text-[0.9rem] inline-block transition-all duration-300 hover:bg-cyan2 hover:shadow-lg hover:shadow-cyan/40 active:scale-95">
              Se projekter
            </a>
            <a href="#kontakt" className="btn-clip bg-transparent text-cyan px-7 py-3 font-medium text-[0.9rem] inline-block border border-border transition-all duration-300 hover:bg-cyan/10 hover:border-cyan hover:shadow-lg hover:shadow-cyan/20 active:scale-95">
              Kontakt mig
            </a>
          </div>
        </div>

        {/* Right – avatar */}
        <div className="flex justify-center items-center relative h-full min-h-[450px] md:min-h-auto">
          {/* Main avatar container - minimalist */}
          <div className="relative" style={{ width: 380, height: 380 }}>
            {/* Subtle background glow */}
            <div className="absolute inset-0 -m-16 rounded-full bg-gradient-to-br from-cyan/12 via-transparent to-transparent filter blur-3xl opacity-50" style={{ animationDuration: "8s" }}></div>

            {/* Clean frame with elegant border */}
            <div
              className="w-full h-full relative overflow-hidden"
              style={{
                border: "1.5px solid",
                borderColor: "rgba(0, 255, 255, 0.4)",
                boxShadow: "0 12px 40px rgba(0, 255, 255, 0.1)",
              }}
            >
              {/* Image container - pure and simple */}
              <div className="relative w-full h-full bg-bg3">
                <Image src="/img/Adobe Express - file.png" alt="Mathias Oliver Nielsen - Web Udvikler" fill style={{ objectFit: "contain", objectPosition: "center" }} priority quality={95} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
