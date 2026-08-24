import Reveal from "./Reveal";
import { links } from "@/lib/site";
export default function Contact() {
  const cells = [
    ["Email", links.email, `mailto:${links.email}`, false],
    ["GitHub", "pranathi000", links.github, true],
    ["LinkedIn", "Connect", links.linkedin, true],
    ["CV", "Download PDF", links.cv, true],
  ] as const;
  return (
    <section id="contact" className="py-16 md:py-28 border-t border-line scroll-mt-20">
      <Reveal><div className="seclabel mb-6">Contact</div></Reveal>
      <Reveal><h2 className="font-display text-3xl md:text-5xl font-medium text-ink tracking-[-0.02em] mb-10 max-w-[18ch]">Let&apos;s talk research or systems.</h2></Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {cells.map(([label, value, href, ext]) => (
          <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})} className="card row p-5 flex items-center justify-between">
            <span>
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint mb-1">{label}</span>
              <span className="text-ink text-sm">{value}</span>
            </span>
            <span className="arrow text-faint">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
