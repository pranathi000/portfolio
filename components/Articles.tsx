import Section from "./Section";
import { articles } from "@/lib/data";
import { links } from "@/lib/site";

export default function Articles() {
  return (
    <Section id="articles" title="Articles" sub="Dump of AI. ML. Inference Engineering. CUDA. Research. Whatever I’m digging into!">
      <div>
        {articles.map((a) => (
          <div key={a.title} className="mb-7 last:mb-0">
            <div className="font-mono text-[0.78rem] text-faint mb-1">{a.emoji} {a.date}</div>
            <div className="font-medium">{a.title}</div>
            <p className="max-w-prose mt-1 mb-2">{a.preview}</p>
            {a.pdf ? (
              <a href={a.pdf} target="_blank" rel="noopener">Read →</a>
            ) : (
              <span className="text-faint text-[0.9rem]">PDF coming soon</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6">
        <a href={links.medium} target="_blank" rel="noopener">Read more of my articles on Medium →</a>
      </p>
    </Section>
  );
}
