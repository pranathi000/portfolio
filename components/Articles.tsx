import Section from "./Section";
import { articles } from "@/lib/data";
import { links } from "@/lib/site";

// Dates in data are stored as dd-mm-yyyy. Parse to a real Date so we can
// sort latest-first regardless of the order they were added in.
function parseDate(d: string) {
  const [day, month, year] = d.split("-").map((n) => parseInt(n, 10));
  return new Date(year, (month || 1) - 1, day || 1);
}

export default function Articles() {
  const sorted = [...articles].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  return (
    <Section id="articles" title="Articles" sub="AI. ML. Inference engineering. CUDA. Latest first." centered>
      <div className="relative max-w-md mx-auto text-left pl-8">
        {/* vertical line */}
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-rule" />
        {sorted.map((a, i) => {
          const dt = parseDate(a.date);
          const year = dt.getFullYear();
          const prevYear = i > 0 ? parseDate(sorted[i - 1].date).getFullYear() : null;
          const showYear = year !== prevYear;
          return (
            <div key={a.title} className="relative mb-7 last:mb-0">
              {showYear && (
                <div className="font-mono text-[0.75rem] text-faint mb-2 -ml-8 pl-8">{year}</div>
              )}
              <span className="absolute -left-8 top-1.5 w-[9px] h-[9px] rounded-full bg-lilac" />
              <div className="font-mono text-[0.72rem] text-faint mb-1">
                {String(dt.getDate()).padStart(2, "0")}/{String(dt.getMonth() + 1).padStart(2, "0")}
              </div>
              {a.pdf ? (
                <a href={a.pdf} target="_blank" rel="noopener" className="font-medium leading-snug">
                  {a.title}
                </a>
              ) : (
                <span className="font-medium leading-snug">{a.title}</span>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-8">
        <a href={links.medium} target="_blank" rel="noopener">More on Medium →</a>
      </p>
    </Section>
  );
}
