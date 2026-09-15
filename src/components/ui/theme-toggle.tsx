"use client";

import { Moon, Sun } from "lucide-react";

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const isLight =
    current === "light" ||
    (current !== "dark" &&
      window.matchMedia("(prefers-color-scheme: light)").matches);
  const next = isLight ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // localStorage unavailable (private browsing, etc.) — theme just won't persist
  }
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light / dark theme"
      className={`focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-300 hover:border-accent-2/30 hover:text-text-primary ${className}`}
    >
      <Sun size={16} className="theme-icon-sun" />
      <Moon size={16} className="theme-icon-moon" />
    </button>
  );
}
