import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Other work">
      <div className="grid md:grid-cols-3 gap-3">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <a href={p.link} target="_blank" rel="noopener" className="card row block p-6 h-full">
              <div className="chip inline-block mb-3">{p.tag}</div>
              <h3 className="text-ink font-medium mb-2 leading-snug">{p.title}</h3>
              <p className="text-soft text-[0.9rem] leading-relaxed mb-4">{p.desc}</p>
              <span className="font-mono text-[0.76rem] inline-flex items-center gap-1 text-acc">Open <span className="arrow">↗</span></span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
