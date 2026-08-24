import Section from "./Section";
import Reveal from "./Reveal";
import { publications } from "@/lib/data";
export default function Publications() {
  return (
    <Section id="publications" label="Publications" title="Selected papers">
      <div className="space-y-4">
        {publications.map((p) => (
          <Reveal key={p.title}>
            <a href={p.link} target="_blank" rel="noopener" className="card row block p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3 font-mono text-[0.7rem] uppercase tracking-[0.1em]">
                <span className="text-acc">{p.status}</span><span className="text-faint">{p.venue}</span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-2 leading-snug">{p.title}</h3>
              <p className="text-soft text-[0.95rem] leading-relaxed max-w-[80ch]">{p.desc}</p>
              <span className="inline-flex items-center gap-1 mt-4 font-mono text-[0.78rem] text-acc">View paper <span className="arrow">↗</span></span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
