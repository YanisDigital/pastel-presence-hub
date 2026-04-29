import { useLang } from "@/i18n/LanguageContext";
import portrait from "@/assets/portrait.png";

export const About = () => {
  const { t } = useLang();
  return (
    <section id="about" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[3/4] bg-blush overflow-hidden rounded-3xl">
            <img
              src={portrait}
              alt={t.footer.name}
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-10 -right-10 size-60 bg-paper p-8 rounded-full border border-rose/20 items-center justify-center text-center italic font-serif text-lg leading-snug text-ink/80">
            {t.about.badge}
          </div>
        </div>
        <div className="space-y-8">
          <span className="block text-xs uppercase tracking-[0.32em] text-rose">
            {t.about.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
            {t.about.title}
            <br />
            <span className="italic">{t.about.titleAccent}</span>
          </h2>
          <div className="space-y-5 text-ink/75 text-base md:text-lg leading-relaxed max-w-[55ch]">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="md:hidden pt-4 italic font-serif text-lg text-ink/70">
            — {t.about.badge}
          </div>
        </div>
      </div>
    </section>
  );
};
