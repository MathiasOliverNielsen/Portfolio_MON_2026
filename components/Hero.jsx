"use client";

import { useEffect, useState } from "react";

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
    <section id="hero" className="min-h-screen flex items-center relative pt-24 pb-16">
      <div className="hero-grid max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-[1]">
        {/* Left – tekst */}
        <div>
          <div className="inline-block bg-cyan-dim border border-border text-cyan text-[0.75rem] tracking-wider uppercase px-[14px] py-[6px] mb-6">Søger praktikplads 2026</div>

          <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] mb-2">
            Mathias
            <br />
            Oliver
            <br />
            <span className="text-cyan">Nielsen</span>
          </h1>

          {/* Roterende rolle */}
          <p className={`font-syne text-[1.05rem] text-muted tracking-[0.04em] mb-6 transition-opacity transition-transform duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>{roles[roleIndex]}</p>

          <p className="text-muted text-[0.97rem] max-w-[460px] mb-10 leading-[1.75]">Jeg er i gang med at uddanne mig som webudvikler og søger en virksomhedspraktik, hvor jeg kan udvikle mine kompetencer og få erfaring med rigtige opgaver.</p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projekter" className="btn-clip bg-cyan text-[#080c18] px-7 py-3 font-medium text-[0.9rem] inline-block transition-colors duration-200 hover:bg-cyan2">
              Se projekter
            </a>
            <a href="#kontakt" className="btn-clip bg-transparent text-cyan px-7 py-3 font-medium text-[0.9rem] inline-block border border-border transition-colors duration-200 hover:bg-cyan-dim hover:border-cyan">
              Kontakt mig
            </a>
          </div>
        </div>

        {/* Right – avatar */}
        <div className="flex justify-center items-center relative">
          {/* Floating diamonds */}
          {[
            { w: 30, h: 30, top: "-20px", left: "30px", opacity: 0.18 },
            { w: 16, h: 16, bottom: "40px", right: "-10px", opacity: 0.28 },
            { w: 10, h: 10, top: "60px", right: "40px", opacity: 0.35 },
            { w: 20, h: 20, bottom: "-10px", left: "50px", opacity: 0.16 },
          ].map((d, i) => (
            <div
              key={i}
              className="absolute bg-cyan rotate-45"
              style={{
                width: d.w,
                height: d.h,
                opacity: d.opacity,
                top: d.top,
                left: d.left,
                bottom: d.bottom,
                right: d.right,
              }}
            />
          ))}

          {/* Avatar frame */}
          <div className="relative" style={{ width: 280, height: 280 }}>
            {/* Offset accent border */}
            <div
              className="absolute border border-cyan opacity-30"
              style={{
                top: -8,
                left: 12,
                right: -8,
                bottom: 12,
                clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
              }}
            />
            {/* Main border */}
            <div
              className="absolute inset-0 border-2 border-border"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
              }}
            />
            {/* Content */}
            <div
              className="w-full h-full bg-bg3 flex flex-col items-center justify-center gap-2"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
              }}
            >
              {/*
               */}
              <span className="font-syne text-[5rem] font-extrabold text-cyan leading-none">M</span>
              <span className="text-[0.72rem] text-muted tracking-[0.18em] uppercase">Web Udvikler</span>
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
      `}</style>
    </section>
  );
}
