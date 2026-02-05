# CONDOMÍNIOS ZIGURATS — Frontend

Interface frontend para o **Dourado**, uma aplicação digital voltada para soluções financeiras descentralizadas e marketplace digital.


## 🚀 Tecnologias Utilizadas

- **React** — Biblioteca para criação de interfaces.
- **TypeScript** — Tipagem estática para JavaScript.
- **SCSS** — Estilização com suporte a variáveis e mixins.
- **Next** — Ferramenta de build e servidor de desenvolvimento rápido.
- **Tailwind CSS** - Framework CSS utilitário.
- **styled-components** - Biblioteca para estilização via CSS-in-JS.
- **MUI (Material UI)** - Biblioteca de componentes React com design Material.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- styled-components
- MUI (Material UI)

## Requisitos
- Node.js **LTS (v22.x ou diante)**
- npm

## Rodando local

- Clone o repositório com o `git clone`
após:
```bash
npm install
npm run dev
```

## Scripts

`npm run dev` — ambiente local 
`npm run build` — build de produção 
`npm run start` — roda build de produção localmente
`npm run lint` — ESLint 

## Estruturação de pastas (sugestão)

```bash
zigurats-frontend/
├─ src/
│  ├─ app/
│  │  ├─ lib/
│  │  │  └─ registry.tsx              # styled-components registry (SSR/streaming)
│  │  ├─ layout.tsx                   # root layout
│  │  ├─ page.tsx                     # route "/"
│  │  └─ globals.css
│  ├─ components/
│  │  ├─ ui/                          # wrappers do “design system” (MUI + Tailwind)
│  │  └─ Link.tsx                     # wrapper p/ Next Link (MUI + Next 16)
│  ├─ features/
│  │  └─ home/
│  │     └─ HomeView.tsx              # tela inicial (client component)
│  ├─ theme/
│  │  └─ index.ts                     # tema MUI (Material-like / Google UI)
│  ├─ lib/
│  │  ├─ utils/
│  │  │  └─ cn.ts                     # helper p/ className
│  │  └─ env.ts                       # validação/centralização de envs (futuro)
│  ├─ hooks/                          # hooks compartilhados (futuro)
│  └─ types/                          # tipos globais (futuro)
├─ next.config.mjs
├─ package.json
└─ README.md
```

## 📄 Licença

Este projeto é de propriedade da **Dourado Cash** para uso interno e não deve ser utilizado ou distribuído sem autorização.
