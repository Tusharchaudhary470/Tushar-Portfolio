import React from "react";
import characterImg from "../../assets/character-cutout.png";
import { ArrowDown, Calendar, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative sm:min-h-[100dvh] bg-[#DC1428] text-white flex flex-col justify-center sm:justify-between pt-24 sm:pt-28 pb-20 sm:pb-28 md:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting in the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-400/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Status Pill - Safe clearance below floating navbar */}
      <div className="relative z-30 flex justify-center items-center gap-2 mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-sm animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack MERN Developer</span>
          <span className="text-white/40">•</span>
          <span>UI/UX & Backend</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">Faridabad, India</span>
        </div>
      </div>

      {/* ── Center Stage: Expanded Character & Headline utilizing the middle height ── */}
      <div className="relative z-10 h-[320px] sm:h-auto flex-initial sm:flex-1 flex flex-col items-center justify-center my-3 sm:my-auto w-full max-w-7xl mx-auto py-1 sm:py-2">
        
        {/* Layer 1: Giant Background Condensed Typography */}
        <div className="w-full flex flex-col items-center justify-center text-center select-none leading-none">
          <h1 className="font-display uppercase tracking-tight text-white flex flex-col items-center">
            <span className="text-[17vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[11.5rem] drop-shadow-md">
              FULLSTACK
            </span>
            <span className="text-[15vw] sm:text-[11vw] md:text-[9.8vw] lg:text-[10rem] -mt-[2.5vw] sm:-mt-[2.5vw] md:-mt-8 drop-shadow-md">
              DEVELOPER
            </span>
          </h1>
        </div>

        {/* Layer 2: Foreground 3D Character - Scaled up on mobile to claim vertical presence */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="relative w-[min(315px,84vw)] sm:w-[320px] md:w-[370px] lg:w-[430px] pt-1 md:pt-4 character-float">
            {/* Soft Ambient Shadow behind character */}
            <div className="absolute bottom-6 inset-x-8 h-8 bg-black/25 blur-xl rounded-full" />
            
            <img
              src={characterImg}
              alt="Tushar Kumar character illustration"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* ── Layer 3: Subtitle, Primary CTA & Social Proof (Anchored in Lower Third) ── */}
      <ScrollReveal delay={200} className="relative z-30 flex flex-col items-center text-center max-w-2xl mx-auto pt-1 sm:pt-2">
        {/* Subtitle / Bio */}
        <p className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-medium px-4 mb-2.5 sm:mb-4 md:mb-6 leading-relaxed max-w-2xl">
          21-year-old Full-Stack MERN Developer based in <span className="font-bold text-white">Faridabad, India</span>. Passionate about designing intuitive, pixel-perfect <span className="text-amber-200 font-bold">UI/UX</span> interfaces, while possessing robust full-stack capabilities to architect resilient, scalable <span className="text-white font-bold">backends</span> (Node.js, Express, MongoDB & REST APIs).
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-5 md:mb-8">
          <a
            href="mailto:tusharkumarg89@gmail.com"
            className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm md:text-base hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/15 group"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC1428] group-hover:rotate-12 transition-transform" />
            Book a call with me
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-black/80 hover:bg-black text-white font-bold text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Explore Projects
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
          </a>
        </div>

        {/* Social Proof Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs md:text-sm text-white/90">
          <div className="flex items-center gap-1 font-bold">
            <span className="text-amber-300">★★★★★</span>
            <span>4+ Production Apps</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>MERN & UI/UX Specialist</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="font-medium text-white/80">Faridabad, India</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
