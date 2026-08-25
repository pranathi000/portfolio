export default function Section({ id, title, sub, children }: {
  id: string; title: string; sub?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-9 border-t border-rule scroll-mt-16">
      <h2 className="text-[0.98rem] font-semibold uppercase tracking-[0.05em] mb-4">{title}</h2>
      {sub && <p className="max-w-prose mb-5 text-[0.98rem]">{sub}</p>}
      {children}
    </section>
  );
}
