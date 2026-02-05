"use client";

import { useTheme } from "next-themes";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip title={isDark ? "Trocar para claro" : "Trocar para escuro"}>
      <IconButton
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Alternar tema"
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
