import React, { useEffect, useState } from "react";
import avatarImg from "../../assets/character-cutout.png";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  
  // Synchronously check sessionStorage on component mount so it NEVER flickers on reloads
  const [shouldRender, setShouldRender] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        return !sessionStorage.getItem("portfolio_splash_visited");
      }
    } catch (e) {
      // ignore
    }
    return false;
  });

  useEffect(() => {
    if (!shouldRender) return;

    // Smooth counter progression from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            try {
              sessionStorage.setItem("portfolio_splash_visited", "true");
            } catch (e) {
              // ignore
            }
            setTimeout(() => setShouldRender(false), 700);
          }, 200);
          return 100;
        }
        // Accelerate smoothly as it completes
        const increment = Math.max(1, Math.floor((100 - prev) * 0.14));
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      onClick={() => {
        setIsDone(true);
        try {
          sessionStorage.setItem("portfolio_splash_visited", "true");
        } catch (e) {
          // ignore
        }
        setTimeout(() => setShouldRender(false), 500);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-8 sm:p-12 bg-[#DC1428] text-white transition-all duration-700 ease-in-out cursor-pointer ${
        isDone ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Top Header details */}
      <div className="w-full flex items-center justify-between text-xs font-bold tracking-widest uppercase text-white/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TUSHAR.DEV</span>
        </div>
        <div>
          <span>FARIDABAD // 28.4089° N</span>
        </div>
      </div>

      {/* Center Stage: Init Logo & Percentage */}
      <div className="flex flex-col items-center text-center">
        {/* Glowing Avatar Capsule */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border-2 border-white/30 overflow-hidden mb-6 shadow-2xl p-1">
          <img
            src={avatarImg}
            alt="Tushar Kumar"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-2 leading-none uppercase">
          TUSHAR KUMAR
        </h1>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/80 uppercase mb-8">
          INITIALIZING FULL-STACK EXPERIENCE
        </p>

        {/* Big Counter */}
        <div className="font-display text-6xl sm:text-8xl font-extrabold text-white tracking-tight">
          {progress < 10 ? `0${progress}` : progress}
          <span className="text-3xl sm:text-5xl text-white/60 font-sans">%</span>
        </div>
      </div>

      {/* Bottom Progress Bar & Instruction */}
      <div className="w-full max-w-md flex flex-col items-center gap-3">
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75 ease-out shadow-lg shadow-white/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between w-full text-[11px] font-semibold text-white/60 tracking-wider">
          <span>MERN ARCHITECTURE</span>
          <span className="hover:text-white transition-colors">CLICK TO SKIP ↗</span>
          <span>READY 2026</span>
        </div>
      </div>
    </div>
  );
}
