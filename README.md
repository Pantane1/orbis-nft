# Orbis.Nft

Dark space-themed NFT landing page. React + TypeScript + Vite + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Notes

- All background media are looping videos served from CloudFront, referenced directly by URL — no local video assets needed.
- `public/texture.png` is a placeholder grain texture for the full-screen overlay effect (`mix-blend-mode: lighten`, `opacity: 0.6`). Swap it for your own texture image if you have one.
- Fonts (Anton, Condiment) are loaded from Google Fonts in `index.html`.
- The `.liquid-glass` utility class (glassmorphism effect with a soft gradient border) lives in `src/index.css` and is used on the navbar, social icon buttons, NFT cards, and card overlays.
