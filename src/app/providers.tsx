"use client";

import type { PropsWithChildren } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "@/theme/appTheme";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      theme={appTheme}
      defaultMode="system"
      disableTransitionOnChange
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
