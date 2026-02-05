import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import Providers from './providers';

import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'CONDOMÍNIOS ZIGURATS',
  description: 'Frontend base do CONDOMÍNIOS ZIGURATS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
