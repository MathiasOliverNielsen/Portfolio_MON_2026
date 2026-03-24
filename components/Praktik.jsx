"use client";
import SectionHeading from "./SectionHeading";

const points = [
  {
    title: "Webbureau eller marketingbureau",
    desc: "Jeg er åben for begge typer – hvad end der er rigtige opgaver og gode folk at lære af.",
  },
  {
    title: "Frontend og React-projekter",
    desc: "Min primære styrke er i frontend – men jeg er nysgerrig og vil gerne berøre hele stakken.",
  },
  {
    title: "Del af et rigtigt team",
    desc: "Jeg vil gerne opleve professionel arbejdsgang, code reviews og samarbejde i et team.",
  },
];

export default function Praktik() {
  return (
    <section
      id="praktik"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading label="Næste skridt" title="Jeg søger praktik" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="praktik-grid">
          {/* Punkter */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {points.map((p) => (
              <div key={p.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                {/* Diamant-ikon */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "var(--cyan-dim)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                >
                  <div style={{ width: 8, height: 8, background: "var(--cyan)", transform: "rotate(-45deg)" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 500, marginBottom: "0.25rem", fontSize: "0.95rem" }}>{p.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA-kort */}
          <div
            style={{
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              padding: "2.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "var(--cyan)",
                opacity: 0.6,
              }}
            />

            <div
              style={{
                display: "inline-block",
                background: "var(--cyan-dim)",
                border: "1px solid var(--border)",
                color: "var(--cyan)",
                fontSize: "0.82rem",
                padding: "6px 14px",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Periode: 2025
            </div>

            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1.4rem",
                marginBottom: "0.75rem",
              }}
            >
              Lad os tage en snak
            </h3>

            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.65 }}>
              Hvis du har en praktikplads og leder efter en motiveret webudvikler under uddannelse, hører jeg gerne fra dig.
            </p>

            <a
              href="#kontakt"
              className="btn-clip"
              style={{
                display: "inline-block",
                background: "var(--cyan)",
                color: "#080c18",
                padding: "0.75rem 1.75rem",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "var(--cyan2)")}
              onMouseLeave={(e) => (e.target.style.background = "var(--cyan)")}
            >
              Kontakt mig
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .praktik-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
