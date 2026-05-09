# Site Reference: KND Steel Clone for Aeron Steels

> Analysis of https://www.kndsteel.com/ -- structure, layout, color palette, and user flow.

---

## 1. Homepage Sections (Top to Bottom)

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Header / Navigation** | Fixed header with logo (left), mega-menu nav (center), "Contact Us" CTA (right). Transparent at top, gains translucent dark backdrop with blur on scroll. |
| 2 | **Hero Banner** | Full-width background image with left-aligned value proposition, gradient-text label, large heading, sub-heading, and two CTAs ("OUR PRODUCTS" + "GET IN TOUCH"). |
| 3 | **Client Logo Carousel** | Auto-scrolling marquee of partner/client logos (BHEL, Maruti Suzuki, BMW, TATA, etc.) for social proof. |
| 4 | **Stats / Counter Cards** | Four metric cards: Years of experience, Customers, Repeat customers, Yearly supply volume. Builds trust with numbers. |
| 5 | **Values / Why Us** | Section titled around delivering specifications. 4-card grid: Precision, Reputation, Service, Partnership. |
| 6 | **Media & Press** | Grid of media outlet logos (ET Now, The Hindu, TOI, etc.) linking to press coverage pages. |
| 7 | **Product Specifications** | Three detailed product blocks with specs tables (grades, thickness, width, form, etc.), applications, "Show More" toggle, and product images. |
| 8 | **Testimonials Carousel** | Gradient cards with customer quotes, attribution (name, title, company). Dot pagination + arrow navigation. |
| 9 | **Footer** | Multi-column layout: nav links, product categories, contact info (phone, email, LinkedIn), country presence. Background image. |
| 10 | **SEO Footer** | Dark background section with keyword-rich paragraphs about the company. Copyright + Privacy Policy. |

---

## 2. Color Theme

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Mid Blue | `#2678be` | CTAs, heading gradients, buttons, testimonial cards |
| **Primary Accent** | Bright Cyan | `#00cfff` | Gradient endpoints, hover states, highlights |
| **Dark Primary** | Deep Navy | `#001b34` | Headings, stat numbers, nav scroll backdrop, section titles |

### Key Gradients

| Gradient | Stops | Usage |
|----------|-------|-------|
| Primary CTA | `#257cbe` -> `#00cfff` | Buttons, nav arrows, banner CTAs |
| Text/Label | `#257cbe` -> `#8be3ff` | Labels, text gradients |
| Testimonial | `#2678be` -> `#06aace` | Testimonial card backgrounds |

### Secondary & Neutral Colors

| Role | Hex | Usage |
|------|-----|-------|
| Body text | `#4c5f71` | Default paragraph text |
| Secondary text | `#595959` | Paragraph body |
| Headings | `#191b1f` | H2, section titles |
| Light background | `#f8f9fa` | Alternating section backgrounds |
| Border | `#e0e0e0` | Dividers, card borders |
| Subtle gray | `#eee` | Light backgrounds |

### Footer Colors

| Role | Hex | Usage |
|------|-----|-------|
| Footer BG | `#091c2d` | SEO footer background |
| Footer text | `#92adca` | Footer body text |
| Footer links | `#396086` | Link text |
| Footer divider | `#748290` | Border top |
| Footer hover | `#b3c5d8` | Link hover state |

### Accent / Functional

| Role | Hex | Usage |
|------|-----|-------|
| Success / WhatsApp | `#25b85d` | WhatsApp floating button |
| Link blue | `#0077cc` | Inline text links |
| Hover green | `#40c250` | Hover states |
| White | `#ffffff` | Banner text, button text, card backgrounds |

### Tailwind Theme Suggestion

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2678be',
        light: '#8be3ff',
        dark: '#001b34',
        accent: '#00cfff',
      },
      footer: {
        bg: '#091c2d',
        text: '#92adca',
        link: '#396086',
        divider: '#748290',
        hover: '#b3c5d8',
      },
      body: {
        text: '#4c5f71',
        secondary: '#595959',
      },
      heading: '#191b1f',
      border: '#e0e0e0',
      muted: '#f8f9fa',
    },
  },
}
```

---

## 3. User Flow

```
Entry (Hero Banner)
  |-- Value proposition + 2 CTAs
  |     |-- "OUR PRODUCTS" -> scrolls to product specs section
  |     |-- "GET IN TOUCH" -> /contact-us page
  |
Social Proof (Client Carousel)
  |-- Auto-scrolling partner logos establish credibility
  |
Trust Metrics (Stats Cards)
  |-- 4 key numbers: experience, customers, retention, volume
  |
Value Proposition (Why Us)
  |-- 4 pillars: Precision, Reputation, Service, Partnership
  |
Media Credibility (Press Grid)
  |-- News outlet logos linking to coverage pages
  |
Product Exploration (Spec Sections)
  |-- 3 product categories with detailed specs, applications, images
  |     |-- Each links to individual product detail pages
  |
