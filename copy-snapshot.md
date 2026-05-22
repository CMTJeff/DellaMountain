# Della Mountain — Live Site Copy Snapshot

_Extracted from the repo on 2026-05-22. Commit: 8f7435b._

Source files walked: `index.html`, `units.html`, `gallery.html`, `contact.html`, `404.html`, plus the runtime strings injected by `js/units.js` (unit-detail panel) and `js/contact.js` (form validation, confirmation block).

Notes on conventions used below:
- Quoted text is verbatim rendered output — HTML entities (`&middot;`, `&amp;`, `&nbsp;`, `&prime;`, `&rarr;`, `&times;`, `&copy;`, etc.) are shown as their rendered glyphs (`·`, `&`, non-breaking space, `′`, `→`, `×`, `©`).
- Apostrophes are reproduced as they sit in source: most are straight (`'`); one — in the contact-form confirmation line — is curly (`'`).
- Where a number word in markup is overridden at runtime by JS, both the static value and the runtime source are noted.

---

## Global — Header

- **Wordmark — name:** Della Mountain
- **Wordmark — place line:** Hailey, Idaho
- **Nav items (left to right):** Home · The Units · Gallery · Contact
- **CTA button label (header, ghost-outlined):** Inquire
- **Mobile menu close control:** × (renders the multiplication sign as the close glyph)
- **Mobile menu CTA button label:** Inquire

## Global — Footer

- **Closing line (right column):** Commercial condominiums with live/work opportunities.
- **Address line (right column, beneath the closing line):** 1611 Aviation Drive, Hailey, Idaho
- **Email shown (center column, as mailto link):** sales@dellamountain.com
- **Footer nav items (center column):** Home · The Units · Gallery · Contact
- **Wordmark (left column, inverted on dark ground):** Della Mountain / Hailey, Idaho
- **Copyright line:** © 2026 Della Mountain. All rights reserved.
- **Disclaimer paragraph (verbatim, single block):**
  > This website is for general marketing and informational purposes only. It does not constitute an offer to sell, or the solicitation of an offer to buy, any unit, and creates no contractual rights or obligations. All renderings, depictions, floor plans, dimensions, materials, and features are artist's conceptual representations provided for illustration only and are subject to change; actual construction may vary. Information, availability, and pricing are subject to change or withdrawal at any time without notice. Each unit is a commercial condominium subject to applicable zoning and use requirements; any accessory dwelling unit is subject to City of Hailey guidelines and approvals. Any sale will be made solely pursuant to a fully executed purchase agreement, the terms of which control in all respects. Equal Housing Opportunity.

## Global — 404 Page

- **Browser tab title:** Not Found — Della Mountain
- **Eyebrow:** 404
- **Heading:** Off the map.
- **Supporting line:** The page you're looking for isn't here. Try the navigation above, or head back to the start.
- **Button label:** Return home

---

## Home (index.html)

- **Browser tab title:** Della Mountain — Live/Work Commercial Condominiums in Hailey, Idaho
- **Meta description:** Della Mountain — twelve live/work commercial condominiums in Hailey, Idaho, with pre-approved accessory dwelling units and easy access throughout the Wood River Valley.

### Section 1 — Hero
- **Eyebrow:** Commercial Condominiums · Hailey, Idaho
- **Hero title:** Space on your terms. _(rendered with a non-breaking space between "your" and "terms")_
- **Supporting line:** Twelve live/work units in the Wood River Valley — built to be finished, and used, exactly as you choose.
- **Primary button label:** Inquire
- **Secondary button label:** Explore the units

### Section 2 — The Idea
- **Eyebrow:** The Idea
- **Statement:** Della Mountain is twelve commercial condominiums in Hailey, Idaho, each carrying something rare: live/work possibilities. The result is a property that adapts to its owner — a workspace, a base, a place for what matters to you.
- **Closing line:** Three buildings. Twelve units. One uncommon opportunity.

### Section 3 — Live / Work
- **Eyebrow:** Live / Work
- **Heading:** A building that doesn't dictate.
- **Body — paragraph 1:** Every unit is a genuine commercial space — a fourteen-foot main level, a grade-level roll-up door, and room for a business, a studio, a workshop, the things you build or keep.
- **Body — paragraph 2:** Each unit is structured to allow for an accessory dwelling unit — quarters, for staff or for yourself. Finish it now or later. Use the space as commercial alone, or as both. The choice stays yours, within the City of Hailey's guidelines.
- **Text link:** See how the units work →

