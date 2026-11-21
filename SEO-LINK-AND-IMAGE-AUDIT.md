# One Impact link and image audit

21 November 2026. Compared the live Vercel site with the production HTML generated from this checkout. Counts include repeated navigation, responsive layouts and marquees.

## Link findings

| Destination | Finding and action |
|---|---|
| Showroom | The live navigation points to `/#card-swap`, which has no target. The local homepage now exposes that ID on the service cards. |
| Our Founders | The local footer now opens `/about#founders` directly. |
| Homepage WhatsApp | The live homepage uses the placeholder-looking number `919999999999`. The local link now uses `918369018104`, matching the five service pages. Account ownership needs business confirmation. |
| Privacy Policy and Terms of Use | Both use `/#` on every page. Supply the two published policy URLs or publish the policies. |
| Social profiles | LinkedIn, Instagram and YouTube point to platform homepages across the site. The live footer also links to the Behance homepage. Supply official profile URLs. |
| Instagram reels | External requests for the five reel permalinks returned no HTTP response in this environment. Their availability needs independent confirmation. |
| Contact details | Email links were inventoried without sending mail. The contact page hides unconfigured social and directions links. |

## Page coverage

| Page | Live HTTP | Live links | Live images | Live empty alt | Build links | Build images | Build empty alt |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 200 | 49 | 45 | 1 | 48 | 45 | 2 |
| `/about` | 200 | 48 | 27 | 3 | 47 | 27 | 1 |
| `/contact` | 200 | 42 | 5 | 0 | 42 | 5 | 0 |
| `/branding-services` | 200 | 48 | 46 | 5 | 47 | 46 | 5 |
| `/influencer-marketing` | 200 | 48 | 56 | 13 | 47 | 56 | 13 |
| `/seo` | 200 | 48 | 75 | 13 | 47 | 75 | 13 |
| `/social-media-marketing` | 200 | 48 | 45 | 5 | 47 | 45 | 5 |
| `/web-development` | 200 | 48 | 44 | 4 | 47 | 44 | 4 |

## Link inventory

The tables group repeated anchors by destination. Internal fragments were checked against IDs in the destination page. External social and WhatsApp checks yielded no HTTP status. Email delivery and the identity of external account owners were outside the crawl.

| Destination | Live occurrences | Build occurrences | Pages in live site or build |
|---|---:|---:|---|
| `#audit` | 10 | 10 | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `#contact-form` | 1 | 1 | `/contact` |
| `#usps` | 5 | 5 | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/` | 24 | 24 | All eight |
| `/#` | 16 | 16 | All eight |
| `/#about-banner` | 8 | 8 | All eight |
| `/#card-swap` | 16 | 16 | All eight |
| `/#showreel` | 24 | 24 | All eight |
| `/about` | 41 | 33 | All eight |
| `/about#founders` | 0 | 8 | All eight |
| `/branding-services` | 26 | 26 | All eight |
| `/contact` | 41 | 41 | All eight |
| `/influencer-marketing` | 27 | 27 | All eight |
| `/seo` | 27 | 27 | All eight |
| `/social-media-marketing` | 27 | 27 | All eight |
| `/web-development` | 26 | 26 | All eight |
| `https://behance.net` | 8 | 0 | All eight |
| `https://instagram.com` | 8 | 8 | All eight |
| `https://linkedin.com` | 8 | 8 | All eight |
| `https://wa.me/918369018104` | 20 | 21 | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `https://wa.me/919999999999` | 1 | 0 | `/` |
| `https://youtube.com` | 8 | 8 | All eight |
| `mailto:connect@oneimpact.in` | 1 | 1 | `/web-development` |
| `mailto:contact@oneimpact.co` | 0 | 2 | `/`, `/contact` |
| `mailto:hello@oneimpact.in` | 2 | 0 | `/`, `/contact` |
| `mailto:teamhr@oneimpact.co` | 4 | 4 | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing` |
| `tel:+918369018104` | 0 | 1 | `/contact` |

The reel dialog also links to the contact and service routes listed above and references the following Instagram reels.

- `https://www.instagram.com/reel/DZFZYEasxaC/`
- `https://www.instagram.com/reel/C5a7zP5LDvg/`
- `https://www.instagram.com/reel/DSRk3L1kS23/`
- `https://www.instagram.com/reel/DGCm30TqayX/`
- `https://www.instagram.com/reel/DPa2vfZk71z/`

## Image alt text

