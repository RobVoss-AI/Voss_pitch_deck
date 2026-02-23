# Voss AI Consulting — Pitch Deck

A full-screen, cinematic presentation built with React and Vite featuring HLS video backgrounds, liquid glass UI, and keyboard-driven navigation.

**Live Demo:** _[Add your Vercel URL here after deploy]_

---

## Features

- **5 slides** — Cover, Market Overview, Service Cards, Quote, Contact
- **HLS video backgrounds** on every slide via Mux streaming (Safari native fallback included)
- **Liquid glass aesthetic** — backdrop-filter blur, translucent gradients, radial highlights
- **Keyboard navigation** — Arrow keys, Space (next), F (fullscreen), Escape (exit)
- **Auto-hiding controls** — bottom nav bar fades after 3 seconds of inactivity
- **Responsive typography** — all sizing uses `clamp()` for seamless scaling across devices
- **Smooth transitions** — 500ms slide transitions with directional scale effects

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to Vercel

```bash
git init
git add .
git commit -m "initial commit"
gh repo create RobVoss-AI/voss-pitch-deck --public --push
```

Then import the repo at [vercel.com/new](https://vercel.com/new). Vite is auto-detected — no configuration needed.

## Project Structure

```
voss-pitch-deck/
├── index.html          # Entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # React mount
    └── App.jsx         # All slides + presentation engine
```

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18 |
| Build | Vite 5 |
| Video | hls.js 1.5 |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (Google Fonts) |
| Hosting | Vercel |

## Controls

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `F` | Toggle fullscreen |
| `Escape` | Exit fullscreen |

Mouse movement reveals the bottom navigation bar. Click dots to jump to any slide.

## Customization

All content lives in `src/App.jsx` as individual slide components (`CoverSlide`, `IntroSlide`, `AnalyticsSlide`, `QuoteSlide`, `OutroSlide`). Edit text, swap video URLs, or add new slides by creating a component and adding it to the `slides` array in the `App` export.

## License

© 2026 Voss AI Consulting. All rights reserved.
