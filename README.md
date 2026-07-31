# Orbis.Nft

Dark space-themed NFT landing page. React + TypeScript + Vite + Tailwind CSS.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- [lucide-react](https://lucide.dev/) for icons (Mail, Twitter, Github, ChevronRight)

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (default `http://localhost:5173`) with hot reload.

To type-check and build a production bundle:

```bash
npm run build
```

Output goes to `dist/`. You can sanity-check it locally with:

```bash
npm run preview
```

## Project structure

```
orbis-nft/
├── index.html              Entry HTML, loads Google Fonts (Anton, Condiment)
├── public/
│   └── texture.png          Placeholder grain texture for the overlay effect
├── src/
│   ├── main.tsx              React root
│   ├── App.tsx                Assembles the 4 sections + texture overlay
│   ├── index.css               Tailwind directives, .liquid-glass, .texture-overlay
│   └── components/
│       ├── Hero.tsx             Section 1 — hero, nav, headline, social icons
│       ├── About.tsx            Section 2 — "Hello! I'm orbis" intro
│       ├── Collection.tsx       Section 3 — NFT grid + "See all creators"
│       ├── NFTCard.tsx           Single NFT card used inside Collection
│       ├── CTA.tsx              Section 4 — closing CTA + social icon panel
│       └── SocialIcons.tsx       Shared icon button variants (stack/row/panel)
├── tailwind.config.js        Color system (background, cream, neon) + font aliases
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Notes

- All background media are looping videos served from CloudFront, referenced directly by URL — no local video assets needed.
- `public/texture.png` is a placeholder grain texture for the full-screen overlay effect (`mix-blend-mode: lighten`, `opacity: 0.6`). Swap it for your own texture image if you have one.
- Fonts (Anton, Condiment) are loaded from Google Fonts in `index.html`.
- The `.liquid-glass` utility class (glassmorphism effect with a soft gradient border) lives in `src/index.css` and is used on the navbar, social icon buttons, NFT cards, and card overlays.

## Deploying

This is a static Vite build (`dist/`), so any static host works. A few good options:

**Vercel** (recommended, least config)
1. Push this repo to GitHub.
2. Import it at vercel.com — it auto-detects Vite (`npm run build`, output `dist`).
3. Deploy. You get a live URL plus a preview URL on every push.

**Netlify**
- Connect the repo, or drag-and-drop the `dist/` folder after running `npm run build` for a one-off deploy.
- Build command: `npm run build` · Publish directory: `dist`

**Cloudflare Pages**
- Same flow as Vercel/Netlify. Good choice if you also want to move the videos onto Cloudflare Stream/R2 instead of CloudFront later.

Before deploying, run `npm run build && npm run preview` locally and check on a real mobile device — some mobile browsers are stricter about autoplaying `<video>` than desktop dev mode.