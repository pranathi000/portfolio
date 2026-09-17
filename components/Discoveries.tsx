import Section from "./Section";
import { discoveries } from "@/lib/data";
export default function Discoveries() {
  return (
    <Section
      id="discoveries"
      title="Discoveries"
      sub="Papers, articles, sites, and tools made by other people that I found worth sharing. Not my own work — links open the original source in a new tab."
      centered
    >
      <div className="text-center">
        {discoveries.map((d) => (
          <div key={d.title} className="mb-10 pb-10 border-b border-rule last:border-0 last:mb-0 last:pb-0">
            <div className="font-mono text-[0.76rem] text-faint mb-2">{d.emoji} {d.kind} · {d.date}</div>
            <div className="text-xl font-semibold mb-3">
              {d.link ? <a href={d.link} target="_blank" rel="noopener">{d.title}</a> : d.title}
            </div>
            <p className="max-w-prose mx-auto mb-2">{d.desc}</p>
            {!d.link && <span className="text-faint text-[0.85rem]">Link coming soon</span>}
          </div>
        ))}
      </div>
    </Section>
  );
}
