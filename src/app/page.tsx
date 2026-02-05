"use client"; 
import dynamic from "next/dynamic";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ThemeToggle = dynamic(() => import("@/theme/ThemeToggle"), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen px-6 py-10">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zig-text">
            CONDOMINIOS ZIGURATS
          </h1>
          <p className="mt-1 text-sm text-zig-muted">
            Starter cru: Next + TS + Tailwind v4 + MUI + styled-components* (*caso seja necessário criar um componente com estilização diferente).
          </p>
        </div>

        <ThemeToggle />
      </header>

      <main className="mx-auto mt-10 max-w-5xl">
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-zig border border-zig-border bg-zig-card p-6 shadow-zig-card">
            <h2 className="text-lg font-semibold text-zig-text">Tailwind tokens</h2>
            <p className="mt-2 text-sm text-zig-muted">
              Layout e consistência visual com bg/text/border do tema Zigurats.
            </p>

            <div className="mt-4 flex gap-3">
              <button className="rounded-xl bg-zig-gold px-4 py-2 text-sm font-medium text-black hover:opacity-90">
                CTA dourado
              </button>
              <button className="rounded-xl border border-zig-border px-4 py-2 text-sm text-zig-text hover:bg-zig-surface">
                Secundário
              </button>
            </div>
          </div>

          <Card variant="outlined" sx={{ borderRadius: 4, borderColor: "divider" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                MUI components
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use MUI para inputs complexos, tabelas, dialogs, etc — padrão Material.
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained">
                Botão MUI
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
