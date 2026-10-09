import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "down":
        return isVisible ? "translate-y-0" : "-translate-y-12";
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-12";
      case "right":
        return isVisible ? "translate-x-0" : "-translate-x-12";
      case "up":
      default:
        return isVisible ? "translate-y-0" : "translate-y-12";
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
