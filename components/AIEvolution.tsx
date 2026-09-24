import { aiEvolutionNodes } from "@/lib/data";
import AIBrainMap from "./AIBrainMap";

export default function AIEvolution() {
  const allItems = aiEvolutionNodes.flatMap((n) => n.items.filter((i) => i.link));

  return (
    <section id="ai-evolution" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        a timeline of ideas
      </h2>
      <p className="max-w-prose mx-auto mb-10">
        Some of the papers, models, and milestones that shaped how I think about AI. Not a
        complete history &mdash; just the ones that keep coming back to me.
      </p>

      <AIBrainMap />

      <div className="max-w-prose mx-auto text-left mt-12 space-y-8">
        {allItems.map((item) => (
          <div key={item.title}>
            <a href={item.link} target="_blank" rel="noopener" className="font-medium">
              {item.title}
            </a>
            <div className="font-mono text-[0.78rem] text-faint mt-1 mb-2">{item.authors}</div>
            <p className="text-[0.92rem] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
