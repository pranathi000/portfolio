import { site, links } from "@/lib/site";
import HeroArt from "./HeroArt";

const heroLinks = [
  ["Google Scholar", links.scholar || links.papers, true],
  ["GitHub", links.github, true],
  ["LinkedIn", links.linkedin, true],
  ["Email", `mailto:${links.email}`, false],
  ["Curriculum Vitae", links.cv, true],
] as const;

export default function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="kicker mb-8">{site.role}</div>
      <div className="grid md:grid-cols-[1fr_360px] gap-10 md:gap-8 items-center">
        <h1 className="font-display font-bold text-ink leading-[0.94] tracking-[-0.03em]" style={{ fontSize: "clamp(2.9rem,8vw,6.2rem)" }}>
          Santhoshini<br />Pranathi<br />Singaraju
        </h1>
        <div className="justify-self-center md:justify-self-end w-full max-w-[340px]">
          <HeroArt />
        </div>
      </div>

      <div className="mt-12 md:mt-16 grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end">
        <p className="text-[1.12rem] md:text-[1.28rem] leading-[1.55] text-ink max-w-[48ch]">
          I work on machine learning research and the systems that run modern AI — from behavioral
          anomaly detection and privacy-preserving federated learning to CUDA kernels, KV-cache
          design, and long-context inference.
        </p>
        <div className="font-mono text-[0.82rem] flex flex-col gap-2 md:text-right md:items-end">
          {heroLinks.map(([label, href, ext]) => (
            <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})} className="ulink inline-flex items-center gap-1">
              {label} <span>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16 border-t border-line pt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint flex flex-wrap items-center gap-x-7 gap-y-2">
        <span className="inline-flex items-center gap-2"><span className="live" />Open to research &amp; engineering roles</span>
        <span>{site.location}</span>
        <span>B.Tech ECE — RGUKT</span>
        <span>Focus: ML systems / inference</span>
      </div>
    </section>
  );
}
