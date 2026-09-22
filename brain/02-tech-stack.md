# Project Brain — Technology, Frameworks and Libraries

## Runtime & framework

| Layer           | Choice                         | Notes                                                  |
| --------------- | ------------------------------ | ------------------------------------------------------ |
| UI library      | **React 19**                   | Function components + hooks only                       |
| Language        | **TypeScript 5.8**             | Strict typing across data, routes, components          |
| Framework       | **TanStack Start v1**          | Full-stack React framework, SSR-capable                |
| Router          | **TanStack Router**            | File-based routing in `src/routes`, type-safe `<Link>` |
| Build tool      | **Vite 8**                     | Dev server on port 8080, HMR                           |
| Package manager | npm / bun (`bun.lock` present) |

## Styling

- **Tailwind CSS v4** — CSS-first configuration, no `tailwind.config.js`.
- All tokens live in `src/styles.css` (`@theme inline`, `:root`, `@utility`).
- **tw-animate-css** for animation helpers.
- **shadcn/ui** primitives (Radix UI based) available in `src/components/ui`.
- `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`.

## Icons & UX

- **lucide-react** for every icon (Shield, Sparkles, Cctv, Wrench, etc.).
- **sonner** toasts, mounted once in `src/routes/__root.tsx`.

## Backend / cloud

- **Firebase**
  - _Firestore_: `jobs`, `enquiries`, `applications` collections.
  - _Authentication_: Email/Password for the `/admin` console.
  - _Storage_: optional, for resumes and gallery uploads.
  - _Hosting_ (or App Hosting for SSR).
- Config is read from `VITE_FIREBASE_*` env vars in `src/lib/firebase.ts`.
- **Graceful demo mode**: if no keys are present, `isFirebaseConfigured` is false and the app
  uses seeded/localStorage job data so the site never breaks.

## Data & forms

- No form library needed — native forms with `FormData`, validated by HTML constraints.
- `zod` and `react-hook-form` are installed and available for future complex forms.
- **@tanstack/react-query** is wired in the router context for future data fetching.

## Media

- Hero and section photography: AI-generated photorealistic images stored in `src/assets`
  (`hero-security.jpg`, `security-services.jpg`, `facility-services.jpg`, `team-briefing.jpg`).
- Gallery: Unsplash CDN images referenced in `src/data/site.ts`.
- Company logo: CDN asset pointer `src/assets/sp-logo.jpg.asset.json`.
- Favicon: `public/favicon.png` (cropped from the logo crest).
