"use client";

import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createAppTheme } from "@/theme/createAppTheme";

function MuiThemeBridge({ children }: PropsWithChildren) {
  const { resolvedTheme } = useNextTheme();
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
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MuiThemeBridge>{children}</MuiThemeBridge>
    </NextThemesProvider>
  );
}
