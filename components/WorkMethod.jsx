import SectionHeading from './SectionHeading'

const methods = [
  {
    num: '01',
    title: 'Struktur og overblik',
    desc: 'Jeg planlægger løsningen inden jeg koder. God struktur fra starten sparer tid og giver renere, mere vedligeholdbar kode.',
  },
  {
    num: '02',
    title: 'Fokus på brugervenlighed',
    desc: 'Teknologien er et middel, ikke et mål. Jeg tænker altid på brugeren bag skærmen – hvad giver mest mening for dem?',
  },
  {
    num: '03',
    title: 'Lyst til at lære',
    desc: 'Jeg søger aktivt ny viden, stiller spørgsmål og er ikke bange for at fejle. Det er sådan jeg vokser hurtigst.',
  },
]

export default function WorkMethod() {
  return (
    <section id="metode" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionHeading label="Tilgang" title="Sådan arbejder jeg" />

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
        className="work-grid"
      >
        {methods.map((m) => (
          <div
            key={m.num}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '3rem',
                fontWeight: 800,
                color: 'var(--cyan)',
                opacity: 0.12,
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              {m.num}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '0.6rem',
              }}
            >
              {m.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65 }}>{m.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
