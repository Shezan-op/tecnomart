# Tecno Mart Architecture Migration

## Overview
This document tracks the architectural shift from a static HTML/CSS/JS site to a modern, production-grade Next.js application.

## Goals
- **Framework:** Next.js 14 (App Router) with React.
- **Styling:** Vanilla CSS imported globally (to preserve the highly-customized Apple-level design system tokens and glassmorphism effects) + CSS Modules for component-level styling.
- **SEO & Performance:** Leverage Next.js SSR and optimized asset loading.
- **Animation:** Re-integrate GSAP animations inside React components (`@gsap/react`). Smooth scrolling powered by Lenis. *Note: 3D models and custom cursor were explicitly removed to streamline performance.*

## Steps Taken
1. Initialized Git repository and connected to `https://github.com/Shezan-op/tecnomart`.
2. Created the `docs/` folder for strict documentation.
3. Migrated static files to `_legacy_static/`.
4. Extracted all homepage sections into modular React components in `app/page.tsx` using GSAP ScrollTrigger.
5. Implemented `lenis` smooth scrolling globally.
6. Removed `model-viewer`, 3D `.glb`/`.fbx` assets, and custom cursor logic to optimize the interface.
