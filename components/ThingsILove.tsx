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
        {/* SONG — square poster, click to listen */}
        <div>
          <div className="font-mono text-sm text-faint mb-3">songs that have no business being this good</div>
          <div className="flex gap-5 items-start">
            {lovedSong.link ? (
              <a href={lovedSong.link} target="_blank" rel="noopener" className="shrink-0 block">
                <div className="w-28 h-28 border border-black rounded overflow-hidden flex items-center justify-center text-3xl bg-black/5 hover:opacity-80 transition-opacity">
                  {lovedSong.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={lovedSong.cover} alt={lovedSong.title} className="w-full h-full object-cover" />
                  ) : (
                    "🎵"
                  )}
                </div>
              </a>
            ) : (
              <div className="w-28 h-28 border border-rule rounded overflow-hidden flex items-center justify-center text-3xl opacity-60 shrink-0">
                {lovedSong.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={lovedSong.cover} alt={lovedSong.title} className="w-full h-full object-cover" />
                ) : (
                  "🎵"
                )}
              </div>
            )}
            <div>
              <div className="font-medium">{lovedSong.artist} — {lovedSong.title}</div>
              <p className="mt-1 text-[0.92rem]">{lovedSong.note}</p>
            </div>
          </div>
        </div>

        <hr className="border-rule" />

        {/* BOOKS — square posters, click through to Amazon */}
        <div>
          <div className="font-mono text-sm text-faint mb-3">books that wouldn&apos;t leave me alone</div>
          <div className="flex flex-wrap gap-8">
            {lovedBooks.map((b) => (
              <div key={b.title} className="w-32">
                {b.amazon ? (
                  <a href={b.amazon} target="_blank" rel="noopener" className="block">
                    <div className="w-32 h-32 border border-black rounded overflow-hidden flex items-center justify-center text-3xl bg-black/5 hover:opacity-80 transition-opacity">
                      {b.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                      ) : (
                        "📖"
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="w-32 h-32 border border-rule rounded overflow-hidden flex items-center justify-center text-3xl opacity-60">
                    {b.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                    ) : (
                      "📖"
                    )}
                  </div>
                )}
                <div className="font-medium text-[0.88rem] mt-2 leading-snug">{b.title}</div>
                <p className="mt-1 text-[0.82rem] text-faint leading-snug">{b.note}</p>
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
