import Section from "./Section";
import { education, certifications } from "@/lib/data";
export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-prose mb-4">
        I&apos;m an AI/ML researcher and systems-focused engineer, currently finishing a B.Tech in
        Electronics and Communication at {education[0].school} ({education[0].period}). Before
        that, I studied at a {education[1].school.toLowerCase()} ({education[1].period}).
      </p>
      <p className="max-w-prose mb-4">
        Along the way I&apos;ve picked up a few certifications: {certifications.join("; ")}.
      </p>
      <p className="max-w-prose">
        Outside of research, I co-founded De-Lit, a 50+ member literature club, and I&apos;ve been
        writing about ML and GPU optimization since 2024. This site is also where I put down
        things I&apos;m curious about beyond my own field — see Discoveries, Things I love, and AI
        evolution above.
      </p>
    </Section>
  );
}
