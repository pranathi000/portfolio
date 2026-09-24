import AboutRing from "./AboutRing";

export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        my current coordinates
      </h2>
      <p className="mb-10">A look at the ideas, systems, and questions that currently sit at the intersection of my research.</p>

      <AboutRing />

      <p className="max-w-prose mx-auto mt-12 mb-8">
        The boundaries here are a little blurry on purpose. Some things are connected because they naturally belong together, others because one somehow led me to the next. This is just a snapshot of how those pieces sit together in my head right now.
      </p>

      <div className="font-mono text-sm">
        <a href="#research">research</a> · <a href="#projects">projects</a> ·{" "}
        <a href="#articles">writing</a> · <a href="#love">things I love</a>
      </div>
    </section>
  );
}
