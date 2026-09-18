import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { content } from "../data/content";
import type { Content, Lang } from "../data/content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "milan-portfolio-lang";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "cs";
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) return stored;

  const browserLang = window.navigator.language?.toLowerCase() ?? "";
  return browserLang.startsWith("cs") || browserLang.startsWith("sk") ? "cs" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage may be unavailable (e.g. private browsing) — language
      // switching still works for the current session.
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: content[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
