# Frontend polish: real church media + senior-level design pass

Frontend only — no backend or database changes. The confidential issue flow keeps working exactly as it does now.

## What I verified

- The Google Drive folder is public and downloadable. It holds two albums:
  - **Programs & Events** — Christmas Carol 2023, Cultural Sunday 2024, Family Weekend, Master's Praise Concert (one album has ~50 photos alone)
  - **Sunday Images** — May 14 2023, May 28 2023, June 4 2023, June 18 2023, FYB July 2023, FYB July 2024
- The Telegram channel "RCCG Master's place Parish — Audio files" is real, but has no public web preview, so audio files cannot be copied. It can only be embedded/linked.

## 1. Real photography

- Curate roughly 24–30 of the strongest photos across the albums (worship, congregation, choir, carol night, cultural Sunday, family weekend), download them, compress, and host them on the CDN so the site never depends on Drive being up.
- Source 3 high-resolution Pastor Adeboye photos to replace the current low-quality ones; they move into the "RCCG Worldwide" section rather than owning the hero.
- Hero carousel switches to parish photos — real congregation and worship shots.

## 2. New Gallery page (`/gallery`)

- Album cards for each of the 10 Drive albums with a cover photo, title, date and photo count.
- Selecting an album opens a responsive masonry grid with a lightbox (keyboard arrows, swipe on mobile, escape to close).
- Each album carries an "View full album on Google Drive" link back to the original folder.

## 3. New Audio Messages page (`/audio`)

- Hero explaining the audio ministry, plus the official Telegram channel widget embedded so recent messages appear live.
- Prominent "Open in Telegram" and "Subscribe" actions, plus a short how-to-listen note for people unfamiliar with Telegram.
- Sermons page gains a cross-link card pointing here.

## 4. Remove placeholder content

- Strip "[Insert Phone Number]" / "[Insert Church Email]" from the footer and contact section; keep the address and a contact form-style CTA so nothing fake ships.
- Remove the mock sermon and library entries. Sermons becomes a real "watch and listen" hub pointing at the audio archive and gallery; Library is held back until real resources exist rather than shipping fake PDFs.
- Prayer request form currently does nothing on submit — it will be visually disabled with a short "coming soon" note, or removed, so no one submits into a void.

## 5. Senior-level design and UX pass

- **Typography and rhythm**: tighter type scale, consistent section spacing, better measure on body copy, refined mobile sizes.
- **Motion**: subtle scroll reveals, image ken-burns on the hero, hover states on cards — restrained, not flashy, and respecting reduced-motion.
- **Depth**: layered surfaces, refined shadows, brass accents used sparingly as an editorial detail rather than decoration.
- **Navigation**: header gains Gallery and Audio, condenses on scroll, mobile menu becomes a full-height sheet with clear active state.
- **Accessibility**: focus rings, alt text on every photo, contrast checks in both themes, keyboard-navigable lightbox and carousel.
- **Performance**: responsive image sizes, lazy loading below the fold, correct aspect ratios so pages don't shift while loading.
- Full pass at 390px, 768px, 1024px and 1440px with screenshots to confirm.

## 6. Favicon

- Generate the favicon from the RCCG logo already in the project, sized properly for browser tabs, and wire it up in the root route, replacing the default Lovable icon.

## Technical notes

- Photos are downloaded once during the build of this change and stored as CDN asset pointers — no runtime Google Drive API calls, no Drive connector needed, no risk of the site breaking if folder sharing changes.
- Gallery data lives in a typed module alongside the existing site data; the lightbox is built from existing shadcn primitives rather than a new dependency.
- The Telegram widget is a standard channel embed script loaded only on `/audio`.
- New routes get their own head metadata (title, description, og tags) with real hero images for social previews.

## Not in this change

- Real contact details, phone, email, service livestreams and library resources — pending from you.
- Any backend work: the issue submission flow, database and security warnings stay untouched until the frontend is signed off.
