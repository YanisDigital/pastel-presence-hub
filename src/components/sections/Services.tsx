import { useLang } from "@/i18n/useLang";

export const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <span className="block text-xs uppercase tracking-[0.32em] text-rose mb-6">
            {t.services.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            {t.services.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((item, idx) => (
            <article
              key={item.t}
              className={`p-10 md:p-12 rounded-3xl border flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/10 ${
                idx === 1
                  ? "bg-blush/40 border-rose/25"
                  : "bg-paper border-rose/10"
              }`}
            >
              <span className="font-serif italic text-3xl mb-8 text-ink">
                {item.t}
              </span>
              <p className="text-ink/70 mb-10 flex-grow leading-relaxed">
                {item.d}
              </p>
              <div className="pt-6 border-t border-rose/15 text-xs uppercase tracking-[0.2em] text-ink/50 italic">
                {item.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
