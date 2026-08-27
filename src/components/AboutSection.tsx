import Reveal from "./Reveal";
import { profile, about } from "../data/content";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 hairline">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.6fr]">
          <div>
            <Reveal>
              <span className="eyebrow">About</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display italic font-light text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-ink">
                {profile.name}
              </h2>
              <p className="mt-2 font-mono text-[0.78rem] tracking-wide text-ink-faint">
                {profile.location}
              </p>
            </Reveal>
          </div>

          <div className="max-w-2xl space-y-4 lg:pt-1">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.05}>
                <p className="text-[0.98rem] leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
