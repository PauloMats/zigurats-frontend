"use client";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null; // :contentReference[oaicite:4]{index=4}

  const next = mode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Trocar para ${next}`}>
      <IconButton aria-label="Alternar tema" onClick={() => setMode(next)}>
        {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}
