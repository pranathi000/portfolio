import Section from "./Section";
import WorkList from "./WorkList";
import { projects } from "@/lib/data";
import { links } from "@/lib/site";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" sub="Things I've built. Each links to its code repository." centered>
      <WorkList items={projects} centered />
      <p className="mt-6">
        <a href={links.github} target="_blank" rel="noopener">Here's my GitHub, to know more →</a>
      </p>
    </Section>
  );
}
