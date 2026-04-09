"use client";

import { useForm, ValidationError } from "@formspree/react";

import SectionHeading from "./SectionHeading";
import { FaPhone, FaEnvelope, FaGlobe, FaGithub } from "react-icons/fa";

const contactInfo = [
  { label: "Telefon", value: "+45 31514803", href: "tel:+4531514803", icon: <FaPhone /> },
  { label: "Email", value: "math324e@elev.techcollege.dk", href: "math324e@elev.techcollege.dk", icon: <FaEnvelope /> },
  { label: "Website", value: "minportfolio.dk", href: "https://minportfolio.dk", icon: <FaGlobe /> },
  { label: "GitHub", value: "github.com/MathiasOliverNielsen", href: "https://github.com/MathiasOliverNielsen", icon: <FaGithub /> },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mdapgklv");

  const inputStyle = {
    width: "100%",
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "0.7rem 1rem",
    fontFamily: "var(--font-dm)",
    fontSize: "0.9rem",
  };

  return (
    <section id="kontakt" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeading label="Kontakt" title="Kom i kontakt" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="kontakt-grid">
        {/* Info */}
        <div>
          <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "0.97rem", lineHeight: 1.7 }}>Har du spørgsmål eller vil du høre mere? Send mig en besked – jeg svarer hurtigt.</p>

          {contactInfo.map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 0",
                borderBottom: "1px solid rgba(0,229,212,0.08)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--cyan-dim)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 2 }}>{c.label}</div>
                <a href={c.href} style={{ fontSize: "0.95rem", color: "var(--cyan)", textDecoration: "none" }}>
                  {c.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Formular */}
        <div
          style={{
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--cyan)", opacity: 0.5 }} />

          <h3 style={{ fontFamily: "var(--font-syne)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Send en besked</h3>

          {state.succeeded ? (
            <div
              style={{
                background: "rgba(0,229,212,0.08)",
                border: "1px solid var(--border)",
                padding: "2rem",
                textAlign: "center",
                color: "var(--cyan)",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>✓</div>
              <p style={{ fontWeight: 500 }}>Beskeden er sendt!</p>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.5rem" }}>Jeg vender tilbage hurtigst muligt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="email" style={{ fontSize: "0.78rem", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>
                  Email
                </label>
                <input id="email" type="email" name="email" required placeholder="din@email.dk" style={inputStyle} />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" style={{ fontSize: "0.78rem", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>
                  Besked
                </label>
                <textarea id="message" name="message" rows={4} required placeholder="Hvad vil du fortælle mig?" style={{ ...inputStyle, resize: "vertical" }} />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-clip"
                style={{
                  background: state.submitting ? "var(--bg2)" : "var(--cyan)",
                  color: state.submitting ? "var(--muted)" : "#080c18",
                  border: "none",
                  padding: "0.85rem",
                  fontFamily: "var(--font-dm)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  cursor: state.submitting ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  width: "100%",
                }}
              >
                {state.submitting ? "Sender..." : "Send besked →"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
