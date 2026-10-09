import React from "react";

export function Badge({ text, style = {} }: { text: string; style?: React.CSSProperties }) {
  return (
    <div className="glass shimmer-over relative overflow-hidden" style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "8px 18px", borderRadius: 100,
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.78rem",
      letterSpacing: "0.06em", color: "#111115", ...style,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#000000", flexShrink: 0 }} />
      {text}
    </div>
  );
}
