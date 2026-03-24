import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
});

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
});

export const metadata = {
  title: 'Mathias Oliver Nielsen – Web Udvikler',
  description: 'Webudvikler under uddannelse. Søger praktikplads 2026.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${syne.variable} ${dm.variable}`}>
      <body className="font-dm">{children}</body>
    </html>
  );
}