Testimonials (Carousel)
  |-- Customer quotes with attribution (domestic + international)
  |
Footer (Navigation + Contact)
  |-- Full site nav, product links, contact info, WhatsApp button
  |
SEO Footer
  |-- Keyword-rich content for search engines
```

### Conversion Paths
- **Primary**: "GET IN TOUCH" -> contact form
- **Secondary**: "OUR PRODUCTS" -> product catalog
- **Floating**: WhatsApp button for instant messaging
- **Direct**: Clickable phone/email links in footer

---

## 4. Next.js Component Hierarchy (Tailwind + Shadcn)

```
app/
├── layout.tsx                          # Root layout with fonts, providers
├── page.tsx                            # Homepage composition
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                  # Fixed header, scroll-aware backdrop
│   │   │   ├── Logo.tsx                # Brand logo with shrink animation
│   │   │   ├── NavBar.tsx              # Centered navigation links
│   │   │   │   ├── MegaMenu.tsx        # Dropdown with product categories
│   │   │   │   └── NavLinks.tsx        # Top-level nav items
│   │   │   ├── HeaderCTA.tsx           # "Contact Us" button (show/hide on scroll)
│   │   │   └── MobileMenu.tsx          # Full-screen overlay hamburger menu
│   │   └── Footer.tsx                  # Multi-column footer
│   │       ├── FooterNav.tsx           # Navigation link columns
│   │       ├── FooterProducts.tsx      # Product category links
│   │       ├── FooterContact.tsx       # Phone, email, social links
│   │       └── SEOFooter.tsx           # Dark SEO text section
│   │
│   ├── sections/
│   │   ├── HeroBanner.tsx              # Full-width hero with background image
│   │   │   ├── HeroLabel.tsx           # Gradient text label
│   │   │   ├── HeroHeading.tsx         # Main heading
│   │   │   ├── HeroSubheading.tsx      # Sub-heading with left border
│   │   │   └── HeroCTAs.tsx            # Primary + secondary CTA buttons
│   │   ├── ClientCarousel.tsx          # Auto-scrolling logo marquee
│   │   │   └── ClientLogo.tsx          # Individual logo item
│   │   ├── StatsSection.tsx            # Counter/metric cards
│   │   │   └── StatCard.tsx            # Icon + number + label card
│   │   ├── ValuesSection.tsx           # "Why Us" section
│   │   │   └── ValueCard.tsx           # Icon + heading + description card
│   │   ├── MediaPressSection.tsx       # Media outlet logo grid
│   │   │   └── MediaTile.tsx           # Individual media logo link
│   │   ├── ProductSpecsSection.tsx     # Product specification blocks
│   │   │   ├── ProductSpecBlock.tsx    # Single product with specs table
│   │   │   ├── SpecsTable.tsx          # Label-value spec rows
│   │   │   ├── ShowMoreToggle.tsx      # Expandable specs
│   │   │   └── ProductImage.tsx        # Product image (right-aligned)
│   │   └── TestimonialsSection.tsx     # Testimonial carousel
│   │       └── TestimonialCard.tsx     # Gradient card with quote + attribution
│   │
│   ├── ui/                             # Shadcn primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── sheet.tsx                   # Mobile menu drawer
│   │   ├── accordion.tsx               # Show more specs toggle
│   │   └── badge.tsx                   # Labels/tags
│   │
│   └── shared/
│       ├── WhatsAppButton.tsx          # Floating WhatsApp CTA
│       ├── ScrollToTop.tsx             # Back to top button
│       ├── SectionWrapper.tsx          # Consistent section padding/container
│       └── GradientText.tsx            # Reusable gradient text component
│
├── hooks/
│   ├── useScrollPosition.ts            # Header scroll detection
│   └── useInView.ts                    # Intersection observer for animations
│
└── lib/
    ├── fonts.ts                        # Font config (Inter, Oxygen)
    └── constants.ts                    # Site data (stats, products, testimonials)
```

### Shadcn Components to Install

```bash
npx shadcn@latest add button card carousel sheet accordion badge separator
```

### Key UI Patterns

| Pattern | Implementation |
|---------|----------------|
| Scroll-aware header | `useScrollPosition` hook toggles bg class on Header |
| Gradient buttons | `bg-gradient-to-r from-primary to-primary-accent` |
| Gradient text | `bg-gradient-to-r bg-clip-text text-transparent` |
| Card shadows | `shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]` |
| Carousel | shadcn `carousel` or embla-carousel for clients/testimonials |
| Responsive grid | Tailwind `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| Sticky header | `fixed top-0 w-full z-50 transition-all duration-300` |
| Mobile menu | shadcn `sheet` component, full-screen overlay |

### Recommended Page Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about` | About Us |
| `/products` | Product listing |
| `/products/[slug]` | Individual product detail |
| `/quality` | Quality assurance page |
| `/media-press` | Media & Press coverage |
| `/our-presence` | Global presence / locations |
| `/contact` | Contact form + info |
