# Tecno Mart Design System (Extended for Industry Standards)

While the initial design system defined a strong visual language (Apple-level aesthetic, dark glassmorphism, precise typography), a complete industry-standard system requires comprehensive UI components for scalable application development.

## 1. Form Controls & Inputs
Forms are critical for eCommerce. The system now includes definitions for:
- **Text Inputs:** Solid background `var(--bg-elevated)` with `var(--hairline)` border. Focus states transition to `var(--hairline-strong)` (blue) with a subtle `box-shadow: 0 0 0 3px rgba(59,130,246,0.15)`.
- **Selects / Dropdowns:** Custom dropdown carets, glassmorphism list menus to match navigation.
- **Checkboxes & Toggles:** Apple-style pill toggles (green for active `var(--success)`, dark for inactive).
- **Validation States:** Red borders (`var(--error)`) and helper text for invalid inputs.

## 2. Feedback UI
- **Toasts / Snackbars:** Floating notifications in the bottom-right corner for cart additions and success messages. Uses the `var(--bg-glass)` styling with high z-index (`z-overlay`).
- **Modals / Dialogs:** Center-screen overlays with a dark, blurred backdrop (`backdrop-filter: blur(8px)`). Modal container uses `var(--bg-panel)` and heavy shadow `var(--shadow-standard)`.
- **Loading States:** Skeleton loaders that shimmer using `linear-gradient` over `var(--bg-elevated)`, and spinner rings for buttons.

## 3. Layout Grid & Spacing
- **Grid:** A standard 12-column CSS Grid setup (`gap: 20px`) for complex data display and product grids.
- **Spacing:** Enforcing an 8px baseline (`var(--space-2xs)` = 8px, `var(--space-xs)` = 12px, etc.) to maintain vertical rhythm.

## 4. Semantic Elevation
- **Level 1 (Base):** `var(--bg-base)` - The deep background.
- **Level 2 (Panel):** `var(--bg-panel)` - Sections and large cards.
- **Level 3 (Elevated):** `var(--bg-elevated)` - Modals, floating elements, inputs.
- **Level 4 (Glass):** `var(--bg-glass)` - Fixed headers, floating navigation, overlays.
