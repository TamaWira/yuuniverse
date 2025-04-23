"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? (
        <MdOutlineLightMode className="w-7 h-7" />
      ) : (
        <MdOutlineNightlight className="w-7 h-7" />
      )}
    </button>
  );
}
