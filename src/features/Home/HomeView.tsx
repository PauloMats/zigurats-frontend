'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@/components/Links';

export default function HomeView() {
  return (
    <main className="min-h-dvh py-10">
      <Container maxWidth="lg" className="space-y-6">
        <div className="rounded-2xl border p-6 shadow-sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            CONDOMÍNIOS ZIGURATS
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Boilerplate cru: Next + TS + Tailwind + styled-components + MUI.
          </Typography>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="contained" component={Link} href="/dashboard">
              Ir para Dashboard
            </Button>

            <Button variant="outlined" component={Link} href="/docs">
              Ver Docs
            </Button>
          </div>
        </div>

        <div className="text-sm text-zinc-500">
          Estrutura pronta pra componentização, features e expansão.
        </div>
      </Container>
    </main>
  );
}
