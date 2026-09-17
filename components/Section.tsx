import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";

export default function Section({ id, title, sub, centered, children }: {
  id: string; title: string; sub?: string; centered?: boolean; children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-9 scroll-mt-16 relative z-10 ${centered ? "text-center" : ""}`}>
      <SectionDivider />
      <Reveal>
        <h2 className="font-hand script-bold text-5xl md:text-6xl text-lilac mb-4">{title}</h2>
        {sub && <p className={`mb-5 text-[0.98rem] max-w-prose ${centered ? "mx-auto" : ""}`}>{sub}</p>}
      </Reveal>
      <Reveal delay={120}>{children}</Reveal>
    </section>
  );
}
