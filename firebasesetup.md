# Firebase Setup — SP Securities & Facilities Website

Complete, step-by-step guide to connect this project to Firebase for all three goals:

1. **Host** the full website on Firebase (with server rendering intact)
2. **Store data** on Firebase (jobs, enquiries, applications + image/file storage)
3. **Secure the admin panel** (`/admin`) with email + password login

> Until this setup is complete, the site runs in **demo mode**: jobs live only in
> the browser (`localStorage`), the admin login is bypassed, and form submissions
> are logged to the console. You will know Firebase is connected when the yellow
> "Demo mode" banner on `/admin` disappears.

---

## 0. Before you start (requirements)

- [ ] A Google account (use the company's account, not a personal one, so the
      project survives staff changes).
- [ ] **Blaze (pay-as-you-go) billing** enabled on the Firebase project — required
      for App Hosting (step 5). Firestore, Auth and Storage stay within the free
      quota for a site of this size; you pay nothing extra in practice.
- [ ] Node.js 20+ on your machine (`node --version`). This project uses Node 24
      locally; Firebase builds with Node 20/22, which is compatible.
- [ ] Firebase CLI (only needed for the optional CLI deploy path in step 5):

```bash
npm install -g firebase-tools
firebase --version   # needs v14.4.0 or newer
firebase login
```

---

## 1. Create the Firebase project + connect the code

### Step 1.1 — Create the project

1. Go to <https://console.firebase.google.com> → **Add project**.
2. Name it `sp-securities-facilities` (any name works; this one matches the docs).
3. Disable Google Analytics for now if asked (you can add GA4 later) → **Create project**.

### Step 1.2 — Register the website as a Web app

1. Inside the project dashboard, click the **Web (`</>`)** icon.
2. Nickname: `sp-website` → **Register app** (skip "Add Firebase SDK" — the code
   already includes it via the `firebase` npm package).
3. You will see a `firebaseConfig` object. Keep this tab open.

### Step 1.3 — Put the keys into the project

1. In this repo, copy `.env.example` to `.env` (one already exists — just fill it):

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=sp-securities-facilities.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sp-securities-facilities
VITE_FIREBASE_STORAGE_BUCKET=sp-securities-facilities.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef
```

2. Copy each value from the `firebaseConfig` tab into the matching line.
3. **Restart the dev server** (`npm run dev`) — Vite only reads `.env` at startup.

> These are publishable web keys, safe to ship in the browser. Real security is
> enforced by the Firestore/Storage rules in steps 2 and 4, not by hiding keys.

### Step 1.4 — Confirm the connection

1. Open `http://localhost:8080/admin`.
2. If you see the **yellow "Demo mode" banner**, the keys are missing/wrong —
   recheck step 1.3. If the banner is **gone**, Firebase is connected.

---

## 2. Database — Firestore (jobs, enquiries, applications)

The site uses three collections (created automatically on first write — you never
create them by hand):

| Collection     | Written by                      | Fields                                                                                        |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| `jobs`         | Admin (`/admin`)                | `title`, `department`, `location`, `type`, `experience`, `salary`, `description`, `createdAt` |
| `enquiries`    | Contact form (`/contact`)       | `name`, `company`, `phone`, `email`, `service`, `city`, `message`, `createdAt`                |
| `applications` | Careers form (`/careers`)       | `name`, `phone`, `email`, `city`, `role`, `experience`, `about`, `createdAt`                  |
| `gallery`      | Admin gallery upload (`/admin`) | `url`, `alt`, `category`, `storagePath`, `createdAt`                                          |

`createdAt` is a server timestamp; job lists and the gallery are ordered
newest-first. No manual database indexes are needed (single-field ordering is
indexed automatically).

### Step 2.1 — Enable Firestore

1. Firebase console → **Build → Firestore Database → Create database**.
2. Choose **production mode** (locked down by default — we open exactly what the
   site needs in the next step).
3. Location: **`asia-south1` (Mumbai)** — closest to your Pune/Mumbai visitors.

### Step 2.2 — Publish the security rules

