import { useLang } from "@/i18n/useLang";

export const MapSection = () => {
  const { t } = useLang();
  const query = encodeURIComponent("Odesa, Deribasivska 10");

  return (
    <section id="map" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50 mb-4">
          {t.map.address}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light italic text-ink">
          {t.map.title}
        </h2>
      </div>
      <div className="w-full">
        <iframe
          title={t.map.title}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="w-full h-[450px]"
        />
      </div>
    </section>
  );
};
