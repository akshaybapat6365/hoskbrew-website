# HoskBrew Brand Asset Inventory

**Complete catalog of 118-file brand package**

---

## Summary

**Total Files:** 118
**Total Size:** ~126 MB (mostly ad PDFs)
**Source:** HoskBrew Brand Package delivered August 1, 2025

---

## File Breakdown by Category

### 1. Guidelines & Documentation (1 file)

| File                                                  | Size    | Purpose                                                             |
| ----------------------------------------------------- | ------- | ------------------------------------------------------------------- |
| `00_Visual Center/HoskBrew_VisualCenter_08012025.pdf` | 1014 KB | Complete brand guidelines - colors, typography, logo usage, spacing |

**Contents:** Brand mission, logo guidelines, minimum sizes, clear space rules, logo family, usage do's/don'ts, color palette, typography system, contact information.

---

### 2. Logo Files (22 SVG files)

#### Color Logos (8 files)

| File                                                 | Size   | Variant                        |
| ---------------------------------------------------- | ------ | ------------------------------ |
| `01_Horizontal/HoskBrew_Horizontal_Color.svg`        | 3.9 KB | **PRIMARY** - Header (desktop) |
| `02_Stacked/HoskBrew_Stacked_Color.svg`              | 3.8 KB | **MOBILE** - Header (mobile)   |
| `02_Stacked/HoskBrew_Stacked_Star_Color.svg`         | 4.0 KB | Special - with star emphasis   |
| `03_Raised/HoskBrew_Raised_Color.svg`                | 11 KB  | Marketing materials            |
| `03_Raised/HoskBrew_Raised_OneColor.svg`             | 11 KB  | One-color raised               |
| `04_Raised & Star/HoskBrew_Raised_Star_Color.svg`    | 12 KB  | Branded content                |
| `04_Raised & Star/HoskBrew_Raised_Star_OneColor.svg` | 11 KB  | One-color raised + star        |
| `05_Full/HoskBrew_Full_Color.svg`                    | 6.9 KB | **FOOTER** - Large placements  |
| `05_Full/HoskBrew_Full_OneColor.svg`                 | 6.1 KB | One-color full                 |

**Colors Used:**

- `#44CF6C` - Brand Green (star)
- `#11192C` - Dark Blue (logotype)
- `#007AFF` - Bright Blue (star accent)
- `#FFFFFF` - White (background elements)

#### Black Logos (9 files)

| File                                                       | Size   | Usage                   |
| ---------------------------------------------------------- | ------ | ----------------------- |
| `01_Horizontal/HoskBrew_Horizontal_Black.svg`              | 3.7 KB | Print, monochrome       |
| `02_Stacked/HoskBrew_Stacked_Black.svg`                    | 3.7 KB | Mobile, monochrome      |
| `02_Stacked/HoskBrew_Stacked_Star_Black.svg`               | 3.9 KB | Special, monochrome     |
| `03_Raised/HoskBrew_Raised_Black.svg`                      | 11 KB  | Marketing, monochrome   |
| `03_Raised/HoskBrew_Raised_OneColor_Black.svg`             | 11 KB  | One-color raised        |
| `04_Raised & Star/HoskBrew_Raised_Star_Black.svg`          | 11 KB  | Branded, monochrome     |
| `04_Raised & Star/HoskBrew_Raised_Star_OneColor_Black.svg` | 11 KB  | One-color raised + star |
| `05_Full/HoskBrew_Full_Black.svg`                          | 6.4 KB | Footer, monochrome      |
| `05_Full/HoskBrew_Full_OneColor_Black.svg`                 | 6.1 KB | One-color full          |

#### White Logos (4 files)

| File                                                                                | Size   | Usage                         |
| ----------------------------------------------------------------------------------- | ------ | ----------------------------- |
| `01_Horizontal/HoskBrew_Horizontal_White.svg`                                       | 3.8 KB | **DARK MODE** - Header        |
| `02_Stacked/HoskBrew_Stacked_White.svg`                                             | 3.7 KB | **DARK MODE** - Mobile header |
| `02_Stacked/HoskBrew_Stacked_Star_White.svg`                                        | 4.0 KB | Dark mode, special            |
| _(Note: White versions not available for all variants - use full/raised carefully)_ |

**Total Logo Files:** 22 SVG (all optimized vectors, small file sizes)

---

### 3. Font Files (91 files)

#### Inter Variable Fonts (2 files) - **RECOMMENDED FOR USE**

| File                                                  | Size   | Format                    |
| ----------------------------------------------------- | ------ | ------------------------- |
| `02_Variable/Inter-VariableFont_opsz,wght.ttf`        | 855 KB | Variable (weight 100-900) |
| `02_Variable/Inter-Italic-VariableFont_opsz,wght.ttf` | 884 KB | Variable Italic           |

**Recommendation:** Use Variable fonts for optimal performance and flexibility.

#### Static Fonts (89 files)

**18pt & Below** (30 files): Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black (+ Italic variants)
**24pt** (30 files): Same weight range as 18pt
**28pt & Above** (29 files): Same weight range

