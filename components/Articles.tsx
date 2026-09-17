import Section from "./Section";
import { articles } from "@/lib/data";
import { links } from "@/lib/site";

export default function Articles() {
  return (
    <Section
      id="articles"
      title="Articles"
      sub="Dump of AI. ML. Inference Engineering. CUDA. Research. Whatever I’m digging into!"
      centered
    >
      <div className="text-center">
        {articles.map((a) => (
          <div key={a.title} className="mb-10 pb-10 border-b border-rule last:border-0 last:mb-0 last:pb-0">
            <div className="font-mono text-[0.78rem] text-faint mb-2">{a.emoji} {a.date}</div>
            <div className="text-xl font-semibold mb-3">{a.title}</div>
            <p className="max-w-prose mx-auto mb-3">{a.preview}</p>
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
