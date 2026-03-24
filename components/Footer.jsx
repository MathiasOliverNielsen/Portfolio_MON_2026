export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 text-center text-[0.82rem] text-muted">
      <p>
        &copy; {year} <span className="text-cyan">Mathias Oliver Nielsen</span> &middot; Web Udvikler under uddannelse
      </p>
      <p className="mt-2 text-[0.78rem]">Bygget med Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
