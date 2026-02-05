import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
    cssVarPrefix: "zig", // gera vars tipo: --zig-palette-...
  },

  // built-in color schemes (light/dark)
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#d4af37", contrastText: "#0b1220" }, // dourado
        secondary: { main: "#f59e0b" }, // âmbar
        background: { default: "#f5f7fb", paper: "#ffffff" },
        text: { primary: "#0b1220", secondary: "#475569" },
        divider: "#cbd5e1",
      },
    },
    dark: {
      palette: {
        primary: { main: "#d4af37", contrastText: "#0b1220" }, // dourado
        secondary: { main: "#fb923c" }, // laranja
        background: { default: "#071429", paper: "#0f2b55" },
        text: { primary: "#e6edf6", secondary: "#94a3b8" },
        divider: "#1d3557",
      },
    },
  },

  shape: { borderRadius: 16 },

  typography: {
    fontFamily:
      "var(--font-roboto), system-ui, -apple-system, Segoe UI, sans-serif",
  },

  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none", borderRadius: 14 } },
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 24 } } },
  },
});
