"use client";

import { useEffect, useState } from "react";
import { useDarkModeContext } from "@/components/darkmodeprovider/darkmodeprovider";

export const useResolvedTheme = () => {
  const { mode } = useDarkModeContext();
  const [systemDark, setSystemDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mq.matches);
    setMounted(true);

    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const isDark = mode === "system" ? systemDark : mode === "dark";

  return { isDark, mounted };
};