# SP Securities — Corporate Website

A modern, light-themed portfolio website for **SP Securities**, a Pune-based
security and facility management company serving Pune and Mumbai.

The design follows the company logo: **gold gradient on black**, on an ivory/light base, with
Playfair Display headings and Plus Jakarta Sans body text.

---

## 1. Glimpse of the project

| Page                | Path                    | What it covers                                                                 |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| Home                | `/`                     | Hero, stats, two service divisions, why-us, industries, coverage, testimonials |
| Services            | `/services`             | Division overview + 4-step onboarding process                                  |
| Security Services   | `/services/security`    | 10 security capabilities + training standards                                  |
| Facilities Services | `/services/facilities`  | 6 facility capabilities + delivery model                                       |
| About Us            | `/about`                | Story, mission/vision/values, compliance, stats                                |
| Gallery             | `/gallery`              | Filterable photo grid (Security / Facilities / Technical / Team / Sites)       |
| Careers             | `/careers`              | Live job openings (Firebase) + application form                                |
| Contact             | `/contact`              | Contact details, Google Map, enquiry form                                      |
| Admin               | `/admin`                | Firebase-auth protected console to add/remove job openings                     |
| Privacy Policy      | `/privacy-policy`       | Linked in footer                                                               |
| Terms & Conditions  | `/terms-and-conditions` | Linked in footer                                                               |
| Cookie Policy       | `/cookies`              | Linked in footer                                                               |

Detailed project documentation lives in the **`brain/`** folder.

---

## 2. Tech stack

- **React 19** + **TypeScript**
- **TanStack Start / TanStack Router** (file-based routing with SSR and per-route SEO head tags)
- **Vite 8** build tooling
- **Tailwind CSS v4** (CSS-first design system in `src/styles.css`)
- **lucide-react** icons
- **Firebase** — Firestore (jobs, enquiries, applications), Authentication (admin login),
  Storage and Hosting
- **sonner** for toasts, **shadcn/ui** primitives available in `src/components/ui`

---

## 3. Run locally

```bash
npm install      # or bun install
npm run dev      # http://localhost:8080
npm run build    # production build
```

---

## 4. Firebase setup (step by step)

Until you complete this, the site runs in **demo mode**: job postings are stored in the browser
only, the admin login is bypassed, and form submissions are logged to the console instead of saved.

### Step 1 — Create the Firebase project

1. Go to <https://console.firebase.google.com> and click **Add project**.
2. Name it `sp-securities-facilities`, accept the defaults and create it.

### Step 2 — Register a Web app

1. In the project, click the **Web (`</>`)** icon → **Register app** (nickname: `sp-website`).
2. Copy the `firebaseConfig` values shown on the next screen.

### Step 3 — Add the keys to this project

1. Copy `.env.example` to `.env` in the project root.
2. Paste the values:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=sp-securities-facilities.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sp-securities-facilities
VITE_FIREBASE_STORAGE_BUCKET=sp-securities-facilities.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef
```

3. Restart the dev server. (These are publishable web keys — safe in the browser. Security is
   enforced by Firestore rules, below.)

### Step 4 — Enable Firestore

1. **Build → Firestore Database → Create database** → production mode → region `asia-south1` (Mumbai).
2. Collections are created automatically on first write: `jobs`, `enquiries`, `applications`.

### Step 5 — Firestore security rules

**Firestore → Rules**, paste and publish:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read job openings; only signed-in admins can change them
    match /jobs/{jobId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // Visitors can submit enquiries and applications; only admins can read them
    match /enquiries/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    match /applications/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### Step 6 — Enable Authentication for the admin page

1. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**.
2. **Users → Add user**: create the HR/admin account (e.g. `admin@spgroupcorp.com`).
3. Sign in at `/admin` with that account to publish job openings.

### Step 7 — Enable Storage (optional, for resumes/gallery uploads)

1. **Build → Storage → Get started** → region `asia-south1`.
2. Suggested rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{file} {
      allow write: if true;
      allow read: if request.auth != null;
    }
    match /gallery/{file} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Step 8 — Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting     # choose the existing project
npm run build
firebase deploy --only hosting
```

Notes:

- This app is server-rendered. For full SSR on Google infrastructure use **Firebase App Hosting**
  (Build → App Hosting → Connect your GitHub repo), which builds and runs the app for you.
- For plain **Firebase Hosting**, set the public directory to the client build output and add the
  SPA rewrite `{"source": "**", "destination": "/index.html"}`.

### Step 9 — Custom domain

**Hosting → Add custom domain** → `spgroupcorp.com` → add the TXT/A records at your registrar.

---

## 5. SEO

- Unique `<title>`, meta description, keywords, Open Graph and canonical tags per page
- JSON-LD structured data: `Organization`, `SecurityService`, `LocalBusiness`
- Local SEO for Pune & Mumbai (geo meta tags, service-area content, city keywords)
- `public/robots.txt` (admin disallowed) and `public/sitemap.xml`
- Semantic headings, descriptive alt text, lazy-loaded images

After deploying to a live domain, replace `https://www.spgroupcorp.com` in `public/sitemap.xml`
and `public/robots.txt` if the final domain differs, then submit the sitemap in Google Search
Console.

---

## 6. Where to edit content

| What                             | File                                                        |
| -------------------------------- | ----------------------------------------------------------- |
| Company details, phone, address  | `src/data/site.ts` → `company`                              |
| Service lists                    | `src/data/site.ts` → `securityServices`, `facilityServices` |
| Gallery photos                   | `src/data/site.ts` → `galleryImages`                        |
| Stats, industries, service areas | `src/data/site.ts`                                          |
| Colors, fonts, gradients         | `src/styles.css`                                            |
| Job openings                     | `/admin` page (no code needed)                              |
