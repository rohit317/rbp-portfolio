---
name: RBP Portfolio
description: Personal portfolio of Rohit Totlani — full stack developer
colors:
  background-light: "#ffffff"
  foreground-light: "#0a0a0a"
  background-dark: "#0a0a0a"
  foreground-dark: "#fafafa"
  muted: "#f5f5f5"
  muted-foreground: "#737373"
  border: "#e5e5e5"
  ring-light: "#0066ff"
  ring-dark: "#3b82f6"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.9rem, 10vw - 5px, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "20.5px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  greeting:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  secondary:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  nav:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
rounded:
  xl: "12px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.foreground-light}"
    textColor: "{colors.background-light}"
    rounded: "{rounded.xl}"
    padding: "10px 20px"
  nav-pill:
    backgroundColor: "{colors.background-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
---

# Design System: RBP Portfolio

## Overview

**Creative North Star: "Quiet Machine, Warm Ink"**

A near-monochrome system (ink `#0a0a0a` on white `#ffffff`, inverted in dark mode) where an editorial serif voice (Fraunces) speaks the personal statements and a precise geometric sans (Geist) carries everything functional. Atmosphere — a WebGL shader backdrop and a particle field — hums underneath at low contrast; content stays calm and readable on top of it. Density is low, scale contrast is high, and motion is reserved for the typewriter hero and gentle state transitions.

**Key Characteristics:**
- Two typefaces only: Fraunces (display/serif voice) + Geist (UI/body).
- Monochrome ink-on-paper palette; blue reserved for focus rings.
- Pill-shaped floating navigation; soft rounded buttons (12px).
- Living background: shader flow + particles, kept subtle.

## Colors

Monochrome by design; color appears only as focus feedback.

### Primary
- **Ink** (`#0a0a0a` light / `#fafafa` dark): text, primary button fills, icon strokes — the full ink for all running text.

### Neutral
- **Paper** (`#ffffff` light / `#0a0a0a` dark): page ground and nav pill background.
- **Hush** (`#f5f5f5` / `#171717`): muted surfaces.
- **Grey** (`#737373` / `#a3a3a3`): secondary text only, never running copy.
- **Hairline** (`#e5e5e5` / `#262626`): borders at low emphasis (often used at /5–/8 opacity instead).

### Named Rules
**The Blue-Is-Focus Rule.** Blue (`#0066ff` / `#3b82f6`) appears only as the focus ring. Never as decoration.

## Typography

**Display Font:** Fraunces (variable: opsz, SOFT; fallback Georgia, serif)
**Body Font:** Geist (fallback system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (real code only)

**Character:** A warm editorial serif voice for identity statements set against a crisp neutral sans for interface — the "warm ink" of the system.

### Hierarchy
- **Display** (500, Fraunces, 32–52px fluid, leading 1.02–1.1, −0.02em): hero typed headline (single line, never wraps), section heroes ("My projects", "Let's connect"), modal titles, About card heading.
- **Title** (500, 20.5px serif / 20–22px sans, tight): section headings (Experience, Education, What I do), card titles.
- **Greeting** (500, 21–24px serif): hero greeting line.
- **Body** (400, 17px, 1.6–1.7): primary prose, `max-w-[40ch]`–`52ch`, `text-pretty`.
- **Secondary** (400, 14–15px, 1.6+): descriptions, list copy at 65–75% ink.
- **Meta/Label** (500, 12–13.5px): dates (tabular-nums), project meta, stack chips; 11px only inside the tilted-card badge.
- **Nav** (500, 13.5–14px): pill nav links, buttons.

### Named Rules
**The Serif-Voice Rule.** Fraunces speaks personal statements (hero greeting, typed role, section headings like "Let's connect"); Geist does all functional text.

## Layout

Single centered container (`max-w-275` = 1100px) with 24–40px side padding. Hero is a two-column grid (text / portrait) from 768px, stacked below. Generous vertical rhythm: hero pads 176–224px top. Sections breathe; no dense grids.

## Elevation & Depth

Depth comes from the animated background layer, not shadows. Small, soft shadows exist only on floating chrome (nav pill, hero buttons: `shadow-sm`/`shadow-2xl` at low contrast). Content surfaces are flat.

## Shapes

Everything interactive is round: fully-round nav pill and its items (9999px), soft 12px buttons. No square corners on controls. Portrait imagery may morph (rounded treatment).

## Components

### Buttons
- **Primary:** ink fill on paper text, 12px radius, 10×20px padding, small icon that nudges right on hover.
- **Hover:** subtle background shift (`foreground/4`); no color change.

### Navigation
- **Floating pill** fixed top-center: paper background, hairline border, soft shadow; items fully round with an animated foreground/5 highlight blob. Includes round theme-toggle icon button.

## Do's and Don'ts

### Do:
- **Do** keep the hero typed headline on one line at every viewport width.
- **Do** use Fraunces for identity statements and section headings.
- **Do** keep the shader/particle backdrop subtle and behind content.

### Don't:
- **Don't** introduce accent colors beyond the focus-ring blues.
- **Don't** remove the committed atmosphere layers (ShaderFlow, particles, TextType, pill nav).
- **Don't** use Geist Mono for display or labels (code only).
