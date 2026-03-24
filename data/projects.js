/**
 * Tilføj dine projekter her.
 * Hvert projekt hentes via /api/projects og vises dynamisk i Projects-komponenten.
 *
 * Felter:
 *   id          – unikt id (bruges som React key)
 *   title       – projektnavn
 *   description – kort beskrivelse (2-3 sætninger)
 *   tech        – array af teknologier du brugte
 *   image       – sti til screenshot i /public/projects/ (valgfri)
 *   liveUrl     – link til demo (valgfri – sæt null hvis ikke relevant)
 *   githubUrl   – link til GitHub (valgfri)
 *   featured    – true = vist øverst / fremhævet kort
 */

export const projects = [
  {
    id: 1,
    title: 'Portfolio Side',
    description:
      'Min personlige portfolio bygget i Next.js og Tailwind. Mørkt tema med cyan-akcentfarver, responsivt layout og en Next.js API route til dynamisk projektvisning.',
    tech: ['Next.js', 'React', 'Tailwind', 'CSS'],
    image: null,
    liveUrl: 'https://minportfolio.dk',
    githubUrl: 'https://github.com/dit-brugernavn/portfolio',
    featured: true,
  },
  {
    id: 2,
    title: 'Projekt Navn',
    description:
      'Beskriv hvad projektet gør og løser. Hvad var udfordringen? Hold det til 2-3 konkrete sætninger der viser hvad du byggede.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: null,
    liveUrl: null,
    githubUrl: 'https://github.com/dit-brugernavn/projekt',
    featured: false,
  },
  {
    id: 3,
    title: 'Projekt Navn',
    description:
      'Beskriv hvad projektet gør og løser. Hvad var udfordringen? Hold det til 2-3 konkrete sætninger der viser hvad du byggede.',
    tech: ['Next.js', 'TypeScript', 'SQL'],
    image: null,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
]
