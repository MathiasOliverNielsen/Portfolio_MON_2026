export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: 'var(--muted)',
      }}
    >
      <p>
        © {year}{' '}
        <span style={{ color: 'var(--cyan)' }}>Mathias Oliver Nielsen</span>{' '}
        · Web Udvikler under uddannelse
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.78rem' }}>
        Bygget med Next.js &amp; Tailwind CSS
      </p>
    </footer>
  )
}
