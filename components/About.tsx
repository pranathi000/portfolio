import AboutRing from "./AboutRing";

export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        my current coordinates
      </h2>
      <p className="mb-10">machines that think · machines that run · machines that see</p>

      <AboutRing />

      <p className="max-w-prose mx-auto mt-12 mb-8">
        I&apos;m an independent AI/ML researcher. Most of what I actually work on lives in the map
        above and in the sections around it &mdash; this is just where the pieces sit next to each
        other.
      </p>

      <div className="font-mono text-sm">
        <a href="#research">research</a> · <a href="#projects">projects</a> ·{" "}
        <a href="#articles">writing</a> · <a href="#love">things I love</a>
      </div>
    </section>
  );
}
