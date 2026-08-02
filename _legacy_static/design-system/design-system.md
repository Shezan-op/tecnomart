# Tecnomart Design System

**Style:** Soft UI × Glassmorphism × Apple cleanliness × Futuristic tech.

## 1. Typography

**Headings:** Sora (600, 700, 800)
**Body/UI:** Inter (400, 500, 600)

## 2. Color System

### Backgrounds
- **Primary Background:** `#05070A` (Deep black with a cool blue tint)
- **Secondary Background:** `#0B1018` (Used for sections)
- **Card Background:** `#111827`
- **Elevated Card:** `#182235`

### Text
- **Primary:** `#F8FAFC`
- **Secondary:** `#B7C2D3`
- **Muted:** `#738196`
- **Disabled:** `#4B5563`

### Blue Accent
- **Primary:** `#3B82F6`
- **Hover:** `#60A5FA`
- **Pressed:** `#2563EB`
- **Glow:** `rgba(59,130,246,0.18)`

### Borders
- **Default:** `#273244`
- **Hover:** `#3B82F6`
- **Glass Border:** `rgba(255,255,255,0.08)`

### Status
- **Success:** `#22C55E`
- **Warning:** `#F59E0B`
- **Error:** `#EF4444`

## 3. Gradients

- **Hero Gradient:** `#05070A` -> `#0B1018` -> `#111827`
- **Blue Glow:** `#3B82F6` -> `#2563EB` (Used for buttons, icons, active elements)
- **Card Overlay:** `rgba(255,255,255,.03)` -> `rgba(255,255,255,.01)` (Subtle depth)

## 4. Shadows & Glows

- **Standard:** `0 12px 40px rgba(0,0,0,.45)`
- **Blue Glow:** `0 0 35px rgba(59,130,246,.18)`
- **Hover Glow:** `0 0 50px rgba(59,130,246,.25)`

## 5. Effects & Shapes

- **Glass Effect:** 
  ```css
  background: rgba(255,255,255,.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.08);
  ```
- **Border Radius:**
  - Buttons: `14px`
  - Cards: `22px`
  - Inputs: `14px`
  - Floating Panels: `28px`

## 6. Icons & Components

### Icon Style
- Rounded outline icons
- 2px stroke
- Blue only for active state
- White or muted gray by default

### Buttons
- **Primary:** Background `#3B82F6`, Text `#FFFFFF`, Hover `#60A5FA`, Shadow `0 0 25px rgba(59,130,246,.25)`
- **Secondary:** Background Transparent, Border `#273244`, Text `#F8FAFC`, Hover Border `#3B82F6`
