# Spa 23 Fitness & Lifestyle — Website Redesign (Proof of Concept)

## What this is
A fully designed proof-of-concept redesign of https://spa23.com for Spa 23 Fitness & Lifestyle,
a family-owned, 45+ year old multipurpose health club on Route 23 in Pompton Plains, NJ.
It is NOT production. Forms are mocked. The goal is to show the owners what a modern,
premium version of their brand could look like.

The current site is dated: the homepage still leads with a 2020 COVID reopening letter.
The underlying business is strong (pool, spa, yoga studio, CrossFit box, swim academy,
kids camp, juice bar, 80+ weekly classes). The redesign's job is to make the site match
the facility.

## Audience & positioning
- Suburban North Jersey adults and families, 30–65, who want more than a big-box gym:
  pool, spa, massage, yoga, group fitness, kids programs — all under one roof.
- Positioning to express: "The club for your whole life" — fitness + spa + family.
  Think Life Time's "Athletic Country Club" framing, scaled to a single family-owned club
  with 45 years of community.
- Tone: warm, confident, premium but not pretentious. No fitness-bro energy, no stock
  "crush your goals" copy. Members call it "my home away from home." Lean into that.

## Stack & rules
- Next.js (App Router) + TypeScript + Tailwind CSS. No component libraries (no shadcn,
  no MUI). Build primitives in `src/components/ui`.
- Mobile-first. Every page must look finished at 375px and 1440px.
- All imagery lives in `/public`. Never hotlink from spa23.com. If a real photo is not
  available, use a clearly labeled placeholder block with an alt-text description of what
  photo belongs there (e.g. "[Photo: lap swimmer in indoor pool, morning light]").
- YouTube: embed specific videos by ID via `<iframe src="https://www.youtube.com/embed/{id}">`.
  Do not call the YouTube API.
- Forms: every form posts to a local stub that shows a toast — "Demo mode: this form isn't
  connected yet." Never pretend a submission succeeded for real.
- Content: pull ALL copy, prices, hours, class names, staff names, and addresses from
  `/reference/content.md`. If something is missing there, write `[TBD]` in the UI. Never
  invent a price, an hour, or a person.
- Accessibility: semantic HTML, alt text on every image, visible focus states, AA contrast.
- Commit after each page is complete. Small, named commits.

## Design direction
Three reference sites are in `/reference/design/`. Match their structure and feel, not
their content. What they share, and what this site must have:

1. **Full-bleed cinematic hero** — video or large photo, a 2–4 word uppercase headline,
   one line of support copy, one CTA. "Scroll" cue at the bottom. (All three refs.)
2. **Editorial typography** — a refined serif display face for headlines paired with a
   clean geometric sans for body/UI. Large type scale, generous line-height, lots of air.
   (Mr. C, Tengile.) Suggested pairing: Cormorant Garamond or Fraunces for display,
   Inter or DM Sans for body. Headlines in uppercase with wide tracking for section eyebrows.
3. **Restrained palette** — one deep anchor color, one warm neutral, one accent.
   Tengile uses a near-black green (#242d23) with cream; Mr. C uses cream/white with a
   single red. For Spa 23: derive the accent from the current logo (check
   `/reference/brand/`) and pair it with a deep navy or charcoal anchor and a warm
   off-white. Avoid pure #000 and pure #FFF.
4. **Alternating image/text sections** — eyebrow label → short headline → 2–3 sentence
   paragraph → text link CTA, with a large photo beside it. Alternate left/right down the
   page. Each section gets a lot of vertical padding (py-24 to py-40 on desktop).
5. **Minimal nav** — logo left, 4–5 links, one solid CTA button ("Join" / "Free Trial"),
   phone number visible on desktop. Transparent over the hero, solid on scroll.
   Full-screen overlay menu on mobile (Tengile style).
6. **Subtle motion** — fade/slide-up on scroll reveal, slow image zoom on hero, nothing
   bouncy. Use CSS + IntersectionObserver or `framer-motion`; keep it tasteful.
7. **Horizontal card rails** for programs/amenities/classes (Life Time's "things we're
   excited about" rail) — image card, small label, one line.
8. **Social proof as design** — large pull-quote testimonials with member name + "Member
   since YYYY", set in the serif, on a tinted background (Tengile's National Geographic
   quote block).
9. **Dark, well-organized footer** — logo, address, phone, hours, nav columns, social
   icons, legal line.

What NOT to do: bento grids of icons, gradient buttons, purple/teal SaaS colors,
"Pricing" tables that look like a software plan picker, emoji, generic hero stock photos
of dumbbells.

## Site map
- `/` Home — hero, intro (45 years, family-owned), "One club, everything" amenity rail,
  featured programs (Pool & Swim Academy, BEYOGA, CrossFit, Pure Massage, Kids),
  video section (facility tour + 2–3 channel videos), testimonials, membership CTA,
  location strip with hours.
- `/membership` — membership options, what's included, the "no long-term commitment /
  1-week money-back / monthly billing" promises, free-trial CTA, FAQ.
- `/classes` — 80+ weekly classes grouped by category; schedule as a filterable table from
  a static JSON file; class detail modal or section.
- `/amenities` — pool, whirlpool/sauna/steam, turf, weight floor, cardio, wellness area,
  juice bar — each as an image/text section.
- `/programs` — Fins Swim Academy, Camp Spa 23, KidZone, Personal Training, BEYOGA,
  CrossFit, Pure Massage. One section each.
- `/videos` — "Wellness made doable" — grid of embedded YouTube videos from the channel,
  channel link, Instagram link.
- `/about` — the story, the owners, the team, community.
- `/contact` — address, map embed, phone, hours, mocked contact + free-trial forms.

## Reference folder
- `/reference/content.md` — the content source of truth (see Content rule above)
- `/reference/brand/` — logo, current-site screenshots, any real photos
- `/reference/design/` — screenshots of the three reference sites + `design-notes.md`
- `/reference/videos.md` — YouTube IDs to embed