### Section 4 — Two Ways to Own (teaser)
- **Section eyebrow:** Ownership
- **Section heading:** Two ways to make it yours.
- **Card 1 — label:** Warm Shell
- **Card 1 — heading:** A finished canvas.
- **Card 1 — body — paragraph 1:** Delivered as a complete commercial shell — a main-level bathroom, basic electrical, the bones in place. The buyer finishes the interior to a plan of their own.
- **Card 1 — body — paragraph 2:** For the owner with a specific vision, and the patience to see it through.
- **Card 2 — label:** Turn-Key
- **Card 2 — heading:** Complete, and ready.
- **Card 2 — body — paragraph 1:** Delivered finished, with the approved ADU built out. Move in, or move your business in, without the build.
- **Card 2 — body — paragraph 2:** For the owner who wants it done.
- **Button beneath both cards:** Compare the options

### Section 5 — Location
- **Eyebrow:** The Setting
- **Heading:** Minutes from everything the Valley offers.
- **Body — paragraph 1:** Della Mountain sits on Aviation Drive in Hailey, with easy in-and-out access to the Wood River Valley. Friedman Memorial Airport is close at hand, and Highway 75 connects the length of the Valley north to Ketchum and Sun Valley.
- **Body — paragraph 2:** A practical address in a place people work to get to.
- **Fact list (each line on its own bullet):**
  - Friedman Memorial Airport — minutes away
  - Direct Highway 75 access
  - Hailey, in the heart of the Wood River Valley
- **Image placeholder label (rendered until area photo lands):** Area photograph — to be supplied

### Section 6 — Availability
- **Eyebrow:** Pre-Sales Now Open
- **Heading (verbatim, including the number word currently in the markup):** Of twelve units, eight remain.
  - _Note: the number word lives in a `<span data-availability-count>` but is NOT runtime-computed on this page (`/js/units.js` only loads on `units.html`). The literal "eight" in markup is what visitors see; update it manually if availability changes._
- **Supporting line:** Pricing and current availability are shared on request.
- **Button:** Contact for pricing & availability

### Section 7 — Closing
- **Eyebrow:** Inquire
- **Heading:** Begin a conversation.
- **Supporting line:** Pricing, availability, and unit details are shared directly — a short message is all it takes to start.
- **Button:** Request information
- **Email line beneath the button:** Or email sales@dellamountain.com

---

## The Units (units.html)

- **Browser tab title:** The Units — Della Mountain
- **Meta description:** One architectural plan, twelve commercial condominium units with a live/work entitlement in Hailey, Idaho — delivered as a Warm Shell or fully Turn-Key.

### Section 1 — Page Header
- **Eyebrow:** The Units
- **Page title:** One plan. Two ways to own. Twelve opportunities.
- **Supporting line:** Della Mountain delivers a single, considered commercial condominium plan — that you can finish to your specification, or that we finish for you.

### Section 2 — The Plan
- **Eyebrow:** The Plan
- **Heading:** Two stories. Built for use.
- **Body — paragraph 1:** A two-story unit with a grade-level roll-up door and a fourteen-foot clear height on the main floor — built for the things a working space holds. A bathroom and basic electrical are in place on the main level.
- **Body — paragraph 2:** The second floor is delivered open, ready to remain a mezzanine and storage, or to become finished living space using our approved ADU plan. Either path is supported from day one.
- **Fact list (each line on its own bullet):**
  - Main floor — 14′ clear height
  - Grade-level roll-up door
  - Bathroom + basic electrical included
  - Approximately 2,550 sq ft per unit
- **Plan-drawing placeholder labels (rendered until architect supplies plan):**
  - Level 1 — main floor
  - Level 2 — open shell
  - Unit plan — to be supplied

### Section 3 — Two Ways to Own (full)
- **Section eyebrow:** Ownership
- **Section heading:** Finish it your way — or have it finished for you.

#### Card 1 — Warm Shell
- **Label:** Warm Shell
- **Heading:** The canvas.
- **"What it is" paragraph (sub-label rendered inline as bold text + period):**
  > **What it is.** Delivered as a complete commercial shell — exterior closed, main-level bathroom in place, basic electrical run.
- **"What's open" paragraph:**
  > **What's open.** The interior is yours to finish. Use the second floor as open mezzanine and storage. Build a workspace, a studio, a showroom, a shop — to your own plan, on your own schedule.
- **"The ADU path stays open" paragraph:**
  > **The ADU path stays open.** If you decide later to finish the second floor as an accessory dwelling unit, the building meets the City of Hailey's ADU code. Construction and permitting are subject to the city's guidelines and zoning use.
- **"Who it suits" line (italicized, ink-soft):** For the owner with a specific vision.
- **Fact strip (rendered as `<dl>` with `<dt>` term · `<dd>` value pairs):**
  - Delivered: Closed shell, ready to finish
  - Includes: Main-level bathroom, basic electrical
  - ADU: Build now or later

#### Card 2 — Turn-Key
- **Label:** Turn-Key
- **Heading:** Complete, and ready.
- **"What it is" paragraph:**
  > **What it is.** Delivered finished, with the second-floor accessory dwelling unit built out to the approved plan.
