import AboutRing from "./AboutRing";

export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        my current coordinates
      </h2>
      <p className="mb-10">A little map of what I’m currently trying to make sense of.  </p>

      <AboutRing />

      <p className="max-w-prose mx-auto mt-12 mb-8">
        I’m somewhere between learning, building, and figuring things out. I graduated from Rajiv Gandhi University of Knowledge Technologies, 
        AP-IIIT, and later found my way into research through an internship at BITS Pilani, where I worked on two papers that eventually made their way into publication.
        Now, I’m exploring research on my own terms, following questions that keep pulling me deeper. My curiosity currently moves through inference, metacognition, reasoning,
        multilingual and multimodal systems, 
        and the layers underneath them, from CUDA to Triton. I don’t think of these as boxes to fit into, but as coordinates on a map that keeps changing as I learn.
      </p>

      <div className="font-mono text-sm">
        <a href="#research">research</a> · <a href="#projects">projects</a> ·{" "}
        <a href="#articles">writing</a> · <a href="#love">things I love</a>
      </div>
    </section>
  );
}
