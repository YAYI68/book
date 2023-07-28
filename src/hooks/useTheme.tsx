"use client";

import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>("system");

  useEffect(() => {
    const theme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "system";
    setActiveTheme(theme);
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [activeTheme]);

  return { activeTheme, setActiveTheme };
};

export default useTheme;
