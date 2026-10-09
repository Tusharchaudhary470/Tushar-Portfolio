import React from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#B50E1F] text-white pt-20 sm:pt-28 pb-28 sm:pb-32 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 sm:mb-24">
          {/* Main Call to action headline */}
          <ScrollReveal className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 px-3 py-1 rounded-full bg-white/15 inline-block mb-4">
              Get in Touch
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight font-display uppercase leading-tight mb-6">
              Let’s build <br />
              incredible work <br />
              <span className="underline decoration-white/30">together.</span>
            </h2>
          </ScrollReveal>

          {/* Contact Details & Links */}
          <ScrollReveal delay={150} className="lg:col-span-5 flex flex-col justify-end gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white/80 mb-4">
                Direct Inquiries
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-white/60 block">Email</span>
                  <a
                    href="mailto:tusharkumarg89@gmail.com"
                    className="text-base sm:text-lg font-bold hover:text-black transition-colors flex items-center gap-1.5"
                  >
                    tusharkumarg89@gmail.com
                    <ArrowUpRight className="w-4 h-4 text-white/80" />
                  </a>
                </div>

                <div>
                  <span className="text-xs text-white/60 block">Phone / WhatsApp</span>
                  <a
                    href="tel:+918920607096"
                    className="text-base sm:text-lg font-bold hover:text-black transition-colors flex items-center gap-1.5"
                  >
                    +91 8920607096
                    <ArrowUpRight className="w-4 h-4 text-white/80" />
                  </a>
                </div>

                <div>
                  <span className="text-xs text-white/60 block">GitHub</span>
                  <a
                    href="https://github.com/Tusharchaudhary470"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-bold hover:text-black transition-colors flex items-center gap-1.5"
                  >
                    github.com/Tusharchaudhary470
                    <GithubIcon className="w-4 h-4 text-white/80" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Navigation links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/90">
              <a href="#home" className="hover:text-black transition-colors">Home</a>
              <span>•</span>
              <a href="#projects" className="hover:text-black transition-colors">Projects</a>
              <span>•</span>
              <a href="#skills" className="hover:text-black transition-colors">Skills</a>
              <span>•</span>
              <a href="#about" className="hover:text-black transition-colors">About</a>
              <span>•</span>
              <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
            </div>
          </ScrollReveal>
        </div>

        {/* Huge Watermark Outro Typography */}
        <ScrollReveal delay={200} className="pt-8 border-t border-white/20 select-none overflow-hidden text-center">
          <div className="text-[14vw] sm:text-[13vw] font-display uppercase tracking-tight text-white/30 leading-none hover:text-white/45 transition-colors">
            MR. TUSHAR
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 text-xs text-white/70">
            <span>© {new Date().getFullYear()} Tushar Kumar. All rights reserved.</span>
            <span>Designed & Built with React, Tailwind & Vite</span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
