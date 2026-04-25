import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { LangSwitcher } from "./LangSwitcher";

export const SiteNav = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-rose/10 py-5"
          : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-serif italic text-xl md:text-2xl tracking-tight text-ink"
        >
          {t.footer.name}
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.18em] font-medium text-ink/70">
          <a href="#about" className="hover:text-ink transition-colors">
            {t.nav.about}
          </a>
          <a href="#approach" className="hover:text-ink transition-colors">
            {t.nav.approach}
          </a>
          <a href="#services" className="hover:text-ink transition-colors">
            {t.nav.services}
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            {t.nav.contact}
          </a>
        </div>
        <LangSwitcher />
      </div>
    </nav>
  );
};
