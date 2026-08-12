import type { ReactNode } from "react";

// The signature "logbook margin / code gutter": a ruled left column with the
// section index and label, next to the content. Collapses on mobile.
export default function SectionShell({
  id, index, label, children,
}: { id?: string; index: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="grid md:grid-cols-[80px_1fr] border-t border-line scroll-mt-16">
      <div className="hidden md:block border-r border-line py-14 pr-6">
        <div className="sticky top-20 font-mono text-[0.7rem] text-faint leading-6">
          {index}
          <br />
          <span className="text-liness">{label}</span>
        </div>
      </div>
      <div className="py-12 md:py-16 md:pl-12">{children}</div>
    </section>
  );
}
