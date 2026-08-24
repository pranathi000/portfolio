import Section from "./Section";
import Reveal from "./Reveal";
import { links } from "@/lib/site";
export default function Writing() {
  return (
    <Section id="writing" label="Writing" title="Technical blogging">
      <Reveal>
        <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white/40">
          <div className="max-w-[60ch]">
            <p className="text-ink text-lg mb-1">ML &amp; GPU optimization on Medium</p>
            <p className="text-soft">10+ articles on HPC architectures, GPU optimization, and CUDA patterns — with code. Writing to make high-performance ML legible.</p>
          </div>
          <a className="ulink font-mono text-sm inline-flex items-center gap-1 shrink-0" href={links.medium} target="_blank" rel="noopener">Read on Medium <span>↗</span></a>
        </div>
      </Reveal>
    </Section>
  );
}