- **"What's done" paragraph:**
  > **What's done.** Kitchen, bath, living, and bedroom appointments above; commercial main floor below. Move in, move a business in, live above your work, house staff — without a build phase.
- **"The same flexibility" paragraph:**
  > **The same flexibility.** A Turn-Key unit is a commercial condominium with the ADU complete and approved. Use is subject to City of Hailey guidelines.
- **"Who it suits" line:** For the owner who wants it done.
- **Fact strip:**
  - Delivered: Complete, with ADU built out
  - Includes: Finished commercial floor + ADU above
  - Timeline: Move in on closing

- **Line beneath both cards (centered, quiet):** Selection of delivery option happens during the purchase conversation.

### Section 4 — Building 1, the Storefront
- **Eyebrow:** Building 1
- **Heading:** Four units with a storefront on Aviation Drive.
- **Body — paragraph 1:** The four units in Building 1 — units 101 through 104 — front directly onto Aviation Drive. A street-presence frontage with public visibility, room for signage, and a walk-up address.
- **Body — paragraph 2:** For a business that benefits from being seen, or an owner who values arrival and address, Building 1 is a distinct opportunity within the development.
- **Body — paragraph 3:** Buildings 2 and 3 sit interior to the site, with their own access from the shared parking court.

### Section 5 — Availability
- **Eyebrow:** Current Availability
- **Heading (verbatim, including the current number word in markup):** Twelve units. eight currently available.
  - _Note: the literal "eight" in the static markup is also computed at runtime by `/js/units.js` from `window.DELLA_UNITS` — both currently agree. The available count is derived live, so updating the array (currently 8 available / 4 reserved / 0 sold) is the single edit needed._
- **Map labels (rendered as SVG text within the site diagram):**
  - Building 3 _(top row, interior)_
  - Building 2 _(middle row, interior)_
  - Building 1 _(bottom row, Aviation Drive frontage)_
  - Parking Court _(appears twice — between Building 3 and Building 2, and between Building 2 and Building 1)_
  - Aviation Drive · Storefront frontage _(beneath Building 1)_
- **Legend labels:** Available · Reserved · Sold
- **Detail panel default-state guidance line:** Select a unit on the map for details.
- **Detail panel — on selection (rendered by `/js/units.js`):**
  - **Unit heading format:** Unit [id] _(e.g., "Unit 103")_
  - **Status pill:** AVAILABLE / RESERVED / SOLD _(uppercase, color-keyed)_
  - **Location line format:** "Building [N] · Aviation Drive storefront frontage" (Building 1 units) or "Building [N] · Interior" (Buildings 2 and 3)
  - **Status sentences:**
    - available → This unit is currently available. Contact us for details.
    - reserved → This unit has been reserved. Contact us to be notified if it returns to availability.
    - sold → This unit has been sold.
  - **Inquire button label (shown for available and reserved units only):** Inquire about this unit

### Section 6 — Closing
- **Eyebrow:** Inquire
- **Heading:** Specifics on request.
- **Supporting line:** Pricing, current availability, and unit-by-unit detail are shared directly. Reach out to begin a conversation.
- **Button:** Contact for pricing & availability
- **Email line beneath the button:** Or email sales@dellamountain.com

---

## Gallery (gallery.html)

- **Browser tab title:** Gallery — Della Mountain
- **Meta description:** A short film and gallery of Della Mountain — the three-building development on Aviation Drive in Hailey, Idaho, with twelve live/work commercial condominiums.

### Section 1 — Page Header
- **Eyebrow:** Gallery
- **Page title:** See it.
- **Supporting line:** A short film and a closer look at Della Mountain — its forms, its frontage, and the rooms above.

### Section 2 — The Film
- **Eyebrow:** The Film
- **Heading line (beside eyebrow on desktop):** A walk through Della Mountain.
- **Runtime line:** Approx. 2 min. _(TRACKED — replace with actual runtime when video is final)_
- **Placeholder text (rendered inside the 16:9 frame until embed lands):**
  - Title: Film coming soon
  - Sub: Final cut will be embedded here before launch.

### Section 3 — Exteriors
- **Eyebrow:** Exteriors
- **Heading:** Forms and frontage.
- **Supporting line:** Three buildings, twelve units — and a storefront row along Aviation Drive.
- **Image captions in display order (wide-top / mid-row left / mid-row right / wide-bottom):**
  1. The three buildings, from the meadow frontage
  2. Approach from the parking court
  3. Garage doors and upper terraces
  4. Aviation Drive elevation — the storefront row

### Section 4 — Interiors
- **Eyebrow:** Interiors
- **Heading:** Rooms above.
- **Supporting line:** A look at the second-floor accessory dwelling unit, finished to the city-approved plan.
- **Placeholder captions (in display order; all flagged as TRACKED PLACEHOLDER — replace when interior renderings land):**
  1. Living area
  2. Kitchen
  3. Bedroom
  4. Bath
  5. View from the deck
  6. Stair to upper level
