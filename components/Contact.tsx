import Section from "./Section";
import { links } from "@/lib/site";

const social = [
  ["💻", "GitHub", links.github],
  ["💼", "LinkedIn", links.linkedin],
  ["🤗", "Hugging Face", links.huggingface],
  ["💬", "Discord", links.discord],
  ["📬", "Email", `mailto:${links.email}`],
] as const;

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose mb-4">
        This site works simply: articles I write are shown as a short preview here, and open as a
        full PDF you can read or download. Discoveries, things I love, and the AI-evolution log are
        my own curated notes, not claims of authorship — each says clearly what it is.
      </p>
      <p className="max-w-prose mb-4">
        If something here interests you, or you want to send me a paper, article, project, or idea
        worth looking at, or you&apos;d like to contribute to a future article or an upcoming
        piece, the simplest way is to email me directly with what you have in mind.
      </p>

      <div className="mb-6">
        {social.map(([emoji, label, href]) =>
          href && href !== "mailto:" ? (
            <div key={label} className="mb-1">
              <span>{emoji} </span>
              <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener">{label}</a>
            </div>
          ) : (
            <div key={label} className="mb-1 text-faint text-[0.9rem]">{emoji} {label} — coming soon</div>
          )
        )}
      </div>

      <a
        href={links.cv}
        download
        className="inline-block border border-black rounded px-5 py-2 text-[0.92rem] font-medium hover:bg-black hover:text-bg transition-colors"
      >
        📄 Download Resume (PDF)
      </a>
    </Section>
  );
}
