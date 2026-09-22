import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/site";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy | SP Securities" },
      {
        name: "description",
        content:
          "How SP Securities uses cookies and similar technologies on this website, and how you can control them.",
      },
      { property: "og:title", content: "Cookie Policy | SP Securities" },
      { property: "og:description", content: "Cookie usage and your choices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="21 September 2026"
      sections={[
        {
          heading: "1. What cookies are",
          body: [
            "Cookies are small text files placed on your device when you visit a website. They help the site work correctly and help us understand how visitors use it.",
          ],
        },
        {
          heading: "2. Cookies we use",
          body: [
            "Essential cookies: required for page navigation, form submission and secure admin access. These cannot be switched off.",
            "Analytics cookies: help us measure page visits and improve content. They collect aggregated, non-identifying information.",
            "Preference cookies: remember basic choices such as previously entered form details on your device.",
          ],
        },
        {
          heading: "3. Third-party services",
          body: [
            "We use Google Firebase for hosting and form storage, Google Maps for the location map and may use Google Analytics for traffic measurement. These services may set their own cookies under their respective policies.",
          ],
        },
        {
          heading: "4. Managing cookies",
          body: [
            "You can delete or block cookies through your browser settings. Blocking essential cookies may prevent forms and some pages from working as intended.",
          ],
        },
        {
          heading: "5. Questions",
          body: [
            `For any question about this policy, write to ${company.email}.`,
          ],
        },
      ]}
    />
  );
}
