// src/theme/index.ts
'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#5f6368',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
