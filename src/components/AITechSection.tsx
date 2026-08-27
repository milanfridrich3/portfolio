import Reveal from "./Reveal";
import ChipRow from "./ChipRow";
import { aiTech } from "../data/content";

export default function AITechSection() {
  return (
    <section id="ai" className="relative py-24 md:py-32 hairline">
      <div className="container-edit">
        <Reveal>
          <span className="eyebrow">AI &amp; Technology</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display italic font-light text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.05] text-ink">
            A tool that extends how I think, not a replacement for it.
          </h2>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-4">
          {aiTech.aiParagraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <p className="text-[0.98rem] leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <div className="eyebrow mb-4 !text-ink-faint">Areas I work in</div>
            <ChipRow items={aiTech.areas} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
