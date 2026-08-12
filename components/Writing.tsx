import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { links } from "@/lib/site";

export default function Writing() {
  return (
    <SectionShell id="writing" index="§07" label="Writing">
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
        <Reveal>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em] mb-4">Writing</h2>
          <p className="text-soft text-[1rem] leading-[1.7] max-w-[52ch]">
            10+ technical articles on high-performance computing, GPU optimization, CUDA
            programming patterns, and practical ML — with code implementations.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={links.medium} target="_blank" rel="noopener"
             className="font-mono text-[0.8rem] border border-liness px-5 py-3 hover:bg-ink hover:text-paper transition-colors whitespace-nowrap inline-block">
            Read on Medium ↗
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}
