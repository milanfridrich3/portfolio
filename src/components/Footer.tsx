import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="hairline py-8">
      <div className="container-edit flex flex-col items-center justify-between gap-3 text-xs text-ink-faint sm:flex-row">
        <span className="font-display italic text-ink-soft">{t.profile.motto}</span>
        <span>© {t.profile.name} {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
