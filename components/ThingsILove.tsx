import Section from "./Section";
import { thingsILove } from "@/lib/data";
export default function ThingsILove() {
  return (
    <Section id="love" title="Things I love" sub="Broader interests, outside research and engineering. This list grows over time.">
      <div>
        {thingsILove.map((t) => (
          <div key={t.label} className="mb-5 last:mb-0">
            <div className="font-medium">{t.emoji} {t.label}</div>
            <p className="max-w-prose mt-1">
              {t.note} {t.link && <a href={t.link} target="_blank" rel="noopener">Explore →</a>}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
