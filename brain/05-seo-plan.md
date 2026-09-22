# Project Brain — SEO Plan (Pune & Mumbai)

## Target intent

Local B2B searches in Maharashtra, e.g.:

- security agency in Pune / security guard services Pune / PSARA licensed security company Pune
- security services Mumbai / bouncer & event security Pune
- facility management company Pune / housekeeping services Mumbai / office cleaning Pune
- pest control for offices Pune / integrated facility management India
- security guard jobs Pune / housekeeping jobs Mumbai (careers traffic)

## On-page implementation

| Technique                                                    | Where                                              |
| ------------------------------------------------------------ | -------------------------------------------------- |
| Unique title + meta description per page                     | every route's `head()`                             |
| Keyword meta on commercial pages                             | home, security, facilities, careers                |
| Canonical URLs                                               | leaf routes only (`links: [{ rel: "canonical" }]`) |
| Open Graph + Twitter card                                    | `__root.tsx` defaults, overridden per page         |
| Geo meta (`geo.region: IN-MH`, `geo.placename: Pune`)        | `__root.tsx`                                       |
| JSON-LD `Organization`                                       | `__root.tsx`                                       |
| JSON-LD `SecurityService`                                    | home route                                         |
| JSON-LD `LocalBusiness` with NAP + areaServed                | contact route                                      |
| Semantic H1→H3 hierarchy, one H1 per page                    | all routes                                         |
| Descriptive alt text, lazy loading, width/height             | all images                                         |
| Internal linking (header, footer, CTA bands, division cards) | sitewide                                           |
| Service-area content blocks (16 Pune/Mumbai localities)      | home + footer                                      |
| `robots.txt` with admin disallowed                           | `public/robots.txt`                                |
| `sitemap.xml` with 11 URLs + priorities                      | `public/sitemap.xml`                               |
| `/admin` excluded via `noindex, nofollow`                    | admin route head                                   |

## After go-live checklist

1. Point `sitemap.xml` and `robots.txt` at the final domain if it is not `www.spgroupcorp.com`.
2. Verify the domain in **Google Search Console** and submit the sitemap.
3. Create/claim the **Google Business Profile** for the Pune office (exact NAP match with the
   contact page) and add Mumbai as a service area.
4. Add Google Analytics 4 / Tag Manager.
5. Build local citations: JustDial, IndiaMART, Sulekha, Yellow Pages India, LinkedIn.
6. Publish location-specific landing pages later (e.g. `/security-services-hinjewadi`) if
   keyword research supports it.
7. Add real client logos and case studies — strong trust and dwell-time signals.

## Performance notes

- Fonts preconnected and loaded with `display=swap`.
- Only the hero image is eager-loaded; every other image is `loading="lazy"`.
- No heavy animation libraries; transitions are CSS-only.
