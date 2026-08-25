# Manish — Backend Developer Portfolio

A single-page personal portfolio built with React 19, Vite 8 and Tailwind CSS v4, with
GSAP-driven scroll animations and Lenis smooth scrolling.

**Stack:** React 19 · Vite 8 · Tailwind CSS v4 · GSAP (ScrollTrigger) · Lenis · Framer Motion

---

## Highlights

- **Content lives in one file.** Every section reads from [`src/data.js`](src/data.js) — update your
  details there and the whole page follows. No JSX edits needed for a content change.
- **Scroll-driven animation.** GSAP ScrollTrigger powers the parallax hero, count-up stats,
  reveal-on-scroll sections, and the horizontally pinned projects rail.
- **Smooth scrolling.** Lenis is wired into the GSAP ticker (`src/lib/lenis.js`) so smooth scroll
  and ScrollTrigger stay in sync, with anchor links routed through `lenis.scrollTo`.
- **Pointer-aware effects.** The dot cursor and the hero's mouse-tracked glow are gated behind
  `(pointer: fine)` so they never run on touch. Magnetic buttons and 3D card tilt are driven by
  mouse events, so they stay inert on touch devices without extra checks.
- **Responsive and accessible-by-default.** Mobile nav drawer, snap-scroll project cards on small
  screens, semantic sections, and a scroll-spy nav that tracks the active section.

## Sections

Hero → Stats → About → Skills → Experience → Projects → Education → Contact

---

## Getting started

**Prerequisites:** Node.js `^20.19.0 || >=22.12.0` (required by Vite 8) and npm.

Install dependencies:

```bash
npm install
```

Start the dev server at `http://localhost:5173`:

```bash
npm run dev
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with [Oxlint](https://oxc.rs) |

---

## Project structure

```
portfolio/
├── index.html              # HTML shell, meta + Open Graph tags
├── vite.config.js          # Vite + React + Tailwind plugins
├── .oxlintrc.json          # Lint rules (react hooks, oxc)
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Layout, Lenis init, anchor-link handling
    ├── data.js             # ← ALL CONTENT LIVES HERE
    ├── index.css           # Tailwind import, CSS variables, custom classes
    ├── lib/
    │   ├── gsap.js         # GSAP + ScrollTrigger registration
    │   └── lenis.js        # Lenis lifecycle, synced to the GSAP ticker
    └── components/
        ├── Navbar.jsx      # Fixed nav with scroll-spy + mobile drawer
        ├── Hero.jsx        # Parallax hero with mouse-tracked glow
        ├── Stats.jsx       # Count-up metrics
        ├── About.jsx       # Summary cards
        ├── Skills.jsx      # Skill groups
        ├── Experience.jsx  # Work history
        ├── Projects.jsx    # Horizontally pinned project rail
        ├── Education.jsx   # Education
        ├── Contact.jsx     # Email, phone, LinkedIn, GitHub
        ├── Footer.jsx
        └── ...             # Reveal, Section, Tilt, Magnetic, Marquee,
                            # SplitHeading, CustomCursor (shared primitives)
```

---

## Customizing

### Content

Edit [`src/data.js`](src/data.js). It exports:

| Export | Drives |
| --- | --- |
| `profile` | Name, role, tagline, location, phone, email, LinkedIn, GitHub |
| `tickerItems` | The scrolling marquee under the hero |
| `stats` | The four count-up metric tiles |
| `summary` | About-section cards |
| `skills` | Skill groups (`{ category, items[] }`) |
| `experience` | Work history (`{ company, role, period, location, link?, points[] }`) |
| `projects` | Project cards (`{ name, year, link, linkLabel, live, points[], tags[] }`) |
| `education` | Education entries (`{ school, degree, period, points[] }`) |

Set `live: true` on a project to show the pulsing **Live** badge. Add a `link` to an experience
entry to turn the company name into an external link.

### Theme

The accent color is defined in two places in [`src/index.css`](src/index.css) — the Tailwind
`@theme` block (for `text-accent`, `bg-accent`, etc.) and the `:root` block (for plain CSS):

```css
@theme {
  --color-accent: #cbfe4b;
}

:root {
  --bg: #0b0b0c;
  --accent: #cbfe4b;
}
```

Change both to re-skin the site.

### Profile photo

The About section is text-only by design. To add a photo, drop an image in `public/` and render
it from `About.jsx`.

---

## Deployment

The build output is a fully static `dist/` folder — deployable to any static host.

```bash
npm run build
```

**Vercel / Netlify:** connect the repo, set build command `npm run build` and output directory
`dist`. Both auto-detect Vite.

**GitHub Pages:** add a `base` to `vite.config.js` matching your repo name:

```js
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
```

Then publish the contents of `dist/`.

---

## Contact

- **LinkedIn:** [linkedin.com/in/manishverma2003](https://linkedin.com/in/manishverma2003)
- **GitHub:** [github.com/Manish9350](https://github.com/Manish9350)
