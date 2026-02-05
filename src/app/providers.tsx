"use client";

import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "@/theme/createAppTheme";

function MuiThemeBridge({ children }: PropsWithChildren) {
  const { resolvedTheme } = useTheme();
  const mode = resolvedTheme === "dark" ? "dark" : "light";

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MuiThemeBridge>{children}</MuiThemeBridge>
    </NextThemesProvider>
  );
}
