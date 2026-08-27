import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="hairline py-8">
      <div className="container-edit flex flex-col items-center justify-between gap-3 text-xs text-ink-faint sm:flex-row">
        <span className="font-display italic text-ink-soft">{profile.motto}</span>
        <span>© {profile.name} {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
