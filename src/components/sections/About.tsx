import { useLang } from "@/i18n/useLang";
import { useReveal } from "@/hooks/useReveal";
import portrait from "@/assets/doctor1.webp";

export const About = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-28 md:py-40 bg-white">
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center"
      >
        <div className="relative">
          <div className="aspect-[3/4] bg-blush overflow-hidden rounded-3xl">
            <img
              src={portrait}
              alt={t.footer.name}
              loading="lazy"
              decoding="async"
              width={800}
              height={1024}
              className="parallax-img w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-10 -right-10 size-60 bg-paper p-8 rounded-full border border-sage/30 items-center justify-center text-center italic font-display text-lg leading-snug text-ink/80 shadow-sm">
            {t.about.badge}
          </div>
        </div>
        <div className="space-y-8 reveal-stagger">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-sage-deep font-medium">
            <span className="w-5 h-px bg-sage" aria-hidden />
            {t.about.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            {t.about.title}
            <br />
            <span className="italic">{t.about.titleAccent}</span>
          </h2>
          <div className="space-y-5 text-ink/75 text-base md:text-lg leading-relaxed max-w-[55ch]">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="md:hidden pt-4 italic font-display text-lg text-ink/70">
            — {t.about.badge}
          </div>
        </div>
      </div>
    </section>
  );
};
