import SectionHeading from "./SectionHeading";
import Diamond from "./Diamond";

const infoRows = [
  { label: "Navn", value: "Mathias Oliver Nielsen" },
  { label: "Uddannelse", value: "Webudvikler (igangværende)" },
  { label: "Skole", value: "Aalborg TechCollege" },
  { label: "Telefon", value: "+45 31514603" },
  { label: "Email", value: "Math324e@gmail.com", link: "mailto:Math324a@gmail.com" },
  // { label: "Website", value: "minportfolio.dk", link: "https://minportfolio.dk" },
  { label: "Status", value: "Åben for praktik", highlight: true },
];

const stats = [
  { number: "10+", label: "Teknologier" },
  { number: "2026", label: "Klar til praktik" },
  { number: "FS", label: "Fullstack forståelse" },
  { number: "AA Tech", label: "Under uddannelse" },
];

export default function About() {
  return (
    <section id="about" className="relative max-w-[1100px] mx-auto px-8 py-24">
      {/* Dekorationsdiamanter */}
      <Diamond size={38} opacity={0.08} style={{ top: "2rem", right: 0 }} />
      <Diamond size={12} opacity={0.25} style={{ bottom: "3rem", left: "4rem" }} />

      <SectionHeading label="Om mig" title="Hvem er jeg?" />

      <div className="about-grid grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-start">
        {/* Tekst + stats */}
        <div>
          <p className="text-muted mb-4 text-[0.97rem]">
            Jeg er en webudvikler under uddannelse, der i et stykke tid har arbejdet med moderne frontend-teknologier. Min hverdag handler om at bygge brugervenlige og velstrukturerede løsninger i
            React og Next.js.
          </p>
          <p className="text-muted mb-4 text-[0.97rem]">
            Udover frontend har jeg kendskab til SQL, SCRUM og grundlæggende designforståelse med mock-ups. Jeg er vant til at tage ansvar og arbejde selvstændigt, men trives mindst ligeså godt i et
            team.
          </p>
          <p className="text-muted text-[0.97rem]">
            Jeg søger en virksomhedspraktik, hvor jeg kan arbejde med rigtige opgaver, lære af erfarne udviklere og udvikle mig professionelt – gerne hos et web- eller marketingbureau.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="relative overflow-hidden bg-bg3 border border-border p-5">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-cyan" />
                <div className="font-syne text-[1.8rem] font-extrabold text-cyan leading-none">{s.number}</div>
                <div className="text-[0.78rem] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info rows */}
        <div>
          {infoRows.map((r) => (
            <div key={r.label} className="flex justify-between items-baseline py-3 border-b border-[rgba(0,229,212,0.08)] text-[0.9rem] gap-4">
              <span className="text-muted text-[0.82rem] flex-shrink-0">{r.label}</span>
              {r.link ? (
                <a href={r.link} className="text-cyan no-underline font-medium">
                  {r.value}
                </a>
              ) : (
                <span className={r.highlight ? "text-cyan font-medium text-right" : "text-text font-medium text-right"}>{r.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
