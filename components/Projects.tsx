import Section from "./Section";
import { projects } from "@/lib/data";
import { links } from "@/lib/site";

// Projects gets its own visual identity: a compact terminal-style directory
// listing instead of another heading+description block. Each project is one
// command line (the title) with its tech stack as a faint comment line
// underneath — no paragraph descriptions, so it stays short to scan.
export default function Projects() {
  return (
    <Section id="projects" title="Projects" centered>
      <div className="max-w-xl mx-auto text-left rounded-lg border border-black/70 overflow-hidden bg-black/[0.03]">
        {/* fake terminal title bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-black/20">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e0645a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e0b04a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#5fae62]" />
          <span className="ml-3 font-mono text-[0.72rem] text-faint">~/projects</span>
        </div>

        <div className="px-5 py-4 font-mono text-[0.85rem] leading-relaxed">
          {projects.map((p) => (
            <div key={p.title} className="mb-4 last:mb-0">
              <div>
                <span className="text-faint">$ </span>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener" className="font-medium">
                    {p.emoji} {p.title}
                  </a>
                ) : (
                  <span className="font-medium">{p.emoji} {p.title}</span>
                )}
              </div>
              <div className="text-faint text-[0.76rem] pl-4">
                # {p.tag}{!p.link && " · repo coming soon"}
              </div>
            </div>
          ))}
          <div className="text-faint">
            <span>$ </span>
            <a href={links.github} target="_blank" rel="noopener">cd github.com/pranathi000 →</a>
            <span className="animate-pulse">▌</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
