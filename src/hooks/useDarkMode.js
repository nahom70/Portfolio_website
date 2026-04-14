import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.setProperty("--bg", "#080808");
      root.style.setProperty("--fg", "#e8e8e8");
      document.body.style.background = "#080808";
      document.body.style.color = "#e8e8e8";
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--bg", "#f9f9f9");
      root.style.setProperty("--fg", "#0a0a0a");
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#0a0a0a";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
}
