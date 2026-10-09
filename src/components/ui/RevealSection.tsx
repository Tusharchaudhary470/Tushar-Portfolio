import React from "react";
import { useInView } from "../../hooks/useInView";

export function RevealSection({
  children,
  id,
  style = {},
  delay = 0,
}: {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
