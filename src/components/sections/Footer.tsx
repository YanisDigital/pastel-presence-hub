import { useLang } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper border-t border-paper/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="font-serif italic text-xl">{t.footer.name}</div>
        <div className="text-xs italic text-paper/50">{t.footer.tagline}</div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">
          © {year} · {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
