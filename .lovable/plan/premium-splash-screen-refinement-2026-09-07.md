# Premium splash-screen refinement

## Goal
Turn the current splash into a polished, emotionally resonant introduction that feels ceremonial rather than mechanical, while keeping it fast and responsive.

## Changes
- Recompose the splash around the RCCG mark with layered orbital rings, moving highlights, and a restrained warm glow.
- Choreograph the entrance in stages: ambient background reveal, orbit drawing, logo arrival, church name, tagline, then a clean cinematic exit.
- Add subtle depth and visual rhythm without delaying access to the homepage.
- Tune sizing and spacing for mobile, tablet, and desktop so the logo and text remain balanced on short screens.
- Preserve reduced-motion support with an immediate, calm alternative.
- Verify the full entrance and exit in the live preview and confirm the homepage remains usable afterward.

## Technical details
- Keep the animation CSS-driven for reliable first-load behavior.
- Use semantic design tokens already defined for ink, brass, and foreground colors.
- Avoid extra packages and heavy media so the splash does not slow the page.
