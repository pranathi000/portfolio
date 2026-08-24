import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-line scroll-mt-20">
      <Reveal><div className="seclabel mb-8">About</div></Reveal>
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
        <Reveal className="space-y-5 text-[1.02rem] leading-[1.7] text-soft max-w-[62ch]">
          <p><span className="text-ink">I&apos;m an AI/ML researcher and systems-focused engineer</span>, currently finishing a B.Tech in Electronics and Communication at RGUKT, Andhra Pradesh. My work sits between machine learning and the infrastructure underneath it.</p>
          <p>On the research side I work on behavioral anomaly detection, insider-threat detection, and privacy-preserving federated learning for cloud systems — most recently as a research intern at BITS Pilani, where I authored MAD-EBA and developed FedPAE.</p>
          <p>On the systems side I write CUDA, Triton, and CUTLASS: transformer attention kernels, a from-scratch inference engine with KV-cache and continuous batching, and FlashAttention-style execution for long contexts. I also write about GPU optimization and high-performance ML.</p>
        </Reveal>
        <Reveal className="space-y-6 font-mono text-[0.82rem]">
          {[["Currently", "Research Intern, BITS Pilani"], ["Based in", "Andhra Pradesh, IN"], ["Degree", "B.Tech ECE · CGPA 8.3"], ["Interests", "Anomaly detection · Federated learning · GPU inference"]].map(([k, v]) => (
            <div key={k}>
              <div className="text-faint uppercase tracking-[0.12em] text-[0.68rem] mb-1">{k}</div>
              <div className="text-ink">{v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
