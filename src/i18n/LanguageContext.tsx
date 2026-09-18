import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";

export type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

export const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "ru";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "uk") return stored;
  } catch {
    // localStorage can throw in private browsing / with storage disabled.
  }
  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("uk")) return "uk";
  return "ru";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Resolved synchronously so the first render already matches the
  // stored/browser preference — avoids a flash of the wrong language.
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dict = translations[lang];
    document.documentElement.lang = lang === "uk" ? "uk" : "ru";
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dict.meta.description);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore: persistence is a nicety, not a requirement
    }
  };

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
