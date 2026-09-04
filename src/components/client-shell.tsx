"use client";

import React, { useState, useEffect } from "react";
import LenisProvider from "./lenis-provider";
import CustomCursor from "./ui/CustomCursor";
import CommandPalette from "./ui/CommandPalette";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <LenisProvider>
      <div className="paper-grid min-h-screen relative overflow-hidden transition-colors duration-300">
        {children}
        <CustomCursor />
        <CommandPalette onToggleTheme={toggleTheme} isDarkMode={theme === "dark"} />
      </div>
    </LenisProvider>
  );
}
