import Section from "./Section";
import { aiEvolution } from "@/lib/data";
export default function AIEvolution() {
  return (
    <Section id="ai-evolution" title="AI evolution" sub="A running, dated record of developments in AI that I find significant — not a news feed, just my own observations as they happen.">
      <div>
        {aiEvolution.map((m) => (
          <div key={m.date + m.text} className="mb-4 last:mb-0 flex gap-4">
            <div className="font-mono text-[0.78rem] text-faint w-20 shrink-0 pt-0.5">{m.date}</div>
            <p className="max-w-prose">{m.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
