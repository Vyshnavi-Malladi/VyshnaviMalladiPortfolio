import { useCallback, useEffect, useState } from "react";
function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored) setTheme(stored);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  const toggle = useCallback(() => setTheme((t) => t === "dark" ? "light" : "dark"), []);
  return { theme, toggle };
}
export {
  useTheme
};
