# Tecno Mart Architecture Migration

## Overview
This document tracks the architectural shift from a static HTML/CSS/JS site to a modern, production-grade Next.js application.

## Goals
- **Framework:** Next.js 14 (App Router) with React.
- **Styling:** Vanilla CSS imported globally (to preserve the highly-customized Apple-level design system tokens and glassmorphism effects) + CSS Modules for component-level styling.
- **SEO & Performance:** Leverage Next.js SSR and optimized asset loading.
- **3D & Animation:** Re-integrate `<model-viewer>` and GSAP animations inside React components (`@gsap/react`, `next/dynamic`).

## Steps Taken
1. Initialized Git repository and connected to `https://github.com/Shezan-op/tecnomart`.
2. Created the `docs/` folder for strict documentation.
3. Prepared migration of static files to `_legacy_static/`.
