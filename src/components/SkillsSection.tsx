import Reveal from "./Reveal";
import ChipRow from "./ChipRow";
import { skills } from "../data/content";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 hairline">
      <div className="container-edit">
        <Reveal>
          <span className="eyebrow">Skills</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display italic font-light text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.05] text-ink">
            What I bring to the work.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-line p-8 md:p-9 transition-colors hover:border-line-bright">
              <span className="eyebrow text-blue-glow">Technical</span>
              <div className="mt-5">
                <ChipRow items={skills.technical} delay={0.1} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-[24px] border border-line p-8 md:p-9 transition-colors hover:border-line-bright">
              <span className="eyebrow text-sage-glow">Soft skills</span>
              <div className="mt-5">
                <ChipRow items={skills.soft} delay={0.16} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
