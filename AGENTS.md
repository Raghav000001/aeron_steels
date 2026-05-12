# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-11
**Last Updated:** 2026-05-12 (init-deep: +sheet a11y fix, +ui dir count, +path alias, +formatter/middleware gaps)
**Commit:** `902a3e1`
**Branch:** `main`

<!-- BEGIN:nextjs-agent-rules -->
> ⚠️ **Next.js has breaking changes** — APIs, conventions, file structure differ from standard. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## OVERVIEW

Aeron Steels corporate website — homepage for a steel manufacturing & export company. Next.js 16, React 19, Tailwind v4, shadcn/ui (radix-nova style), GSAP animations.

## STACK

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js 16.2.4 | App Router, RSC |
| UI Library | React 19.2.4 | |
| Styling | Tailwind CSS v4 | CSS vars in globals.css, no tailwind.config |
| Components | shadcn/ui radix-nova | Radix primitives via `radix-ui` package |
| Animation | GSAP 3.15 / Framer Motion | ScrollTrigger registered per-file; framer-motion for UI transitions |
| Icons | Lucide React | |
| Fonts | Space Grotesk (heading), Geist (body), JetBrains Mono (labels/tech) | |
| Email | Nodemailer 8 | Contact form — admin notification + customer reply |
| Toast | Sonner | Toast notifications for form submission feedback |
| 3D Rendering | Three.js 0.184 / @react-three/fiber | Globe viz via three-globe; client-only with `dynamic(..., { ssr: false })` |

## STRUCTURE

