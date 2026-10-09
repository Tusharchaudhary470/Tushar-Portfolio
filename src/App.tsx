import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { About } from "./components/sections/About";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/layout/Footer";
import { FloatingDock } from "./components/layout/FloatingDock";
import { SplashScreen } from "./components/layout/SplashScreen";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#DC1428] text-white selection:bg-black selection:text-white">
      {/* High-Impact Animated Splash Screen on First Visit */}
      <SplashScreen />

      {/* Floating Capsule Header */}
      <Navbar />

      {/* Main Flow */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Faq />
      </main>

      {/* Outro Footer */}
      <Footer />

      {/* Persistent Bottom Floating Action Dock */}
      <FloatingDock />
    </div>
  );
}
