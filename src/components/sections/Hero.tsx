import { useLang } from "@/i18n/useLang";
import heroImg from "@/assets/hero.jpg";

const TG_URL = "https://t.me/your_psychologist";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-40 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.32em] text-ink/50 mb-8">
          {t.hero.eyebrow}
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.05] mb-10 text-balance font-light">
          <span className="italic">{t.hero.titleA}</span>
          <br />
          {t.hero.titleB}
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg text-ink/75 leading-relaxed font-light text-pretty mb-14">
          {t.hero.lead}
        </p>
        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-ink text-paper rounded-full text-sm tracking-[0.15em] uppercase font-medium hover:bg-ink/85 transition-all duration-300 hover:shadow-xl hover:shadow-rose/20"
        >
          {t.hero.cta}
          <span aria-hidden className="text-base">→</span>
        </a>
      </div>

      <div className="mt-20 md:mt-28 max-w-5xl mx-auto">
        <div className="bg-clay rounded-t-[280px] overflow-hidden aspect-[16/9] shadow-sm">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-95 mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
};
