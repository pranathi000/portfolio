import Section from "./Section";
import Reveal from "./Reveal";
import { systems } from "@/lib/data";
export default function Systems() {
  return (
    <Section id="systems" label="Systems" title="Engineering" sub="GPU systems and inference engineering — measured against reference implementations.">
      <div className="space-y-4">
        {systems.map((s) => (
          <Reveal key={s.code}>
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-[62ch]">
                  <div className="flex items-center gap-3 mb-2 font-mono text-[0.7rem] uppercase tracking-[0.1em]">
                    <span className="text-acc">{s.code}</span><span className="text-faint">{s.date}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-2 leading-snug">{s.title}</h3>
                  <p className="text-soft text-[0.95rem] leading-relaxed mb-3">{s.desc}</p>
                  <div className="font-mono text-[0.75rem] text-faint">{s.stack}</div>
                </div>
                <div className="flex md:flex-col gap-6 md:gap-4 md:text-right shrink-0">
                  {s.stats.map((st) => (
                    <div key={st.label}>
                      <div className="metric text-2xl md:text-3xl text-ink">{st.value}</div>
                      <div className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-faint">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
