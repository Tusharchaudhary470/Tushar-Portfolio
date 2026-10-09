import React from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { LinkedinIcon } from "../ui/LinkedinIcon";

export function FloatingDock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto bg-black/85 backdrop-blur-xl border border-white/20 text-white py-2 sm:py-2.5 px-3 sm:px-5 rounded-full shadow-2xl flex items-center gap-2 sm:gap-4 hover:bg-black transition-all">
        {/* Left Label */}
        <div className="flex items-center gap-2 pl-1 pr-1 sm:pr-2">
          <span className="w-2 h-2 rounded-full bg-[#DC1428] animate-ping" />
          <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
            Speak to me
          </span>
          <span className="hidden md:inline text-xs text-neutral-400 font-medium">
            — Email or call
          </span>
        </div>

        <div className="h-4 w-px bg-white/20" />

        {/* Quick Action Icons */}
        <div className="flex items-center gap-1.5">
          <a
            href="mailto:tusharkumarg89@gmail.com"
            className="p-2 rounded-full hover:bg-white/15 transition-colors text-white"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="tel:+918920607096"
            className="p-2 rounded-full hover:bg-white/15 transition-colors text-white"
            title="Call Tushar"
            aria-label="Call Tushar"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/Tusharchaudhary470"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/15 transition-colors text-white"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-kumar-3265ab428"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/15 transition-colors text-white"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
