import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/useLang";
import { useDemoLink } from "@/hooks/useDemoLink";
import { CONTACT } from "@/config";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  const { t } = useLang();
  const link = useDemoLink();
  return (
    <section id="top" className="relative isolate pt-40 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="ambient" aria-hidden />
      <div className="max-w-4xl mx-auto text-center hero-stagger">
        <span className="inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.28em] text-ink/65 mb-8">
          <span className="inline-block w-5 h-px bg-sage" aria-hidden />
          {t.hero.eyebrow}
          <span className="inline-block w-5 h-px bg-sage" aria-hidden />
        </span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] mb-10 text-balance font-light">
          <span className="italic">{t.hero.titleA}</span>
          <br />
          {t.hero.titleB}
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg text-ink/75 leading-relaxed font-light text-pretty mb-14">
          {t.hero.lead}
        </p>
        <a
          {...link({ href: CONTACT.telegram, target: "_blank", rel: "noopener noreferrer" })}
          className="group breathe inline-flex items-center gap-3 px-10 py-4 bg-ink text-paper rounded-full text-sm tracking-[0.15em] uppercase font-medium hover:bg-ink/90 transition-colors duration-300"
        >
          {t.hero.cta}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </a>
      </div>

      <div className="mt-20 md:mt-28 max-w-5xl mx-auto">
        <div className="relative bg-clay rounded-t-[280px] overflow-hidden aspect-[16/9]">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={900}
            decoding="async"
            className="parallax-img w-full h-full object-cover"
          />
          {/* subtle sage frame echoing the brand's cool accent */}
          <div
            className="pointer-events-none absolute inset-0 rounded-t-[280px] ring-1 ring-inset ring-sage/20"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};
