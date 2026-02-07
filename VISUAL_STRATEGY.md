# HoskBrew Visual Strategy

## Brand Visual Identity

### Core Visual Philosophy

HoskBrew's visual identity combines **retro gaming nostalgia** with **modern manufacturing precision**. The aesthetic balances playful creativity with professional capability—appealing to indie developers who take their craft seriously but don't take themselves too seriously.

### Visual Hierarchy

1. **Primary:** Brand Green (#44CF6C) - energy, growth, play
2. **Secondary:** Dark Blue (#11192C) - trust, depth, night sky/cosmic
3. **Accent:** Bright Blue (#007AFF) - technology, links, information
4. **Neutrals:** Clean grays and whites for balance and readability

---

## The Octopus Character

### Character Overview

The octopus is HoskBrew's mascot and visual anchor—a multi-talented creature representing the company's diverse capabilities (8 arms = many skills).

### Character Personality

- **Playful but Capable:** Not cartoonish, not corporate—competently playful
- **Retro-Modern:** Classic mascot appeal with contemporary execution
- **Versatile:** Can adapt to various contexts while maintaining brand recognition
- **Friendly:** Approachable and welcoming to the community

### Usage Guidelines

#### When to Use the Octopus

- **Homepage Hero:** As a welcoming brand ambassador
- **Empty States:** Friendly 404 pages, loading states, "coming soon" notices
- **Success States:** Order confirmations, form submissions, milestone celebrations
- **Social Media:** Shareable graphics, announcements
- **Marketing Materials:** Ads, email headers, promotional content
- **Decorative Elements:** Subtle background patterns, section dividers

#### When NOT to Use the Octopus

- **Product Detail Pages:** Don't distract from technical specifications
- **Quote/Checkout Flow:** Keep focus on conversion actions
- **Documentation:** Maintain professional clarity
- **Error/Critical States:** Avoid playful tone for serious issues

### Octopus Variants

#### 1. Full Color Octopus

- **Best for:** Hero sections, primary brand moments
- **Background:** Light/white backgrounds preferred
- **Minimum size:** 100px width
- **Clear space:** Equal to tentacle height on all sides

#### 2. B&W Octopus

- **Best for:** Subtle backgrounds, watermark effects, single-color applications
- **Opacity:** Can range from 10% (watermark) to 100% (primary)
- **Color override:** Can be tinted with brand colors when needed

#### 3. One-Color Variant

- **Best for:** Icon usage, small sizes, technical contexts
- **Colors:** Use brand-primary (green) or brand-secondary (dark blue)
- **Sizes:** Can scale down to 48px for icons

### Placement Guidelines

#### Safe Zones

- **Minimum margin:** 20px from text content
- **Maximum coverage:** 40% of viewport width on desktop
- **Mobile:** Scale down to 60% width, center or left-aligned

#### Composition Patterns

- **Hero placement:** Right side, looking toward content
- **Section breaks:** Bottom corner, partially off-screen
- **Background elements:** Low opacity (5-15%), large scale
- **Card accents:** Small (80-120px), top-right corner

---

## Illustration Style

### Overall Approach

**Retro-inspired vector illustration** with modern execution:

- Clean lines and geometric shapes
- Limited color palette (brand colors + 2-3 accents)
- Slight isometric or flat perspective
- Subtle gradients only when necessary

### Service Illustrations

Each service should have a custom illustration following these principles:

#### Manufacturing/Cartridge Production

- **Motifs:** Cartridges, circuit traces, assembly lines
- **Colors:** Green primary, metallic grays, gold accents
- **Style:** Technical precision with slight retro pixel influence

#### Packaging

- **Motifs:** Boxes, manuals, shrink wrap, shelf appeal
- **Colors:** Full brand palette, white highlights
- **Style:** Clean product photography alternative

#### Console Repair

- **Motifs:** Open consoles, tools, screwdrivers, sparks
- **Colors:** Blue primary (trust), amber warning accents
- **Style:** Technical diagrams meet workshop aesthetic

#### Parts & Components

- **Motifs:** Schematics, PCBs, chips, capacitors
- **Colors:** Dark blue primary, green traces, gold pins
- **Style:** Technical blueprint aesthetic

### Platform Illustrations

Each retro platform should have a distinctive visual treatment:

- **NES:** Classic gray box aesthetic, 8-bit influence
- **SNES:** Purple/gray curves, Mode 7 sophistication
- **Game Boy:** Monochrome + green tint, pixel perfection
- **Genesis:** Black grid, blast processing energy
- **Add visual variety while maintaining brand cohesion**

---

## Photography Guidelines

### When to Use Photography

- **Product shots:** Physical cartridges, packaging, components
- **Process documentation:** Manufacturing stages, quality control
- **Community:** Events, satisfied customers (with permission)
- **Lifestyle:** Retro gaming setups, collection displays

### Photography Style

- **Lighting:** Natural or soft studio, avoid harsh shadows
- **Backgrounds:** Clean, neutral, or contextual (wood desk, shelf)
- **Angles:** Slight isometric for products, eye-level for people
- **Editing:** Slight warmth, medium contrast, true-to-color
- **Resolution:** Always high-res (minimum 1200px wide)

### Product Photography Specifics

- **Cartridges:** 45-degree angle showing label and connector
- **Packaging:** Front + spine view, include any extras (manuals, etc.)
- **Components:** Macro shots showing detail and quality
- **Group shots:** Consistent lighting, spacing, and background

---

## Visual Hierarchy & Layout

### Section Patterns

#### Hero Sections

- **Height:** 80-100vh (full viewport)
- **Content:** Left-aligned text, right-aligned octopus or product imagery
- **Background:** Brand gradient or subtle pattern
- **CTA:** Prominent, contrasting button

#### Content Sections

- **Layout:** Alternating left/right imagery and text
- **Spacing:** Generous padding (80-120px vertical)
- **Dividers:** Subtle lines or octopus silhouette accents

#### Card Patterns

- **Border radius:** 12px (consistent with brand)
- **Shadow:** Subtle (0 4px 6px rgba(0,0,0,0.1))
- **Hover:** Lift effect + shadow increase
- **Icon placement:** Top-left or center, 48-64px

### Grid System

- **Desktop:** 12-column grid, max-width 1280px
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutters:** 24px desktop, 16px mobile

---

## Animation & Motion

### Brand Motion Principles

- **Timing:** 300-500ms for most transitions
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) for natural feel
- **Personality:** Smooth and confident, not bouncy or playful
- **Performance:** 60fps target, use transform and opacity

### Octopus Animations

#### Idle State (Hero)

- Subtle floating/bobbing motion
- 3-4 second loop
- TranslateY ±10px with slight rotation (±2deg)

#### Hover Interactions

- Scale to 1.05 with 200ms transition
- Optional: Brief tentacle wave

#### Scroll Triggers

- Fade in from bottom with 20px translate
- Stagger children (cards, features) by 100ms

### Page Transitions

- **Enter:** Fade in + slight scale from 0.98
- **Exit:** Fade out quickly (150ms)
- **Loading:** Octopus + pulsing dots

### Micro-interactions

- **Buttons:** Scale 0.98 on active, shadow lift on hover
- **Cards:** Lift 4px + shadow increase on hover
- **Links:** Underline slide-in from left
- **Form inputs:** Border color transition to brand-primary

---

## Background Patterns & Textures

### Subtle Patterns

Use for section backgrounds to add depth without distraction:

#### 1. Circuit Board Pattern

- **Usage:** Services/technical sections
- **Opacity:** 5-8%
- **Color:** Brand secondary or muted gray
- **Scale:** Large (tiles at 200px+)

#### 2. Pixel Grid

- **Usage:** Retro gaming sections
- **Opacity:** 3-5%
- **Color:** Brand primary
- **Scale:** 4px grid

#### 3. Wave/Flow Pattern

- **Usage:** Homepage hero, CTA sections
- **Opacity:** 10-15%
- **Color:** Gradient between brand colors
- **Animation:** Slow horizontal drift (30s loop)

### Gradients

#### Primary Gradient

```css
background: linear-gradient(135deg, #44cf6c 0%, #11192c 100%);
```

Use for: CTA buttons, accent backgrounds, loading states

#### Subtle Background Gradient

```css
background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
```

Use for: Section transitions, hero backgrounds

---

## Iconography

### Style

- **Library:** Lucide React (consistent with shadcn/ui)
- **Custom additions:** Retro gaming specific icons
- **Stroke width:** 1.5px-2px
- **Size:** 16px (inline), 24px (UI), 48px (features)

### Custom Icon Needs

Create SVG icons for:

- Cartridge (NES, SNES, Game Boy styles)
- Gamepad (retro controller silhouette)
- Circuit/pcb traces
- Gear/tools (for repair)
- Octopus tentacle (brand accent)

### Icon Usage

- **Inline text:** 16px, aligned with text baseline
- **Buttons:** 20px, left of text with 8px gap
- **Feature cards:** 48px, centered or top-aligned
- **Empty states:** 64-96px, muted color

---

## Responsive Visual Adaptations

### Desktop (1280px+)

- Full octopus illustrations
- Side-by-side layouts
- Large hero typography
- Generous spacing

### Tablet (768px-1279px)

- Scaled illustrations (70% size)
- Stacked layouts where needed
- Maintained typography scale
- Reduced spacing (80%)

### Mobile (<768px)

- Simplified illustrations or icons
- Single column layouts
- Focused hero messages (shorter)
- Touch-optimized spacing (44px min)
- Octopus as icon or removed from hero

---

## Accessibility

### Color Contrast

- All text meets WCAG AA (4.5:1 minimum)
- Interactive elements meet AAA (7:1) where possible
- Don't rely on color alone for meaning

### Motion

- Respect `prefers-reduced-motion`
- Provide static alternatives for animated content
- Essential animations should be subtle

### Images

- All images have descriptive alt text
- Decorative images use empty alt ("")
- Complex diagrams have text alternatives

---

## Asset Management

### File Naming Convention

```
{component}-{variant}-{state}.{ext}
Examples:
- octopus-hero-color.svg
- octopus-icon-bw.svg
- service-cartridge-manufacturing.svg
- platform-nes-illustration.svg
```

### Directory Structure

```
public/
├── logos/           # Already implemented
├── octopus/         # Character variants
├── illustrations/   # Service & platform illustrations
├── icons/           # Custom icon set
└── patterns/        # Background patterns
```

### Optimization

- **SVGs:** Minified, no unnecessary groups
- **PNGs:** Compressed (TinyPNG or similar)
- **WebP:** Provide as preferred format with fallbacks
- **Lazy loading:** All non-hero images

---

## Implementation Checklist

### Immediate Needs

- [ ] Copy octopus SVGs to `/public/octopus/`
- [ ] Create service illustration concepts (5 services)
- [ ] Design platform icons (4 platforms minimum)
- [ ] Create circuit board background pattern
- [ ] Establish animation keyframe library

### Phase 2

- [ ] Photography shot list for products
- [ ] Custom icon set completion
- [ ] Pattern library expansion
- [ ] Video/animation guidelines

---

_Last Updated: February 2026_
_Based on: HoskBrew Visual Center August 1, 2025, Brand Package Assets_
