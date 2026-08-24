import Section from "./Section";
import Reveal from "./Reveal";
import { log } from "@/lib/data";
export default function Log() {
  return (
    <Section id="log" label="Timeline" title="Recent activity">
      <div>
        {log.map((l, i) => (
          <Reveal key={i}>
            <div className="row grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-line px-2 -mx-2 rounded-lg">
              <div className="metric text-faint text-sm pt-0.5">{l.year}</div>
              <div className="text-ink text-[0.98rem] leading-relaxed">{l.text}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
