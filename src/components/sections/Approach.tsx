import { useLang } from "@/i18n/useLang";
import { useReveal } from "@/hooks/useReveal";

export const Approach = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="approach" className="py-28 md:py-40 bg-paper">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-10">
        {/* Asymmetric header — breaks the centered rhythm of other sections */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-rose-deep font-medium mb-6">
            <span className="w-5 h-px bg-rose" aria-hidden />
            {t.approach.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.08]">
            {t.approach.title}
          </h2>
        </div>

        {/* Numbered editorial list */}
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {t.approach.items.map((item) => (
            <article
              key={item.n}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-16 py-10 md:py-14 group"
            >
              <span className="font-display text-5xl md:text-7xl text-sage leading-none tabular-nums transition-colors group-hover:text-sage-deep">
                {item.n}
              </span>
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {item.t}
                </h3>
                <p className="text-ink/70 text-base md:text-lg leading-relaxed">
                  {item.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
