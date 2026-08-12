import Reveal from "./Reveal";
import { links } from "@/lib/site";

export default function Contact() {
  const cells = [
    { label: "Email", value: "singarajupranathi\n@gmail.com", href: `mailto:${links.email}`, ext: false },
    { label: "GitHub", value: "@pranathi000 ↗", href: links.github, ext: true },
    { label: "LinkedIn", value: "in/santhoshini ↗", href: links.linkedin, ext: true },
    { label: "Scholar", value: "Profile ↗", href: links.scholar || links.papers, ext: true },
  ];
  return (
    <section id="contact" className="grid md:grid-cols-[80px_1fr] border-t border-line scroll-mt-16">
      <div className="hidden md:block border-r border-line py-14 pr-6">
        <div className="sticky top-20 font-mono text-[0.7rem] text-faint leading-6">§10<br /><span className="text-liness">Contact</span></div>
      </div>
      <div className="py-16 md:py-24 md:pl-12">
        <Reveal><p className="eyebrow mb-6">Contact</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[2.2rem] md:text-[3.4rem] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
            Building research and the systems beneath it.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-soft text-[1.05rem] leading-[1.7] max-w-[48ch] mt-6">
            Open to research fellowships and ML / inference engineering roles. The fastest way
            to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line max-w-3xl">
            {cells.map((c) => (
              <a key={c.label} href={c.href} {...(c.ext ? { target: "_blank", rel: "noopener" } : {})} className="row bg-paper p-5 group">
                <span className="eyebrow block mb-2">{c.label}</span>
                <span className="font-mono text-[0.8rem] text-ink group-hover:text-oxblood transition-colors whitespace-pre-line">{c.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
