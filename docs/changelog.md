# Changelog

All notable changes to the Tecno Mart project will be documented in this file.

## [Unreleased]

### Added
- Git repository initialization and connection to remote.
- `docs/` directory for strict architectural and design system documentation.
- `docs/01-architecture-migration.md` defining the Next.js migration strategy.
- `docs/02-design-system-extended.md` defining the expanded, industry-standard design system requirements.
- Full React component migration of the homepage layout (`Header`, `Hero`, `TrustMarquee`, `Categories`, `Stats`, `LaptopCollection`, `PhoneShowcase`, `Services`, `RefurbishedTrust`, `Accessories`, `WhyChooseUs`, `Brands`, `Testimonials`, `FAQ`, `ContactAndFooter`).
- `lenis` integration for global smooth scrolling wrapped in `SmoothScrollProvider`.
- `@gsap/react` hooks to replace manual DOM-based GSAP animations.

### Removed
- 3D models (`.glb`, `.fbx`, `.obj`) and `<model-viewer>` elements and logic across the site to prioritize performance.
- Custom DOM cursor (`.cursor-dot`, `.cursor-ring`) script and styling.
- `scratch/` directory.

### Changed
- Converted the legacy `index.html` static layout to modular React components inside the Next.js App Router (`app/page.tsx`).
- Resolved IDE import path errors by using `@/components/` absolute paths.
