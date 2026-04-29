import { useLang } from "@/i18n/useLang";

export const Approach = () => {
  const { t } = useLang();
  return (
    <section id="approach" className="py-28 md:py-40 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="block text-xs uppercase tracking-[0.32em] text-rose mb-6">
            {t.approach.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic">
            {t.approach.title}
          </h2>
          <div className="w-12 h-px bg-rose mx-auto mt-10" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {t.approach.items.map((item) => (
            <article key={item.n} className="text-center md:text-left space-y-5">
              <span className="font-serif italic text-4xl text-rose">
                {item.n}.
              </span>
              <h3 className="font-serif text-2xl text-ink">{item.t}</h3>
              <p className="text-ink/70 leading-relaxed">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
