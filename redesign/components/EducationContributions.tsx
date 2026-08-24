import Reveal from "./Reveal";
import { education, certifications, contributions } from "@/lib/data";
export default function EducationContributions() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-line scroll-mt-20">
      <div className="grid md:grid-cols-3 gap-10">
        <Reveal>
          <div className="seclabel mb-6">Education</div>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.school}>
                <div className="text-ink font-medium leading-snug">{e.school}</div>
                <div className="text-soft text-[0.9rem] mt-1">{e.detail}</div>
                <div className="font-mono text-[0.72rem] text-faint mt-1">{e.period}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="seclabel mb-6">Certifications</div>
          <ul className="space-y-3 text-soft text-[0.95rem]">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2"><span className="text-acc">—</span><span>{c}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="seclabel mb-6">Contributions</div>
          <div className="space-y-6">
            {contributions.map((c) => (
              <div key={c.title}>
                <div className="text-ink font-medium leading-snug">{c.title}</div>
                <div className="text-soft text-[0.9rem] mt-1">{c.detail}</div>
                <div className="font-mono text-[0.72rem] text-faint mt-1">{c.period}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
