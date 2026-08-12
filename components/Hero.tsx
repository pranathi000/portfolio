"use client";
import { motion, useReducedMotion } from "framer-motion";
import { links } from "@/lib/site";

const nameLines = ["Santhoshini", "Pranathi", "Singaraju"];

function LinkItem({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a className="ulink text-ink" href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
        {label} ↗
      </a>
    </li>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const line = (i: number) =>
    reduce
      ? { initial: { y: 0 }, animate: { y: 0 } }
      : { initial: { y: "110%" }, animate: { y: 0 }, transition: { duration: 0.9, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section id="hero" className="pt-16 md:pt-28 pb-16 md:pb-24">
      <div className="eyebrow mb-8 md:mb-12 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span>AI Research</span><span className="text-liness">/</span>
        <span>Systems Engineering</span><span className="text-liness">/</span>
        <span>Computational Design</span>
      </div>

      <h1 className="font-serif font-medium leading-[0.95] tracking-[-0.02em] text-ink" style={{ fontSize: "clamp(2.9rem,8.4vw,7rem)" }}>
        {nameLines.map((l, i) => (
          <span key={l} className="block overflow-hidden">
            <motion.span className="block" {...line(i)}>{l}</motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-9 md:mt-12 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
        <motion.p
          className="font-serif text-[1.15rem] md:text-[1.4rem] leading-[1.55] text-ink max-w-[46ch]"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          I work on machine learning research and the systems that run modern AI — from
          behavioral anomaly detection and privacy-preserving federated learning to{" "}
          <span className="italic">CUDA kernels, KV-cache design, and long-context inference</span>.
        </motion.p>

        <motion.ul
          className="font-mono text-[0.8rem] flex flex-col gap-2 md:text-right"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <LinkItem href={links.scholar || links.papers} label="Google Scholar" />
          <LinkItem href={links.github} label="GitHub" />
          <LinkItem href={links.linkedin} label="LinkedIn" />
          <LinkItem href={`mailto:${links.email}`} label="Email" />
          <LinkItem href={links.cv} label="Curriculum Vitae" />
        </motion.ul>
      </div>

      <motion.div
        className="mt-12 md:mt-16 border-t border-b border-line py-3.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint flex flex-wrap items-center gap-x-6 gap-y-2"
        initial={reduce ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <span className="flex items-center gap-2 text-ink"><span className="live" />Open to research &amp; engineering roles</span>
        <span className="text-liness hidden md:inline">·</span>
        <span>Andhra Pradesh, IN</span>
        <span className="text-liness hidden md:inline">·</span>
        <span>B.Tech ECE — RGUKT</span>
        <span className="text-liness hidden md:inline">·</span>
        <span>Focus: ML systems / inference</span>
      </motion.div>
    </section>
  );
}
