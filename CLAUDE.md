# Seyona — Marketing Site

## What is Seyona?

Seyona is an AI-powered SEO tool that automatically generates and injects fresh FAQ content into client websites via a lightweight script tag. It targets any business with a website — agencies, SMBs, solo founders, ecommerce stores.

The core value prop: drop a script on your page, set a refresh frequency, and Seyona handles the rest. It keeps your content optimised for how people are actually searching right now, without you thinking about it.

## How the Product Works

Clients add a script tag to their page with their unique ID. On page load:

1. If fresh content exists in the cache → it's returned immediately
2. If content is stale or missing → the page content is sent to serverless functions that will product:
  - **Brand Analysis** - analysis of content across the whole site, helpful in maintaining consistency and identifying patterns/tendencies
  - **Trend Analysis** - analysis of the page's position relative to trending search topics; unique per page
  - **Generated Content** - creates 10 FAQs with schema markup based on brand analysis (site-wide) and trend analysis (for that page)
3. Generated FAQs are returned to the page and cached
4. Users can configure refresh frequency per page and set a marketing/informational ratio per page

The app is already built and live. This repo is **marketing site only**.

## Tech Stack — This Repo

- **Vite + React** (JSX)
- **React Router DOM** for routing
- **Tailwind CSS** for styling
- **Netlify** for hosting

The actual product app lives at `app.seyona.ai` (separate Netlify site, separate repo: `seyona-app`).

## Design System

Cherry blossom aesthetic — soft, minimal, feminine. Think Notion/Linear energy but with a warm pink palette. Deliberately stands out in the SEO tool space which is dominated by aggressive blues and dark dashboards.

### Fonts
- **Display/headings:** DM Serif Display (Google Fonts)
- **Body/UI:** DM Sans (Google Fonts)

### Color Tokens (all defined in `src/theme.css`)
```
--color-blossom:       #d4638a   (main brand pink)
--color-blossom-light: #e8a0b8
--color-blossom-mid:   #e08aa8
--color-blossom-dark:  #b84d72
--color-blossom-tint:  #fdf0f4   (background tints)
--color-blossom-pale:  #fce8ef
--color-ink:           #1a1118   (near-black, warm)
--color-ink-muted:     #6b5560
--color-ink-subtle:    #b09aa4
--color-surface:       #ffffff
--color-surface-raised:#fdf8f9
--color-bg:            #fefbfc
--color-border:        #f0e4e9
--color-border-strong: #e0cdd4
```

Always use CSS variables, never hardcode hex values. If you need a new color, add it to `theme.css` first.

### Conventions
- Avoid generic AI aesthetics — no purple gradients, no Inter font, no cookie-cutter layouts
- Generous whitespace, soft shadows, subtle animations
- Cards use `var(--color-surface-raised)` background with `var(--color-border)` borders
- Buttons: `.btn--primary` (blossom pink) and `.btn--ghost` (outlined) — defined in `Navbar.css`, move to theme if needed globally
- Utility classes available: `.container`, `.section`, `.section--tight`, `.card`, `.badge`, `.text-center`, `.text-muted`, `.text-blossom`

## Project Structure

```
src/
  components/
    Navbar.jsx       # Schema-driven navbar with dropdown + mobile support
    Navbar.css
  pages/
    Home.jsx
    Pricing.jsx
    HowItWorks.jsx
  schema.js          # Single source of truth for all page/component schemas
  App.jsx            # Routes live here
  main.jsx           # BrowserRouter wraps everything here
  theme.css          # All CSS variables, reset, base styles, utilities
public/
  _redirects         # Netlify fix: /* /index.html 200
```

## Schema-Driven Components

Components should be driven by schemas defined in `src/schema.js`. This makes copy changes and structural changes easy without touching component logic.

### Menu Schema (already implemented in Navbar.jsx)
```js
export const menuSchema = {
  menu: [
    {
      id: "pricing",
      label: "Pricing",
      link: "/pricing",
      visible: true,        // toggle to show/hide in nav without deleting
      children: []
    },
    {
      id: "features",
      label: "Features", 
      link: "/features",
      visible: false,       // hidden until page is ready
      children: [
        {
          id: "how-it-works",
          label: "How It Works",
          link: "/how-it-works",
          description: "See how Seyona keeps your content fresh",
          visible: true
        }
      ]
    }
  ]
}
```

Use the same `visible` pattern for any schema — pricing tiers, feature lists, FAQ items etc. Hide things rather than delete them.

## Pages Planned

| Route | Status | Notes |
|-------|--------|-------|
| `/` | 🚧 In progress | Hero, features overview, social proof, CTA |
| `/pricing` | 🚧 In progress | Pricing tiers, FAQ |
| `/how-it-works` | 🚧 In progress | Step by step explanation |
| `/features` | ⏳ Hidden | Not built yet |
| `/docs` | ⏳ Hidden | Not built yet |
| `/blog` | ⏳ Hidden | Not built yet |
| `/about` | ⏳ Hidden | Not built yet |

## Routing

BrowserRouter is in `main.jsx`. Routes are defined in `App.jsx`. Navigation uses React Router `<Link>` components, never `<a>` tags for internal links.

## Deployment

- Marketing site → `seyona.ai` on Netlify
- App → `app.seyona.ai` on Netlify (separate site)
- CTA buttons point to `https://app.seyona.ai/login` and `https://app.seyona.ai/signup`

## Positioning & Tone

Seyona is a **startup-positioned, self-serve product**. 

- Friendly and approachable, not enterprise
- Transparent and honest — don't overpromise on AI magic
- The ideal buyer is a small agency, indie founder, or SMB owner who wants SEO handled without thinking about it
- Pricing should be accessible, not intimidating
- Copy should be clear and direct — lead with the outcome, not the technology

Avoid: enterprise language, jargon, "revolutionary AI", fake urgency, lorem ipsum placeholders (yes this has been a problem before).

## Logo

Cherry blossom flower with an "S" in the center. Pink on white or dark backgrounds. Source file generated via ChatGPT — ask the developer for the PNG if you need it. The inline SVG in Navbar.jsx is a placeholder.
