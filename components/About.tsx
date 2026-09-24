import AboutRing from "./AboutRing";

export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <div className="font-mono text-sm text-faint mb-8">about</div>
      <p className="mb-10">machines that think · machines that run · machines that see</p>

      <AboutRing />

      <p className="max-w-prose mx-auto mt-12 mb-8">
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
