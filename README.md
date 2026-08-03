# Orbis.Nft

Dark space-themed NFT landing page. React + TypeScript + Vite + Tailwind CSS.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- [lucide-react](https://lucide.dev/) for icons (Mail, Twitter, Github, ChevronRight)


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


## 👤 Author

**Wamuhu Martin** (Pantane1)

- Support: [pay-me](https://pantane.is-a.dev/support)

<p align="center">
  <a href="#"><img src="https://github.com/Pantane1/nf/blob/main/public/ph.png" alt="ph-logo">
</p>

<p align="center">
  <a href="#"><img src="http://readme-typing-svg.herokuapp.com?color=ACAF50&center=true&vCenter=true&multiline=false&lines=Built+Different" alt="pantane">
</p>
