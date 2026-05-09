# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-09
**Commit:** `87ed341`
**Branch:** `master`

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
| Animation | GSAP 3.15 | ScrollTrigger registered per-file |
| Icons | Lucide React | |
| Fonts | Inter (heading), Oxygen (body) | |

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
│   │   ├── sections/ (7 files)  # All homepage sections (see WHERE TO LOOK)
│   │   ├── shared/ (4 files)    # AnimatedSection, PageHero, SectionWrapper, WhatsAppButton
│   │   └── ui/ (2 files)        # button.jsx, sheet.jsx — shadcn primitives
│   ├── hooks/ (2 files)         # useGSAPAnimation, useScrollPosition
│   └── lib/
│       └── utils.js             # cn() helper (clsx + tailwind-merge)
└── public/images/               # hero_banner.avif, hero_banner.webp
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| **Design spec** | `site-reference.md` | Complete reference: sections, colors, gradients, component hierarchy |
| **Theme / colors** | `src/app/globals.css` | CSS custom properties, `@theme inline` block |
| **Layout shell** | `src/app/layout.js` | Header/Footer wrappers, font config |
| **Page sections** | `src/components/sections/*` | 7 sections: HeroBanner → ClientCarousel → Stats → Values → MediaPress → ProductSpecs → Testimonials |
| **Header** | `src/components/layout/Header.js` | Scroll-aware, products dropdown, mobile Sheet drawer |
| **Footer** | `src/components/layout/Footer.js` | Nav, products, contact, SEO rich-text section |
| **Animations** | `src/hooks/useGSAPAnimation.js` | Shared GSAP scroll-triggered animation hook |
| **Scroll detection** | `src/hooks/useScrollPosition.js` | RAF-throttled scroll Y tracker |
| **UI kit** | `src/components/ui/` | shadcn button + sheet |
| **Shared components** | `src/components/shared/` | AnimatedSection, PageHero, SectionWrapper, WhatsAppButton |
| **Conventions** | `@/` path alias | `@/lib/utils`, `@/components/ui/`, `@/hooks/` |

## CONVENTIONS

- **JS over TS** — project uses `.js` / `.jsx` (`components.json` has `"tsx": false`)
- **Exports** — section components use **named exports** (`export function HeroBanner`); layout & UI use **default exports**
- **Client directive** — any component using hooks, interactivity, or GSAP gets `"use client"`
- **GSAP** — `ScrollTrigger` registered with `if (typeof window !== "undefined")` guard at module level. Animations use `gsap.context()` or plain `useEffect`
- **Animation hook** — prefer `useGSAPAnimation(sectionRef, { stagger, fromY })` for simple scroll-triggered fades. Use inline `useEffect` for complex timeline animations
- **Gradients** — use `bg-gradient-to-r from-primary to-primary-accent` for CTAs; `bg-clip-text text-transparent` for gradient text
- **Color vars** — use CSS custom properties (`var(--primary)`, `var(--body)`, `var(--heading)`, etc.) via Tailwind `text-body`, `bg-primary`, `text-heading`
- **Border radii** — use shadcn radius tokens (`rounded-2xl`, `rounded-full`)
- **Container** — `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on all sections
- **GSAP cleanup** — `useEffect` returns `() => ctx.revert()` or `() => cancelAnimationFrame(id)`
- **Linting** — ESLint via `eslint-config-next/core-web-vitals`

## ANTI-PATTERNS (TO AVOID)

- **Empty elements** — HeroBanner subheading `<p>` is empty; fill or remove
- **Placeholder images** — ProductSpecsSection uses colored divs instead of `<Image>` — use `next/image` for real assets
- **Split animation pattern** — `StatsSection` delegates animation to a separate `StatsAnimation` component returning `null` — prefer inline or hook-based animation instead
- **Inconsistent animation pattern** — some sections use `useGSAPAnimation` hook, others inline `useEffect`. Pick one pattern
- **Missing deps** — `useEffect` with `[]` deps that reference closures — add ESLint comment or fix
- **`@ts-ignore` / `as any`** — never suppress type errors

## KEY UI PATTERNS

| Pattern | Tailwind |
|---------|----------|
| Gradient button | `bg-gradient-to-r from-primary to-primary-accent text-white rounded-full` |
| Gradient text | `bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent` |
| Card shadow | `shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]` |
| Sticky header | `fixed top-0 w-full z-50 transition-all duration-300` |
| Section padding | `py-20` / `py-16` |
| Scroll animation | `useGSAPAnimation(ref, { stagger: 0.1, fromY: 40 })` |

## COMMANDS

```bash
npm run dev      # Next.js dev server
npm run build    # Production build
npm run lint     # ESLint
```

## COLORS (from site-reference.md + globals.css)

| Role | CSS Var | Hex |
|------|---------|-----|
| Primary | `var(--primary)` | `#2678be` |
| Primary accent | `var(--primary-accent)` | `#00cfff` |
| Primary light | `var(--primary-light)` | `#8be3ff` |
| Primary dark | `var(--primary-dark)` | `#001b34` |
| Body text | `var(--body)` | `#4c5f71` |
| Heading | `var(--heading)` | `#191b1f` |
| Footer bg | inline `bg-[#091c2d]` | `#091c2d` |
| Footer text | inline `text-[#92adca]` | `#92adca` |
| Muted bg | `var(--muted)` | `#f8f9fa` |
| Border | `var(--border)` | `#e0e0e0` |

## DESIGN REFERENCE

See `site-reference.md` for the full KND Steel clone spec — section order, color palette, user flow, component hierarchy, and page routes.
