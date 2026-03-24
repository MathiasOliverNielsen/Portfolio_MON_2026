# Mathias Oliver Nielsen – Portfolio

Bygget med **Next.js 14**, **React 18** og **Tailwind CSS**.

---

## Kom i gang

```bash
# 1. Installer afhængigheder
npm install

# 2. Start dev-server
npm run dev

# 3. Åbn i browseren
# http://localhost:3000
```

---

## Projektstruktur

```
portfolio/
├── app/
│   ├── api/
│   │   └── projects/
│   │       └── route.js        ← GET /api/projects  (returnerer projekter som JSON)
│   ├── globals.css             ← CSS-variabler og global styling
│   ├── layout.js               ← Root layout, Google Fonts, metadata
│   └── page.js                 ← Samler alle sektioner
│
├── components/
│   ├── Navbar.jsx              ← Fast navbar med scroll-effekt
│   ├── Hero.jsx                ← Intro med roterende rolle-tekst
│   ├── About.jsx               ← Om mig + stats + kontaktinfo
│   ├── Skills.jsx              ← Tech stack med kategori-filter
│   ├── Projects.jsx            ← Fetcher /api/projects dynamisk
│   ├── WorkMethod.jsx          ← "Sådan arbejder jeg"
│   ├── Praktik.jsx             ← Praktik-sektion
│   ├── Contact.jsx             ← Kontaktformular med form-state
│   ├── SectionHeading.jsx      ← Genanvendelig sektionsoverskrift
│   └── Footer.jsx
│
├── data/
│   ├── projects.js             ← ← DIN PROJEKTDATA LIGGER HER
│   └── skills.js               ← ← DINE KOMPETENCER LIGGER HER
│
└── public/
    ├── cv.pdf                  ← ← INDSÆT DIT CV HER (bruges af "Download CV"-knappen)
    └── projects/               ← ← Læg projekt-screenshots her (fx project-1.jpg)
```

---

## Tilpasning

### Tilføj et projekt

Åbn `data/projects.js` og tilføj et objekt til arrayet:

```js
{
  id: 4,
  title: 'Mit nye projekt',
  description: 'Hvad det gør og hvad du lærte. 2-3 sætninger.',
  tech: ['React', 'Tailwind'],
  image: '/projects/mit-projekt.jpg',   // eller null
  liveUrl: 'https://...',               // eller null
  githubUrl: 'https://github.com/...',  // eller null
  featured: false,
}
```

Projektet vises automatisk via `/api/projects` – ingen andre filer skal ændres.

### Tilføj et billede til et projekt

1. Læg screenshottet i `public/projects/` (fx `public/projects/projekt-1.jpg`)
2. Sæt `image: '/projects/projekt-1.jpg'` i `data/projects.js`

### Skift profilbillede

I `components/Hero.jsx`, find kommentaren `/* Udskift dette med et rigtigt billede */`
og erstat placeholder-blokken med:

```jsx
import Image from 'next/image'

<Image
  src="/profilbillede.jpg"
  alt="Mathias Oliver Nielsen"
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
```

Læg billedet i `public/profilbillede.jpg`.

### Justér skills

Åbn `data/skills.js`. Tilføj, fjern eller juster `level` (0–100).
Vær ærlig – bureauer lægger mærke til det.

### Aktivér kontaktformularen

I `components/Contact.jsx`, find `handleSubmit`-funktionen og erstat
den simulerede delay med fx **Formspree**:

```js
const res = await fetch('https://formspree.io/f/DIT_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setStatus('success')
else setStatus('error')
```

Opret en gratis konto på [formspree.io](https://formspree.io) for at få et form-ID.

---

## Deploy til Vercel (anbefalet)

```bash
# Installer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Eller forbind dit GitHub-repo direkte på [vercel.com](https://vercel.com) –
så deployes siden automatisk ved hvert push til `main`.

---

## Farvetema

Alle farver er CSS-variabler i `app/globals.css`:

```css
--bg:        #080c18   /* Primær baggrund        */
--bg2:       #0e1424   /* Sekundær baggrund       */
--bg3:       #131929   /* Kort/panel baggrund     */
--cyan:      #00e5d4   /* Accent (fra CV)         */
--cyan2:     #00b8aa   /* Accent hover            */
--text:      #f0f4ff   /* Primær tekst            */
--muted:     #8892a4   /* Dæmpet tekst            */
--border:    rgba(0,229,212,0.18)
```
