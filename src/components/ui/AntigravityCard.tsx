import React, { useState, useRef } from "react";

export function AntigravityCard({
  children,
  className = "",
  style = {},
  tilt = true,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setMousePos({ x, y });

    if (tilt) {
      const normX = x / r.width - 0.5;
      const normY = y / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${-normY * 8}deg) rotateY(${normX * 8}deg) translateY(-4px) translateZ(8px)`;
      el.style.boxShadow = `${-normX * 20}px ${-normY * 20}px 45px rgba(0,0,0,0.15), 0 20px 50px rgba(0,0,0,0.12), 0 2px 0 rgba(255,255,255,1) inset`;
    }
  }

  function handleMouseEnter(e: React.MouseEvent) {
    setIsHovered(true);
    handleMouseMove(e);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)";
    ref.current.style.boxShadow = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass antigravity-card ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 18,
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
        ...style,
      }}
    >
      {/* Spotlight Illumination Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.48), transparent 65%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />

      {/* Cursor Specular Rim Glint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1.5px solid transparent",
          borderRadius: "inherit",
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.95), transparent 70%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Container Content */}
      <div style={{ position: "relative", zIndex: 3 }}>
        {children}
      </div>
    </div>
  );
}
