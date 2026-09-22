import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import facilityImage from "@/assets/facility-services.jpg";
import { facilityServices } from "@/data/site";

export const Route = createFileRoute("/services/facilities")({
  component: FacilityServicesPage,
  head: () => ({
    meta: [
      {
        title:
          "Housekeeping & Facility Services in Pune & Mumbai | SP Securities",
      },
      {
        name: "description",
        content:
          "Housekeeping and facility services in Pune and Mumbai for residential societies and commercial properties, including project cleaning and carpet and chair shampooing.",
      },
      {
        name: "keywords",
        content:
          "facility management company Pune, housekeeping services Mumbai, pest control Pune, office cleaning services, integrated facility management India",
      },
      {
        property: "og:title",
        content: "Facilities Services in Pune & Mumbai | SP Facilities",
      },
      {
        property: "og:description",
        content:
          "Housekeeping, project cleaning, carpet and chair shampooing, technical services and pest control for residential and commercial properties.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/facilities" },
    ],
    links: [{ rel: "canonical", href: "/services/facilities" }],
  }),
});

function FacilityServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities Division"
        title="Professional housekeeping for well-kept properties"
        description="Property maintenance and housekeeping solutions for residential societies and commercial spaces, delivered by trained teams."
        image={facilityImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Soft services, technical services and staffing"
          description="Choose individual services, or hand over the whole facility under one integrated contract."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilityServices.map((s) => (
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
            eyebrow="Delivery model"
            title="How quality is measured, not promised"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Checklists on every shift",
                d: "Zone-wise cleaning and maintenance checklists signed off by the site supervisor each shift.",
              },
              {
                t: "Planned preventive maintenance",
                d: "Annual PPM calendar for HVAC, electrical, plumbing and DG sets to avoid unplanned downtime.",
              },
              {
                t: "Monthly scorecard",
                d: "Attendance, complaint closure time, consumable usage and audit scores in one shared report.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <h3 className="text-lg font-semibold text-ink">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
