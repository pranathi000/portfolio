import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { education, certifications, contributions } from "@/lib/data";
import { links } from "@/lib/site";

export default function EducationContributions() {
  return (
    <SectionShell index="§08" label="Education">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <Reveal>
          <h2 className="font-serif text-[1.55rem] md:text-[1.8rem] mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.school} className="border-t border-line pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="text-[1.02rem] text-ink">{e.school}</h3>
                  <span className="font-mono text-[0.7rem] text-faint whitespace-nowrap">{e.period}</span>
                </div>
                <p className="text-soft text-[0.95rem] mt-1">{e.detail}</p>
              </div>
            ))}
          </div>
          <h3 className="eyebrow mt-10 mb-4">Certifications</h3>
          <ul className="text-[0.95rem] text-soft space-y-2">
            {certifications.map((c) => <li key={c}>{c}</li>)}
            <li><a className="ulink text-ink" href={links.certificates} target="_blank" rel="noopener">All certificates ↗</a></li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[1.55rem] md:text-[1.8rem] mb-6">Contributions</h2>
          <div className="space-y-6">
            {contributions.map((c) => (
              <div key={c.title} className="border-t border-line pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="text-[1.02rem] text-ink">{c.title}</h3>
                  <span className="font-mono text-[0.7rem] text-faint whitespace-nowrap">{c.period}</span>
                </div>
                <p className="text-soft text-[0.95rem] mt-1">{c.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
