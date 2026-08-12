import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionShell id="projects" index="§06" label="Projects">
      <Reveal><h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em] mb-9">Other projects</h2></Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener" className="row bg-paper p-6 md:p-7 group flex flex-col">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-oxblood mb-3">{p.tag}</span>
            <h3 className="font-serif text-[1.25rem] leading-tight text-ink mb-2">{p.title}</h3>
            <p className="text-[0.9rem] leading-[1.55] text-soft flex-1">{p.desc}</p>
            <span className="arrow font-mono text-[0.72rem] text-soft mt-5">View ↗</span>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
