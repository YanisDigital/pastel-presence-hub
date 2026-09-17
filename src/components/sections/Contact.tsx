import { useRef, useState } from "react";
import { Instagram, Facebook, Send, Phone, Mail, Check } from "lucide-react";
import { useLang } from "@/i18n/useLang";
import { useReveal } from "@/hooks/useReveal";
import { useDemoLink } from "@/hooks/useDemoLink";
import { CONTACT, IS_DEMO } from "@/config";

const socials = [
  { name: "Instagram", icon: Instagram, href: CONTACT.instagram },
  { name: "Facebook", icon: Facebook, href: CONTACT.facebook },
  { name: "Telegram", icon: Send, href: CONTACT.telegram },
];

type Status = "idle" | "sending" | "sent" | "demo" | "error";

export const Contact = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const link = useDemoLink();
  const [status, setStatus] = useState<Status>("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !contact) {
      setStatus("error");
      (!name ? nameRef : contactRef).current?.focus();
      return;
    }

    if (IS_DEMO) {
      form.reset();
      setStatus("demo");
      return;
    }

    setStatus("sending");
    try {
      if (CONTACT.formEndpoint) {
        const res = await fetch(CONTACT.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, contact, message }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No backend yet: fall back to the user's mail client.
        const body = encodeURIComponent(
          `${name}\n${contact}\n\n${message}`
        );
        window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
          name
        )}&body=${body}`;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink text-[15px] placeholder:text-ink/40 focus:border-sage-deep focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-28 md:py-40 bg-ink text-paper">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start"
      >
        {/* Invitation + direct channels */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
            <span className="italic">{t.contact.title}</span>
          </h2>
          <p className="text-base md:text-lg font-light text-paper/75 mb-10 leading-relaxed max-w-md">
            {t.contact.lead}
          </p>

          <a
            {...link({ href: CONTACT.telegram, target: "_blank", rel: "noopener noreferrer" })}
            className="inline-flex items-center gap-3 px-9 py-4 bg-rose text-ink rounded-full text-sm tracking-[0.12em] uppercase font-semibold hover:bg-rose/90 transition-all duration-300 hover:scale-[1.02]"
          >
            <Send className="size-4" aria-hidden />
            {t.contact.tg}
          </a>

          <div className="mt-12 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-paper/55">
              {t.contact.direct}
            </p>
            <a
              {...link({ href: CONTACT.phoneHref })}
              className="flex items-center gap-3 text-paper/85 hover:text-paper transition-colors"
            >
              <Phone className="size-4 text-rose" aria-hidden />
              <span>{CONTACT.phone}</span>
            </a>
            <a
              {...link({ href: CONTACT.emailHref })}
              className="flex items-center gap-3 text-paper/85 hover:text-paper transition-colors"
            >
              <Mail className="size-4 text-rose" aria-hidden />
              <span>{CONTACT.email}</span>
            </a>
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-paper/55 mb-4">
              {t.contact.socials}
            </p>
            <div className="flex gap-4">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  {...link({ href, target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={name}
                  className="size-12 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-300"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-paper text-ink rounded-3xl p-8 md:p-10 shadow-xl shadow-black/20">
          <p className="font-display text-2xl text-ink mb-6">
            {t.contact.or}
          </p>

          {status === "sent" || status === "demo" ? (
            <div
              className="flex items-start gap-3 rounded-xl bg-sage/15 border border-sage/30 p-5 text-ink"
              role="status"
              aria-live="polite"
            >
              <Check className="size-5 text-sage-deep shrink-0 mt-0.5" aria-hidden />
              <p className="text-[15px] leading-relaxed">
                {status === "demo" ? t.demo.form : t.contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="cf-name"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.form.name}{" "}
                  <span className="text-rose-deep" aria-hidden>*</span>
                </label>
                <input
                  ref={nameRef}
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={t.contact.form.namePh}
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="cf-contact"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.form.contact}{" "}
                  <span className="text-rose-deep" aria-hidden>*</span>
                </label>
                <input
                  ref={contactRef}
                  id="cf-contact"
                  name="contact"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder={t.contact.form.contactPh}
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="cf-message"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.form.message}{" "}
                  <span className="text-ink/45 font-normal">
                    · {t.contact.form.optional}
                  </span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  placeholder={t.contact.form.messagePh}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {t.contact.form.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-[0.12em] uppercase font-medium hover:bg-ink/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? t.contact.form.sending
                  : t.contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
