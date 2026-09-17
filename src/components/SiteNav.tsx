import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLang } from "@/i18n/useLang";
import { LangSwitcher } from "./LangSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const SiteNav = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#approach", label: t.nav.approach },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10 py-4"
          : "py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display italic text-xl md:text-2xl tracking-tight text-ink"
        >
          {t.footer.name}
        </a>

        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.18em] font-medium text-ink/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangSwitcher />

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              className="md:hidden grid place-items-center size-11 -mr-2 rounded-full text-ink/80 hover:text-ink transition-colors"
              aria-label={t.nav.menu}
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-paper border-l border-ink/10 flex flex-col"
            >
              <SheetTitle className="font-display italic text-xl font-normal text-ink mt-2 mb-10">
                {t.footer.name}
              </SheetTitle>
              <SheetDescription className="sr-only">{t.nav.menu}</SheetDescription>
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="py-3 text-sm uppercase tracking-[0.16em] text-ink/75 hover:text-ink border-b border-ink/5 transition-colors"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
