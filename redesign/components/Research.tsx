import Section from "./Section";
import Reveal from "./Reveal";
import { fields } from "@/lib/data";
export default function Research() {
  return (
    <Section id="research" label="Research" title="What I work on">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {fields.map((f) => (
          <Reveal key={f.name} className="card p-5 bg-white/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-ink font-medium">{f.name}</span>
              <span className="chip">{f.tag}</span>
            </div>
            <p className="text-soft text-[0.9rem] leading-relaxed">{f.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
