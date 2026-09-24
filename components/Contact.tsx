import Section from "./Section";
import { links } from "@/lib/site";

const social = [
  ["GH", links.github],
  ["in", links.linkedin],
  ["HF", links.huggingface],
  ["disc", ""],
  ["@", `mailto:${links.email}`],
] as const;

export default function Contact() {
  return (
    <Section id="contact" title="Contact" centered>
      <div className="max-w-prose mx-auto text-[1.05rem] leading-relaxed mb-10">
        <p className="mb-4">This page has no grand purpose.</p>
        <p className="mb-4">
          <a href={`mailto:${links.email}`} className="text-black no-underline border-b border-black">
            You can write to me.
          </a>
        </p>
        <p className="mb-4">That&apos;s pretty much it.</p>
        <p className="mb-4">Unless you have something interesting to say.</p>
        <p className="mb-6">In which case, please do.</p>
        
          href={`mailto:${links.email}`}
          className="text-black no-underline border-b border-black font-medium"
        >
          Drop a note
        </a>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {social.map(([label, href]) => {
          if (href) {
            return (
              
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener"
                className="text-black no-underline w-10 h-10 flex items-center justify-center border border-black rounded-full text-[0.8rem]"
              >
                {label}
              </a>
            );
          }
          return (
            <span
              key={label}
              className="text-black w-10 h-10 flex items-center justify-center border border-black rounded-full text-[0.8rem] opacity-40"
            >
              {label}
            </span>
          );
        })}
      </div>
    </Section>
  );
}
