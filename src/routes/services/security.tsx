import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import securityImage from "@/assets/security-services.jpg";
import { securityServices } from "@/data/site";

export const Route = createFileRoute("/services/security")({
  component: SecurityServicesPage,
  head: () => ({
    meta: [
      { title: "Security Guard Services in Pune & Mumbai | SP Securities" },
      {
        name: "description",
        content:
          "Professional security services in Pune and Mumbai: manned guarding, industrial, residential and commercial security, private detective, bouncer and event security.",
      },
      {
        name: "keywords",
        content:
          "security guard services Pune, security agency Mumbai, industrial security, residential security, private detective, bouncer services",
      },
      {
        property: "og:title",
        content: "Security Services in Pune & Mumbai | SP Securities",
      },
      {
        property: "og:description",
        content:
          "Professional security personnel and tailored protection solutions for offices, societies, industry, retail and events.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/security" },
    ],
    links: [{ rel: "canonical", href: "/services/security" }],
  }),
});

function SecurityServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Security Division"
        title="Security services that hold up to a real audit"
        description="Every officer is police-verified, PSARA trained and supervised by ex-servicemen. Rosters, patrol logs and incident reports are shared with you every month."
        image={securityImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title={`${securityServices.length} security capabilities, one responsible team`}
          description="Pick a single service or combine them into a site-wide security plan."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityServices.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Training"
            title="What every SP officer completes before deployment"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Police verification and Aadhaar-based identity check",
              "PSARA-aligned basic and refresher training",
              "Fire fighting, first aid and evacuation drills",
              "Access control, frisking and visitor protocol",
              "Client-specific SOP and site induction",
              "Grooming, drill and communication etiquette",
            ].map((t) => (
              <div
                key={t}
                className="flex gap-3 rounded-lg border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <p className="text-sm text-ink-soft">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
