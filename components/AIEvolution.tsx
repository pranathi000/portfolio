import AIBrainMap from "./AIBrainMap";

export default function AIEvolution() {
  return (
    <section id="ai-evolution" className="py-16 text-center">
      <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">
        a timeline of ideas
      </h2>
      <p className="max-w-prose mx-auto mb-10 text-[0.92rem] text-faint">
        I think of AI as a moving landscape of ideas. One question leads to another, one capability changes what becomes possible, and an entire field slowly bends in a new direction. This is my way of tracing that movement, through the ideas I keep returning to: how models learn, how they become multimodal and multilingual, how they reason, how efficiently they run, how they interact with the world, and how we make them safer. Each point is a thread I’ve found worth pulling, with a paper, an idea, or a discovery at the other end.
      </p>

      <AIBrainMap />
    </section>
  );
}
