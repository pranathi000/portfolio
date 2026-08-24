"use client";
import { useEffect, useState } from "react";

const items = [
  ["about", "About"], ["research", "Research"], ["publications", "Publications"],
  ["systems", "Systems"], ["writing", "Writing"], ["contact", "Contact"],
] as const;

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const secs = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-site px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-[0.82rem] tracking-tight text-ink flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-acc" />santhoshini
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="navlink text-[0.82rem]" data-active={active === id}>{label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden font-mono text-[0.8rem] text-ink border border-line rounded-lg px-3 py-1.5">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <div className="mx-auto max-w-site px-5 py-3 flex flex-col gap-3">
            {items.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="navlink">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
