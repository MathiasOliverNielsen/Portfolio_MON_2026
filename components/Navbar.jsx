'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#about',    label: 'Om mig' },
  { href: '#skills',   label: 'Kompetencer' },
  { href: '#projekter',label: 'Projekter' },
  { href: '#praktik',  label: 'Praktik' },
  { href: '#kontakt',  label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(8,12,24,0.92)' : 'rgba(8,12,24,0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: '1.2rem',
          color: 'var(--text)',
          textDecoration: 'none',
        }}
      >
        MON<span style={{ color: 'var(--cyan)' }}>.</span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="hidden md:flex"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontSize: '0.82rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CV download button */}
      <a
        href="/cv.pdf"
        download
        className="btn-clip"
        style={{
          background: 'var(--cyan)',
          color: '#080c18',
          padding: '0.5rem 1.25rem',
          fontFamily: 'var(--font-dm)',
          fontWeight: 500,
          fontSize: '0.82rem',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.background = 'var(--cyan2)')}
        onMouseLeave={(e) => (e.target.style.background = 'var(--cyan)')}
      >
        Download CV
      </a>
    </nav>
  )
}
