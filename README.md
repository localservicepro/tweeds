# Tweed Property Maintenance — Website

A modern, fast, SEO-optimised static website for **Tweed Property Maintenance**, a
local property-maintenance business in Murwillumbah NSW serving the whole Tweed
Shire. Built as clean, semantic, Webflow-friendly HTML/CSS/JS with no build step.

## Live business details

- **Business:** Tweed Property Maintenance
- **Address:** Murwillumbah NSW 2484
- **Phone:** 0448 287 547 (`+61448287547`)
- **Email:** info@tweedpropertymaintenance.com.au
- **Domain:** tweedpropertymaintenance.com.au
- **Service areas:** Murwillumbah, Tweed Heads, Banora Point, Pottsville, Kingscliff, Terranora, Cabarita

## Pages

| File | Purpose | Primary keyword |
| --- | --- | --- |
| `index.html` | Homepage | Property Maintenance Tweed Heads |
| `services.html` | Services overview | Property maintenance services Tweed Shire |
| `lawn-mowing-garden-care-murwillumbah.html` | Service page | Lawn Mowing Murwillumbah |
| `pressure-washing-tweed-heads.html` | Service page | Pressure Washing Tweed Heads |
| `window-cleaning-kingscliff-tweed-coast.html` | Service page | Window Cleaning Kingscliff |
| `handyman-services-murwillumbah-tweed-heads.html` | Service page | Handyman Murwillumbah & Tweed Heads |
| `about.html` | About | Local Tweed Shire property maintenance |
| `contact.html` | Contact / quote | Free property maintenance quote |

## Structure

```
/
├── index.html
├── services.html
├── lawn-mowing-garden-care-murwillumbah.html
├── pressure-washing-tweed-heads.html
├── window-cleaning-kingscliff-tweed-coast.html
├── handyman-services-murwillumbah-tweed-heads.html
├── about.html
├── contact.html
├── css/style.css             # shared brand kit (design tokens + components)
├── js/main.js                # sticky nav, mobile menu, scroll reveal, count-up, form
├── js/speed-insights.js      # Vercel Speed Insights tracking
├── assets/logo.jpg           # brand logo (used in nav, footer, favicon, schema)
├── robots.txt
├── sitemap.xml
└── package.json              # npm dependencies (@vercel/speed-insights)
```

## Design system / brand kit

The visual language follows the approved homepage design and is centralised in
`css/style.css`:

- **Colours:** ink `#08172B`, blue `#0C6FD0`, cyan `#35C6F4`, wash `#EEF5FB`,
  brand gradient `linear-gradient(135deg,#0C6FD0,#35C6F4)`
- **Type:** Archivo (display headings), Inter Tight (body) — Google Fonts
- **Components:** buttons, service cards, dark strips, marquee, FAQ accordions,
  process steps, gallery, stat counters, CTA bands, sticky/blur nav + mobile drawer

## SEO / GEO / AEO

- Unique meta title + description + canonical per page (from the SEO strategy doc)
- JSON-LD schema: `LocalBusiness` / `HomeAndConstructionBusiness`, `Service`,
  `FAQPage`, `BreadcrumbList`, `WebSite`, `AboutPage`, `ContactPage`, `ItemList`
- AEO: 40–60 word direct-answer callouts + natural-language FAQ on every page
- GEO: consistent NAP, citable factual service descriptions, topical coverage
- Local signals: geo meta tags, 7-suburb coverage, service+suburb headings
- `robots.txt` + `sitemap.xml` ready to submit to Google Search Console

## Webflow readiness

- Plain semantic HTML with descriptive, reusable class names (no framework lock-in)
- Single shared stylesheet and one small vanilla-JS file — no bundler/build step
- Standard components (nav, cards, accordions via `<details>`, forms) that map
  cleanly onto Webflow elements
- Forms use standard `name` attributes; on launch, point them at Webflow Forms
  (or Formspree) — the front-end handler in `js/main.js` is a demo placeholder

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Performance Monitoring

Vercel Speed Insights is integrated to track Core Web Vitals and performance metrics:

- **Script:** `js/speed-insights.js` — initializes the Speed Insights queue and injects the Vercel tracking script
- **Integration:** Added to all 8 HTML pages in the `<head>` section
- **Activation:** Enable Speed Insights in your Vercel project dashboard
- **Data:** Metrics appear in the Vercel dashboard after deployment and user visits

The script loads `/_vercel/speed-insights/script.js` which is automatically served by Vercel when Speed Insights is enabled for the project.

## Notes for launch

- Images currently use free Pexels photos (the images approved in the homepage
  design). Swap in real job photos as they become available, keeping the
  suburb + service alt text pattern (e.g. "pressure washing driveway Tweed Heads").
- Connect Google Analytics 4 + Search Console and submit `sitemap.xml`.
- Create/verify the Google Business Profile and keep NAP identical to this site.
- **Enable Speed Insights** in the Vercel project dashboard to start tracking performance metrics.
