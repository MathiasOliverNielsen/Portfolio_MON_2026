'use client'

import { useState } from 'react'
import SectionHeading from './SectionHeading'

const contactInfo = [
  { label: 'Telefon',  value: '+45 31514803',        href: 'tel:+4531514803',            icon: '📞' },
  { label: 'Email',   value: 'Math324a@gmail.com',   href: 'mailto:Math324a@gmail.com',  icon: '✉' },
  { label: 'Website', value: 'minportfolio.dk',       href: 'https://minportfolio.dk',    icon: '🌐' },
  { label: 'GitHub',  value: 'github.com/dit-navn',   href: 'https://github.com',         icon: '⌨' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // TODO: Udskift med din formular-provider, fx:
    //   Formspree: https://formspree.io
    //   Resend:    https://resend.com
    //   Next.js API route: /api/contact
    //
    // Eksempel med Formspree:
    //   const res = await fetch('https://formspree.io/f/DIT_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   if (res.ok) setStatus('success')
    //   else setStatus('error')

    // Simuleret delay til demo
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    padding: '0.7rem 1rem',
    fontFamily: 'var(--font-dm)',
    fontSize: '0.9rem',
  }

  return (
    <section id="kontakt" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionHeading label="Kontakt" title="Kom i kontakt" />

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
        className="kontakt-grid"
      >
        {/* Info */}
        <div>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.97rem', lineHeight: 1.7 }}>
            Har du spørgsmål eller vil du høre mere? Send mig en besked –
            jeg svarer hurtigt.
          </p>

          {contactInfo.map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(0,229,212,0.08)',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: 'var(--cyan-dim)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.9rem',
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 2 }}>
                  {c.label}
                </div>
                <a
                  href={c.href}
                  style={{ fontSize: '0.95rem', color: 'var(--cyan)', textDecoration: 'none' }}
                >
                  {c.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Formular */}
        <div
          style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top accent line */}
          <div
            style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--cyan)', opacity: 0.5 }}
          />

          <h3 style={{ fontFamily: 'var(--font-syne)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Send en besked
          </h3>

          {status === 'success' ? (
            <div
              style={{
                background: 'rgba(0,229,212,0.08)',
                border: '1px solid var(--border)',
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--cyan)',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
              <p style={{ fontWeight: 500 }}>Beskeden er sendt!</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Jeg vender tilbage hurtigst muligt.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '1rem',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                  padding: '0.4rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-dm)',
                }}
              >
                Send en ny besked
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Dit navn
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Hvad hedder du?"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="din@email.dk"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Besked
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Hvad vil du fortælle mig?"
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-clip"
                style={{
                  background: status === 'sending' ? 'var(--bg2)' : 'var(--cyan)',
                  color: status === 'sending' ? 'var(--muted)' : '#080c18',
                  border: 'none',
                  padding: '0.85rem',
                  fontFamily: 'var(--font-dm)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                  width: '100%',
                }}
              >
                {status === 'sending' ? 'Sender...' : 'Send besked →'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#ff6b6b', fontSize: '0.82rem' }}>
                  Noget gik galt. Prøv igen eller send en mail direkte.
                </p>
              )}
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
  )
}
