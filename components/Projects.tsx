import Section from "./Section";
import WorkList from "./WorkList";
import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <Section id="projects" title="Projects" sub="Things I've built. Each links to its code repository.">
      <WorkList items={projects} />
    </Section>
  );
}
