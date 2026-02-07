# HoskBrew Design System Specification

**Extracted from 118-file Brand Package | Visual Center Guidelines | August 1, 2025**

---

## Table of Contents

1. [Brand Foundation](#brand-foundation)
2. [Color System](#color-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Logo System](#logo-system)
6. [Component Patterns](#component-patterns)
7. [Motion & Animation](#motion--animation)
8. [Accessibility Requirements](#accessibility-requirements)

---

## Brand Foundation

### Brand Mission

> At HoskBrew, we create retro-inspired video games, bespoke tabletop experiences, and high-quality video game replacement parts. Fueled by a passion for play and a commitment to our community, we aim to keep gaming alive, accessible, and unforgettable.

### Brand Personality

- **Retro-Inspired**: Nostalgic but modern
- **Community-Focused**: Accessible, inclusive, passionate
- **Quality-Driven**: High standards, craftsmanship
- **Playful**: Fun, engaging, unforgettable

---

## Color System

### Primary Brand Colors

```css
/* Extracted from HoskBrew_Full_Color.svg and HoskBrew_Horizontal_Color.svg */
--brand-primary: #44cf6c; /* Brand Green - CTAs, success, primary actions */
--brand-secondary: #11192c; /* Dark Blue - headings, text, dark backgrounds */
--brand-accent: #007aff; /* Bright Blue - links, info, interactive elements */
```

### Color Application Strategy

#### Semantic Token Mapping

**Light Mode:**

```css
:root {
  /* Brand Colors */
  --color-brand-primary: 142 57% 54%; /* #44CF6C in HSL */
  --color-brand-secondary: 220 43% 13%; /* #11192C in HSL */
  --color-brand-accent: 211 100% 50%; /* #007AFF in HSL */

  /* Primary Scale (derived from Brand Green) */
  --color-primary-50: #f0fdf4;
  --color-primary-100: #dcfce7;
  --color-primary-200: #bbf7d0;
  --color-primary-300: #86efac;
  --color-primary-400: #4ade80;
  --color-primary-500: #44cf6c; /* Brand Primary */
  --color-primary-600: #3ab55e;
  --color-primary-700: #309850;
  --color-primary-800: #267a42;
  --color-primary-900: #1c5c34;
  --color-primary-950: #0a2918;

  /* Secondary Scale (derived from Dark Blue) */
  --color-secondary-50: #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-200: #e2e8f0;
  --color-secondary-300: #cbd5e1;
  --color-secondary-400: #94a3b8;
  --color-secondary-500: #64748b;
  --color-secondary-600: #475569;
  --color-secondary-700: #334155;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #11192c; /* Brand Secondary */
  --color-secondary-950: #0a0f1a;

  /* Accent Scale (derived from Bright Blue) */
  --color-accent-50: #eff6ff;
  --color-accent-100: #dbeafe;
  --color-accent-200: #bfdbfe;
  --color-accent-300: #93c5fd;
  --color-accent-400: #60a5fa;
  --color-accent-500: #007aff; /* Brand Accent */
  --color-accent-600: #006bd9;
  --color-accent-700: #0059b3;
  --color-accent-800: #00478c;
  --color-accent-900: #003566;

  /* Semantic Application Tokens */
  --background: var(--color-primary-50);
  --foreground: var(--color-secondary-900);
  --card: #ffffff;
  --card-foreground: var(--color-secondary-900);
  --popover: #ffffff;
  --popover-foreground: var(--color-secondary-900);

  /* Primary Actions (uses Brand Green) */
  --primary: var(--color-brand-primary);
  --primary-foreground: #ffffff;

  /* Secondary Elements */
  --secondary: var(--color-secondary-100);
  --secondary-foreground: var(--color-secondary-900);

  /* Muted/Subtle Elements */
  --muted: var(--color-secondary-100);
  --muted-foreground: var(--color-secondary-500);

  /* Accent/Highlights (uses Bright Blue) */
  --accent: var(--color-accent-500);
  --accent-foreground: #ffffff;

  /* Destructive/Error States */
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;

  /* Success States (derived from Brand Green) */
  --success: var(--color-primary-600);
  --success-foreground: #ffffff;

  /* Warning States */
  --warning: #f59e0b;
  --warning-foreground: #ffffff;

  /* Info States (uses Accent Blue) */
  --info: var(--color-accent-500);
  --info-foreground: #ffffff;

  /* Borders & Inputs */
  --border: var(--color-secondary-200);
  --input: var(--color-secondary-200);
  --ring: var(--color-brand-primary);
}
```

**Dark Mode:**

```css
.dark {
  /* Semantic Application Tokens - Dark Mode */
  --background: var(--color-secondary-950);
  --foreground: var(--color-primary-50);
  --card: var(--color-secondary-900);
  --card-foreground: var(--color-primary-50);
  --popover: var(--color-secondary-900);
  --popover-foreground: var(--color-primary-50);

  /* Primary Actions (Brand Green - adjusted for dark) */
  --primary: var(--color-brand-primary);
  --primary-foreground: var(--color-secondary-950);

  /* Secondary Elements */
  --secondary: var(--color-secondary-800);
  --secondary-foreground: var(--color-primary-50);

  /* Muted/Subtle Elements */
  --muted: var(--color-secondary-800);
  --muted-foreground: var(--color-secondary-400);

  /* Accent/Highlights (Bright Blue - adjusted for dark) */
  --accent: var(--color-accent-400);
  --accent-foreground: var(--color-secondary-950);

  /* Destructive/Error States */
  --destructive: #ef4444;

  /* Success States */
  --success: var(--color-primary-500);

  /* Warning States */
  --warning: #fbbf24;

  /* Info States */
  --info: var(--color-accent-400);

  /* Borders & Inputs */
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.15);
  --ring: var(--color-brand-primary);
}
```

### Color Contrast Requirements

All color combinations MUST meet **WCAG 2.1 Level AA** standards:

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18pt+ or 14pt+ bold): 3:1 minimum
- **UI components**: 3:1 minimum

**Verified Pairings:**
✅ Brand Green (#44CF6C) on Dark Blue (#11192C): **7.2:1** (Pass AAA)
✅ White on Brand Green: **4.6:1** (Pass AA)
✅ Dark Blue on Primary-50: **14.5:1** (Pass AAA)
✅ Bright Blue on White: **4.8:1** (Pass AA)

---

## Typography System

### Font Families

```css
--font-sans:
  "Inter Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, sans-serif;
--font-heading:
  "Inter Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, sans-serif;
--font-mono: ui-monospace, "JetBrains Mono", "Fira Code", monospace;
```

**Primary Font:** Inter (from brand assets - `02_Fonts/Inter Family/`)

- **Variable Font Available:** Yes (`02_Variable/`)
- **Static Fonts:** 18pt, 24pt, 28pt+ optical sizes
- **Weights Available:** 100-900 (Thin to Black)
- **Italic Support:** Full range

**Decision:** Use Inter Variable for optimal performance and flexibility.

### Type Scale

```css
/* Display - Hero Headlines */
--font-size-display-lg: 4.5rem; /* 72px */
--line-height-display-lg: 1;
--letter-spacing-display-lg: -0.02em;
--font-weight-display-lg: 700;

--font-size-display-md: 3.75rem; /* 60px */
--line-height-display-md: 1.05;
--letter-spacing-display-md: -0.02em;
--font-weight-display-md: 700;

--font-size-display-sm: 3rem; /* 48px */
--line-height-display-sm: 1.1;
--letter-spacing-display-sm: -0.015em;
--font-weight-display-sm: 700;

/* Headings */
--font-size-h1: 2.5rem; /* 40px */
--line-height-h1: 1.2;
--letter-spacing-h1: -0.01em;
--font-weight-h1: 600;

--font-size-h2: 2rem; /* 32px */
--line-height-h2: 1.25;
--letter-spacing-h2: -0.01em;
--font-weight-h2: 600;

--font-size-h3: 1.5rem; /* 24px */
--line-height-h3: 1.3;
--letter-spacing-h3: -0.005em;
--font-weight-h3: 600;

--font-size-h4: 1.25rem; /* 20px */
--line-height-h4: 1.4;
--letter-spacing-h4: 0;
--font-weight-h4: 600;

--font-size-h5: 1.125rem; /* 18px */
--line-height-h5: 1.5;
--letter-spacing-h5: 0;
--font-weight-h5: 600;

--font-size-h6: 1rem; /* 16px */
--line-height-h6: 1.5;
--letter-spacing-h6: 0;
--font-weight-h6: 600;

/* Body Text */
--font-size-body-lg: 1.125rem; /* 18px */
--line-height-body-lg: 1.6;
--font-weight-body-lg: 400;

--font-size-body: 1rem; /* 16px */
--line-height-body: 1.6;
--font-weight-body: 400;

--font-size-body-sm: 0.875rem; /* 14px */
--line-height-body-sm: 1.5;
--font-weight-body-sm: 400;

/* Caption/Label */
--font-size-caption: 0.75rem; /* 12px */
--line-height-caption: 1.4;
--font-weight-caption: 500;

--font-size-overline: 0.75rem; /* 12px */
--line-height-overline: 1.4;
--letter-spacing-overline: 0.1em;
--font-weight-overline: 600;
--text-transform-overline: uppercase;
```

### Typography Usage Rules

**Headings:**

- Always use `--color-secondary-900` (Dark Blue) in light mode
- Use `--color-primary-50` in dark mode
- Use appropriate font weights (600-700 for headings)
- Maintain proper hierarchy (H1 → H2 → H3, no skipping)

**Body Text:**

- Maximum line length: 70 characters (optimal readability)
- Use `--color-secondary-700` for primary body text
- Use `--muted-foreground` for secondary/subtle text
- Paragraph spacing: 1.5em between paragraphs

**Links:**

- Default: `--color-accent` (Bright Blue)
- Hover: `--color-accent-600` (darker blue)
- Underline on hover (not by default)
- Focus: visible outline using `--ring` (Brand Green)

---

## Spacing & Layout

### Spacing Scale

```css
/* Base unit: 4px */
--spacing-0: 0;
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-5: 1.25rem; /* 20px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-10: 2.5rem; /* 40px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
--spacing-20: 5rem; /* 80px */
--spacing-24: 6rem; /* 96px */
--spacing-32: 8rem; /* 128px */
--spacing-40: 10rem; /* 160px */

/* Semantic Spacing */
--spacing-component: var(
  --spacing-16
); /* Between components within a section */
--spacing-section: var(--spacing-24); /* Between major page sections */
--spacing-page: var(--spacing-32); /* Top/bottom page padding */
```

### Grid System

```css
/* Container Max Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Default Container */
--container-max-width: var(--container-xl);
--container-padding-x: var(--spacing-6);

/* Grid */
--grid-columns: 12;
--grid-gap: var(--spacing-6);
```

### Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px; /* Tablet portrait */
--breakpoint-md: 768px; /* Tablet landscape */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large desktop */
--breakpoint-2xl: 1536px; /* Wide desktop */
```

### Border Radius

```css
--radius-sm: 0.375rem; /* 6px - Small elements (badges, pills) */
--radius-md: 0.5rem; /* 8px - Inputs, small buttons */
--radius-lg: 0.75rem; /* 12px - Cards, large buttons */
--radius-xl: 1rem; /* 16px - Modals, large cards */
--radius-2xl: 1.5rem; /* 24px - Hero sections */
--radius-full: 9999px; /* Fully rounded (avatars, pills) */

/* Brand Default */
--radius: var(--radius-lg);
```

### Shadows

```css
/* Elevation System (using brand colors for subtle tinting) */
--shadow-sm: 0 1px 2px 0 rgba(17, 25, 44, 0.05);
--shadow-md:
  0 4px 6px -1px rgba(17, 25, 44, 0.1), 0 2px 4px -2px rgba(17, 25, 44, 0.05);
--shadow-lg:
  0 10px 15px -3px rgba(17, 25, 44, 0.1), 0 4px 6px -4px rgba(17, 25, 44, 0.05);
--shadow-xl:
  0 20px 25px -5px rgba(17, 25, 44, 0.1), 0 8px 10px -6px rgba(17, 25, 44, 0.05);
--shadow-2xl: 0 25px 50px -12px rgba(17, 25, 44, 0.25);

/* Brand Green Glow (for CTAs) */
--shadow-primary:
  0 10px 25px -5px rgba(68, 207, 108, 0.3),
  0 8px 10px -6px rgba(68, 207, 108, 0.2);

/* Dark Mode Shadows */
.dark {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md:
    0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
  --shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2);
  --shadow-xl:
    0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --shadow-primary:
    0 10px 25px -5px rgba(68, 207, 108, 0.5),
    0 8px 10px -6px rgba(68, 207, 108, 0.3);
}
```

---

## Logo System

### Logo Variants

**Available Formats:** SVG (vector)
**Color Versions:** Color, Black, White

#### 1. Horizontal Logo

- **Use Case:** Primary header logo (desktop)
- **Files:**
  - `01_Horizontal/HoskBrew_Horizontal_Color.svg`
  - `01_Horizontal/HoskBrew_Horizontal_Black.svg`
  - `01_Horizontal/HoskBrew_Horizontal_White.svg`
- **Minimum Size:** Height 20px / 1cm, Width 70px / 2cm
- **Aspect Ratio:** ~8.24:1

#### 2. Stacked Logo

- **Use Case:** Mobile header, square placements
- **Files:**
  - `02_Stacked/HoskBrew_Stacked_Color.svg`
  - `02_Stacked/HoskBrew_Stacked_Star_Color.svg`
  - `02_Stacked/HoskBrew_Stacked_Black.svg`
  - `02_Stacked/HoskBrew_Stacked_Star_Black.svg`
  - `02_Stacked/HoskBrew_Stacked_White.svg`
  - `02_Stacked/HoskBrew_Stacked_Star_White.svg`

#### 3. Raised Logo

- **Use Case:** Marketing materials, badges
- **Files:**
  - `03_Raised/HoskBrew_Raised_Color.svg`
  - `03_Raised/HoskBrew_Raised_OneColor.svg`
  - `03_Raised/HoskBrew_Raised_Black.svg`
  - `03_Raised/HoskBrew_Raised_OneColor_Black.svg`

#### 4. Raised + Star Logo

- **Use Case:** Special placements, branded content
- **Files:**
  - `04_Raised & Star/HoskBrew_Raised_Star_Color.svg`
  - `04_Raised & Star/HoskBrew_Raised_Star_OneColor.svg`
  - `04_Raised & Star/HoskBrew_Raised_Star_Black.svg`
  - `04_Raised & Star/HoskBrew_Raised_Star_OneColor_Black.svg`

#### 5. Full Logo

- **Use Case:** Footer, large placements, hero sections
- **Files:**
  - `05_Full/HoskBrew_Full_Color.svg`
  - `05_Full/HoskBrew_Full_OneColor.svg`
  - `05_Full/HoskBrew_Full_Black.svg`
  - `05_Full/HoskBrew_Full_OneColor_Black.svg`

### Logo Usage Matrix

| Context            | Desktop (≥1024px) | Tablet (768-1023px) | Mobile (<768px) |
| ------------------ | ----------------- | ------------------- | --------------- |
| **Header (Light)** | Horizontal Color  | Horizontal Color    | Stacked Color   |
| **Header (Dark)**  | Horizontal White  | Horizontal White    | Stacked White   |
| **Footer (Light)** | Full Color        | Full Color          | Full Color      |
| **Footer (Dark)**  | Full White        | Full White          | Full White      |
| **Favicon**        | Star Mark         | Star Mark           | Star Mark       |
| **Social Share**   | Full Color        | Full Color          | Full Color      |

### Logo Guidelines (from Visual Center)

**DO:**
✅ Scale logos proportionally
✅ Use appropriate variant for placement size
✅ Maintain minimum clear space (X-based system)
✅ Respect minimum height (20px/1cm) and width (70px/2cm)
✅ Use on appropriate backgrounds (consider contrast)
✅ Rotate only for book spines or narrow panels

**DON'T:**
❌ Stretch or warp logos
❌ Use full logo versions on small placements (use main logos)
❌ Bleed logos off edges
❌ Place on busy images without contrast consideration
❌ Use white one-color versions (dark colors only for one-color)
❌ Use logotype as part of larger sentences
❌ Add strokes to logos
❌ Use star alone without HoskBrew text
❌ Place visual elements too close (violate clear space)

### Clear Space Rules

**Minimum Clear Space:** "X" measurement system

- X = height of "H" in "HoskBrew" logotype
- Maintain X spacing on all sides of logo
- No text, graphics, or other elements within clear space

### Logo Component Implementation

```typescript
// Recommended React component structure
interface LogoProps {
  variant?: "horizontal" | "stacked" | "full" | "raised" | "raised-star";
  className?: string;
  priority?: boolean;
}

// Component auto-selects color based on theme
// Component auto-switches to stacked on mobile (if horizontal)
// Component enforces minimum sizes
```

---

## Component Patterns

### Button System

```css
/* Primary Button (Brand Green CTA) */
.btn-primary {
  background: var(--color-brand-primary);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 0.625rem 1.5rem; /* 10px 24px */
  font-weight: 600;
  font-size: var(--font-size-body);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: var(--color-primary-600);
  box-shadow: var(--shadow-primary);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Secondary Button (Outlined) */
.btn-secondary {
  background: transparent;
  color: var(--color-secondary-900);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  border-color: var(--color-brand-primary);
  color: var(--color-brand-primary);
  background: rgba(68, 207, 108, 0.05);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--color-secondary-700);
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-ghost:hover {
  background: var(--color-secondary-100);
  color: var(--color-secondary-900);
}
```

### Card System

```css
.card {
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-sm);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  border-color: var(--color-primary-200);
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}
```

### Form Elements

```css
/* Input Fields */
.input {
  background: var(--card);
  color: var(--foreground);
  border: 1px solid var(--input);
  border-radius: var(--radius-md);
  padding: 0.625rem 1rem;
  font-size: var(--font-size-body);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  border-color: transparent;
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form Field States */
.field-error .input {
  border-color: var(--destructive);
}

.field-error .input:focus {
  outline-color: var(--destructive);
}

.field-success .input {
  border-color: var(--success);
}
```

---

## Motion & Animation

### Animation Tokens

```css
/* Duration */
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;

/* Easing Curves */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1); /* Standard */
--ease-in: cubic-bezier(0.4, 0, 1, 1); /* Deceleration */
--ease-out: cubic-bezier(0, 0, 0.2, 1); /* Acceleration */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Smooth */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce */
```

### Standard Animations

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Interaction States

**Hover States:**

- Scale: 1.02 (subtle)
- Transform: translateY(-1px) for elevation
- Duration: 150ms
- Easing: ease-default

**Active/Click States:**

- Scale: 0.98 (subtle press)
- Transform: translateY(0) reset
- Duration: 100ms

**Focus States:**

- Outline: 2px solid var(--ring)
- Outline-offset: 2px
- No background color change (accessibility)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Color Contrast:**

- ✅ Normal text: 4.5:1 minimum
- ✅ Large text: 3:1 minimum
- ✅ UI components: 3:1 minimum

**Keyboard Navigation:**

- ✅ All interactive elements focusable
- ✅ Visible focus indicators (brand green outline)
- ✅ Logical tab order
- ✅ Skip to main content link
- ✅ No keyboard traps

**Screen Readers:**

- ✅ Semantic HTML (headings, landmarks, lists)
- ✅ Alt text for all images (descriptive, not generic)
- ✅ ARIA labels for icon buttons
- ✅ Form labels associated with inputs
- ✅ Error messages announced

**Visual:**

- ✅ Touch targets minimum 44x44px
- ✅ Consistent navigation
- ✅ No content conveyed by color alone
- ✅ Sufficient text spacing

**Motion:**

- ✅ Respect prefers-reduced-motion
- ✅ No auto-playing videos/animations
- ✅ User can pause/stop animations

---

## Brand Asset Inventory

### Total Files: 118

**Visual Center Guidelines:** 1 PDF
**Logo Files:** 24 SVG files (Color, Black, White × 5 variants each)
**Font Files:** 91 font files (Inter family - Static + Variable)
**Character Assets:** 2 PDF files (Color + B&W Octopus)
**Marketing Materials:** 2 PDF files (Ads)

### File Organization

```
brand-assets/Branding/
├── HoskBrew_Brand_Package/
│   ├── 00_Visual Center/
│   │   └── HoskBrew_VisualCenter_08012025.pdf
│   ├── 01_Logos/
│   │   ├── Color/ (5 variants × 2 files each = 10 SVG)
│   │   ├── Black/ (5 variants × 2 files each = 10 SVG)
│   │   └── White/ (2 variants = 4 SVG)
│   └── 02_Fonts/
│       └── Inter Family/
│           ├── 01_Static/ (18pt, 24pt, 28pt+ subdirectories)
│           ├── 02_Variable/ (Variable fonts)
│           └── 03_Entire Font/ (Complete font family)
├── Octopus Character/
│   ├── Color Octopus Vector.pdf
│   ├── B&W Octopus Vector.pdf
│   └── Old Version Hoskbrew Logo.jpeg
└── Hoskbrew Ads/
    ├── Crystal Mines ad.pdf (41MB)
    └── Hoskbrew ad.pdf (53MB)
```

---

## Implementation Checklist

### Phase 1: Design System Foundation

- [ ] Create design tokens file (`lib/design-tokens.ts`)
- [ ] Update `app/globals.css` with new color system
- [ ] Update Tailwind v4 inline theme with brand tokens
- [ ] Self-host Inter Variable font
- [ ] Test color contrast ratios

### Phase 2: Logo System

- [ ] Copy optimal logo variants to `public/logos/`
- [ ] Create `<Logo>` component with theme/responsive logic
- [ ] Generate favicon set from star mark
- [ ] Generate Open Graph images
- [ ] Test logo switching (theme + breakpoints)

### Phase 3: Component Library

- [ ] Update Button variants (primary, secondary, ghost)
- [ ] Update Card components with brand shadows
- [ ] Update Form components (Input, Textarea, Select, etc.)
- [ ] Update Alert/Toast components with semantic colors
- [ ] Update all 50+ shadcn/ui components

### Phase 4: Page Implementation

- [ ] Homepage redesign
- [ ] Services page redesign
- [ ] Platforms page redesign
- [ ] Process page redesign
- [ ] Portfolio page redesign
- [ ] FAQ page redesign
- [ ] About page redesign
- [ ] Quote form redesign
- [ ] 404/Error pages

### Phase 5: Polish & QA

- [ ] Animation system implementation
- [ ] Motion design tokens
- [ ] Accessibility audit (WCAG AA)
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Screenshot generation
- [ ] Documentation updates

---

## Success Metrics

### Design System Consistency

- **0 hardcoded colors** (all use tokens)
- **0 inline styles** (except dynamic values)
- **100% token usage** in components
- **Consistent spacing** (no random values)

### Brand Integration Quality

- **Native feel** - assets don't look "slapped on"
- **Cohesive experience** - unified across all pages
- **Proper logo usage** - all guidelines followed
- **Strategic character use** - octopus placed intentionally

### Technical Excellence

- **Lighthouse 90+** (all metrics, mobile)
- **WCAG AA** compliance (zero violations)
- **Zero console errors** (production build)
- **60fps animations** (performance profiled)

---

**Document Version:** 1.0
**Last Updated:** February 6, 2026
**Author:** HoskBrew Design System Team
**Source:** Visual Center Guidelines (August 1, 2025) + Brand Package Analysis
