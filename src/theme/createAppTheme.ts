"use client";

import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

const palette = (mode: PaletteMode) => {
  const isDark = mode === "dark";

  return {
    mode,
    primary: {
      main: isDark ? "#D4AF37" : "#B8860B",
    },
    secondary: {
      main: isDark ? "#FB923C" : "#F97316",
    },
    background: {
      default: isDark ? "#071429" : "#F5F7FB",
      paper: isDark ? "#0F2B55" : "#FFFFFF",
    },
    text: {
      primary: isDark ? "#E6EDF6" : "#0B1220",
      secondary: isDark ? "#94A3B8" : "#475569",
    },
    divider: isDark ? "#1D3557" : "#CBD5E1",
  };
};

export function createAppTheme(mode: PaletteMode) {
  return createTheme({
    palette: palette(mode),
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    shape: {
      borderRadius: 12,
    },

    // Importante quando usar CSS layers com Tailwind/Styled Components:
    // MUI recomenda enableCssLayer no AppRouterCacheProvider e um tema coerente com isso.
    modularCssLayers: true as any,

    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  });
}
