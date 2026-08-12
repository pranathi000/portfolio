import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { systems } from "@/lib/data";

export default function Systems() {
  return (
    <SectionShell id="systems" index="§05" label="Systems">
      <div className="flex items-baseline justify-between mb-8">
        <Reveal><h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em]">Systems &amp; engineering</h2></Reveal>
        <span className="eyebrow hidden md:block">GPU / Inference</span>
      </div>
      <Reveal>
        <p className="text-soft text-[1rem] leading-[1.7] max-w-[60ch] mb-10">
          Low-level work on the execution path of transformer inference: attention kernels,
          cache design, scheduling, and memory layout. Metrics below are measured on my own
          benchmarks and implementations.
        </p>
      </Reveal>
      <div className="border-t border-line">
        {systems.map((s) => (
          <article key={s.code} className="row border-b border-line py-8 md:py-10 group">
            <div className="grid lg:grid-cols-[1fr_260px] gap-6 lg:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.7rem] text-faint">{s.code}</span>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-oxblood">{s.stack}</span>
                </div>
                <h3 className="font-serif text-[1.35rem] md:text-[1.7rem] leading-[1.2] text-ink max-w-[40ch] mb-3">{s.title}</h3>
                <p className="text-[0.96rem] leading-[1.65] text-soft max-w-[62ch]">{s.desc}</p>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint mt-4">{s.date}</p>
              </div>
              <div className="flex lg:flex-col gap-6 lg:gap-4 lg:border-l lg:border-line lg:pl-8">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <div className="font-serif text-[2.1rem] md:text-[2.5rem] leading-none text-ink group-hover:text-oxblood transition-colors">{st.value}</div>
                    <div className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-faint mt-1.5">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
