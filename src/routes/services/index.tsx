import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import securityImage from "@/assets/security-services.jpg";
import facilityImage from "@/assets/facility-services.jpg";
import heroImage from "@/assets/hero-security.jpg";
import { securityServices, facilityServices } from "@/data/site";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Our Services — Security & Housekeeping | SP Securities" },
      {
        name: "description",
        content:
          "Explore SP Securities services: professional guarding, industrial and residential security, private detective, bouncer and housekeeping services in Pune and Mumbai.",
      },
      { property: "og:title", content: "Our Services | SP Securities" },
      {
        property: "og:description",
        content:
          "Security and facility management services for offices, societies, industry and retail across Pune and Mumbai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your site needs, from the gate to the top floor"
        description="Two specialised divisions working to one service-level agreement — so security cover and facility upkeep never fall between two vendors."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <DivisionCard
            to="/services/security"
            image={securityImage}
            title="Security Services"
            count={securityServices.length}
            text="Manned guarding, industrial, residential and commercial security, event teams, personal protection, private detective and bouncer services."
          />
          <DivisionCard
            to="/services/facilities"
            image={facilityImage}
            title="Facilities Services"
            count={facilityServices.length}
            text="Housekeeping for residential societies and commercial properties, project cleaning, carpet and chair shampooing, technical services and pest control."
          />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="How we start"
            title="A four-step onboarding built for speed"
            align="center"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                t: "Site survey",
                d: "A detailed risk and manpower assessment of your premises, usually within 48 hours.",
              },
              {
                t: "Deployment plan",
                d: "Shift roster, post-wise duties, uniform and equipment list with transparent costing.",
              },
              {
                t: "Mobilisation",
                d: "Verified staff inducted, trained on your SOPs and deployed — typically in 3–7 days.",
              },
              {
                t: "Review & audit",
                d: "Monthly audits, attendance reports and a named account manager on call.",
              },
            ].map((s, i) => (
              <li
                key={s.t}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="font-display text-3xl font-semibold text-gradient-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function DivisionCard({
  to,
  image,
  title,
  text,
  count,
}: {
  to: string;
  image: string;
  title: string;
  text: string;
  count: number;
}) {
  return (
    <Link
      to={to}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
    >
      <img
        src={image}
        alt={title}
        width={1600}
        height={1008}
        loading="lazy"
        className="h-60 w-full object-cover"
      />
      <div className="p-7">
        <p className="eyebrow">{count} services</p>
        <h2 className="mt-3 text-2xl font-semibold text-ink">{title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep group-hover:gap-3">
          Explore <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
