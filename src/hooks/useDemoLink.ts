import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { toast } from "sonner";
import { IS_DEMO } from "@/config";
import { useLang } from "@/i18n/useLang";

type LinkProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

/** Returns real link props, or inert ones that only show a demo toast. */
export function useDemoLink() {
  const { t } = useLang();

  return (real: LinkProps): AnchorHTMLAttributes<HTMLAnchorElement> => {
    if (!IS_DEMO) return real;
    return {
      href: "#",
      role: "button",
      onClick: (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        toast(t.demo.toast);
      },
    };
  };
}
