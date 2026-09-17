import { useState } from "react";
import { MapPin } from "lucide-react";
import { useLang } from "@/i18n/useLang";
import { MAP } from "@/config";

export const MapSection = () => {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  const query = encodeURIComponent(MAP.query);

  return (
    <section id="map" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-ink/60 mb-4">
          {t.map.address}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light italic text-ink">
          {t.map.title}
        </h2>
      </div>
      <div className="w-full">
        {show ? (
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
        ) : (
          <button
            type="button"
            onClick={() => setShow(true)}
            className="group w-full h-[450px] bg-clay flex flex-col items-center justify-center gap-4 text-ink/70 hover:text-ink hover:bg-blush/60 transition-colors"
          >
            <span className="size-14 rounded-full bg-paper border border-sage/30 grid place-items-center group-hover:scale-105 transition-transform">
              <MapPin className="size-6 text-sage-deep" aria-hidden />
            </span>
            <span className="text-sm tracking-[0.12em] uppercase font-medium">
              {t.map.cta}
            </span>
            <span className="text-xs text-ink/55">{t.map.hint}</span>
          </button>
        )}
      </div>
    </section>
  );
};
