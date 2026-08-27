import { motion } from "framer-motion";
import Aperture from "./Aperture";
import Reveal from "./Reveal";
import type { Project } from "../data/content";

type CaseStudyProps = {
  project: Project;
  reverse?: boolean;
};

export default function CaseStudy({ project, reverse = false }: CaseStudyProps) {
  const accentText = project.accent === "sage" ? "text-sage-glow" : "text-blue-glow";
  const accentBorder = project.accent === "sage" ? "border-sage-glow/30" : "border-blue-glow/30";

  return (
    <div className="relative py-20 md:py-28">
      <div
        className={`grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual */}
        <Reveal y={30}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-line bg-panel"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Aperture size={520} accent={project.accent} animate={false} idle />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-void/20" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="eyebrow text-ink/70">{project.kicker}</span>
              <span className={`eyebrow ${accentText}`}>{project.year}</span>
            </div>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className={`eyebrow inline-flex items-center gap-2 rounded-full border ${accentBorder} px-3 py-1`}>
              {project.kicker}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mt-6 font-display italic font-light text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[1.02] text-ink">
              {project.name}
            </h3>
          </Reveal>

          <Reveal delay={0.14}>
            <p className={`mt-3 font-display text-[1.15rem] italic ${accentText}`}>{project.tagline}</p>
          </Reveal>

          <div className="mt-6 max-w-xl space-y-4">
            {project.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.2 + i * 0.06}>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.34}>
            <div className="mt-8">
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line-bright px-5 py-2.5 text-sm text-ink transition-all hover:border-current hover:-translate-y-0.5"
              >
                {project.link.label}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
