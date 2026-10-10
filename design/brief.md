# Design brief

Source: screenshot of a Stitch design
Mood: yellow, energetic, natural. Minimal and precise, single column with warm yellow accents, subtle badges, and generous whitespace.

## Style

- Style: Modern.
- Feel: yellow, energetic, natural.
- Personal detail: a subtle snowboard contour line as a divider between sections.
- Motion: subtle and short, 150 to 300 ms: things settle into place, nothing bounces. When the visitor prefers reduced motion, nothing moves.

## Colours

| Token | Light | Dark | Used for |
|---|---|---|---|
| background | #fafaf9 | #12110a | page background |
| surface | #fef3c7 | #242013 | cards, tags, badges, quote callout |
| text | #1b1b1a | #ececea | headings and body text |
| muted | #5f5f5b | #a1a19c | headline under the name, dates, section metadata, dividers |
| accent | #9a5b00 | #f59e0b | links, focus ring, buttons |
| on-accent | #ffffff | #12110a | text on an accent button |

## Type

| Role | Font | Size | Weight |
|---|---|---|---|
| headings | "Geist", system-ui, sans-serif | name 1.75rem, section 1.125rem, item 1rem | 600 |
| body | "Geist", system-ui, sans-serif | 1rem, line height 1.6 | 400 |
| details | "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace | dates and labels 0.8125rem | 400 |

## Shapes

- Corner radius: 0.25rem on tags, badges and buttons; round avatar for the photo.
- Borders: thin dividers between list items and sections, 1px in the muted colour thinned out.
- Shadows: none.

## Layout

- Page width: one column, at most 42rem wide, centred, text flush left, with 1.25rem space at the sides on phones.
- Space between sections: 4.5rem; space between items in a list: 1.25rem.
- How projects are arranged: stacked borderless list, one below the other; no heavy cards or columns.

## Components

- Links: text colour, underlined in muted or accent; accent on hover, and keyboard focus shows a 2px accent ring.
- Projects: item title, muted description line, small mono year tags (#fef3c7 / #242013), and text links in a row.
- Skills: a plain list in the muted colour, separated by middle dots.
- Section headings: small, clean sans-serif in uppercase/small-caps feel with secondary metadata aligned to the right.

## Signature

- Move: Staggered entrance on load
- Guide: guides/ui-behaviors/dynamic-sibling-animations.md
- Where: the parts of the bio and intro settle into place one after the other when the page opens.

## Sections

1. `bio`: the name, the headline, avatar, pitch, availability and the bio.
2. `events`: the goal is speaking invitations, so the talks lead right after bio.
3. `projects`: workshops, demos and tools.
4. `cv`: experience, education and skills.
5. `links`: Email, Blog, GitHub and LinkedIn links.