- **Placeholder block label (rendered in each empty slot):** Interior — to be supplied

### Section 5 — Site Plan
- **Eyebrow:** Site Plan
- **Heading:** Three buildings on Aviation Drive.
- **Supporting line:** Building 1 fronts Aviation Drive; Buildings 2 and 3 sit interior to the shared parking court.
- **Placeholder block label:** Site plan — to be supplied

### Section 6 — Closing
- **Eyebrow:** Inquire
- **Heading:** Want to walk it in person?
- **Supporting line:** A visit can be arranged once construction is underway — and we're happy to share more in the meantime.
- **Button:** Contact us
- **Email line beneath the button:** Or email sales@dellamountain.com

### Additional text (Gallery)
- **Lightbox close / prev / next control glyphs:** × · ‹ · ›

---

## Contact (contact.html)

- **Browser tab title:** Contact — Della Mountain
- **Meta description:** Begin a conversation about Della Mountain — pre-sale inquiries for the twelve live/work commercial condominiums in Hailey, Idaho.

### Section 1 — Page Header
- **Eyebrow:** Contact
- **Page title:** Begin a conversation.
- **Supporting line:** Pricing, current availability, and unit-by-unit details are shared directly. Tell us a little about what you're looking for and we'll be in touch.

### Section 2 — The Form
- **Field labels in order:**
  - Name
  - Email
  - Phone (optional) _(rendered inline: "Phone" followed by a lighter "(optional)" suffix)_
  - Area of interest _(legend of the radio group)_
  - Message (optional) _(rendered inline as above)_
- **Area of interest — three options (in order):**
  - Warm Shell
  - Turn-Key
  - Not sure yet
- **Submit button label:** Send inquiry
- **Submit button — sending state:** Sending… _(rendered while the request is in flight; the button is also disabled)_
- **Privacy line beneath the submit button:** By submitting, you'll be contacted by the Della Mountain sales team. We don't share your information.
- **Validation error messages (each, surfaced under its field on failed submit):**
  - Name field: Please enter your name.
  - Email field, empty: Please enter your email.
  - Email field, malformed: Please enter a valid email address.
  - Area of interest, none selected: Please choose an area of interest.
- **Submission-level error (rendered above the submit button on network failure or non-2xx response):**
  > Something went wrong sending your message. Please try again, or email sales@dellamountain.com directly.

### Section 3 — Confirmation (replaces the form on success)
- **Eyebrow:** Thank You
- **Heading:** Your message is in.
- **Supporting line:** Thank you for your interest, we'll be in touch. _(note: curly apostrophe in "we'll", per `js/contact.js`)_

### Section 4 — Side Panel
- **DIRECT block:**
  - Eyebrow: Direct
  - Email line (Fraunces, rendered as mailto link): sales@dellamountain.com
  - Supporting line: Prefer to email? Write us directly — we read every message.
- **THE SITE block:**
  - Eyebrow: The Site
  - Address line 1: Della Mountain
  - Address line 2: 1611 Aviation Drive
  - Address line 3: Hailey, Idaho
- **RESPONSE block:**
  - Eyebrow: Response
  - Response line: We respond within one business day.

---

## Cross-page text inventory — sanity check

The following user-facing strings appear on more than one page and are intentionally repeated; capturing once here to make it explicit:

- `Inquire` — header CTA (all four content pages)
- `Or email sales@dellamountain.com` — closing CTAs on Home, Units, Gallery
- `sales@dellamountain.com` — footer (all pages), Contact side panel, Contact submission error
- Footer disclaimer paragraph — verbatim on all pages (Home, Units, Gallery, Contact, 404)
- Footer closing line "Commercial condominiums with live/work opportunities." + address — all pages
- Wordmark "Della Mountain / Hailey, Idaho" — header and footer of all pages

## Tracked text items not present in any rendered slot

These show up in the markup as TRACKED PLACEHOLDER comments but never as user-facing copy until they're replaced by real assets; flagged so they don't get lost:

- Vimeo embed (Gallery — film frame) — currently a placeholder div
- Architect's marketing unit plan (Units — Section 2 left column) — currently labeled "Unit plan — to be supplied"
- Area photograph (Home — Section 5 image band) — currently labeled "Area photograph — to be supplied"
- Six interior renderings (Gallery — Interiors slots) — labeled "Interior — to be supplied"
- Site plan image (Gallery — Section 5) — labeled "Site plan — to be supplied"
- Formspree endpoint (Contact form `action` attribute) — currently a sentinel string `TRACKED__FORMSPREE_ENDPOINT__REPLACE_BEFORE_LAUNCH`
