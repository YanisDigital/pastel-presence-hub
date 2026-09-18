import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { useDemoLink } from "./useDemoLink";

const { toast } = vi.hoisted(() => ({ toast: vi.fn() }));
vi.mock("sonner", () => ({ toast }));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("useDemoLink (demo mode, the shipped config)", () => {
  it("strips the real destination and marks the link inert", () => {
    const { result } = renderHook(() => useDemoLink(), { wrapper });
    const props = result.current({
      href: "https://t.me/your_psychologist",
      target: "_blank",
      rel: "noopener noreferrer",
    });

    expect(props.href).toBe("#");
    expect(props.target).toBeUndefined();
    expect(props.rel).toBeUndefined();
    expect(props.role).toBe("button");
  });

  it("shows a toast and prevents navigation on click instead of opening the real link", () => {
    const { result } = renderHook(() => useDemoLink(), { wrapper });
    const props = result.current({ href: "tel:+380000000000" });

    const preventDefault = vi.fn();
    props.onClick?.({ preventDefault } as never);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(toast).toHaveBeenCalledOnce();
  });
});

describe("useDemoLink (IS_DEMO = false)", () => {
  it("passes real link props through unchanged when demo mode is off", async () => {
    // Reset the module graph so both the hook and the context it reads
    // from are re-resolved together — otherwise the freshly re-imported
    // hook would see a different LanguageContext instance than the
    // provider below and throw "used outside provider".
    vi.resetModules();
    vi.doMock("@/config", () => ({ IS_DEMO: false }));
    const { LanguageProvider: FreshProvider } = await import("@/i18n/LanguageContext");
    const { useDemoLink: useLiveLink } = await import("./useDemoLink");

    const freshWrapper = ({ children }: { children: ReactNode }) => (
      <FreshProvider>{children}</FreshProvider>
    );

    const { result } = renderHook(() => useLiveLink(), { wrapper: freshWrapper });
    const real = {
      href: "https://t.me/your_psychologist",
      target: "_blank" as const,
      rel: "noopener noreferrer",
    };

    expect(result.current(real)).toEqual(real);
    vi.doUnmock("@/config");
  });
});
