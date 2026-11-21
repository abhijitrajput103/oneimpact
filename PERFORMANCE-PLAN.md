# OneImpact website speed plan

Audit of main at dac2687, 21 November 2026. Scope covers every public page, its production HTML, linked scripts, shared components, media, configuration, build scripts and contact endpoint source. See [the file and asset inventory](PERFORMANCE-INVENTORY.md) for all 229 tracked entries, dimensions, byte sizes, literal references and exact duplicates.

## Implemented and verified locally

All eight public routes passed production build and browser checks. The following figures compare the original local production build with the optimized local build. Each payload is the sum of completed encoded response bodies before scrolling in a fresh mobile browser context. The original Render observations are recorded separately below.

| Route | Before, MB | After, MB | Reduction | Initial JS, gzip kB | Cold load, median (range), ms | Warm load, median (range), ms |
|---|---:|---:|---:|---:|---:|---:|
| / | 1.43 | 0.69 | 52% | 273 | 195 (189–224) | 211 (207–221) |
| /about | 1.82 | 0.88 | 51% | 272 | 169 (154–180) | 98 (92–170) |
| /contact | 1.19 | 0.55 | 54% | 213 | 184 (151–228) | 214 (193–263) |
| /seo | 7.39 | 0.61 | 92% | 236 | 327 (316–391) | 391 (369–398) |
| /social-media-marketing | 1.22 | 0.55 | 55% | 232 | 260 (206–282) | 269 (246–278) |
| /influencer-marketing | 6.23 | 0.55 | 91% | 225 | 323 (261–369) | 352 (313–379) |
| /branding-services | 1.52 | 0.54 | 64% | 223 | 331 (302–476) | 360 (337–413) |
| /web-development | 1.22 | 0.55 | 55% | 224 | 298 (277–330) | 326 (306–336) |

The load-event columns cover five cold and five warm mobile visits per route on localhost without network throttling. They include background work and are separate from visual paint and click-to-navigation timings. The versioned navbar wordmark transferred zero network bytes on all 40 warm visits. Across 16 mobile/desktop route checks, every page returned HTTP 200 and the post-scroll image check found zero broken images.

**Homepage reels.** In three mobile scroll tests, both loaded thumbnails were already fully opaque as they entered view. The first sample at or above 90% opacity arrived in the first sample after scrolling (0 ms at this timer resolution), compared with 440–503 ms in the earlier Render tests. These runs tested scrolling after initial load; download time still matters when someone swipes immediately on a slow connection.

**Media and interactions.** The desktop hero uses a 359 KB silent loop with one playback element and an immediate poster. Mobile and reduced-motion checks found zero hero video elements. Desktop skip and offscreen pause passed. The service pages retain the decorative animation in a 197 KB lazy-loaded WebP. All five service pages passed tab, accordion and hero-form interaction checks on both viewport sizes. Contact validation, a mocked submission confirmation, and home → SEO → contact → back navigation passed.

**Release status.** Every route met the proposed 1 MB mobile pre-scroll budget in this local run. The 220 kB initial-script budget, including the legacy fallback script for consistency with the baseline, was reached on Contact. Other routes measured 223–273 kB. Lint completed with six warnings and zero errors. Deployment and real-user LCP, INP and CLS verification remain pending.

## Original audit priorities

1. Replace the 4.17 MB GIF used as a 48 px decoration on SEO and Influencer Marketing. It was among the resources actually downloaded before scrolling on both pages. A small static image is sufficient if motion is optional. If motion is important, export a display-sized animated asset and start it near the viewport. Validate the icon in context.
2. Deliver small versions of the shared black and white wordmarks. Both approximately 198 KB originals appeared among the largest completed requests on every mobile route. Keep the header eager, reserve its aspect ratio, and lazy-load the footer. On this checkout, 64 px-high header and 96 px-high footer WebP trials produced 7,900 and 12,720 bytes. Together that is about 375 KB less source data when both are fetched. Include a higher-density variant where the displayed size warrants it.
3. Give the homepage a real first frame in its HTML. Show a responsive poster immediately, remove the whole-hero opacity gate, and attach the interactive effects after first paint. On mobile the browser reported two timing entries for the desktop video URL before scrolling. Guard the media source itself. A CSS breakpoint on a video element allows premature discovery.
4. Fix image scheduling on the first scroll. Make the portfolio cards visible by default. Separate the request start from the animation start. Free bandwidth currently used by distant collages, heavyweight icons and footer graphics before promoting more images to eager.
5. Fix the shared cache rule and then reduce route JavaScript. These improvements serve return visits and interactions. All eight pages already build as static HTML. Preserve that advantage.

