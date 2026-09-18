import Reveal from "./Reveal";
import CaseStudy from "./CaseStudy";
import { useLanguage } from "../i18n/LanguageContext";

export default function WorkSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-edit">
        <Reveal>
          <span className="eyebrow">{t.work.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display italic font-light text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02] text-ink">
            {t.work.heading}
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-line">
          <CaseStudy project={t.projects[0]} />
          <CaseStudy project={t.projects[1]} reverse />
        </div>
      </div>
    </section>
  );
}
