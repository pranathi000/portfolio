import AIBrainMap from "./AIBrainMap";

export default function AIEvolution() {
  return (
    <section id="ai-evolution" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        a timeline of ideas
      </h2>
      <p className="max-w-prose mx-auto mb-10 text-[0.92rem] text-faint">
        Hover a keyword, click to read the paper.
      </p>

      <AIBrainMap />
    </section>
  );
}
