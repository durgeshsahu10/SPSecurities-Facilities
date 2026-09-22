# Project Brain — Architecture, Data and Firebase

## Folder map

```
src/
  assets/            hero + section photography, logo asset pointer
  components/        site-header, site-footer, page-hero, legal-page, ui/ (shadcn)
  data/site.ts       ALL editable content: company, services, gallery, stats, areas
  lib/
    firebase.ts      lazy Firebase init, isFirebaseConfigured flag
    jobs.ts          jobs CRUD + enquiry/application submissions (+ demo fallback)
    utils.ts         cn() helper
  routes/            file-based routes (see README table)
  styles.css         design system
public/
  favicon.png, robots.txt, sitemap.xml
brain/               this documentation
```

## Routing

TanStack Router file-based. `src/routes/__root.tsx` holds the shell: header, `<Outlet />`,
footer, toaster, sitewide meta and Organization JSON-LD. `src/routeTree.gen.ts` is generated —
never edit it.

## Firestore data model

### `jobs`

| Field         | Type                                                      | Example                     |
| ------------- | --------------------------------------------------------- | --------------------------- |
| `title`       | string                                                    | "Security Guard (Male)"     |
| `department`  | "Security" \| "Facilities" \| "Operations" \| "Corporate" |                             |
| `location`    | string                                                    | "Hinjewadi, Pune"           |
| `type`        | "Full-time" \| "Part-time" \| "Contract"                  |                             |
| `experience`  | string                                                    | "0–3 years"                 |
| `salary`      | string                                                    | "₹16,000 – ₹20,000 / month" |
| `description` | string                                                    | free text                   |
| `createdAt`   | serverTimestamp                                           | used for ordering           |

### `enquiries` (contact form)

`name, company, phone, email, service, city, message, createdAt`

### `applications` (careers form)

`name, phone, email, city, role, experience, about, createdAt`

## Access control

- `/admin` requires Firebase Email/Password sign-in (`onAuthStateChanged` gate).
- Firestore rules (in README §5) allow public read of `jobs`, public create on `enquiries`
  and `applications`, and authenticated-only writes/reads elsewhere.
- `/admin` is `noindex, nofollow` and disallowed in `robots.txt`.

## Demo mode

`isFirebaseConfigured` is false when the `VITE_FIREBASE_*` env vars are missing. In that state:

- `listJobs()` returns four seeded openings (or whatever is in `localStorage`).
- `createJob()` / `removeJob()` write to `localStorage`.
- Form submissions are logged to the console.
- The admin page skips login and shows a yellow "demo mode" banner.

## Known follow-ups

- Replace placeholder contact details, stats and testimonials with real company data.
- Add resume file upload to Firebase Storage on the careers form.
- Add an admin view for reading submitted enquiries and applications.
- Swap Unsplash gallery images for real site photographs.
