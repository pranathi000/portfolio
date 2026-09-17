import type { Work } from "@/lib/data";

export default function WorkList({ items, centered }: { items: Work[]; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      {items.map((w) => (
        <div key={w.title} className="mb-10 pb-10 border-b border-rule last:border-0 last:mb-0 last:pb-0">
          <div className="font-mono text-[0.76rem] text-faint mb-2">{w.emoji} {w.tag}</div>
          <div className="text-xl font-semibold mb-3">
            {w.link ? <a href={w.link} target="_blank" rel="noopener">{w.title}</a> : w.title}
          </div>
          <p className={`max-w-prose mb-2 ${centered ? "mx-auto" : ""}`}>{w.desc}</p>
          {!w.link && <span className="text-faint text-[0.85rem]">Repo link coming soon</span>}
        </div>
      ))}
    </div>
  );
}
