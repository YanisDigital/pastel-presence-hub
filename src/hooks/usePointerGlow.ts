import { useEffect, useRef } from "react";

/**
 * Exposes the pointer position inside the element as --pointer-x / --pointer-y
 * (0–1). Bails out for coarse pointers and reduced-motion users, so touch
 * devices never pay for listeners they cannot trigger.
 */
export function usePointerGlow<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--pointer-x", String((e.clientX - rect.left) / rect.width));
        el.style.setProperty("--pointer-y", String((e.clientY - rect.top) / rect.height));
      });
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
