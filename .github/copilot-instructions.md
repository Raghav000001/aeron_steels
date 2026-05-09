# Aeron Steels — AI Agent Instructions

**Framework:** Next.js 16.2.4 (App Router, React 19) | **Styling:** Tailwind CSS v4 + shadcn/ui (radix-nova) | **Animation:** GSAP 3.15

---

## Quick Essentials

### Start Here
- **Full reference:** [AGENTS.md](../AGENTS.md) — comprehensive knowledge base covering stack, structure, conventions, patterns, anti-patterns
- **Design spec:** [site-reference.md](../site-reference.md) — complete KND Steel clone spec with color palette, section order, component hierarchy

### Tech Stack
| Layer | Tech | Key Point |
|-------|------|-----------|
| Framework | Next.js 16.2.4 | App Router; read `node_modules/next/dist/docs/` if unfamiliar |
| UI | React 19 + shadcn/ui | Radix primitives + Tailwind integration |
| Styling | Tailwind CSS v4 | No `tailwind.config.js` file — config is inline in `globals.css` via `@theme inline` |
| Animation | GSAP 3.15 | `ScrollTrigger` registered at module level; animations use `gsap.context()` or plain `useEffect` |
| Path alias | `@/` | `@/components/`, `@/hooks/`, `@/lib/utils` |

### Build Commands
```bash
npm run dev           # Start dev server (http://localhost:3000)
npm run build         # Production build
npm run lint          # ESLint check
```

---

## Code Conventions

### File Exports
- **Sections** (`src/components/sections/*.js`): **Named exports** → `export function HeroBanner { ... }`
- **Layouts & UI** (header, footer, buttons): **Default exports** → `export default function Header { ... }`
- **Language:** JavaScript (not TypeScript) — `components.json` has `"tsx": false`

### Client Components ("use client")
Required for any component using:
- React hooks (`useState`, `useRef`, `useEffect`)
- Event handlers (onClick, etc.)
- GSAP animations
- AnimatedSection wrapper

### Animation Patterns
**Prefer simple scroll-triggered fades:**
```js
useGSAPAnimation(sectionRef, { stagger: 0.1, fromY: 40 })
```

**For complex timelines:**
```js
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.fromTo(".element", { opacity: 0 }, { opacity: 1, duration: 0.8 });
  }, sectionRef);
  return () => ctx.revert();
}, []);
```

### Styling Patterns
| Pattern | Example |
|---------|---------|
| **Gradient button** | `bg-gradient-to-r from-primary to-primary-accent text-white rounded-full` |
| **Gradient text** | `bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent` |
| **Color vars** | `text-body`, `bg-primary`, `text-heading` (CSS custom properties, not hex) |
| **Card shadow** | `shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]` |
| **Sticky header** | `fixed top-0 w-full z-50 transition-all duration-300` |
| **Section spacing** | `py-20` (desktop) / `py-16` (tablet) |
| **Container** | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |

### Colors (CSS Variables)
```css
--primary: #2678be              /* Mid blue — CTAs, buttons */
--primary-accent: #00cfff       /* Bright cyan — gradient endpoints */
--primary-light: #8be3ff        /* Light cyan — secondary accents */
--primary-dark: #001b34         /* Deep navy — headings, dense text */
--body: #4c5f71                 /* Body text gray */
--heading: #191b1f              /* Dark heading text */
--muted: #f8f9fa                /* Light background */
--border: #e0e0e0               /* Border/divider color */
```

---

## Directory Structure & Responsibilities

