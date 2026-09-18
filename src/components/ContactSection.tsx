import Reveal from "./Reveal";
import Aperture from "./Aperture";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
        <Aperture size={640} accent="sage" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,#05070c_75%)]" />

      <div className="container-edit relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl font-display italic font-light text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] text-ink">
            {t.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
            {t.contact.paragraph}
          </p>
        </Reveal>

        {/* Styled as a lightweight "form" — a single field that opens the mail client */}
        <Reveal delay={0.24}>
          <a
            href={`mailto:${t.profile.email}`}
            className="group mt-10 flex w-full max-w-md items-center justify-between gap-3 rounded-full border border-line-bright bg-panel/60 py-2 pl-6 pr-2 backdrop-blur-sm transition-colors hover:border-blue-glow/50"
          >
            <span className="truncate text-left text-[0.92rem] text-ink-soft">{t.profile.email}</span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-void transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={t.profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-ink-faint transition-colors hover:text-ink-soft"
          >
            github.com/{t.profile.githubHandle}
            <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
