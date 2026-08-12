import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { publications } from "@/lib/data";
import { links } from "@/lib/site";

export default function Publications() {
  return (
    <SectionShell id="publications" index="§03" label="Papers">
      <div className="flex items-baseline justify-between mb-8">
        <Reveal><h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em]">Publications</h2></Reveal>
        <a className="eyebrow ulink hidden md:block" href={links.papers} target="_blank" rel="noopener">All papers ↗</a>
      </div>
      <div className="border-t border-line">
        {publications.map((p) => (
          <a key={p.id} href={p.link} target="_blank" rel="noopener" className="row block border-b border-line py-7 md:py-8 group">
            <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.7rem] text-faint">{p.id}</span>
                  <span className={`font-mono text-[0.62rem] uppercase tracking-[0.12em] px-2 py-0.5 border ${p.status === "Published" ? "border-oxblood text-oxblood" : "border-liness text-soft"}`}>
                    {p.status} · {p.venue}
                  </span>
                </div>
                <h3 className="font-serif text-[1.3rem] md:text-[1.55rem] leading-[1.25] text-ink max-w-[54ch]">{p.title}</h3>
                <p className="text-[0.94rem] leading-[1.65] text-soft mt-3 max-w-[70ch]">{p.desc}</p>
              </div>
              <span className="arrow font-mono text-[0.8rem] text-soft md:pt-1">PDF ↗</span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
