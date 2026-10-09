import React, { useState, useEffect } from "react";
import avatarImg from "../../assets/character-cutout.png";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Capsule Header */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-2xl border border-black/5"
              : "bg-white/90 backdrop-blur-sm shadow-xl border border-white/40"
          }`}
        >
          {/* Avatar & Name Pill */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group pr-1 sm:pr-2 focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-full bg-[#DC1428] overflow-hidden ring-2 ring-black/10 shrink-0">
              <img
                src={avatarImg}
                alt="Tushar Kumar"
                className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-black tracking-tight flex items-center gap-1.5">
                Tushar K.
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/[0.04] p-1 rounded-full text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-neutral-800 hover:text-black hover:bg-white hover:shadow-xs transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Contact / Book a call button */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:tusharkumarg89@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DC1428] text-white text-xs font-bold hover:bg-[#B50E1F] transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book a Call
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-black hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex flex-col justify-center items-center p-6 animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#DC1428] overflow-hidden mb-1 ring-4 ring-[#DC1428]/20">
              <img src={avatarImg} alt="Tushar" className="w-full h-full object-cover object-top scale-110" />
            </div>
            <h3 className="font-bold text-lg text-black">Tushar Kumar</h3>
            <p className="text-xs text-neutral-500 -mt-3">Full-Stack MERN Developer</p>

            <div className="w-full border-t border-neutral-100 my-1" />

            <div className="flex flex-col w-full gap-2 font-semibold text-neutral-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-neutral-100 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="mailto:tusharkumarg89@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#DC1428] text-white font-bold text-sm hover:bg-[#B50E1F] transition-colors flex items-center justify-center gap-2 mt-2"
            >
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
