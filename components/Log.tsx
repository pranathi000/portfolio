import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import { log } from "@/lib/data";

export default function Log() {
  return (
    <SectionShell id="log" index="§04" label="Log">
      <Reveal><h2 className="font-serif text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em] mb-9">Research log</h2></Reveal>
      <ol className="border-t border-line">
        {log.map((e, i) => (
          <li key={i} className="grid grid-cols-[64px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 border-b border-line py-5 items-baseline">
            <span className="font-mono text-[0.82rem] text-oxblood">{e.year}</span>
            <span className="text-[0.98rem] leading-[1.6] text-ink">{e.text}</span>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