```
src/
├── app/
│   ├── layout.js               # Root layout, fonts, Header/Footer wrapper
│   ├── globals.css             # Tailwind + CSS variables (theme inline)
│   ├── page.js                 # Homepage — composes 7 sections
│   └── [routes]/page.js        # About, Contact, Products, etc.
├── components/
│   ├── layout/                 # Header, Footer (sticky/fixed layouts)
│   ├── sections/               # 7 sections: Hero, Carousel, Stats, Values, Media, ProductSpecs, Testimonials
│   ├── shared/                 # AnimatedSection, PageHero, SectionWrapper, WhatsAppButton
│   └── ui/                     # Button, Sheet (shadcn primitives)
├── hooks/
│   ├── useGSAPAnimation.js     # Scroll-triggered fade + stagger helper
│   └── useScrollPosition.js    # RAF-throttled scroll Y tracking
└── lib/
    └── utils.js                # cn() helper (clsx + tailwind-merge)
```

---

## Known Issues & Anti-Patterns to Fix

See [AGENTS.md](../AGENTS.md#anti-patterns-to-avoid) for details on:

1. **Empty elements** — HeroBanner subheading `<p>` is empty; fill or remove
2. **Placeholder images** — ProductSpecsSection uses colored divs instead of `<Image>` — use Next.js Image component for real assets
3. **Split animation pattern** — StatsSection delegates to separate StatsAnimation component returning `null` — refactor to inline useEffect or useGSAPAnimation hook
4. **Inconsistent animation approach** — some sections use hook, others inline useEffect — standardize on one pattern
5. **Never use** `@ts-ignore`, `as any`, or suppress ESLint rules without justification

---

## Development Workflow

### Adding a New Page
1. Create `src/app/[route]/page.js` as RSC
2. Import and compose page components (use `PageHero` for consistent header)
3. Use `"use client"` only on interactive components (Header, buttons, animations)
4. Follow naming: `export function [ComponentName]` for sections, `export default` for page-level

### Adding a Section Component
1. Create `src/components/sections/[SectionName].js` with named export
2. Wrap in `AnimatedSection` or `SectionWrapper` for consistent styling + optional animation
3. Add `"use client"` if using hooks or animations
4. Use `max-w-7xl mx-auto px-4` container pattern
5. Reference colors as Tailwind utilities (`text-body`, `bg-primary`, etc.)

### Fixing Animations
- **Simple fade-in on scroll:** use `useGSAPAnimation(ref, { stagger: 0.1, fromY: 40 })`
- **Complex timeline:** inline `useEffect` with `gsap.context()` and proper cleanup
- **Always clean up:** return `() => ctx.revert()` or `() => cancelAnimationFrame(id)`

### Testing Changes
```bash
npm run dev
# Navigate to http://localhost:3000 and inspect section behavior
# Check animations at different scroll speeds (use DevTools throttling if needed)
```

---

## Useful Patterns from Codebase

### GradientText Helper (inline)
```js
function GradientText({ children, className }) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent",
      className
    )}>
      {children}
    </span>
  );
}
```

### Animated Section Wrapper
```js
<AnimatedSection options={{ stagger: 0.1, fromY: 40 }}>
  <div className="grid grid-cols-2 gap-4">
    {/* Cards animate in staggered sequence */}
  </div>
</AnimatedSection>
```

### Next.js Image (for future use)
```js
import Image from "next/image";

<Image
  src="/images/hero_banner.avif"
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>
```

---

## ESLint & Linting

```bash
npm run lint
```

Configuration: `eslint.config.mjs` with `eslint-config-next/core-web-vitals`. Respect these rules — no suppressions without justification.

---

## Decision Log

- **No `tailwind.config.js`:** Tailwind v4 uses inline `@theme` in `globals.css`
- **JS over TS:** Project uses `.js` for simpler onboarding; no strict typing needed for UI-only codebase
- **GSAP over Framer Motion:** Choice made for granular control and timeline choreography
- **shadcn/ui (radix-nova):** Provides primitivized, accessible components via Radix + Tailwind integration

---

## Links & References

- [Full Knowledge Base](../AGENTS.md)
- [Design Specification](../site-reference.md)
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs)
- [shadcn/ui Components](https://shadcn-vue.com/docs/components) (Radix primitives)
