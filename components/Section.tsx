export default function Section({ id, title, sub, centered, children }: {
  id: string; title: string; sub?: string; centered?: boolean; children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-9 border-t border-rule scroll-mt-16 ${centered ? "text-center" : ""}`}>
      <h2 className="font-hand text-3xl md:text-4xl text-lilac mb-4">{title}</h2>
      {sub && <p className={`mb-5 text-[0.98rem] max-w-prose ${centered ? "mx-auto" : ""}`}>{sub}</p>}
      {children}
    </section>
  );
}
