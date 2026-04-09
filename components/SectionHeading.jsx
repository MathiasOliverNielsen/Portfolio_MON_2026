export default function SectionHeading({ label, title }) {
  return (
    <div style={{ marginBottom: "2rem", overflow: "visible" }}>
      <div
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--cyan)",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
          marginBottom: "0.75rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            background: "var(--cyan)",
            transform: "rotate(45deg)",
          }}
        />
        {label}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          marginBottom: "1rem",
          lineHeight: 1.35,
          overflow: "visible",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 48,
          height: 2,
          background: "var(--cyan)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