```
./
├── site-reference.md            # DESIGN BLUEPRINT — full spec from kndsteel.com
├── AGENTS.md                    # This file
├── src/
│   ├── app/
│   │   ├── layout.js            # Root layout – fonts, Header, Footer
│   │   ├── page.js              # Homepage – composes all sections
│   │   └── globals.css          # Tailwind + theme CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js        # Fixed header, scroll-aware, dropdown, mobile sheet
│   │   │   └── Footer.js        # Multi-column footer + SEO text block
│   │   ├── sections/ (9 files)  # Homepage sections (6 used): HeroBanner, StatsSection, ProductSpecsSection, ValuesSection, TestimonialsSection, GlobeSection, GlobeSectionWrapper (+ ClientCarousel, MediaPressSection — not on homepage)
│   │   ├── shared/ (4 files)    # AnimatedSection, PageHero, SectionWrapper, WhatsAppButton
│   │   └── ui/ (6 files)        # button.jsx, sheet.jsx, globe.js, timeline.jsx, wavy-background.js, wavy-background.jsx
│   ├── hooks/ (2 files)         # useGSAPAnimation, useScrollPosition
│   ├── lib/
│   │   ├── utils.js             # cn() helper (clsx + tailwind-merge)
│   │   ├── mail.js              # Nodemailer transport + send helpers
│   │   └── rate-limit.js        # IP-based API rate limiter
│   ├── data/
│   │   └── globe.json           # Country geometry data for Three.js globe (417KB GeoJSON)
│   └── emails/ (2 files)        # Email templates (admin-notification, customer-reply)
└── public/images/               # hero_banner.avif, hero_banner.webp
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| **Design spec** | `site-reference.md` | Complete reference: sections, colors, gradients, component hierarchy |
| **Theme / colors** | `src/app/globals.css` | CSS custom properties, `@theme inline` block |
| **Layout shell** | `src/app/layout.js` | Header/Footer wrappers, font config |
| **Page sections** | `src/components/sections/*` | 9 files (6 on homepage): HeroBanner, StatsSection, ValuesSection, ProductSpecsSection, TestimonialsSection, GlobeSection, GlobeSectionWrapper, ClientCarousel, MediaPressSection |
| **Header** | `src/components/layout/Header.js` | Scroll-aware, products dropdown, mobile Sheet drawer |
| **Footer** | `src/components/layout/Footer.js` | Nav, products, contact, SEO rich-text section |
| **Animations** | `src/hooks/useGSAPAnimation.js` | Shared GSAP scroll-triggered animation hook |
| **Scroll detection** | `src/hooks/useScrollPosition.js` | RAF-throttled scroll Y tracker |
| **Globe section** | `src/components/sections/GlobeSection.js` | Three.js globe with arc routes — client-only via `GlobeSectionWrapper` |
| **Globe wrapper** | `src/components/sections/GlobeSectionWrapper.js` | `dynamic(() => import(...), { ssr: false })` shim for Three.js |
| **Globe component** | `src/components/ui/globe.js` | Three.js globe renderer (256 lines, `three-globe` + `@react-three/fiber`) |
| **Globe data** | `src/data/globe.json` | Country polygon GeoJSON (417KB) for 3D globe rendering |
| **UI kit** | `src/components/ui/` | shadcn button + sheet + Three.js globe + timeline + wavy-background |
| **Shared components** | `src/components/shared/` | AnimatedSection, PageHero, SectionWrapper, WhatsAppButton |
| **Page routes** | `src/app/*/page.js` | About, Contact, Products, Certifications, Infrastructure, Quality, Media-Press, Our-Presence, Privacy-Policy, Terms + 3 product detail pages |
| **Contact form API** | `src/app/api/contact/route.js` | POST handler with rate limiting + email notification |
| **Email templates** | `src/emails/` | Admin notification + customer reply templates |
| **Mail service** | `src/lib/mail.js` | Nodemailer transport setup |
| **Rate limiter** | `src/lib/rate-limit.js` | IP-based API rate limiter |
| **Conventions** | `@/` path alias | `@/lib/utils`, `@/components/ui/`, `@/hooks/` |

## CONVENTIONS

- **JS over TS** — project uses `.js` / `.jsx` (`components.json` has `"tsx": false`)
- **Exports** — section components use **named exports** (`export function HeroBanner`); layout & UI use **default exports**
- **File extensions** — `.js` for app/, sections/, shared/, layout/; `.jsx` only for shadcn UI primitives (`button.jsx`, `sheet.jsx`)
- **Client directive** — any component using hooks, interactivity, or GSAP gets `"use client"`
- **GSAP** — `ScrollTrigger` registered with `if (typeof window !== "undefined")` guard at module level. Animations use `gsap.context()` or plain `useEffect`
- **Animation hook** — prefer `useGSAPAnimation(sectionRef, { stagger, fromY })` for simple scroll-triggered fades. Use inline `useEffect` for complex timeline animations
- **Dark theme** — Red Edition dark industrial palette. Bg `#050505`, surfaces `#0a0a0a`–`#262626`, red primary `#ef4444`
- **Text classes** — `text-white` for headings, `text-on-surface-variant` (#a1a1aa) for body text, `text-primary` (#ef4444) for accent
- **Tech labels** — `font-mono text-[10px] tracking-[0.3em] uppercase text-primary` for section labels
- **Glassmorphism** — `glass-panel` class for backdrop-blur cards; `glass-nav` for sticky header
- **Gradients** — `bg-gradient-to-r from-primary to-primary-accent` for gradient text (via `bg-clip-text text-transparent`)
- **Buttons** — `bg-primary hover:bg-red-600 font-mono text-xs rounded-lg tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.3)]`
- **Border radii** — use shadcn radius tokens (`rounded-2xl`, `rounded-full`)
- **Container** — `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on all sections, or `section-container` class
- **GSAP cleanup** — `useEffect` returns `() => ctx.revert()` or `() => cancelAnimationFrame(id)`
- **Client-only 3D** — Three.js components wrapped in `dynamic(() => import("..."), { ssr: false })` to prevent SSR hydration errors (see `GlobeSectionWrapper.js`)
- **Linting** — ESLint via `eslint-config-next/core-web-vitals` (flat config in `eslint.config.mjs`, not legacy `.eslintrc`)
- **Path aliases** — `@/` maps to `./src/*` via `jsconfig.json` (no tsconfig since JS project)

## ANTI-PATTERNS (TO AVOID)

- **CSS typo** — `globals.css` line 118: `--muted-foreground: a1a1aa;` missing `#` prefix — invalid CSS color value
- **Placeholder images** — ProductSpecsSection and ValuesSection reuse hero_banner.avif for all cards instead of product-specific `<Image>` assets
- **Dead code** — `StatsSection.js` has unused variable `let start = 0;` in counter effect
- **Split animation pattern** — `StatsSection` delegates animation to a separate `StatsAnimation` component returning `null` — prefer inline or hook-based animation instead
- **Inconsistent animation pattern** — some sections use `useGSAPAnimation` hook, others inline `useEffect`. Pick one pattern
- **Missing deps** — `useEffect` with `[]` deps that reference closures — add ESLint comment or fix
- **`@ts-ignore` / `as any`** — never suppress type errors
- **No test setup** — no test framework, no `__tests__` dirs, no `*.test.*` files
- **Static product routes** — three explicit route dirs under `src/app/products/` (`carbon-steel-strips/`, `crca-steel/`, `hardened-tempered-steel/`) instead of a dynamic `[slug]` route; adding products requires duplicating page boilerplate
- **No CI/CD** — no GitHub Actions, Dockerfile, or deployment automation; build is manual `npm run build && npm start`
- **Permissive image remote config** — `next.config.mjs` allows images from any HTTPS host (`hostname: "**"`), broader than security best practice
- **Hardcoded routes** — Header.js hardcodes navigation links instead of deriving from a route config or CMS
- **No route groups, loading/error templates** — no `(groups)`, `loading.js`, `error.js`, `not-found.js`, or `middleware.js` files; all pages share the same root layout chrome with no per-route loading states
- **SheetContent a11y (FIXED)** — `SheetContent` was missing a required `DialogTitle` descendant. Added `<SheetTitle className="sr-only">` with a configurable `title` prop (default: "Menu") in the May 12 update.
- **No formatter config** — no `.editorconfig`, `.prettierrc`, or formatter script — indentation/spacing is convention-only (2-space, double quotes observed in config files)

## KEY UI PATTERNS

| Pattern | Tailwind |
|---------|----------|
| Glass panel | `glass-panel rounded-2xl` (backdrop-blur + subtle border) |
| Gradient text | `bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent` |
| Red button | `bg-primary hover:bg-red-600 font-mono text-xs rounded-lg tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.3)]` |
| Outline button | `border border-white/20 text-primary hover:bg-primary hover:text-white font-mono text-xs rounded-lg tracking-wider uppercase` |
| Tech label | `font-mono text-[10px] text-primary tracking-[0.3em] uppercase` |
| Glass nav | `glass-nav fixed top-0 w-full z-50` (centered pill, backdrop-blur) |
| Card 3D | `card-3d` (perspective hover tilt) |
| Tracing beam | `tracing-beam` (animated red vertical line) |
| Grid overlay | `grid-overlay` (subtle grid pattern on bg) |
| Section padding | `py-20` / `py-16` |
| Scroll animation | `useGSAPAnimation(ref, { stagger: 0.1, fromY: 40 })` |
| Reveal on scroll | `reveal-on-scroll` (fade + translateY with `active` class trigger) |

## COMMANDS

```bash
npm run dev      # Next.js dev server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## COLORS (Red Edition — Dark Industrial)

### Surfaces
| Role | CSS Var | Hex |
|------|---------|-----|
| Background | `--background` | `#050505` |
| Surface | `--surface` | `#0a0a0a` |
| Surface container | `--surface-container` | `#141414` |
| Surface container high | `--surface-container-high` | `#1a1a1a` |
| Surface container highest | `--surface-container-highest` | `#262626` |

### Text
| Role | CSS Var | Hex |
|------|---------|-----|
| On-surface (headings/white text) | `--on-surface` | `#fafafa` |
| On-surface variant (body) | `--on-surface-variant` | `#a1a1aa` |

### Brand
| Role | CSS Var | Hex |
|------|---------|-----|
| Primary (Furnace Red) | `--primary` | `#ef4444` |
| Primary accent (light red) | `--primary-accent` | `#ffb3ad` |
| Primary container (brighter red) | `--primary-container` | `#ff5451` |

### Secondary / Status
| Role | CSS Var | Hex |
|------|---------|-----|
| Secondary (Molten Amber) | `--secondary` | `#ffb95f` |
| Success | `--success` | `#22c55e` |
| Warning | `--warning` | `#f59e0b` |

### Borders / Misc
| Role | CSS Var | Hex |
|------|---------|-----|
| Outline | `--outline` | `#52525b` |
| Border | `--border` | `rgba(255,255,255,0.1)` |
| Ring (focus) | `--ring` | `rgba(239,68,68,0.3)` |

## NOTES

- **Deployment**: No CI/CD. Build manually via `npm run build && npm start`. `.gitignore` ignores `.vercel` — Vercel is expected target but no config file present.
- **Env contract**: `.env.example` requires 3 SMTP vars (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`) for contact form. No Node version pinned (no `.nvmrc`/`.node-version`).
- **AI guidance**: `.github/copilot-instructions.md` mirrors this file's conventions for GitHub Copilot integration.
- **Config style**: Tailwind v4 uses `@theme inline` in CSS — no `tailwind.config.js` exists.
- **Project scale**: ~107 files, ~6k source lines of JS/JSX across 12 src/ directories. Largest source files: globals.css (365 lines), ValuesSection.js (268 lines).

## DESIGN REFERENCE

See `site-reference.md` for the full KND Steel clone spec — section order, color palette, user flow, component hierarchy, and page routes.
