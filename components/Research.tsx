import Section from "./Section";
import { research } from "@/lib/data";
import { links } from "@/lib/site";

export default function Research() {
  return (
    <Section id="research" title="Research" centered>
      <p className="mb-8 max-w-prose mx-auto text-[0.98rem]">
        Check out more of my research on{" "}
        <a href={links.GoogleScholar} target="_blank" rel="noopener">
          Google Scholar
        </a>
        .
        My recent work on Multicultural Riddle Benchmarking was accepted to MRL 2026, under the EMNLP conference.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {research.map((w) => (
          <div key={w.title} className="w-36 text-center">
            {w.link ? (
              <a href={w.link} target="_blank" rel="noopener" className="block">
                <div className="w-36 h-36 border border-black rounded flex items-center justify-center text-4xl hover:bg-black/5 transition-colors">
                  📄
                </div>
              </a>
            ) : (
              <div className="w-36 h-36 border border-rule rounded flex items-center justify-center text-4xl opacity-60">
                📄
              </div>
            )}
            <div className="text-[0.8rem] font-medium mt-2 leading-snug">{w.title}</div>
            <div className="font-mono text-[0.7rem] text-faint mt-1">{w.tag}</div>
            {w.link ? (
              <a href={w.link} target="_blank" rel="noopener" className="text-[0.78rem] inline-block mt-1">
                view →
              </a>
            ) : (
              <span className="text-faint text-[0.78rem] inline-block mt-1">link coming soon</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
