import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function VisionSection() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative py-24 md:py-32 hairline">
      <div className="container-edit">
        <Reveal>
          <span className="eyebrow">{t.vision.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display italic font-light text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.05] text-ink">
            {t.vision.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">{t.vision.intro}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-2">
          {t.vision.items.map((item, i) => (
            <Reveal key={item} delay={0.16 + i * 0.04}>
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3 border-t border-line py-4"
              >
                <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-blue-glow" />
                <p className="text-[0.92rem] leading-relaxed text-ink-soft">{item}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-10 font-display italic text-[1.1rem] text-ink">{t.vision.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