**File Size:** ~335-341 KB each (static fonts)

**Total Font Files:** 91 TTF files (2 variable + 89 static)

**Implementation Decision:** Self-host Inter Variable fonts for website (2 files, ~1.7 MB total).

---

### 4. Character Assets (3 files)

| File                                               | Size   | Purpose                             |
| -------------------------------------------------- | ------ | ----------------------------------- |
| `Octopus Character/Color Octopus Vector.pdf`       | 164 KB | **PRIMARY** - Light mode character  |
| `Octopus Character/B&W Octopus Vector.pdf`         | 80 KB  | **DARK MODE** - Dark mode character |
| `Octopus Character/Old Version Hoskbrew Logo.jpeg` | 337 KB | Archive (do not use)                |

**Usage Opportunities:**

- Hero section background element
- 404 page featured character
- Loading state animations (tentacles)
- Section dividers (peeking octopus)
- Testimonial design element
- Easter eggs (hover interactions)

**Format:** PDF vectors (will need extraction to SVG for web use)

---

### 5. Marketing Materials (2 files)

| File                                | Size  | Content                                  |
| ----------------------------------- | ----- | ---------------------------------------- |
| `Hoskbrew Ads/Hoskbrew ad.pdf`      | 53 MB | Primary brand advertisement              |
| `Hoskbrew Ads/Crystal Mines ad.pdf` | 41 MB | Product-specific ad (Crystal Mines game) |

**Analysis Needed:**

- [ ] Extract copywriting style and voice
- [ ] Identify messaging patterns
- [ ] Document value propositions
- [ ] List CTAs and conversion language
- [ ] Analyze visual layout and hierarchy

**Note:** Large file sizes (94 MB combined) - likely high-resolution print-ready assets.

---

## Website Integration Priority

### Phase 1: Critical Assets (Must-Have)

1. ✅ **Design System Spec** - Extracted and documented
2. ⏳ **Primary Logos** - Copy to `public/logos/`:
   - Horizontal Color (desktop light mode)
   - Horizontal White (desktop dark mode)
   - Stacked Color (mobile light mode)
   - Stacked White (mobile dark mode)
   - Full Color (footer)
3. ⏳ **Inter Variable Fonts** - Self-host in `public/fonts/`:
   - `Inter-VariableFont_opsz,wght.ttf`
   - `Inter-Italic-VariableFont_opsz,wght.ttf`

### Phase 2: Secondary Assets (Nice-to-Have)

4. ⏳ **Favicon Generation** - Extract star mark from Full logo
5. ⏳ **Octopus Character** - Extract from PDFs to SVG for web use
6. ⏳ **Open Graph Images** - Generate social share graphics

### Phase 3: Content Enhancement (Polish)

7. ⏳ **Marketing Copy Analysis** - OCR and analyze ad PDFs
8. ⏳ **Visual Style Guide** - Document illustration style from ads

---

## File Access Commands

```bash
# Website root
cd /home/mostltyharmless/hoskbrew-website/my-app

# Brand assets root
cd brand-assets/Branding/

# Quick access to key files
VISUAL_CENTER="brand-assets/Branding/HoskBrew_Brand_Package/00_Visual Center/HoskBrew_VisualCenter_08012025.pdf"
LOGO_COLOR="brand-assets/Branding/HoskBrew_Brand_Package/01_Logos/Color/"
LOGO_WHITE="brand-assets/Branding/HoskBrew_Brand_Package/01_Logos/White/"
FONTS="brand-assets/Branding/HoskBrew_Brand_Package/02_Fonts/Inter Family/02_Variable/"
OCTOPUS="brand-assets/Branding/Octopus Character/"
ADS="brand-assets/Branding/Hoskbrew Ads/"
```

---

## Quality Assurance

### Logo SVG Verification

✅ All SVG files are valid vectors
✅ File sizes optimized (3.7-12 KB)
✅ No embedded raster images
✅ Clean viewBox attributes
✅ Proper color definitions (hex codes)

### Font File Verification

✅ Variable fonts include full weight range (100-900)
✅ Static fonts cover all necessary weights
✅ Italic variants available
✅ File sizes reasonable (~335 KB static, ~870 KB variable)

### Character Asset Notes

⚠️ PDFs need conversion to SVG for web use
✅ Separate color/B&W versions for light/dark themes
❌ Old logo version should not be used

### Marketing Material Notes

⚠️ Large file sizes (41-53 MB) - for reference only, not web deployment
⏳ Requires OCR for text extraction
⏳ Requires visual analysis for style guide

---

## Next Steps (Wave 1)

1. **Logo System Agent** - Copy optimal logos to `public/`, create component
2. **Design Token Agent** - Implement color system in Tailwind v4
3. **Font Agent** - Self-host Inter Variable, update font configuration
4. **Component Agent** - Update all shadcn/ui components with brand tokens
5. **Content Agent** - Analyze marketing materials for voice/messaging

---

**Document Version:** 1.0
**Created:** February 6, 2026
**Source:** Brand asset analysis of 118-file package
