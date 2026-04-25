import { useLang } from "@/i18n/LanguageContext";
import { Instagram, Facebook, Send } from "lucide-react";

const TG_URL = "https://t.me/your_psychologist";

const socials = [
  { name: "Instagram", icon: Instagram },
  { name: "Facebook", icon: Facebook },
  { name: "Telegram", icon: Send },
];

export const Contact = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="py-28 md:py-40 bg-ink text-paper">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-10">
          {t.contact.title}
        </h2>
        <p className="text-base md:text-lg font-light text-paper/70 mb-14 leading-relaxed">
          {t.contact.lead}
        </p>

        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-12 py-5 bg-rose text-ink rounded-full text-sm tracking-[0.15em] uppercase font-semibold hover:bg-rose/90 transition-all duration-300 hover:scale-[1.02]"
        >
          <Send className="size-4" aria-hidden />
          {t.contact.tg}
        </a>

        <div className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-paper/40 mb-6">
            {t.contact.socials}
          </p>
          <div className="flex justify-center gap-5">
            {socials.map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                aria-label={name}
                className="size-12 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-300"
              >
                <Icon className="size-4" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
