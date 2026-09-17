import { useLang } from "@/i18n/useLang";
import { useReveal } from "@/hooks/useReveal";

export const Services = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-28 md:py-40 bg-white">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-sage-deep font-medium mb-6">
            <span className="w-5 h-px bg-sage" aria-hidden />
            {t.services.eyebrow}
            <span className="w-5 h-px bg-sage" aria-hidden />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            {t.services.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
          {t.services.items.map((item, idx) => (
            <article
              key={item.t}
              className={`p-10 md:p-12 rounded-3xl border flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 ${
                idx === 1
                  ? "bg-blush/50 border-rose/40"
                  : "bg-paper border-ink/10"
              }`}
            >
              <span className="font-display text-3xl mb-8 text-ink">
                {item.t}
              </span>
              <p className="text-ink/70 mb-10 flex-grow leading-relaxed">
                {item.d}
              </p>
              <div className="pt-6 border-t border-ink/10 text-xs uppercase tracking-[0.18em] text-ink/55">
                {item.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
