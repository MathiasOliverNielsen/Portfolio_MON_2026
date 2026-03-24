"use client";

import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered = activeCategory === "Alle" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeading label="Kompetencer" title="Tech Stack" />

      {/* Kategori-filter */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
        {skillCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? "var(--cyan)" : "transparent",
              color: activeCategory === cat ? "#080c18" : "var(--muted)",
              border: "1px solid",
              borderColor: activeCategory === cat ? "var(--cyan)" : "var(--border)",
              padding: "0.4rem 1rem",
              fontSize: "0.8rem",
              cursor: "pointer",
              fontFamily: "var(--font-dm)",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((skill) => (
          <SkillChip key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillChip({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--cyan-glow)" : "var(--bg3)",
        border: `1px solid ${hovered ? "var(--cyan)" : "var(--border)"}`,
        padding: "0.9rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "default",
      }}
    >
      {/* Lille diamant-dekoration */}
      <div
        style={{
          position: "absolute",
          bottom: -4,
          right: -4,
          width: 10,
          height: 10,
          background: "var(--cyan)",
          transform: "rotate(45deg)",
          opacity: 0.2,
        }}
      />

      <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>{skill.name}</span>

      {/* Progress bar */}
      <div style={{ height: 2, background: "rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            background: "var(--cyan)",
            opacity: 0.7,
            width: `${skill.level}%`,
            transition: "width 0.6s ease",
          }}
        />
      </div>

      <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{skill.level}%</span>
    </div>
  );
}