## Live verification on Render

The owner confirmed the [Render deployment](https://oneimpact.onrender.com/) as the current public site. All eight routes returned HTTP 200 in both mobile and desktop Chrome and were scrolled. Each visit used a fresh context with browser caching disabled, with no artificial network or CPU throttling. One sample per route and device is shown. Body totals include the document and completed resource timing entries sampled about 1.4 seconds after load, before scrolling. They can omit unfinished media and canceled requests. Missing LCP entries are unavailable measurements. These are lab observations from one location.

| Route | Mobile pre-scroll MB | Desktop pre-scroll MB | Mobile HTML first byte, seconds | Mobile LCP observed, seconds |
|---|---:|---:|---:|---:|
| / | 1.25 | 1.51 | 0.43 | 2.66 |
| /about | 1.80 | 1.78 | 0.67 | 1.82 |
| /contact | 1.17 | 1.14 | 0.49 | 14.45 |
| /seo | 7.29 | 7.27 | 0.49 | unavailable |
| /social-media-marketing | 1.04 | 1.15 | 0.41 | unavailable |
| /influencer-marketing | 6.10 | 6.15 | 0.69 | 1.38 |
| /branding-services | 1.39 | 1.36 | 0.42 | unavailable |
| /web-development | 1.04 | 1.09 | 0.60 | unavailable |

**Reel visibility.** On three additional mobile homepage visits we jumped the first reel card to the center of the viewport after page load. 6 of six card observations started in view at zero opacity with the thumbnail already loaded. Across both cards and all three visits, time from scroll to a loaded image at 90% card opacity ranged from 440 to 503 ms. Fix the fade first, then retest with an immediate scroll on a slow connection before making any thumbnail eager.

**Request competition.** The homepage HTML explicitly preloads all five lower-page service illustrations and the white footer wordmark. Set those image elements to lazy, rebuild and inspect the emitted HTML to verify the preloads disappear. The two wordmark responses totaled 395,648 bytes. The live mobile SEO and Influencer visits both fetched the 4,172,321-byte decorative GIF before scrolling. The unthrottled live mobile homepage reported 0 completed MP4 timing entries at the sample point; its HTML still advertised the same video source in two autoplay elements. Keep video request gating in the plan and verify with a network trace on actual phones.

**Contact outlier.** The first mobile Contact visit recorded a 14.45 s LCP for the 1,200 px phone-art URL, with HTML first byte at 0.49 s. The available LCPs in three repeat visits were 2.18 s, 0.90 s, 1.27 s. The phone-image request timing in those repeats ended at 1.52 s, 0.80 s, 1.05 s after navigation start. Collect field LCP attribution and image-cache status to find how often this happens. Trial the directly served, appropriately sized art and remove the above-fold opacity gate. A single outlier cannot establish a Render cold start.

**Hosting and cache.** Four independent homepage HTTP GETs returned first bytes in 0.59–0.97 s. The inspected HTML response reported a Next.js prerender cache hit and Cloudflare DYNAMIC. The logo, GIF and MP4 had the same shared-cache directive as HTML, with no explicit browser max-age. The live SEO icon returned 404 with a literal comma and 200 with the comma encoded. Verify versioned asset cache headers at this host after deployment. Capture host logs for a genuinely idle first request before considering a hosting plan change.

## Local production build baseline

The configured public hostname, oneimpact.agency, was inaccessible from the web check on all eight paths. The production build succeeded with Next 16.2.10 after allowing its two build-time font downloads. Chrome visited each route directly and scrolled it in a fresh browser context on localhost. One pass used 390 × 844, DPR 2 and touch. Another used 1440 × 900, DPR 1. Browser cache was disabled. No inquiry was submitted. Build artifacts and browser diagnostics stayed outside tracked application files.

The first two columns below are completed encoded response bodies, including HTML, observed before scrolling in the unthrottled visits, in decimal MB. The sample was taken about 1.4 seconds after page completion. These totals can include navigation prefetch. Streaming video, canceled requests and work that finished later can be missing. The JS column is separately calculated by gzipping each script referenced directly by that route’s production HTML. Image counts include repeated marquee elements. These are different measures and should not be added together.

| Page | Mobile MB | Desktop MB | Initial script tags’ JS, gzip kB | HTML image elements / lazy | First engineering change |
|---|---:|---:|---:|---:|---|
| Home | 1.43 | 1.67 | 278 | 44 / 36 | Visible poster and image cards, desktop-only video source |
| About | 1.82 | 1.80 | 291 | 27 / 19 | Prioritize the newspaper artwork, release below-fold preload slots |
| Contact | 1.19 | 1.16 | 273 | 5 / 2 | Right-size the phone image, remove unrelated homepage preload |
| SEO | 7.39 | 7.41 | 304 | 75 / 35 | Replace GIF, resize PNG icons, repair broken image URL |
| Social media marketing | 1.22 | 1.24 | 298 | 45 / 35 | Fix shared logos, shrink note texture, isolate interactive forms |
| Influencer marketing | 6.23 | 6.25 | 294 | 56 / 35 | Replace GIF and defer large editorial collages |
| Branding services | 1.52 | 1.54 | 290 | 46 / 35 | Defer the lower-page Mumbai collage |
| Web development | 1.22 | 1.24 | 291 | 44 / 35 | Reduce shared startup cost and isolate form/FAQ state |

### Throttled mobile paint observations

Two additional cold-context visits per route used 4 Mbps down, 1 Mbps up, 80 ms of emulated network latency and 4? CPU slowdown. Chrome reported homepage LCP at 2.18 s in both runs, About at 2.26 and 2.28 s, and Contact at 1.28 and 1.36 s. On these runs the LCP elements were respectively the header logo, newspaper image and phone artwork. Neither throttled pass yielded an LCP entry at the pre-scroll sampling point on the five service pages. Those timings are unavailable. All five returned HTTP 200 and produced resource timings. Use a production filmstrip and field data before assigning a speed rating or promising a time saving. The test device was emulated Chrome on a workstation, with a local origin and no real CDN hop.

A separate mobile screenshot pass confirmed visible first-screen content on every route. All five service pages led with text and calls to action. The Mumbai collage and decorative GIF were outside those first viewports despite being fetched early. The homepage showed the scratch illustration even though Chrome identified the much smaller navbar wordmark as its LCP candidate. Track poster visibility explicitly when evaluating this design.

## Route-by-route implementation

### 1. Home

- In `components/hero/Hero.tsx`, the hero is transparent until an effect, a 50 ms timer and an 800 ms fade. Render the responsive art at full opacity from the initial document. Keep it visible while the canvas initializes. The current mobile LCP candidate in the initial unthrottled run was the navbar logo, which illustrates why a good LCP number alone does not guarantee the illustration was ready.
- In `components/hero/ColorRevealHero.tsx`, the server snapshot selects desktop markup, with two autoplay elements referencing the same 11,049,122-byte MP4. Use one eligible desktop playback surface if it can reproduce the grayscale reveal, provide a lightweight poster, encode a shorter loop at the actual display size, and pause it offscreen. Preserve scratch interaction on touch and the static artwork under reduced motion. Confirm zero mobile MP4 requests; do not count the file twice as estimated transferred bytes.
- The introductory overlay becomes the biggest observed desktop content in the unthrottled visit. Offer the glass-break effect after the page is useful, or make its skip control immediately available. Load its sound once on intent. Verify first visit and repeat visit separately.
- In `components/showroom/Showreel.tsx`, cards start at zero opacity and the entrance waits until the carousel reaches 88% of the viewport, then fades for 800 ms with a stagger. Remove both opacity gates and keep a short transform if desired. The first two local thumbnails total 48,514 bytes. If a cold scroll still outruns them, request those two earlier at normal priority. Keep the Instagram embed behind a click.
- In `FullServiceCreativeSection.tsx`, assign intrinsic sizes and lazy loading to the five below-fold card images. Verify the transition from the hero to the gallery with the section containment rule enabled and disabled. Keep containment only where it helps without delaying visible content.

### 2. About

- The mobile browser identified `about-newspaper.webp` as its LCP candidate. The original is 175 KB. The paper texture is another 187 KB and the creative-process image is 132 KB. Supply viewport-appropriate variants, match image sizes to the collage layout, and prioritize only the candidate for that viewport.
- `AboutManifesto.tsx` and `AboutFounders.tsx` explicitly prioritize below-fold artwork. Remove the priority from those placements and retain reserved image space. The philosophy original alone is 392 KB, although Next can deliver a smaller derivative.
- Separate static editorial text from interactive disciplines and client sections. Initialize their animation handlers as visitors approach. Check that fast scrolling exposes real images immediately and founder portraits retain their crop.

### 3. Contact

- The mobile browser selected a 1,200 px optimizer URL for `phone-envelope.webp`, whose source is 620 px wide. Set responsive sizes for the actual phone-art column, verify the chosen URL at mobile and desktop DPRs, and compare visual quality with directly serving this 42 KB source. Keep it discoverable early where it is the LCP image.
- Apply shared logo and preload fixes first. Both logos and the homepage mobile illustration ranked among this page’s largest mobile requests. Keep office/map artwork lazy and give it dimensions. The existing static map preview avoids a map SDK on first load.
- The contact reveal observer waits for 12% intersection and adds a 700 ms transition. Exempt the hero copy, phone artwork and form from the opacity gate. Keep the hero CTA and form usable while deferring the FAQ enhancement. Verify keyboard navigation, local validation and submit feedback with a stubbed response. Measure real submission latency separately from page paint.

### 4. SEO

- Remove the GIF first. Then resize the small PNG icon families in `public/icons`. Twenty PNGs total 1,695,779 bytes on disk; an in-memory 96 px WebP trial for the complete set totaled 69,854 bytes. This is a candidate encoding for high-density 28–32 px placements. Check thin lines and transparency at actual size. The aggregate is an asset estimate, not a single-page saving.
- Repair `icon_Cost-efficient,.png`. It was broken on both device visits. A direct request using the literal comma returned 404; encoding the comma as %2C returned 200. A simple versioned filename and an updated reference at `app/seo/page.tsx` make the fix straightforward. Treat visible broken images as a release failure.
- Make the lower Mumbai collage and secondary illustrations responsive and lazy. Keep the hero heading visible immediately. Keep the existing dashboard tab state local and isolate the two forms and FAQs from the long page. This route has the largest measured initial JS and HTML among the eight.

### 5. Social media marketing

- Both shared wordmarks, the homepage-only mobile illustration, and the common note-paper texture were among the largest initial requests. The note graphic is 3,953 × 3,969 even though its file is just 59 KB. A 900 px trial was 11 KB. Size its variants for the form card and keep the paper color as the immediate background.
- The route owns state for two forms, tabs, FAQs and a carousel. Extract these as independent client components, keep the pitch and case-study copy server-rendered, and measure typing performance before and after. Give the moving client-logo strip stable dimensions and check that newly exposed logos appear during a fast swipe.

### 6. Influencer marketing

- After the shared GIF, the initial mobile requests include Mumbai Influencer Collage (299 KB), Four Principles (294 KB) and Influencer Marketing Sticker Collage (238 KB). Together the originals total about 832 KB. Use responsive variants of each, reserve dimensions and request the lower two sections as they approach. Keep the selected first-screen artwork eager if the layout changes.
- Scroll straight from the hero to these illustrations with a cold cache and then navigate back from a reel. Verify immediate captions, intact layouts and a visible next image within the scroll target below.

### 7. Branding services

- The 299 KB Mumbai collage appears among the largest requests before scrolling even though its markup is near the bottom of the route. Supply a responsive lazy image with its intrinsic aspect ratio. Verify it drops out of the initial request list.
- Apply the same sized note-paper asset and logo strip improvements as Social. Separate editable form and accordion state from the static service description. Leave the reel modal click-loaded.

### 8. Web development

- Begin with the shared logo, preload and oversized note-paper fixes. This route had roughly the same initial mobile body total as Social without the large GIF. Spending time re-encoding the hero video will not address its initial payload.
- Separate the two forms, offer selector, FAQ and carousel from static page content. Keep form feedback and primary links available immediately. Measure keypress-to-paint and the first accordion interaction after a cold load.

## Shared delivery changes

| Area | Implementation | Evidence to collect before release |
|---|---|---|
| Route preloads | Move the 96,818-byte mobile scratch image and 46,154-byte desktop hammer out of the root layout. Let the homepage own its responsive poster. Fetch the hammer only when the intro runs. | Direct visits to all seven other pages request neither asset. A repeat desktop homepage visit skips the hammer if the intro is dismissed. |
| Cache policy | The local production logo returned `public, s-maxage=3600, stale-while-revalidate=86400`. The last catch-all overrides the intended browser policy. Scope HTML rules to pages. Fingerprint long-lived public media before assigning a year of immutable browser caching. Leave Next’s hashed assets under its normal handling. Exclude the contact API from public page rules. | Check real CDN headers on HTML, versioned media, a stable public URL, optimized images, framework chunks and API responses. In a normal warm-browser reload the same logo should come from cache. Deploy an updated logo and confirm it gets a new URL. |
| Client JavaScript | All five service pages are client entries. Start with SEO and use it as the pilot. Move static headings, editorial sections and data rendering into server components. Port required styled-jsx to scoped CSS as needed. Keep small client islands for forms, tabs, carousels and FAQs. | Measure compressed entry scripts and CPU profiles before/after. Confirm identical copy, functional forms, anchors and keyboard controls. Roll the pattern to the other four routes only after the pilot improves the baseline. |
| Global motion | The root imports GSAP, ScrollTrigger, Lenis and cursor behavior. Touch detection skips Lenis initialization but the static import still reaches shared code. Load optional effects on eligible devices and routes; keep native scrolling immediately usable. Pause offscreen or hidden-tab effects. Preserve existing idle/visibility guards in sticker physics. | Compare mobile downloaded chunks, main-thread work while idle, scroll smoothness and the first click on a midrange phone. Profile desktop cursor DOM effects separately. |
| Fonts and styles | Both fonts are already self-hosted in the built output. Check which weights/subsets the first viewport actually uses. Disable unnecessary preloads only after checking layout and typography across routes. The build itself needs Google Fonts network access. | Verify first paint with slow fonts, text wrapping, and CLS. If an offline build is a delivery requirement, package licensed local font sources separately. |
| Asset maintenance | Inventory covers 142 public entries plus the application icon, 23.60 MB together. Fourteen entries share bytes with an earlier file. Consolidate proven aliases when editing those assets. Extend the conversion scripts to cover icon paths and filenames with spaces. | Track actual requested URLs and decode dimensions. Repository duplication alone is insufficient evidence of visitor bandwidth savings. Preserve existing public URLs or provide a migration. |
| Navigation | Existing service aliases redirect; the local legacy SEO route returned 308. Use canonical paths in internal links. Keep selective Next link prefetch for likely next clicks. Measure background traffic before changing prefetch globally. | Compare home → service → contact, back navigation, and a direct cold visit. Verify a quick feedback state while the next route is pending. |

## Rollout and acceptance criteria

The practical goal is immediate visible feedback. A cold visit necessarily spends time on the connection, response, decode and paint. Use separate targets for first visit, repeat navigation and scrolling. The figures below are proposed engineering budgets to validate on representative devices.

| Stage | Deliverable | Acceptance test |
|---|---|---|
| First release | GIF, logo variants, broken icon, page-specific preloads, visible reel cards | Zero broken images after scrolling all eight routes. Zero decorative GIF requests on the two affected routes. No unrelated homepage media on direct service visits. |
| Second release | Homepage poster/video gating, sized illustrations, About priorities, lazy footer and card imagery, correct cache headers | Zero mobile homepage MP4 requests. During a normal swipe the next card image should be visible when its card enters view. For a rapid jump target a 95th-percentile wait of 200 ms or less under the agreed mobile profile. Confirm unchanged layout while images decode. |
| Third release | Split service page client boundaries and conditionally load motion. Start with SEO and compare the production build before expanding. | First milestone ≤220 kB gzip of initial JS per route, measured the same way as the baseline. Aim for ≤1 MB of completed pre-scroll mobile bodies per route, then tighten by route. Investigate every regression exceeding 10%. |
| Production verification | Record baseline and candidate on the same deployment region, device and cold/warm cache settings. | For each page run at least five cold navigations and five warm navigations. Report median and range. At the 75th percentile of real visits target LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1, segmented by mobile and desktop. Stretch target for the main content on a warm navigation is 300 ms. |

For the lazy-image complaint, record three timestamps for each representative image: request start, decode readiness, and first visible frame. A late request calls for earlier discovery or near-viewport scheduling. A long download/decode calls for smaller variants. A ready image behind a transparent card calls for a reveal change. Use a DevTools filmstrip to verify the first visible frame. Test the homepage reels, service logo strip, influencer collage, About founders and Contact office image. Include a fast vertical scroll and horizontal carousel swipe.

Keep layout, keyboard access, reduced motion and touch behavior in the release checks. Capture interaction traces for a reel click, FAQ expansion and form keystroke. Use production real-user measurements to judge long-tail network and input delays. [Google’s Core Web Vitals definitions and thresholds](https://web.dev/articles/vitals)

