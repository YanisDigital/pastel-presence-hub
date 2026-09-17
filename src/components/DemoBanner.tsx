import { IS_DEMO } from "@/config";
import { useLang } from "@/i18n/useLang";

export const DemoBanner = () => {
  const { t } = useLang();
  if (!IS_DEMO) return null;
  return (
    <div
      role="note"
      className="fixed bottom-0 inset-x-0 z-40 bg-sage-deep text-paper text-[11px] md:text-xs tracking-wide text-center px-4 py-2 border-t border-paper/15"
    >
      {t.demo.banner}
    </div>
  );
};