The following is the implemented alt text in the rebuilt pages. Client logos identify the brand, portraits identify the person, and illustrations and reel covers describe their subject. Empty alt text lets assistive technology skip decorative art. Each row groups uses of the same asset and description. Next image optimizer URLs are shown as their source paths.

| Image asset | Implemented alt text | Pages |
|---|---|---|
| `/LOGO/oneimpact-logo.webp` | One Impact | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/800px-Jharkhand_emblem.webp` | Jharkhand | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/DSP Mutual fund.webp` | DSP Mutual Fund | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/LEDEN Clube.webp` | LenDen Club | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/MOXIE Beauty.webp` | MOXIE Beauty | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/PayU.svg.webp` | PayU | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/SMAAASH.webp` | SMAAASH | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/SWEDT INDIA.webp` | Sweet India | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/SWEET BENGAL.webp` | Sweet Bengal | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/axistrustee.webp` | Axis Trustee | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/bloomberg-quint-vector-logo.webp` | Bloomberg Quint | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/dsci.webp` | DSCI | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/livelaw-logo.webp` | LiveLaw | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/logo-il.webp` | IL | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/sanpdealbrandlogo_2.webp` | SnapDeal | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/LOGO/transparent/winston-faridabad-ma84f9666c.webp` | Winston | `/`, `/about`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/_next/static/media/founder-kajol-chavan.29_ntifokh6yg.webp` | Kajol Chavan, co-founder and COO of One Impact | `/about` |
| `/_next/static/media/founder-kartik-mittal.1kqrxsci_efx7.webp` | Kartik Mittal, partner and CEO of One Impact | `/about` |
| `/images/Breaker.svg` | Decorative · `alt=""` | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/OurPhilosophy-image.webp` | Camera, drawing tablet and screen displaying the One Impact wordmark | `/about` |
| `/images/about-creative-process.webp` | Campaign layouts and brand swatches beside a laptop | `/about` |
| `/images/about-hero-team.webp` | Creative team working around a shared studio desk | `/about` |
| `/images/about-lamp-2020.webp` | Desk lamp lighting a sheet of paper | `/about` |
| `/images/about-today-building.webp` | One Impact lettering on a building façade | `/about` |
| `/images/about-us-blue-paper-cut.svg` | Decorative · `alt=""` | `/` |
| `/images/contact-us-bg.webp` | Decorative · `alt=""` | `/` |
| `/images/first-banner-black-paper-cut.svg` | Decorative · `alt=""` | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/home-services/branding-service.webp` | Designer arranging type and color samples for a brand identity | `/` |
| `/images/home-services/influencer-service.webp` | Creator recording a campaign video in a studio | `/` |
| `/images/home-services/seo-service.webp` | Marketer tracking search performance on an analytics dashboard | `/` |
| `/images/home-services/smm-service.webp` | Social media campaign displayed across a laptop and phone | `/` |
| `/images/home-services/web-dev-service.webp` | Developer working on a website layout and code on a laptop | `/` |
| `/images/illustration.webp` | Marketer examining a mobile screen through a magnifying glass | `/seo` |
| `/images/megaphone-v2.webp` | Megaphone | `/about` |
| `/images/reels/reel-1.webp` | Woman in green presenting an interiors project in the Sanjay Puri Interiors reel | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/reels/reel-2.webp` | Speaker discussing architecture in the Dialogues Directory interview | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/reels/reel-3.webp` | Close-up of a dessert in the Cafe Pibatie brand film | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/reels/reel-4.webp` | Hands arranging sweets in the Sweet Bengal campaign reel | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/images/reels/reel-5.webp` | Woman presenting jewelry in the Vinanti Manji reel | `/`, `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/media/about-creative-process-94aa75f47699.webp` | Campaign layouts, color swatches and a laptop with an analytics dashboard | `/about` |
| `/media/about-newspaper-2e0d41a99426.webp` | Newspaper clipping with the headline New Agency Launch | `/about` |
| `/media/about-paper-texture-0a62cdae9fdb.webp` | Decorative · `alt=""` | `/about` |
| `/media/animated-icon-b1dc2533fe07.webp` | Decorative · `alt=""` | `/influencer-marketing`, `/seo` |
| `/media/aso-services-app-store-optimization-c88801c2e861.webp` | ASO services (App Store Optimization) | `/seo` |
| `/media/cro-services-conversion-rate-optimization-c8908d4922e2.webp` | CRO services (Conversion Rate Optimization) | `/seo` |
| `/media/enterprise-seo-services-6adc9d57d68d.webp` | Enterprise SEO services | `/seo` |
| `/media/four-principles-of-influencer-marketing-528ff6d8c2af.webp` | Campaign planners reviewing audience and social engagement charts | `/influencer-marketing` |
| `/media/hero-poster-05180473b626.webp` | Illustrated One Impact creative team working with a camera, computer and mobile devices | `/` |
| `/media/icon-an-edge-over-competitors-8caa84ce0d8d.webp` | An edge over competitors | `/seo` |
| `/media/icon-better-visibility-325ea03b8c97.webp` | Better visibility where it counts | `/seo` |
| `/media/icon-cost-efficient-2aaac34c829f.webp` | Cost-efficient, long-term strategy | `/seo` |
| `/media/icon-higher-rankings-ec305e801a7c.webp` | Higher rankings without paying for ads | `/seo` |
| `/media/icon-smarter-decisions-from-real-data-8c0f03fc6be5.webp` | Smarter decisions from real data | `/seo` |
| `/media/icon-traffic-that-converts-f0a8170d6952.webp` | Traffic that converts | `/seo` |
| `/media/icons-ai-enhanced-036cf756a36b.webp` | AI-enhanced | `/seo` |
| `/media/icons-data-led-173f42bcdbe7.webp` | Data-led | `/seo` |
| `/media/icons-made-to-fit-5db0d208b917.webp` | Made to fit | `/seo` |
| `/media/icons-sales-first-c1afb62824a4.webp` | Sales-first | `/seo` |
| `/media/influencer-marketing-sticker-collage-dd17265d8a24.webp` | Creator filming with a ring light beside social posts and engagement icons | `/influencer-marketing` |
| `/media/mumbai-influencer-collage-9dff9b265237.webp` | Collage of a creator filming beside the Gateway of India, a Mumbai taxi and a local train | `/branding-services`, `/influencer-marketing`, `/seo` |
| `/media/note-paper-6847e129ebad.webp` | Decorative · `alt=""` | `/branding-services`, `/influencer-marketing`, `/seo`, `/social-media-marketing`, `/web-development` |
| `/media/penalty-recovery-services-a858a65425e0.webp` | Penalty recovery services | `/seo` |
| `/media/seo-audit-services-dfe153958455.webp` | SEO audit services | `/seo` |
| `/media/seo-page-19-db9fd161b135.webp` | Experience | `/seo` |
| `/media/seo-page-authoritativeness-988829fc3449.webp` | Authoritativeness | `/seo` |
| `/media/seo-page-expertise-ec51f7ec5c1a.webp` | Expertise | `/seo` |
| `/media/seo-page-trustworthiness-52db6db45746.webp` | Trustworthiness | `/seo` |
| `/media/seo-services-291749875a32.webp` | SEO services | `/seo` |
| `/media/wordmark-black-4fb515125c4d.webp` | One Impact | All eight |
| `/media/wordmark-white-8229a9710d60.webp` | One Impact | All eight |
| `/oneimpact-contact/map-sample.webp` | Illustrated street map with a yellow location pin | `/contact` |
| `/oneimpact-contact/office-sample.webp` | Illustration of a studio workspace with One Impact lettering on the wall | `/contact` |
| `/oneimpact-contact/phone-envelope.webp` | Hand holding a telephone receiver above an envelope | `/contact` |

## Images shown after interaction or conditionally

| Asset | Implemented alt text |
|---|---|
| `/images/stickers/after effects.webp` | Adobe After Effects icon |
| `/images/stickers/duck.webp` | Yellow duck sticker |
| `/images/stickers/Illustrator.webp` | Adobe Illustrator icon |
| `/images/stickers/instgram.webp` | Instagram icon |
| `/images/stickers/lightning.webp` | Lightning bolt sticker |
| `/images/stickers/Meta.webp` | Meta logo |
| `/images/stickers/peace.webp` | Peace sign hand sticker |
| `/images/stickers/photoshop.webp` | Adobe Photoshop icon |
| `/images/stickers/premier pro.webp` | Adobe Premiere Pro icon |
| `/images/stickers/rocket.webp` | Rocket ship sticker |
| `/images/stickers/smiley.webp` | Smiling face sticker |
| `/images/stickers/star.webp` | Starburst sticker |
| `/images/hammer-right-v4.webp` | Decorative cursor · `alt=""` |
| `/oneimpact-contact/map-sample.webp` (directions enabled) | Illustrated map with a location pin |

Coverage includes image elements in the initial HTML of the eight public pages and the additional component states listed above. CSS backgrounds, video frames and unused files have no HTML image alt attribute.
