import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Contact } from "./Contact";

function renderContact() {
  return render(
    <LanguageProvider>
      <Contact />
    </LanguageProvider>
  );
}

describe("Contact form (demo mode, the shipped config)", () => {
  let fetchSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("blocks submission and focuses the name field when required fields are empty", () => {
    renderContact();

    fireEvent.click(screen.getByRole("button", { name: /Отправить заявку/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Заполните имя и контакт, пожалуйста."
    );
    expect(screen.getByLabelText(/Как вас зовут/i)).toHaveFocus();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("never calls fetch or navigates away, and shows the demo notice instead of sending", async () => {
    renderContact();
    const originalHref = window.location.href;

    fireEvent.change(screen.getByLabelText(/Как вас зовут/i), {
      target: { value: "Тест" },
    });
    fireEvent.change(screen.getByLabelText(/Телефон или e-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Отправить заявку/i }));

    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        /демонстрационный сайт/i
      )
    );

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(window.location.href).toBe(originalHref);
  });
});
