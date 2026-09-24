import React from "react";
import Section from "./Section";
import { links } from "@/lib/site";

const social = [
  ["GH", links.github],
  ["in", links.linkedin],
  ["HF", links.huggingface],
  ["disc", ""],
  ["@", `mailto:${links.email}`],
] as const;

function Link({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const isMail = href.startsWith("mailto");
  return React.createElement(
    "a",
    { href, className, target: isMail ? undefined : "_blank", rel: "noopener" },
    children
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact" centered>
      <div className="max-w-prose mx-auto text-[1.05rem] leading-relaxed mb-10">
        <p className="mb-4">This page has no grand purpose.</p>
        <p className="mb-4">
          <Link href={`mailto:${links.email}`} className="text-black no-underline border-b border-black">
            You can write to me.
          </Link>
        </p>
        <p className="mb-4">That&apos;s pretty much it.</p>
        <p className="mb-4">Unless you have something interesting to say.</p>
        <p className="mb-6">In which case, please do.</p>
        <Link
          href={`mailto:${links.email}`}
          className="text-black no-underline border-b border-black font-medium"
        >
          Drop a note
        </Link>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {social.map(([label, href]) => {
          if (href) {
            return (
              <Link
                key={label}
                href={href}
                className="text-black no-underline w-10 h-10 flex items-center justify-center border border-black rounded-full text-[0.8rem]"
              >
                {label}
              </Link>
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
