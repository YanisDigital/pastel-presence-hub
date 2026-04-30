import { useLang } from "@/i18n/useLang";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const { t } = useLang();
  return (
    <section id="testimonials" className="py-28 md:py-40 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="block text-xs uppercase tracking-[0.32em] text-rose mb-6">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic">
            {t.testimonials.title}
          </h2>
          <div className="w-12 h-px bg-rose mx-auto mt-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.testimonials.items.map((item) => (
            <article
              key={item.name}
              className="bg-background/60 border border-rose/15 rounded-2xl p-8 flex flex-col gap-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-rose/15 flex items-center justify-center font-serif italic text-xl text-rose">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink">{item.name}</h3>
                  <div className="flex gap-0.5 mt-1" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-rose text-rose"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-ink/75 leading-relaxed text-[15px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-ink/50 italic mt-12">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
};
