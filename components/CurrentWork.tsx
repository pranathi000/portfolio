import Section from "./Section";
import { currentWork } from "@/lib/data";

export default function CurrentWork() {
  return (
    <Section
      id="current-work"
      title="Current Work"
      sub="I contribute to open-source research in ML, multimodal AI, and multilinguality at Cohere Labs."
      centered
    >
      <div className="text-center">
        {currentWork.map((c) => (
          <div key={c.title} className="mb-10 pb-10 border-b border-rule last:border-0 last:mb-0 last:pb-0">
            <div className="font-mono text-[0.76rem] text-faint mb-2">{c.emoji} {c.period}</div>
            <div className="text-xl font-semibold mb-3">
              {c.link ? <a href={c.link} target="_blank" rel="noopener">{c.title}</a> : c.title}
            </div>
            <p className="max-w-prose mb-2 mx-auto">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