1. **Firestore Database → Rules** tab → replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read job openings; only signed-in admins can change them
    match /jobs/{jobId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // Gallery photos are public; only signed-in admins can add/remove them
    match /gallery/{photoId} {
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

2. **Publish**. What this means in plain words:
   - The public Careers page can _list_ jobs but nobody (except a logged-in
     admin) can add/remove them.
   - Anyone can _submit_ the contact/careers forms, but submissions are readable
     only by a logged-in admin — applicants' phone numbers and emails stay private.

### Step 2.3 — Test it

1. Submit the **contact form** (`/contact`) → **Firestore → Data** → an
   `enquiries` collection appears with your entry.
2. Go to `/admin` (sign in — see step 3), add a test job → check `/careers`
   shows it. Delete the test job afterwards.
3. On `/admin`, scroll to **Gallery photos** → upload a test image with a tag
   (e.g. `Team`) → check `/gallery` shows it under that filter. Delete the
   test photo afterwards (deleting removes both the Firestore record and the
   Storage file).

---

## 3. Admin login — Authentication (email + password)

The `/admin` page is gated by Firebase Authentication. Unauthenticated visitors
always see the **"Admin sign in"** form (there is no link to it anywhere on the
site — it is reachable only by typing the `/admin` URL directly).

### Step 3.1 — Enable the provider

1. **Build → Authentication → Get started**.
2. **Sign-in method → Email/Password → Enable → Save.** (Leave "Email link"
   off.)

### Step 3.2 — Create the admin account

1. **Authentication → Users → Add user**.
2. Email: `admin@spgroupcorp.com` (or the HR person's address), set a strong
   password → **Add user**.
3. Repeat for each additional staff member who should manage job openings.

### Step 3.3 — Verify the lock

1. Open `/admin` in an **incognito window** → you must see "Admin sign in",
   not the job console.
2. Sign in with the new account → job console appears, demo banner stays gone.
3. Wrong password → "Invalid email or password." toast. Correct.

### Step 3.4 — Day-to-day account tasks

- **Forgot password:** Authentication → Users → `⋮` → Reset password (sends an
  email link). There is no self-service reset link on `/admin` by design.
- **Remove access:** Authentication → Users → `⋮` → Delete user (immediate —
  Firestore rules reject their writes from that second on).
- **See submissions:** `/admin` → **Applications** tab, or Firestore → Data →
  `enquiries` / `applications` collections (readable only while signed in, per
  the step-2 rules).

### Step 3.5 — Console tour (tabs + auto sign-out)

After signing in, `/admin` has four tabs:

- **Job openings** — add/remove roles, tick "Require resume upload" per role.
- **Applications** — every careers-form submission in a table (contact details,
  resume link, submitted date) with a **Download CSV** button and per-row delete.
- **Enquiries** — every contact-form submission in a table with **Download CSV**
  and per-row delete.
- **Gallery photos** — upload tagged site photos shown on `/gallery`.

**Security:** the console signs you out automatically after **120 minutes
without any mouse, keyboard, touch or scroll activity**, showing a "Session
expired" screen. Any click or keypress restarts the 120-minute clock.

---

## 4. File storage — Cloud Storage (images + resumes)

Job _applications_ (name, phone, experience…) are text and live in Firestore
(step 2). Cloud Storage is for **files**: resume uploads and gallery/site photos.

### Step 4.1 — Enable Storage

1. **Build → Storage → Get started** → production mode → location
   **`asia-south1`**.
2. The site organises files into two folders (created on first upload):
   - `resumes/` — applicant resume files (private: admins only)
   - `gallery/` — gallery photos uploaded from `/admin` → **Gallery photos**
     section (public readable, shown on the `/gallery` page with tag filters:
     Security, Facilities, Technical, Team, Sites)

### Step 4.2 — Publish the storage rules

1. **Storage → Rules** → replace with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Anyone can upload a resume; only signed-in admins can download them
    match /resumes/{file} {
      allow write: if true;
      allow read: if request.auth != null;
    }
    // Gallery photos are public; only admins can upload/replace them
    match /gallery/{file} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

2. **Publish.**

### Step 4.3 — How resumes flow (per-job setting)

1. On `/admin` → **Job openings** tab, tick **"Require resume upload"** when
   creating a job. The opening shows a "Resume required" badge on `/careers`.
2. Applicants for such roles see a resume field (PDF/Word, max 5 MB, mandatory).
   The file uploads to `resumes/` and its link is stored on the application.
3. Roles without the checkbox keep the plain form — no upload field appears.

> Note: Firestore/Auth/Storage share the same `.env` keys from step 1 — no
> extra configuration is needed in code for uploads.

---

## 5. Email notifications — admin gets mailed on every submission

Whenever someone submits a **job application** (`/careers`) or a **contact
enquiry** (`/contact`), the site saves it to Firestore first and then emails
all details to **`Monikak@spgroupcorps.com`**. Email is best-effort: if sending
fails, the submission is still safely stored and the visitor still sees success.

Firebase has no built-in email sender, so the site sends through an SMTP
account **you** control (server-side only — the password never reaches the
browser). The client's company address only **receives** mail — she shares no
password and touches no settings. Pick one of the two options below.

### Step 5.1 — Choose a sender (Option A recommended to start)

**Option A — your own Gmail + App Password (fastest, free, no signup)**

Use _your_ freelancer Gmail as the sender. The client only receives
notifications at `Monikak@spgroupcorps.com` — she gives you nothing.

> App Passwords require 2-Step Verification on your account. An App Password is
> mail-only and revocable: it never exposes your main Google password.

1. Go to <https://myaccount.google.com> → **Security** → enable
   **2-Step Verification** if off.
2. Search settings for **App passwords** (or visit
   <https://myaccount.google.com/apppasswords>).
3. App name: `SP Website` → **Create** → copy the 16-character password
   (spaces don't matter).
4. Use it as `SMTP_PASS` below with `SMTP_USER` = your Gmail address.

When you hand the project over, the client creates her own App Password in 5
minutes and you swap two values — no code change.

**Option B — Brevo free SMTP relay (most professional, still no client action)**

Keeps your personal Gmail out of it, with a delivery dashboard and 300 free
emails/day. The site's mailer works with any SMTP host, so again no code
change — only different values:

1. Sign up free at <https://www.brevo.com> with your own email.
2. Verify a sender identity: **Settings → Senders** → add an address (your
   Gmail is fine, or `website@spgroupcorp.com`) and confirm it via the code
   they email you.
3. **SMTP & API → Generate a new SMTP key** → copy it.
4. Use `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`,
   `SMTP_USER`= your Brevo login email, `SMTP_PASS`= the SMTP key.

### Step 5.2 — Add the mail settings

Add to your local `.env` **and** to the App Hosting backend env vars (step 6).
`ADMIN_EMAIL` is where notifications land (the client's address); `SMTP_*` is
who sends them (your account from step 5.1):

```env
ADMIN_EMAIL=Monikak@spgroupcorps.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your gmail, or Brevo login email for Option B>
SMTP_PASS=<gmail app password, or Brevo SMTP key for Option B>
```

Restart the dev server after editing local `.env`.

### Step 5.3 — Test it

1. Submit the contact form → within a minute, `Monikak@spgroupcorps.com`
   receives "New website enquiry — …" with every field, and Reply-To set to
   the visitor (hit Reply to answer them directly).
2. Submit a test application on `/careers` → "New job application — …"
   arrives with all fields plus the resume link (if attached).
3. If no mail arrives but Firestore has the entry, check `.env` values and the
   server console for `[email]` warnings — the password or SMTP user is wrong.

---

## 6. Hosting — publish the full website on Firebase

This site is **server-rendered** (every page is rendered by a Node server, and
there is no static `index.html`). So plain drag-and-drop **Firebase Hosting
alone cannot serve it** — the correct Firebase product is **App Hosting**,
which builds the repo from GitHub and runs the Node server for you, keeping
SSR, `/admin` login and form submissions fully working.

### Step 6.1 — Push the current changes to GitHub

App Hosting builds from Git, and every push to your tracked branch redeploys
automatically (the CI/CD flow in step 6.4). Your repo is already connected, so
you only need to push what's new.

1. **Move stray personal files out of the repo first.** Anything inside the
   project folder gets committed by `git add .` — e.g. a `.docx` saved under
   `src/assets/` does not belong in the website (it bloats every clone and
   deploy). Move such files to your Documents folder. Never commit `.env`
   (real keys) — it is already in `.gitignore`; only `.env.example` is tracked.
2. Review what's about to go up:

```bash
git status --short
```

3. Commit and push:

```bash
git add .
git commit -m "Admin tabs, resume upload, gallery uploads, email notifications"
git push origin main
```

4. Confirm on github.com that the new files (`firebasesetup.md`,
   `src/lib/notify.ts`, `netlify.toml` if present, `public/TeamImages/`, …)
   are visible on the `main` branch.

### Step 6.2 — Files already in the repo (just verify)

Because this project uses TanStack Start (not Next.js/Angular), App Hosting
needs a tiny descriptor telling it how to start the production server. These
are already committed — just confirm they exist:

- `scripts/apphosting-bundle.mjs` + `"postbuild"` in `package.json` → every
  `npm run build` writes `.apphosting/bundle.yaml` (`runCommand: node
.output/server/index.mjs`).
- `apphosting.yaml` → build behavior only (`NITRO_PRESET=node-server`).
  ⚠️ Never put real keys in this file — GitHub's secret scanner flags
  committed API keys. All real values live in the backend's **Settings →
  Environment variables** instead (list below, step 6.3).
- `.gitignore` ignores `.apphosting/`, `dist/`, `.output/` (all regenerated).

Verify locally (proves the bundle works before involving Firebase):

```bash
NITRO_PRESET=node-server npm run build
cat .apphosting/bundle.yaml
node .output/server/index.mjs   # serves on PORT (default 3000) — open it, click around
```

### Step 6.3 — Deploy from CLI + link GitHub (one time)

You deploy from your machine with the CLI, and link the GitHub repo in the
same flow — after this, every `git push` to `main` redeploys automatically
(step 6.4). Your Firebase project ID is **`spsecurities-2a6b0`**.

1. Install and log in (needs firebase-tools v14.4+):

```bash
npm install -g firebase-tools
firebase login
```

2. From the project root, point the CLI at your project:

```bash
firebase use --add
# select spsecurities-2a6b0, alias: default
```

3. Initialise App Hosting (creates `firebase.json` if missing):

```bash
firebase init apphosting
```

- Use the existing project `spsecurities-2a6b0`.
- Create a **new backend** → id `spsecurities-webapp` (already created via CLI) → region `asia-southeast1`.
- When asked, **connect GitHub** → select
  `durgeshsahu10/SPSecurities-Facilities` → branch `main`. This link is what
  makes future pushes auto-deploy; the CLI deploy below does not need it, but
  CI/CD does.

4. Store the mail password as a secret (skip for now if you haven't created
   the Gmail App Password yet — emails stay disabled until you do, nothing
   else breaks):

```bash
firebase apphosting:secrets:set SMTP_PASS
# paste the 16-character app password when prompted
```

`SMTP_USER` (your Gmail) is set alongside the others below — it is not secret.

5. Set the backend environment variables **in console** (never in git —
   GitHub flags committed keys). Backend `spsecurities-webapp` → **Settings →
   Environment variables** → add each with availability **Build and runtime**:

```
VITE_FIREBASE_API_KEY        (from your local .env)
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
ADMIN_EMAIL=Monikak@spgroupcorps.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your Gmail, when ready>
```

(`SMTP_PASS` comes from the step-4 secret, not from this list. `VITE_*` must
be present at **build** time — the cloud build bakes them into the site's JS.)

6. Push the latest code (backend builds whatever is on GitHub, so push first):

```bash
git add -A
git commit -m "Firebase hosting setup"
git push origin main
```

7. Deploy:

```bash
firebase deploy --only apphosting
```

Watch the terminal: it uploads source → cloud build (`npm install`,
`npm run build` + `postbuild`) → starts the server → prints your
live `https://spsecurities-webapp--<...>.web.app` URL. 8. Open the URL and click through: home, services, gallery, careers, contact,
`/admin` login. If anything fails, the previous version (if any) keeps
serving — check the backend's **build logs** in console → App Hosting.

> Prefer clicks over CLI? Console alternative: **Build → App Hosting → Create
> backend**, connect the same repo/branch, add the same env vars from step 5
> above with availability **Build and runtime** (SMTP_PASS as a secret),
> deploy. Both paths produce the identical backend.

### Step 6.4 — Verify auto CI/CD (push-to-live)

From now on the flow is simply: edit → commit → push → live. Prove it once:

1. Make a tiny visible change (e.g. one word on the home page).
2. Commit and push:

```bash
git add -A
git commit -m "Test auto deploy"
git push origin main
```

3. Firebase console → **Build → App Hosting → `spsecurities-webapp`** → watch a new
   **Rollout** appear within a minute, go through _Building → Ready_.
4. Open the live URL (hard-refresh / incognito to bypass cache) → your change
   is live. Typical build time: 3–8 minutes.

Day-to-day rules for this flow:

- Push only to `main` when you want it live — every `main` push deploys.
- A red/failed rollout changes nothing: the previous live version keeps
  serving. Open the failed rollout's **build logs**, fix locally, push again.
- To undo a bad deploy: backend → **Rollouts** → find the last good build →
  **Roll back** (or `git revert` + push).
- Never commit `.env`, `node_modules/`, `dist/`, `.output/`, `.netlify/`
  (all already in `.gitignore`).

### Step 6.5 — Custom domain (optional, recommended)

1. App Hosting backend → **Settings → Custom domains → Add domain** →
   `spgroupcorp.com` (and `www.spgroupcorp.com`).
2. Add the TXT/A records Firebase shows at your domain registrar, wait for
   verification.
3. Afterwards, confirm `public/sitemap.xml` and `public/robots.txt` use the
   final domain, and submit the sitemap in Google Search Console.

---

## 7. Final verification checklist

- [ ] `/admin` in incognito shows the sign-in form (not the console).
- [ ] Signing in with the step-3 account opens the job console, no demo banner.
- [ ] Adding a job on `/admin` shows it on `/careers` within seconds.
- [ ] Uploading a photo on `/admin` → Gallery photos shows it on `/gallery`
      under the chosen tag within seconds; deleting it removes it from both
      Firestore and Storage.
- [ ] `/contact` submission appears in Firestore → `enquiries`, and an email
      arrives at `Monikak@spgroupcorps.com`.
- [ ] `/careers` application appears in Firestore → `applications` **and** in
      `/admin` → Applications tab, and an email arrives at the admin address.
- [ ] A role with "Require resume upload" ticked shows a mandatory resume field
      (PDF/Word only); other roles show no upload field.
- [ ] Gallery uploads over 5 MB are rejected with an error message.
- [ ] Signed-out form submissions still work (rules allow public `create`).
- [ ] Live site (App Hosting URL): drawer menu, all pages, and `/admin` login work.
- [ ] Auto CI/CD proven once: a test push to `main` produced a green rollout and went live (step 6.4).
- [ ] `.env` (real keys) was never committed to git (it's in `.gitignore`).

---

## 8. Troubleshooting

| Symptom                                          | Cause → Fix                                                                                                                                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yellow "Demo mode" banner on `/admin`            | `.env` keys missing/wrong, or dev server not restarted after editing `.env` → recheck step 1.3–1.4.                                                                          |
| `Missing or insufficient permissions` on submit  | Firestore rules not published, or published to the wrong project → step 2.2, press **Publish**.                                                                              |
| `/admin` login says invalid credentials          | User doesn't exist or wrong project → step 3.2 (check you're in `sp-securities-facilities`).                                                                                 |
| App Hosting build fails on `vite build`          | Backend missing the step-6.3 env vars, or wrong Node version → add all six `VITE_*` vars + `NITRO_PRESET=node-server`, rebuild.                                              |
| Live site loads but buttons/forms do nothing     | Page served without the Node server (static-only deploy) → must deploy via **App Hosting** (step 6), not plain Firebase Hosting.                                             |
| Resume/photo upload fails                        | Storage rules not published, file over 5 MB, or wrong type (resume must be PDF/Word, photos must be images) → step 4.2.                                                      |
| No admin email arrives (but Firestore has entry) | SMTP vars missing/wrong → check `SMTP_HOST/USER/PASS` in `.env` (local) and backend env (hosting); server log shows `[email]` warnings.                                      |
| GitHub flags a committed API key                 | Never commit keys — keep values in backend Settings → Environment variables (step 6.3.5), restrict the key in Cloud Console (HTTP referrers + APIs), then resolve the alert. |
| Locked out of admin                              | Any remaining admin can reset via Authentication → Users → Reset password; keep two admin accounts so one lockout never blocks hiring posts.                                 |

---

## 9. Quick reference

- Firebase project: `sp-securities-facilities` · Firestore/Storage region: `asia-south1`
- Collections: `jobs` (public read, admin write) · `enquiries`, `applications` (public create, admin read) · `gallery` (public read, admin write)
- Storage folders: `resumes/` (private) · `gallery/` (public read)
- Admin: Email/Password provider → user `admin@spgroupcorp.com` → sign in at `/admin` (4 tabs: jobs, applications, enquiries, gallery; CSV download on inbox tabs; auto sign-out after 120 min idle)
- Notifications: Gmail App Password → `ADMIN_EMAIL`/`SMTP_*` env → mails to `Monikak@spgroupcorps.com` on every application + enquiry
- Hosting: App Hosting backend `spsecurities-webapp` (`asia-southeast1`, Node 24) → `NITRO_PRESET=node-server` → `node .output/server/index.mjs`
