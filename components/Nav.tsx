"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const items = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "systems", label: "Systems" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const sheet = [
  ["about", "01 · About"], ["research", "02 · Research"], ["publications", "03 · Publications"],
  ["log", "04 · Log"], ["systems", "05 · Systems"], ["projects", "06 · Projects"],
  ["writing", "07 · Writing"], ["contact", "10 · Contact"],
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-site px-5 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="live" aria-hidden />
          <span className="font-mono text-[0.82rem] tracking-tight text-ink">{site.shortName}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[0.72rem] tracking-wide uppercase">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="navlink" data-active={active === it.id}>{it.label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden font-mono text-[0.72rem] tracking-wide uppercase text-ink border border-liness px-3 py-1.5" aria-expanded={open}>
          Index
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav className="mx-auto max-w-site px-5 py-4 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[0.8rem] uppercase tracking-wide">
            {sheet.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="navlink py-1">{label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
