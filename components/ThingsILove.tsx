import Section from "./Section";
import { lovedSong, lovedBooks, lovedRabbitHoles } from "@/lib/data";

export default function ThingsILove() {
  return (
    <Section
      id="love"
      title="things i have a soft spot for"
      sub="a few things i keep coming back to."
      centered
    >
      <div className="max-w-prose mx-auto text-left space-y-14">
        <div>
          <div className="font-mono text-sm text-faint mb-2">songs that have no business being this good</div>
          <div className="font-medium">{lovedSong.artist} — {lovedSong.title}</div>
          <p className="mt-1">{lovedSong.note}</p>
          {lovedSong.link && <a href={lovedSong.link} target="_blank" rel="noopener" className="inline-block mt-2">[ listen → ]</a>}
        </div>

        <hr className="border-rule" />

        <div>
          <div className="font-mono text-sm text-faint mb-3">books that wouldn&apos;t leave me alone</div>
          <div className="flex flex-wrap gap-8">
            {lovedBooks.map((b) => (
              <div key={b.title}>
                <div className="font-medium">{b.title}</div>
                <p className="mt-1 text-[0.92rem]">{b.note}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-rule" />

        <div>
          <div className="font-mono text-sm text-faint mb-3">rabbit holes i willingly walked into</div>
          {lovedRabbitHoles.map((r, i) => (
            <div key={i} className="mb-4 last:mb-0">
              {r.title && <div className="font-medium">{r.title}</div>}
              <p className="mt-1 text-[0.92rem]">{r.note}</p>
              {r.link && <a href={r.link} target="_blank" rel="noopener" className="inline-block mt-1">[ paper → ]</a>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
