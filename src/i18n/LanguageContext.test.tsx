import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider } from "./LanguageContext";
import { useLang } from "./useLang";
import { LangSwitcher } from "@/components/LangSwitcher";

const Probe = () => {
  const { t } = useLang();
  return <p>{t.nav.about}</p>;
};

function renderApp() {
  return render(
    <LanguageProvider>
      <LangSwitcher />
      <Probe />
    </LanguageProvider>
  );
}

describe("language switching", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("defaults to Russian copy and <html lang>", () => {
    renderApp();
    expect(screen.getByText("Обо мне")).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("ru");
  });

  it("switches copy, <html lang> and persists the choice on click", () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: "UA" }));

    expect(screen.getByText("Про мене")).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("uk");
    expect(window.localStorage.getItem("site-lang")).toBe("uk");

    fireEvent.click(screen.getByRole("button", { name: "RU" }));

    expect(screen.getByText("Обо мне")).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("ru");
    expect(window.localStorage.getItem("site-lang")).toBe("ru");
  });

  it("restores a previously chosen language from localStorage", () => {
    window.localStorage.setItem("site-lang", "uk");
    renderApp();
    expect(screen.getByText("Про мене")).toBeInTheDocument();
  });
});
