import Section from "./Section";
import WorkList from "./WorkList";
import { research } from "@/lib/data";
export default function Research() {
  return (
    <Section id="research" title="Research" sub="My own research work.">
      <WorkList items={research} />
    </Section>
  );
}
