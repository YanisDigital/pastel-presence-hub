import { useLang } from "@/i18n/useLang";

export const LangSwitcher = () => {
  const { lang, setLang, t } = useLang();
  return (
    <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-ink/70">
      <button
        type="button"
        onClick={() => setLang("uk")}
        aria-pressed={lang === "uk"}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "uk" ? "text-ink font-semibold" : "hover:text-ink"
        }`}
      >
        {t.langSwitch.uk}
      </button>
      <span className="opacity-40">·</span>
      <button
        type="button"
        onClick={() => setLang("ru")}
        aria-pressed={lang === "ru"}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "ru" ? "text-ink font-semibold" : "hover:text-ink"
        }`}
      >
        {t.langSwitch.ru}
      </button>
    </div>
  );
};
