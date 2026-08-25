import type { Work } from "@/lib/data";

export default function WorkList({ items }: { items: Work[] }) {
  return (
    <div>
      {items.map((w) => (
        <div key={w.title} className="mb-6 last:mb-0">
          <div className="font-mono text-[0.76rem] text-faint mb-1">{w.emoji} {w.tag}</div>
          <div className="font-medium">
            {w.link ? <a href={w.link} target="_blank" rel="noopener">{w.title}</a> : w.title}
          </div>
          <p className="max-w-prose mt-1">{w.desc}</p>
          {!w.link && <span className="text-faint text-[0.85rem]">Repo link coming soon</span>}
        </div>
      ))}
    </div>
  );
}
