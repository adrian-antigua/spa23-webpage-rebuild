# Design reference notes

Three sites. Screenshot each one at 1440px and 375px (full-page) and drop the images in
this folder before starting the build — Claude Code works far better from the pictures
than from these notes.

## 1. Mr. C Residences Boca Raton — https://mrcresidencesbocaraton.com/
Luxury condo sales site. Take from it:
- Hero: full-bleed render, massive two-line uppercase headline ("COME HOME TO MR. C"),
  single outlined CTA, "SCROLL FOR MORE" with chevron.
- Rhythm: eyebrow in small uppercase tracked caps → short headline → one paragraph →
  uppercase text-link CTA ("EXPLORE RESIDENCES"), big photo alongside. Repeat 3×.
- Logo swaps white→red when the nav goes from transparent to solid on scroll.
- Palette: cream/white, one signature red, dark footer with subtle pattern.
- Footer: logo, Call / Email, legal links, credit line.
**Spa 23 mapping:** home page section rhythm; nav behavior; CTA style.

## 2. Tengile MalaMala Collection — https://tengilemalamala.com/
Luxury safari. Next.js site — closest technical cousin. Take from it:
- Hero: autoplay video with "Watch video" control, 2-word uppercase headline, one
  sentence, one CTA.
- "Menu" button opens a full-screen overlay nav split into two columns.
- Section intros are set as large serif paragraphs (an H2 that's actually a short
  paragraph) — confident, editorial.
- Property cards: image, name, one-line stat ("9 Suites") — reuse for Amenities and
  Programs cards ("80+ weekly classes", "Olympic-style pool").
- Big pull-quote block with attribution.
- Theme color #242d23 (deep green) + cream. Deep anchor + warm neutral.
- Newsletter form in footer with a two-option toggle.
**Spa 23 mapping:** typography system; card grid for programs/amenities; testimonial block;
overlay menu; video hero.

## 3. Life Time — https://www.lifetime.life/
National premium club chain. Take from it:
- "Athletic Country Club" positioning — "Going beyond a gym." Spa 23 is literally a
  spa + pool + club; this framing is the whole pitch.
- Hero: video, short line ("Make healthy your way of life."), sub-line ("One membership.
  So many ways to move, play, recover and live."), one CTA.
- Horizontal rail of image cards with a small uppercase label and one sentence each
  (Dynamic Stretch, Pickleball, Luxury Amenities…). Reuse for "Everything under one roof".
- Clean sans typography at large scale; lots of white.
- Legal disclaimer block above footer in small type — include a toned-down version
  ("Pricing and amenities subject to change; see club for details").
**Spa 23 mapping:** positioning language; amenity/program rail; membership page structure
(what's included, then options, then FAQ); kids & family section.

## Synthesis — the Spa 23 system
- Display: serif (Fraunces or Cormorant Garamond). Body/UI: DM Sans or Inter.
- Colors: deep anchor (navy/charcoal), warm off-white, one accent from the Spa 23 logo.
- Hero: facility-tour video (cMQzE3umsiI) muted/looping or a strong still, headline
  like "MORE THAN A GYM" / "YOUR CLUB FOR LIFE", sub-line, CTA "Start your free week".
- Section padding generous; max content width ~1200px; images edge-to-edge on mobile.
- Motion: scroll-reveal fade-up, hero slow zoom. That's it.
