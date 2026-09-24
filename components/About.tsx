export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <div className="font-mono text-sm text-faint mb-8">about</div>
      <p className="mb-2">currently thinking about</p>
      <p className="mb-10">machines that think · machines that run · machines that see</p>

      <div className="max-w-md mx-auto font-mono text-[0.82rem] leading-loose text-faint mb-10">
        <div>INFERENCE ↗ CUDA ↘ PERFORMANCE</div>
        <div>↖ TRITON · MULTIMODAL · MULTILINGUAL ↙</div>
        <div>REASONING ↔ METACOGNITION</div>
      </div>

      <p className="italic mb-10">I build, research, break, measure, and try again.</p>

      <p className="max-w-prose mx-auto mb-10">
        I&apos;m an independent AI/ML researcher working around ML inference and performance
        optimization, with a growing interest in multilingual and multimodal systems, reasoning,
        and metacognition.
      </p>

      <div className="font-mono text-sm">
        <a href="#research">research</a> · <a href="#projects">projects</a> ·{" "}
        <a href="#articles">writing</a> · <a href="#love">things I love</a>
      </div>
    </section>
  );
}
