"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const storageKey = "daily-grace-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={() => {
        const currentTheme =
          document.documentElement.dataset.theme === "dark" ? "dark" : "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(nextTheme);
      }}
      className="flex flex-col items-center gap-1 transition hover:text-[var(--nav-active)]"
    >
      <Moon className="theme-toggle-moon h-5 w-5" />
      <Sun className="theme-toggle-sun h-5 w-5" />
      <span className="text-[11px]">Theme</span>
    </button>
  );
}
