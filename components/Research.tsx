import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { fields } from "@/lib/data";

export default function Research() {
  return (
    <SectionShell id="research" index="§02" label="Research">
      <div className="flex items-baseline justify-between mb-9">
        <Reveal><h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em]">Research index</h2></Reveal>
        <span className="eyebrow hidden md:block">{fields.length} fields</span>
      </div>
      <div className="grid sm:grid-cols-2 border-t border-l border-line">
        {fields.map((f) => (
          <div key={f.n} className="row border-r border-b border-line p-6 md:p-7">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[0.7rem] text-faint">{f.n}</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-oxblood">{f.tag}</span>
            </div>
            <h3 className="font-serif text-[1.35rem] leading-tight text-ink mb-2">{f.name}</h3>
            <p className="text-[0.9rem] leading-[1.55] text-soft">{f.desc}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
