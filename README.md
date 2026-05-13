# Ajay Puttam — Portfolio

Personal portfolio website for **Ajay Puttam**, Creative AI Technologist and final-year CSE student at Matrusri Engineering College, Hyderabad. Built with a cinematic dark editorial aesthetic — amber accents, Cabinet Grotesk typography, and Framer Motion animations throughout.

---

## Live Preview

Hosted on Replit — available via the project's `.replit.app` domain after deployment.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 7 |
| Styling | Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`) |
| Animations | Framer Motion |
| Language | TypeScript 5 |
| Package manager | pnpm (monorepo workspace) |
| Fonts | Cabinet Grotesk (Fontshare), Satoshi (Fontshare), JetBrains Mono (Google Fonts) |

---

## Design System

| Token | Value |
|---|---|
| Background | `#0A0A0F` (near-black) |
| Brand / Amber | `#F5A623` |
| Brand Light | `#F7BC58` |
| Brand Dim | `#C47D0E` |
| Display font | Cabinet Grotesk (`--app-font-display`) |
| Body font | Satoshi (`--app-font-body`) |
| Mono font | JetBrains Mono (`--app-font-mono`) |

All design tokens live in `artifacts/portfolio/src/index.css` under `@theme inline` and `:root`.

---

## Project Structure

```
artifacts/portfolio/
├── public/
│   └── ajay-portrait.png       # Cinematic editorial portrait
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed top nav — brand, links, CTA pill, scroll blur
│   │   ├── Loader.tsx           # Full-screen intro loader ("A.")
│   │   ├── Hero.tsx             # Split-column hero — left content + right editorial composition
│   │   ├── SkillsStrip.tsx      # Horizontal scrolling skills ticker
│   │   ├── About.tsx            # Bio, portrait, role tags, grouped tools, stats
│   │   ├── CreativeWork.tsx     # Creative / content work section
│   │   ├── Projects.tsx         # AI/NLP project cards
│   │   ├── Leadership.tsx       # DevCatalyst leadership section
│   │   ├── Contact.tsx          # Contact form / links
│   │   ├── Footer.tsx           # Footer with socials
│   │   ├── SectionDivider.tsx   # Reusable section separator
│   │   └── CustomCursor.tsx     # Ambient cursor glow effect
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                # All Tailwind v4 tokens + global styles
├── index.html                   # Font imports, meta tags
└── vite.config.ts
```

---

## Sections

1. **Hero** — Left-aligned cinematic headline ("I build at the intersection of AI, design + culture."), CREATIVE TECHNOLOGIST label, CTAs, social proof line, and a right-side editorial composition with stat cards (40K+, 5M+, AI), skill pills, and a faint "SYSTEMS" background typography fragment.

2. **About** — Two-column layout: left has bio paragraphs with amber highlights, community/content stats; right has the editorial portrait with gradient fades, role tags (AI Visual Design, Video Creation, AI Systems, Creative Technology), and grouped tools (Visual / AI / Technical).

3. **Creative Work** — Content creation and visual design work.

4. **Projects** — AI/NLP projects built with Hugging Face and Streamlit.

5. **Leadership** — DevCatalyst design & video team lead role.

6. **Contact** — Reach out section with email and social links.

---

## Running Locally

This project lives inside a pnpm monorepo. To run only the portfolio:

```bash
pnpm --filter @workspace/portfolio run dev
```

The dev server starts on the port configured in the workflow (default `21113` in the Replit environment). In a standard local setup, Vite will pick an available port automatically.

---

## Social & Contact

| Platform | Handle |
|---|---|
| Email | ajay.puttam3@gmail.com |
| LinkedIn | [ajay-puttam](https://linkedin.com/in/ajay-puttam) |
| GitHub | [Ajay-puttam](https://github.com/Ajay-puttam) |
| Instagram | [oye__ajayyyy._](https://instagram.com/oye__ajayyyy._) |

---

## License

Personal portfolio — all rights reserved. Not licensed for reuse or redistribution.
