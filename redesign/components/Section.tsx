import Reveal from "./Reveal";

export default function Section({ id, label, title, sub, children }: {
  id: string; label: string; title?: string; sub?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-line scroll-mt-20">
      <Reveal><div className="seclabel mb-3">{label}</div></Reveal>
      {title && <Reveal><h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-3">{title}</h2></Reveal>}
      {sub && <Reveal><p className="text-soft max-w-[60ch] mb-10">{sub}</p></Reveal>}
      {!sub && title && <div className="mb-7" />}
      {children}
    </section>
  );
}
