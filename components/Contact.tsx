import Section from "./Section";
import { links } from "@/lib/site";

const social = [
  ["GitHub", links.github, links.github],
  ["LinkedIn", links.linkedin, links.linkedin],
  ["Hugging Face", links.huggingface, links.huggingface],
  ["Discord", "pranathi000", ""],
  ["Email", links.email, `mailto:${links.email}`],
] as const;

export default function Contact() {
  return (
    <Section id="contact" title="Contact" centered>
      <div>
        {social.map(([label, display, href]) => (
          <div key={label}>
            {href ? (
              <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener">
                {label}: {display}
              </a>
            ) : (
              <span>{label}: {display}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
