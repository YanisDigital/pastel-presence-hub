import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the middle of the viewport,
 * or null when none does (e.g. in the hero). Pass a stable array — a
 * module-level constant, not an inline literal.
 *
 * Measured on scroll rather than with IntersectionObserver: a zero-height
 * observer band misses transitions during fast or programmatic jumps and
 * leaves the previous section stuck as active.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= middle && bottom > middle) {
          current = id;
          break;
        }
      }
      // React bails out when the value is unchanged, so this stays cheap.
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
