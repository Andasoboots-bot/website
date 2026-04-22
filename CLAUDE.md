# ANDASO - Bilingual Work Boots E-commerce

## Project Overview
**Brand:** ANDASO  
**Domain:** andaso.store  
**Hosting:** Cloudflare Pages/Workers  
**Products:** Cougar Paws professional roofing/work boots  

## Taste Skill Configuration
- **DESIGN_VARIANCE:** 6 (Asymmetric modern layout)
- **MOTION_INTENSITY:** 5 (Fluid CSS animations)
- **VISUAL_DENSITY:** 4 (Daily app mode with breathing space)
- **VIBE:** Editorial Luxury + Soft Structuralism
- **LAYOUT:** Asymmetrical Bento + Editorial Split

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Phosphor Icons (light)
- **Fonts:** Geist (display), Geist Mono (technical)
- **i18n:** next-intl

## Brand Colors
- **Primary:** #a41e21 (Wolverine red-inspired)
- **Background:** #FDFBF7 (warm cream)
- **Text:** #1a1a1a (off-black)
- **Accent:** #2d5a4a (forest green - work/nature)

## Site Structure
```
/                          # Home (Hero + Featured + Categories)
/[locale]/shop             # Shop all products
/[locale]/shop/[category]  # Category pages (boots, pads, covers)
/[locale]/product/[slug]   # Product detail
/[locale]/collections      # Collections
/[locale]/about            # About ANDASO
/[locale]/contact          # Contact page
/[locale]/cart             # Shopping cart
/[locale]/checkout         # Checkout flow
```

## Product Categories (Cougar Paws)
1. **Roofing Boots** - Safety boots with high traction
2. **Replacement Pads** - Grip pad replacements
3. **Covers & Accessories** - Boot covers, accessories
4. **Mountain Claws** - MC Original, Tan Stud variants

## Key Features
- Bilingual: English (en) / Spanish (es)
- Dual-image hover on product cards
- Mega-menu navigation
- Sticky scroll stack for collections
- Magnetic button physics
- Cart with floating sidebar
- Cloudflare Edge deployment

## References
- https://www.wolverine.com/US/en/home (layout inspiration)
- https://www.cougarpaws.com/collections/store (products)

## Design Rules (from taste-skill)
- NO Inter font - use Geist/Satoshi
- NO emojis - use Phosphor icons
- NO pure black - use Zinc-950
- NO 3-column generic grids
- Use Double-Bezel card architecture
- Section padding min py-24
- Spring physics for animations
- Mobile-first responsive
