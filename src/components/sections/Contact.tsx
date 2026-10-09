import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { AntigravityCard } from "../ui/AntigravityCard";
import { RevealSection } from "../ui/RevealSection";
import { PERSONAL_INFO } from "../../constants/data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <RevealSection id="contact" style={{ position: "relative", zIndex: 1, padding: "0 max(24px, 4.5vw) 130px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <AntigravityCard style={{ padding: "clamp(36px, 5vw, 68px)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Badge text="Get In Touch" style={{ marginBottom: 18 }} />
            <h2 className="glass-text-black-shiny" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", margin: 0, textTransform: "uppercase" }}>
              Let's Connect
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "1.02rem", color: "rgba(20,20,25,0.75)", marginTop: 12 }}>
              Open to Full-Stack Web Development opportunities, collaborations, and software projects.
            </p>
          </div>

          {/* Direct Channels */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 36,
          }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.1)",
                textDecoration: "none", color: "#000000",
                display: "flex", flexDirection: "column", gap: 4,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.6)")}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)" }}>Email</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600, wordBreak: "break-all" }}>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              style={{
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.1)",
                textDecoration: "none", color: "#000000",
                display: "flex", flexDirection: "column", gap: 4,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.6)")}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)" }}>Phone</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{PERSONAL_INFO.phone}</span>
            </a>

            <div
              style={{
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex", flexDirection: "column", gap: 4,
              }}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)" }}>Location</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div className="glass-text-black-shiny" style={{ fontSize: "1.9rem", textTransform: "uppercase", marginBottom: 10 }}>
                Message Received ✓
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "rgba(20,20,25,0.75)" }}>
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[{ name: "name", label: "Your Name", placeholder: "Your Name", type: "text" }, { name: "email", label: "Email Address", placeholder: "you@domain.com", type: "email" }].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.74rem", fontWeight: 700, color: "#111", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                      {f.label}
                    </label>
                    <input type={f.type} placeholder={f.placeholder} required
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm((s) => ({ ...s, [f.name]: e.target.value }))}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.65)", backdropFilter: "blur(12px)",
                        border: "1px solid rgba(0,0,0,0.15)", borderRadius: 10,
                        padding: "13px 18px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                        fontSize: "0.95rem", color: "#000000", outline: "none", transition: "all 0.2s",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#000000"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)"; e.currentTarget.style.boxShadow = "none"; }} />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.74rem", fontWeight: 700, color: "#111", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  Message
                </label>
                <textarea rows={5} placeholder="Tell me about your role, team, or project..." required
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.65)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(0,0,0,0.15)", borderRadius: 10,
                    padding: "13px 18px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                    fontSize: "0.95rem", color: "#000000", outline: "none",
                    resize: "vertical", transition: "all 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#000000"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>

              <button type="submit" style={{
                alignSelf: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#ffffff",
                background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "15px 48px", borderRadius: 100, cursor: "pointer",
                boxShadow: "0 6px 24px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.25) inset",
                transition: "all 0.25s", marginTop: 8,
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.32)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.22)"; }}>
                Send Message →
              </button>
            </form>
          )}
        </AntigravityCard>
      </div>
    </RevealSection>
  );
}
