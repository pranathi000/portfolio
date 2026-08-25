export default function Section({ id, title, sub, children }: {
  id: string; title: string; sub?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-9 border-t border-rule scroll-mt-16">
      <h2 className="font-hand text-3xl md:text-4xl text-link mb-4">{title}</h2>
      {sub && <p className="max-w-prose mb-5 text-[0.98rem]">{sub}</p>}
      {children}
    </section>
  );
}
