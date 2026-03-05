# Seyona Marketing Site

> **See root `CLAUDE.md` for brand, design system, color tokens, typography, tone, and shared conventions.**

This is the public marketing site at `seyona.ai`. It is a separate Netlify site from the app. Its only job is to explain what Seyona does and convert visitors into signups.

---

## Tech Stack

- Vite + React (JSX)
- React Router DOM
- Tailwind CSS
- Netlify

---

## Project Structure

```
src/
  components/
    Navbar.jsx
    Navbar.css
  pages/
    Home.jsx
    Pricing.jsx
    HowItWorks.jsx
  schema.js          # Single source of truth for all schemas
  App.jsx            # Routes defined here
  main.jsx           # BrowserRouter wraps everything here
  theme.css          # CSS variables, reset, base styles, utilities
public/
  _redirects         # Netlify fix: /* /index.html 200
```

---

## Routing

BrowserRouter lives in `main.jsx`. Routes in `App.jsx`. Use React Router `<Link>` for internal navigation, never `<a>` tags.

---

## Pages

| Route | Status | Notes |
|-------|--------|-------|
| `/` | 🚧 In progress | Hero, features, social proof, CTA |
| `/pricing` | 🚧 In progress | Pricing tiers, FAQ |
| `/how-it-works` | 🚧 In progress | Step by step |
| `/features` | ⏳ Hidden | Not built yet |
| `/docs` | ⏳ Hidden | Not built yet |
| `/blog` | ⏳ Hidden | Not built yet |
| `/about` | ⏳ Hidden | Not built yet |

---

## Schema-Driven Components

All schemas live in `src/schema.js`. The Navbar is already schema-driven via `menuSchema`. Follow the same pattern for pricing tiers, feature lists, FAQ items.

Use `visible: false` to hide items rather than deleting them.

---

## Navbar

Already implemented with:
- Schema-driven menu from `src/schema.js`
- Dropdown support with visible children
- Mobile hamburger menu
- Sticky + glassmorphism effect
- Active state on current route

To show a hidden nav item — find it in `menuSchema` in `schema.js` and flip `visible: false` to `true`.

---

## Copy Guidelines

- Lead with outcome not technology
- Avoid AI buzzwords — see root CLAUDE.md tone section
- No lorem ipsum placeholders ever
- The script tag installation flow should be prominently featured — it's the clearest proof of simplicity
- Testimonials must be real — leave empty rather than placeholder
