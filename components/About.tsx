import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { links } from "@/lib/site";

export default function About() {
  return (
    <SectionShell id="about" index="§01" label="About">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
        <Reveal className="space-y-5 text-[1.02rem] leading-[1.75] text-ink">
          <p>
            I&apos;m an AI/ML researcher and systems-focused engineer, currently finishing a
            B.Tech in Electronics and Communication at RGUKT, Andhra Pradesh. My work sits
            between machine learning and the infrastructure underneath it.
          </p>
          <p>
            On the research side I work on behavioral anomaly detection, insider-threat
            detection, and privacy-preserving federated learning for cloud systems — most
            recently as a research intern at BITS Pilani, where I authored{" "}
            <span className="font-mono text-[0.92em]">MAD-EBA</span> and developed{" "}
            <span className="font-mono text-[0.92em]">FedPAE</span>.
          </p>
          <p>
            On the systems side I write CUDA, Triton, and CUTLASS: transformer attention
            kernels, a from-scratch inference engine with KV-cache and continuous batching,
            and FlashAttention-style execution for long contexts. I also write about GPU
            optimization and high-performance ML.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="font-mono text-[0.78rem] border-t border-b border-line divide-y divide-line">
            <div className="flex justify-between py-3"><dt className="text-faint uppercase tracking-wide">Currently</dt><dd className="text-ink text-right">Research Intern,<br />BITS Pilani</dd></div>
            <div className="flex justify-between py-3"><dt className="text-faint uppercase tracking-wide">Based in</dt><dd className="text-ink">Andhra Pradesh, IN</dd></div>
            <div className="flex justify-between py-3"><dt className="text-faint uppercase tracking-wide">Degree</dt><dd className="text-ink text-right">B.Tech ECE<br />CGPA 8.3</dd></div>
            <div className="flex justify-between py-3"><dt className="text-faint uppercase tracking-wide">Writes at</dt><dd className="text-ink"><a className="ulink" href={links.medium} target="_blank" rel="noopener">Medium ↗</a></dd></div>
          </dl>
        </Reveal>
      </div>
    </SectionShell>
  );
}
