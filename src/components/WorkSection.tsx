import Reveal from "./Reveal";
import CaseStudy from "./CaseStudy";
import { projects } from "../data/content";

export default function WorkSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-edit">
        <Reveal>
          <span className="eyebrow">Projects</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display italic font-light text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02] text-ink">
            Two projects, built from the ground up.
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-line">
          <CaseStudy project={projects[0]} />
          <CaseStudy project={projects[1]} reverse />
        </div>
      </div>
    </section>
  );
}
