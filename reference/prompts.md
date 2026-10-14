# Claude Code prompts — run in order, commit after each

## 0. Finish the content scrape (spa23.com rate-limited my crawler)
> Use Playwright (install it if needed) to crawl https://spa23.com — every nav and footer link, one page at a time with a 3-second delay between requests. Extract: street address, phone, email, hours, every membership type and price, the full class list and schedule, amenity descriptions, staff names and bios, and any program details (Fins Swim Academy, Camp Spa 23, Pure Massage, BEYOGA, CrossFit, KidZone). Download the logo and up to 20 facility photos into /reference/brand/. Then update /reference/content.md: replace every [TBD] you can confirm, add anything new under the right heading, and leave [TBD] where the site has nothing. Do not write anything you did not find on the site.

## 1. Design system (plan mode first — Shift+Tab)
> Read CLAUDE.md, /reference/design/design-notes.md, and every screenshot in /reference/design/. Propose a design system: color tokens derived from the Spa 23 logo in /reference/brand/, a serif display + sans body type scale, spacing scale, and these components: Button (solid/outline/text-link), Eyebrow, SectionHeading, ImageTextSection (alternating), Card, CardRail (horizontal scroll), PullQuote, VideoEmbed, Nav (transparent→solid on scroll, overlay menu on mobile), Footer, Toast, DemoForm wrapper. Show the plan. After I approve, implement it with a /styleguide route that renders every component so I can review it.

## 2. Home
> Build / using the components. Sections in order: video hero (cMQzE3umsiI, muted loop, poster fallback) with headline "MORE THAN A GYM", sub-line, CTA "Start your free week"; intro section (45 years, family-owned, Pompton Plains); "Everything under one roof" card rail of amenities; three alternating ImageTextSections for Pool & Swim Academy, Spa & Recovery (Pure Massage, whirlpool, sauna, steam), and Kids & Family (KidZone, Camp Spa 23, Fins); video section with the tour plus channel tagline; PullQuote testimonials (Aileen E., Tammy R.); membership CTA band ("No long-term commitment. 1-week money-back guarantee."); location strip with address/hours. All copy from /reference/content.md.

## 3. Membership
> Build /membership. Structure: hero band; "Every membership includes" list (5 free PT sessions, 5 success meetings, 80+ classes, etc.); membership options as editorial cards not a SaaS pricing table — show [TBD] where prices aren't confirmed; the three promises (no commitment, money-back, monthly billing) as a feature row; FAQ accordion; free-week DemoForm.

## 4. Classes
> Build /classes. Put a sample schedule in /src/data/schedule.json (clearly labeled sample data in the UI) using the known formats from content.md. Group by category (Strength, Cardio & Cycling, Mind-Body & Yoga, CrossFit, Aquatics, Active Aging). Filterable by day and category. Class cards open a detail panel.

## 5. Amenities, Programs, Videos, About, Contact — one prompt each
> Build /amenities as a sequence of alternating ImageTextSections, one per amenity in content.md.
> Build /programs with one section per program; each with eyebrow, headline, paragraph, CTA to /contact.
> Build /videos: channel tagline as the headline, responsive grid of VideoEmbeds from /reference/videos.md, links to YouTube and Instagram.
> Build /about: the story (45 years, family-owned, owners Cary Adler and Joe Pedatella), leadership, community, a PullQuote.
> Build /contact: address, Google Maps embed, phone, hours, DemoForm for contact and free week.

## 6. Visual QA loop
Screenshot each page at 375 and 1440, paste into Claude Code, say exactly what's off. Repeat until it's right. Useful phrase: "Compare this screenshot to /reference/design/tengile-home-1440.png — match the spacing and type scale."

## 7. Polish
> Audit every page: broken links, missing alt text, focus states, contrast, horizontal overflow at 375px, any copy that isn't in content.md (flag it), and Lighthouse accessibility. Fix everything. Then write README.md: what this is, how to run it, what's mocked, and what a production build would need (CMS, form backend, class-schedule integration, analytics, real photography).
