import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, HeartHandshake } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import teamImage from "@/assets/team-briefing.jpg";
import { company, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About SP Securities — Professional Security Company in Pune" },
      {
        name: "description",
        content:
          "Learn about SP Securities, a professional security company providing responsible protection solutions for residential, commercial and industrial premises.",
      },
      { property: "og:title", content: "About SP Securities" },
      {
        property: "og:description",
        content:
          "A Pune-based security and facility management partner with PSARA compliance, trained manpower and audited service delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your Safety. Our Responsibility."
        description="Reliable, professional and responsible security solutions designed to protect people, properties, businesses and valuable assets."
        image={teamImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Professional protection shaped around your premises"
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                SP Securities is a professional security services company
                focused on delivering dependable security and protection
                solutions for residential, commercial, corporate, industrial,
                retail and other premises.
              </p>
              <p>
                We understand that security is more than simply having a
                security guard at your premises. It is about creating a safe
                environment through professional personnel, disciplined
                processes, continuous monitoring, quick response and responsible
                service.
              </p>
              <p>
                We work closely with every client to understand their
                requirements and provide suitable manpower and security
                solutions based on the nature of their property, operations and
                risk environment. Our goal is to give every client confidence
                and peace of mind.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "PSARA licensed operations",
                "PF, ESIC & minimum-wage compliant",
                "Police-verified personnel",
                "24x7 control room escalation",
                "In-house training academy",
                "Dedicated account management",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-gold-deep" />{" "}
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={teamImage}
            alt="SP Securities and Facilities staff during a morning briefing"
            width={1600}
            height={1008}
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                t: "Our mission",
                d: "To protect people, properties, businesses and valuable assets through professional personnel, disciplined processes and responsible service.",
              },
              {
                icon: Eye,
                t: "Our vision",
                d: "To be a trusted security partner known for dependable protection, quick response and service tailored to each client.",
              },
              {
                icon: HeartHandshake,
                t: "Our values",
                d: "Discipline, alertness, professionalism, integrity and customer satisfaction guide every assignment.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <span className="inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <dt className="font-display text-3xl font-semibold text-gradient-gold">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
