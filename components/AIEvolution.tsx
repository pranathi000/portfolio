import Section from "./Section";
import { aiEvolution } from "@/lib/data";
export default function AIEvolution() {
  return (
    <Section
      id="ai-evolution"
      title="AI evolution"
      sub="A running, dated record of developments in AI that I find significant — not a news feed, just my own observations as they happen."
      centered
    >
      <div>
        {aiEvolution.map((m) => (
          <div key={m.date + m.text} className="mb-5 last:mb-0">
            <div className="font-mono text-[0.78rem] text-faint mb-1">{m.date}</div>
            <p className="max-w-prose mx-auto">{m.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
