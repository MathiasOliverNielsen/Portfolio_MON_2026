"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "Projekt 1",
    description: "Kort beskrivelse af dit første projekt",
    tech: ["React", "Next.js", "Tailwind"],
    image: "/projects/project1.jpg",
    featured: true,
    liveUrl: "https://project1.vercel.app",
    githubUrl: "https://github.com/MathiasOliverNielsen/project1",
  },
  {
    id: 2,
    title: "Projekt 2",
    description: "Kort beskrivelse af dit andet projekt",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/projects/project2.jpg",
    featured: false,
    liveUrl: "https://project2.vercel.app",
    githubUrl: "https://github.com/MathiasOliverNielsen/React-Calculater-App",
  },
  {
    id: 3,
    title: "Projekt 3",
    description: "Kort beskrivelse af dit tredje projekt",
    tech: ["React", "Firebase", "Tailwind"],
    image: "/projects/project3.jpg",
    featured: true,
    liveUrl: "https://project3.vercel.app",
    githubUrl: "https://github.com/MathiasOliverNielsen/project3",
  },
];

export default function Projects() {
  return (
    <section id="projekter" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeading label="Portfolio" title="Mine projekter" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg3)",
        border: `1px solid ${hovered ? "var(--cyan)" : "var(--border)"}`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Billede / placeholder */}
      <div
        style={{
          height: 180,
          background: "var(--bg2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        {/* Grid-baggrund */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(0,229,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,212,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "2.5rem",
              color: "var(--cyan)",
              opacity: 0.2,
              position: "relative",
              zIndex: 1,
              letterSpacing: "0.05em",
            }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}

        {project.featured && (
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "var(--cyan)",
              color: "#080c18",
              fontSize: "0.68rem",
              fontWeight: 500,
              padding: "3px 8px",
              letterSpacing: "0.06em",
              zIndex: 2,
            }}
          >
            FEATURED
          </span>
        )}
      </div>

      {/* Kortindhold */}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--text)",
          }}
        >
          {project.title}
        </h3>

        <p style={{ fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.65, flex: 1 }}>{project.description}</p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                background: "var(--cyan-dim)",
                border: "1px solid rgba(0,229,212,0.2)",
                color: "var(--cyan)",
                fontSize: "0.7rem",
                padding: "3px 8px",
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid rgba(0,229,212,0.08)",
          }}
        >
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: "var(--cyan)", textDecoration: "none" }}>
              → Live demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: "var(--muted)", textDecoration: "none" }}>
              → GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
